#!/usr/bin/env bash
# 批量压缩 R2 桶 blog 里的媒体原图（关闭 Images 绑定后的体积优化）。
# 作用：把每张图缩到最长边 1920px、quality 82、去掉 EXIF，再覆盖上传。
# 原图先备份到 ./media-backup/，不会丢失。
# 文件清单来自 D1 的 media 表（wrangler 无 r2 object list 子命令）。
#
# 前提：本机已 wrangler login（或有 CLOUDFLARE_API_TOKEN），并安装 ImageMagick 7（magick）。
# 用法：bash scripts/recompress-media.sh          # 试运行（只列出压缩效果，不上传）
#       bash scripts/recompress-media.sh --apply  # 实际执行
set -euo pipefail

BUCKET=blog
BACKUP_DIR=media-backup
WORK_DIR=$(mktemp -d)
trap 'rm -rf "$WORK_DIR"' EXIT
APPLY=false
[[ "${1:-}" == "--apply" ]] && APPLY=true

mkdir -p "$BACKUP_DIR"

keys=$(npx wrangler d1 execute blog --remote --json \
  --command "SELECT storage_key FROM media" \
  | python3 -c 'import sys,json; print("\n".join(r["storage_key"] for r in json.load(sys.stdin)[0]["results"]))')

for key in $keys; do
  case "$key" in
    *.jpg|*.jpeg|*.png|*.webp) ;;
    *) echo "skip (not an image): $key"; continue ;;
  esac

  backup="$BACKUP_DIR/$key"
  if [[ ! -f "$backup" ]]; then
    npx wrangler r2 object get "$BUCKET/$key" --remote --pipe > "$backup"
  fi

  before=$(stat -c%s "$backup")
  out="$WORK_DIR/$key"
  magick "$backup" -auto-orient -resize '1920x1920>' -strip -quality 82 "$out"
  after=$(stat -c%s "$out")
  echo "$key: $((before/1024))KB -> $((after/1024))KB"

  if $APPLY && [[ $after -lt $before ]]; then
    npx wrangler r2 object put "$BUCKET/$key" --remote --file "$out" > /dev/null
    echo "  uploaded"
  fi
done

$APPLY || echo -e "\n试运行完成（未上传）。确认压缩效果后加 --apply 实际执行。"

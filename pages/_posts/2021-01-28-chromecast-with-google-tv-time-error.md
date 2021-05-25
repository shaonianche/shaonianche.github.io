---
layout: post
title: Chromecast with Google TV 断电重启后时间错误
keywords: Chromecast with Google TV GoogleTV Chromecast NTP 
description: >-
  总体来讲，Chromecast with Google TV 的使用体验还算不错，如果你能解决掉中国特色的网络问题的话。
date: 2021-01-28
updated: 2021-01-28
assets:
  cover: ../_assets/uploads/2021/01/2021-01-28.jpg
  feature: ../_assets/uploads/2021/01/2021-01-28-1.jpg
categories:
  - GoogleTV 
  - 科技
feature: true
---

Chromecast with Google TV [^1] 在大陆使用的时候会出现时间错误，导致连上 WiFi 之后网络受限。通过设置手动调整时间后可以解除 WiFi 网络受限的问题，但断电重启之后系统时间又会被重置。

这是由于 Chromecast with Google TV 默认的 NTP 服务器[^2] [time.android.com](https://android.googlesource.com/platform/frameworks/base/+/oreo-r6-release/core/res/res/values/config.xml#1719) （Google 的安卓代码库  https://android.googlesource.com/platform/frameworks/base/+/oreo-r6-release/core/res/res/values/config.xml#1719 ）

```xml
<string translatable="false" name="config_ntpServer">time.android.com</string>
```

android.com 在国内无法正常访问，所以无法同步时间。所以我们需要通过 adb shell 将 NTP 的服务器设置为国内的服务器。

```bash
adb shell settings put global ntp_server ntp.aliyun.com
```

或者

```bash
adb shell settings put global ntp_server ntp1.aliyun.com
```

阿里云的 NTP 服务器 [^3]选择一个设置就行。

其中有个疑惑是：Linux/Mac 的 NTP 配置都是在 /etc/ntp.conf  文件里面，但是 Android/Google TV 的NTP 配置我粗略的找了一下没找到配置文件，所以我也不知道这段配置代码最终写入到了哪个配置文件里面。

完整的操作顺序：

1. 将 Chromecast with Google TV USB 口连接到电脑上，HDMI 接入电视/显示器
2. 调整系统时间为正确时间后，打开通过网络同步时间
3. 在设置 - 关于 - Android TV 操作系统版本 连续点击七次，开启开发者选项
4. 返回上一层开发者选项 - 开启 USB 调试
5. 确保电脑上安装好了 [ADB](https://developer.android.com/studio/command-line/adb?hl=zh-cn) 

```bash
adb devices
```

在 manjaro linux 下会提示权限问题，需要 sudo 权限

```bash
sudo adb devices
```

如果未列出设备或连接错误则：

```
adb kill-server
adb start-server
adb devices
```

在 Chromecast with Google TV 会提示 “是否允许网络调试”，若无响应请确认第 4 步的【开启USB调试】，允许网络调试后在命令行输入：

```bash
adb shell settings put global ntp_server ntp.aliyun.com #设置NTP服务器为阿里云 NTP 
```

Android 的 adb 调试在 Android Developers 的 [Android 调试桥 (adb)](https://developer.android.com/studio/command-line/adb?hl=zh-cn) 有详细介绍

### Chromecast with Google TV 的使用体验

想要体验首先需要具备一定的家庭网络条件，像 Chromecast with Google TV、PS4、Switch的一些服务都需要国际网络，所以还是直接路由器连接比较好，这就需要各种系统（OpenWrt、梅林、老毛子）的路由器了，如果不嫌麻烦也可以通过 proxy 工具来实现。

总的来说：

- 原生系统确实香！交互跟流畅度不在话下
- 可以通过 Adb Shell 来安装国内应用，斗鱼、爱奇艺、腾讯、BliBli适配都还可以
- 盒子没有电视系统那些乱七八糟的广告，适合用来给适龄儿童看电视
- 缺点是有一点技术门槛



[^1]: Chromecast with Google TV https://store.google.com/product/chromecast?srp=/product/chromecast_google_tv
[^2]: Chromecast with Google TV 默认的 NTP 服务器  https://android.googlesource.com/platform/frameworks/base/+/oreo-r6-release/core/res/res/values/config.xml#1719 
[^3]: 阿里云公网的 NTP 服务器  https://help.aliyun.com/document_detail/92704.html


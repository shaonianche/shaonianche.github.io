<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <section class="tach-layout-header">
        <div class="container horizon-gap">
          <h1> {{ page.attributes.title }}</h1>
          <h6>{{ getHaiku() }}</h6>
        </div>
      </section>
      <section class="tach-wrapper tach-blog-items">
        <div class="container post-list columns is-mobile is-multiline">
          <article
            v-for="post in page.posts"
            :key="post.attributes.permalink"
            class="post-card-wrap column is-4-desktop is-6-tablet is-12-mobile">
            <div class="post-card post-list-item">
              <div class="post-card-image image is-3by2">
                <saber-link class="link" :to="post.attributes.permalink">
                  <saber-image
                    class="image"
                    :src="post.attributes.assets.cover"
                    :alt="post.attributes.title" />
                  <span class="overlay"></span>
                </saber-link>
              </div>
              <div class="post-card-info">
                <div class="post-meta">
                  <time :datetime="post.attributes.createdAt">
                    {{ date(post.attributes.createdAt, '{DD} {MMMM} {YYYY}') }}
                  </time>
                </div>
                <h4 class="post-title">
                  <saber-link :to="post.attributes.permalink" :title="post.attributes.title">
                    {{ post.attributes.title || post.attributes.permalink }}
                  </saber-link>
                </h4>
                <div class="post-excerpt" v-if="post.attributes.description">
                  <small> {{ post.attributes.description }}</small>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Pagination :page="page" v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Pagination from '../components/Pagination.vue'
import { date, head } from '../utils'

export default {
  props: ['page'],
  data () {
    return {
      pageHaiku: [
        '成长，就是在不断地失去。',
        '我，在遇见你之前一直都是死的！',
        '生命里有三样东西不可以少，空气，水，音乐。',
        '你踏上飞船，离开了这个星球，带走了一切，除了你的人性。',
        '这个世界上没有什么是永远有效的，知道吗？',
        '夜晚会把人变得残酷，也会把人变得正直，还会把人变得不对劲，把人变得轻率。——伊坂幸太郎《家鸭与野鸭的投币式寄物柜》',
        '我没法像个农民那样善良，只是麦子还在对着太阳疯狂的生长',
        '“像往常一样”，这是何等幸福的事啊。——是枝裕和《如父如子》',
        '多拿些酒来，因为生命只是乌有。——佩索阿《有些疾病》',
        '当我们安然走过这世界，才能真正明白，人生来为了喜悦也为了悲伤。 ——阿加莎·克里斯蒂《无尽长夜》',
        '我们热爱自己的生命，但这不是因为我们已经习惯了活着，而是因为我们已经习惯了爱。——尼采《查拉图斯特拉如是说》',
        '当我们安然走过这世界，才能真正明白，人生来为了喜悦也为了悲伤。 ——阿加莎·克里斯蒂《无尽长夜》',
        '欲买桂花同载酒，终不似，少年游。 ——刘过《唐多令》'
      ]
    }
  },
  components: {
    Header,
    Footer,
    Pagination
  },
  methods: {
    date,
    getHaiku () {
      return this.pageHaiku[Math.floor(Math.random() * this.pageHaiku.length)]
    }
  },
  head () {
    return head(this)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';
.tach-layout-header {
  padding-top: 1rem;

  h6 {
    font-size: 80%;
    font-weight: 400;
  }
}

.tach-blog-items {
  padding: 1rem 0;
}

.post-list {
  .post-card {
    width: 100%;
    height: 100%;
    list-style: none;

    .post-card-image {
      position: relative;
      background-color: #fafafa;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;

      a.link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .post-card-info {
      padding: 0.4445rem;
      word-break: break-all;
      text-align: justify;

      .post-meta {
        color: var(--color-text-secondary);
        display: block;
        font-size: $font-size-small;
        font-style: italic;
      }

      .post-title {
        padding: 0.4445rem 0;
        display: block;
        margin: 0;

        a {
          color: var(--color-text-primary);

          &:hover {
            color: var(--color-link);
            text-decoration: none;
          }
        }
      }

      .post-excerpt {
        position: relative;
        max-height: 4rem;
        overflow: hidden;
        color: var(--color-text-secondary);
        line-height: 1.3rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        // fade out ellipsis
        &:after {
          content: "";
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 1.3em;
          background: linear-gradient(to right, var(--color-background-transparent), var(--color-background) 80%);
        }
      }
    }
  }
}

.pagination {
  .prev-wrap {
    display: flex;
    justify-content: flex-start;
  }
  .next-wrap {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: flex;
    align-items: center;
    .icon {
      padding-top: 2px;
    }
    .text {
      margin: 0 $gap-s;
    }
  }
}
</style>

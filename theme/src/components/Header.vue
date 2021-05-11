<template>
  <header class="tach-header">
    <div class="tach-wrapper">
      <nav class="navbar">
        <div class="container">
          <div class="column navbar-brand">
            <saber-link
              class="navbar-item site-title"
              :to="$themeConfig.header.logo_url"
              v-text="$themeConfig.title || $siteConfig.title">
            </saber-link>
            <link rel="stylesheet" href="//unpkg.com/heti/umd/heti.min.css">
            <span
              @click="toggleNavbarMenu()"
              ref="burger"
              class="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            v-if="$themeConfig.header.nav"
            ref="menu"
            class="column navbar-menu">
            <div class="navbar-end">
              <saber-link
                class="navbar-item"
                v-for="(item, index) in $themeConfig.header.nav"
                :key="index"
                :to="item.path"
                v-text="item.name">
              </saber-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavbarMenu () {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    }
  }
}
</script>

<script>
  (function(d) {
    var config = {
      kitId: 'mfy3ycj',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';
// Reset bulma navbar color
.navbar {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}
// Reset bulma navbar item color
.navbar-item,
.navbar-link,
.navbar-burger {
  color: var(--color-text-primary);
}
// Reset bulma navbar a element color
.navbar-item:focus,
.navbar-item:hover,
.navbar-burger:focus,
.navbar-burger:hover {
  background-color: var(--color-accent-0);
  color: var(--color-link);
}
// Add navbar shadow
nav {
  box-shadow: 0px 5px 60px 0px rgba(100, 100, 100, 0.1);
}
// Tweak navbar padding
@media screen and (max-width: $navbar-breakpoint) {
  .navbar-menu {
    background-color: inherit;
    padding: $column-gap;
  }
}
</style>

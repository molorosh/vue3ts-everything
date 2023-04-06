<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div id="completePage">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <div id="pageContent">
      <RouterView />
    </div>

    <footer>
      <FooterBar msg="TBD: corporate message goes here..." />
    </footer>
  </div>
</template>

<style scoped>
#completePage {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
}

#pageContent {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

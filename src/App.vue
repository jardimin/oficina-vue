<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
        <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
          <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <router-link v-if="Object.keys($route.params).length === 0" class="mdl-navigation__link" active-class="is-active" to="/passados">Passados</router-link>
            <router-link v-if="Object.keys($route.params).length === 0" class="mdl-navigation__link" active-class="is-active" to="/proximos">Próximos</router-link>
            <router-link v-if="Object.keys($route.params).length !== 0" class="mdl-navigation__link" active-class="is-active" to="/">Voltar</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer mdl-layout--small-screen-only">
        <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <router-link v-if="Object.keys($route.params).length === 0" class="mdl-navigation__link" active-class="is-active" to="/passados">Passados</router-link>
          <router-link v-if="Object.keys($route.params).length === 0" class="mdl-navigation__link" active-class="is-active" to="/proximos">Próximos</router-link>
            <router-link v-if="Object.keys($route.params).length !== 0" class="mdl-navigation__link" active-class="is-active" to="/">Voltar</router-link>
        </nav>
      </div>

      <transition name="fade">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>
<style>
.portfolio-header {
  min-height: 45px;
}

</style>

<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <transition name="img-fade">
      <div v-if="img !== ''" class="mdl-card__media">
        <img class="article-image" :src="img" border="0" alt="">
      </div>
    </transition>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{title}}</h2>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" :to="'/evento/' + ev.id">Ver mais</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ev: Object
  },

  data () {
    return {
      img: ''
    }
  },

  computed: {
    title: function () {
      return this.ev.title.slice(0, 15) + '...'
    }
  },

  created: function () {
    this.$nextTick( () => {
      Trello.get(`/cards/${this.ev.id}/attachments`, (data) => {
        this.img = data[0].url
      })
    })
  }
}
</script>

<style>
.img-fade-enter-active, .img-fade-leave {
  transition: opacity .5s;
  opacity: 1;
}
.img-fade-leave-active, .img-fade-enter {
  transition: opacity .5s;
  opacity: 0;
}
img.article-image {
  width: auto;
  height: 100%;
}
.mdl-card__media {
  height: 185px;
}
</style>

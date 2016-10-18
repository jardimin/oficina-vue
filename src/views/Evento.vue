<template>
  <main class="mdl-layout__content">
    <div v-if="load" class="mdl-grid portfolio-max-width">
      <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{title}}</h2>
        </div>
        <div class="mdl-card__media">
          <img class="article-image2" :src="img" border="0" alt="">
        </div>
        <div class="mdl-card__supporting-text">
          <strong>Includes</strong>
          <span>Design, UX and Frontend Development</span>
        </div>
        <div class="mdl-grid portfolio-copy">
          <div class="mdl-cell mdl-cell--12-col" v-html="desc">{{desc}}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import marked from 'marked'

export default {
  name: 'evento',
  data () {
    return {
      load: false,
      title: '',
      img: '',
      desc: ''
    }
  },

  created: function () {
    this.$nextTick( () => {
      Trello.get(`/cards/${this.$route.params.id}`, (data) => {
        this.title = data.name
        this.desc = marked(data.desc)
        Trello.get(`/cards/${this.$route.params.id}/attachments`, (data) => {
          this.img = data[0].url
          this.load = true
        })
      })

    })
  }
}
</script>

<style>
.article-image2 {
  width: 100%;
  height: 100%;
}
</style>

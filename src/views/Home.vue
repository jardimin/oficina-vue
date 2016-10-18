<template>
  <main class="mdl-layout__content">
  <transition name="fade" mode="out-in">
    <div v-if="part" key="proximos" class="mdl-grid portfolio-max-width">
      <evento v-for="ev in proximos" :ev="ev"></evento>
    </div>

    <div v-else key="passados" class="mdl-grid portfolio-max-width">
      <evento v-for="ev in passados" :ev="ev"></evento>
    </div>
  </transition>
    

  </main>
</template>

<script>
import Evento from '../components/Evento.vue'
export default {
  name: 'home',

  data () {
    return {
      passados: [],
      proximos: [],
      part: true
    }
  },

  watch: {
    '$route' (to, from) {
      if (to.path === '/proximos') {
        this.part = true
      } else {
        this.part = false
      }
    }
  },

  methods: {
    getLists (id, list) {
      Trello.get(`/lists/${id}/cards`, (data) => {
        for (var i = 0; i < data.length; i++) {
          let obj = {
            title: data[i].name,
            desc: data[i].desc,
            id: data[i].id
          }
          list.push(obj)
        }
      })
    }
  },

  created: function () {
    this.$nextTick( () => {
      if (this.$route.path === '/proximos') {
        this.part = true
      } else {
        this.part = false
      }

      this.getLists('5805748e35651aada7c885f5', this.proximos)
      this.getLists('58057485d726a8dca7a388fe', this.passados)

    })
  },

  components: {
    Evento
  }
}
</script>

<style>
.fade-enter-active, .fade-leave {
  transition: opacity .5s, transform .5s;
  opacity: 1;
  transform: translateX(0px);
}
.fade-leave-active, .fade-enter {
  transition: opacity .5s, transform .5s;
  opacity: 0;
}
.fade-leave-active {
  transform: translateX(20px);
}
.fade-enter {
  transform: translateX(-20px);
}
</style>

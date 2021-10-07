<template>
  <div>
    <h2>{{ count }}</h2>
    <h2>{{ doubleCount }}</h2>
    <button @click="increment()">增加</button>
    <!-- <button @click="asyncInit()">增加</button> -->
    <button @click="init(5)">初始</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'doubleCount'
    ]),
    ...mapState([
      'count'
    ])
  },
  methods: {
    increment () {
      this.$store.commit('increment')
      // this.$store.dispatch('increment')
    },
    // ...mapActions([
    //   'increment',
    //   'asyncInitCount'
    // ]),
    ...mapMutations([
      'initCount'
    ]),
    init (initValue) {
      var payload = {
        initValue: initValue
      }
      this.initCount(payload)
    },
    asyncInit () {
      console.log('before asyncInitCount call')
      this.asyncInitCount()
      console.log('after asyncInitCount call')
    }
  }
}
</script>

<style scoped>
</style>

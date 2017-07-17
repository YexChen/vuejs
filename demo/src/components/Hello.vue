<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <counter v-bind:num = "num" v-on:incre= "increment" v-on:decre = "decrement"></counter>
    <p>parent number : {{num}}</p>
  </div>
</template>

<script>
import counter from './counter.vue'
export default {
  name: 'hello',
  data () {
    return {
      num : 10,
      msg: 'Welcome to Your Vue.js App '
    }
  },
  components : {
    counter
  },
  methods:{
    increment(){
        this.num++;
    },
    decrement(){
        this.num--;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

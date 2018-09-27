<template>
  <div class="todo-input">
      <input class="text-field" @keyup.enter='addTodo()' placeholder="Take a note" v-model="text" type="text"/>
      <button class="submit-button" :disabled='!addTodoPossible' @click="addTodo()">+</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoInput',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    addTodoPossible () {
      return this.text && this.text !== ''
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', {text: this.text, checked: false, createdAt: new Date(), editing: false})
      this.text = ''
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .todo-input
        display flex
        border-radius 2px
        padding 2px 8px
        background-color: rgb(250, 250, 250);
        box-shadow: 0 3px 5px rgba(0,0,0,0.20);
        font-size: 14px;
        line-height: 19px;
        padding: 12px;
        .text-field
            border none
            outline-width: 0;
            background-color transparent
            flex 1
        .submit-button
            color: rgba(0,0,0,.7)
            font-weight 300
            outline-width: 0;
            border none
            background-color transparent
            cursor pointer
            border-radius 2px
            font-size .8rem
</style>

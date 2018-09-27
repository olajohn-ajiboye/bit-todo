<template>
  <div class="todo-todo">
    <input type='checkbox' v-model="todo.checked"  >
      <span v-if="!todo.editing" :class="{ complete : todo.checked }"> {{ todo.text }}</span>
      <span v-else>
      <input class="text-field-edit" placeholder="Enter new value" v-model="todo.text" type="text"  @keyup.enter="updateTodo()"/> </span>
      <span class='timeago' :created="todo.createdAt" >- {{timeAgo }}</span>  &nbsp;
      <span><button title="Delete Todo" class="delete-button"  @click="removeTodo()">  x</button></span>&nbsp;
      <span v-if="!todo.editing"><button title="Edit Todo" class="delete-button edit-button js-edit-button"  @click="todo.editing = true">  Edit </button></span>&nbsp;
      <span  v-if="todo.editing"><button title="Done Editing" class="delete-button edit-button js-done-button"  @click="updateTodo()">  Done </button></span>&nbsp;
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ToDotodo',
  props: {
    todo: {
      required: true
    },
    created: ['todo.createdAt']
  },
  data: function () {
    return {
      timeAgo: null
    }
  },
  created () {
    this.getTimeAgo()
    setInterval(this.getTimeAgo, 1000)
  },
  destroyed () {
    clearInterval(this.getTimeAgo)
  },
  methods: {
    getTimeAgo () {
      this.timeAgo = moment(this.todo.createdAt).fromNow()
    },
    removeTodo () {
      this.$store.dispatch('removeTodo', this.todo)
    },
    updateTodo () {
      this.$store.dispatch('updateTodo', this.todo)
      this.todo.editing = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .text-field-edit
      width 55%
      height 2em
      line-height 2em
      padding-left .5em
      border 1px  green
      border-radius 2px

    .timeago
       opacity .5
       font-size .8em
       font-weight 200
       padding 1em

    .delete-button
      color: red
      font-weight 900
      outline-width: 0;
      border none
      background-color transparent
      cursor pointer
      border-radius 2px
      font-size .8rem
      float: right
    .edit-button
      color: green
    .todo-todo
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25)
      padding: .6rem
      margin: .6rem
    .complete
      text-decoration: line-through;

</style>

<template>
  <div class="todo-list">
      <to-do-input class='input'></to-do-input>
      <div class='todo-items'>
           <to-do-item v-for="todo in orderedTodo " :key="todo.createdAt.getTime()" :todo="todo"></to-do-item>
      </div>
  </div>
</template>

<script>
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem'
export default {
  name: 'ToDoList',
  props: {
    todo: 'todo'
  },
  components: {ToDoInput, ToDoItem},
  computed: {
    orderedTodo: function () {
      const todos = this.$store.state.todos
      // sort by created time after sorting by checked/unchecked todo
      let checkedTodo = todos.filter(todo => todo.checked).sort((a, b) => b.createdAt - a.createdAt)
      let UncheckedTodo = todos.filter(todo => !todo.checked).sort((a, b) => b.createdAt - a.createdAt)

      return UncheckedTodo.concat(checkedTodo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .todo-items {
        margin-top 30px
        display inline-block
        text-align left
    }
</style>

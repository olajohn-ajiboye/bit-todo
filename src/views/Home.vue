<template>
  <div class="home">
      <to-do-list></to-do-list>
  </div>
</template>

<script>

import ToDoList from '@/components/ToDoList.vue'
export default {
  name: 'home',
  components: {
    ToDoList
  }
}
</script>

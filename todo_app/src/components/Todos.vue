<template>
  <div v-for="todo in todos" :key="todo.id">
    <h3>{{ todo.todoName }}</h3>
    <p>{{ todo.createAt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array
  },
  setup(props) {}
}
</script>

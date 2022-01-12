<template>
  <div v-for="todo in todoData" :key="todo.id">
    <h3>{{ todo.todoName }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoData: []
    }
  }
}
</script>

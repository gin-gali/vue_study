<template>
  <div>
    <input v-model="addTodo" />
    <button @click="pushTodo" :disabled="!isInput">追加</button>
  </div>
</template>

<script>
import { ref } from 'vue'

const isInput = computed(() => addTodo.value.length > 0)

export default {
  data() {
    return {
      addTodo: {}
    }
  },
  methods: {
    submitTodo() {
      const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        todoName: addTodo.value
      }

      return newTodo
    },
    pushTodo(newTodo) {}
  }
}
</script>

<template>
  <div class="container">
    <Header />
    <Todos :todos="items" />
    <addButton msg="追加" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Todos from './components/Todos.vue'
import addButton from './components/addButton.vue'

export default {
  components: {
    Header,
    Todos,
    addButton
  }
}
</script>

<template>
  <div>Composition Test</div>
</template>

<script>
export default {
  setup() {
    console.log("setup");
    console.log(this);
  },
  created() {
    console.log("created");
    console.log(this);
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style>
</style>
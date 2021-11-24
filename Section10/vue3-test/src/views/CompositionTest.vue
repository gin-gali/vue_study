<template>
  <div>Composition Test</div>
  
</template>

<script>
export default {
  setup() {
    let name = 'Otani'
    const age = 30
    console.log("setup");
    return {
      name,
      age 
    }
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
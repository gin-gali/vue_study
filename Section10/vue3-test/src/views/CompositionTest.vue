<template>
  <div>Composition Test</div>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <p>ref: {{ nameRef }}</p>
  <p>reactive: {{ book.title }}</p>
  <p>reactive: {{ book.author[0] }}</p>
  <p>reactiveToRefs: {{ titleRef }}</p>
  <p>reactiveToRefs: {{ authorRef[0] }}</p>
  <p>reactiveToRefs: {{ authorRef[1] }}</p>
  <button @click="btnClick">おして</button>
  <p>computed: {{ totalPrice }}</p>
  <div>watch: <input v-model="search" /></div>
  <div>watchEffect: <input v-model="searchEffect" /></div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  watchEffect,
  onMounted,
} from "vue";

export default {
  setup() {
    let name = "Otani";
    const age = 30;
    const nameRef = ref("錦織圭");

    const book = reactive({
      title: "title",
      author: ["Otani", "ito"],
    });

    const bookToRefs = reactive({
      titleRef: "title2",
      authorRef: ["Otani2", "ito2"],
    });

    const btnClick = () => {
      console.log("click");
    };

    const item = reactive({
      price: 100,
      number: 1,
    });

    const totalPrice = computed(() => {
      return item.price * item.number;
    });

    const search = ref("");
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`);
      console.log(`new: ${newValue}`);
      console.log(`prev: ${prevValue}`);
    });

    const searchEffect = ref("");
    watchEffect(() => {
      console.log(`watchEffect: ${searchEffect.value}`);
    });

    onMounted(() => {
      console.log("onMounted");
    });

    console.log("setup");
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect,
    };
  },
  data() {
    return {
      number: 1,
      sports: "soccer",
    };
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

<style></style>

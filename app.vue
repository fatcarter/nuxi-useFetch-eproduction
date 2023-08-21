<template>
  <div>
    the page is {{ page }}
    <button @click="increment">increment</button>
  </div>
</template>


<script setup lang="ts">
const page = ref(0);
const {data} = useFetch('/api/demo', {
  params: {
    page,
  },
  onResponse({response}) {
    console.log("on response")
  },
  onResponseError({response}) {
    console.log("on response error");
  }
})
const increment = () => {
  page.value = page.value + 1;
}
</script>

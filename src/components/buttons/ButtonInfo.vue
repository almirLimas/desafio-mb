<template>
  <button type="button" class="button-info">{{ props.title }}</button>
</template>
<script setup>
const props = defineProps({
  title: String,
})
</script>

<style scoped>
.button-info {
  background-color: #ef4723;
  border-radius: 4px;
  border: 1px solid #ef4723;

  &:hover {
    background-color: #d43f1a;
  }
}
</style>

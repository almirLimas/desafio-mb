<template>
  <button type="button" class="button__info">{{ props.title }}</button>
</template>
<script setup>
const props = defineProps({
  title: String,
})
</script>

<style scoped>
.button__info {
  background-color: transparent;
  border-radius: 4px;
  color: #ef4723;
  border: 1px solid #ef4723;

  &:hover {
    background-color: #fde9e4;
  }
}
</style>

<template>
  <button type="submit" @click.prevent="emit('continuar')" class="button__info">Continuar</button>
</template>
<script setup>
const emit = defineEmits(['continuar', 'delete'])
</script>

<style scoped>
.button__info {
  background-color: #ef4723;
  border-radius: 4px;
  border: 1px solid #ef4723;

  &:hover {
    background-color: #d43f1a;
  }
}
</style>

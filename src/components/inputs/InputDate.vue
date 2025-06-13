<template>
  <label class="label">{{ props.label }}</label>
  <input type="date" class="input" maxlength="100" v-model="model" />
</template>

<script setup>
const model = defineModel()
const props = defineProps(['label'])
</script>

<style scoped></style>

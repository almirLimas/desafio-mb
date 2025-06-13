<template>
  <label class="label">{{ props.label }}</label>
  <input type="text" class="input" :maxlength="maxLength" required v-model="model" />
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  label: String,
  maxLength: Number,
})
</script>

<style scoped></style>

<template>
  <label class="label">{{ props.label }}</label>
  <input type="date" class="input" maxlength="100" v-model="model" :disabled="props.disabled" />
</template>

<script setup>
const model = defineModel()

const props = defineProps({
  label: String,
  maxLength: Number,
  disabled: Boolean,
})
</script>

<style scoped></style>

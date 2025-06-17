<template>
  <label class="label">{{ props.label }}</label>
  <input type="password" class="input" maxlength="100" v-model="model" :disabled="disabled" />
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  label: String,
  maxLength: Number,
  disabled: Boolean,
})
</script>

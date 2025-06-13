<template>
  <div class="radio-group">
    <div v-for="option in props.options" :key="option.value" class="radio-option">
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
        v-model="model"
        name="tipoPessoa"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
const model = defineModel()

const props = defineProps({
  label: String,
  options: {
    type: Array,
    default: () => [
      { label: '', value: 0 },
      { label: '', value: '' },
    ],
  },
})
</script>
<style scoped>
.radio-group {
  display: flex;
  gap: 1rem;
  cursor: pointer;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}

.radio-option input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>

<template>
  <label class="label">{{ props.label }}</label>
  <input
    v-model="model"
    type="text"
    class="input"
    @input="onInputTel"
    id="phone"
    name="phone"
    :disabled="props.disabled"
  />
  <p v-if="erro" style="color: red">Telefone inválido</p>
</template>

<script setup>
import { ref } from 'vue'
import { useFormatTel } from '@/composables/useFormatTel'
import { store } from '@/store/store'

const { formatTel } = useFormatTel()
const erro = ref(false)
const model = defineModel()
const props = defineProps({
  label: String,
  maxLength: Number,
  disabled: Boolean,
})

const onInputTel = (event) => {
  const valor = event.target.value
  store.objRegister.telefone = formatTel(valor)
}
</script>

<style scoped></style>

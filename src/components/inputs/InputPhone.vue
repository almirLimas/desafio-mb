<template>
  <label class="label">{{ props.label }}</label>
  <input v-model="model" type="text" class="input" @input="onInputTel" id="phone" name="phone" />
  <p v-if="erro" style="color: red">Telefone inválido</p>
</template>

<script setup>
import { ref } from 'vue'
import { useFormatTel } from '@/composables/useFormatTel'
const { formatTel } = useFormatTel()
import { store } from '@/store/store'
const erro = ref(false)
const model = defineModel()
const props = defineProps(['label'])
// const telefone = ref('')
// const validarTelefone = () => {
//   const regex = /^\(\d{2}\)\s?\d{5}-\d{4}$/
//   erro.value = !regex.test(telefone.value)
// }

const onInputTel = (event) => {
  const valor = event.target.value
  store.objRegister.telefone = formatTel(valor)
}
</script>

<style scoped></style>

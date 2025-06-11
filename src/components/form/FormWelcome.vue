<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="email" :label="'Endereço de e-mail'" />
        </div>
      </div>
    </div>

    <ButtonInfo type="submit" @continuar="teste" />
  </form>
</template>
<script setup>
import { ref } from 'vue'
import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'

const active = ref(0)
const email = ref('')
const emit = defineEmits(['next', 'delete'])

const teste = () => {
  emit('next', active.value)
}
</script>

<style scoped>
.teste {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>

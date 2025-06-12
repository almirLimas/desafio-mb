<template>
  <form class="container">
    <h3 class="form-header">Pessoa Física</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-6">
          <InputText v-model="objRegister.nome" :label="'Nome'" />
        </div>
        <div class="col-6">
          <InputText v-model="objRegister.cpf" :label="'CPF'" />
        </div>
        <div class="col-6">
          <InputText v-model="objRegister.dataNascimento" :label="'Data de nascimento'" />
        </div>
        <div class="col-6">
          <InputText v-model="objRegister.telefone" :label="'Telefone'" />
        </div>
      </div>
    </div>

    <ButtonInfo type="submit" @continuar="proximo" />
  </form>
</template>
<script setup>
import { ref } from 'vue'
import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'

const active = ref(2)

const objRegister = ref({
  nome: '',
  cpf: '',
  dataNascimento: '',
  telefone: '',
})

const emit = defineEmits(['next', 'delete'])

const proximo = () => {
  emit('next', active.value)
}
</script>

<style scoped></style>

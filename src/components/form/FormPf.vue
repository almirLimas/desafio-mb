<template>
  <form class="container">
    <h3 class="form-header">Pessoa Física</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.nome" :label="'Nome'" />
          <span v-if="store.errorMessages.nome" class="form-error">{{
            store.errorMessages.nome
          }}</span>
        </div>
        <div class="col-12">
          <InputText
            v-model="store.objRegister.cpf"
            @update:modelValue="onInputCpf"
            :label="'CPF'"
            :max-length="14"
          />

          <span v-if="store.errorMessages.cpf" class="form-error">{{
            store.errorMessages.cpf
          }}</span>
        </div>
        <div class="col-12">
          <InputDate v-model="store.objRegister.dataNascimento" :label="'Data de nascimento'" />
          <span v-if="store.errorMessages.dataNascimento" class="form-error">{{
            store.errorMessages.dataNascimento
          }}</span>
        </div>
        <div class="col-12">
          <InputPhone v-model="store.objRegister.telefone" :label="'Telefone'" />
          <span v-if="store.errorMessages.telefone" class="form-error">{{
            store.errorMessages.telefone
          }}</span>
        </div>
        <div class="col-6">
          <ButtonPrevious @click="previous" />
        </div>
        <div class="col-6">
          <ButtonInfo @click="continuar" />
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { store } from '@/store/store'
import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'
import { useFormatCpf } from '@/composables/useFormatCpf'
const { formatCpf } = useFormatCpf()
import { useValidation } from '@/composables/useValitation'
const { isValidFormPf } = useValidation()

import ButtonPrevious from '../buttons/ButtonPrevious.vue'
import InputDate from '../inputs/InputDate.vue'
import InputPhone from '../inputs/InputPhone.vue'

const onInputCpf = (valor) => {
  store.objRegister.cpf = formatCpf(valor)
}

const continuar = () => {
  if (isValidFormPf()) {
    store.nextForm()
  } else {
    return
  }
}

const previous = () => {
  store.prevForm()
}
</script>

<style scoped></style>

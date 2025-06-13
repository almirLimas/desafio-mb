<template>
  <form class="container">
    <h3 class="form-header">Pessoa Juridica</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.nome" :label="'Razão social'" />
        </div>
        <div class="col-12">
          <InputText
            v-model="store.objRegister.cnpj"
            @update:modelValue="onInputPj"
            :label="'cnpj'"
          />
        </div>
        <div class="col-12">
          <InputDate v-model="store.objRegister.dataNascimento" :label="'Data de nascimento'" />
        </div>
        <div class="col-12">
          <InputPhone v-model="store.objRegister.telefone" :label="'Telefone'" />
        </div>
        <div class="col-6">
          <ButtonPrevious type="submit" @click="previous" />
        </div>
        <div class="col-6">
          <ButtonInfo type="submit" @click="continuar" />
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { store } from '@/store/store'
import InputText from '../inputs/InputText.vue'
import { useFormatCnpj } from '@/composables/useFormatCnpj'
const { formatCnpj } = useFormatCnpj()
import ButtonInfo from '../buttons/ButtonInfo.vue'
import ButtonPrevious from '../buttons/ButtonPrevious.vue'
import InputPhone from '../inputs/InputPhone.vue'
import InputDate from '../inputs/InputDate.vue'

const continuar = () => {
  store.nextForm()
}

const previous = () => {
  store.prevForm()
}

const onInputPj = () => {
  store.objRegister.cnpj = formatCnpj(store.objRegister.cnpj)
}
</script>

<style scoped></style>

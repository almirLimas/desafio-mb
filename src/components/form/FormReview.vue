<template>
  <form class="container">
    <h3 class="form-header">Seja Bem vindo (a)</h3>
    <div class="input-group">
      <div class="row">
        <div class="col-12">
          <InputText v-model="store.objRegister.email" :label="'Endereço de e-mail'" />
        </div>
        <div class="col-12">
          <InputText
            v-if="store.tipoDePessoa === 0"
            :disabled="true"
            v-model="store.objRegister.nome"
            :label="'Nome'"
          />
          <InputText
            v-if="store.tipoDePessoa === 1"
            v-model="store.objRegister.razaoSocial"
            :label="'Razão social'"
          />
        </div>
        <div class="col-12">
          <InputText
            v-if="store.tipoDePessoa === 0"
            v-model="store.objRegister.cpf"
            :label="'CPF'"
          />
          <InputText
            v-if="store.tipoDePessoa === 1"
            v-model="store.objRegister.cnpj"
            :label="'CNPJ'"
          />
        </div>
        <div class="col-12">
          <InputText
            v-if="store.tipoDePessoa === 0"
            v-model="store.objRegister.dataNascimento"
            :label="'Data de nascimento'"
          />
          <InputText
            v-if="store.tipoDePessoa === 1"
            v-model="store.objRegister.dataAbertura"
            :label="'Data de abertura'"
          />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.telefone" :label="'Telefone'" />
        </div>
        <div class="col-12">
          <InputText v-model="store.objRegister.password" :label="'Senha'" />
        </div>
      </div>
    </div>

    <ButtonInfo type="submit" @click="continuar" />
  </form>
</template>
<script setup>
import { store } from '@/store/store'

import InputText from '../inputs/InputText.vue'
import ButtonInfo from '../buttons/ButtonInfo.vue'

const continuar = () => {
  if (store.objRegister.email === '') {
    alert('Preencha o e-mail')
    return
  }
  store.nextForm()
}
</script>

<style scoped></style>

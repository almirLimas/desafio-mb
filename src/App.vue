<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-12">
        <div class="form-container">
          <span class="container"> Passo {{ store.formActive }} de 4</span>

          <FormWelcome v-if="store.formActive === 1" />
          <FormPf v-if="store.formActive === 2 && store.tipoDePessoa === 0" />
          <FormPj v-if="store.formActive === 2 && store.tipoDePessoa === 1" />
          <FormPassword v-if="store.formActive === 3" />
          <FormReview v-if="store.formActive === 4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { store } from '@/store/store'
import FormWelcome from './components/form/FormWelcome.vue'
import FormPf from './components/form/FormPf.vue'
import FormPj from './components/form/FormPj.vue'
import FormPassword from './components/form/FormPassword.vue'
import FormReview from './components/form/FormReview.vue'
</script>
<style scoped></style>

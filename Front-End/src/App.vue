<script setup>
import Modal from './components/Modal.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

methods: {
  
}

</script>


<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/person.svg" width="325" height="125" />
  </header>

  <Modal/>


  <main class="mt-32">
    <h1 class="text-4xl text-white font-bold mb-7 text-center">Calcule seu IMC</h1>
    <form class="w-full max-w-sm justify-center" onclick="http:/localhost:3001/imc" method="post">

<!-- Campo para nome -->
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Seu Nome:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name" type="Nome" value="Geordani Machado" name="Nome">
    </div>
  </div>

<!-- Campo para Pesso -->
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-number">
        Seu Peso:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
      text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" 
      type="number" placeholder="72" name="Peso">
    </div>
  </div>

  <!-- Campo para Altura -->
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-number">
        Seu Altura:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
      text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" 
      type="number" placeholder="175" name="Altura">
    </div>
  </div>
  
  <!-- Botão para enviar informaçõs para o back-end e fazer o calculo do mesmo -->
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Calcular IMC
      </button>
    </div>
  </div>
</form>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>

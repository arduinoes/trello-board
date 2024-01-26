<script setup>
import { useTrelloStore } from './stores/trello';
const trelloStore = useTrelloStore();

</script>

<template>
  <div class="p-5 bg-cyan-400 h-screen over-flow-auto">
    <h1 class="text-2xl text-white flex items-center mb-10">
    <button 
        type="button" 
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        v-on:click="trelloStore.addArray()"
        >Guardar
    </button>

    <img width="200" class="mr-3" src="/vue.png" alt="Vue.js-ES">
    Trello-Tablero
    </h1>
    <NuxtPage />
</div>
</template>


  



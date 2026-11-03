<script setup>
import { ref } from 'vue'

const name = ref('Kristian VI')
const bio = ref('I am am learning to build interactive web pages.')
const likes = ref(0)
const showFact = ref(false)
const fact = ref('I can name five constellations.')

// TASK 4: Create a reactive likes counter.
// TASK 5: Create reactive showFact and fact values.
</script>

<template>
  <main>
    <article class="card">
      <p class="eyebrow">MY FIRST VUE PAGE</p>
      <h1>{{ name }}</h1>
      <p>{{ bio }}</p>
      <label for="name">Your name</label>
      <input id="name" v-model="name" maxlength="60">
      <button type="button" @click="likes++">Like this page</button>
      <p aria-live="polite">Likes: {{ likes }}</p>
      <button type="button" @click="showFact = !showFact" :aria-expanded="showFact" aria-controls="fact">
        {{ showFact ? 'Hide fun fact' : 'Show fun fact' }}
      </button>
      <p id="fact" v-if="showFact">{{ fact }}</p>
      <!-- TASK 2: Add a labelled input with v-model="name" here. -->
      <!-- TASK 4: Add a button, click counter and @click here. -->
      <!-- TASK 5: Add a toggle button and v-if paragraph here. -->
    </article>
  </main>
</template>

<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #728c6c;
  color: #192d3a;
}
main { min-height: 100vh; display: grid; place-items: center; padding: 24px;}
.card { width: 100%; max-width: 520px; padding: 100px; background: #b7d1e4; border-radius: 18px; }
.eyebrow { color: #0f3928; font-size: 25px; font-weight: bold; letter-spacing: 2px; color: #3a6856;}
h1 { overflow-wrap: anywhere;}
label { display: block; margin-top: 24px; font-weight: bold; }
input { width: 100%; padding: 12px; margin-top: 8px; border: 1px solid #637580; border-radius: 8px; font: inherit; }
button { padding: 12px 16px; margin: 16px 8px 0 0; border: 0; border-radius: 8px; background: #355e4d; color: white; font: inherit; cursor: pointer; }
button:hover { background: #23392f; }
:focus-visible { outline: 3px solid #b55000; outline-offset: 3px; }
/* TASK 3: Personalise the background, card, heading and buttons. */
</style>

//!risolvi

<template>
  <div>
    <ul class="list-unstyled">
      <li class="media" v-for  v-bind:key="type">
        <img src="mr-3" src="..." alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0 mb-1">List-based media object</h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit facilis similique atque hic amet voluptates? Quas commodi, soluta adipisci, iste deserunt consequatur reprehenderit nobis dolor reiciendis culpa aliquid f 
        </div>
      </li>
    </ul>
    <h1>Messaggio di prova</h1>
  </div>
</template>


<script>  
const API_URL = 'http://localhost:8080/messages'

export default {
  name: 'home',
  data: () => ({
    messages: []
  }),
  mounted() {
    fetch(API_URL).then(response => response.json().then(result => {
      this.messages = result;
    }))
  } 
};
</script>
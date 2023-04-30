<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue"
import gsap from "gsap"

  const quizes = ref(q)
  const search = ref("")
  const before = (el) => {
    // card enter from
    el.style.opacity = "0"
    el.style.transform = "translateY(-20px)"
  }
  const enter = (el) => {
    // card enter to 
    // el.style.opacity = "1"
    // el.style.transform = "translateY(0)"
    // by gsap :
    gsap.to(el, {
       y:0,
      opacity:1,
      duration: .4,
      delay: el.dataset.index * 0.3
    })

  }
 
  

  watch(search , ()=>{
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <main class="main">
    <div class="header">
      <h1>QuizApp</h1>
      <input v-model.trim="search" type="text" placeholder="search..." />
    </div>

    <div class="options-container">
      <transition-group appear @before-enter="before" @enter="enter">
        <Card v-for="(quiz,index) in quizes"
          :data-index="index"
         :key="quiz.id"
          :quiz="quiz"/>
      </transition-group>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  background-color: #efefef;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #b6b6b65a;
  padding: 10px 0;
}
.header h1 {
  color: darkcyan;
  font-size: 2.5rem;
}

.header input {
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  min-width: 250px;
  margin-top: 10px;
  padding: 5px 10px;
}

.options-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>

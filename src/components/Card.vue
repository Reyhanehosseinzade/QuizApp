<script setup>
import { defineProps } from "vue";
import {useRouter} from 'vue-router'
const router = useRouter()
const {quiz} = defineProps([
    "quiz"
])

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>

<template>
      <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{quiz.questions.length}} questions</p>
        </div>
      </div>
</template>

<style scoped>

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.368);
  background-color: #fff;
  cursor: pointer;
  margin: 10px 0;
}
.card img {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
}
.card .card-text {
  padding: 5px 15px;
}
.card .card-text h2 {
  text-transform: capitalize;
  font-weight: 600;
  color: #171717;
}
.card .card-text p {
  text-transform: capitalize;
  color: #7d7d7d;
}
</style>
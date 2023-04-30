<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue"
import { useRoute } from "vue-router";
import { computed, ref} from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false)
const questionStatus = computed(()=>
 `${currentQuestionIndex.value}/${quiz.questions.length}`
)
const barPercentage = computed(()=> `${currentQuestionIndex.value / quiz.questions.length * 100}%` )

const onOptionSelected = (isCorrect) => {
  if(isCorrect){
   numberOfCorrectAnswers.value++
  }
  if(quiz.questions.length-1 === currentQuestionIndex.value){
    showResults.value = true
  }
   currentQuestionIndex.value++
}

</script>

<template>
  <main>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
    <div v-if="!showResults">
      <Question :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
    </div>
    <Result v-else :quizquestionslength="quiz.questions.length"  :numberOfCorrectAnswers="numberOfCorrectAnswers" />
  </main>
</template>

<style scoped>
main {
  padding: 30px 40px;
}
</style>

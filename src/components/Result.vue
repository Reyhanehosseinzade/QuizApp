<script setup>
 import {defineProps} from "vue"
 import {RouterLink} from 'vue-router'
 const {numberOfCorrectAnswers , quizquestionslength} = defineProps(["numberOfCorrectAnswers" , "quizquestionslength"])


</script>

<template>
    <div class="result">
        <p>Your Results...</p>
        <h3>
            {{ numberOfCorrectAnswers }} / {{ quizquestionslength }}
        </h3>
    </div>
    <div class="goback">
        <RouterLink to="/">go back</RouterLink>
    </div>
  

</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 20px;
}
.goback{
    display: flex;
    justify-content: center;
}

</style>
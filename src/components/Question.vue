<script setup>  
    import {defineProps , defineEmits} from "vue"

    const {question} = defineProps(['question'])
    const emit = defineEmits(["selectOption"])

    const emitSelectedOption = (isCorrect) =>{
      emit("selectOption" , isCorrect)
    }
</script>


<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="option-containers">
      <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
        <span class="option-label">{{ option.label }}</span>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question {
  font-size: 1.2rem;
  color: cadetblue;
  font-weight: 600;
}

.option {
  height: 45px;
  border: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:.4s;
}
.option:hover{
  border: 1px solid #909090;
  box-shadow: 0 0 5px cornflowerblue;
}
.option-label {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #adadad;
  background-color: cornflowerblue;
  color: white;
  font-weight: 600;
}
.option-value {
  padding: 10px;
  background-color: #fff;
  width: 100%;
}
</style>

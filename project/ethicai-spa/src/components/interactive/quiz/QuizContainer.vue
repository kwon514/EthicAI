<script setup>
import QuizStart from "@/components/interactive/quiz/QuizStart.vue"
import QuestionsSteps from "@/components/interactive/quiz/QuestionsSteps.vue"
import ResultBox from "@/components/interactive/quiz/ResultBox.vue"
import { ref, computed } from "vue"

const currentStep = ref('quiz-start')
const currentComponent = computed(() => ({
    'quiz-start': QuizStart,
    'questioning': QuestionsSteps,
    'result': ResultBox
}[currentStep.value]))

const props = defineProps({
    category: {
        type: String,
        required: true
    },
    module_name: {
        type: String,
        required: true
    }
})

const result = ref({})

const bindData = computed(() => ({
    'questioning': {
        category: props.category
    },
    'quiz-start': {
        module_name: props.module_name
    },
    'result': {
        category: props.category,
        result: result.value
    }
}[currentStep.value]))

function forwardToQuestioningStep() {
    currentStep.value = 'questioning'
}

function forwardToResult(res) {
    result.value = res
    currentStep.value = 'result'
}

</script>

<template>
    <div class="tw-w-full tw-h-full">
        <component :is="currentComponent" v-bind="bindData" @quiz-started="forwardToQuestioningStep"
            @finished="forwardToResult" />
    </div>
</template>

<style scoped></style>

<template>
  <div>
    <ModuleCompletion
      :moduleTitle="'The Rise of DALL·E'"
      :moduleName="'dalle'"
      :buttonText="'Return Home'"
    />
  </div>
</template>

<script>
import { registerPageAsCompleted } from "@/helpers";
import ModuleCompletion from "../../../components/reusable/module_completion.vue";
import { defineComponent } from "vue"; // Import defineComponent from Vue 3

export default defineComponent({
  components: {
    ModuleCompletion,
  },
  methods: {
    handlePageCompletionClick() {
      registerPageAsCompleted("dalle", "dalle-quiz");
    },
  },
  created() {
    this.handlePageCompletionClick();
  },
});
</script>

<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'dalle'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container">
    <div class="row h-100">
      <div class="col-md-12 d-flex align-items-center">
        <quiz-container category="dalle" module_name="The Rise of DALL·E"></quiz-container>
      </div>
    </div>
  </div>
  <page-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../../reusable/nav-bar.vue";
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PageFooter from "../../reusable/page-footer.vue";
import QuizContainer from "../../interactive/quiz/QuizContainer.vue";

export default defineComponent({
  name: "QuizPage",
  components: {
    "nav-bar": NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    "page-footer": PageFooter,
    "quiz-container": QuizContainer,
  },
});
</script>

<style scoped>
.container-fluid.page-container {
  height: 100vh;
  margin-top: 60px;
}

@media (max-width: 576px) {
  .container-fluid.page-container {
    height: 1100px;
  }
}
</style>

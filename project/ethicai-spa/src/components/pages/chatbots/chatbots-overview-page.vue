<template>
    <nav-bar/>
    <div id="main" class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12 d-flex align-items-center">
                <module-overview
                    :module-title="moduleTitle"
                    :module-description="moduleDescription"
                    :module-img-filename ="moduleImgFilename"
                    :module-img-alt-text ="moduleImgAltText"
                    :module-page-names="modulePageNames"
                    :module-page-routes="modulePageRoutes"
                    :module-name="moduleName"
                    :page-name="pageName"
                    ></module-overview>
            </div>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">

import { defineComponent} from 'vue';
import NavBar from '../../reusable/nav-bar.vue'
import PageFooter from '../../reusable/page-footer.vue';
import ModuleOverview from '../../reusable/module_overview.vue';


export default defineComponent({
    name: 'ChatbotsOverviewPage',
    data() {
        return {
            moduleTitle: 'The Age of Chatbots',
            moduleDescription: 'In this module, you’ll learn about what chatbots are, the limitations of ChatGPT, and guidelines surrounding using ChatGPT.',
            moduleImgSrc: '../../../assets/chatbots_module.png',
            modulePageNames: ['The Age of Chatbots', 'ChatGPT 101', 'Too Good to be True?', 'Hallucination','Misuse and Plagiarism', 'Module Quiz'],
            modulePageRoutes: ['the-age-of-chatbots', 'chatgpt-101', 'too-good-to-be-true', 'hallucination', 'misuses-and-plagiarism', 'chatbots-quiz'],
            moduleName: 'chatbots',
            pageName: 'the-age-of-chatbots',
            moduleImgFilename: 'chatbots_module.png',
            moduleImgAltText: 'happy robots speak to each other'
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'module-overview': ModuleOverview
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 100vh;
    margin-top: 60px;
}
@media (min-width: 767.98px) {
    .module-overview-container {
        height: 75%;
    }
}

@media (max-width: 767.98px) {
   .container-fluid.page-container {
        height: 1200px;
    }
}
</style>

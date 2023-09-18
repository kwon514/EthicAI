<template>
  <div>
    <nav-bar />
    <div class="container-fluid page-container text-center">
      <!-- Element 1 -->
      <div class="row h-25">
        <div class="col-md-12">
          <h1 class="mt-5" style="font-size: 28px;"><u>The Rise of DALL·E</u></h1>
          <br />
        </div>
      </div>

      <!-- Element 2 -->
      <div ref="firstSection" class="row h-30 mb-5 justify-content-center" :class="{ 'hidden': !showFirstSection}">
        <div class="col-md-8 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              DALL·E is a cutting-edge generative art model developed by OpenAI. It blends the names of artist Salvador Dalí and robot WALL·E. It utilizes the GPT architecture to create images from textual descriptions (OpenAI, 2022). You provide a text prompt, and DALL·E generates a corresponding image.
            </p>

            <p class="section-text">
              This model has a remarkable capacity to bridge text and images, exemplifying AI's ability to produce imaginative content (TechTarget, 2023).
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <img class="img-a" src="../../../assets//dalle_page1_img.png" alt="an art piece depicting a purple swirl" />
        </div>
      </div>

      <!-- Element 3 -->
      <div class="row h-30 mb-5 justify-content-center">
        <div class="col-md-6 d-flex justify-content-center">
          <important-terms-card :terms-and-definitions="termsAndDefinitions" />
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <p class="text-right section-text">
            <br />
            However, it also raises some significant ethical questions about the potential misuse of AI-generated images. This includes deepfakes (which are covered in further detail in our deepfakes module), authenticity, and plagiarism.
          </p>
        </div>

        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :text="'Continue'" @click="showSecondSection = true; scrollIntoSecondSection()" />
          </div>
        </div>
      </div>

      <!-- Element 4 -->
      <div ref="secondSection" class="row h-30 mb-5 justify-content-center" :class="{ 'hidden': !showSecondSection }">
        <div class="col-md-12">
          <h1 class="mt-5" style="font-size: 28px;">Imagine ...</h1>
          <br />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <img class="img-a-small" src="../../../assets//artist.png" alt="a female artist holding a paintbrush" />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              You are an artist.
            </p>
            <p class="section-text">
              More than just your source of income, your work is your passion. You are proud to share your art with the world on Instagram.
            </p>
          </div>
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :text="'Continue'" @click="showThirdSection = true; scrollIntoThirdSection()" />
          </div>
        </div>
      </div>

      <!-- Element 6 -->
      <div ref="thirdSection" class="row h-30 mb-5 justify-content-center" :class="{ 'hidden': !showThirdSection }">
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              Overnight, you start to lose your followers.
            </p>
            <p class="section-text">
              In your comment section, people complain that your work is the same as everyone else.
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <img class="img-a-large" src="../../../assets//haters.png" alt="mean Instagram comments section" />
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :text="'Continue'" @click="showFourthSection = true; scrollIntoFourthSection()" />
          </div>
        </div>
      </div>

      <!-- Element 7 -->
      <div ref="fourthSection" class="row h-30 mb-5 justify-content-center" :class="{ 'hidden': !showFourthSection }">
        <div class="col-md-4 d-flex align-items-center">
          <img class="img-a-medium" src="../../../assets//identical_art.jpeg" alt="two art pieces that look identical" />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              You discover other Instagram accounts replicating your unique art style flawlessly.
            </p>
            <p class="section-text">
              What is going on?
            </p>
            <p class="section-text">
              After digging through the sources of these images, you begin to realize: a generative AI has taken your work as part of its training set, and is now producing work that happens to be almost identical to yours.
            </p>
          </div>
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :text="'Continue'" @click="showFifthSection = true; scrollIntoFifthSection()" />
          </div>
        </div>
      </div>

      <!-- Element 8 -->
      <div ref="fifthSection" class="row h-30 mb-5 justify-content-center" :class="{ 'hidden': !showFifthSection }">
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              Your income from commissions is dwindling. Why would your followers value what you do, when an AI can generate something in the same style at a fraction of the time and cost.
            </p>
            <p class="section-text">
              Denied a stable income, you slip into poverty.
            </p>
            <p class="section-text">
              <b>So ends the tale of an artist, undone by artwork they had created.</b>
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <img class="img-a-medium" src="../../../assets//sad_piggy.jpeg" alt="mean Instagram comments section" />
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-between">
            <router-link to="/dalle" class="my-button">
              <purple-btn-outline :text="'Back'" />
            </router-link>
            <router-link to="/dalle/ai-generated-vs-human-art" class="my-button">
              <purple-btn :text="'Continue'" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import PurpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue';
import ImportantTermsCard from '../../reusable/important-terms-card.vue';

export default defineComponent({
  name: 'DallePage1',
  data() {
    return {
      termsAndDefinitions: [
        {
          term: 'GPT',
          definition: 'Stands for Generative Pre-trained Transformer. It is a family of neural network models that use the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).',
        },
        {
          term: 'AI',
          definition: 'AI (or Artificial Intelligence) is the development of computer systems that can perform tasks typically requiring human intelligence (OpenAI, 2023).',
        },
        {
          term: 'Deepfake',
          definition: 'A deepfake is a computer-made imitation video, image, or audio, mimicking reality and often impersonating individuals (Seon, n.d.).',
        },
      ],
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      showFourthSection: false,
      showFifthSection: false,
    };
  },
  methods: {
    scrollIntoSecondSection() {
      this.$nextTick(() => {
        const element = this.$refs.secondSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
          });
        }
      });
    },
    scrollIntoThirdSection() {
      this.$nextTick(() => {
        const element = this.$refs.thirdSection as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
      });
    },
    scrollIntoFourthSection() {
      this.$nextTick(() => {
        const element = this.$refs.fourthSection as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
      });
    },
    scrollIntoFifthSection() {
      this.$nextTick(() => {
        const element = this.$refs.fifthSection as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
      });
    },
  },
  components: {
    'nav-bar': NavBar,
    'purple-btn': PurpleBtn,
    'purple-btn-outline': PurpleBtnOutline,
    'important-terms-card': ImportantTermsCard,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
  height: flex;
  margin-top: 60px;
  margin-bottom: 20px;
}

.img-a {
  width: 75%;
}

.section-text {
  width: 65%;
}

.img-a-large {
  width: 100%; /* Adjust the width as needed */
  max-width: 500px; /* Add a maximum width to prevent it from becoming too large */
}

.img-a-medium {
  width: 100%; /* Adjust the width as needed */
  max-width: 350px; /* Add a maximum width to control the size */
}

.img-a-small {
  width: 100%; /* Adjust the width as needed */
  max-width: 250px; /* Add a maximum width to prevent it from becoming too large */
}

.hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

</style>
<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">Real or Not Real?</h1>
        </div>
      </div>
      <div class="row h-30">
        <div class="col-md-12 pb-5">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              In the previous section, we delved into a chilling real-world case where deepfake technology was used to
              decieve, witnessing how this audio manipulation can exploit our emotions and trust.
            </p>
            <p class="section-text">
              Do you think you could tell the difference between a real and a fake audio clip? <b>Let's find out!</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
          @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
      </div>
    </div>
    <div ref="secondSection" class="container row m-auto mb-5" :class="{ 'hidden': !showSecondSection }">
      <div class="row h-30">
        <div class="col-md-12">
          <div class="d-flex justify-content-center flex-wrap">
            <h3>Which audio clip is <em>real</em>?</h3>
            <div class="tw-w-full tw-pt-10">
              <!-- First audio pair -->
              <div ref="firstAudio" class="tw-w-4/6 tw-m-auto tw-mb-10 md:tw-w-full">
                <p class="tw-w-full tw-mb-5 tw-text-lg">Carefully listen to each audio clip of <b>Donald Trump</b>.
                  Which one is <em>real</em>?</p>
                <div class="d-flex flex-column flex-md-row">
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/1_real.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: firstAudioAnswered }" :tag="'button'"
                        :text="'Left clip is real'" @click="onFirstCorrectClick(); scrollIntoSection('secondAudio');" />
                    </div>
                  </div>
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/1_fake.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: firstAudioAnswered }" :tag="'button'" :text="'Right clip is real'"
                        @click="onFirstIncorrectClick(); scrollIntoSection('secondAudio');" />
                    </div>
                  </div>
                </div>
                <div :class="{ hidden: !firstAudioAnswered }">
                  <p class="tw-text-center tw-mt-5" :class="firstAudioCorrect ? 'tw-text-green-500' : 'tw-text-red-500'">
                    {{ firstAudioExplanation }}</p>
                </div>
              </div>
              <!-- Second audio pair -->
              <div ref="secondAudio" class="tw-w-4/6 tw-m-auto tw-mb-10 md:tw-w-full" :class="{ hidden: !firstAudioAnswered }">
                <p class="tw-w-full tw-mb-5 tw-text-lg">Carefully listen to each audio clip of <b>Barrack Obama</b>.
                  Which one is <em>real</em>?</p>
                <div class="d-flex flex-column flex-md-row">
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/2_fake.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: secondAudioAnswered }" :tag="'button'" :text="'Left clip is real'"
                        @click="onSecondIncorrectClick(); scrollIntoSection('thirdAudio');" />
                    </div>
                  </div>
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/2_real.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: secondAudioAnswered }" :tag="'button'" :text="'Right clip is real'"
                        @click="onSecondCorrectClick(); scrollIntoSection('thirdAudio');" />
                    </div>
                  </div>
                </div>
                <div :class="{ hidden: !secondAudioAnswered }">
                  <p class="tw-text-center tw-mt-5" :class="secondAudioCorrect ? 'tw-text-green-500' : 'tw-text-red-500'">
                    {{ secondAudioExplanation }}</p>
                </div>
              </div>
              <!-- Third audio pair -->
              <div ref="thirdAudio" class="tw-w-4/6 tw-m-auto md:tw-w-full" :class="{ hidden: !secondAudioAnswered }">
                <p class="tw-w-full tw-mb-5 tw-text-lg">Carefully listen to each audio clip of <b>Joe Biden</b>.
                  Which one is <em>real</em>?</p>
                <div class="d-flex flex-column flex-md-row">
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/3_real.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: thirdAudioAnswered }" :tag="'button'" :text="'Left clip is real'"
                        @click="onThirdCorrectClick();" />
                    </div>
                  </div>
                  <div class="tw-m-auto py-2">
                    <audio controls controlsList="nodownload">
                      <source src="../../../assets/deepfake_audio/3_fake.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <div class="tw-w-full">
                      <purple-btn-outline :class="{ hidden: thirdAudioAnswered }" :tag="'button'" :text="'Right clip is real'"
                        @click="onThirdIncorrectClick();" />
                    </div>
                  </div>
                </div>
                <div :class="{ hidden: !thirdAudioAnswered }">
                  <p class="tw-text-center tw-mt-5" :class="thirdAudioCorrect ? 'tw-text-green-500' : 'tw-text-red-500'">
                    {{ thirdAudioExplanation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="audioDemoComplete && !section2Completed" :text="'Continue'"
          @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
      </div>
    </div>
    <div ref="thirdSection" class="container row m-auto mb-5" :class="{ 'hidden': !showThirdSection }">
      <div class="row h-30">
        <div class="col-md-12 pb-5">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              Did you manage to distinguish the real audio from the fake? If you found it challenging, you're not alone.
              Audio deepfake technology has evolved to a point where even seasoned listeners can struggle to tell the
              difference. With the current advancements in deepfake technology, there is no true 'tell' of a deepfake.</p>
            <p class="section-text">
              Staying informed and aware of these advancements is crucial. It's a reminder of the importance of critical
              thinking and digital literacy in today's world. By understanding the potential of audio deepfakes, we can
              better protect ourselves and our communities from the harm they may cause.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end mb-2">
        <router-link to="/deepfakes/deepfakes-in-media">
          <purple-btn :text="'Next Page'" @click="handlePageCompletionClick()"></purple-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import PurpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue';

export default defineComponent({
  name: 'DeepfakesPage3',
  data() {
    return {
      value: null,
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      section1Completed: false,
      section2Completed: false,
      audioDemoComplete: false,
      firstAudioAnswered: false,
      firstAudioCorrect: false,
      firstAudioExplanation: "",
      secondAudioAnswered: false,
      secondAudioCorrect: false,
      secondAudioExplanation: "",
      thirdAudioAnswered: false,
      thirdAudioCorrect: false,
      thirdAudioExplanation: "",
    };
  },
  methods: {
    scrollIntoSection(sectionName: string) {
      this.$nextTick(() => {
        const element = this.$refs[sectionName] as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
      });
    },
    // eslint-disable-next-line 
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted('deepfakes', 'real-or-not-real');
    },
    onFirstCorrectClick() {
      this.firstAudioAnswered = true;
      this.firstAudioCorrect = true;
      this.firstAudioExplanation = "Correct! The left audio clip is real.";

    },
    onFirstIncorrectClick() {
      this.firstAudioAnswered = true;
      this.firstAudioCorrect = false;
      this.firstAudioExplanation = "Incorrect! The left audio clip is real.";
    },
    onSecondCorrectClick() {
      this.secondAudioAnswered = true;
      this.secondAudioCorrect = true;
      this.secondAudioExplanation = "Correct! The right audio clip is real.";

    },
    onSecondIncorrectClick() {
      this.secondAudioAnswered = true;
      this.secondAudioCorrect = false;
      this.secondAudioExplanation = "Incorrect! The right audio clip is real.";
    },
    onThirdCorrectClick() {
      this.thirdAudioAnswered = true;
      this.audioDemoComplete = true;
      this.thirdAudioCorrect = true;
      this.thirdAudioExplanation = "Correct! The left audio clip is real.";

    },
    onThirdIncorrectClick() {
      this.thirdAudioAnswered = true;
      this.audioDemoComplete = true;
      this.thirdAudioCorrect = false;
      this.thirdAudioExplanation = "Incorrect! The left audio clip is real.";
    },
  },
  components: {
    'nav-bar': NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    'purple-btn': PurpleBtn,
    'purple-btn-outline': PurpleBtnOutline
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
  margin-top: 60px;
}

.section-text {
  width: 60%;
  text-align: left;
}

.text-section {
  opacity: 1;
  max-height: 2000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  display: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }
}
</style>

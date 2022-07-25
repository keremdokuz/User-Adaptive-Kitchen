<template>
  <div>
    <div v-if="recipe">
      <v-stepper v-model="currentStep" vertical>
        <v-container v-for="cookingStep in recipe.steps" :key="cookingStep.id">
          <v-stepper-step
            :complete="currentStep > cookingStep.id"
            :step="`${cookingStep.id}`"
          >
            <h2>
              {{ cookingStep.desc }}
            </h2>
            <br />
            <h4>
              {{ cookingStep.hint }}
            </h4>
            <br />
            <!--<small>
              {{ features(cookingStep) }}
            </small>-->
          </v-stepper-step>

          <v-stepper-content :step="`${cookingStep.id}`">
            <v-img
              v-if="cookingStep.picture_url"
              :src="cookingStep.picture_url"
              contain
              max-height="300"
            >
            </v-img>
            <v-btn
              v-if="currentStep != recipe.steps.length"
              color="primary"
              @click="
                currentStep = cookingStep.id + 1;
                snackbar = true;
              "
            >
              Continue
            </v-btn>
            <v-btn
              v-if="currentStep != 1"
              @click="
                currentStep = cookingStep.id - 1;
                snackbar = true;
              "
              text
            >
              Go Back
            </v-btn>
            <v-snackbar v-model="snackbar" :timeout="timeout" :multiLine="true">
              <h1>
                {{ recipe.steps[currentStep - 1].message }}
              </h1>
            </v-snackbar>
          </v-stepper-content>
        </v-container>
      </v-stepper>
    </div>
    <div v-else>
      <v-parallax src="https://wallpapercave.com/wp/wp9110111.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-thin mb-4">
              Welcome to the User Adaptive Kitchen
            </h1>
            <h4 class="subheading">
              Please select a recipe and let us listen to you!
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
    value: Number,
  },
  methods: {
    features(cookingStep) {
      return cookingStep.feature.join(", ");
    },
  },
  watch: {
    currentStep(value) {
      if (value < 0) {
        return;
      }
      this.$emit("input", value);
    },
    value(newValue) {
      if (newValue > 0) {
        this.currentStep = newValue;
      }
    },
  },
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      currentStep: 1,
      remaining_time: 0,
    };
  },
};
</script>

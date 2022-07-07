<template>
  <div>
    <div v-if="recipe">
      <v-stepper v-model="currentStep" vertical>
        <v-container v-for="cookingStep in recipe.steps" :key="cookingStep.id">
          <v-stepper-step
            :complete="currentStep > cookingStep.id"
            :step="`${cookingStep.id}`"
          >
            <h1>
              {{ cookingStep.desc }}
            </h1>
            <br />
            <h3>
              {{ cookingStep.hint }}
            </h3>
            <br />
            <small>
              {{ features(cookingStep) }}
            </small>
          </v-stepper-step>

          <v-stepper-content :step="`${cookingStep.id}`">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="300px">
              <img style="width:100%" v-if=cookingStep.picture_url :src="cookingStep.picture_url">
            </v-card>
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

            <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ recipe.steps[currentStep - 1].message }}
            </v-snackbar>
          </v-stepper-content>
        </v-container>
      </v-stepper>
    </div>
    <div v-else>
      <v-container>
        <center style="font-size: 100px">SELECT A RECIPE</center>
      </v-container>
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
    };
  },
};
</script>

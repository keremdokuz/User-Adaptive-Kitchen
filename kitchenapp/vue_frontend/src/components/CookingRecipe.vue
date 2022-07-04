<template>
  <v-stepper v-model="currentStep" vertical>
    <v-container v-for="cookingStep in recipe.steps" :key="cookingStep.id">
      <v-stepper-step
        :complete="currentStep > cookingStep.id"
        :step="`${cookingStep.id}`"
      >
        {{ cookingStep.desc }}
        <small>{{ cookingStep.hint }}</small>
        
      </v-stepper-step>

      <v-stepper-content :step="`${cookingStep.id}`">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn v-if="currentStep!=recipe.steps.length" color="primary" @click="currentStep = cookingStep.id + 1; snackbar = true">
          Continue
        </v-btn>
        <v-btn v-if="currentStep!=1" @click="currentStep = cookingStep.id - 1; snackbar = true" text> Go Back </v-btn>

        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
        >
          {{ recipe.steps[currentStep - 1].message }}
        </v-snackbar>

        

      </v-stepper-content>
      
      

    </v-container>
  </v-stepper>
  
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout:2000,
      currentStep: 1,
      recipe: {
        title: "THIS DISH",
        steps: [
          {
            id: 1,
            desc: "Turn on stove",
            feature: "none",
            hint: "Watch out for your fingers!",
            message: "Back at the beginning",
          },
          {
            id: 2,
            desc: "Put water in pot and start boiling",
            feature: "runningWater",
            hint: "Add some salt too.",
            message: "Sound recognized",
          },
          {
            id: 3,
            desc: "Chop vegetables and put them into pot",
            feature: "chopping",
            hint: "Tomatoes work especially well.",
            message: "Sound recognized",
          },
          {
            id: 4,
            desc: "Heat up last night's leftovers in microwave",
            feature: "microwave",
            hint: "One to two minutes.",
            message: "Alarm set for 2 Minutes",
          },
        ],
      },
    };
  },
};
</script>

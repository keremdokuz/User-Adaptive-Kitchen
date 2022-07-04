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
        <v-btn color="primary" @click="currentStep = cookingStep.id + 1">
          Continue
        </v-btn>
        <v-btn @click="currentStep = cookingStep.id - 1" text> Go Back </v-btn>
      </v-stepper-content>
    </v-container>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      recipe: {
        title: "THIS DISH",
        steps: [
          {
            id: 1,
            desc: "Turn on stove",
            feature: "none",
            hint: "Watch out for your fingers!",
          },
          {
            id: 2,
            desc: "Put water in pot and start boiling",
            feature: "runningWater",
            hint: "Add some salt too.",
          },
          {
            id: 3,
            desc: "Chop vegetables and put them into pot",
            feature: "chopping",
            hint: "Tomatoes work especially well.",
          },
          {
            id: 4,
            desc: "Heat up last night's leftovers in microwave",
            feature: "microwave",
            hint: "One to two minutes.",
          },
        ],
      },
    };
  },
};
</script>

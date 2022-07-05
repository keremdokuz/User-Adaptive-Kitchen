<template>
  <div>
    <v-app-bar dense dark>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>

      <v-toolbar-items>
        <MicrophoneSelection />

        <v-btn @click="start" v-if="!isListening" class="ml-4" color="blue">
          Start Predicting
        </v-btn>
        <v-btn @click="stop" v-if="isListening" class="ml-4" color="blue">
          Stop Predicting
        </v-btn>
      </v-toolbar-items>

      <v-card-title>
        <v-card-text v-if="!isLoading">
          prediction:{{ prediction }} confidence:{{ confidence }}
        </v-card-text>
        <v-progress-circular v-if="isLoading" indeterminate />
      </v-card-title>
    </v-app-bar>

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
  </v-stepper> />
  </div>
</template>

<script>
import axios from "axios";
//import CookingRecipe from "@/components/CookingRecipe.vue";
import MicrophoneSelection from "@/components/MicrophoneSelection.vue";

export default {
  name: "App",

  components: {
    MicrophoneSelection,
  },

  computed: {
    prediction() {
      return this.currentPrediction ? this.currentPrediction : "None";
    },
    confidence() {
      return this.currentConfidence > 0 ? `${this.currentConfidence}` : "None";
    },
  },

  methods: {
    async getPrediction() {
        (this.isLoading = true),
          await axios
            .get("http://127.0.0.1:8000/predict")
            .then((res) => {
              console.log(res);
              this.currentPrediction = res.data["classLabel"];
              this.currentConfidence = res.data["confidence"];
              this.isLoading = false;
              if (this.currentPrediction === this.recipe.steps[this.currentStep].feature) {
                console.log("Next step");
                this.currentStep += 1;
                }
            })
            .catch((err) => console.log(err));
            },
    
    async start() {
      this.isListening = true;
      while(this.isListening) {
        this.getPrediction();
        await new Promise(r => setTimeout(r, 6000));
        }
    },
    
    stop() {
      this.isListening = false;
    },
    
  },

  data: () => ({
    currentPrediction: "",
    currentConfidence: -1,
    isLoading: false,
    isListening: false,
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
          feature: "Silence",
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
  }),
};
</script>

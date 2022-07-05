<template>
  <div>
    <v-app-bar dense dark>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>

      <v-toolbar-items>
<<<<<<< HEAD
        <MicrophoneSelection />

        <v-btn @click="start" v-if="!isListening" class="ml-4" color="blue">
          Start Predicting
        </v-btn>
        <v-btn @click="stop" v-if="isListening" class="ml-4" color="blue">
          Stop Predicting
        </v-btn>
=======
        <v-card-title>
          <v-progress-circular v-if="isLoading" indeterminate />
        </v-card-title>
>>>>>>> de3dfc95850abf454e644032520aca824cff85d4
      </v-toolbar-items>
    </v-app-bar>

<<<<<<< HEAD
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
=======
    <v-row>
      <v-col cols="10"><CookingRecipe index = "0"/></v-col>
      <v-col>
        <v-card>
          <v-card-title> Prediction Results </v-card-title>
          <v-card-text>
            <v-card-text> prediction:{{ prediction }} </v-card-text>
            <v-card-text> confidence:{{ confidence }} </v-card-text>
          </v-card-text>
          <v-card-actions>
            <MicrophoneSelection />
          </v-card-actions>
          <v-card-actions>
             <v-btn v-ripple @click="handleListening" class="ml-4" color="blue">
              {{ listenText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
>>>>>>> de3dfc95850abf454e644032520aca824cff85d4
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
    listenText() {
      return this.listen ? "Stop Listening" : "Start Listening";
    },
    prediction() {
      return this.currentPrediction ? this.currentPrediction : "None";
    },
    confidence() {
      return this.currentConfidence > 0 ? `${this.currentConfidence}` : "None";
    },
  },

  methods: {
    handleListening() {
      this.listen = !this.listen;
      if (this.listen) {
        this.getPrediction();
      }
    },

    async getPrediction() {
<<<<<<< HEAD
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
=======
      this.isLoading = true;
      axios
        .get("http://127.0.0.1:8000/predict")
        .then((res) => {
          console.log(res);
          this.currentPrediction = res.data["classLabel"];
          this.currentConfidence = res.data["confidence"];
          this.isLoading = false;
          if (this.listen) {
            this.getPrediction();
          }
        })
        .catch((err) => console.log(err));
>>>>>>> de3dfc95850abf454e644032520aca824cff85d4
    },
    
    stop() {
      this.isListening = false;
    },
    
  },

  data: () => ({
    currentPrediction: "",
    currentConfidence: -1,
    isLoading: false,
<<<<<<< HEAD
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
=======
    listen: false,
>>>>>>> de3dfc95850abf454e644032520aca824cff85d4
  }),
};
</script>

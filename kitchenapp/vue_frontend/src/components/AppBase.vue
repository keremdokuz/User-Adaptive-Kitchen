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
        <v-card-title>
          <v-progress-circular v-if="isLoading" indeterminate />
        </v-card-title>
      </v-toolbar-items>
    </v-app-bar>

    <v-row>
      <v-col cols="8"><CookingRecipe v-model="currentStep" :recipe="recipe" /></v-col>
      <v-col cols="4">
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
          <v-card-text>
            <RecipeList v-model="selectedRecipe" :recipes="recipes" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import CookingRecipe from "./CookingRecipe";
import MicrophoneSelection from "./MicrophoneSelection";
import RecipeList from "./RecipeList";

export default {
  name: "App",

  components: {
    MicrophoneSelection,
    RecipeList,
    CookingRecipe,
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
    recipe() {
      return this.selectedRecipe >= 0
        ? this.recipes[this.selectedRecipe]
        : undefined;
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
    listen: false,
    selectedRecipe: -1,
    isListening: false,
    currentStep: 1,
    recipes: [
      {
        title: "THIS DISH",
        description: "this is a delicious dish",
        pictureUrl:
          "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSBLXkuUROF4JIrBMaxOf0s2s5rqkl_2_w4bTFvgGfaB6CvZ4WzNM5JHy7d9gvmghA2s7i9APQCfhB66Q6vSdU",
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
      {
        title: "ANOTHER DISH",
        description: "this is a more delicious dish",
        pictureUrl:
          "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTnVSWrzDPI_ScD4mk9S0Qrq5IhL35b3yW3oDVzqOIBPn2MJ4cl6CVGXONty33ObJ2nYEbMvEZttNp345sVZzw",
        steps: [
          {
            id: 1,
            desc: "Turn on oven",
            feature: "none",
            hint: "Watch out for your fingers!",
            message: "Back at the beginning",
          },
          {
            id: 2,
            desc: "Clean up veggies",
            feature: "runningWater",
            hint: "Add some salt too.",
            message: "Sound recognized",
          },
          {
            id: 3,
            desc: "Boil veggies",
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
    ],
  }),
};
</script>

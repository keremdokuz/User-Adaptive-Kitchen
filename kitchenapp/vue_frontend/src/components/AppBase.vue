<template>
  <div>
    <v-app-bar dense dark>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>

      <v-toolbar-items>
        <MicrophoneSelection />

        <v-btn @click="getPrediction" class="ml-4" color="blue">
          Get Prediction
        </v-btn>
      </v-toolbar-items>

      <v-card-title>
        <v-card-text v-if="!isLoading">
          prediction:{{ prediction }} confidence:{{ confidence }}
        </v-card-text>
        <v-progress-circular v-if="isLoading" indeterminate />
      </v-card-title>
    </v-app-bar>

    <CookingRecipe />
  </div>
</template>

<script>
import axios from "axios";
import CookingRecipe from "./CookingRecipe";
import MicrophoneSelection from "./MicrophoneSelection";

export default {
  name: "App",

  components: {
    CookingRecipe,
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
        axios
          .get("http://127.0.0.1:8000/predict")
          .then((res) => {
            console.log(res);
            this.currentPrediction = res.data["classLabel"];
            this.currentConfidence = res.data["confidence"];
            this.isLoading = false;
          })
          .catch((err) => console.log(err));
    },
  },

  data: () => ({
    currentPrediction: "",
    currentConfidence: -1,
    isLoading: false,
  }),
};
</script>

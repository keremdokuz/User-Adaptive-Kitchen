<template>
  <div>
    <v-app-bar dense dark>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>

      <v-toolbar-items>
        <v-card-title>
          <v-progress-circular v-if="isLoading" indeterminate />
        </v-card-title>
      </v-toolbar-items>
    </v-app-bar>

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
    },
  },

  data: () => ({
    currentPrediction: "",
    currentConfidence: -1,
    isLoading: false,
    listen: false,
  }),
};
</script>

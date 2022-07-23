<template>
  <div>
    <v-app-bar dense dark>
      <v-icon class="mr-4">{{ icon }}</v-icon>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>
      <v-toolbar-title class="ml-2" id="demo" v-if="show_timer"></v-toolbar-title>

    </v-app-bar>

    <v-row class="mx-1 my-1">
      <v-col cols="8">
        <CookingRecipe v-model="currentStep" :recipe="recipe" @show-timer='(bool) => show_timer = bool'/>
      </v-col>
      <v-col cols="4">
        <v-card color="#F0F8FF">
          <v-card-title> Prediction Results </v-card-title>

          <v-card-text>
            <v-list v-if="currentPrediction.length" dense elevation="2">
              <v-list-item
                dense
                v-for="(prediction, i) in currentPrediction"
                :key="i"
              >
                <v-list-item-avatar max-height="25" color="blue">
                  %{{ currentConfidence[i] }}
                </v-list-item-avatar>
                <v-list-item-content color="gray">
                  {{ prediction }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list-item v-else-if="!this.listen">
              Microphone is inactive at the moment.
            </v-list-item>
            <v-list-item v-else> Waiting for prediction... </v-list-item>
          </v-card-text>

          <v-card-actions>
            <MicrophoneSelection />
          </v-card-actions>

          <v-card-actions>
            <v-btn v-ripple @click="handleListening" class="ml-4" color="blue">
              {{ listenText }}
              <v-icon :class="isLoading ? 'elem ml-4 mr-1' : 'ml-4 mr-1'">
                {{ microphone }}
              </v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <RecipeList v-model="selectedRecipe" :recipes="recipes" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="confirmation" :timeout=2000 :multiLine="true">
      <h1>
        Sound recognized
      </h1>
    </v-snackbar>
    <v-snackbar v-model="snack" :timeout=2000 :multiLine="true">
      <h1>
        {{snackMessage}}
      </h1>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import { mdiChefHat } from "@mdi/js";
import { mdiMicrophone } from "@mdi/js";

import CookingRecipe from "@/components/CookingRecipe.vue";
import MicrophoneSelection from "@/components/MicrophoneSelection.vue";
import RecipeList from "@/components/RecipeList.vue";
import { recipeLibrary } from "@/assets/recipes";

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
    recipe() {
      return this.selectedRecipe >= 0
        ? this.recipes[this.selectedRecipe]
        : undefined;
    },
    icon() {
      return mdiChefHat;
    },
    microphone() {
      return mdiMicrophone;
    },
  },

  methods: {
    handleListening() {
      this.listen = !this.listen;
      if (this.listen) {
        this.getPrediction();
      }
    },
    checkPrediction() {
      if (this.nextStepThreshold == 0) {
        this.nextStepThreshold = 1;
        this.isCurrentStepDone = false;
        console.log("ready for next step");
        return true;
      }

      if (
        this.recipes[this.selectedRecipe].steps[
          this.currentStep - 1
        ].feature.some((feature) => {
          return this.currentPrediction.includes(feature);
        })
      ) {
        this.isCurrentStepDone = true;
        console.log("detected current step");
        this.confirmation = true;
        if (this.first_recognised) {
          var sec = this.recipes[this.selectedRecipe].steps[this.currentStep - 1].timer_seconds;
          if (sec) {
            this.timer(sec);
            }
          }
        this.first_recognised = false;    
        return false;
      }

      if (this.isCurrentStepDone) {
        this.nextStepThreshold--;
        console.log("countdown");
      }

      return false;
    },
    async getPrediction() {
      this.isLoading = true;
      axios
        .get("http://127.0.0.1:8000/predict")
        .then((res) => {
          //console.log(res);
          this.currentPrediction = [
            res.data["classLabel0"],
            res.data["classLabel1"],
            res.data["classLabel2"],
            res.data["classLabel3"],
            res.data["classLabel4"],
          ];
          this.currentConfidence = [
            res.data["confidence0"],
            res.data["confidence1"],
            res.data["confidence2"],
            res.data["confidence3"],
            res.data["confidence4"],
          ];
          this.isLoading = false;
          if (this.selectedRecipe >= 0 && this.checkPrediction()) {
            console.log("Next step");
            this.first_recognised = true;
            this.currentStep += 1;
            this.snackMessage = this.recipes[this.selectedRecipe].steps[this.currentStep - 1].message;
            this.snack = true;
          
        }
          if (this.listen) {
            this.getPrediction();
          }
        })
        .catch((err) => console.log(err));
    },

  timer(seconds){
    this.show_timer = true;
    // Set the date we're counting down to
    var date = new Date();
    date.setSeconds(date.getSeconds() + seconds);
    var countDownDate = new Date(date).getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Zeit abgelaufen!";
        this.show_timer = false;
      }
    }, 1000);
  }
  },
  data: () => ({
    snack: false,
    snackMessage: "Hello World",
    confirmation: false,
    currentPrediction: [],
    currentConfidence: [],
    isLoading: false,
    listen: false,
    selectedRecipe: -1,
    currentStep: 1,
    isCurrentStepDone: false,
    nextStepThreshold: 1,
    recipes: recipeLibrary,
    show_timer: false,
    first_recognised: true,
  }),
};
</script>

<style scoped>
.elem {
  margin-left: 6;
  margin-right: 4;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 1s;
  -webkit-animation-name: grow;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: grow;
  -moz-animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;

  transition-property: -moz-transform;
  transition-duration: 1s;
  animation-name: grow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-webkit-keyframes grow {
  from {
    -webkit-transform: scale(1);
  }
  to {
    -webkit-transform: scale(2);
  }
}
@-moz-keyframes grow {
  from {
    -moz-transform: scale(1);
  }
  to {
    -moz-transform: scale(2);
  }
}
@keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
  }
}
</style>

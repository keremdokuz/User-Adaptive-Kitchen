<template>
  <div>
    <v-app-bar dense dark>
      <v-icon class="mr-2">{{ icon }}</v-icon>
      <v-toolbar-title>User Adaptive Kitchen</v-toolbar-title>
    </v-app-bar>

    <v-row class="mx-1 my-1">
      <v-col cols="8">
        <CookingRecipe v-model="currentStep" :recipe="recipe" />
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
              <v-icon>{{ microphone }}</v-icon>
            </v-btn>
            <v-card-title>
              <v-progress-circular v-if="isLoading" indeterminate />
            </v-card-title>
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
import { mdiChefHat } from "@mdi/js";
import { mdiMicrophone } from "@mdi/js";

import CookingRecipe from "@/components/CookingRecipe.vue";
import MicrophoneSelection from "@/components/MicrophoneSelection.vue";
import RecipeList from "@/components/RecipeList.vue";

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
        this.nextStepThreshold = 3;
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
          console.log(res);
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
            this.currentStep += 1;
          }
          if (this.listen) {
            this.getPrediction();
          }
        })
        .catch((err) => console.log(err));
    },
  },

  data: () => ({
    currentPrediction: [],
    currentConfidence: [],
    isLoading: false,
    listen: false,
    selectedRecipe: -1,
    currentStep: 1,
    isCurrentStepDone: false,
    nextStepThreshold: 3,
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
            feature: ["none", "Silence"],
            hint: "Watch out for your fingers!",
            message: "Back at the beginning",
          },
          {
            id: 2,
            desc: "Put water in pot and start boiling",
            feature: ["runningWater"],
            hint: "Add some salt too.",
            message: "Sound recognized",
          },
          {
            id: 3,
            desc: "Chop vegetables and put them into pot",
            feature: ["Silence"],
            hint: "Tomatoes work especially well.",
            message: "Sound recognized",
          },
          {
            id: 4,
            desc: "Heat up last night's leftovers in microwave",
            feature: ["microwave"],
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
            feature: ["none"],
            hint: "Watch out for your fingers!",
            message: "Back at the beginning",
          },
          {
            id: 2,
            desc: "Clean up veggies",
            feature: ["runningWater"],
            hint: "Add some salt too.",
            message: "Sound recognized",
          },
          {
            id: 3,
            desc: "Boil veggies",
            feature: ["chopping"],
            hint: "Tomatoes work especially well.",
            message: "Sound recognized",
          },
          {
            id: 4,
            desc: "Heat up last night's leftovers in microwave",
            feature: ["microwave"],
            hint: "One to two minutes.",
            message: "Alarm set for 2 Minutes",
          },
        ],
      },
      {
        title: "Rinderbraten mit Semmelknödeln und Preiselbeer-Birnen",
        description: "Nur für erfahrene Koche geeignet",
        pictureUrl:
          "https://c.rewe-static.de/34582100/2/34582100.png?impolicy=rds&im=Resize,height=600;Crop,width=730,height=600,gravity=Center",
        steps: [
          {
            id: 1,
            desc: "Backofen vorheizen",
            feature: ["nothing"],
            hint: "200°C, Ober-/Unterhitze",
            message: "Backofen wird auf 200°C gestellt.",
          },
          {
            id: 2,
            desc: "Gemüse schneiden",
            feature: ["chopping"],
            hint: "Karotten waschen und halbieren. Zwiebeln schälen und zusammen mit der Knoblauchknolle halbieren.",
            message: "Herdplatte wird erhitzt.",
          },
          {
            id: 3,
            desc: "Fleisch und Gemüse anbraten",
            feature: ["sizzling"],
            hint: "Schmorfleisch mit Salz und Pfeffer würzen und mit Weizenmehl bestäuben. In einer heißen Pfanne mit Öl kräftig anbraten. Schmorfleisch in einen Bräter setzen. Gemüse ebenfalls kurz in der Pfanne anbraten und zum Fleisch geben. Tomatenmark mit dem Rinderfond in die Pfanne geben, aufkochen lassen und über das Schmorfleisch gießen. Rosmarin und Lorbeerblätter zugeben.",
            message: "Nächster Schritt",
          },
          {
            id: 4,
            desc: "Im Ofen backen",
            feature: ["nothing"],
            hint: "Den Bräter abgedeckt für etwa 3 ½ Stunden in den Backofen schieben. Nach etwa 1 ½ Stunden Schmorzeit Karotten und Zwiebeln herausnehmen und beiseitestellen.",
            message:
              "Wecker für 1,5 Studen gesetzt. Wecker für 3,5 Stunden gesetzt.",
          },
          {
            id: 5,
            desc: "Gemüse schneiden",
            feature: ["chopping"],
            hint: "Karotten waschen und halbieren. Zwiebeln schälen und zusammen mit der Knoblauchknolle halbieren.",
            message: "Herdplatte wird erhitzt",
          },
          {
            id: 6,
            desc: "Brötchenwürfel machen",
            feature: ["sizzling"],
            hint: "Brötchen würfeln. In einer Pfanne oder auf einem Blech im Ofen rösten lassen. Brötchenwürfel in eine Schüssel geben und Eier, gehackte Petersilie und lauwarme Milch zugeben. Vermengen und mit Salz, Pfeffer und Muskat abschmecken. Etwa 20 Minuten ziehen lassen.",
            message: "Wecker für 20 Minuten gesetzt.",
          },
          {
            id: 7,
            desc: "Knödel machen",
            feature: ["boiling"],
            hint: "Gleich große Knödel formen und in etwas Weizenmehl wenden. Im leicht siedenden Wasser abkochen, bis sie oben schwimmen.",
            message: "Nächster Schritt.",
          },
          {
            id: 8,
            desc: "Birnen vorbereiten",
            feature: ["boiling"],
            hint: "Birnen halbieren und entkernen. In einem Topf mit Apfelsaft und Honig einkochen lassen, bis der komplette Saft verkocht ist und die Birnen karamellisiert sind.",
            message: "Nächster Schritt.",
          },
          {
            id: 9,
            desc: "Fertigstellen",
            feature: ["alarm"],
            hint: "Rinderbraten aus dem Bräter nehmen, in Scheiben schneiden und warm stellen. Sauce aufkochen und mit der angerührten Stärke binden. Gemüse in der Sauce kurz erwärmen und mit den Knödeln zum Braten anrichten. Birnen mit den Preiselbeeren füllen. Das aufgeschnittene Fleisch mit der heißen Sauce übergießen und alles servieren.",
            message: "Letzter Schritt.",
          },
        ],
      },
      {
        title: "Cupcakes",
        description: "Perfekt für den Geburtstag deiner Tochter",
        pictureUrl:
          "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/768_576/public/2021-08/rosen_cupcakes_20322.jpg?h=4521fff0&itok=7A5efJ81",
        steps: [
          {
            id: 1,
            desc: "Backofen vorheizen",
            feature: ["nothing"],
            hint: "Backofen auf 180°C Umluft vorheizen, ein Muffinblech (12er) mit Papierförmchen auslegen.",
            message: "Backofen wird auf 180°C gestellt.",
          },
          {
            id: 2,
            desc: "Teig erstellen",
            feature: ["Blender"],
            hint: "120 g weiche Butter mit Zucker, Vanillezucker und Eiern mixen, bis sich der Zucker aufgelöst hat. Mehl, Backpulver und Salz mischen, esslöffelweise unter die Eier-Masse mixen, sodass ein glatter Teig entsteht. Zitronenschale abreiben, unter den Teig mixen, dann nach und nach 60 ml Milch dazu gießen.",
            message: "Nächster Schritt.",
          },
          {
            id: 3,
            desc: "Teig backen",
            feature: ["nothing"],
            hint: "Teig in die Förmchen füllen, ca. 20 Minuten backen (Stäbchenprobe!). Komplett auskühlen lassen.",
            message: "Wecker auf 20 Minuten gestellt.",
          },
          {
            id: 4,
            desc: "Frosting erstellen",
            feature: ["mixer"],
            hint: "Für das Frosting 120 g Butter schaumig schlagen, dann nach und nach 330 g Puderzucker untermixen und am Ende 20 ml Milch. Alles nochmal 2 Minuten auf höchster Stufe mixen, ein paar Tropfen von der Lebensmittelfarbe zufügen, bis das Frosting den gewünschten Rosaton erreicht hat. Bis zum Verwenden im Kühlschrank aufbewahren.",
            message: "Nächster Schritt.",
          },
          {
            id: 5,
            desc: "fertigstellen",
            feature: ["alarm"],
            hint: "Das Frosting in einen Spritzbeutel mit Sterntülle füllen und großzügig auf die Küchlein spritzen.",
            message: "Letzter Schritt.",
          },
        ],
      },
      {
        title: "The Student's Delight",
        description: "Basierend auf Realität",
        pictureUrl:
          "https://img.myloview.de/fototapeten/spicy-instant-ramen-noodle-bowl-700-195851747.jpg",
        steps: [
          {
            id: 1,
            desc: "Instantnudeln vorbereiten",
            feature: ["nothing"],
            hint: "0,5 Liter Wasser in den Wasserkocher geben und anmachen. Derweil Instant-Nudel Verpackung aufmachen und Nudeln zusammen mit allen anderen Zutaten in eine Schüssel geben.",
            message: "Start.",
            picture_url:
              "https://www.carlroth.com/medias/HHY9-01-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wxMzgxOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDYyL2hlNy84ODI4NDE2Njg4MTU4LmpwZ3w0YWRiNWMxNGIxYjljM2EwZmNiNTVhODYxODE4NDhiOWUwZTQ5OWU4ZjczYmU3NDRjODA2M2Q2MjFmZTBiZDM2",
          },
          {
            id: 2,
            desc: "Kochendes Wasser zugeben",
            feature: ["boiling"],
            hint: "Wasser in die Schüssel tun. Schüssel mit irgendetwas abdecken. Denk dran eine Unterlage für die Schüssel zu haben, damit man sie später transportieren kann. Ca.5 Minuten warten.",
            message: "Wecker auf 5 Minuten gestellt.",
            picture_url:
              "https://wirin.de/images/kids/texte/2014_35_Kochtopf-4c.jpg",
          },
          {
            id: 3,
            desc: "Noch was im Kühlschrank?",
            feature: ["microwave"],
            hint: "Kühlschrank nach etwaigen Resten suchen. Diese auf einen Teller geben und 1-2 Minuten in der Mikrowelle erhitzen.",
            message: "Letzter Schritt.",
            picture_url:
              "https://m.media-amazon.com/images/I/81xxOPvz+9L._AC_SX466_.jpg",
          },
        ],
      },
    ],
  }),
};
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue" class="ml-4" v-bind="attrs" v-on="on">
          Select Microphone
        </v-btn>
      </template>

      <v-card class="mx-auto" tile>
        <v-list shaped>
          <v-subheader>MICROPHONES</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(device, i) in devices" :key="i">
              <v-list-item-icon>
                {{ device.index }}
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="device.description"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      devices: [],
      isLoading: false,
      selectedItem: -1,
    };
  },
  watch: {
    dialog(newValue) {
      if (newValue) {
        this.isLoading = true;
        axios
          .get("http://127.0.0.1:8000/mics")
          .then((res) => {
            console.log(res);
            this.devices = res.data["devices"];
            this.isLoading = false;
          })
          .catch((err) => console.log(err));
      }
    },
    selectedItem(newValue) {
      if (newValue >= 0) {
        axios
          .post("http://127.0.0.1:8000/mics", {
            "idx": newValue,
          })
          .then((res) => {
            console.log(res);
            this.devices = res.data["devices"];
            this.isLoading = false;
          })
          .catch((err) => console.log(err));
        this.dialog = false;
      }
    },
  },
};
</script>

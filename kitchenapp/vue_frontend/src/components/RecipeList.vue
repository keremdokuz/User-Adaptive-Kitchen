<template>
  <v-card class="mx-auto" tile>
    <v-list shaped>
      <v-subheader>RECIPES</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(recipe, i) in recipes" :key="i">
          <v-list-item-icon>
            <v-avatar>
              <img :src="recipe.pictureUrl" alt="Image" />
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-title>
            {{ recipe.title }}
          </v-list-item-title>
          <v-list-item-action-text>
            {{ recipe.description }}
          </v-list-item-action-text>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    value: Number,
    recipes: Array,
  },
  watch: {
    selectedItem(value) {
      if (value < 0) {
        return;
      }
      this.$emit("input", value);
    },
  },
  data() {
    return {
      selectedItem: -1,
    };
  },
};
</script>

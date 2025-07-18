<template>
   <v-text-field
      v-model="searchQuery"
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Поиск..."
      variant="solo"
      hide-details
      single-line
      @click:append-inner="onClick"
      @click="performSearch"
      style="width: 450px; max-width: 500px;"
   ></v-text-field>
</template>

<script>
   export default {
      data() {
         return {
            loading: false,
            loaded: false,
            searchQuery: '',
         };
      },
      methods: {
         onClick() {
            this.loading = true;
            setTimeout(() => {
            this.loading = false;
            this.loaded = true;
            this.$emit('update-search', this.searchQuery);
            }, 1000);
         }
      }
   }
</script>
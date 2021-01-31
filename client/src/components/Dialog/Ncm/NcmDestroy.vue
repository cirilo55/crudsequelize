<template>
<div>
  <v-dialog max-width="300px">
    <template v-slot:activator="{ on }">
      <v-icon
          small
          class="mr-2"
          v-on="on"
      >
        mdi-delete
      </v-icon>
    </template>

    <v-card>
      <v-card-title>
        <h4>Deletar item ???</h4>

      </v-card-title>
      <v-card-text>
        <v-btn
            color="success"
            class="mr-4"
            @click="()=> {}"
        >
          Sim
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="() => {}"
        >
          Não
        </v-btn>

      </v-card-text>
    </v-card>

  </v-dialog>
</div>
</template>

<script>
export default {
name: "NcmDestroy.vue"
}
</script>

<style scoped>

</style>
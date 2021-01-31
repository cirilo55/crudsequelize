<template>
  <div>
    <v-dialog max-width="700px">
      <template v-slot:activator="{ on }">

        <v-icon
            small
            class="mr-2"
            v-on="on"
        >
          mdi-pencil
        </v-icon>

      </template>

      <v-card>
        <v-card-title>
          <h4> Atualizar Ncm </h4>

        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-text>
          <v-form

              lazy-validation>
            <!--    <v-form>-->
            <v-text-field

                label="Codigo"
                required
            ></v-text-field>

            <v-text-field

                label="Description"
                required
            ></v-text-field>
            <div class="row">

              <v-btn
                  
                  color="success"
                  class="mr-4"
                  @click="()=>{}"
              >
                Validate
              </v-btn>

              <v-btn
                  color="error"
                  class="mr-4"
                  @click="()=>{}"
              >
                Reset Form
              </v-btn>

            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
name: "NcmUpdate"
}
</script>

<style scoped>

</style>
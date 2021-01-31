<template>
  <div class="container-sm">
  <v-form
          ref="form"
          v-model="valid"
          lazy-validation>

    <v-text-field
        v-model="code"
        :counter="10"
        :rules="codeRules"
        label="Codigo"
        required
    ></v-text-field>

    <v-text-field
        v-model="description"
        :rules="descriptionRules"
        label="Description"
        required
    ></v-text-field>

  </v-form>
  </div>
</template>

<script>
export default {
  name: "NcmAddDialog",
  data: () =>({
    valid: true,
    code: '',
    codeRules:[
        v => !!v || 'Codigo é necessario.'
    ],
    description: '',
    descriptionRules:[
      v => !!v || 'Descrição é necessaria',

    ]

  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  }
}
</script>

<style scoped>
.container{


}
</style>
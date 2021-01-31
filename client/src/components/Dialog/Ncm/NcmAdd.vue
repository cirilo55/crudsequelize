<template>
  <div class="text-center">
  <v-dialog max-width="700px">
    <template v-slot:activator="{ on }">
    <v-btn dark v-on="on" class="success">Novo Item</v-btn>

    </template>

    <v-card>
      <v-card-title>
       <h4> Adicione novo Ncm </h4>

       </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
  <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
<!--    <v-form>-->
    <v-text-field
        v-model="form.code"
        :counter="10"
        :rules="codeRules"
        label="Codigo"
        required
    ></v-text-field>

    <v-text-field
        v-model="form.description"
        :rules="descriptionRules"
        label="Description"
        required
    ></v-text-field>
  <div class="row">

    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submit"
    >
      Validate
    </v-btn>

    <v-btn
        color="error"
        class="mr-4"
        @click="reset"
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
import config from "@/services/config";

export default {
  name: "NcmAddDialog",
  data: () =>({
    form:{
      code: '',
      description: ''
    },
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
    submit() {
      if (this.$refs.form.validate()) {
        config.post('ncm', this.form)
            .then(function (response) {
              console.log(response)
              config.get('ncm',)
              .then(function(){

                console.log('chegou')
              }).catch(err =>{
                console.log(err)
              })
            }).catch(error => {
          console.log(error)
        })
      } else {
        alert('not Valid')
      }
    },
    // validate(){
    //   this.$refs.form.validate()
    // }
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.mr-4{
  padding: 20px;
  float: right;
}
.row{
  padding: 15px;

}

</style>
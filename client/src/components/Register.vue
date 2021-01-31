<template>
  <v-container fluid class="main">
  <v-layout column>
    <v-row align="center" justify="center">

    <v-flex xs12 offset-xs2s>

        <div class="white elevation-2">

          <v-app-bar flat dense class="title">
            <v-app-bar-title class="display flex center">Register</v-app-bar-title>
          </v-app-bar>

          <div class="fields">
          <v-text-field
              label="Usuario"
              v-model="form.username"
          ></v-text-field>


          <br>
          <v-text-field
              label="Senha"
              v-model="form.password">
          </v-text-field>

          <br>
          <div class="error"/>
          <br>
          <v-card-actions class="justify-center">
          <v-btn primary absolute
                 class="register-btn"
                 @click="submit()"
          >Register</v-btn>
          </v-card-actions>

        </div>
        </div>
    </v-flex>

    </v-row>
  </v-layout>

  </v-container>
</template>

<script>
import config from "@/services/config";
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },

    }
  },

  methods: {

    submit(){
      config.post('user',this.form)
      .then(function(response){
        console.log(response.data)
      }).catch(error =>{
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.fields{
  padding: 30px;
}
.v-text-field{
  border: 0;
  padding: 2px;
  background: #fff;
  font: 12pt sans-serif;
}
.error{
  color: red
}
.register-btn
{
  background-color: blue;
  padding: 30px;
}
.container{
  box-sizing: content-box;
  margin: auto;
  position: relative;
  width: 40rem;
  padding: 40px;
}
.title{
  color: blueviolet;
  padding: 5px;

}

.v-text-field{
  position: relative;
}
</style>
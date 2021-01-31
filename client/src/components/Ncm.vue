<template>
  <div class="container">
      <v-data-table
      :headers="headers"
      :items="ncms"
      class="elevation-1"
      no-data-text="Sem registro"
      >
        <NcmAdd
        v-if="dialog"
        />

<template v-slot:top>
  <v-toolbar flat class="title">
    <v-toolbar-title>NCM</v-toolbar-title>
    <v-divider
        class="mx-4"
        inset
        vertical
    ></v-divider>
    <v-spacer></v-spacer>


    <v-btn
            color="primary"
            dark
            @click="alterDialog()"
        >
          Novo Item
        </v-btn>



  </v-toolbar>



</template>

        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>

          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>

      </v-data-table>
  </div>
</template>




<script>
import config from "@/services/config";
import NcmAdd from "@/components/Dialog/Ncm/NcmAdd";

export default {

    name: 'app',
    data() {
      return {
        dialog: false,
        headers:[
          {text: 'Codigo', value:'code'},
          {text: 'Descrição', value:'description'},
          {text: 'Actions', value:'actions', sortable: false}
        ],
        ncm: {
          code: "",
          description: ""
        },
        ncms: [

        ]

      }

    },
    beforeMount() {
      let self = this
      config.get('ncm',)
          .then(function (response) {
            console.log(response.data)
            self.ncms = response.data.ncm

          }).catch(error => {
        console.log(error)
      })
    },

  methods:{
    alterDialog(){
      this.dialog = !this.dialog;
    }

  },
  components: {
      NcmAdd
  }

}
</script>

<style scoped>
.container{
  padding: 80px;
}
.title{

}

</style>
<template>
  <div class="container">
      <v-data-table
      :headers="headers"
      :items="ncms"
      class="elevation-1"
      no-data-text="Sem registro"
      >

<template v-slot:top>
  <v-toolbar flat class="title">
    <v-toolbar-title>NCM</v-toolbar-title>
    <v-divider
        class="mx-4"
        inset
        vertical
    ></v-divider>
    <v-spacer></v-spacer>

    <div>
      <NcmAdd />
    </div>

  </v-toolbar>

</template>

        <template v-slot:item.actions="{  }">
          <div>
          <NcmUpdate />

          <NcmDestroy />
          </div>

        </template>

      </v-data-table>
  </div>
</template>




<script>
import config from "@/services/config";
import NcmAdd from "@/components/Dialog/Ncm/NcmAdd";
import NcmDestroy from "@/components/Dialog/Ncm/NcmDestroy";
import NcmUpdate from "@/components/Dialog/Ncm/NcmUpdate";

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
      NcmAdd,
      NcmDestroy,
      NcmUpdate
  }

}
</script>

<style scoped>
.container{
  padding: 80px;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.title{

}

</style>
<template>
  <nav>
    <v-app-bar app color="blue">
    <div class="row">

      <div class="col-md-9 title">
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <span>Api</span>
      </div>

      <div class="col-md-3 login-block">
        <a class="block" href="login">Login</a>
        <v-spacer></v-spacer>
        <a class="block" href="Register">Register</a>
      </div>


    </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        width="300px"
        temporary
        app
        color="blue"
        class="SideNavbar"
    >
      <Bar />
    </v-navigation-drawer>

  </nav>
</template>
<script>
import Bar from "./Navbar/index";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    Bar,
  },
};
</script>

<style scoped>
.navDrop {
  padding-left: 25px !important;
}
.title{
  position: relative;
  align-items: flex-end;
  padding: 30px;


}
.login-block {
  position: relative;
  /* display: inline-block; */
  align-items: flex-end;
  float: left;
}
.a :hover {
  background-color: rgb(17, 1, 1);
}

.block {
  padding: 30px;
  float: left;
  font-weight: bold;
  color: white;

}
.navDrop {
  padding-left: 25px !important;
}
</style>

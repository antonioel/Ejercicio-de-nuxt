<template>
<v-app id='inspire'>
    <v-form @click="enviar">
    <v-content>
      <v-container>
        <v-layout column wrap>
            <v-flex xs12 sm6>
          <v-text-field
            v-model="name"
            hint="el nombre"
            label="Pon un nombre"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="text"
            hint="el texto"
            label="Pon un texto"
          ></v-text-field>
          <v-btn>submit</v-btn>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-form>
</v-app>

</template>
<script>
export default{
asyncData(){
    return{
        name:'',
        text:'',
    }
}
}

</script>
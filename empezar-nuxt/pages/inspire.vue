<template>
  <v-layout>
    <v-flex
    text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
        <!-- {{blah}} -->
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  layout:'default'
  // asyncData(context){
  //   if(process.server){
  //   console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  // }
  // return {blah: 'hi'}
  // },
}
</script>

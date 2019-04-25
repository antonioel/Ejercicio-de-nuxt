<template>
  <div>
    <no-ssr placeholder="loading...">
      <v-quagga :onDetected='logIt':renderSize='renderSize' :renderTypes="['ean_reader']"></v-quagga>
    </no-ssr>
  </div>
</template>
<script>
export default {
  //name:'v-quagga',
  data () {
    return {
      renderSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      if(process.client){
      console.log('detected', data);
      }
    }

  }
}

</script>
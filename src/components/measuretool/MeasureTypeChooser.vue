<template>

  <v-btn-toggle v-model="measureTypeData" mandatory>
     <v-btn large value="distance">
       Distance
     </v-btn>
     <v-btn large value="area">
       Area
     </v-btn>
   </v-btn-toggle>

</template>

<script>
  export default {
    name: 'wgu-measure-type-chooser',
    props: {
      measureType: {type: String, default: 'distance'}
    },
    data () {
      return {
        measureTypeData: this.measureType
      }
    },
    watch: {
      // listen to changed measurement type and forward to parent component
      measureTypeData (newVal, oldVal) {
        this.$emit('wgu-measuretype-change', newVal, oldVal);
      }
    }
  }
</script>

<style>
</style>

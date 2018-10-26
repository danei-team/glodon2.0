<template>
  <div class="proSer">
    <bannar></bannar>
    <cell></cell>
    <prolist1></prolist1>
    <prolist2></prolist2>
  </div>
</template>
  
<script>
import bannar from './bannar'
import cell from './cell'
import prolist1 from './prolist1'
import prolist2 from './prolist2'

export default {
  components:{
    bannar,
    cell,
    prolist1,
    prolist2
  },
  mounted(){

  }
}
</script>
  
<style scoped>
*{margin: 0;padding: 0;}
.clearfix::after{content: '';display: block;clear: both;}
.proSer{position: relative;top: 60px;}
</style>
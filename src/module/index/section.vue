<template>
  <section>
    <router-view></router-view>
  </section>  
</template>
  
<script>
export default {
  mounted(){
    this.$router.push('solution');
  }
}
</script>
  
<style scoped>
</style>
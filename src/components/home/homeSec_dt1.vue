<template>
  <div class="dt1">
    <div class="bg1">
      <a href="#"></a>
    </div>
    <div class="bg2">
      <a href="#"></a>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      timer:null
    }
  },
  methods:{
    caral(){
      var i = 0;
      if(!this.timer) clearInterval(this.timer)      
      this.timer = setInterval(function(){
        var bg1 = document.querySelector('.bg1')
        var bg2 = document.querySelector('.bg2')
        if(i%2){
          bg1.style.opacity = 1;
          bg2.style.opacity = 0;
        }
        else{
          bg1.style.opacity = 0;
          bg2.style.opacity = 1;
        }
        i++;
      },3000)
    }
  },
  mounted(){
    if(!this.timer) clearInterval(this.timer)
    this.caral()
  },
  destroyed(){
    clearInterval(this.timer)
  }
}
</script>
  
<style scoped>
.clearfix::after{content: '';display: block;clear: both;}
.dt1{position: relative;display: block;height: 551px;margin: 0;padding: 0;}
.dt1 .bg1,.dt1 .bg2{height: 551px;transition:2000ms;width: 1423px;position: absolute;  left: 0px;
top: 0px;z-index: 10;opacity: 1;}
.dt1 .bg2{opacity: 0;}
.dt1 span:last-child{margin-left: 10px;}
.dt1 a{display: block;width: 100%;height: 100%;text-indent: -9999px;background-position: center;}
.bg1 a{background: url(/static/img/section/homeSec/dt1_bg1.jpg) no-repeat center top;}
.bg2 a{background: url(/static/img/section/homeSec/dt1_bg2.jpg) no-repeat center top;}
</style>
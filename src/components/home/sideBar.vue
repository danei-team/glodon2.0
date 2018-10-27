<template>
  <div class="sideBar">
    <ul>
      <li><div class="wx"><img src="/static/img/section/homeSec/sideBar_wx.png" alt=""></div></li>
      <li></li>
      <li><div class="phone"><span>4000-166-166</span></div></li>
      <li></li>
    </ul>
  </div>
</template>
  
<script>
export default {
  mounted(){
  }
}
</script>
  
<style scoped>
.clearfix::after{content: '';display: block;clear: both;}
.sideBar{width: 50px;height: 186px;margin: 100px 0 300px 300px;background: #fff;border-radius: 3px;
box-shadow: 0px 0px 6px #aaa;position: fixed;top: 20%;right: 8px;z-index: 99;}
.sideBar ul{padding-top: 1px;}
.sideBar ul li{width: 100%;height: 41px;padding: 4px 0 6px 0;text-align: center;margin-top: 4px;cursor: pointer;}
.sideBar ul li:nth-child(1){background: url(/static/img/section/homeSec/sideBar1.png) no-repeat 9px 5px;}
.sideBar ul li:nth-child(2){background: url(/static/img/section/homeSec/sideBar2.png) no-repeat 9px 5px;}
.sideBar ul li:nth-child(3){background: url(/static/img/section/homeSec/sideBar3.png) no-repeat 9px 5px;}
.sideBar ul li:nth-child(4){background: url(/static/img/section/homeSec/sideBar4.png) no-repeat 9px 5px;}
.sideBar ul li .wx{position: absolute;top: -36px;left: -126px;width: 110px;
height: 110px;background: #fff;border-radius: 5px;display: none;box-shadow: 0px 0px 3px #aaa;}
.sideBar ul li:hover .wx::before{content: "";width: 0;height: 0;position: absolute;top: 46px;right: -8px;
border-top: 8px solid transparent;border-bottom: 8px solid transparent;border-left: 8px solid #fff;
filter: drop-shadow(1px 1px 0 #aaa);}
.sideBar ul li:hover .wx{display: block;}    
.sideBar ul li .wx>img{padding-top: 5px;}
.sideBar ul li .phone{font-size: 20px;position: absolute;top: 104px;left: -218px;width: 210px;
padding: 4px 0 8px 0;background: #fff;border-radius: 5px;display: none;box-shadow: 0px 0px 3px #aaa;}
.sideBar ul li:hover .phone{display: block;}
</style>
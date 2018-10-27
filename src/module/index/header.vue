<template>
  <header class="nav">
    <div class="nav-box">
      <div class="logo"><a href="#" @click="goto(0)">GLODON广联达</a></div>
      <div class="search">
        <input maxlength="25" type="text" onkeydown="if(event.keyCode==13){$('#searchIcon').click();return false;}">
        <span></span>
      </div>
      <div class="navlist clearfix">
        <ul>
          <li v-for="(item,index) of navlist" :key="index" @click="goto(index)">
            <a href="#" v-text="item"></a>
            <span v-if="index==1||index==2||index==5"></span>
            <div class="seclist" v-if="index==1||index==2||index==5">
              <div class="content clearfix">
                <ul><li v-for="(item, index) in seclist[index]" :key="index"><a href="#" v-text="item"></a></li></ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
      navlist:['首页','产品与服务','解决方案','应用案例','新闻资讯','关于我们'],
      seclist:['',['造价管理','土建计量','云计价','BIM建造','智慧工地','信息服务'],['解决方案','房地产甲方','企业采购','施工企业','交易中心','高等院校'],'','',['关于我们','了解我们','行业贡献','投资者关系','加入我们','联系我们']]
    }
  },
  methods:{
    goto(index){
      if(index==0) this.$router.push('home');
      else if(index==1) this.$router.push('proSer');
      else if(index==2) this.$router.push('solution');
      else if(index==3) this.$router.push('application');
      else if(index==4) this.$router.push('news');
      else if(index==5) this.$router.push('aboutUs');
    }
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.clearfix::after{content: '';display: block;clear: both;}
.nav{position: fixed;top: 0px;z-index: 20000;background: #fff;width: 100%;min-width: 1200px;height: 60px;border-bottom: 1px solid #ddd;}
.nav-box{width: 1200px;height: 60px;margin: 0 auto;}
.logo{float: left;width: 260px;padding-top: 19px;position: relative;}
.logo a{display: block;overflow: hidden;width: 184px;height: 18px;background: url(/static/img/logo.jpg) no-repeat;text-indent: -999px;}
.search{width: 200px;height: 33px; border: 1px #ccc solid;border-radius: 3px;background: #fafafa;float: right;margin-top: 14px;
position: relative;}
.search input{width: 155px;margin-right: 10px;height: 31px;display: inline-block;border: none;line-height: 31px;font-size: 13px;padding-left: 12px;font-family: "Segoe UI", "Helvetica Neue", Helvetica, sans-serif;background: #fafafa;color: black;}
.search span{display: inline-block;cursor: pointer;background: url(/static/img/sstu.jpg) no-repeat 0 0px;width: 14px;height: 14px;position: relative;top: 1px;}
.navlist{position: relative;float: right;z-index: 1000;height: 60px;text-align: center;padding-right: 35px;}
.navlist ul{width: 100%;height: 100%;list-style-type: none;}
.navlist li {height: 100%;display: block;float: left;font-size: 14px;color: #666;line-height: 60px;cursor: pointer;padding: 0 22px;position: relative;}
.navlist li a{font-size: 16px;color: #333;line-height: 60px;}
.navlist li a:hover{text-decoration: none;}
.navlist li:hover a{background: #fff;color: #207be6;}
.navlist li span{display: inline-block;width: 12px;height: 10px;background: url(/static/img/dhico.png) no-repeat center center; transition: .5s;}
.navlist li:hover span{transform: rotate(180deg);}
.navlist>ul>li:hover>.seclist{height: 220px;}
.seclist{transition: .5s;position: absolute;top: 54px;left: 15px;padding-top: 0px;margin-top: 0px;
padding-bottom: 0px;margin-bottom: 0px;background: #fff; height: 0;border-radius: 5px;
box-shadow: 0 0 5px 0 rgba(0,0,0,.1), 0 2px 4px 0 rgba(0,0,0,.1);overflow: hidden;}
.seclist .content{margin: 0 14px;max-width: 592px;padding-bottom: 20px;}
.seclist .content ul{list-style-type: none;color: #555;cursor: pointer;float: left;margin-right: 26px;margin-top: 18px;}
.seclist .content ul li{max-width: 182px;min-width: 80px;}
.seclist .content ul li a{color: #333;display: block;text-align: center;line-height: 28px;font-size: 12px;}
.seclist .content ul li:first-child a{color: #333;display: block;line-height: 36px;font-weight: bold;
font-size: 14px;margin-bottom: 5px;border-bottom: 1px #e5e5e5 solid;text-align: center;text-decoration: none;}
</style>

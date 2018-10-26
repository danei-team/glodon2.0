<template>
  <div class="bannar">
    <h3>搜索广联达的产品和服务</h3>
    <span>
      <input type="text" onkeydown="if(event.keyCode==13){$('#searchbtn').click();return false;}" placeholder="搜索广联达的产品和服务">
      <font><img src="/static/img/section/proSer/icon.png" alt=""></font>      
    </span>
    <input type="hidden">
  </div>
</template>
  
<script>

export default {
  mounted(){

  }
}
</script>
  
<style scoped>
*{margin: 0;padding: 0;}
.clearfix::after{content: '';display: block;clear: both;}
.bannar{    background: url(/static/img/section/proSer/ban1.jpg) no-repeat top center;width: 100%;
    height: 300px;}
.bannar h3{font-size: 36px;
    color: #fff;
    text-align: center;
    font-weight: normal;
    letter-spacing: 6px;
    padding-top: 68px;}
.bannar>span{display: block;
    width: 720px;
    height: 40px;
    margin: 38px auto 0 auto;
    border: 1px #ccc solid;
    background: #fff;
    border-radius: 3px;position: relative;}
.bannar>span>input{width: 676px;
    height: 38px;
    border: none;
    font-size: 16px;
    color: #8d8c8c;
    font-family:  "Microsoft YaHei", sans-serif;
    line-height: 36px;
    padding-left: 10px;
    display: inline-block; border-radius: 3px;position: relative;} 
.bannar>span>font{cursor: pointer;display: inline-block;}
.bannar>span>font>img{    position: relative;
    top: -2px;
    left: 10px;}
</style>
<template>
    <div class="us">
        <div class="nav">
            <ul class="us-nav">
                <li class="nav-item">了解我们</li>
                <li class="nav-item" v-for="(item,index) of nav" :key="index">
                    <a href="#" v-text="item"></a>
                </li>
            </ul>
        </div>
        <div class="us-banner"></div>
        <div class="us-top clearfix">
            <div>
                 <h3>广联达科技股份有限公司（股票代码：002410）</h3>
                <p>
                    广联达科技股份有限公司成立于1998年，2010年5月在A股上市（股票简称：广联达，股票代码：002410），目前总市值283.98亿。广联达立足建筑产业，围绕工程项目的全生命周期，是提供以建设工程领域专业应用为核心基础支撑，以产业大数据、产业新金融等为增值服务的数字建筑平台服务商。广联达现拥有员工五千二百余人，在中国境内建立五十余家分子公司，先后在美国、英国、芬兰、瑞典、新加坡、香港、马来西亚、印度尼西亚、印度等地设立了子公司、办事处与研发中心，服务客户遍布全球一百多个国家。现在，广联达正在为实现每一个工程项目都接水、接电、接数字建筑平台的二次创业理想而努力，在这一过程中，广联达将作为建筑产业转型升级的核心引擎，助力“中国建造”建立全球核心竞争力！
                </p>
            </div>
            <img src="/static/img/section/aboutUs/a1.jpg">
           
        </div>
        <div class="us-bottom">
            <ul class="clearfix">
                <li v-for="(item,index) of main" :key="index">
                    <h2>{{item.num}}</h2>
                    <div class="bottom-item">
                        <h3>{{item.title}}</h3>
                        <h4>{{item.subtitle}}</h4>
                        <div class="content">{{item.content}}</div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
  components: {

  },
  data(){
      return{
          nav:["企业介绍","发展历程","企业荣誉","社会责任","广联达生态","联系我们"],
          main:[
                {num:"7",title:"7个研发机构",subtitle:"",content:"清华大学•广联达BIM联合研究中心上海交通大学BIM研究中心上海研发中心、北京研发中心西安研发中心、芬兰研发中美国硅谷研究中心"},
                {num:"60",title:"60余家分子公司",subtitle:"形成全球化布局",content:"销售与服务网络覆盖中国全境，以美国子公司、芬兰子公司和英国子公司为核心辐射欧美国家，以新加坡子公司、香港子公司和马来西亚子公司的区域优势带动台湾、印度尼西亚、泰国等东南亚市场的发展。"},
                {num:"600",title:"600余个软件著作权",subtitle:"30余项核心技术、近40项专利",content:"主要产品均具有自主知识产权及自主创新的软件架构，其中3D图形算法居国际领先水平，而且在针对项目全生命周期的BIM解决方案、云计算、大数据、物联网、移动应用，以及管理业务技术平台方面，均有深厚积累。"},
                {num:"5200",title:"7个研发机构",subtitle:"",content:"其中计算机专业背景员工占35%， 建筑专业背景员工占31%"},
                {num:"18",title:"18万余家企业用户",subtitle:"",content:"其中工具及管理类产品直接使用者100余万，移动端应用产品直接使用者近千万。"},
                {num:"11",title:"11年",subtitle:"",content:"连续获得“国家规划布局内重点软件企业”资质，并荣膺纳税信用A级企业、企业信用评价AAA级信用企业、中国大数据应用优秀创新实践奖、中国建设行业信息化领军企业奖等称号。"},
              ]
      }
  },
  methods:{
    addDelay(){
      var lists = document.querySelectorAll('.news ul li');
      for(var i = 0;i<lists.length;i++){
        var style = 'animation-delay: '+i*0.1+'s;';
        lists[i].style = style;
      }
    }
  },
  mounted(){
    this.addDelay();
  }
}
</script>
  
<style scoped>
@keyframes slideInUp{
	0%{-webkit-transform:translateY(20%);transform:translateY(20%);}
	100%{-webkit-transform:translateY(0);transform:translateY(0);}
}
a:hover{text-decoration: none;}
.clearfix:before, .clearfix:after {display: table; line-height: 0;content: "";}
.us{position:relative;top:60px;}
.us .nav{width: 100%;min-width: 1200px;background: #f8f8f8;position: fixed;top: 61px;z-index: 2000;border-bottom: 1px solid #eaeaea;}
.us .nav .us-nav{ width: 1200px;margin: 0 auto;height: 40px;line-height: 40px;}
.us .nav .us-nav .nav-item{display: inline-block;}
.us .nav .us-nav .nav-item a {color: #9e9e9e;font-size: 14px;margin-right: 18px;background: url(/static/img/section/aboutUs/gg.jpg) no-repeat right;padding-right: 18px;}
.us .nav .us-nav .nav-item:first-child{font-size: 14px;color: #888;font-weight: bold;padding-right: 30px;}
.us .us-banner{ background: url(/static/img/section/aboutUs/aban.png) no-repeat center;
width: 100%;height: 300px;}
.us .us-top{width: 1150px;margin: 80px auto 0 auto;background: #f6f7fa;transform:translateY(20%);animation:slideInUp 1s;animation-fill-mode: forwards;}
.us .us-top div{width: 492px;float: left;padding: 43px 0 0 80px;}
.us .us-top div h3{    color: #4a8bbb;line-height: 28px;font-size: 20px;padding-bottom: 20px;
font-weight: normal;}
.us .us-top div p{color: #626262;line-height: 28px;font-size: 14px;}
.us .us-top img{width: 500px;height: 437px;float: right;}
.us .us-bottom{width: 1152px;margin: 50px auto 60px auto;}
.us .us-bottom li{width: 350px;float: left;position: relative;margin-right: 46px;margin-bottom: 48px;
color: #4a8bbb;text-align: center;height: 350px;border: 1px #4a8bbb solid;border-radius: 30px;}
.us .us-bottom li .bottom-item{position: absolute; top: 0; left: 36px;} 
.us .us-bottom li .bottom-item h3{font-size: 32px;font-weight: normal;padding: 50px 0 20px 0;}
.us .us-bottom li .bottom-item h4{font-size: 18px;font-weight: normal;padding: 0 20px;} 
.us .us-bottom li .content{font-size: 14px;line-height: 28px;padding-top: 22px;width: 280px;margin: 0 auto;} .us .us-bottom li:nth-child(2n){color: #51835f;border:1px #5eb276 solid;}
.us .us-bottom li:nth-child(3n){margin-right:0}
.us .us-bottom li h2{font-size: 230px;letter-spacing: -18px;color: #e7ebf1;
font-family: Arial, Helvetica, sans-serif;font-weight: normal;line-height: 350px;}
.us .us-bottom li:nth-child(4) h2{font-size: 180px;}
</style>

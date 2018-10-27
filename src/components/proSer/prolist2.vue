<template>
  <div class="dt4">
    <div class="park_c">
      <h3>主要产品</h3>
      <span></span>
    </div>
    <div class="news">
      <ul class="clearfix">
        <li v-for="(item, index) in pro_list" :key="index">
          <div class="border_top"></div>
          <div class="border_right"></div>
          <div class="border_bottom"></div>
          <div class="border_left"></div>
          <a href="#">
            <div class="new_park">
              <div class="clearfix">
                <img :src="item.img" alt="">
                <h3>
                  <span v-text="item.title"></span>
                  <font v-text="item.subtitle"></font>
                </h3>
              </div>
              <p v-text="item.desc"></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      pro_list:[
        {img:'/static/img/section/proSer/proli1.png',title:'广联达G+工作台',subtitle:'做为建筑业唯一一款辅助必备工具',desc:'广联达G+工作台是一款专为用户提供广联达产品服务的桌面客户端，支持广联达所有软件的一键下载，安装和升级，并提供一系列其他辅助小工具，是广联达用户...'},
        {img:'/static/img/section/proSer/proli2.png',title:'服务新干线—-答疑解惑',subtitle:'授业解惑，尽在答疑解惑',desc:'建筑行业交流平台，近千位行业专家每天线上答题。随时搜、随时问、随时互动，与资深专家、同行进行专业交流，为您提供全产品、全业务、全专业的解决方案。...'},
        {img:'/static/img/section/proSer/proli3.png',title:'服务新干线',subtitle:'只为造价从业者遇见未来更好的你',desc:'服务新干线秉承“以客户为中心、贴近用户、聚焦广联达用户需求”为主旨，以答疑解惑、学习资料、同城活动、建筑课堂、培训报名、软件下载等栏目为核心，通...'},
        {img:'/static/img/section/proSer/proli4.png',title:'建筑课堂',subtitle:'工程建筑领域实训教学开放平台',desc:'建筑课堂创建于2015年，是建筑软件培训及建筑专业业务学习的实战视频分享平台。其内容覆盖建筑识图、施工标准、造价、项目管理、招投标管理、成本管控...'},
        {img:'/static/img/section/proSer/proli5.png',title:'广联达智慧工地平台',subtitle:'',desc:'随着技术的发展和项目管理水平的提升，越来越多的软件系统和智能设备被广泛应用于工地现场。每个应用通常只解决一个点的业务需求，项目管理者面对各个分散...'},
        {img:'/static/img/section/proSer/proli6.png',title:'构件坞',subtitle:'找构件，就上构件坞',desc:'构件坞是广联达旗下免费的BIM构件库、提供构件搜索、下载、管理平台，特色服务包括全新缩略图展示效果、3D构件在线预览、独家建筑构件的搜索引擎、最...'},
        {img:'/static/img/section/proSer/proli7.png',title:'BIM5D',subtitle:'数字施工，让工程管理变得简单',desc:'广联达BIM5D为工程项目提供一个可视化、可量化的协同管理平台。通过轻量化的BIM应用方案，达到减少施工变更、缩短工期、控制成本、提升质量的目的...'},
        {img:'/static/img/section/proSer/proli8.png',title:'云计价GCCP5.0',subtitle:'让造价工作更轻松',desc:'广联达云计价平台GCCP5.0是迎合数字建筑平台服务商战略转型，为计价客户群，提供概算、预算、结算阶段的数据编制、审核、积累、分析和挖掘再利用的...'},
        {img:'/static/img/section/proSer/proli9.png',title:'斑马·梦龙网络计划',subtitle:'帮您洞见未来的进度计划工具',desc:'斑马·梦龙网络计划软件是专业、易用的网络计划工具，可以辅助项目通过关键线路+前锋线进行动态管理，打通PDCA循环，让项目进度真正可控！'},
        {img:'/static/img/section/proSer/proli10.png',title:'广材网',subtitle:'选材定价就用广材网',desc:'广材网旨为用户提供涵盖市场价、信息价、人工询价、价格库以及专属客服的材料价格全方位服务，解决全过程造价及成本管理工作中产生的询价工作量大、询价困...'},
        {img:'/static/img/section/proSer/proli11.png',title:'BIM模板脚手架设计',subtitle:'设计安全屏障，支撑数字未来',desc:'聚焦施工过程中模板脚手架专项业务，利用数字图形技术，辅助施工企业（项目部）技术人员，进行模板脚手架方案可视化设计，快速绘制施工图、计算书，精确计...'},
        {img:'/static/img/section/proSer/proli12.png',title:'建筑云课',subtitle:'让教学更精彩',desc:'建筑云课是面向建筑专业师生，提供基于微课的辅助教学工具。学生通过手机端完成每一次老师安排的教学任务，老师借助平台对学生学习大数据的分析，采用混合...'},
        {img:'/static/img/section/proSer/proli13.png',title:'采购管理系统',subtitle:'',desc:'广联达采购管理系统V5.0秉承“降本增效、规范内控、优化供应链”的采购管理理念,遵循“公开、公平、公正”的原则,为采购方、供应商打造先进、成熟的...'},
        {img:'/static/img/section/proSer/proli14.png',title:'施工企业项目管理系统',subtitle:'',desc:'广联达施工企业项目管理系统是基于T6技术平台，结合云、大数据、物联网、移动互联网，运用现代项目管理思想，借用先进实用的信息技术和完备的实施交付能...'},
        {img:'/static/img/section/proSer/proli15.png',title:'协筑',subtitle:'更专业的工程项目协同平台',desc:'产品依托云计算及互联网技术，以“文档管理”、“任务流程”、“BIM协作”、“团队沟通”为核心，通过建立虚拟的项目协作环境，连接工程项目中的人员、...'},
        {img:'/static/img/section/proSer/proli16.png',title:'BIMFACE',subtitle:'与你一起开发BIM的价值',desc:'BIMFACE提供的基础功能，使得软件开发人员只需要简单的步骤就能开发BIM应用，大大降低了技术门槛，提升研发效率90%'},
        {img:'/static/img/section/proSer/proli17.png',title:'现场劳务管理系统',subtitle:'防风险、促生产、提效能、控成本',desc:'利用云技术，通过信息化系统支撑项目部一线对劳务管理的信息化诉求，整合项目部日常应用，实现对劳务大数据积累。结合物联网技术，通过智能终端硬件设备实...'},
        {img:'/static/img/section/proSer/proli18.png',title:'施工安全管理系统',subtitle:'好用、实用、爱用的安全管理工具',desc:'打造好用、实用、爱用的安全管理工具，为施工项目提供高效实用的安全核心业务管控手段，切实控制住施工安全风险。'},
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
	0%{-webkit-transform:translateY(50%);transform:translateY(50%);}
	100%{-webkit-transform:translateY(0);transform:translateY(0);}
}
a:hover{text-decoration: none}
.clearfix::after{content: '';display: block;clear: both;}
.dt4{width: 100%;position: relative;padding-bottom: 45px; background: #fff;}
.park_c{text-align: center;}
.park_c h3{color: #333;font-size: 32px;font-weight: normal;padding: 45px 0 5px 0;}
.park_c p{color: #333;font-size: 16px;}
.park_c span{margin: 0 auto;display: block;width: 30px;height: 2px;background: #666;}

.news{width: 1180px;margin: 0 auto;padding-bottom: 40px;}
.news ul{width:100%;overflow: hidden;}
.news ul li{visibility: visible;  width: 380px;float: left;margin: 20px 20px 0 0;position: relative;
transform:translateY(50%);animation:slideInUp 1s;animation-fill-mode: forwards;}
.news ul li:nth-child(3n){margin-right: 0;}
.news ul li .border_top,.news ul li .border_bottom{height: 1px;width: 0;transition: all .4s ease;}
.news ul li .border_left,.news ul li .border_right{height: 0px;width: 1px;transition: all .4s ease;}
.news ul li .border_top,.news ul li .border_left{left: 0;top: 0;position: absolute;background: #207be6;} 
.news ul li .border_right,.news ul li .border_bottom{bottom: 0;right: 0;position: absolute;background: #207be6;} 
.news ul li:hover .border_left,.news ul li:hover .border_right{height: 100%;}
.news ul li:hover .border_top,.news ul li:hover .border_bottom{width: 100%;}
.news ul li a{color: #191e28;border: 1px #e2e2e2 solid;width: 378px;display: block;height: 177px;}
.new_park{width: 100%;}
.new_park>div{width: 338px;margin: 20px auto 0;}
.new_park>div>img{width: 64px;height: 64px;float: left;}
.new_park>div>h3{float: right;width: 254px;padding: 10px 0 0 0;font-weight: normal;}
.new_park>div>h3>span{font-size: 24px;display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.new_park>div>h3>font{font-size: 16px;color: #333;line-height: 22px;padding-top: 6px;display: block;white-space: nowrap;
overflow: hidden;text-overflow: ellipsis;}
.new_park>p{width: 338px;margin: 0 auto;padding-top: 9px;font-size: 12px;color: #666;  line-height: 22px;padding-bottom: 16px;}
</style>
<template>
    <div class="news">
        <div class="news-banner"></div>
        <div class="news-main">
            <h3>公司新闻动态
                <span class="title">NEWS</span>
            </h3>
            <!-- 新闻列表 -->
            <ul class="news-list clearfix">
                <li v-for="(item,index) of newsList[page%2==0?0:1]" :key="index">
                    <div class="news-left">
                        <a href="#">
                            <img :src="item.img_url" alt="">
                        </a>
                        <span>
                            {{item.date}}<br>
                            {{item.year}}
                        </span>
                    </div>
                    <div class="news-right">
                        <h4>
                            <a href="#" v-text="item.title"></a>
                        </h4>
                        <p>
                            <a href="#" v-text="item.content"></a>
                        </p>
                    </div>
                </li>
            </ul>
            <!-- 导航按钮 -->
            <div class="news-page">
                <div class="page-main">
                    <a href="#" class="prev" v-if="page!=0" @click.prevent="togglePage('prev')">上一页</a>
                    <a href="#" v-for="(item,index) of 10" :key="index" @click.prevent="getPage(index)" :class="(index==page) ? 'active' : ''">{{item}}</a>
                    <a href="#" class="next" v-if="page!=9" @click.prevent="togglePage('next')">下一页</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
  components: {
  },
  data(){
      return{
          page:0,
          newsList:[
            [{img_url:"/static/img/section/news/nm1.jpg",title:"数字建筑体验馆首期讲解员训练营圆满落幕！营员收获颇丰！",content:"数字建筑并不是孤立存在，也不是一蹴而就的；而是由各方参与、多个平台组成，由建筑业和IT产业相融合的新生态。数字建筑对产业变革的影响也是多层次，由点到线、到面，最后到体的全方位的...",
            year:"2018",date:"10/23"},
            {img_url:"/static/img/section/news/nm2.jpg",title:"职业起点·梦想舞台｜2018年全国高等院校BIM应用技能比赛圆满落幕",content:"10月21日，职业起点，梦想舞台—2018年全国高等院校BIM应用技能比赛于成都、常州两地圆满落幕，来自全国范围内的386家建筑类专业相关院校的3000余名师生经过现场激烈角逐...",
            year:"2018",date:"10/22"},
            {img_url:"/static/img/section/news/nm3.jpg",title:"共建建设行业大数据中心，中国国际商会与广联达正式签约",content:"近日，中国国际商会建设行业商会与广联达科技股份公司在北京广联达大厦举行战略签约仪式，按照战略合作协议，双方将共建中国国际商会建设行业大数据中心，推动“数字建筑”商业模式全球化推...",year:"2018",date:"10/22"},
            {img_url:"/static/img/section/news/nm4.jpg",title:"高质量发展！广联达荣膺2018北京民营企业百强、2018北京民营企业科技创新百强第8...",content:"广联达科技股份有限公司凭借其良好的社会形象，诚实守法经营、较高的人均产出上榜“北京民营企业百强”；同时凭借在科技创新领域的突出表现，紧随京东集团，位列科技创新第8位。",year:"2018",date:"10/22"},
            {img_url:"/static/img/section/news/nm5.jpg",title:"“雄安创业会客厅”主题沙龙第九期！这次谈的是“数字建筑”",content:"首批入驻雄安新区的中关村企业广联达科技股份有限公司主办的雄安创业会客厅第九期主题沙龙—科技创新系列沙龙之数字建筑助力雄安“细胞级”精细化建设治理",
            year:"2018",date:"10/17"},
            {img_url:"/static/img/section/news/nm6.png",title:"【锦鲤】建筑人拍短视频，拿万元大奖！",content:"面对新的数字变革，我们对于建筑新人才如何培养，如何更好地为建筑产业提供优秀的人才，现在是一个急需解决的大难题。",year:"2018",date:"10/16"},
            {img_url:"/static/img/section/news/nm7.jpg",title:"北京大兴国际机场东航基地项目BIM技术应用 维修机库钢网架施工应用",content:"9月29日，北京大兴国际机场东航基地机库钢屋盖缓缓提升就位，东航基地机库正式封顶。同时也意味着北京大兴国际机场所有配套机库工程全部完成结构施工。",year:"2018",date:"10/09"},
            {img_url:"/static/img/section/news/nm8.jpg",title:"“驮得住”的刁志中｜证券时报专访札记",content:"1998年，在国有企业干得顺风顺水的刁志中，毅然决定下海创业。经过20年的艰辛打拼，他把广联达带到了行业领头羊地位，带上了色彩斑斓的资本市场。成功的企业家面对镜头，可以有多种反...",
            year:"2018",date:"09/27"},
             {img_url:"/static/img/section/news/nm9.jpg",title:"改革开放40周年专题｜广联达建筑业信息化沙漠中的拓荒者和深耕者",content:"购房者通过VR技术定制自己想要的房子格局，服务商根据个性化需求做出标准数据模型，建设方拿到数据后在预制工厂定制标准化部件，施工方则依托新一代信息技术的综合应用整合进度跟踪、物料...",
            year:"2018",date:"09/27"},
            {img_url:"/static/img/section/news/nm10.jpg",title:"改革开放40周年上市公司高质量发展在行动｜走进广联达",content:"成立于1998年的广联达，已经迎来20周岁生日。在这20年间，公司心无旁骛地扎根于工程建设信息化这一垂直细分领域，逐步构筑起包括战略明晰化、专业能力强、渠道及服务优势在内的核心...",
            year:"2018",date:"09/26"},
            {img_url:"/static/img/section/news/nm11.jpg",title:"改革开放40周年专题｜广联达：致力于建筑全生命周期数字化",content:"证券时报“上市公司高质量发展在行动”采访团走进广联达，证券时报副总编辑王冰洋对话广联达董事长刁志中，揭开了广联达在战略管理和未来布局方面的更多密码...",year:"2018",date:"09/25"},
            {img_url:"/static/img/section/news/nm12.jpg",title:"“智慧未来，安全护航”陕西省施工企业安全管理高层交流会召开",content:"以“智慧未来，安全护航”为主题的陕西省2018年施工企业安全管理高层交流会在西安市建国饭店隆重召开。",year:"2018",date:"09/25"}],

             [{img_url:"/static/img/section/news/nm13.jpg",title:"智慧城市新定位，规建管一体化引领城市发展新范式",content:"9月16日，由中国通信工业协会、无锡市人民政府、江南大学共同主办的“2018新型智慧城市建设发展峰会”在无锡召开。作为2018世界物联网博览会的重要专题会议，此次新型智慧城市建...",
            year:"2018",date:"09/25"},
            {img_url:"/static/img/section/news/nm14.jpg",title:"跨越6300公里的相聚！芬兰赫尔辛基市政府经济部考察团走进广联达",content:"9月3日下午，芬兰赫尔辛基市政府经济部一行莅临广联达，双方就广联达收购芬兰Progman后的海外发展状况以及今后的海外发展方向，进行了深入探讨。广联达国际产品首席增长官黄龚、品...",
            year:"2018",date:"09/06"},
            {img_url:"/static/img/section/news/nm15.jpg",title:"Cubicost、BIM5D等产品亮相南南合作交流会",content:"7月23日由商务部国际商务官员研修院牵头为期21天“2018年发展中国家南南合作官员研修班”中国之行的第二站到达丝绸之路起点——西安。",year:"2018",date:"09/05"},
            {img_url:"/static/img/section/news/nm16.jpg",title:"广材网荣获2018年中国优秀大数据产品",content:"2018年8月2日，以“深挖数据智能 助推数字经济”为主题的“2018中国大数据产业生态大会”在北京拉开序幕，大会由中国电子信息产业发展研究院主办。本次大会吸引来自国内外优秀的...",year:"2018",date:"09/05"},
            {img_url:"/static/img/section/news/nm17.jpg",title:"重磅｜广联达再度荣膺“2018中国大数据企业50强”",content:"8月2日，2018中国大数据产业生态大会在京成功举办。本次大会以“深挖数据智能 助推数字经济”为主题，由国家工业和信息化部指导，中国电子信息产业发展研究院主办，中国大数据产业生...",
            year:"2018",date:"09/05"},
            {img_url:"/static/img/section/news/nm18.jpg",title:"广联达“2018中国软件行业公共资源交易领域值得信赖产品”创新奖",content:"北京，2018年8月9日——由中国软件行业协会主办的2018第二届GICC全球小微企业创新大会暨中国软件行业评选日前在北京国家会议中心成功举办。作为公共资源交易领域市场领先的交...",year:"2018",date:"09/05"},
            {img_url:"/static/img/section/news/nm19.jpg",title:"广联达荣膺“2018十大创新软件企业” 数字建筑前景可期",content:"8月16日，中国软件行业协会主办，以“新时代新理念·新软件新动能”为主题的2018中国软件产业发展创新大会在成都召开。广联达科技股份有限公司作为建筑业科技创新风向标荣膺“201...",year:"2018",date:"09/05"},
            {img_url:"/static/img/section/news/nm20.jpg",title:"广联达亮相城市4.0大会，马来西亚总理关注“数字建筑”应用",content:"8月27日，以“建设智慧&数字化城市（Building a Smart & Digitalised City）”为主题的城市4.0大会（Cities 4.0 Conferenc...",
            year:"2018",date:"09/05"},
             {img_url:"/static/img/section/news/nm21.jpg",title:"深耕“数字建筑”，广联达20周年新跨越、再启程",content:"入驻上海大厦，创新驱动发展",
            year:"2018",date:"08/13"},
            {img_url:"/static/img/section/news/nm22.jpg",title:"广联达电子政务荣获“2018中国软件行业公共资源交易领域值得信赖产品”创新奖",content:"聚焦公共资源交易领域，成为客户最信赖的合作伙伴！",
            year:"2018",date:"08/09"},
            {img_url:"/static/img/section/news/nm23.png",title:"《建筑业企业BIM应用分析暨数字建筑发展展望（2018）》通过评审",content:"7月25日，中国建筑业协会在北京召开《建筑业企业BIM应用分析暨数字建筑发展展望（2018）》审查会。会议邀请中国工程院院士肖绪文，中国建筑科学研究院有限责任公司总经理许杰峰，...",year:"2018",date:"07/25"},
            {img_url:"/static/img/section/news/nm24.png",title:"火热的不仅是郑州的天气，更有如火如荼的《37号令》解读公益盛会",content:"7月27日，由河南省建筑协会主办，河南省建筑业协会智慧建造专业委员会、广联达科技股份有限公司承办，河南数字建筑科技有限公司协办的主题为“2018智慧建造·安全护航——解析住建部...",year:"2018",date:"07/27"}]
          ]
      }
  },
  methods:{
    getPage(index){
        this.page = index;
    },
    togglePage(dir){
        if(dir == "prev")
            this.page--;
        else
            this.page++;
    },
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
a:hover{text-decoration: none;}
.news{position:relative;top:60px;}
.news-banner {height: 300px;text-align: center;width: 100%;min-width: 1200px;background: url(/static/img/section/news/nban.png) no-repeat top center;}
.news-main {width: 1172px;margin: 38px auto 60px auto;}
.news-main h3 {color: #000121;font-size: 30px;font-weight: normal;text-align: center;}
.news-main h3 .title {color: #207be6;font-size: 20px;padding-top: 16px;display: block;}
.news-main .news-list {width: 1200px;margin: 0 auto;}
.news-main .news-list li {width: 575px;float: left;margin-top: 50px;padding-top: 40px;border-top: 1px #ddd solid;margin-right: 50px;transform:translateY(50%);animation:slideInUp 1s;animation-fill-mode: forwards;}
.news-main .news-list li:nth-child(2n){margin-right:0px;}
.news-main .news-list li .news-left {width: 182px;position: relative;margin-right: 20px;float: left;}
.news-main .news-list li .news-left span{width: 50px;height: 35px; background-color: rgba(32,123,230,0.7);
display: block;text-align: center;font-size: 12px;color: #fff;line-height: 14px;padding-top: 5px;
position: absolute;top: 5px;left: 5px;}
.news-main .news-list li .news-right{width: 371px;float: left;}
.news-main .news-list li .news-left img{width: 180px;height: 135px;border: 1px #ddd solid;}
.news-main .news-list li .news-right h4{color: #222;font-size: 16px;font-weight: normal;border-bottom: 1px #ddd solid;padding-bottom: 5px;height: 45px;}
.news-main .news-list li .news-right h4 a {color: #222;line-height: 20px;}
.news-main .news-list li .news-right p{color: #444; text-align: left;}
.news-main .news-list li .news-right p a{color: #444;line-height: 20px;font-size: 12px;padding: 0;}

.page-main a {border: 1px solid #ddd;width:32px;height: 32px;margin-left: 3px;display: inline-block;vertical-align: top;font-size: 14px;color: #666; line-height: 32px;}
.page-main a.active{color: #fff;width: 32px;border: 1px solid #207be6;height: 32px;
background-color: #207be6;}
.page-main .prev,.page-main .next { width: 68px!important; }
.page-main .prev:hover,.page-main .next:hover{ border: 1px solid #207be6;color: #207be6; }

.news-page:after{content:"";display: block;height:60px;}
.news-main .news-page {width: 100%;height: auto;overflow: hidden;position: relative;
text-align: center;padding-top: 42px;}
.clearfix:before, .clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}
</style>

<style lang="scss" scope>
  @import "../scss/then.scss";
  .header-photo{display: flex;width: 80%;margin-top: 1rem;background: #FFFFFF;
    box-shadow: 0 0 .4rem 0 rgba(133,144,166,0.50);padding: 1rem 10%;
    border-radius: .8rem;}
  .header-span img{width: 100%;max-width: 6rem;max-height: 6rem;}
  .span-right{align-items: flex-end;text-align: right;}
  .header-span{width: 50%;}
  .span-left{justify-content: center;line-height: 6rem; font-size: 2.2rem !important;}
  .header-img{width: 100%;display: flex;flex-wrap: wrap;margin-top: 1rem;align-content:center;}
 .img-item{width: 40%;flex: 1;flex-basis:45%;margin: .5rem 1.5%;position: relative;}
  .header-img img{width: 100%;max-height: 100%;}
  .img-item-pos{position: absolute;top: 0;width: 100%;height: 100%;text-align: center;padding-top: 2rem;}
  .img-item-pos img{width: auto;}

</style>
<template>
<div >
  <!--  header -->
  <div class="header g-module">
    <header class="header-photo">
      <span class="header-span span-left">保罗·乔治</span>
      <span class="header-span span-right"><img src="../img/header.jpg" alt=""></span>
    </header>
    <div class="header-img">
      <div class="img-item" >
        <img src="../img/k.png" alt="">
        <div class="img-item-pos">
          <img src="../img/2.png" alt="">
          <h5 class="s-white-font s-font-medium">动作·扣篮</h5>
          <p class="s-white-font f-font-overflow-hidden">这是副标题，可以这么长，哈哈哈哈哈我我哦我</p>
        </div>
      </div>
      <div class="img-item">
        <img src="../img/k.png" alt="">
      </div>
      <div class="img-item">
        <img src="../img/k.png" alt="">
      </div>
      <div class="img-item">
        <img src="../img/k.png" alt="">
      </div>
    </div>
  </div>
  <!--header end-->

  <!--nav-->
  <nav class="m-nav g-module">
    <span class="s-white-font m-nav-item-point">·</span>
    <span class="s-white-font s-font-medium m-nav-item">推荐动态</span>
    <span class="s-white-font m-nav-item-point">·</span>
    <span class="s-white-font s-font-medium m-nav-item">我发布的</span>
    <span class="s-white-font m-nav-item-point">·</span>
    <span class="s-white-font s-font-medium m-nav-item">关注大佬</span>
    <span class="s-white-font m-nav-item-point">·</span>
    <span class="s-white-font s-font-medium m-nav-item">收藏</span>
    <span class="s-white-font m-nav-item-point">·</span>
  </nav>

  <!--nav  end-->
  <div class="g-module" style="position: relative;">
    <vueWaterfallEasy style="position: absolute">
    </vueWaterfallEasy>
  </div>

</div>
</template>

<script>
  import k from '../img/k.png'
  import vueWaterfallEasy from '../components/ext/waterfall.vue'
    export default {
      components: {
        vueWaterfallEasy
      },

//      props: {
//      },
        data(){


            return {
                img:k,
                imgsArr: [],
                fetchImgsArr: [],
                num:1,
            }
        },
        computed: {},
        created: function () {
          this.imgsArr = this.initImgsArr(0, 10)
          this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的新的图片的数据数据
        },
        mounted: function () {
        },
        methods: {

          // 假数据
          initImgsArr(n, m) { //num 图片数量
            var arr = []
            for (var i = n; i < m; i++) {
              arr.push({ src: k, link:'https://www.baidu.com',info: '一些图片描述文字'+i })
            }
            return arr
          },
          fetchImgsData() {
              if(this.num<3){
                  this.num ++
                this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
              }
          }

        }
    }
</script>



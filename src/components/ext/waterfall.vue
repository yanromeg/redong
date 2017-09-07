<template lang="pug">
    vue-waterfall-easy(:imgsArr="imgsArr",@scrollLoadImg="fetchImgsData")
      template( scope="props")
        h3 {{props.value.title}}
        img.header-img-son(
        :src="props.value.headerUrl"
        )
        p.some-info {{props.value.info}}
</template>
<!--</template>-->

<script>
  import k from '../../img/k.png'
  import vueWaterfallEasy from './vue-waterfall-easy.vue'
  export default {
    name: 'app',
    data() {
      return {
        imgsArr: [],
        fetchImgsArr: []
      }
    },
    components: {
      vueWaterfallEasy
    },
    methods: {
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push({ src: `static/${i%3 + 1 }.png`, link:'https://www.baidu.com',
            info: '一些图片描述文字'+i ,title:'这是标题',headerUrl:`static/${i%3 + 1 }.png`})
        }
        return arr
      },
      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      }
    },
    created() {
      this.imgsArr = this.initImgsArr(0, 10)
      this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的新的图片的数据数据
    },
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    /*font-family: microsoft yahei;*/
    .some-info {
      line-height: 1.6;
      text-align: center;
    }
    .title {
      background: #000;
      color: #ccc;
      text-align: center;
      font-size: 24px;
      line-height: 40px;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 999;
    }
    .header-img-son{max-width: 2rem;}
    .vue-waterfall-easy {
      top: 40px;
    }
  }
</style>

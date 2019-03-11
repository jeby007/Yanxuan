<template>
  <div class="content">
    <div class="contentWarp">
      <div class="contentContainer">
        <div class="banner">
          <a href="javascript:;">
            <img :src="leftList.bannerUrl">
          </a>
        </div>
        <div class="cateList">
          <ul class="list">
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144">
                <p>每日特惠好货</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      leftList:Array,
    },
    computed:{
      findCateList(){
        const cateList=this.leftList
        const id =this.$route.params.id

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    height: 100%;
    overflow: hidden;
    .contentWarp
      .contentContainer
        .banner
          position: relative;
          width: 100%;
          height: 2.56rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          border-radius: 4px;
          img
            display block
        .cateList
          .list
            li
              display: inline-block;
              margin-right: .45333rem;
              font-size: 0;
              width: 1.92rem;
              vertical-align: top;
              a
                img
                  display block
                  background: #fff
                p
                  height: .96rem;
                  font-size: .32rem;
                  color: #333;
                  text-align: center;
                  line-height: .48rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
</style>

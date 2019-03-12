<template>
  <div class="tabContent">
    <div class="content">
      <ul class="contentList">
        <li class="contentItem">
          <div class="user">
            <img src="https://yanxuan.nosdn.127.net/ec3af82c32bc8e580c5076c5ce146331.png?imageView&quality=65&thumbnail=56y56">
            <span>选妹</span>
          </div>
          <p class="title">2019明前春茶新鲜上市，尝过这一口，才算不辜负春天</p>
          <div class="titleBanner">
            <img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&quality=65&thumbnail=690y376">
          </div>
          <div class="seen">
            <span class="iconfont icon-chakanguo"></span>
            <span>12W人看过</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      tabContent:Array
    },
    data(){
      return{
        topics:[]
      }
    },
    computed:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabContent
    background: #eee
    .content
      .contentList
        .contentItem
          padding: .36rem .35rem;
          margin .2rem 0;
          background: #ff
          .user
            font-size .4rem
            color #333
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display flex
            align-items center
            img
              width .8rem
              height .8rem
              border-radius 50%
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;

          .title
            font-size .45rem
            color #333
            margin: .3rem .1rem .16rem 0.1rem
            overflow: hidden;
            text-overflow: ellipsis;
            line-height .7rem
          .titleBanner
            width: 9.2rem;
            height: 5rem;
            position: relative;
            margin: 0 0 .2rem .08rem;
            overflow: hidden;
            border-radius: .08rem;
          .seen
            font-size: .3rem;
            color: #999;
            line-height: .32rem;
            margin: .18rem 0 0 .1rem;
            display flex
            align-items center
            .iconfont
              font-size .4rem
              margin-right .05rem
</style>

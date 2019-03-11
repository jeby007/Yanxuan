<template>
  <div>
    <div class="wrap">
      <!--<div class="header">-->
        <!--<div class="headerContent">-->
          <!--<div class="goHome" @click="$router.replace('/')">-->
            <!--<span class="iconfont icon-shouye"></span>-->
          <!--</div>-->
          <!--<div class="logo"></div>-->
          <!--<div class="searchAndCart">-->
            <!--<div class="cart" @click="$router.replace('/cart')">-->
              <!--<span class="iconfont icon-gouwuche"></span>-->
            <!--</div>-->
            <!--<div class="search" @click="$router.replace('/search')">-->
              <!--<span class="iconfont icon-sousuo"></span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <LoginHeader/>
      <div class="other">
        <div class="bigLogo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
        <div class="phoneLogin" @click="$router.replace('/profile/loginphone')">
          <span class="iconfont icon-shouji"></span>
          <span class="content">手机号码登录</span>
        </div>
        <div class="emailLogin">
          <span class="iconfont icon-youxiang"></span>
          <span class="content">邮箱账号登录</span>
        </div>
        <div class="quickLogin">手机号快捷注册></div>
        <div class="anyLogin">
          <div class="wechat">
            <span class="iconfont icon-weixin"></span>
            <span>微信</span>
          </div>
          <div class="qq">
            <span class="iconfont icon-qq"></span>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <span class="iconfont icon-weibo"></span>
            <span> 微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginHeader from '../../components/LoginHeader/LoginHeader'
  export default {
    components:{LoginHeader}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
    background-color: #f2f5f4;
    .header
      border: none;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 200;
      width: 100%;
      height: 88px;
      background-color: #fafafa;
      .headerContent
        width: 100%;
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: #fafafa;
        -webkit-box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0.1rem 0.4rem 0 0.4rem;
        text-align: center;
        .goHome
          float: left;
          height: 1rem;
          line-height: 1rem;
          padding-right: 0.02rem;
          font-size 100%
          .iconfont
            font-size .68rem
            display block
        .logo
          width: 2.29333rem;
          height: 0.72rem;
          margin-left: 0.8rem;
          background-position: 0 -1.70667rem;
          display: inline-block;
          background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png");
          background-repeat: no-repeat;
          background-size: 2.29333rem 5.6rem;
        .searchAndCart
          float: right;
          height: 1rem;
          line-height: 1rem;
          padding-right: 0.02rem;
          .cart
            float right
          .search
            float right
            margin-right .5rem
          .iconfont
            display block
            font-size .6rem
            color #333
    .other
      height: 100%;
      //text-align: center
      display flex
      flex-direction column
      align-items center
      .bigLogo
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        text-align: center;
        img
          width: 3.57333rem;
          height: 1.2rem;
      .phoneLogin
        width: 90%;
        display: flex;
        align-items center
        justify-content center
        margin: 0.42667rem 0;
        height: 1.25333rem;
        line-height: 1.25333rem;
        font-size: 0.37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        border-radius: 4px;
        .iconfont
          font-size .5rem
          margin-right .1rem

      .emailLogin
        width: 90%;
        display flex
        align-items center
        justify-content center
        margin-bottom: 0.4rem;
        height: 1.25333rem;
        font-size: 0.37333rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 4px;
        .iconfont
          font-size .38rem
          margin-right .1rem
      .quickLogin
        color: #333;
        font-size: 0.37333rem;
        text-align: center;
      .anyLogin
        margin-top: 5rem;
        font-size: 0.4rem;
        line-height: 0.53333rem;
        height: 0.53333rem;
        color: #7f7f7f;
        margin-left: 0.06667rem;
        display flex
        justify-content center
        div
          display flex
          justify-content center
          width: 2.33333rem;
          border-right: 2px solid;
          &:last-child
            border-right: 0
          span
            &:last-child
              margin-left .1rem
        .iconfont
          font-size .4rem


</style>

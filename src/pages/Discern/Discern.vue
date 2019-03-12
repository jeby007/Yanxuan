<template>
  <div class="discernWrap">
    <Hearder>
      <div slot="middleTitle" class="discernTTw">
        <router-link to="">
          <span class="topTitle">发现</span>
        </router-link>
        <router-link to="">
          <span class="topTitle">甄选家</span>
        </router-link>
      </div>
    </Hearder>
    <router-view></router-view>
  </div>
</template>

<script>
  import Hearder from '../../components/LoginHeader/LoginHeader'
  export default {
    components:{Hearder}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discernWrap
    .discernTTw
      display inline-block
      height: 0.72rem;
      margin-left: 0.8rem;
      line-height 0.72rem
      .topTitle
        font-size .4rem
        color #7F7F7F
</style>

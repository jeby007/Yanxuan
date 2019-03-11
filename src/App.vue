<template>
  <div>
    <router-view/>
    <FooterNav v-if="$route.meta.showFooterNav"/>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav'
  //import {reqHomeData} from './api'
  export default {
    components:{
      FooterNav
    },
    // async mounted () {
    //   const result = await reqHomeData()
    //   console.log(result)
    // }
  }
</script>

<style scoped>

</style>

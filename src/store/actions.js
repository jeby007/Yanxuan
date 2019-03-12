import {reqTabNav,reqManual} from '../api'

export default {
  async acqTabNav ({commit}) {
    const result = await reqTabNav()
    if (result.code === '200') {
      commit('receive_tabNav', result.data)
    }
  },
  async acqTabContent({commit}){
    const result=await reqManual()
    if (result.code==='200'){
      commit('receive_tabContent',result.data)
    }
  }
}

import ajax from './ajax'

const BASE = '/api'
export const reqHomeData = () => ajax('/home')
export const reqClassify = () => ajax('/classify')
export const reqTabNav = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)
export const reqManual = () => ajax(`${BASE}/topic/v1/find/recManual.json`)

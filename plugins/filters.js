import Vue from 'vue'
// 时间格式化
const empty = (data) => {
  return data ? `${data}` : '-'
}

const filters = {
  empty
}

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
export default filters

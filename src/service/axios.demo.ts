import axios from 'axios'

// axios的实例对象
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

new Promise<string>((resolve) => {
  resolve('哈哈')
}).then((res) => {
  console.log(res)
})

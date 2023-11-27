import axios, { AxiosResponse } from 'axios'

// axios的实例对象
// 1.模拟get请求
// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res: AxiosResponse) => {
//     console.log(res.data)
//   })

// 2.模拟get请求,并且传入参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'cc',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// 3.模拟post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'cc',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

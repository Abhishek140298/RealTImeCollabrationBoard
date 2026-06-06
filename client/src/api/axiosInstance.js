import axios from 'axios'

export default axiosInstance=axios.create({
    baseURL:"",
    timeout:10000,
    header:{
        "Content-Type":"application/json"
    }
})


//first argument =>url ,body,config
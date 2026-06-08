import axios from 'axios'

const apiBaseURL=import.meta.env.VITE_API_BASE_URL

const axiosInstance=axios.create({
    baseURL:`${apiBaseURL}`,
    timeout:10000,
    header:{
        "Content-Type":"application/json"
    }
})

export default axiosInstance
//first argument =>url ,body,config
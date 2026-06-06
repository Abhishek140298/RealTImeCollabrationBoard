import axiosInstance from "./axiosInstance";

axios.interceptor.request.use(
  (config) => {
    console.log("config", config.method?.toUpperCase(), config.url);
    return config;
  },

  (error) => Promise.reject(error)




);

axios.interceptor.response.use((response)=>response,(error)=>{
    const message=error.response?.data?.message||error.message

    return Promise.reject(error)
})
//For token add
//! common approch check token exist ,add to header in config
/**
 * 
 * * const token="shbfls"
 * if(token){
 * config.header.Authorization=`Bearer ${token}}
 * 
 */

//! Second Approch
/***
 * 
 * *Create two instance public instance and private instance
 * *publicInstance
 * *privateinstance
 */

//!Add metadata in request
/**
 * apiInstance.get("/boards,",{requiresAuth:true})
 * chec in the request interceptor
 * 
 */
/**
 * make a tokenservice also
 */
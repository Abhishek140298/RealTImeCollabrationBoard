import axiosInstance from './axiosInstance'

export async function getBoard(url){
try{
    const res=await axiosInstance.get(url)
    console.log("res4534",res)   
    return res.data

}
catch(err){
    console.log("Error in tthe api call",err)
}
}
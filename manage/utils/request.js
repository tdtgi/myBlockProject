import api from "./axios"
import qs from 'QS'
export const login=(data)=>api({
    url:'/api/login',
    method:'POST',
    data:qs.stringify(data)
})

export const empInfo=()=>api({
    url:'/my/empInfo',
    method:'get'
    
})

export const addInfo=(data)=>api({
    url:'/my/addInfo',
    method:'POST',
    data
})


export const updateInfo=(data)=>api({
    url:'/my/updateInfo',
    method:'POST',
    data
})

export const toDis=(data)=>api({
    url:'/my/toDis',
    method:'POST',
    data
})

export const oneEmpInfo=(data)=>api({
    url:'/my/oneEmpInfo',
    method:'get',
    params:data
    
})

export const sal=(data)=>api({
    url:'/sal/'+data,
    method:'get',
 
    
})

export const disInfo=()=>api({
    url:'/dis/disInfo',
    method:'get'
    
})

export const replaceDis=(data)=>api({
    url:'/dis/replaceDis',
    method:'post',
    data
    
})

export const deleteDis=(data)=>api({
    url:'/dis/deleteDis',
    method:'post',
    data
    
})
export const changeSal=(data)=>api({
    url:'/dis/changeSal',
    method:'post',
    data
    
})

export const getInt=()=>api({
    url:'/view/getInt',
    method:'get'
    
})

export const addInfoMt=(data)=>api({
    url:'/my/addInfoMt',
    method:'post',
    data
    
})

export const delInt=(data)=>api({
    url:'/view/delInt',
    method:'post',
    data
    
})
export const addInt=(data)=>api({
    url:'/view/addInt',
    method:'post',
    data
    
})
export const oneIntInfo=(data)=>api({
    url:'/view/oneIntInfo',
    method:'get',
    params:data
    
})
export const updateInt=(data)=>api({
    url:'/view/updateInt',
    method:'POST',
    data
})








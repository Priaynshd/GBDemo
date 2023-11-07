
import axios from 'axios';

export const getRequests = async(url, method, body) =>{
    const headers= new Headers();
    headers.append('Content-Type','appplication/json');
   let res = await fetch(url,{
    method: method,
    headers
   })
   const json = await res.json();
return json;
}

export const getRequestsbyAxios = async(url) =>{
    const headers= new Headers();
    headers.append('Content-Type','appplication/json');
   let res = await axios.get(url,{
    headers
   })
   console.log(res.status);
return res.data;
}

export const postRequestsbyAxios = async(url) =>{
    const headers= new Headers();
    headers.append('Content-Type','appplication/json');
   let res = await axios.post(url,{
    headers,
    
   })
   console.log(res.status);
return res.data;
}

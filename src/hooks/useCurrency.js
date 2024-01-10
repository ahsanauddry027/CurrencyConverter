import React,{useEffect,useState} from 'react';



function useCurrency(curr){
    const [data,setdata] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((res)=>setdata(res[curr]))
    },[curr])
    console.log(data);
    return data;
}

export default useCurrency;
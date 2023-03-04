import React, { useEffect } from 'react'
/*
useEffect(cb, [deps])
TH1: useEffect(cb)
duoc chay lai moi lan re-render
TH2 : useEffect(cb,[])
Chi chay 1 lan duy nhat sau lan render dau tien
TH3: useEffect(cb,[deps])
Chi chay lai khi deps thay doi
đặc điểm chung
Đều chạy sau lần render đầu tiên
*/
function Post() {
        //TH1: useEffect(cb)
        useEffect(()=>{
            console.log("TH1: useEffect(cb)");
        })
   
        //TH2 : useEffect(cb,[])
        useEffect(()=>{
            console.log("TH2 : useEffect(cb,[])");
        })

  return (
    <>
    <hr />
    <div>Post</div>
    
    </>
  )
}

export default Post
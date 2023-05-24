const action1=(req,res)=>{
    const data=req.body
    console.log(data)
    
    res.send("hello this is testing")
}

export default action1;
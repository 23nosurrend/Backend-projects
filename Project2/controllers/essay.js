const essay1=(req,res)=>{
    const data=req.body
    console.log(data)
    res.send(data)

}


const essay2=(req,res)=>{
    const data=req.params.age
    res.send(data)
}
const essay3=(req,res)=>{
    const number=req.query.number
    const data=req.body
    res.send([req.query,data])
}

export {essay1,essay2,essay3}
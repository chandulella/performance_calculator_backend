module.exports = function(app){

    app.get('/',(req,res)=>{
        res.send({success:true,meassage: "mainpage"})
    })
 
    app.use('/api/v1',require('./v1'))
}
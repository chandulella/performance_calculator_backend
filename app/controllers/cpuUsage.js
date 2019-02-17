
var osUtils = require("os-utils")
const sendMail =require('./email')
module.exports = {
    getCpuUsage: async (req, res) => {
        try {
            let cpuUsage;
           
             osUtils.cpuUsage(function(v){
                    cpuUsage= Math.round(v*100);
                    console.log(">>",req.query)
                    if(req.query.sendMail){
                        sendMail.sendMail(cpuUsage)
                    }
                    return res.json({ success: true,cpuUsage:cpuUsage})
                   });  
                 
        } catch (err) {
            return res.json({ error: err, success: false })
        }
    },
   
};
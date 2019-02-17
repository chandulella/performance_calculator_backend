
var osUtils = require("os-utils")

module.exports = {
    getCpuUsage: async (req, res) => {
        try {
            let cpuUsage;
        
             osUtils.cpuUsage(function(v){
                    cpuUsage= v*100;
                    return res.json({ success: true,cpuUsage:cpuUsage.toFixed(2)})
                   });  
                 
        } catch (err) {
            return res.json({ error: err, success: false })
        }
    },
   
};
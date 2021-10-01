const fs = require('fs')
const config = require('../config.json')

module.exports = new class{
    GetIndex(req, res){
        config.lastDataView = new Date()
        fs.writeFileSync(config.pathdata, JSON.stringify(config), 'utf8')

        res.render('app')
    }
    
    async PostIndex(req,res){
        const {pathdata, port, ...data} = config
        
        config.lastData2137 = new Date()
        fs.writeFileSync(config.pathdata, JSON.stringify(config), 'utf8')

        res.status(200).json({data})
    }

}
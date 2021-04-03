const request = require("request")
const yargs=require('yargs')

const makeRequest=(sources)=>{
    const url='https://jsonplaceholder.typicode.com/'+sources;
    console.log(url);
    request(url,(err,res)=>{
        if(err)console.log(`cannot load this api ${err}`)
        else{
            console.log(res.body);
        }
    })
}

yargs.command({
    command:'getLink',
    describe:'getting link',
    builder:{
        path:{demandOption:true, type:'string'}
    },
    handler:function(argv){
        console.log(argv.path);
      makeRequest(argv.path);
    }
})
yargs.argv
                                
const fs = require('fs');
var filename=process.argv[2]

fs.readFile(filename, 'utf8', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString().split('\n').length - 1);
});
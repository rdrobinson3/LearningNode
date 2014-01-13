/**
 * Created by rrobinson on 1/13/14.
 */
var readline = require('readline');

var inter = readline.createInterface(process.stdin, process.stdout, null);

inter.question(">>What is the meaning of life?  ", function (answer){
    console.log("About the meaning of life you said " + answer);
    inter.setPrompt(">>");
    inter.prompt();
});

function closeInteface(){
    console.log('Leaving interface..');
    process.exit();
}

inter.on('line', function(cmd){
    if(cmd.trim() == '.leave'){
        closeInteface();
        return;
    } else {
        console.log("repeating command: " + cmd);
    }

    inter.setPrompt(">>");
    inter.prompt();
});

inter.on('close', function(){
   closeInteface();
});
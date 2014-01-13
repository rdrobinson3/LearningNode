/**
 * Created by rrobinson on 1/13/14.
 */
var readline = require('readline');

var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">>What is the meaning of life?  ", function (answer){
    console.log("About the meaning of life you said " + answer);
    interface.setPrompt(">>");
    interface.prompt();
});

function closeInteface(){
    console.log('Leaving interface..');
    process.exit();
}

interface.on('line', function(cmd){
    if(cmd.trim() == '.leave'){
        closeInteface();
        return;
    } else {
        console.log("repeating command: " + cmd);
    }

    interface.setPrompt(">>");
    interface.prompt();
});

interface.on('close', function(){
   closeInteface();
});
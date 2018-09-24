
//
//
//(function execute(commands) {
//
//
//    for (let command of commands) {
//
//    }
//})(command);


let commands = [
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
];


function procesorCommand(commands) {
    let commandProcessor = (function commandLine() {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.substring(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    for (let cmd of commands) {
        let cmdRow = cmd.split(' ');
        commandProcessor[cmdRow[0]](cmdRow[1]);
    }
}

procesorCommand(commands);


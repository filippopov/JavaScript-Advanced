


function getCommands(commands) {
    let e = executeCommands();
    for (let command of commands) {
        [action, text] = command.split(' ');
        e[action](text);
    }


    function executeCommands() {
        let result = [];
        return {
            add: function(text) {
                result.push(text);
            },
            remove: function(text) {
                result = result.filter((x) => (x != text))
            },
            print: function () {
                console.log(result.join(','));
            }
        };
    }
}


let commands = ['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'];
getCommands(commands);






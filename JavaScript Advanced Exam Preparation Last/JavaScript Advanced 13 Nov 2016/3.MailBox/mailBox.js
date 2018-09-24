class MailBox {
    constructor(){
        this.mailBox = [];
    }

    addMessage(subject, text){
        if (typeof subject !== 'string' || typeof text !== 'string') {
            throw new Error('Error');
        }

        this.mailBox.push({subject:subject, text:text});
        return this;
    }

    get messageCount(){
        return this.mailBox.length;
    }

    deleteAllMessages(){
        this.mailBox = [];
    }

    findBySubject(subst){
        if (typeof subst !== 'string') {
            throw new Error('Error');
        }

        return this.mailBox.filter((a) => a.subject.includes(subst));
    }

    toString(){
        if (this.mailBox.length === 0) {
            return ' * (empty mailbox)';
        }

        let result = '';
        for (let mail of this.mailBox) {
            result += ` * [${mail.subject}] ${mail.text}\n`;
        }
        result.trim();
        return result;
    }
}

let mb = new MailBox();
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
// console.log(mb.toString());
console.log(JSON.stringify(mb.findBySubject('wefewfwfw')));

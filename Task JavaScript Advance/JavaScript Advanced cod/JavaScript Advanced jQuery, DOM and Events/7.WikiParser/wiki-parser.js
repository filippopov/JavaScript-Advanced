function wikiParser() {
    let wiki = $('#wiki');

    let text = wiki.text().replace(/\s+(''([\w\s]+)'')/gm, (a, b, c) => {return ` <i>${c}</i>`});
    text = text.replace(/\s+('''([\w\s]+)''')/gm, (a, b, c) => {return ` <b>${c}</b>`});
    text = text.replace(/\s+(=([\w\s]+)=)/gm, (a, b, c) => {return ` <h1>${c}</h1>`});
    text = text.replace(/\s+(=([\w\s]+)=)/gm, (a, b, c) => {return ` <h1>${c}</h1>`});
    text = text.replace(/\s+(==([\w\s]+)==)/gm, (a, b, c) => {return ` <h2>${c}</h2>`});
    text = text.replace(/\s+(===([\w\s]+)===)/gm, (a, b, c) => {return ` <h3>${c}</h3>`});
    text = text.replace(/\B\[\[([\w\s]+)\]\]/gm, (a, b) => {return `<a href="/wiki/${b}">${b}</a>`});
    text = text.replace(/\B\[\[([\w\s]+)\|([\w\s]+)+\]\]/gm, (a, b, c) => {return `<a href="/wiki/${b}">${c}</a>`});
    wiki.html(text);
}

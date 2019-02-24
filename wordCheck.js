const getText = () => {
    const text = document.getElementById('text').value;
    return text;
}
const extractWords = (inputText) => {
    const words = inputText.split(' ');
    return words;
}
const refineWords = (inputText) => {
    let refinedText = inputText.toLowerCase();
    let refinedWords = refinedText.split(' ');
    return refinedWords
}

const countCharacters = (inputText) => {
    let numberOfCharacters = inputText.length;
    return numberOfCharacters
}

const countWords = (inputWords) => {
    let numberOfWords = 0;
    inputWords.forEach(word => {
        if(word !== ''){
            numberOfWords++
        }    
    })
    return numberOfWords;
}
const countSentences = (inputWords) => {
    let numberOfSentences = 0;
    inputWords.forEach(line => {
        if(line[line.length - 1] === '!' ||
        line[line.length - 1] === '.'){
            numberOfSentences++
        }
    })
    return numberOfSentences;
}
const mostUsedWord = (inputWords) => {
    let counts = {};
    let compare = 0;
    let mostFrequentWord;
    for (word of inputWords){
    if (counts[word] === undefined){
    counts[word] = 1;
    } else {
    counts[word] += 1
    }
    if (counts[word] > compare){
    compare = counts[word]
    mostFrequentWord = word
    }
}
    return mostFrequentWord;
}

const check = () => {
    const text = getText();
    const words = extractWords(text);
    if (!text) {
        const heading = document.getElementById('h1');
        heading.innerHTML = ':( Oh No!';
        const div = document.getElementsByClassName('result');
        div[0].innerHTML = '';
        setTimeout(() => {
        div[0].innerHTML = 'Please enter a text';
        }, 100)
    } else {
        const heading = document.getElementById('h1');
        heading.innerHTML = 'Result';
        const div = document.getElementsByClassName('result');
        div[0].innerHTML = '';
        setTimeout(() => {
        div[0].innerHTML = `Character count: ${countCharacters(text)}<br>
        Word count: ${countWords(words)}<br>
        Sentence count: ${countSentences(words)}<br>
        `}, 100)
} 
}

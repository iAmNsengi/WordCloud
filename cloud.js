const allWords = document.querySelector('#myParagraph').innerText.toLowerCase().split(/[,.:\s]+/);
const container = document.querySelector('#myWordCloud');
container.innerText="";
let result = [];
const uniqueWords = [...new Set(allWords)];
function countWords(text){
    let count = 0;
    for(let i=0;i<allWords.length;i++){
        if(text === allWords[i]) count++
    }return count
}
for(let i=0;i<uniqueWords.length;i++){
    result.push({
        'text':uniqueWords[i],
        'occurence': countWords(uniqueWords[i])
    })
}
result = result.sort(function(a,b){
    return b.occurence-a.occurence;
}).slice(0,12)
for(let i=0,fontSize=64;i<result.length;i++,fontSize-=4){
    let paragraph = document.createElement('p');
    let text = document.createTextNode(result[i]['text']);
    paragraph.appendChild(text);
    paragraph.style.fontSize = fontSize + 'px'
    container.appendChild(paragraph);
}



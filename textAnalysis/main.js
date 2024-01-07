const textAreaEl = document.querySelector(".textarea")
const charsNumberEl = document.querySelector(".statnumber_characters")
const tweetNumberEl = document.querySelector(".statnumber_tweet")
const emailNumberEl = document.querySelector(".statnumber_email")
const wordsNumberEL = document.querySelector(".statnumber_words")


wordsAnalysis = function(){
    const totalCharcters = textAreaEl.value.length;

    // characters count
    charsNumberEl.textContent = totalCharcters;

    //  tweet charcters count
    const tweetCharCount = 280 - totalCharcters;
    tweetNumberEl.textContent = tweetCharCount

    // count email characters
    const emailCharCount = 999 - totalCharcters
    emailNumberEl.textContent = emailCharCount

    if (tweetCharCount < 0){
        tweetNumberEl.style.color = 'red';
    } else{
        tweetNumberEl.style.color = 'black';
    }

    if (emailCharCount < 0){
        emailNumberEl.style.color = 'red';
    } else{
        emailNumberEl.style.color = 'black';
    }


    let wordsCount = textAreaEl.value.split(" ").length;
    if (textAreaEl.value.length === 0){
            wordsCount = 0;
    }
    wordsNumberEL.textContent= wordsCount




}



textAreaEl.addEventListener("input", wordsAnalysis)
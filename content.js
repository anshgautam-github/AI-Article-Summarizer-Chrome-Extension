//this file runs inside the webpage DOM, and it will help us to query the element , like if u want to extract some
//articles from a webpage, this will help us out


function getArticle(){
    const article=document.querySelector("article");
    if (article) return article.innerText;
    const paragraph=Array.from(document.querySelectorAll("p"));
    return paragraph.map((p)=>p.innerText).join("\n");
}

//this will listen to some commands from the popup.js file , it will not automatically run obviously right 
//when we click on sumamrize BUTTON then only we will trigger this function.

chrome.runtime.onMessage.addListener((req,_sender,sendResponse)=>{
    if((req.type= "GET_ARTICLE_TEXT")){
        const text= getArticle();
        sendResponse({ text });
    }
})
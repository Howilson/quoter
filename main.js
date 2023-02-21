
function getCat() {
    let selector = document.getElementById('select');
    selector.disabled = false;
    let selected = document.getElementById('select').value;
    let quoteText = document.getElementById('blockquote');
    let quoteAuthor = document.getElementById('author');
    let cat = quotesArr.filter(quote => quote.category === selected);
    let rand = Math.floor(Math.random() * cat.length);
    quoteText.innerText = cat[rand].text;
    quoteAuthor.innerText = cat[rand].author;
     
    }
 
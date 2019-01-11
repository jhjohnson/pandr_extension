const numberOfQuotes = quotes.length;

function randomQuote(imageSrc) {
  const chosenQuoteIndex = Math.floor(Math.random() * numberOfQuotes);
  const chosenQuote = quotes[chosenQuoteIndex];
  document.getElementById('quote').innerText = chosenQuote.quote;
  document.getElementById('quoteImg').src = chosenQuote.image;
  if (chosenQuote.image === 'ron.png') {
    document.getElementById('quoteImg').classList.add('ron-img');
  }
  else if (chosenQuote.image === 'april.png') {
    document.getElementById('quoteImg').classList.add('april-img');
  }
}

randomQuote();

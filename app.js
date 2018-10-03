var chosenQuote = Math.random() * 10 + 1;

function randomQuote(imageSrc) {

  if (chosenQuote <= 5) {
    const quoteToDisplay = fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then((quote) => {
        document.getElementById('quote').innerText = quote;
        var imageSrc = document.getElementById('quoteImg').src = 'ron.png';
        document.body.appendChild(imageSrc);
        return true;
      });
    }

  else {
    const quoteToDisplay = fetch('https://leslie-knope-quotes.herokuapp.com/quotes')
      .then(response => response.json())
      .then((quote) => {
        document.getElementById('quote').innerText = quote;
        var imageSrc = document.getElementById('quoteImg').src = 'knope.png';
        document.body.appendChild(imageSrc);
        return true;
      });
    }
}

randomQuote();

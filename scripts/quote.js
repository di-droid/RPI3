async function getNextMessage() {
    const url = 'https://api.adviceslip.com/advice';
    const result = await fetch(url);

    if (!result.ok) {
        return '\" API error.\"';
    }

    const json = await result.json();
    return '\"' + json.slip.advice + '\"';
}

async function setQuote() {
    quote_text.textContent = await getNextMessage();
}

const quote_text = document.getElementById('quote_text');
const next_quote_button = document.getElementById('next_quote');

next_quote_button.addEventListener('click', (event) => {
    setQuote();
});

setQuote();
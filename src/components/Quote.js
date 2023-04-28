import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setquote] = useState('');
  const [quoteError, setQuoteError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'bIjYCDyNgX1RI/dP1mdaMQ==JiMou8R3AeWdO2LE',
            },
          },
        );
        const data = await response.json();
        setquote(data[0].quote);
      } catch (error) {
        setQuoteError('Error occured fetching quotes!');
      }
    };

    setTimeout(() => {
      fetchQuotes();
    }, 1000);
  }, []);

  return (
    <div className="quoteContainer">
      <p className="quotes">{quote}</p>
      {quoteError && <p className="error">{quoteError}</p>}
    </div>
  );
};

export default Quote;

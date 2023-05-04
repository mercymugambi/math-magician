import React, { useState, useEffect, useRef } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [quoteError, setQuoteError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'uDlg8X0L14FYqImg58eHxbqOk88p65SBqSEvkZeQ',
            },
          },
        );
        const data = await response.json();
        if (isMountedRef.current) {
          setQuote(data[0].quote);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setQuoteError('Error occurred fetching quotes!');
          setIsLoading(false);
        }
      }
    };
    fetchQuotes();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="quoteContainer">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <p className="quotes">{quote}</p>
      )}
      {quoteError && <p className="error">{quoteError}</p>}
    </div>
  );
};

export default Quote;

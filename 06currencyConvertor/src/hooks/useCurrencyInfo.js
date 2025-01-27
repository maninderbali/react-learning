import { useEffect, useState } from 'react';

function useCurrecnyInfo(currency) {
  const currencyUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(currencyUrl)
      .then((response) => response.json())
      .then(
        (res) => {
          console.log(res.json());
        },
        [currency]
      )
      .then((res) => {
        setData(res[currency]);
        console.log('dataaaaaaaa ', data);
      });
  }, [currency, currencyUrl, data]);
  console.log('data to return ', data);
  return data;
}

export default useCurrecnyInfo;

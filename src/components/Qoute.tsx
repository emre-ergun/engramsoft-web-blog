import { useEffect, useState } from 'react';
import MainLoading from './MainLoading';

const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f81473c04dmsh442e94189fe79eep19c115jsnf4cc3c180dcc',
    'x-rapidapi-host': 'quotes15.p.rapidapi.com',
  },
};

function Qoute() {
  const [data, setData] = useState<{
    id: string;
    content: string;
    author: string;
  }>({
    id: '',
    content: '',
    author: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.message) {
          console.log(result.message);
        } else {
          setData({
            id: result.id,
            content: result.content,
            author: result.originator.name,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='relative mt-10 flex items-center justify-center'>
      {data.content === '' ? (
        <MainLoading />
      ) : (
        <p className='text-2xl sm:text-3xl text-center'>"{data.content}"</p>
      )}
      <p className='absolute text-md italic -bottom-8 right-0 sm:right-24'>
        {data.author}
      </p>
    </div>
  );
}

export default Qoute;

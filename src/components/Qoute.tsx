import { useEffect, useState } from 'react';

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
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setData({
        id: result.id,
        content: result.content,
        author: result.originator.name,
      });
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='relative mt-10 flex items-center justify-center'>
      {data.content === '' ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-secondary'></div>
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

import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

type DataItem = {
  id: string;
  content: string;
};
const Notes = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'];
  useEffect(() => {
    const existingDataString = localStorage.getItem('myData');
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      console.log(existingData);
      setData(existingData);
    }
  }, []);

  return (
    <div className='max-w-6xl mx-auto px-5 grid grid-cols-1 lg:gird-cols-2 sm:grid-cols-3 gap-4'>
      {data.map((item: DataItem, idx: number) => (
        <div key={idx}>
          <div
            className='px-4 py-3 font-bold text-primary border border-secondary'
            style={{ backgroundColor: colors[idx % colors.length] }}
          >
            Note - {idx + 1}
          </div>
          <div
            className='ProseMirror whitespace-pre-line bg-white border border-secondary px-6 py-4'
            style={{ whiteSpace: 'pre-line' }}
          >
            {parse(item.content)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;

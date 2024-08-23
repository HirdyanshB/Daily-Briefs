import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { Rings } from 'react-loader-spinner';

const NewsBoard = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_MEDIASTACK_BASEURL}/v1/news?access_key=${import.meta.env.VITE_API_KEY}&languages=en&categories=${category}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger"> News</span>
      </h2>
      {loading ? (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'10rem'}}>
          <Rings color="#00BFFF" height={120} width={120} /> 
        </div>
      ) : (
        data.length > 0 ? (data.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        ))
      ) : (
        <h2>Something went wrong...!</h2>
      )
      )}
    </div>
  );
};

export default NewsBoard;

import React, { useEffect, useState } from "react";
import "./Information.css";

const Information = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="information-container">
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;

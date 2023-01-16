import axios from "axios";
import React, { useEffect, useState } from "react";

function SimpleFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      {data.map((data) => {
        return <h3 key={data.id}>{data.name}</h3>;
      })}
    </div>
  );
}

export default SimpleFetch;

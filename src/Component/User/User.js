import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fectchUser = () => {
  return axios.get("http://localhost:4000/users");
};

function User() {
  const { isLoading, data } = useQuery("user", fectchUser);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      {data?.data.map((data) => {
        return <h3 key={data.id}>{data.name}</h3>;
      })}
    </div>
  );
}

export default User;

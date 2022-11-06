import React from "react";
import {useSHData} from "../hooks/useData";

const onSuccess = (data) => {
  console.log("success query", data);
};

const onError = (error) => {
  console.log("error query", error);
};

function RQSuperheroesPage() {
  const { isLoading, data, error, isError, isFetching, refetch } = useSHData(
    onSuccess,
    onError
  );

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <button onClick={refetch}>Fetch the data on click</button>
      <h2>React Query </h2>
      <p> subscriber : 👀 {data.data.subscribers_count}</p>
      <p> stars : ✨ {data.data.watchers}</p>
      <p> forks : 🍴 {data.data.forks}</p>
    </>
  );
}

export default RQSuperheroesPage;

import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const getEmojis = () => {
  return axios.get("https://api.github.com/repos/tannerlinsley/react-query");
};

function RQSuperheroesPage() {
  const { isLoading, data, error, isError, isFetching } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: getEmojis,
    //cache fallback back to 5 min.
    // staleTime: 30000,
    // to reduce no of network requests during stale time
    // default stale time is 0 seconds
    refetchOnMount: true,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query</h2>
      <p> subscriber : 👀 {data.subscribers_count}</p>
      <p> stars : ✨ {data.stargazers_count}</p>
      <p> forks : 🍴 {data.forks_count}</p>
    </>
  );
}

export default RQSuperheroesPage;

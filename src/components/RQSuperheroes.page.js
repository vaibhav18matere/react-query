import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const getEmojis = () => {
  return axios.get("https://api.github.com/repos/tannerlinsley/react-query");
};

function RQSuperheroesPage() {
  const { isLoading, data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: getEmojis,
    //cache fallback back to 5 min.
    // staleTime: 30000,
    // to reduce no of network requests during stale time
    // default stale time is 0 seconds
    // refetchOnMount: true,
    // refetcOnWindowFocus: true,
    // anytime tab looses & gains focus, a bckg re-fetch will happen.
    // refetchInterval: 2000,
    //automatic refetch after 2 sec, it looses focus when you chane tab, so we use,
    // refetchIntervalInBackground:true,
    enabled: false, // disable fetching on loading
  });

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <button onClick={refetch}>Fetch the data on click</button>
      <h2>React Query</h2>
      <p> subscriber : 👀 {data.subscribers_count}</p>
      <p> stars : ✨ {data.stargazers_count}</p>
      <p> forks : 🍴 {data.forks_count}</p>
    </>
  );
}

export default RQSuperheroesPage;

import { useQuery } from 'react-query';
import axios from "axios";

const getEmojis = () => {
  return axios.get("https://api.github.com/repos/tannerlinsley/react-query");
};

export const useSHData = (onSuccess, onError) => {
     return useQuery({
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
        // enabled: false, // disable fetching on loading
        onSuccess,
        onError,
      });
}
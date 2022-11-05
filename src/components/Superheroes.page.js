import { useState, useEffect } from "react";
import axios from "axios";

function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => {
        setData(res.data);
        console.log(res.data.full_name);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>error message here : {error}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      <p>{data.full_name}</p>
    </>
  );
}
export default SuperHeroesPage;

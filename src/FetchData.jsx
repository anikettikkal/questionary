import { useEffect, useState } from 'react'
import axios from "axios"

function FetchData() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // FIXED

  return (
    <>
      <h1>ANIKET</h1>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
        </div>
      ))}
    </>
  );
}

export default FetchData;

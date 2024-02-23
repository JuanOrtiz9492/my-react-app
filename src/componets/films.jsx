import { useState, useEffect } from "react";

const Films = ()=> {
const [films, setFilms] = useState([])
  useEffect(function() {
    async function fetchData () {
      const data = await fetch('https://swapi.dev/api/people/1')
      const parsed = await data.json()
      setFilms(parsed.films)
      console.log(parsed)
    }
    fetchData()
    /* function fetchData2 () {
      fetch('https://swapi.dev/api/people/1')
        .then(data => data.json()) 
        .then(response => console.log(response))
    }
    fetchData2() */
  },[])
  return (
    <div>
        {films.map((film,idx)=>{
            return(
            <div key={idx}>
                <h2>pelicula swr</h2>
                <p>{film}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Films

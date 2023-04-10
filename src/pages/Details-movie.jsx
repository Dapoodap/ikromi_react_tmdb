import React, { useEffect, useState } from 'react'
import { getMovieList } from '../api';
import { useParams } from 'react-router-dom';


function Detail() {
    const [movie, setMovie] = useState([]);
    // const [filteredData, setFilteredData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getMovieList().then((result) => {
        setMovie(result);
        // theMovie(id)
        });
        
      }, []);
      

    //   console.log(movie.filter((item) => item.id === parseInt(id)))
      
      const MovieDetail = () => {
        return movie.map((movie, i) => {
            if (movie.id === parseInt(id)) {
                return (
                    <div>
                        <h1>{movie.original_title}</h1>
                        <p>{movie.overview}</p>
                    </div>
                  );
            }
        });
    }
    return (
        <>
         <MovieDetail/>
        </>
       )
  
}


export default Detail
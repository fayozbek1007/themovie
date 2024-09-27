import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [popularMovies, setPopularMovies] = useState([]);
    console.log(currentIndex);

    const serchref = useRef();
    const usnavget = useNavigate();

    const handelserch = (v) => {
        v.preventDefault();
        const searchValue = serchref.current.value.trim();

        if (searchValue === '') {
            return;
        }

        console.log("This is working search", searchValue);
        usnavget(`./search?query=${searchValue}`);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                setPopularMovies(response.data.results);
                if (response.data.results.length > 0) {
                    setBackgroundImage(`https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`);
                }
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (popularMovies.length > 0) {
                setCurrentIndex(prevIndex => {
                    const nextIndex = (prevIndex + 1) % popularMovies.length;
                    setBackgroundImage(`https://image.tmdb.org/t/p/original${popularMovies[nextIndex].backdrop_path}`);
                    return nextIndex;
                });
            }
        }, 4000);

        return () => clearInterval(intervalId);
    }, [popularMovies]);

    return (
        <div
            className='search-img w-[1370px] h-[300px] mx-[auto] my-0 mb-[20px] mt-[-30px]'
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='ml-[40px] pt-[30px]'>

                <div className='text-white'>
                    <h1 className='font-[700] text-[48px]'>Welcome.</h1>
                    <p className='text-[32px] font-[600]'>Millions of movies, TV shows and people to discover. Explore now.</p>
                </div>

                <form onSubmit={handelserch} className='mt-[35px] flex'>
                    <input
                        type="text"
                        placeholder='Search for a movie, TV show, or person.....'
                        className='focus:outline-none focus:border-transparent px-[20px] py-[10px] w-[1100px] rounded-full border-[1px] bg-white text-neutral-500'
                        ref={serchref}
                    />
                    <input type="submit"
                        value={"Search"}
                        className='px-[30px] py-[10px] rounded-full border-[1px] bg-emerald-500 border-emerald-500 ml-[-38px] w-[130px] font-[600] text-white text-center'
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;

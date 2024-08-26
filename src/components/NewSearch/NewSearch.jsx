import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const NewSearch = () => {
    const [SearchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const searchRef = useRef();

    const handleSearch = (v) => {
        v.preventDefault();
        const searchValue = searchRef.current.value.trim();

        if (searchValue === '') {
            return;
        }

        setSearchParams({ query: searchValue });
    };

    useEffect(() => {
        const apiKey = 'eafe1f3a13d089d87f149cb4c9b3ced2';
        const query = SearchParams.get('query');

        if (!query) return;

        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`,
                    {
                        headers: {
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWZlMWYzYTEzZDA4OWQ4N2YxNDljYjRjOWIzY2VkMiIsIm5iZiI6MTcyNDQyMDg3Ny41ODEyNjQsInN1YiI6IjY2YzMwMjJiY2UxZjZkMDc2Y2ZiZmQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mr0w-s75DSVmXf7r26F22f_i6E8byZpECRixnOpJMkA",
                            accept: 'application/json'
                        }
                    }
                );

                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();

    }, [SearchParams]);

    return (
        <div className='w-[1400px] mx-[auto] my-0'>
            <div>
                <div>
                    <div className='ml-[40px] mb-8'>
                        <form onSubmit={handleSearch} className='mt-[35px] flex'>
                            <input
                                type="text"
                                placeholder='Search for a movie, TV show, or person.....'
                                className='focus:outline-none focus:border-transparent px-[20px] py-[10px] w-[1100px] rounded-full border-[1px] bg-white text-neutral-500'
                                ref={searchRef}
                            />
                            <input type="submit"
                                value={"Search"}
                                className='px-[30px] py-[10px] rounded-full border-[1px] bg-emerald-500 border-emerald-500 ml-[-38px] w-[130px] font-[600] text-white text-center'
                            />
                        </form>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='rounded-[10px] overflow-hidden w-[252px] mt-[20px] border-[#0000003a] border-[1px] h-[380px]'>
                        <div className='bg-[rgb(1,180,228)] pl-[20px] py-[20px]'>
                            <p className='text-[19.2px] font-[600] text-[white]'>Search Results</p>
                        </div>
                        <div className=''>
                            <ul className='py-[10px]'>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/movies">Movies</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/tv-shows">TV Shows</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/people">People</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/collections">Collection</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/keywords">Keywords</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/companies">Companies</Link></li>
                                <li className='pl-[20px] py-[7px] hover:bg-[#dcd7d75f] font-[500] text-[black] text-[17px]'><Link to="/networks">Networks</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 w-[80%] mb-[20px]'>
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <div className='w-[100%] h-[201px] flex gap-[20px] border-[1px] border-[#0000003c] rounded-[10px] overflow-hidden mt-[20px]' key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-[154px] h-[201px]'
                                    />
                                    <div className='pt-[15px]'>
                                        <div className='flex gap-[10px]'>
                                            <h2 className='font-[600] text-[16px]'>{movie.title}</h2>
                                            <span className='text-[#0000005e]'>({movie.original_title})</span>
                                        </div>
                                        <p className='text-[16px] text-[#0000005e] font-[600]'>{movie.release_date}</p>
                                        <p className='mt-[10px] text-[17px]'>{movie.overview}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Hech qanday film topilmadi.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSearch;

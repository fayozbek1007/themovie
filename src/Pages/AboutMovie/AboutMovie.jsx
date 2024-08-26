import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AboutMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const resp = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=eafe1f3a13d089d87f149cb4c9b3ced2`);
                setMovie(resp.data);
            } catch (error) {
                console.log('Xatolik bor:', error);
            }
        };
        fetchMovie();
    }, [id]);

    return (
        <div className='mt-[30px] relative w-[100%] py-[30px] px-[40px] mb-[20px]'>
            {movie && (
                <div className='absolute inset-0'>
                    <img
                        className='z-[-2] w-[100%] h-full object-cover'
                        src={`${baseURL}${movie.backdrop_path}`}
                        alt={`${movie.title} background`}
                    />
                </div>
            )}
            <div className='relative z-10'>
                {movie && (
                    <div className='w-[1400px] h-[570px] mx-[auto] my-0 px-[40px] py-0 flex'>
                        <div>
                            <img
                                className='w-[300px] h-[450px] rounded-lg'
                                src={`${baseURL}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className='flex bg-gray-800 gap-[15px] items-center h-[60px]'>
                                <img className='rounded-[4px] ml-[20px] w-[36px] h-[36px]' src="https://media.themoviedb.org/t/p/original/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg" alt="" />
                                <div className='text-white'>
                                    <p>
                                        Available to Rent or Buy
                                    </p>
                                    <p className='font-[600] text-slate-300'>
                                        Watch Now
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[1020px] h-[510px] pl-[40px]'>
                            <div className='flex gap-[15px] items-center'>
                                <h1 className='text-white font-[700] text-[35.2px]'>{movie.title}</h1>
                                <p className='text-white font-[700] text-[35.2px]'>({movie.release_date})</p>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <p className='text-stone-400 font-[500] border-[2px] border-stone-500 rounded-[4px] px-[3px] py-[1px]'>{movie.origin_country}</p>
                                <p className='text-stone-400 font-[500] text-[17px]'>( {movie.release_date} )</p>
                            </div>
                            <div className='mt-[20px]'>
                                <em className='font-[600] text-[17.6px] text-stone-400'>Say your prayers</em>
                                <p className='mt-[20px] font-[600] text-[20px] text-stone-300'>Overview</p>
                                <p className='text-stone-300 text-[18px] font-[500]'>{movie.overview}</p>
                                <div className='flex items-center mt-[20px] gap-[15px]'>
                                    <p className='font-[600] text-[20px] text-stone-300'>Popularity</p>
                                    <p className='font-[600] text-[17px] text-stone-300'>{movie.popularity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutMovie;

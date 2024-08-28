import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CircularProgressWithLabel from '../../components/Fozi/Foiz';

const AboutPopular = () => {
    const { id } = useParams();
    const [popmovie, setPopmovie] = useState(null);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchpop = async () => {
            try {
                const respop = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                
                const selectedMovie = respop.data.results.find(movie => movie.id.toString() === id);
                setPopmovie(selectedMovie);
                console.log("No name",respop.data.results);
            } catch (error) {
                console.log('Xatolik bor:', error);
            }
        };
        fetchpop();
    }, [id]);
    if (!popmovie) return <div>Yuklanmaoqada...</div>;

    return (
        <div>
            <div className='mt-[30px] relative w-[100%] py-[30px] px-[40px] mb-[20px]'>
                <div className='absolute inset-0'>
                    <img
                        className='z-[-2] w-[100%] h-full object-cover'
                        src={`${baseURL}${popmovie.backdrop_path}`}
                        alt={`${popmovie.title} background`}
                    />
                </div>
                <div className='relative z-10'>
                    <div className='w-[1400px] h-[570px] mx-[auto] my-0 px-[40px] py-0 flex'>
                        <div>
                            <img
                                className='w-[300px] h-[450px] rounded-lg'
                                src={`${baseURL}${popmovie.poster_path}`}
                                alt={popmovie.title}
                            />
                            <div className='flex bg-gray-800 gap-[15px] items-center h-[60px]'>
                                <img className='rounded-[4px] ml-[20px] w-[36px] h-[36px]' src="https://media.themoviedb.org/t/p/original/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg" alt="" />
                                <div className='text-white'>
                                    <p>Available to Rent or Buy</p>
                                    <p className='font-[600] text-slate-300'>Watch Now</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[1020px] h-[510px] pl-[40px]'>
                            <div className='flex gap-[15px] items-center'>
                                <h1 className='text-white font-[700] text-[35.2px]'>{popmovie.name}</h1>
                                <p className='text-white font-[700] text-[35.2px]'>({popmovie.first_air_date})</p>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <p className='text-stone-400 font-[500] border-[2px] border-stone-500 rounded-[4px] px-[3px] py-[1px]'>{popmovie.origin_country}</p>
                                <p className='text-stone-400 font-[500] text-[17px]'>( {popmovie.first_air_date} )</p>
                            </div>
                            <div className='mt-[20px]'>
                                <div className='flex items-center gap-[20px]'>
                                    <CircularProgressWithLabel value={popmovie.vote_average * 10} />
                                    <em className='font-[600] text-[17.6px] text-stone-400'>Say your prayers</em>
                                </div>
                                <p className='mt-[20px] font-[600] text-[20px] text-stone-300'>Overview</p>
                                <p className='text-stone-300 text-[18px] font-[500]'>{popmovie.overview}</p>
                                <div className='flex items-center mt-[20px] gap-[15px]'>
                                    <p className='font-[600] text-[20px] text-stone-300'>Popularity</p>
                                    <p className='font-[600] text-[17px] text-stone-300'>{popmovie.popularity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPopular;

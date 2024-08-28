import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import CircularProgressWithLabel from '../../components/Fozi/Foiz';
import { Link } from 'react-router-dom';

const UPcoming = () => {
    const [upcom, SetUpcoming] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const UPFetch = async () => {
            try {
                const upcomres = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                SetUpcoming(upcomres.data.results);
            } catch (error) {
                console.error('Xatolik bor :', error);
            }
        };
        UPFetch();
    }, []);


    return (
        <div className='w-[1400px] py-[30px] px-[40px] mx-[auto] my-0'>
            <h1 className='font-[600] text-[27px]'>Upcoming Movies</h1>
            <div className='flex gap-[30px] mt-[20px]'>
                <div className='w-[258.08px] h-[]'>
                    <div className='flex items-center justify-between px-[16px] py-[14px] border-neutral-300 border-[1px] rounded-[8px] shadow-lg'>
                        <p className='text-[20px] font-[600]'>
                            Sort
                        </p>
                        <span>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <div className='mt-[15px] flex items-center justify-between px-[16px] py-[14px] border-neutral-300 border-[1px] rounded-[8px] shadow-lg'>
                        <p className='text-[20px] font-[600]'>Where To Watch</p>
                        <span>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <div className='mt-[15px] flex items-center justify-between px-[16px] py-[14px] border-neutral-300 border-[1px] rounded-[8px] shadow-lg'>
                        <p className='text-[20px] font-[600]'>Filters</p>
                        <span>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                    <button className='text-[20px] font-[600] w-[258px] text-center py-[10px] rounded-[32px] bg-gray-500 mt-[15px] text-white'>
                        Search
                    </button>
                </div>
                <div className='w-[1052px] grid grid-cols-5'>
                    {upcom.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div className='shadow-lg inline-block w-[181px] truncate mr-5 border-[1px] border-b-slate-400 rounded-[8px] mb-[30px]'>
                                <img
                                    className='w-[181px] h-[273px] rounded-lg'
                                    src={`${baseURL}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className='z-[2] mt-[-20px] ml-[10px]'>
                                    <CircularProgressWithLabel value={movie.vote_average * 10} />
                                </div>
                                <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                    <h1 className='text-[18px] font-bold truncate'>{movie.title}</h1>
                                    <p className='text-xs'>{movie.release_date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className='w-[1000px] text-center py-[10px] rounded-[30px] bg-[#01B4E4]'>
                        <button className='text-[30px] font-[800] text-white'>
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UPcoming;

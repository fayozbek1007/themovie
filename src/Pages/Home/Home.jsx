import React, { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                setData(response.data.results);
            } catch (error) {
                console.error('Xatolik sodir bo‘ldi:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className=''>
            <div className='flex gap-[20px] w-[1300px] mx-[auto] my-0 mt-[30px] mb-[20px] items-center'>
                <h1 className='text-[1.5rem] font-[600]'>Trending</h1>
                <div className='flex gap-[20px] rounded-[20px] border-[2px] border-[black]'>
                    <a className='rounded-[20px] bg-slate-900 text-teal-600 text-[16px] font-[400] px-[20px]  py-[1px]'>Today</a>
                    <a className='px-[20px] py-[1px] text-teal-600 text-[16px] font-[400]'>This Week</a>
                </div>
            </div>
            <div className='overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px]  ml-[100px] w-[1370px] m'>
                {data.map(movie => (
                    <div className='inline-block w-[170px] mt-[10px] truncate'>
                        <img className='w-36 h-56 rounded-lg' src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
                        <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                            <h1 className='text-sm font-bold truncate'>{movie.title}</h1>
                            <p className='text-xs'>{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

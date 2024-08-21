import React, { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import axios from 'axios';
import { menuhover } from '../../Js/navbarmenu';

const PopHoverBg = () => {
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [popular, Setpopular] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                Setpopular(response.data.results);
            } catch (error) {
                console.error('Xatolik sodir bo‘ldi:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="w-[1370px] mx-[auto] my-0 mt-[30px] ">
            <img src="" alt="" />
            <TabGroup className="mt-[20px] p-[20px]">
                <TabList className="flex gap-4">
                    <div className='items-center flex gap-[20px]'>
                        <h1 className='font-[600] text-[22px] mt-[-5px]'>Latest Trailers</h1>
                        <div className='gap-0 rounded-full border-slate-900 border-[1px]'>
                            {menuhover.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className="rounded-full py-[2px] px-[20px] text-slate-900 font-semibold cursor-pointer focus:outline-none data-[selected]:bg-teal-400 data-[selected]:text-[rgb(3,37,65)]"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </div>
                    </div>
                </TabList>
                <TabPanels>
                    {menuhover.map(({ name }) => (
                        <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                            <div className='ml-[80px] my-[20px] overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1370px]'>
                                {popular.map(populars => (
                                    <div key={populars.id} className='inline-block w-[320px] mt-[10px] truncate hover:scale-[1.1] transition-[1.4s]'>
                                        <img className='w-[300px] h-[168.54px] rounded-[10px]' src={`${baseURL}${populars.poster_path}`} alt={populars.title} />
                                        <div className='text-center mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                            <h1 className='text-[18px] font-[500] truncate'>{populars.original_title}</h1>
                                            <p className='text-[15px] font-[500]'>{populars.release_date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </div>
    );
}

export default PopHoverBg;

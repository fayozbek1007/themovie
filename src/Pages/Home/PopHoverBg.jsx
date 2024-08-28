import React, { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import axios from 'axios';
import { menuhover } from '../../Js/navbarmenu';


const PopHoverBg = () => {
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [popular, Setpopular] = useState([]);
    const [hoveredMovieBackdrop, setHoveredMovieBackdrop] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                Setpopular(response.data.results);
                if (response.data.results.length > 0) {
                    setHoveredMovieBackdrop(response.data.results[0].backdrop_path);
                }
            } catch (error) {
                console.error('Xatolik sodir bo‘ldi:', error);
            }
        };
        fetchData();
    }, []);

    const handleMouseEnter = (backdropPath) => {
        setHoveredMovieBackdrop(backdropPath);
    };

    const handleMouseLeave = () => {
        if (popular.length > 0) {
            setHoveredMovieBackdrop(popular[0].backdrop_path);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${baseURL}${hoveredMovieBackdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '1370px',
                height: '369px',
                margin: '0',
                padding: '0',
                position: 'relative'
            }}
            className="w-[1370px] mx-[auto] my-0 mt-[30px] ">
            <TabGroup className="mt-[20px] p-[20px]">
                <TabList className="flex gap-4">
                    <div className='items-center flex gap-[20px]'>
                        <h1 className='font-[600] text-[22px] mt-[-5px] text-white'>Latest Trailers</h1>
                        <div className='gap-0 rounded-full border-teal-600 border-[2px]'>
                            {menuhover.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className=" rounded-full py-[2px] px-[20px] text-white font-semibold cursor-pointer focus:outline-none data-[selected]:bg-teal-400 data-[selected]:text-[rgb(3,37,65)]"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </div>
                    </div>
                </TabList>
                <TabPanels className="card-background p-[10px] no-horizontal-scroll no-vertical-scroll ">
                    {menuhover.map(({ name }) => (
                        <TabPanel key={name} className="rounded-xl px-[10px]">
                            <div className='ml-[10px] my-[20px] overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1400px] scrollbar-thin'>
                                {popular.map(populars => (
                                    <div
                                        key={populars.id}
                                        className=' inline-block w-[320px] mt-[10px] truncate hover:scale-[1.1] transition-[1.4s]'
                                        onMouseEnter={() => handleMouseEnter(populars.backdrop_path)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <img
                                            className='w-[300px] h-[168.54px] rounded-[10px]'
                                            src={`${baseURL}${populars.poster_path}`}
                                            alt={populars.title}
                                        />
                                        <div className='text-center mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                            <h1 className='text-white text-[18px] font-[600] truncate'>{populars.original_title}</h1>
                                            <p className='text-white text-[15px] font-[500]'>{populars.release_date}</p>
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

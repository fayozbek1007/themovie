import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgressWithLabel from '../../components/Fozi/Foiz';

const FreeWatch = () => {
    const [free, setFree] = useState([]);
    const [freetv, setFreetv] = useState([]);

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchFreeMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');

                setFree(response.data.results);
            } catch (error) {
                console.error('Xatolik yuz berdi:', error);
            }
        };
        fetchFreeMovies();
    }, []);

    useEffect(() => {
        const fetchFetchTV = async () => {
            try {
                const responseTV = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                setFreetv(responseTV.data.results);
                // console.log(responseTV.data.results);
            } catch (error) {
                console.log('Xatolik yuz berdi:', error);
            }
        };
        fetchFetchTV();
    }, []);

    const freemovies = [
        {
            id: 1,
            name: "Movies",
        },
        {
            id: 2,
            name: "TV",
        },
    ];

    return (
        <div className='mt-[30px]'>
            <TabGroup>
                <TabList>
                    <div className='items-center flex gap-[20px]'>
                        <h1 className='font-[600] text-[22px] mt-[-5px]'>Free To Watch</h1>
                        <div className='gap-0 rounded-full border-slate-900 border-[1px]'>
                            {freemovies.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className="rounded-full py-[2px] px-[20px] text-slate-900 font-semibold cursor-pointer focus:outline-none data-[selected]:bg-[rgb(3,37,65)] data-[selected]:text-teal-600"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </div>
                    </div>
                </TabList>
                <TabPanels>
                    <TabPanel className="rounded-xl p-3 scrollbar-thin">
                        {freetv.length > 0 ? (
                            <div className='scrollbar-thin overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1370px]'>
                                {freetv.map(tvShow => (
                                    <Link key={tvShow.id} to={`/popular/${tvShow.id}`}>
                                        <div className='inline-block w-[150px] mt-[10px] truncate mr-5'>
                                            <img
                                                className='w-[150px] h-[225px] rounded-lg'
                                                src={`${baseURL}${tvShow.poster_path}`}
                                                alt={tvShow.name}
                                            />
                                            <div className='z-[2] mt-[-20px] ml-[10px]'>
                                                <CircularProgressWithLabel value={tvShow.vote_average * 10} />
                                            </div>
                                            <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                                <h1 className='text-sm font-bold truncate'>{tvShow.name}</h1>
                                                <p className='text-xs'>{tvShow.first_air_date}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className='text-red-600 font-[600] text-[18px]'>Hozirda ko'rsatiladigan TV ko'rsatuvlar mavjud emas.</p>
                        )}
                    </TabPanel>
                    <TabPanel className="rounded-xl p-3">
                        {free.length > 0 ? (
                            <div className='scrollbar-thin overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1370px]'>
                                {free.map(movie => (
                                    <div key={movie.id} className='inline-block w-[150px] mt-[10px] truncate mr-5'>
                                        <img
                                            className='w-[150px] h-[225px] rounded-lg'
                                            src={`${baseURL}${movie.poster_path}`}
                                            alt={movie.name}
                                        />
                                        <div className='z-[2] mt-[-20px] ml-[10px]'>
                                            <CircularProgressWithLabel value={movie.vote_average * 10} />
                                        </div>
                                        <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                            <h1 className='text-sm font-bold truncate'>{movie.overview}</h1>
                                            <p className='text-xs'>{movie.first_air_date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className='text-red-600 font-[600] text-[18px]'>Hozirda ko'rsatiladigan film mavjud emas.</p>
                        )}
                    </TabPanel>
                </TabPanels>

            </TabGroup>
        </div>
    );
};

export default FreeWatch;

import React, { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import axios from 'axios';
import { categories } from '../../Js/navbarmenu';
import PopHoverBg from './PopHoverBg';
import Search from '../../components/Search/search';

const Home = () => {
    const [data, setData] = useState([]);
    const [thisdata, Setthisdata] = useState([]);
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

    useEffect(() => {
        const weekData = async () => {
            try {
                const thisres = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                Setthisdata(thisres.data.results);
            } catch (error) {
                console.error('Xatolik sodir bo‘ldi:', error);
            }
        };
        weekData();
    }, []);


    return (
        <div className="w-[1370px] mx-[auto] my-0 mt-[30px]">
            <Search />
            <TabGroup>
                <TabList className="flex gap-4">
                    <div className='items-center flex gap-[20px]'>
                        <h1 className='font-[600] text-[22px] mt-[-5px]'>Trending</h1>
                        <div className='gap-0 rounded-full border-slate-900 border-[1px]'>
                            {categories.map(({ name }) => (
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
                <TabPanels
                    style={{
                        backgroundImage: "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'left top 70px',
                        backgroundRepeat: 'no-repeat',
                        width: '1370px',
                        margin: '0',
                        padding: '0',
                    }}
                    className="card-background p-[10px]"
                >
                    {categories.map(({ name }) => (
                        <div key={name}>
                            <TabPanel className="rounded-xl  p-3">
                                <div className='overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1370px]'>
                                    {data.map(movie => (
                                        <div key={movie.id} className='inline-block w-[170px] mt-[10px] truncate'>
                                            <img className='w-36 h-56 rounded-lg' src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
                                            <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                                <h1 className='text-sm font-bold truncate'>{movie.title}</h1>
                                                <p className='text-xs'>{movie.release_date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel className="rounded-xl  p-3">
                                <div className='overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-[1370px]'>
                                    {thisdata.map(person => (
                                        <div key={person.id} className='inline-block w-[170px] mt-[10px] truncate'>
                                            <img className='w-36 h-56 rounded-lg' src={`${baseURL}${person.backdrop_path}`} alt={person.name} />
                                            <div className='mt-2 p-2 w-[150px] h-[70px] overflow-hidden'>
                                                <h1 className='text-sm font-bold truncate'>{person.title}</h1>
                                                <p className='text-xs'>{person.release_date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        </div>
                    ))}
                </TabPanels>

            </TabGroup>
            <PopHoverBg />
        </div>
    );
}

export default Home;

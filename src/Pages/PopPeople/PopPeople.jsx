import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopPeople = () => {
    const [data, setData] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const popfetch = async () => {
            try {
                const popres = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=eafe1f3a13d089d87f149cb4c9b3ced2');
                setData(popres.data.results);
                console.log("Perosn", popres.data.results);
            } catch (error) {
                console.log('Xatolik bor:', error);
            }
        };
        popfetch();
    }, []);

    return (
        <div className='w-[1400px] px-[40px] mx-[auto] my-0 mt-[40px]'>
            <h1 className='font-[700] text-[25px]'>Popular People</h1>
            <div className='grid grid-cols-4 mt-[30px]'>
                {data.map(poppeop => (
                    <Link to={`/person/${poppeop.id}`} key={poppeop.id}>
                        <div key={poppeop.id} className='overflow-hidden w-[313.4px] h-[380px] rounded-[8px] border-[1px] border-[#0000007b] shadow-lg mb-[30px]'>
                            <div>
                                <img
                                    className='w-[313.4px] h-[315px] rounded-[8px]'
                                    src={`${baseURL}${poppeop.profile_path}`}
                                    alt={poppeop.name}
                                />
                            </div>
                            <div className=' mt-[5px] ml-[10px]'>
                                <h1 className='font-[600] text-[17px]'>
                                    {poppeop.name}
                                </h1>
                                <p className='font-[400] text-[#00000079]'>
                                    {poppeop.known_for_department}
                                </p>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopPeople;

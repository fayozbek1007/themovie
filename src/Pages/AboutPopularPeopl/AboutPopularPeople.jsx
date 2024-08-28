import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutPopularPeople = () => {
    const { id } = useParams();
    const [popmovie, setPopmovie] = useState(null);
    const [socialLinks, setSocialLinks] = useState({});
    const [knownFor, setKnownFor] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchpop = async () => {
            try {
                const respop = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=eafe1f3a13d089d87f149cb4c9b3ced2`);
                const resSocial = await axios.get(`https://api.themoviedb.org/3/person/${id}/external_ids?api_key=eafe1f3a13d089d87f149cb4c9b3ced2`);
                const resKnownFor = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=eafe1f3a13d089d87f149cb4c9b3ced2`);

                setSocialLinks(resSocial.data);
                setPopmovie(respop.data);
                setKnownFor(resKnownFor.data.cast);
                console.log("Fetched person data:", respop.data);
            } catch (error) {
                console.log('Xatolik bor:', error);
            }
        };
        fetchpop();
    }, [id]);

    if (!popmovie) return <div>Yuklanmoqda...</div>;

    return (
        <div>
            <div className='mt-[30px] relative w-[100%] py-[30px] px-[40px] mb-[20px] h-[1300px]'>
                <div className='relative z-10'>
                    <div className='w-[1400px] h-[570px] mx-[auto] my-0 px-[40px] py-0 flex'>
                        <div>
                            <img
                                className='w-[300px] h-[450px] rounded-lg'
                                src={`${baseURL}${popmovie.profile_path}`}
                                alt={popmovie.name}
                            />
                            <div className='flex w-[300px] gap-[20px] mt-[20px] ml-[20px]'>
                                <Link to={`https://www.instagram.com/${socialLinks.instagram_id}`}>
                                    <FaInstagramSquare style={{ width: '30px', height: '30px' }} />
                                </Link>
                                <Link to={`https://twitter.com/${socialLinks.twitter_id}`}>
                                    <FaTwitter style={{ width: '30px', height: '30px' }} />
                                </Link>
                                <Link to={`https://www.facebook.com/${socialLinks.facebook_id}`}>
                                    <FaFacebook style={{ width: '30px', height: '30px' }} />
                                </Link>
                                <Link to={`https://www.imdb.com/name/${socialLinks.imdb_id}`}>
                                    <FaYoutube style={{ width: '30px', height: '30px' }} />
                                </Link>
                            </div>
                            <div className='mt-[20px] pl-[20px] '>
                                <h1 className='font-[600] text-[23px]'>Personal Info</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='font-[500] text-[19px]'>
                                        Known For
                                    </h1>
                                    <p className='font-[400] text-[16px] text-[#0000007e]'>{popmovie.known_for_department}</p>
                                </div>
                                <div className='mt-[10px]'>
                                    <h1 className='font-[500] text-[19px]'>
                                        Known Credits
                                    </h1>
                                    <p className='font-[400] text-[16px] text-[#0000007e]'>{popmovie.id}</p>
                                </div>
                                <div className='mt-[10px]'>
                                    <h1 className='font-[500] text-[19px]'>
                                        Gender
                                    </h1>
                                    <p className='font-[400] text-[16px] text-[#0000007e]'>Female</p>
                                </div>
                                <div className='mt-[10px]'>
                                    <h1 className='font-[500] text-[19px]'>
                                        Birthday
                                    </h1>
                                    <p className='font-[400] text-[16px] text-[#0000007e]'>{popmovie.birthday}</p>
                                </div>
                                <div
                                >
                                    {
                                        popmovie.also_known_as.map(res => {
                                            return (
                                                <div className='mt-[5px]'>
                                                    <h1 className='text-[16px] font-[500]'>{res}</h1>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-[1020px] h-[510px] pl-[40px]'>
                            <div>
                                <h1 className='text-[28px] font-[600]'>
                                    {popmovie.name}
                                </h1>
                            </div>
                            <div className='mt-[20px]'>
                                <p className='mt-[20px] font-[600] text-[20px] text-stone-500'>Biography</p>
                                <p className='text-stone-500 text-[17px] font-[500]'>{popmovie.biography}</p>
                            </div>
                            <div className='mt-[20px]'>
                                <p className='font-[600] text-[20px] text-stone-300 mb-[30px]'>Known For</p>
                                <div className=' overflow-x-auto whitespace-nowrap gap-[20px] snap-x-[30px] w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent flex'>
                                    {knownFor && knownFor.map((work, index) => (
                                        <Link key={index} to={`/movie/${work.id}`}>
                                            <div key={index} className=' w-[180px] border-[1px] border-[#00000064] p-[5px] rounded-[10px]'>
                                                <img
                                                    className='w-[180px] h-[200px] rounded-lg mb-2'
                                                    src={`${baseURL}${work.poster_path}`}
                                                    alt={work.title || work.name}
                                                />
                                                <div className='w-[160px] overflow-hidden'>
                                                    <h2 className='font-[600] text-[17px]'>
                                                        {work.title || work.name}
                                                    </h2>
                                                    <p className='text-stone-600'>
                                                        {work.release_date || work.first_air_date}
                                                    </p>
                                                    <p className='text-stone-600'>
                                                        {work.character ? `Character: ${work.character}` : ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPopularPeople;

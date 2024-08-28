import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { navbarmenu } from '../../Js/navbarmenu';

const Navbar = () => {
    const { t, i18n } = useTranslation(); 
    const [showLanguages, setShowLanguages] = useState(false); 

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    return (
        <div className='w-[100%] flex bg-[rgb(3,37,65)] my-0 mx-[auto] h-[64px]'>
            <div className='z-[12] flex w-[1300px] my-0 mx-[auto]  px-[35px] justify-between items-center'>
                <div className='flex gap-5 items-center mx-top w-[485.41px]'>
                    <Link to="/">
                        <img className='w-[154px] h-[20px]' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDb Logo" />
                    </Link>
                    <div>
                        <ul className="flex list-none p-0 m-0">
                            {navbarmenu.map((menu) => (
                                <li key={menu.id} className="gap-[10px] relative group mr-5 ">
                                    <a href="#" className="pl-[5px] block text-white">
                                        {t(menu.title)}
                                    </a>
                                    {menu.dashint && menu.dashint.length > 0 && (
                                        <ul className="absolute left-0 mt-[0] hidden w-40 rounded-[10px] bg-white shadow-lg group-hover:block overflow-hidden">
                                            {menu.dashint.map((dash) => (
                                                <li key={dash.id}>
                                                    <Link
                                                        to={`/${dash.dashtitle.toLowerCase().replace(/\s/g, '-')}`}
                                                        className="block px-4 py-2 text-black hover:bg-gray-200"
                                                    >
                                                        {t(dash.dashtitle)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex items-center w-[310.85px] h-[40px] gap-[35px]'>
                    <p className='text-white box-border text-[32.4px] font-[900]'>+</p>
                    <div className="relative">
                        <button
                            className='bg-none border-white border-[1px] py-[2px] px-[5px] rounded-[5px] hover:bg-white text-[16px] text-white font-[600] hover:text-[rgb(3,37,65)]'
                            onClick={() => setShowLanguages(!showLanguages)} 
                        >
                            {i18n.language.toUpperCase()}
                        </button>
                        {showLanguages && (
                            <ul className="absolute right-0 mt-2 w-[80px] bg-white rounded-md shadow-lg text-black">
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('en')}>EN</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('uz')}>UZ</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('fr')}>FR</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('ru')}>RU</li>
                            </ul>
                        )}
                    </div>
                    <p className='font-[600] text-[16px] text-white'>
                        <Link to="#">
                            <img className='w-[25px]' src="./Navbarimg/notification .svg" alt="Notification" />
                        </Link>
                    </p>
                    <p className='bg-[#171780] rounded-[50%] text-white px-[15px] text-[16px] py-[7px]'>
                        <Link to="#">F</Link>
                    </p>
                    <Link className='' to="#">
                        <img className='w-[25.11px] h-[25.11px]' src="./Navbarimg/icons8-search (1).svg" alt="Search" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

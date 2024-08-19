import React from 'react';
import { Link } from 'react-router-dom';
import { navbarmenu } from '../../Js/navbarmenu';

const Navbar = () => {
    return (
        <div className='w-[1440px] flex bg-[rgb(3,37,65)] my-0 mx-[auto] h-[64px]'>
            <div className='flex w-[1300px] my-0 mx-[auto]  px-[35px] justify-between items-center'>
                <div className='flex gap-5 items-center  mx-top w-[485.41px]'>
                    <img className='w-[154px] h-[20px]' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                    <div>
                        <ul className="flex list-none p-0 m-0">
                            {navbarmenu.map((menu) => (
                                <li key={menu.id} className="gap-[10px] relative group mr-5 ">
                                    <a href="#" className="pl-[5px] block  text-[white]">
                                        {menu.title}
                                    </a>
                                    {menu.dashint && menu.dashint.length > 0 && (
                                        <ul className="absolute left-0 mt-[0] hidden w-40 rounded-[10px] bg-white shadow-lg group-hover:block">
                                            {menu.dashint.map((dash) => (
                                                <li key={dash.id}>
                                                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
                                                        {dash.dashtitle}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex items-center w-[310.85] h-[40px] gap-[35px]'>
                    <p className='text-[white] box-border text-[32.4px] font-[900]'>+</p>
                    <div className=" w-[25px] h-[26px] bg-[none]">
                        <form className='bg-[none]'>
                            <select name="language" id="language">
                                <option value="en">EN</option>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                            </select>
                        </form>
                    </div>
                    <p className='font-[600] text-[16px] text-[white]'><Link href="#"><img className='w-[25px]' src="./Navbarimg/notification .svg" alt="" /></Link></p> 
                    <p className=' bg-[#171780] rounded-[50%] text-[white] px-[15px] text-[16px] py-[7px]'><Link href="#">F</Link></p>
                    <Link className='' href="#"><img className=' w-[25.11px] h-[25.11px]' src="./Navbarimg/icons8-search (1).svg " alt="" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


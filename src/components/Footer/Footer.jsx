import React from 'react';

const Footer = () => {
    return (
        <div className='w-[100%] h-[324.2px] bg-[rgb(3,37,65)]'>
            <div className='flex w-[857.8px] h-[307.4px] py-[80px] my-[0] mx-[auto] gap-[44px]'>
                <div>
                    <img className='w-[130px] h-[93.71px] mt-[-35px] ml-[85px]' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                    <button className='ml-[-2px] mt-[47px] py-[11px] px-[17.5px] bg-[rgb(255,255,255)] rounded-[6px] text-[rgb(1,180,228)] font-[700] text-[16.72px]'>
                    JOIN THE COMMUNITY
                    </button>
                </div>
                <div className='text-[white] ml-[-5px]'>
                    <h4 className='font-[700] text-[18px]'>THE BASICS</h4>
                    <ul>
                        <li className='font-[400] text-[15.28px] mt-[1px]'>About TMDB</li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'>Contact Us</li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'>Support Forums</li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'>API</li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'>System Status</li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700]'>GET INVOLVED</h4>
                    <ul>
                        <li> Contributio</li>
                        <li>Add Ne</li>
                        <li>Add New </li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700] text-[18px]'>Community</h4>
                    <ul>
                        <li>Gui</li>
                        <li>Disc</li>
                        <li>Lead</li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700] text-[18px]'>Legal</h4>
                    <ul>
                        <li>Terms</li>
                        <li>API Terms</li>
                        <li>Privacy</li>
                        <li>DMCA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

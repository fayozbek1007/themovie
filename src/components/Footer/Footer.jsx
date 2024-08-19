import React from 'react';

const Footer = () => {
    return (
        <div className='h-[324.2px] bg-[rgb(3,37,65)]'>
            <div className='flex w-[857.8px] h-[307.4px] py-[80px] my-[0] mx-[auto] gap-[44px]'>
                <div>
                    <img className='w-[130px] h-[93.71px] mt-[-35px] ml-[85px]' src="./Navbarimg/footersvg.svg" alt="" />
                    <button className='ml-[-2px] mt-[47px] py-[11px] px-[17.5px] bg-[rgb(255,255,255)] rounded-[6px] text-[rgb(1,180,228)] font-[700] text-[16.72px]'>
                    JOIN THE COMMUNITY
                    </button>
                </div>
                <div className='text-[white] ml-[-5px]'>
                    <h4 className='font-[700] text-[18px]'>THE BASICS</h4>
                    <ul>
                        <li className='font-[400] text-[15.28px] mt-[1px]'><a href="#">About TMDB</a></li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'><a href="#">Contact Us</a></li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'><a href="#">Support Forums</a></li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'><a href="#">API</a></li>
                        <li className='font-[400] text-[15.28px] mt-[1px]'><a href="#">System Status</a></li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700]'>GET INVOLVED</h4>
                    <ul>
                        <li><a href="#"> Contribution Bible</a></li>
                        <li><a href="#">Add New Movie</a></li>
                        <li><a href="#">Add New TV Show</a></li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700] text-[18px]'>Community</h4>
                    <ul>
                        <li><a href="#">Guidelines</a></li>
                        <li><a href="#">Discussions</a></li>
                        <li><a href="#">Leaderboard</a></li>
                    </ul>
                </div>
                <div className='text-[white]'>
                    <h4 className='font-[700] text-[18px]'>Legal</h4>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">API Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">DMCA Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

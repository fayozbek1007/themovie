import React, { useRef } from 'react';

const Search = () => {

    const searchref = useRef()

    const hendeSearch = (e) => {
        e.preventDefault()
        console.log("working", searchref.current.value);
    }

    return (
        <div className='search-img w-[1300px] h-[300px] bg-slate-500 mx-[auto] my-0 mb-[20px] mt-[-30px]'>
            <div className='ml-[40px] pt-[30px]'>

                <div className='text-white'>
                    <h1 className='font-[700] text-[48px]'>Welcome.</h1>
                    <p className='text-[32px] font-[600]'>Millions of movies, TV shows and people to discover. Explore now.</p>
                </div>

                <form onSubmit={hendeSearch} className='mt-[35px] flex'>
                    <input ref={searchref} type="text" placeholder='Search for a movie,tv,show,person.....' className='focus:outline-none focus:border-transparent  px-[20px] py-[10px] w-[1100px] rounded-full border-[1px] bg-white text-neutral-500' />
                    <p className='px-[30px] py-[10px] rounded-full border-[1px] bg-emerald-500 border-emerald-500 ml-[-38px] w-[130px] font-[600] text-white text-center'>Search</p>
                </form>

            </div>
        </div>
    );
}

export default Search;

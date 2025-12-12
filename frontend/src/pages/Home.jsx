import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className=' text-black bg-cover bg-bottom bg-[url(https://i.pinimg.com/736x/d0/51/d2/d051d29d3e163761e467ed63d4ca842e.jpg)] h-screen pt-8  flex justify-between flex-col w-full '>
                <img className='w-16 ml-8 object-cover w-25 h-30 bg-none' src="https://img.icons8.com/?size=100&id=54113&format=png&color=000000" alt="img" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get Stareted with Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
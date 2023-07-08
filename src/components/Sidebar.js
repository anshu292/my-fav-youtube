import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//sidebar is subscribed to specific portion of our store and it updates 
const Sidebar = () => {
    const isMenuOpen=useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    //early return 
  return (
    <div className='p-10 shadow-lg w-48 '>
       <Link to="/" ><h1 className='font-bold'>
            Home
        </h1>
        </Link>
        <h1 >
            Shorts
        </h1>
        <ul>
            <li>
                Subscriptions
            </li>
            <l1>
                Library
            </l1>
            <li> 
                History
            </li>
            <li>
                Your Videos
            </li>
        </ul>
        <h1 className='font-bold pt-5'>
            Watch Later
        </h1>
        <ul>
            <li>
                Liked Videos
            </li>
            <l1>
                Trending
            </l1>
            <li> 
                Games
            </li>
            <li>
                Movies
            </li>
        </ul>
        <h1 className='font-bold pt-5'>
            Explore
        </h1>
        <ul>
            <li>
                Shopping
            </li>
            <l1>
                Music
            </l1>
            <li> 
                Movies
            </li>
            <li>
                Live
            </li>
        </ul>
        <h1 className='font-bold pt-5'>
            Gaming
        </h1>
        <ul>
            <li>
                News
            </li>
            <l1>
                Sports
            </l1>
            <li> 
                Learning
            </li>
            <li>
                Fashion & Beauty
            </li>
        </ul>
        <h1 className='font-bold pt-5'>
            Settings
        </h1>
        <ul>
            <li>
                Report History
            </li>
            <l1>
                Help
            </l1>
            <li> 
                Send Feedback
            </li>
            <li>
                Movies
            </li>
        </ul>
        <h1 className='font-bold pt-5'>
            More 
        </h1>
        <ul>
            <li>
                YouTube Premium
            </li>
            <l1>
                YouTube Studio
            </l1>
            <li> 
                YouTube Music
            </li>
            <li>
                YouTube Kids
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState ,useEffect} from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
const Head = () => {

    const [searchQuery,setSearchQuery]=useState("");
     const [suggestions,setSuggestions]=useState([]);
     //to read data from the cache we will subscribe to the cache

    const searchCache=useSelector(store=> store.search);

     const[showSuggestions,setShowSuggestions]=useState(true);
     const dispatch=useDispatch();
     useEffect(() => {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSuggestions();
        }
      }, 200);
      return () => clearTimeout(timer);
      // eslint-disable-next-line
    }, [searchQuery]);
  
    const getSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    };
  



    
    const toggleMenuHandler =() =>
    {
        dispatch(toggleMenu());

    };
 return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='cursor-pointer h-8' alt="image" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"/>
    
        <a href="/">
        <img className='h-8 mx-2' alt="yt-logo" src="https://cdn.worldvectorlogo.com/logos/youtube-2-1.svg "/>
        </a>
         </div>
        <div className='col-span-10 px-10'>

          <div>
       <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
       type="text"
       value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
       onFocus={()=> setShowSuggestions(true)}
       onBlur={()=> setShowSuggestions(false)}
       />
       <button className='border border-gray-400  bg-gray-100 px-5 py-2 rounded-r-full' >Search</button>
       </div>
   {showSuggestions && (<div className='absolute bg-white py-2 px-2 border border-gray-100 shadow-lg rounded-lg w-[37rem]'>
      <ul>
        {suggestions.map(s=><li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)}
        
        {/* <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>IPhone</li>
        <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>IPhone</li>
        <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>IPhone</li>
        <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>IPhone</li> */}
      </ul>
    </div>
)}


        </div>
        <div className='col-span-1'>
        <img className='h-8 ' alt="user" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="/>
        </div>
        </div>
        
  )
}

export default Head
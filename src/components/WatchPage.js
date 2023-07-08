import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const[searchParams]=useSearchParams();

    // console.log(searchParams.get("v"));
    
 const dispatch=useDispatch();

    useEffect(()=>{
 dispatch(closeMenu());
},);

  return (
    <div className='flex flex-col'>
    <div className='px-5'>
        <iframe width="1000" 
        height="600" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&autoplay=1"} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
    <div>
      <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchPage
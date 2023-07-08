import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;


  return (
    <div className='p-3 m-5 w-72 shadow-lg'>
        <img  className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <l1>{channelTitle}</l1>
            <li>{statistics.viewCount} views</li>

        </ul>


    </div>
  )
}

export default VideoCard
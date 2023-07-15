import React, { useRef, useState } from 'react'
import "../Style/Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({url,channel,description,song,likes,messages,shares}) {
    const [play,setPlay]=useState(false)
    const videoRef=useRef(null);
    const onVideoPress=()=>{
        if(play){
            videoRef.current.pause();
            setPlay(false)
        }else{
            videoRef.current.play();
            setPlay(true)
        }
    }
  return (
    <div className='video'> 
      <video className='adjust' loop ref={videoRef} onClick={onVideoPress} >

            <source src={url} />
        </video>
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video

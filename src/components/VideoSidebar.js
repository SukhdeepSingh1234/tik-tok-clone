import React, { useState } from 'react'
import "../Style/VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoSidebar({likes,messages,shares}) {
    const [liked,setLinked]=useState(false)

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_button'>
            {liked?(
            <FavoriteIcon fontSize='large' onClick={(e)=>{setLinked(false)}} />)
            :(<FavoriteBorderIcon fontSize='large' onClick={(e)=>{setLinked(true)}} />
            )}
            <p>{liked?likes+1:likes}</p>
        </div>
        <div className='videoSidebar_button'>
            <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar_button'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar

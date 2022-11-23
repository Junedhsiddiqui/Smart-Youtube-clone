import React from "react";
import { useHistory } from "react-router-dom"
import "./styles.css";

const VideoSmall = ({ channelView = false}) => {
  const history = useHistory();
  const handleClickRedirect=()=>history.push('/watch')
  return (
    <div  onClick={handleClickRedirect} className={'videoSmall ${channelView && "videoSmall__channelView"}'}>
         <div  className="videoSmall__left">
            <img
             src="https://i.ytimg.com/vi/ftBTLb7q2k0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtDDCZNukyUgfNwowDBJQkO0EN4Q" 
            alt="thumbnail" 
            className={'videoSmall__thumbmail ${channelView && "videoSmall__channelView__img"}'}
            />
             </div>
             
            <div className="videoSmall__right">
                <p className="videoSmall__title">
                    Placement video's new series
                </p>

                <div className="videoSmall__texts videothumb__texts">
                  {!channelView && (
                  <p className="videothumb__text">Placement IIT Video</p>
                  ) }
                     

                     <p className="videothumb__text">110k views  • 2 days ago</p>
                </div>
            </div>
        
    </div>
  )
}

export default VideoSmall

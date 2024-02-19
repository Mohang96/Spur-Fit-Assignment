import ReactPlayer from "react-player"

import './index.css'

function Video(){
    return (
        <div className='video-container'>
            <ReactPlayer
                url="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4"
                playing
            />
        </div>
        
    )
}

export default Video
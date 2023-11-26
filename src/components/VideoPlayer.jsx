import ReactPlayer from 'react-player';

const VIDEO_PATH = 'https://youtu.be/ixOd42SEUF0';

function VideoPlayer() {
   return (
      <div>
         <ReactPlayer url={VIDEO_PATH} />
      </div>
   )
}

export default VideoPlayer;
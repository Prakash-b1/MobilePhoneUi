import dummyVideo from '../../assets/3692634-hd_1920_1080_30fps.mp4'
const Video = () => {
  return (
    <div className="flex justify-center items-center">
      <video
        src={dummyVideo} 
        controls
        autoPlay
        loop 
        muted 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;

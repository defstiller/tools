import React, {useState, useEffect, useRef} from "react";
import classes from "./backgroundVideo.module.css";
function LandingPageVideo() {
	const [source, setSource] = useState();
	const videoRef = useRef();
	useEffect(() => {
		const width = window.innerWidth; // i did not use window resize context because i do not want otside factors to cause video to reload
		if(width >= 800) {
			setSource("https://s3.tebi.io/reacttest/mechanicFullHd.webm");
		} else {
			setSource("https://s3.tebi.io/reacttest/mechanicHd.webm");
		}
	}, []);
	function handleVideoPlay() {
		const video = videoRef.current;
		if(video.currentTime === 0) {
			video.play();
		}
		return;
	}
	if(source) {

		return(
			<video
				playsInline
				loop 
				muted 
				className={ classes.backgroundVid}
				width="100%" 
				height="100%"
				ref={videoRef}
				onCanPlayThrough={() => handleVideoPlay()}
				poster={require("./mechanic_Moment.webp")}

			>
				<source 
					src={source}
					type="video/webm"
				/>
				Your browser does not support the video tag.
			</video>
		);
	}
	return null;
}

export default LandingPageVideo;
import video from "../../assets/new-home-video.mp4"

export default function Video() {
    return (
        <div class="videoFile">
            <video playsInline autoPlay muted src={video} type="video/mp4"></video>
        </div>
    );
}
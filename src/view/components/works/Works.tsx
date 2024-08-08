import { useEffect, useState } from "react";
import TitleLabel from "../titlelabel/Titlelabe";

import style from "./Works.module.scss";
import fetchVideoData from "../../../../../services/projects_youtube_services";
import AOS from "aos";
import "aos/dist/aos.css";
import CardVideo from "../card_video/CardVideo";

// Define a interface para os dados dos vídeos
interface VideoData {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoId: string; // Adicionei videoId à interface
}

const Works = () => {
  const [videos, setVideos] = useState<VideoData[]>([]); // Adicionei o tipo para o estado

  useEffect(() => {
    AOS.init();

    // Função para buscar e definir dados dos vídeos
    const loadVideos = async () => {
      const videoData = await fetchVideoData();
      setVideos(videoData);
    };

    loadVideos();
  }, []);

  return (
    <div className={style.works_conatainer} id="work">
      <TitleLabel text={"Projetos"} />

      <div className="container">
        <div className={style.works_body}>
          {videos.map((video, index) => (
            <CardVideo
              key={index}
              title={video.title}
              description={video.description}
              thumb={video.thumbnailUrl}
              videourl={"https://www.youtube.com/watch?v=" + video.videoId}
            />
            // <div key={index} className={style.video_item}>
            //     <h2 className={style.video_title}>{video.title}</h2>
            //     <img className={style.video_thumbnail} src={video.thumbnailUrl} alt={video.title} />
            //     <p className={style.video_description}>{video.description}</p>
            //     <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
            //         Watch on YouTube
            //     </a>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

// RandomTrack.tsx
import React, { useState, useEffect } from "react";
import { getRandomTrackFromPlaylist } from "../../../services/spotisy_api_services";
import style from "./style.module.scss";
const playlistId = "1YIe34rcmLjCYpY9wJoM2p";
import { FaSpotify } from "react-icons/fa";

const RandomTrack: React.FC = () => {
  const [track, setTrack] = useState<{
    title: string;
    artist: string;
    image: string | undefined;
  } | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const randomTrack = await getRandomTrackFromPlaylist(playlistId);
      setTrack(randomTrack);
    };

    fetchTrack();
  }, []);

  return (
    <div className={style.container}>
      {track ? (
        <div className={style.card_container}>
          <div className={style.card_container_img}>
            <img src={track.image} alt={`${track.title} album cover`} />
          </div>
          <div className={style.card_container_info}>
            <div className={style.card_container_info_body_1}>
              <h2>{track.title}</h2>
              <p>{track.artist}</p>
            </div>
            <div className={style.card_container_info_body_2}>
             Ouvindo.. <FaSpotify />
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default RandomTrack;

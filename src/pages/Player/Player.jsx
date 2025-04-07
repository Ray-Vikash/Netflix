import React, { use, useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
 const navigator = useNavigate();
  const [video, setVideo] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE0NjE5MjU3NjYzN2UzMzhiOTlkNjc2NzYyM2JmOSIsIm5iZiI6MTY4OTYwMDU3Mi41NzMsInN1YiI6IjY0YjU0MjNjNzg1NzBlMDExZGFhMmFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vGyy7sMM5KNuVeb3Ylj_cfCWHhe0KDf5EsPWUQDGh4M'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const data = await response.json();
        setVideo(data.results[0]);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="player">
      <img src={back_arrow} alt="back_arrow" onClick={()=> navigator(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${video.key}`}
        frameborder="0"
        title="trailer"
      ></iframe>
      <div className="player-info">
        <p>Published Date: {video.published_at.slice(0, 10)}</p>
        <p>{video.name}</p>
        <p>{video.type}</p>
      </div>
    </div>
  );
};

export default Player;

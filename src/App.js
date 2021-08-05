import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url =
    "https://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio";
  const [play, setPlay] = useState("");
  const [previousList, setPreviousList] = useState();

  const getData = async () => {
    return axios
      .get(url)
      .then((res) => {
        // console.log(res.data.station);
        return res.data.station;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData().then(({ listen_url }) => {
      setPlay(listen_url);
    });
  }, []);

  return (
    <div className="App">
      <audio src={play} preload="true" controls={true}></audio>
    </div>
  );
}

export default App;

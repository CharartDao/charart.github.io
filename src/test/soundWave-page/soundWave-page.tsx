import React, { useEffect } from 'react';
import layout from '../../components/layout';
import Wave from '../../components/Wave';

const WavePage: React.FC = () => {
  useEffect(() => {
    //let canvas = document.querySelector("canvas");
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    //let audio = document.querySelector("audio"); // document.getElementsByTagName("audio")[0];
    let audio = new Audio("./audio.mp3"); // document.getElementsByTagName("audio")[0];
    let wave = new Wave(audio!, canvas!);
    //canvas!.height = window.innerHeight - 30;
    //canvas!.width = window.innerWidth - 30;
  
    wave.addAnimation(new wave.animations.Cubes());
  }, [])

  return (
    <div className="soundWave">
    <h1> Sound Wave </h1>
    <canvas height="200" width="200" ></canvas>
    <audio src={require('./audio.mp3')} ></audio>
    <audio controls >
      <source src={require('./audio.mp3')} type="audio/mpeg"></source>
      Your browser does not support the audio element.
    </audio>
    </div>
  );
};

export default layout(WavePage)({ pageName: 'Wave' });


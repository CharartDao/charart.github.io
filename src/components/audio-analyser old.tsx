import React, { Component } from 'react';

type Props = {
audio: MediaStream
};
    
type State = {
    audioData: Uint8Array
};

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
    mozAudioContext: typeof AudioContext
  }
}

export class AudioAnalyser extends React.PureComponent<Props, State> {
  audioContext!: AudioContext;
  analyser!: AnalyserNode;
  dataArray!: Uint8Array;
  source!: MediaStreamAudioSourceNode;
  rafId!: number;
  canvas!: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.canvas = React.createRef();
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.webkitAudioContext || window.AudioContext || window.mozAudioContext)();
    console.log("audio context", this.audioContext);

    // the AudioContext is the primary 'container' for all your audio node objects
    if(!this.audioContext) {
      try {
          this.audioContext = new AudioContext();
      } catch(e) {
          alert('Web Audio API is not supported in this browser');
      }
    }
  
    this.analyser = this.audioContext.createAnalyser();
    console.log("data analyser", this.analyser);
    console.log("data analyser.frequencyBinCount", this.analyser.frequencyBinCount);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    console.log("data array", this.dataArray);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    console.log("this.props.audio", this.props.audio);
    this.source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray!);
    this.setState({ audioData: this.dataArray });
    console.log("audioData", this.state.audioData);
    const canvas = this.canvas.current;
    const height = canvas!.height;
    const width = canvas!.width;
    const context = canvas!.getContext('2d');
    let x = 0;
    //let space = width / this.state.audioData.length;
    const sliceWidth = (width * 1.0) / this.state.audioData.length;

    context!.lineWidth = 2;
    context!.strokeStyle = '#000000';
    context!.clearRect(0, 0, width, height);

    context!.beginPath();
    context!.moveTo(0, height / 2);
    this.state.audioData.forEach(item => {
        const y = (item / 255.0) * height;
        context!.lineTo(x, y);
        //context!.moveTo(space*item,height); //x,y
        //context!.lineTo(space*item,height-value); //x,y
        x += sliceWidth;
    });
    context!.lineTo(x, height / 2);
    context!.stroke();
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return <canvas width="300" height="300" ref={this.canvas} />;
  }
}

export default AudioAnalyser;
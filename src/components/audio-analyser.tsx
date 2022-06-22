import React, { Component } from 'react';
import AudioVisualiser from './audio-visualiser';

type Props = {
audio: MediaStream
};
    
type State = {
    audioData: Uint8Array
};

declare const window: any;

export class AudioAnalyser extends React.PureComponent<Props, State> {
  audioContext!: AudioContext;
  analyser!: AnalyserNode;
  dataArray!: Uint8Array;
  source!: MediaStreamAudioSourceNode;
  rafId!: number;

  constructor(props: Props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    console.log("audio context", this.audioContext);
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray!);
    this.setState({ audioData: this.dataArray });
    console.log("audioData", this.state.audioData);
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return <AudioVisualiser  audioData={this.state.audioData}/>;
  }
}

export default AudioAnalyser;


import React, { Component } from 'react';
import AudioAnalyser from './audio-analyser';

export type PageProps = {
    onAudioError?: (e: any) => void;
};

type State = {
  audioElement: MediaStream  | null
    };

class MicrophoneInput extends Component <PageProps, State>{
  constructor(props: PageProps) {
    super(props);
    this.state = {
      audioElement: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    try {
    const audioElement = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audioElement });         
    console.log("audioElement", audioElement);
    } catch (err) {
      if (console) {
        //TODO: handle the OverconstrainedError {message: "Invalid constraint", constraint: "", name: "OverconstrainedError"} to inform user to let use microphone.
        console.error(err)
      }
    }   
  }

  stopMicrophone() {
    this.state.audioElement!.getTracks().forEach(track => track.stop());
    this.setState({ audioElement: null });
  }

  toggleMicrophone() {
    if (this.state.audioElement) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className="sound-wave">
        <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audioElement ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div>
        {this.state.audioElement ? <AudioAnalyser audio={this.state.audioElement} /> : ''}
      </div>
    );
  }
}

export default MicrophoneInput;
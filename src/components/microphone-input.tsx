import React, { Component } from 'react';
import AudioAnalyser from './audio-analyser';

export type PageProps = {
    onAudioError?: (e: any) => void;
};

type State = {
     audio: MediaStream  | null
    };

class MicrophoneInput extends Component <PageProps, State>{
  constructor(props: PageProps) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    try {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });         
    } catch (err) {
      if (console) {
        //TODO: handle the OverconstrainedError {message: "Invalid constraint", constraint: "", name: "OverconstrainedError"} to inform user to let use microphone.
        console.error(err)
      }
    }   
  }


  stopMicrophone() {
    this.state.audio!.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
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
            {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div>
        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
      </div>
    );
  }
}

export default MicrophoneInput;

function stopMicrophone() {
  throw new Error('Function not implemented.');
}


function toggleMicrophone() {
  throw new Error('Function not implemented.');
}


function render() {
  throw new Error('Function not implemented.');
}

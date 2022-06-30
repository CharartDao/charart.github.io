import React, { Component } from 'react';
import AudioAnalyser from './audio-analyser';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { Grid, Typography } from '@mui/material';


export type PageProps = {
    onAudioError?: (e: any) => void;
};

type State = {
  audioElement: MediaStream  | null;
  microPhone: boolean;
};

class MicrophoneInput extends Component <PageProps, State>{
  constructor(props: PageProps) {
    super(props);
    this.state = {
      audioElement: null,
      microPhone: false
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    const audioElement = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audioElement });       
    this.setState({ microPhone: true });         
    console.log("audioElement", audioElement);
  }

  stopMicrophone() {
    this.state.audioElement!.getTracks().forEach(track => {track.stop(); console.log(track);});
    //this.setState({ audioElement: null });
    this.setState({ microPhone: false });         
  }

  toggleMicrophone() {
    if (this.state.microPhone) {
      this.stopMicrophone();
    } else {
      this.setState({ audioElement: null });
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className="sound-wave">
        <div className="controls">
          <Grid
            xs={12}
            item
            className="menu-item"
            onClick={
              this.toggleMicrophone
            }>            
            {this.state.microPhone ? 
            <StopCircleIcon className="icon" fontSize="large" color="action"/> : 
            <PlayCircleFilledWhiteIcon className="icon" fontSize="large" color="action"/>
            }
          </Grid>
        </div>
        {this.state.audioElement ? <AudioAnalyser audio={this.state.audioElement} /> : ''}
      </div>
    );
  }
}

export default MicrophoneInput;
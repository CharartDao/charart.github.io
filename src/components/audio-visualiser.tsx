import React, { Component } from 'react';

export type Props =  {
    audioData: Uint8Array
    };

class AudioVisualiser extends Component <Props> {
    canvas: React.RefObject<HTMLCanvasElement>;
   
    constructor(props: Props) {
        super(props);
        this.canvas = React.createRef();
    }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData } = this.props;
    console.log("audioData2:", audioData)
    const canvas = this.canvas.current;
    const height = canvas!.height;
    const width = canvas!.width;
    const context = canvas!.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;

    context!.lineWidth = 2;
    context!.strokeStyle = '#000000';
    context!.clearRect(0, 0, width, height);

    context!.beginPath();
    context!.moveTo(0, height / 2);
    audioData.forEach(item => {
        const y = (item / 255.0) * height;
        context!.lineTo(x, y);
        x += sliceWidth;
    });
    context!.lineTo(x, height / 2);
    context!.stroke();
  }

  render() {
    return <canvas width="300" height="300" ref={this.canvas} />;
  }
}

export default AudioVisualiser;
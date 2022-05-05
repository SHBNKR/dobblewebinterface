import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

import * as cocossd from "@tensorflow-models/coco-ssd";

import Webcam from "react-webcam";
import "./Play.css";

function Play() {

 const webcamRef = useRef(null);
 const canvasRef = useRef(null);

   // Main function
const runCoco = async () => {
     // 3. TODO - Load network 
     // e.g. const net = await cocossd.load();
     const net = await cocossd.load();

    
//     //  Loop and detect hands
 setInterval(() => {
    detect(net);
    }, 10);
  };

  const drawRect = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
  
      // Set styling
      const color = Math.floor(Math.random()*16777215).toString(16);
      ctx.strokeStyle = '#' + color
      ctx.font = '18px Arial';
  
      // Draw rectangles and text
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();
    });
};

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);
      const obj = await net.detect(video);
      console.log(obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
        drawRect(obj, ctx);
    }
  };

  useEffect(()=>{runCoco()},[]);

    return(
        <section>
 
        <div class="scoreboard">
		    <div class="scoreboard__name scoreboard__name--one">AI</div>
            <div class="scoreboard__name scoreboard__name">vs.</div>
			<div class="scoreboard__name scoreboard__name--two">Player</div>
				<div class="scoreboard__score" >0</div>
				<div class="scoreboard__score"></div>
                <div class="scoreboard__score" >0</div> 
		</div>

         <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />  

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        /> 
        <br></br>  
            <section className="title">
                <h5>PLAY</h5>
            </section> 

    </section>
    )
}

export default Play;
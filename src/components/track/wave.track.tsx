'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveTrack = () => {
    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        // console.log("WaveTrack started on ", containerRef.current);
        // const element = document.getElementById("tracking");
        if(containerRef.current){
            const wavesurfer = WaveSurfer.create({
                // container: document.getElementById("tracking")!,  // dấu chấm than cho biết rằng là không bao giờ biến này là null được
                container: containerRef.current,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: `/api?audio=${fileName}`,
              })
        }
    },[]);


    return (
        <div ref={containerRef}>WaveTrack 11111</div>
    )
}

export default WaveTrack;
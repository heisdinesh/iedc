import React from 'react'
import {start1, start2, start3,start4, start5,start6,start7} from "../assets"

const Youtube = () => {
    let stages=[
        {img:start1},
        {img:start2},
        {img:start3},
        {img:start4},
        {img:start5},
        {img:start6},
        {img:start7},
        
    ]
  return (
    <div className="pt-28 bg-graay h-screen md:px-10 px-7 ">
        <div className="flex items-center justify-center flex-col gap-8">
            <p className="flex items-center justify-center md:text-4xl text-2xl font-semibold text-center">
            Build your Startup with us
            </p>
            <div className="w-max-md">
            <iframe
            width="756"
            height="423"
            src="https://www.youtube.com/embed/OjGcnUVP73Q"
            title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded"></iframe>
            </div>
            <div className="flex gap-16">
                {
                    stages.map((stage)=>(
                        <img className="w-12" src={stage.img} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Youtube
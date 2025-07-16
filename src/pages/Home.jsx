import React from "react";
import videoFile from "/src/assets/video.mp4";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center font-Poiret">
        <p className="text-3xl font-semibold mb-3">HOME OF THE BEST</p>
        <p className="font-Edu font-bold text-3xl text-itacate-rosa">
          Chilaquiles in the RGV.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 p-6">
        {/* Left column (empty) */}
        <div className="flex justify-center"></div>

        <div className="flex flex-col justify-center m-3">
          <p className="text-lg font-semibold mb-3 font-Poiret">
            Las Pupusas del Itacate, now known as EL ITACATE, is a fast-casual
            Mexican restaurant with three locations in the RGV: Pharr, McAllen,
            and our newest in Mission, TX. Originally established in Reynosa,
            Mexico in 1995, our concept was founded on the principles of
            offering people homemade tasty meals with a twist.
          </p>
          {/* <img
            src="./src/assets/pupusas stack.avif"
            alt="Chilaquiles 1"
            className="max-w-full h-auto rounded shadow-lg p-1"
          /> */}
        </div>
        <div className="flex justify-center py-6 m-3">
          <img
            src="./src/assets/chilaquiles 1.avif"
            alt="Chilaquiles 1"
            className="max-w-full h-auto rounded shadow-lg"
          />
        </div>

        {/* Right column (empty) */}
        <div className="flex justify-center"></div>
      </div>

      <div className="flex flex-col items-center font-Poiret mb-7">
        <p className="text-3xl font-semibold mb-3">COCINA ARTESANAL</p>
        <p className="font-Edu font-bold text-3xl text-itacate-rosa">
          Made with Love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 m-3">
        {/* Left column (empty) */}
        <div className="flex justify-center"></div>

        <div className="flex justify-center">
          <img
            src="./src/assets/chilaquiles 2.avif"
            alt="Chilaquiles 1"
            className="max-w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="flex justify-center py-6">
          <p className="text-lg font-semibold mb-3 font-Poiret p-7">
            We use 100% natural ingredients in every item on our menu and
            everything is made from scratch in our kitchen.
          </p>
        </div>

        {/* Right column (empty) */}
        <div className="flex justify-center"></div>
      </div>

      {/* Video container */}
      <div className="flex justify-center w-full my-10">
        <video controls className="flex w-full max-w-md rounded-lg shadow-lg">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

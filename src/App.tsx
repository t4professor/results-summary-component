import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center ">
      <div className="flex mobile:flex-row flex-col mobile:h-[375px] mobile:w-[550px] h-full w-full mobile:rounded-3xl shadow-2xl">
        <div className="bg-gradient-to-b from-slate-blue-light to-cobalt-blue-default mobile:w-1/2 mobile:rounded-3xl rounded-b-3xl flex flex-col mobile:justify-between gap-5 items-center text-center text-white p-8">
          <h3 className="text-pale-blue">Your Result</h3>
          <div className="h-32 w-32 flex flex-col justify-center gap-2 items-center rounded-full bg-gradient-to-b from-violet-blue">
            <span className="text-5xl">76</span>
            <span className="text-gray-400 text-sm">of 100</span>
          </div>
          <div className="text-xl">Great</div>
          <p className="text-sm text-gray-400 mobile:px-0 px-8">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="mobile:w-1/2 p-8 flex flex-col mobile:justify-between gap-5">
          <h3 className="font-bold">Summary</h3>
          <ul className="text-sm flex flex-col mobile:gap-2 gap-4">
            <li className="flex flex-row items-center bg-red-light rounded-lg mobile:p-[10px] p-4">
              <img
                src="images/icon-reaction.svg"
                alt="Reaction"
                className="h-4 w-4"
              />
              <span className="pl-2 text-red-default">Reaction</span>
              <div className="ml-auto">
                <span className="text-black font-bold">80</span>
                <span className="text-gray-500"> / 100</span>
              </div>
            </li>
            <li className="flex flex-row items-center bg-orangey-yellow-light rounded-lg mobile:p-[10px] p-4">
              <img
                src="images/icon-memory.svg"
                alt="Reaction"
                className="h-4 w-4"
              />
              <span className="pl-2 text-orangey-yellow-default">Memory</span>
              <div className="ml-auto">
                <span className="text-black font-bold">92</span>
                <span className="text-gray-500"> / 100</span>
              </div>
            </li>
            <li className="flex flex-row items-center bg-green-teal-light rounded-lg mobile:p-[10px] p-4">
              <img
                src="images/icon-verbal.svg"
                alt="Reaction"
                className="h-4 w-4"
              />
              <span className="pl-2 text-green-teal-default">Verbal</span>
              <div className="ml-auto">
                <span className="text-black font-bold">61</span>
                <span className="text-gray-500"> / 100</span>
              </div>
            </li>
            <li className="flex flex-row items-center bg-cobalt-blue-light rounded-lg mobile:p-[10px] p-4">
              <img
                src="images/icon-visual.svg"
                alt="Reaction"
                className="h-4 w-4"
              />
              <span className="pl-2 text-cobalt-blue-default">Visual</span>
              <div className="ml-auto">
                <span className="text-black font-bold">72</span>
                <span className="text-gray-500"> / 100</span>
              </div>
            </li>
          </ul>
          <button className="w-full bg-gray-blue-dark rounded-3xl p-3 text-white text-sm">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

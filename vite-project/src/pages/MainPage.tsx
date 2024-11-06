// import Backgrond from "../assets/bg.png";
import Navbar from "../components/Navbar";
import face from "../assets/face.png";
import instagram from "../assets/instagram.png";
import List from "../components/List";
import List2 from "../components/List2";
import List3 from "../components/List3";
import List4 from "../components/List4";
// import { useRef } from "react";

export default function MainPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-black"
        // style={{ backgroundImage: `url(${Backgrond})` }}
      />
      <div className="relative">
        <Navbar />
      </div>
      <div className="flex flex-row items-center justify-center gap-6 my-8">
        <div className="w-[300px] h-[600px] flex flex-col items-center gap-2 justify-center bg-white/15 rounded-xl z-50">
          <img
            src={face}
            className="scale-100 rounded-full w-[100px] h-[100px] mt-1"
          />
          <span className="flex text-white">박명수</span>
          <span className="flex text-white">여행 blog</span>
          <div className="flex flex-row justify-center">
            <img src={instagram} />
            <span className="flex items-center text-[12px] text-white">
              @parkmyeongsoou
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[850px] h-[600px] items-center gap-2 bg-white/15 rounded-xl z-50">
          <span className="flex items-center justify-start text-white/80 mt-10">
            유럽 구석구석
          </span>

          <div className="flex flex-col items-center w-[850px] h-full overflow-y-auto px-10">
            <div className="grid grid-cols-3 justify-items-center items-center w-[95%] h-[488.5px] overflow-y-auto">
              <List />
              <List2 />
              <List3 />
              <List2 />
              <List3 />
              <List />
              <List3 />
              <List />
              <List2 />
              <List2 />
              {/* <List/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

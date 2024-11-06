import travel from "../assets/travel.png";

export default function List() {
    return (
      <div
        // onClick={onClick}
        className="flex flex-row items-center w-[96.5%] min-h-[155px] max-h-[155px] shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] mx-[0.5%] hover:scale-[101.5%] cursor-pointer rounded-lg my-1"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="relative w-full max-h-[149px] overflow-hidden">
            <img
              src={travel}
              alt="profile"
              className=" flex justify-end rounded-sm items-end w-full h-[130px] overflow-hidden"
            />
            {/* {sex === 0 && <img src={male} alt="성별" className="absolute -bottom-1 -right-1"/>}
            {sex === 1 && <img src={female} alt="성별" className="absolute -bottom-3 -right-3" />} */}
          </div>
          <div className="flex items-center  justify-center text-white">하이</div>
        </div>
        {/* <div className="flex flex-row items-center justify-center w-[55%]">하이루</div> */}
      </div>
    );
  }
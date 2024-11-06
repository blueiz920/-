import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between w-screen h-20 px-16">
          <Link to="/">
            <img src={logo1} className="w-[100px] h-30" alt="Logo" />
          </Link>
          <div className="flex items-center gap-10 text-xl font-semibold text-white">
            {window.location.pathname === "/" && (
              <button className="hover:scale-105" >
                시작하기
              </button>
            )}
            {(
              <Link to="/login" className="hover:scale-105">
                로그인
              </Link>
            )}
    
            <Link to="/signup" className="hover:scale-105">
              회원가입
            </Link>
          </div>
        </div>
      );

}
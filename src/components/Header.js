import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
    return(
        <header className="h-[60px] bg-white border-b border-gray-300 ">
            <div className="container mx-auto flex items-center justify-between h-[60px]">
                <Link to="/">
                    <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
                </Link>
                <Search/>

            </div>
            
        </header>
    );
}
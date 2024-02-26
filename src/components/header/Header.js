import { useEffect, useState } from "react";

const Header = () => {
    const intrests = [' Gamer', ' Software Developer', ' Coder'];
    const [currentIntrestIndex, setCurrentIntrestIndex] = useState(0);
    useEffect(() => {
        let timerId = setInterval(() => {
            setCurrentIntrestIndex((prevIndex) => (prevIndex+1)%intrests.length)
        },1000);

        return () => clearInterval(timerId);
    },[])

    
    return (
        <div className="bg-[url('https://i.pinimg.com/originals/33/b9/f9/33b9f99c8570eed950b9fe0358a589fa.jpg')] h-[200px] text-white flex flex-col justify-center items-center">
            <ul className="flex list-none text-lg ">
                <li className="m-3 cursor-pointer"><a href='#about'>About</a></li>
                <li className="m-3 cursor-pointer"><a href='#skills'>Skills</a></li>
                <li className="m-3 cursor-pointer">Projects</li>
                <li className="m-3 cursor-pointer"><a href='#contact'>Contact Me</a></li>
            </ul>
            <div className="flex flex-col justify-center items-center">
                <div className="italic text-3xl">Md Asif Raza</div>
                <div>
                    <span>
                        I am a
                    </span>
                    <span id='intrest'>
                        <b>{intrests[currentIntrestIndex]}</b>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
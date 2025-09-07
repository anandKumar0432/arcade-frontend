
import { IconBox, IconChevronDown, IconMenu2, IconStack, IconTargetArrow, IconX } from "@tabler/icons-react";
import DropDown from "./DropDown";
import { useState } from "react";

type feauture = {
    title: string;
    description: string;
    icon?: React.ReactNode;
}[]

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const features : feauture = [
    { title: "Product Overview", description: "Effortlessly beautiful demos", icon: <IconStack size={16}/> },
    { title: "Lead Generation", description: "Drive demand and pipeline" , icon: <IconTargetArrow size={16}/>},
    { title: "Integrations", description: "Connect with other tools" , icon: <IconBox size={16}/>},
  ];
  return (
    <div className="w-full flex justify-center">
    <div className="mt-5 rounded-2xl fixed h-14 w-[1100px] flex items-center bg-white/70 backdrop-blur-xs border border-gray-300 shadow-sm text-gray-700 ">
        <div className="flex justify-between w-full md:px-10 px-4">
            <div className="text-2xl mr-10 font-extrabold hover:cursor-pointer">
                Arcade
            </div>
            <div className="hidden md:flex lg:gap-10 md:gap-5 text-lg">
                <div className="relative group">
                    <button className="hover:cursor-pointer rounded-xl hover:text-black flex items-center gap-1">
                        <p>product</p>
                        <span className="pt-1"><IconChevronDown /></span>
                    </button>
                    <span className="absolute hidden group-hover:block right-0">
                            <DropDown items={features}/>
                    </span>
                </div>
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:cursor-pointer hover:text-black">
                        <p>pricing</p>
                        <span className="pt-1"><IconChevronDown /></span>
                    </button>
                    <span className="absolute hidden group-hover:block right-0">
                            <DropDown items={features}/>
                    </span>
                </div>
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:cursor-pointer hover:text-black">
                        <p>resources</p>
                        <span className="pt-1"><IconChevronDown /></span>
                    </button>
                    <span className="absolute hidden group-hover:block right-0">
                            <DropDown items={features}/>
                    </span>
                </div>
            </div>
            <button onClick={()=>{
                setIsOpen(!isOpen)
            }} className="md:hidden flex justify-center hover:cursor-pointer items-center p-2 border border-gray-300 rounded-md">
                {isOpen ? <IconX/> : <IconMenu2/>}
            </button>
            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-white rounded-md border-t border-gray-300 shadow-sm z-10 md:hidden flex flex-col">
                    <div>
                        {["product", "pricing", "resources"].map((item, index) => (
                        <div key={index} className="flex justify-between p-4 border-b border-gray-300 hover:bg-neutral-50 hover:text-sky-700 hover:cursor-pointer">
                            <div>
                                {item}
                            </div>
                            <div>
                                <button className="hover:cursor-pointer">{<IconChevronDown/>}</button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div>
                        <button className="w-full p-4 text-center bg-sky-700 text-white rounded-2xl hover:cursor-pointer hover:bg-sky-800">Get Started</button>
                    </div>
                </div>
            )}
        </div>
    </div>
    </div>
  )
}

export default NavBar
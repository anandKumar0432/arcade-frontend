
import { IconChevronDown } from "@tabler/icons-react";
import DropDown from "./DropDown";

type feauture = {
    title: string;
    description: string;
    icon?: React.ReactNode;
}[]

function NavBar() {

    const features : feauture = [
    { title: "Product Overview", description: "Effortlessly beautiful demos" },
    { title: "Lead Generation", description: "Drive demand and pipeline" },
    { title: "Integrations", description: "Connect with other tools" },
  ];
  return ( 
    <div className=" h-14 w-full flex items-center bg-[#ffffff] border-b border-gray-300 shadow-xs text-gray-700">
        <div className="flex justify-between w-full px-10">
            <div className="text-2xl mr-10">
                Arcade
            </div>
            <div className="flex gap-10 text-lg">
                <div className="relative group">
                    <button className="hover:cursor-pointer hover:text-black flex items-center gap-1">
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
        </div>
    </div>
  )
}

export default NavBar
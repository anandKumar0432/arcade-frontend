
type Feature = {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

type childProps = {
    items: Feature[];
}

function DropDown({items}: childProps) {
  return (
    // i want this to be a dropdown that appears below the button on left side of the button 
    <div className="top-14 left-0 w-54 rounded-md mt-2 p-2 border-1 border-gray-300 bg-white shadow-lg text-sm z-50 transition-colors duration-300 ease-in-out">
        {items.map((item,index)=>(
            <div key={index} className="flex gap-2 p-2 hover:bg-neutral-50 rounded-md last:border-b-0 hover:text-sky-700 cursor-pointer">
                <div className="pt-1">
                    <div className="flex items-center justify-center w-7 h-7 bg-gray-200 rounded-md">
                    {item.icon}
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <div className="flex justify-start">{item.title}</div>
                    <div className="flex justify-start text-xs text-gray-600">{item.description}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DropDown
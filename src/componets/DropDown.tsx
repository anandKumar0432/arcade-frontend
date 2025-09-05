
type Feature = {
    title: string;
    description: string;
}

type childProps = {
    items: Feature[];
}

function DropDown({items}: childProps) {
  return (
    // i want this to be a dropdown that appears below the button on left side of the button 
    <div className="top-14 left-0 w-54 rounded-xl mt-2 p-2 border-1 border-gray-300 bg-white shadow-lg text-sm z-50">
        {items.map((item,index)=>(
            <div key={index} className=" p-2 hover:bg-neutral-50 rounded-md last:border-b-0 hover:text-sky-700 cursor-pointer">
                <div className="flex justify-start">{item.title}</div>
                <div className="flex justify-start text-xs text-gray-600">{item.description}</div>
            </div>
        ))}
    </div>
  )
}

export default DropDown
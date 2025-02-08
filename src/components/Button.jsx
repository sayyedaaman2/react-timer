export default function Button({children,handleOnClick = ()=>{console.log('Click')}}){
    return(
        <button className="bg-purple-900 hover:bg-purple-50 hover:text-black cursor-pointer px-8 py-4 rounded-md font-bold uppercase" onClick={handleOnClick}>
            {children}
        </button>
    )
}
export default function Button({children,handleOnClick = ()=>{console.log('Click')},...rest}){
    return(
        <button  {...rest} className="bg-purple-900 hover:bg-purple-50 hover:text-black disabled:bg-slate-50 disabled:text-slate-600 cursor-pointer p-2 lg:py-4 lg:px-8 rounded-md font-bold uppercase" onClick={handleOnClick}>
            {children}
        </button>
    )
}
import Button from "./Button";
import DisplayTime from "./DisplayTime";

export default function Timer(){
    return(
        <div id="timer" className="bg-slate-900 text-white rounded-2xl shadow-md shadow-purple-400 w-[500px] h-[350px] p-6 flex flex-col justify-between items-center">
            <h1 className="uppercase text-2xl">Timer</h1>
            <DisplayTime/>
            <div id="action" className="flex w-full justify-evenly">
                <Button> Start</Button>
                <Button> Stop</Button>
                <Button> Reset</Button>


            </div>
        </div>
    )
}
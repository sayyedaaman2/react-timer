import { use, useEffect, useRef, useState } from "react";
import Button from "./Button";
import DisplayTime from "./DisplayTime";
import { formatTime } from "../utility/DateTime";
export default function Timer() {
    const initialTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            timerRef.current = setInterval(()=>{
                setTime((prevTime)=> {
                    if(prevTime <= 1000){
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        setIsTimeUp(true);
                        return 0;
                    }
                    return prevTime - 1000
                });
                console.log("time", time);
            },1000)
        }else{
            clearInterval(timerRef.current)
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);


    // start
    function startTimer() {
        if(!isRunning){

            setIsRunning(true);
            setIsTimeUp(false);
        }

    }
    // stop
    function stopTimer() {
        setIsRunning(false)
    }
    //rest
    function resetTimer() {
        setIsRunning(false);
        setTime(initialTime);
        setIsTimeUp(false);
    }


    return (
        <div id="timer" className="bg-slate-900 text-white rounded-2xl shadow-md shadow-purple-400 w-[80%] h-[350px]  lg:h-[350px] lg:w-[500px] p-6 flex flex-col justify-between items-center">
            <h1 className="uppercase text-2xl">Timer</h1>
            {isTimeUp ? (
                <h2 className="text-red-500 text-3xl">Time's Up!</h2>
            ) : (
                <DisplayTime value={formatTime(time)} />
            )}
            <div id="action" className="flex w-full justify-evenly gap-2">
                <Button disabled={isRunning} handleOnClick={startTimer} > Start</Button>
                <Button handleOnClick={stopTimer}> Stop</Button>
                <Button handleOnClick={resetTimer}> Reset</Button>


            </div>
        </div>

    )
}
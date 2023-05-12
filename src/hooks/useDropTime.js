import { useState, useCallback, useEffect } from "react";


const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;


export const useDropTime = ({ gameStats}) => {
    const [dropTime, setDropTime] = useState(defaultDropTime);
    const [previousDropTime, setPreviousDropTIme] = useState();

    const resumeDropTime = useCallback(() => {
        if (!previousDropTime) {
            return;
        }
        setDropTime(previousDropTime);
        setPreviousDropTIme(null);
    }, [previousDropTime]);

    const pauseDropTime = useCallback(() => {
        if (dropTime) {
            setPreviousDropTIme(dropTime);
        }
        setDropTime(null);
    }, [dropTime, setPreviousDropTIme]);
 
    useEffect(() => {
        const speed = speedIncrement * (gameStats.level - 1);
        const newDropTIme = Math.max(defaultDropTime - speed, minimumDropTime)

        setDropTime(newDropTIme);
    }, [gameStats.level, setDropTime]);

    return [dropTime, pauseDropTime, resumeDropTime];

}
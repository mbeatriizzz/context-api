import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Time = () => {
    const { time, setTime } = useContext(AppContext);

    useEffect(() => {
        const updateTime = () => {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let hourStr = hours < 10 ? '0' + hours : hours.toString();
            let minStr = minutes < 10 ? '0' + minutes : minutes.toString();
            setTime(`${hourStr}:${minStr}`);
        };

        let timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [setTime]);

    return <h1>{time}</h1>;
};

export default Time;
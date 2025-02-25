import { useState, useEffect } from "react";
import "../styles/Countdown.css";

function Countdown() {
    const countingTo = new Date("2025-03-13T00:00:00");
    const now = new Date();

    const [time, setTime] = useState(countingTo - now);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime((time) => {
                if (time > 0) {
                    setSec(Math.floor(time / 1000) % 60);
                    setMin(Math.floor(time / 60_000) % 60);
                    setHours(Math.floor(time / 360_000) % 24);
                    setDays(Math.floor(time / 8.64e7));

                    return time - 1000;
                }
            });
        }, 1000);
    }, []);

    return (
        <ul id="countdown">
            <li id="days">
                <div className="number">{String(days).padStart(2, "0")}</div>
                <div className="label">Days</div>
            </li>
            <li id="hours">
                <div className="number">{String(hours).padStart(2, "0")}</div>
                <div className="label">Hours</div>
            </li>
            <li id="minutes">
                <div className="number">{String(min).padStart(2, "0")}</div>
                <div className="label">Minutes</div>
            </li>
            <li id="seconds">
                <div className="number">{String(sec).padStart(2, "0")}</div>
                <div className="label">Seconds</div>
            </li>
        </ul>
    );
}

export default Countdown;

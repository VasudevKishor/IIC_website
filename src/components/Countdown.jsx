import { useState, useEffect } from "react";
import "../styles/Countdown.css";

function Countdown({ targetDate }) {
    const countingTo = new Date(targetDate);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = countingTo - now;

        return {
            days: Math.max(0, Math.floor(difference / 86_400_000)),
            hours: Math.max(0, Math.floor((difference / 3_600_000) % 24)),
            minutes: Math.max(0, Math.floor((difference / 60_000) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]); // Depend on targetDate to allow multiple instances

    return (
        <ul id="countdown">
            <li>
                <div className="number">{String(timeLeft.days).padStart(2, "0")}</div>
                <div className="label">Days</div>
            </li>
            <li>
                <div className="number">{String(timeLeft.hours).padStart(2, "0")}</div>
                <div className="label">Hours</div>
            </li>
            <li>
                <div className="number">{String(timeLeft.minutes).padStart(2, "0")}</div>
                <div className="label">Minutes</div>
            </li>
            <li>
                <div className="number">{String(timeLeft.seconds).padStart(2, "0")}</div>
                <div className="label">Seconds</div>
            </li>
        </ul>
    );
}

export default Countdown;

import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Greeting = ({ myName }) => {
    const { time, greeting, setGreeting } = useContext(AppContext);

    useEffect(() => {
        const updateGreeting = () => {
            let now = new Date();
            let hours = now.getHours();
            if (hours > 0 && hours < 12) {
                setGreeting(`Bom dia, ${myName}.`);
            } else if (hours >= 12 && hours < 18) {
                setGreeting(`Boa tarde, ${myName}.`);
            } else {
                setGreeting(`Boa noite, ${myName}.`);
            }
        };

        updateGreeting();
    }, [time, setGreeting]);

    return <h3>{greeting}</h3>;
};

export default Greeting;

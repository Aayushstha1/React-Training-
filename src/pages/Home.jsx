
// const lists =[
//     {
//     id:1,
//     name: "Aayush stha",
//     age : 20,
//     },
//     {
//         id:2,
//         name: " stha",
//         age : 20,
//     },
//     {
//         id:3,
//         name: "Aayush1 stha",
//         age : 20,
//     }

// ];

import React, { useState } from 'react'; // Import React and useState

export default function HomePage() {
    const [count, setCount] = useState(0); // Initialize count with useState

    function handleCount(type) {
        if (type === "inc") {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Home Page</h1>
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>INC</button>
                <button onClick={() => setCount(count - 1)}>DEC</button>
            </div>
            <div>
                <p>With Function</p>
                <button onClick={() => handleCount("inc")}>INC</button>
                <button onClick={() => handleCount("dec")}>DEC</button>
            </div>
        </div>
    );
}
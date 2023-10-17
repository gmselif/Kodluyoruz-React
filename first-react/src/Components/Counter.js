import { useState } from 'react';



const Counter = () => {

    //name değişkeni const tur. Değiştirmeye çalışma. setName ile değiştirilebilir ama yapılmamalı.
    const [name, setName] = useState('Dave');
    const handleNameChange = () => {
        const names = ["Elif", "Hatice", "Faruk", "Mehmet", "Aybüke"];
        const index = Math.floor(Math.random() * 5);
        //return (names[index]);
        setName(names[index]);
    }

    const [count, setCount] = useState(0);
    const handleClick = () => { setCount(count+1); }

    return (
        <main>
            <p> Hello {name}!!! </p>
            <button onClick={handleNameChange}>Change the Name</button>
            
            <p className="counter">{count}</p>
            <button onClick={handleClick}>Increase</button>
            <button onClick={handleClick}>Decrease</button>
       </main>
    );
}

export default Counter;
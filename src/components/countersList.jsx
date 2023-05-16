import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () =>{
    const initialState = [ 
        {id:0, value:0, name:'Ненужная вещь'},
        {id:1, value:4, name:'Ложка'},
        {id:2, value:0, name:'Вилка'},
        {id:3, value:0, name:'Тарелка'},
        {id:4, value:0, name:'Набор минималиста'}
    ];
   
    const [counters, setCounters] = useState(initialState);

    const handleDelet = (id) => {
        const newCounters = counters.filter((c)=> c.id!== id);
        setCounters(newCounters);
    };
    const handleReset = () =>{
        setCounters(initialState);   
    };
   const handleIncrement = () =>{
        const increaseCounters = counters.value +1;
        setCounters(increaseCounters);
        };
    
        const handleDecrement = () =>{
            const decreaseCounters =  counters.value(counters.value -=1);
            setCounters(decreaseCounters);   
        };

    
return (
    <>
        {counters.map((count)=>(
            <Counter
            key={count.id} 
            onDelet={handleDelet}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...count}
            /> 
            ))}
            <button className="btn btn-primary btn-cm m2" onClick={handleReset}>
                Сброк
            </button>
           
    </>
);
};

export default CountersList;
import React, { useState } from "react"

const Counter=(props)=>{
    const {value}=props
    console.log(props);


    const formatValue=()=>{
        return value===0 ? "empty" : value;
    };
    const getBageClasses=()=>{
        let classes = "bable m-3 badge text-bg-primary ";
        classes+=value===0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    

   
   
    return (<div>
            <span>{props.name}</span>
            <span className = {getBageClasses()}>{formatValue()}
            </span>
            
            <button className = 'btn btn-primary btn-cm m-2' onClick={()=>props.onIncrement(props.id)}>
                +
            </button>
            
            <button className = 'btn btn-primary btn-cm m-2' onClick={()=>props.onDecrement(props.id)}>
                -
            </button>
            <button className = 'btn btn-danger btn-cm m-2' onClick={()=>props.onDelet(props.id)}>
                Delet
            </button>
            
            
        </div>
    );
};

export default Counter;
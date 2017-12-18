import React from 'react';

// receive props 36E
export default function List(props) {


    var list = props.list.map((item, i) => {
    return <li key={i} >{item}</li>
    })

    return(
        <div>
            <h1>{props.title}</h1>
            <ul>
                {list}
            </ul>
        </div> 
    )
}
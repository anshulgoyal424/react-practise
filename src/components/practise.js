import React from "react"

function Joke(props) {
    return(
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{color: props.question? "black" : "#888888"}}>Answer:{props.punchline}</h3>
            <hr/>
        </div>
    )

}

export default Joke
import React from "react"

function Times() {
    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if(hours < 12) {
        timeofDay = "morning"
    }
    else if (hours>= 12 && hours < 17) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }

    const styles = {
        color : "red",
        backgroundColor: "yellow",
        fontSize: 24
    }

    return (
        <h1 style={styles}> Good {timeofDay} </h1>
    )
}

export default Times
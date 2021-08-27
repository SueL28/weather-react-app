import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function AnimatedEmoji(props){
    return(
        <ReactAnimatedWeather
        icon={props.icon}
        color={props.colour}
        size={props.size}
        animate={true}
      />
    );
}
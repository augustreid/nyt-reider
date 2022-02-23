import React, { useState } from "react";
import { Link } from "react-router-dom";
import Article from "./Article";

const Headlines = () => {
    const [stories, setStories] = useState;

    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG")
        .then(response => response.json())
        .then(data => setStories(data))
        .then(error => console.log(error))

    return (
        <div>
            {stories && stories.results.map((story) => {
                return (
                    <Link to={`/${story.title}`}>
                        <h2>{story.title}</h2>
                    </Link>
                )
             }
            )
            }
        </div>
    )
}

export default Headlines; 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "./Article";

const Headlines = () => {
    const [stories, setStories] = useState(null);

    useEffect(() => {fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG")
        .then(response => response.json())
        .then(data => setStories(data))
        .then(error => console.log(error))
    }, []);

    const today = new Date();
    

    return (
        <div>
            <h2>Top Stories</h2>
            <p>{today.toDateString()}</p>
            <div>
            {stories && stories.results.map((story) => {
                return (
                    <Link to={`/${story.title}`} key={story.title}>
                        <h3>{story.title}</h3>
                    </Link>
                )
             }
            )
            }
            </div>
        </div>
    )
}

export default Headlines; 
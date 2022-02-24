import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Headlines = ({section}) => {

  const [stories, setStories] = useState(null);

  useEffect(() => {fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG`)
    .then(response => response.json())
    .then(data => setStories(data))
    .then(error => console.log(error))
    }, [section]);

  const today = new Date();
    

   return (
    <section>
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
        )}
      </div>
    </section>
  )
}

export default Headlines; 
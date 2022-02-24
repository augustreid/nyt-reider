import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {

  const id = useParams().id
  const [stories, setStories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState(null);

  useEffect(() => {fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG")
    .then(response => response.json())
    .then(data => setStories(data.results))
    .catch(error => console.log(error))
    }, []);

    useEffect(() => {
      if (stories) {
        setLoading(false)
        const article = stories.find((story) => {
          return story.title === id;
        })
        setStory(article)
      }
    }, [stories])

  return (
    <section>
      {!loading && 
      <h2>{story.title}</h2>
    }
    </section>
  )

}

export default Article;
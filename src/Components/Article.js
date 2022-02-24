import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {

  const section = useParams().section
  const articleTitle = useParams().article
  const [stories, setStories] = useState(null);
  let story;

  useEffect(() => {fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG`)
    .then(response => response.json())
    .then(data => setStories(data.returns))
    .then(error => console.log(error))
    }, []);

    if (stories) {
      story = stories.find((article) => {
        return article.title = articleTitle;
      })
    }

  return (
    <section>
      {stories && 
      <h2>{story.title}</h2>
    }
    </section>
  )

}

export default Article;
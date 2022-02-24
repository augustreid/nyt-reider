import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {

  const id = useParams().id
  const [stories, setStories] = useState(null);
  // const [story, setStory] = useState(null);
  let story;

  useEffect(() => {fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pY5t6IMJSmRIZhilx7gJg50xVP8qwsOG")
    .then(response => response.json())
    // .then(data => console.log(data.results))
    .then(data => setStories(data.results))
    .then(console.log(stories, "state"))
    // .then(stories.forEach((article) => {
    //   if (article.title === id) {
    //     setStory(article);
    //   }
    // }))
    .then(data => {
      const article = data.results.find((thing) => {
        return thing.title == id;
      })
      story = article;
    })
    .catch(error => console.log(error))
    }, []);

  return (
    <section>
      {story && 
      <h2>{story.title}</h2>
    }
    </section>
  )

}

export default Article;
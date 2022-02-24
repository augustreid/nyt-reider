import React, { useState } from "react";
import Headlines from "./Headlines.js";

const SectionForm = () => {

  const [topic, setTopic] = useState("home");

  return (
    <main>
    <form>
      <label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Home</option>
          <option>Arts</option>
          <option>Automobiles</option>
          <option>Books</option>
          <option>Business</option>
          <option>Food</option>
          <option>Health</option>
          <option>Insider</option>
          <option>Magazine</option>
          <option>NYregion</option>
          <option>Obituaries</option>
          <option>Opinion</option>
          <option>Politics</option>
          <option>RealEstate</option>
          <option>Science</option>
          <option>Sports</option>
          <option>SundayReview</option>
          <option>Technology</option>
          <option>Theater</option>
          <option>T-Magazine</option>
          <option>Travel</option>
          <option>Upshot</option>
          <option>US</option>
          <option>World</option>
        </select>
      </label>
    </form>
    <Headlines section={topic.toLowerCase()}/>
    </main>
  )
}

export default SectionForm;
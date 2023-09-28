/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const DescriptionG = ({ id }) => {
  const maxLength = 150;
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=add3d397e8e24312a9a6391a38b80e1d`)
      .then((response) => response.json())
      .then((data) => setDescription(data.description_raw))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const truncatedText = description.slice(0, maxLength);

  return (
    <div className="des">
      {truncatedText}
      {description.length > maxLength && "..."}
    </div>
  );
};

export default DescriptionG;

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const DescriptionG = ({ id }) => {
  const maxLength = 150;
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=77de9fb94b994de394a6196e63d31851`)
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

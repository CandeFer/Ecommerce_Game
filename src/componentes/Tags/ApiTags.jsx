import { useEffect, useState } from "react"
import Tags from "./Tags"
import { urlT } from "../url"

function ApiTags() {
  const [tags, setTags] = useState([])
  useEffect(() => {
    fetch(urlT)
      .then((response) => response.json())
      .then((data) => setTags(data.results))
      .catch((err) => console.log(err))
  }, [tags])

  return (
    <>
      <Tags tags={tags} />
    </>
  )
}

export default ApiTags
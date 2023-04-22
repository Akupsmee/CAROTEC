import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  // @ts-ignore
  space: process.env.REACT_APP_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_ACCESS_TOKEN || "null",
});

const useFetchVideos = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "platinumVideos",
      });
      const videos = response.items[1].fields.videosAndImages;
      // @ts-ignore
      const videoData = videos?.map((item) => {
        const { title, file } = item.fields;
        const id = item.sys.id;
        const url = file.url;
        return { title, url, id };
      });

      console.log(videoData);

      setLoading(false);
      setProjects(videoData);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchVideos;

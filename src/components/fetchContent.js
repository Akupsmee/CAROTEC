import { useEffect, useState} from "react";
import { createClient } from "contentful";

const client = createClient({
  // @ts-ignore
  space: process.env.REACT_APP_NOT_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  // @ts-ignore
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "platinumVideos",
      });

      const videoContent =response.items[0].fields.videosAndImages
      console.log(videoContent);

      const projects = videoContent.map((item) => {
        const { id } = item.sys;
        const { title, file } = item.fields;
   
      
      setLoading(false);
      // @ts-ignore
      setProjects(projects);

      })
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

export default useFetchProjects;


//import heroImg from './assets/hero.svg';
// const Hero = () => {
//   return (
//     <section className='hero'>
//       <div className='hero-center'>
//         <div className='hero-title'>
//           <h1>contentful CMS</h1>
//           <p>
//             Pitchfork schlitz tonx, coloring book celiac tousled succulents
//             ascot affogato cardigan jianbing crucifix seitan. Synth man braid
//             everyday carry try-hard pour-over keffiyeh slow-carb sriracha
//             chillwave banjo gochujang kinfolk small batch mustache.
//           </p>
//         </div>
//         <div className='img-container'>
//           <img src={heroImg} alt='woman and the browser' className='img' />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;

// import useFetchProjects from './fetchProjects';

// const Projects = () => {
//   const { loading, projects } = useFetchProjects();

//   if (loading) {
//     return (
//       <section className='projects'>
//         <div className='projects-center'>
//           <h2>loading...</h2>
//         </div>
//       </section>
//     );
//   }
//   return (
//     <section className='projects'>
//       <div className='title'>
//         <h2>Projects</h2>
//         <div className='title-underline'></div>
//       </div>
//       <div className='projects-center'>
//         {projects.map((project) => {
//           const { id, img, url, title } = project;
//           return (
//             <a
//               key={id}
//               href={url}
//               target='_blank'
//               rel='noreferrer'
//               className='project'
//             >
//               <img src={img} alt='title' className='img' />
//               <h5>{title}</h5>
//             </a>
//           );
//         })}
//       </div>
//     </section>
//   );
// };
// export default Projects;

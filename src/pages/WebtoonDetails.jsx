import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function WebtoonDetails() {
 const { id } = useParams();

 const [webtoon, setWebtoon] =
   useState(null);

 useEffect(() => {
   getWebtoon();
 }, []);

 async function getWebtoon() {
   try {
     const response = await api.get(
       `/webtoons/${id}`
     );

     setWebtoon(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 if (!webtoon) {
   return <h2>Loading...</h2>;
 }

 return (
   <div className="details">
     <img
       src={webtoon.image}
       alt={webtoon.title}
     />

     <h1>{webtoon.title}</h1>

     <p>{webtoon.description}</p>

     
     <h3>Genre</h3>
     <p>{webtoon.genre}</p>

     

     <h3>Chapters</h3>
     <p>{webtoon.chapters}</p>

     <h3>Language</h3>
     <p>{webtoon.language}</p>

   

     <h3>Rating</h3>
     <p>{webtoon.rating}</p>

     <h3>Famous For</h3>
     <p>{webtoon.famousFor}</p>

     <h3>Tags</h3>

     <ul>
       {webtoon.tags.map(
         (tag, index) => (
           <li key={index}>{tag}</li>
         )
       )}
     </ul>
   </div>
 );
}

export default WebtoonDetails;

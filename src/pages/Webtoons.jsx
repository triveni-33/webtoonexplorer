import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "../services/api";
import WebtoonCard from "../components/WebtoonCard";

function Webtoons() {
 const [webtoons, setWebtoons] = useState([]);
 const [searchParams] = useSearchParams();
 const genreFromUrl = searchParams.get("genre");

 const [search, setSearch] = useState("");
 const [genre, setGenre] = useState(genreFromUrl || "All");
 const [status, setStatus] = useState("All");
 const [sort, setSort] = useState("");

 useEffect(() => {
   getWebtoons();
 }, []);

 useEffect(() => {
   if (genreFromUrl) {
     setGenre(genreFromUrl);
   }
 }, [genreFromUrl]);

 async function getWebtoons() {
   try {
     const response = await api.get("/webtoons");
     setWebtoons(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 async function deleteWebtoon(id) {
   const user = JSON.parse(localStorage.getItem("user"));
   const webtoon = webtoons.find(w => w.id === id);

   if (!user) {
     alert("💜 Login required to delete a webtoon.");
     return;
   }

   if (webtoon.createdBy !== user.id) {
     alert("🚫 You can only delete webtoons you added yourself.");
     return;
   }

   await api.delete(`/webtoons/${id}`);

   setWebtoons(
     webtoons.filter(webtoon => webtoon.id !== id)
   );
 }

 // Step 1 & 2: Search
 const searchedWebtoons = webtoons.filter(webtoon =>
   webtoon.title
     .toLowerCase()
     .includes(search.toLowerCase())
 );

 // Step 3: Genre Filter (matches against tags array)
 const genreFiltered = searchedWebtoons.filter(webtoon => {
   if (genre === "All") return true;
   return webtoon.tags.some(
     tag => tag.toLowerCase() === genre.toLowerCase()
   );
 });

 // Step 4: Status Filter
 const statusFiltered = genreFiltered.filter(webtoon => {
   return status === "All" || webtoon.status === status;
 });

 // Step 5: Sort By Rating
 let finalWebtoons = [...statusFiltered];

 if (sort === "high") {
   finalWebtoons.sort((a, b) => b.rating - a.rating);
 }
 if (sort === "low") {
   finalWebtoons.sort((a, b) => a.rating - b.rating);
 }

 return (
   <>
     <h1>
       {genre !== "All" ? `${genre} Webtoons` : "Popular Webtoons"}
     </h1>

     <Link to="/add-webtoon" className="add-btn">
       Add Webtoon
     </Link>

     <div className="filters">
       <input
         type="text"
         placeholder="Search Webtoon"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />

       <select
         value={genre}
         onChange={(e) => setGenre(e.target.value)}
       >
         <option>All</option>
         <option>Romance</option>
         <option>Horror</option>
         <option>Action</option>
         <option>Fantasy</option>
         <option>Comedy</option>
         <option>Drama</option>
         <option>Mystery</option>
         <option>Sci-Fi</option>
         <option>Thriller</option>
         <option>Slice of Life</option>
       </select>


       <select
         value={sort}
         onChange={(e) => setSort(e.target.value)}
       >
         <option value="">Sort Rating</option>
         <option value="high">High To Low</option>
         <option value="low">Low To High</option>
       </select>
     </div>

     <div className="webtoons">
       {finalWebtoons.length > 0 ? (
         finalWebtoons.map((webtoon) => (
           <WebtoonCard
             key={webtoon.id}
             webtoon={webtoon}
             onDelete={deleteWebtoon}
           />
         ))
       ) : (
         <h1>No webtoons found.</h1>
       )}
     </div>
   </>
 );
}

export default Webtoons;
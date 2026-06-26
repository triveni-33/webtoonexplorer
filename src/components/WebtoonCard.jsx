import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
import { useNavigate } from "react-router-dom";

function WebtoonCard({ webtoon ,onDelete }) {
    const dispatch = useDispatch();

 const navigate = useNavigate();

const handleFavorite = () => {
  const user = localStorage.getItem("user");
   console.log("Button clicked");
    console.log("User:", user);
    

  if (!user) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  dispatch(addFavorite(webtoon));
   alert("Added to Favorites!")
};
 return (
   <div className="card">
     <img
       src={webtoon.image}
       alt={webtoon.title}
     />

     <h3>{webtoon.title}</h3>

     <p>{webtoon.author}</p>

     <p>{webtoon.genre}</p>

     <p>⭐ {webtoon.rating}</p>

     {/* Card Buttons */}
     <div className="card-actions">
       <Link
         className="view-btn"
         to={`/webtoons/${webtoon.id}`}
       >
         View
       </Link>

       <Link
         className="edit-btn"
         to={`/edit-webtoon/${webtoon.id}`}
       >
         Edit
       </Link>

       <button
         className="delete-btn"
         onClick={() => onDelete(webtoon.id)}
       >
         Delete
       </button>
       <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤Favorite
      </button>

      {/*<button
      className="favorite-btn"
  onClick={() =>
    dispatch(addFavorite(webtoon))
  }
>
  ❤ Add To Favorites
</button>*/}
     </div>
   </div>
 );
}

export default WebtoonCard;
import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (
    <div className="favorites-container">

      {/*<h1 className="page-title">
        Favorite Webtoons
      </h1>*/}

      {favorites.length === 0 ? (

        <div className="empty-favorites">
          <h2>No Favorite Webtoons</h2>

          
        </div>

      ) : (

        <div className="favorites-grid">

          {favorites.map(webtoon => (

            <div
              key={webtoon.id}
              className="favorite-card"
            >

              <img
                src={webtoon.image}
                alt={webtoon.title}
              />

              <div className="favorite-content">

                <h2>
                  {webtoon.title}
                </h2>

                <p>
                  📚Genre: {webtoon.genre}
                </p>
   
  <p>
    ⭐ Rating: {webtoon.rating}
  </p>

                {/*<button
                  onClick={() =>
                    dispatch(
                      removeFavorite(
                        webtoon.id
                      )
                    )
                  }
                >
                  Remove
                </button>*/}
                <button
  onClick={() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first!");
      return;
    }

    dispatch(removeFavorite(webtoon.id));

   
  }}
>
  Remove
</button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Favorites;
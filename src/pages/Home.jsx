
import { Link } from "react-router-dom";

function Home() {
 return (
   <div>
     <div className="hero">
       <div className="hero-content">
         <span className="hero-badge">Webtoon Explorer ❤︎</span>
         <h2>Endless stories🌙!  Endless genres💌! Zero boredom☻!</h2>
         <br></br>
         <p>
          Your digital bookshelf of beautiful stories ✨<br></br>
          A cozy corner for dreamers, readers, and story lovers🦋
           
         </p>
         <Link to="/webtoons" className="hero-btn">
           Explore Webtoons (˶ᵔ ᵕ ᵔ˶)
         </Link>
       </div>
       <div className="hero-icons">
         <div className="hero-icon">⭐</div>
         <div className="hero-icon">📱</div>
         <div className="hero-icon">💗</div>
         <div className="hero-icon">🔮</div>
       </div>
     </div>

     <h2 className="section-title">જ⁀➴☁️every genre hides a story 𓍯</h2>
<div className="genre-pills">
  <Link to="/webtoons?genre=Fantasy" className="pill">
    🦄 Fantasy
  </Link>
  <Link to="/webtoons?genre=Horror" className="pill">
    🕯️ Horror
  </Link>
  <Link to="/webtoons?genre=Action" className="pill">
    🛡️ Action
  </Link>
  <Link to="/webtoons?genre=love" className="pill">
  💘 love
</Link>
  <Link to="/webtoons?genre=Comedy" className="pill">
    🍿 Comedy
  </Link>
  <Link to="/webtoons?genre=Drama" className="pill">
    🥀 Drama
  </Link>

  <Link to="/webtoons?genre=Mystery" className="pill">
    🔍 Mystery
  </Link>

  <Link to="/webtoons?genre=Sci-Fi" className="pill">
    🚀 Sci-Fi
  </Link>

  <Link to="/webtoons?genre=Slice of Life" className="pill">
    ☕ Slice of Life
  </Link>
</div>
   </div>
 );
}

export default Home;



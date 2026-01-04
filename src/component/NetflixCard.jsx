import cardJson from "../api/cardJsonData.json";

function NetflixCard() {
  return (
    <ul>
      <h1>Netflixcler Series</h1>

      {cardJson.map((cardElement) => {
        return (
          <li className="card" key={cardElement.id}>
            <img src={cardElement.img_url} alt="lr" className="card-img" />

            <div className="card-body">
              <h2 className="title">{cardElement.name}</h2>

              <p className="rating">⭐ {cardElement.rating}</p>

              <p className="desc">{cardElement.description}</p>

              <p className="info">
                <strong>Cast:</strong>
                {cardElement.cast.join(", ")}
              </p>

              <p className="info">
                <strong>Genre:</strong>
                {cardElement.genre.join(", ")}
              </p>

              <a href={cardElement.watch_url} target="_blank" className="btn">
                ▶ Watch Now
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default NetflixCard;

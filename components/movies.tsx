import { Movies } from "../routes/index.tsx";

export function PelisGrid(props: { movies: Movies[], gridSize: number }) {
    return (
    <div class="grid" style={{ display: "grid", gridTemplateColumns: `repeat(${props.gridSize}, 1fr)`, gap: "5px" }}>
        {props.movies.map((movie) => (
        <div class="card" key={movie.original_title}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
            <div class="" style = {{width: `${movie.popularity/10*100}%`}}>
                <div class="skill"> <p>0</p></div>
            </div>
            <p>Fecha de estreno: {movie.release_date}</p>
        </div>
        ))}
    </div>
    );
} 
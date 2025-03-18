// deno-lint-ignore-file
import { useSignal } from "@preact/signals";
import { PelisGrid } from "../components/movies.tsx";
import { Movies } from "../routes/index.tsx";

export default function GridSelector(props: { movies: Movies[] }) {
    const gridSize = useSignal(2);

    return (
        <div>
            <div class="numeros-contenedor">
                <div class="numeros">
                    {[1, 2, 3, 4, 5].map((num) => (
                    <button key={num} class="numero" onClick={() => (gridSize.value = num)}> {num} </button>))}
                </div>
            </div>

            <PelisGrid movies={props.movies} gridSize={gridSize.value} />
        </div>
        );
}
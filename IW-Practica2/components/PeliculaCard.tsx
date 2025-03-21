import { FunctionComponent } from "preact/src/index.js";
import BarraPopularidad from "./BarraPopularidad.tsx";

type Props = {
    pelicula: {
        original_title: string;
        release_date: string;
        backdrop_path: string;
        popularity: number;
    };
};
const PeliculaCard: FunctionComponent<Props> = (props: Props) => {
    const { original_title, release_date, backdrop_path, popularity } =
        props.pelicula;
    return (
        <div>
            <div class="peliculaCard img">
                <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt="Imagen de pelicula"
                />
            </div>
            <div>{original_title}</div>
            <div>release_date: {release_date}</div>
            <BarraPopularidad popularity={popularity}></BarraPopularidad>
        </div>
    );
};
export default PeliculaCard;

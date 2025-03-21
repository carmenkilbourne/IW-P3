import { FunctionalComponent } from "preact";
import PeliculaCard from "./PeliculaCard.tsx";

type Pelicula = {
  original_title: string;
  release_date: string;
  backdrop_path: string;
  popularity: number;
  id: number;
};

type Props = {
  peliculas: Pelicula[];
  columns: number;
};

const PeliculasContainer: FunctionalComponent<Props> = (
  { peliculas, columns },
) => {
  return (
    <div
      class="peliculasContainer"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`, 
      }}
    >
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default PeliculasContainer;

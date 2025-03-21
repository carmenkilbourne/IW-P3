import { FunctionalComponent } from "preact";
import PeliculaCard from "./PeliculaCard.tsx";

type Pelicula = {
  original_title: string;
  release_date: string;
  backdrop_path: string;
  popularity: number;
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
      class="charactersContainer"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`, // Ajusta el número de columnas
      }}
    >
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.original_title} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default PeliculasContainer;

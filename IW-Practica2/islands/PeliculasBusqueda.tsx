import { FunctionalComponent } from "preact";
import { useSignal } from "@preact/signals";
import PeliculaContainer from "../components/PeliculaContainer.tsx";
import BarraBusqueda from "../components/BarraBusqueda.tsx";
import SeleccionadorColumnas from "../components/SeleccionadorColumnas.tsx";

type Pelicula = {
  original_title: string;
  release_date: string;
  backdrop_path: string;
};

type Props = {
  peliculas: Pelicula[];
};

const PeliculasBusqueda: FunctionalComponent<Props> = ({ peliculas }) => {
  const query = useSignal(""); 
  const columns = useSignal(3);


  return (
    <div class = "peliculas-busqueda">
      <BarraBusqueda></BarraBusqueda>
      <SeleccionadorColumnas onChangeColumns={(c) => (columns.value = c)} />
      <PeliculaContainer peliculas={peliculas} columns={columns.value} />
    </div>
  );
};

export default PeliculasBusqueda;
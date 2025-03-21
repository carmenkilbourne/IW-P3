import { FunctionalComponent } from "preact";

type BarraProgresoProps = {
  popularity: number;
};

const BarraPopularidad: FunctionalComponent<BarraProgresoProps> = ({ popularity }) => {

  return (
    <div class="Barra_container">
      <div
        class="Barra_popularidad "
        style={{ width: `${(popularity / 10) * 100}%` }}
      ></div>
    </div>
  );
};

export default BarraPopularidad;
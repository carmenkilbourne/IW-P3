import { FunctionalComponent } from "preact";

type BarraProgresoProps = {
  popularity: number;
};

const BarraPopularidad: FunctionalComponent<BarraProgresoProps> = ({ popularity }) => {

  return (
    <div class="progress-bar-container">
      <div
        class="progress-bar"
        style={{ width: `${(popularity / 10) * 100}%` }}
      ></div>
    </div>
  );
};

export default BarraPopularidad;
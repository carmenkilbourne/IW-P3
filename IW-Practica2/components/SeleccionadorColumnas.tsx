import { FunctionalComponent } from "preact";

type Props = {
  numeroColumnas: (columns: number) => void;
};

const SeleccionadorColumnas: FunctionalComponent<Props> = (
  { numeroColumnas },
) => {
  return (
    <div class="btn-group">
      <button class="button" onClick={() => numeroColumnas(1)}>1</button>
      <button class="button" onClick={() => numeroColumnas(2)}>2</button>
      <button class="button" onClick={() => numeroColumnas(3)}>3</button>
      <button class="button" onClick={() => numeroColumnas(4)}>4</button>
      <button class="button" onClick={() => numeroColumnas(5)}>5</button>
    </div>
  );
};

export default SeleccionadorColumnas;

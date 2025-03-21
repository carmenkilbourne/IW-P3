import { FunctionalComponent } from "preact";

type Props = {
  onChangeColumns: (columns: number) => void;
};

const SeleccionadorColumnas: FunctionalComponent<Props> = (
  { onChangeColumns },
) => {
  return (
    <div class="btn-group">
      <button class="button" onClick={() => onChangeColumns(1)}>1</button>
      <button class="button" onClick={() => onChangeColumns(2)}>2</button>
      <button class="button" onClick={() => onChangeColumns(3)}>3</button>
      <button class="button" onClick={() => onChangeColumns(4)}>4</button>
      <button class="button" onClick={() => onChangeColumns(5)}>5</button>
    </div>
  );
};

export default SeleccionadorColumnas;

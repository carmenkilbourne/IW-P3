import { FunctionalComponent } from "preact";

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

const BarraBusqueda: FunctionalComponent<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("name") as HTMLInputElement;
    const query = input.value;

    if (onSearch) {
      onSearch(query); 
    } else {
      globalThis.location.href = `/?name=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Buscador" />
      <button type="submit">
        <img src="/lupa.png" alt="lupa" style={{ width: "15px", height: "15px" }} />
      </button>
    </form>
  );
};

export default BarraBusqueda;
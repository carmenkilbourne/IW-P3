import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PeliculasBusqueda from "../islands/PeliculasBusqueda.tsx";

type Pelicula = {
  original_title: string;
  release_date: string;
  backdrop_path: string;
};

type Data = {
  peliculas: Array<Pelicula>;
};

type PeliculaAPI = {
  results: Array<{
    original_title: string;
    release_date: string;
    backdrop_path: string;
  }>;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const webURL = new URL(req.url);
    const name = webURL.searchParams.get("name"); 

    try {
      const response = await Axios.get<PeliculaAPI>(
        `https://api.themoviedb.org/3/search/movie?query=${name}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZmYTcxYmU1ZGFhMDBlMTJjMWJjMTMxMjBlM2Q3NSIsIm5iZiI6MTY4NTM4MTkzNS4wMTYsInN1YiI6IjY0NzRlMzJmY2MyNzdjMDBhNzQ2MTYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raEEljpmsGfGMENtPmE-LFWcBEiDUcFKG5B-8_WQABQ",
          },
        }
      );

      return ctx.render({ peliculas: response.data.results });
    } catch (e) {
      console.error("Error fetching data from API:", e);
      return new Response("Error fetching data from API", { status: 500 });
    }
  },
};

export default (props: PageProps<Data>) => {
  const peliculas = props.data.peliculas;

  return (
    <div>
      <PeliculasBusqueda peliculas={peliculas} />
    </div>
  );
};
import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PeliculasBusqueda from "../islands/PeliculasBusqueda.tsx";

type Pelicula = {
  original_title: string;
  release_date: string;
  backdrop_path: string;
  popularity: number;
};

type Data = {
  peliculas: Array<Pelicula>;
};

type PeliculaAPI = {
  results: Array<{
    original_title: string;
    release_date: string;
    backdrop_path: string;
    popularity: number;
  }>;
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const title = url.searchParams.get("name");

    try {
      const response = await Axios.get<PeliculaAPI>(
        `https://api.themoviedb.org/3/search/movie?query=${title}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZmYTcxYmU1ZGFhMDBlMTJjMWJjMTMxMjBlM2Q3NSIsIm5iZiI6MTY4NTM4MTkzNS4wMTYsInN1YiI6IjY0NzRlMzJmY2MyNzdjMDBhNzQ2MTYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raEEljpmsGfGMENtPmE-LFWcBEiDUcFKG5B-8_WQABQ",
          },
        },
      );

      return ctx.render({ peliculas: response.data.results });
    } catch (e) {
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

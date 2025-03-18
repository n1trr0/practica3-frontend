import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import GridSelector from "../islands/grideSize.tsx";

type Data = {
  results: Movies[]
}

export type Movies = {
  backdrop_path : string,
  original_title : string,
  popularity : number,
  release_date : string
}
export const handler: Handlers<Data> = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url= new URL(req.url)
    const name= url.searchParams.get("name")||undefined

    if(name){
      const API_KEY = Deno.env.get("API");
      if (!API_KEY) throw new Error("MONGO_URL not found");

      const url = 'https://api.themoviedb.org/3/search/movie?query=' + name + '&include_adult=false&language=en-US&page=1'
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ API_KEY
        }
      };

      const respuesta = await fetch(url, options)
      const data = await respuesta.json()
      return ctx.render(data);
    }

    return ctx.render({results: []});
  }
}


export default function Home(props: PageProps<Data>) {

  return (
    <div class="contenedor">
      <form class="formulario" method="get">
        <input class="form" type="text" name="name" placeholder="Buscador" value=""/>
        <button type="submit">Buscar</button>
      </form>

      <GridSelector movies={props.data.results} />

    </div>
  );
}

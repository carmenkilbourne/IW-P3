import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    original_title:string;
    release_date:string;
    backdrop_path:string;
}

const Pelicula: FunctionalComponent<Props> = (props) => {
    return (
        <div class="characterComponent">
           <img src={props.backdrop_path} alt={props.original_title}/>
            <div>
                <div>original_title: {props.original_title}</div>
                <div>release_date: {props.release_date}</div>
            </div>
        </div>
    )
}

export default Pelicula;
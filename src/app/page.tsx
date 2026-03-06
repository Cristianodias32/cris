import {Sobre} from "./components/{parts}/sobre";
import {Projetos} from "./components/{parts}/projetos";

export default function Home() {
  return (

    <div className="container-index">
      <Sobre/>
      <Projetos/>

    </div>

  );
}

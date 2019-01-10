import React, {Component} from "react";
import Header from "./componentes/Header";
import Noticias from "./componentes/Noticias";
import Formulario from "./componentes/Formulario";

class App extends Component {
  state = {
    noticias: []
  };
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = "general") => {
    let urlConsulta = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=3337cb38898c4e27878ee373df83fc42`;

    fetch(urlConsulta)
      .then(res => {
        return res.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        });
      });
  };
  render() {
    return (
      <div className='contenedor-app'>
        <Header titulo='Noticias' />
        <div className='container white contenedor-noticias'>
          <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }

  //metodos
}

export default App;

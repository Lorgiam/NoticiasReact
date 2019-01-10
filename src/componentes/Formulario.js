import React, {Component} from "react";
import PropTypes from "prop-types";

class Formulario extends Component {
  //creando refs del formulario
  categoriaRef = React.createRef();
  buscarNoticias = e => {
    //previniendo recarga de la pagina
    e.preventDefault();
    //creando objeto de consulta
    //const categoria = this.categoriaRef.current.value;

    //enviado props al componente padre
    this.props.consultarNoticias(this.categoriaRef.current.value);
  };
  render() {
    return (
      <div className='buscador row'>
        <div className='col s12 m8 offset-m2'>
          <form onSubmit={this.buscarNoticias}>
            <h2>Noticias por Categoria</h2>
            <div className='input-field col s12 m8'>
              <select ref={this.categoriaRef} name='' id='categoria'>
                <option defaultValue>General</option>
                <option value='business'>Negocios</option>
                <option value='entertainment'>Entretenimiento</option>
                <option value='health'>Salud</option>
                <option value='science'>Ciencia</option>
                <option value='sports'>Deportes</option>
                <option value='technology'>Tecnologia</option>
              </select>
            </div>
            <div className='input-field col s12 m4 enviar'>
              <button
                type='submit'
                className='waves-effect waves-light btn amber darken-2'
                id='buscar'>
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};

export default Formulario;

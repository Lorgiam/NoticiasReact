import React, {Component} from "react";
import PropTypes from "prop-types";

class Noticia extends Component {
  render() {
    const {description, title, url, urlToImage, source} = this.props.noticia;
    const imagen = urlToImage ? (
      <div className='card-image'>
        <img src={urlToImage} alt={title} />
        <span className='card-title'>{source.name}</span>
      </div>
    ) : (
      ""
    );
    return (
      <div className='col s12 m6 l4'>
        <div className='card'>
          {imagen}
          <div className='card-content'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className='card-action'>
            <a
              className='waves-effect waves-light btn'
              href={url}
              target='_blank'
              rel='noopener noreferrer'>
              Leer
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
};
export default Noticia;

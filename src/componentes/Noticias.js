import React, {Component} from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";
import {TransitionGroup, CSSTransition} from "react-transition-group";

class Noticias extends Component {
  render() {
    const noticias = this.props.noticias;
    return (
      <div className='row'>
        <TransitionGroup>
          {Object.keys(noticias).map(key => (
            <CSSTransition key={key} classNames="fade" timeout={500}>
              <Noticia key={key} noticia={noticias[key]} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

Noticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default Noticias;

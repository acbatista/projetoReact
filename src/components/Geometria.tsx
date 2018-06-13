import * as React from 'react';
import * as PropTypes from 'prop-types';

const styles = {

   geometria: {
      width: '50px',
      height: '50px',
      border: '1px solid #ff0000',
      margin: '50px',
      textAlign: 'center',
      lineHeight: '50px'
   },

   circulo: {
      borderRadius: '50px'
   }
};

export interface Props {
   tipo: 'ciculo' | 'cubo';
}

/**
 * Consumer de contexto
 */
export default class Geometria extends React.Component<Props> {

   static contextTypes = {
      corDeFundo: PropTypes.string,
      corDoTexto: PropTypes.string,
   };

   context: {
      corDeFundo: string,
      corDoTexto: string,
   };

   render() {
      const style = {
         ...styles.geometria,
         ...(this.props.tipo === 'ciculo' ? styles.circulo : {}),

         // Obtém a cor de fundo do Tema
         color: this.context.corDoTexto,
         backgroundColor: this.context.corDeFundo
      };

      return (
         <div style={style} >
            {this.props.tipo}
         </div>
      );
   }
}

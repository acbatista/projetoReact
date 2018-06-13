import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface Props {
   /**
    * Define o tema usado
    */
   nome: 'claro' | 'escuro';
}

/**
 * Provider de contexto
 */
export default class Tema extends React.Component<Props> {

   // Informa a estrutura do contexto que este componente expoe
   // Usa o PropTypes, portanto, a validação é runtime, não em tempo de digitação|compilação
   static childContextTypes = {
      corDeFundo: PropTypes.string,
      corDoTexto: PropTypes.string
   };

   getChildContext() {
      return {
         corDeFundo: this.props.nome === 'claro' ? '#CCC' : '#000',
         corDoTexto: this.props.nome === 'claro' ? '#000' : '#FFF'
      };
   }

   render() {
      // Não renderiza nada, apenas os filhos
      return this.props.children;
   }
}

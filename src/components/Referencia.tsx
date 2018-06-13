import * as React from 'react';

class OutroComponente extends React.Component {

   state = {
      titulo: 'Texto inicial'
   };

   atualizarEstado() {
      this.setState({
         titulo: 'Texto modificado em ' + (new Date().toISOString())
      });
   }

   render() {

      return (
         <div >
            {this.state.titulo}
         </div>
      );
   }
}

export default class Referencia extends React.Component {

   render() {

      return (
         <div >
            <input
               ref={(input: HTMLInputElement) => {
                  if (input) {
                     console.log('referencia do input', input);
                     input.value = (new Date().toISOString());
                  }
               }}
            />

            <OutroComponente
               ref={(componente: OutroComponente) => {
                  if (componente) {
                     console.log('referencia do OutroComponente', componente);
                     // Invoca método da instancia ATUAL do componente
                     componente.atualizarEstado();
                  }
               }}
            />
         </div>
      );
   }
}

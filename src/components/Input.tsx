import * as React from 'react';

export interface Props {
   valor: string;
   upper?: boolean;
   aoModificar: (valor: string) => void;
}

export default class Input extends React.Component<Props> {

   render() {
      return (
         <input
            value={this.props.valor}
            onChange={(event) => {
               let valor = event.currentTarget.value;
               if (this.props.upper) {
                  valor = valor.toUpperCase();
               }
               this.props.aoModificar(valor);
            }}
         />
      );
   }
}

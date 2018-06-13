import * as React from 'react';

export interface Props {
   contador: number;
}

export interface State {
}

export default class CicloVidaUpdateProps extends React.Component<Props, State> {

   componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {
      console.log('======================================================================================');
      console.log('CicloVidaUpdateProps.componentWillReceiveProps()', nextProps.contador);
   }

   shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
      console.log('CicloVidaUpdateProps.shouldComponentUpdate()', nextProps.contador);

      // Somente renderiza o componente quando o valor recebido é par
      const numeroPar = nextProps.contador % 2 === 0;
      return numeroPar;
   }

   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
      // ATENÇÃO! Você NÃO PODE invocar o setState aqui
      console.log('CicloVidaUpdateProps.componentWillUpdate()', nextProps.contador);
   }

   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<Props>, prevContext: any) {
      // NÃO é invocado no primeiro render (ver CicloVidaMontagem.tsx -> componentDidMount)
      console.log('CicloVidaUpdateProps.componentDidUpdate()', prevProps.contador);
   }

   render() {
      console.log('CicloVidaUpdateProps.render()');
      return (
         <div>
            CicloVidaUpdateProps: Contador Externo: {this.props.contador}
         </div>
      );
   }
}

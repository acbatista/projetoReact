import * as React from 'react';

export interface Props {
   contador: number;
}

export interface State {
   contador: number;
}

export default class CicloVidaUpdateState extends React.Component<Props, State> {

   constructor(props: Props) {
      super(props);

      this.state = {
         contador: this.props.contador
      };
   }

   componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {
      console.log('======================================================================================');
      console.log('CicloVidaUpdateState.componentWillReceiveProps()', nextProps.contador);

      this.setState({
         // O contador interno é o extrno + 3
         contador: nextProps.contador + 3
      });
   }

   shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
      console.log('CicloVidaUpdateState.shouldComponentUpdate()', this.state.contador);

      // Somente renderiza o componente quando o valor DO ESTADO é par
      const numeroPar = this.state.contador % 2 === 0;
      return numeroPar;
   }

   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
      // ATENÇÃO! Você NÃO PODE invocar o setState aqui
      console.log('CicloVidaUpdateState.componentWillUpdate()', this.state.contador);
   }

   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<Props>, prevContext: any) {
      // NÃO é invocado no primeiro render (ver CicloVidaMontagem.tsx -> componentDidMount)
      console.log('CicloVidaUpdateState.componentDidUpdate()', this.state.contador);
   }

   render() {
      console.log('CicloVidaUpdateState.render()');
      return (
         <div>
            CicloVidaUpdateState: Contador Externo: {this.props.contador}
            <br />
            CicloVidaUpdateState: Contador Interno: {this.state.contador}
         </div>
      );
   }
}

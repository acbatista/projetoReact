import * as React from 'react';

export default class CicloVidaMontagem extends React.Component {

   componentWillMount() {
      alert('CicloVidaMontagem.componentWillMount()');
   }

   componentDidMount() {
      alert('CicloVidaMontagem.componentDidMount()');
   }

   render() {
      alert('CicloVidaMontagem.render()');
      return (
         <div>
            CicloVidaMontagem
         </div>
      );
   }
}

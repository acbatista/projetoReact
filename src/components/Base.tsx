import * as React from 'react';

const styles = {

};

export interface Props {
   /**
    * Descrição name
    */
   name?: string;
}

export interface State {

}

export default class Base extends React.Component<Props, State> {

   state = {

   };

   constructor(props: Props) {
      super(props);
   }

   render() {
      return (
         <div style={styles}/>
      );
   }
}

// function teste() {
//    return <Base />
// }

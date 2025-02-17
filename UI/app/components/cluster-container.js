import React, { Component } from 'react';
// import createPalette from '@material-ui/styles/createPalette';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';


import muiLMSTheme from '../muiLMSTheme';

const muiTheme = createMuiTheme(muiLMSTheme)


import ClusterView from './cluster-view';

export default class ClusterContainer extends Component {
  render() {
    return (
     <div id="maincontainer" style={{height:"calc(100%)",  backgroundSize: "52%",backgroundAttachment:"fixed", backgroundColor:"grey", paddingTop:10,paddingBottom:10, minWidth:1200}}>
       <MuiThemeProvider theme={ muiTheme }>
         <ClusterView {...this.props} />
       </MuiThemeProvider>
     </div>
    );
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import './index.css';
import history from './history.js'
import store from './store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import GndApp from './components/gnd-app';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './mui-theme.js';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    	<MuiThemeProvider theme={theme}>
      	<GndApp/>
      </MuiThemeProvider>
    </ConnectedRouter>  	
  </Provider>,
  document.getElementById('root')
);
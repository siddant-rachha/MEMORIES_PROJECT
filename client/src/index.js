import React from 'react';
import ReactDom from 'react-dom'
import { StyledEngineProvider } from "@mui/material";

import App from './App';

ReactDom.render(<StyledEngineProvider injectFirst><App/></StyledEngineProvider>, document.getElementById('root'));
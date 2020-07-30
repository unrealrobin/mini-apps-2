import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'


ReactDOM.render(<App url={'http://localhost:3000/events'} author={'robin'} perPage={10}/>, document.getElementById('app'));
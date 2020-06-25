import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../../../Downloads/mern-exercise-tracker-mongodb-master/mern-exercise-tracker-mongodb-master/src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

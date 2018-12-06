import React from 'react';
import ReactDOM from 'react-dom';
import SideModule from './SideModule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideModule />, div);
  ReactDOM.unmountComponentAtNode(div);
});

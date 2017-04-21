import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mockMedia from '../../mockLocalStorage';

let media = mockMedia();

beforeEach(()=>{
  localStorage.setItem('mediaCollection', JSON.stringify(media));
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

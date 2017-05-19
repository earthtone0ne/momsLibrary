import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mockLocalStorage from '../../mockLocalStorage';
import ItemList from '../ItemList/ItemList'

let media = mockLocalStorage();
localStorage.setItem('mediaCollection', JSON.stringify(media));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('ItemList renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemList allMedia={media} addMediaItem={()=>console.log('add')} removeMediaItem={()=>{console.log('remove')}} />, div)
});

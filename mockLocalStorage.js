function mockMedia(){

  function MediaItem(author, title, format, readDate) {
    return {author, title, format, readDate};
  }

  let mediaCollection = [];

  mediaCollection[0] = MediaItem('Douglas Adams', 'So Long and Thanks for All the Fish', 'book', '1995-03-02');
  mediaCollection[6] = MediaItem('Madeleine L\'Engle', 'And Both Were Young', 'book', '1994-09-14');
  mediaCollection[2] = MediaItem('Gabriel Garcia Marquez', 'Amor en Tiempos de Colera', 'book', '2000-05-24');
  mediaCollection[3] = MediaItem('Bob Smith', 'My Life and Times','book', '2016-04-01');
  mediaCollection[4] = MediaItem('A Lady','Gone With the Wind',  'movie', '2013-11-19');
  mediaCollection[5] = MediaItem('various','Marley and Me', 'movie', '2014-06-21');
  mediaCollection[1] = MediaItem('the Muppets', 'The Muppet Movie',  'movie', '2016-08-11');

  // localStorage.setItem('mediaCollection', JSON.stringify(mediaCollection))
  return mediaCollection;
}
export default mockMedia;

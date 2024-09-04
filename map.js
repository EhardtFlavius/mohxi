mapboxgl.accessToken = 'pk.eyJ1IjoiemVyb2xvdmU5MCIsImEiOiJjbTBuMGN1M3EwOG9kMnJxc3o0MmRsOHExIn0.R4zKDQDEVyW30bZMpWmCKQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [21.2087, 45.7489],  // Coordonatele pentru Timișoara
  zoom: 10  // Nivelul de zoom inițial
});
map.addControl(new mapboxgl.NavigationControl());
var marker = new mapboxgl.Marker()
  .setLngLat([21.2087, 45.7489])
  .addTo(map);
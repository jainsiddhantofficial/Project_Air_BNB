mapboxgl.accessToken =mapToken;
  const map = new mapboxgl.Map({
      container: "map", 
      center: listing.geometry.coordinates, 
      zoom: 9 ,
  });

  const marker = new mapboxgl.Marker({ color: 'red'})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({offset: 25})
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location Provided After Booking</p>`)
  .setMaxWidth("300px"))
  .addTo(map);

// module.exports=COORDINATES=listing.geometry.coordinates;
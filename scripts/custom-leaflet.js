'use strict';

var zoom = 5;
var map = L.map("map", {
  crs: L.CRS.Simple,
  zoom: zoom,//zoom
  zoomSnap: .2,//.2
  zoomDelta: .2,//.2
  maxZoom: 5,//5
  minZoom: 1,
});

var imageUrl = "images/Map10.svg"; //"images/Map10.svg"
var img = new Image();

img.onload = function () {
  var h = img.height;
  var w = img.width;
  var southWest = map.unproject([-w, h], zoom);
  var northEast = map.unproject([w, -h], zoom);
  var bounds = new L.LatLngBounds(southWest, northEast);

  L.imageOverlay(imageUrl, bounds).addTo(map);
  map.setMaxBounds(bounds);
  map.fitBounds(bounds);
};

img.src = imageUrl;

// ////////////////////////////////////////////////////////////////////////////////////
var fillOpacity = 0;//.4
var weight = 0;
var opacity = 0;//.05
var color = '#fff';
var className = 'tippy';

function getItems(items) {
  try {
    for (let i = 0; i < items.length; i++) {
      if (items[i].img === null) {
        items[i].img = '';
      }

      L.polygon(eval(items[i].coord), {
        color: color,
        fillOpacity: fillOpacity,
        weight: weight,
        opacity: opacity,
        className: className,
      }).bindTooltip(`<div class="scheme-map-window">
                     <img src='${items[i].img}' class="scheme-map-window-logo">
                     <h2 class="scheme-map-window-title">${items[i].name}</h2>
                     <div class="scheme-map-window-text">${items[i].descriptin}</div>
                   </div>`, { sticky: true, }).on('click', function () {
        document.location.href = items[i].url
      }).addTo(map);
    }

  } catch (e) {
    console.log();
  }
}

getItems(scheme_items);


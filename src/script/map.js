let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [45.035470, 38.975313],
    zoom: 12,
    controls: []
  });

  const coords = [    
    [45.060042, 39.050266],
    [44.996943, 38.932222],
    [45.075738, 38.899746],
    [45.030766, 38.985888]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/icons/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
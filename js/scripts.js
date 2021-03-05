const convertGL = function(volume) {
  return volume * 3.785;
};

const volumeGallons = parseInt(prompt("Enter volume in gallons:"))

alert((volumeGallons + " gallons is equal to " + convertGL(volumeGallons) + " liters"));
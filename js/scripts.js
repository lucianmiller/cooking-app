const convertGL = function(volume) {
  return volume * 3.785;
};

$(document).ready(function() {
  $("form#convert").submit(function(event) {
    event.preventDefault();
    const volume = parseInt($("#volumeGallons").val());
    const result = convertGL(volume);
    $("#output").text(result);
  });
});
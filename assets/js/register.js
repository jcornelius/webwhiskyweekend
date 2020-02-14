$(function() {

  var imgurl = "/assets/img/rooms/"
  updateRoomData();

  $("#room").change(function() {
    updateRoomData();
  });
  $("#room-info-nav .nav-link").click(function(e) {
    e.preventDefault();
    $(".nav-link").removeClass('active');
    $(this).addClass('active');
    $('.room-image').hide();
    $("#" + $(this).data("image")).show();
  });

  function updateRoomData(){
    $("#room-photo").attr('src',imgurl + $("#room").val() + '.jpg?raw=true');
    $("#room-location").attr('src', imgurl + $("#room").val() + '-location.png?raw=true');
    $("#book-button").val('Book This for $' + $("#room").find(':selected').data("rate"));
  }

});

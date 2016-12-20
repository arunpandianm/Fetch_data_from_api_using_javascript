$(function(){
  $.ajax({
    type: 'GET',
    //url: 'https://api.gitter.im/v1/rooms?access_token=ae28f23f134c4364ad45e7b7355cfa91c92038bb',
    url: 'https://api.gitter.im/v1/rooms/570a5925187bb6f0eadebf05/users?access_token=ae28f23f134c4364ad45e7b7355cfa91c92038bb&limit=380',
    success: function(data){
      //console.log('success', data);
      $.each(data, function(i, list){
        $('.myList').append('<li>name: ' + list.username + '<br/>Avatar: '+ list.avatarUrl + '</li><br/><br/>');
      });
    }
  });
});

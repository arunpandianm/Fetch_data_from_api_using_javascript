$(function(){
  $updateButton = $('#updateButton');
  $myList = $('.myList');

  $updateButton.click(function(){
for($i = 0 ; $i < 10 ; $i++)
    {
      if($i == 0)
      $skip = "no";
      else
      $skip = $i * 100;
    $.ajax({
      type: 'GET',
      url: 'https://api.gitter.im/v1/rooms/570a5925187bb6f0eadebf05/users?access_token=ae28f23f134c4364ad45e7b7355cfa91c92038bb&limit=100&skip=' + $skip,
      success: function(data){
        $.each(data, function(i, list){
          $myList.append('<li><table><tr><td><img src = "' + list.avatarUrl + '" alt = "avatar or profile picture of Gitter user" width=128 height=128></td><td><td><p class = "left-align" >User ID : </p><p class = "left-align" >User Name : </p><p class = "left-align" >Role : </p></td><td><p>' + list.id + '</p><p>' + list.username + '</p><p>' + list.role + '</p></td></td></tr></table><hr></li>');
      });
      }
      });
    }

  });
});

$(document).ready(function () {
  $('.change-devour').on('click', function (event) {
      const burgerId = $(this).attr('data-id');
      const newdevoured = $(this).attr('data-newdevoured');
      const burger = {
          id: burgerId,
          devoured: newdevoured
      };
      console.log('burgerid: ', burgerId);
      $.ajax('/api/burger/' + burgerId, {
          method: 'PUT',
          data: burger
      }).then(res => {
          location.reload();
      });
  });

  $('.delete-burger').on('click', function (event) {
      const burgerId = $(this).attr('data-id');

      $.ajax('/api/burger/' + burgerId, {
          method: 'DELETE',
      }).then(res => {
          console.log('DELETED burger ' + burgerId);
          location.reload();
      });
  });
});
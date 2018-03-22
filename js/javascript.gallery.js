$("#searchQuery").keyup(function(){

  // input field value for filtering
  var filter = $(this).val().toLowerCase();

  // if filter does not equal attribute: hide thumbnail
  if (filter !== "") {
    $('.gallery-image').hide();
    $('.gallery-image').each(function(){
      var title = $(this).find('a').attr('data-title').toLowerCase();

      // if filter does equal attribute: show thumbnail
      if (title.indexOf(filter) >= 0) {
        $(this).show();
      }
    })
  } else {
    $('.gallery-image').show();
  }
});

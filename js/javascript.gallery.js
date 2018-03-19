$("input[type='search']").change( function () {
    // input field value for filtering
    var filter = $(this).val();
    // if filter equals : show thumbnail, if false: hide thumbnail
    if ($('.gallery-image-thumbnail').contains() === filter) {
      console.log('Hello');
    } else {
      $('.gallery-image-thumbnail').hide();
    };
    console.log("Hiya");
  }).keyup( function () {
    // call the above change event after every letter typed
    $(this).change();
  });


// notes
$(input).change( function () {
    var filter = $(this).val();
    if (filter) {
      $(list).find("a:not(:contains(" + filter + "))").parent().slideUp();
      $(list).find("a:contains(" + filter + ")").parent().slideDown();
    } else {
      $(list).find("li").slideDown();
    }
  });
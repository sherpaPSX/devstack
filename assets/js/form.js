$( document ).ready(function() {

  if($('#jine').on('change', function(){
      if($('#jine').is(':checked')){
        $('#input-others').focus();
      }
  }));

  $("#form-section-1 input[type='checkbox']").change(function () {
        var maxAllowed = 3;
        var cnt = $("input[type='checkbox']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            $('#form-section-1 .alert').slideDown();
        }else {
            $('#form-section-1 .alert').slideUp('fast');
        }
    });

  $('#input-others').on('focus', function() {
    $('#jine').prop( "checked", true );
  });

  if($('#any').on('change', function(){
      if($('#any').is(':checked')){
        $('.cbd').attr('disabled', true);
        $('.cbd').prop( "checked", false );
      }else {
          $('.cbd').attr('disabled', false);
      }
  }));


});

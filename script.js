function init(){

$('#tag').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('bgcolor')
  $('#livre').toggleClass('bloc3hide')
  })
}

$(function () {
  $('.checkall').change(function () {
    $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
  });
  $('.j-checkbox').change(function () {
    if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
      $('.checkall').prop('checked', true);
    } else {
      $('.checkall').prop('checked', false);
    }
  });
});

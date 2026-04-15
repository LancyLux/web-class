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
  $('.increment').click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings('.itxt').val();
    n++;
    $(this).siblings('.itxt').val(n);
  });
  $('.decrement').click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings('.itxt').val();
    if (n == 1) {
      return false;
    }
    n--;
    $(this).siblings('.itxt').val(n);
  });
});

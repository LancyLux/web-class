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
    // 以下是新增代码
    var p = $(this).parents('.p-num').siblings('.p-price').html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);  // 将计算结果保留2位小数
    $(this).parents('.p-num').siblings('.p-sum').html('¥' + price);
  });
  $('.decrement').click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings('.itxt').val();
    if (n == 1) {
      return false;
    }
    n--;
    $(this).siblings('.itxt').val(n);
    // 将“+”按钮中新增的代码复制到此处即可
    var p = $(this).parents('.p-num').siblings('.p-price').html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);  // 将计算结果保留2位小数
    $(this).parents('.p-num').siblings('.p-sum').html('¥' + price);
  });
  $('.itxt').change(function () {
    // 先得到文本框的里面的值，然后乘以当前商品的单价
    var n = $(this).val();
    // 当前商品的单价
    var p = $(this).parents('.p-num').siblings('.p-price').html();
    p = p.substr(1);
    var price = (p * n).toFixed(2);
    $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
  });
});

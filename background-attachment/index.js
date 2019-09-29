var $list = document.querySelector('.list-inner')
document.querySelector('.btn').addEventListener('click', function () {
  if ($list.classList.contains('width-half')) {
    $list.classList.remove('width-half')
  } else {
    $list.classList.add('width-half')
  }
}, false)
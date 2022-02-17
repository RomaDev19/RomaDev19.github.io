var hiddenSocialBlock = document.getElementsByClassName(
  'hidden-block-social'
)[0];
var hiddenSocial = document.getElementsByClassName('hidden-social')[0];

var vectorDown = document.getElementsByClassName('vectorDown')[0];
var vectorRight = document.getElementsByClassName('vectorRight')[0];

vectorRight.style.display = 'none';
hiddenSocial.style.display = 'none';

vectorDown.onclick = function () {
  hiddenSocial.style.display = 'flex';
  vectorDown.style.display = 'none';
  vectorRight.style.display = 'flex';
  hiddenSocialBlock.style.right = '-10px';
};
vectorRight.onclick = function () {
  hiddenSocial.style.display = 'none';
  vectorDown.style.display = 'flex';
  vectorRight.style.display = 'none';
  hiddenSocialBlock.style.right = '-283px';
};

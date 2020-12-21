$(document).ready(() => {
  if (!$.cookie("bs-alert_hide")) {
    $('#bs-alert').removeClass('hide');
    $('#bs-alert').on('closed.bs.alert', () => $.cookie("bs-alert_hide", true, { expires: 1, path: '/' }));
  }
});

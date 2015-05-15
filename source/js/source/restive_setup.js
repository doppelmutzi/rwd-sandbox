$(document).ready(function() {
    $('body').restive({
      breakpoints: ['768', '991', '1199', '10000'],
      classes: ['css_xs', 'css_sm', 'css_md', 'css_lg'],
      turbo_classes: 'is_mobile=mobile,is_phone=phone,is_tablet=tablet,is_non_mobile=non-mobile,is_portrait=view-p,is_landscape=view-l',
      force_dip: true,
      onAddClass: function(name) { $('body').trigger('restiveUpdateClass', name); }         
    });
});
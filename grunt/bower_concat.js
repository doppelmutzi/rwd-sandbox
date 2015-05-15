module.exports = {
  all : {
    dest: '<%= paths.src.js_lib %>/_bower.js',
    include: [
        'jquery',
        'restive'
    ],
    exclude: [
        'bootstrap-sass-official'
    ]
  }
     
};
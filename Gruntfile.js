module.exports = function(grunt) {
    var paths = {
        src: {
            bower: 'bower_components',
            'public': 'public',
            'export': 'public/export',
            css: 'source/css',
            fonts: 'source/fonts',
            js: 'source/js/source',
            js_lib: 'source/js/lib'
        },
        dest: {
            css: 'source/css',
            fonts: 'source/fonts',
            js: 'source/js',
            html: 'public/patterns',
            images: 'public/images',
            patterns: 'source/_patterns'
        },
        app: {
            css: 'public/export/css',
            fonts: 'public/export/fonts',
            js: 'public/export/js',
            html: 'public/export/patterns',
            images: 'public/export/images'
        }
    };
    require('load-grunt-config')(grunt, {
        config: {
            paths: paths
        }
    });

};
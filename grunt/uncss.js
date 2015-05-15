module.exports = {

    "dest": {
    	options: {
    		/* use this stylesheet */
    		stylesheets : [
    			"../../../css/style.css"
    		],
        ignore: [
           /.css_xs*/,
           /.css_sm*/,
           /.css_md*/,
           /.css_lg*/,
           /.phone*/,
           /.tablet*/
        ],
        timeout : 2000
    	},
    	src: ['<%= paths.app.html %>/03-templates-00-basic-grid-system/03-templates-00-basic-grid-system.html'],
    	dest: '<%= paths.app.css %>/cleaned-style.css'
	}
    
};
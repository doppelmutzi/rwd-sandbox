module.exports = {

    "dest": {
    	options: {
    		/* ignore stylesheets */
    		stylesheets : [
    			"../../../styleguide/css/styleguide.css",
    			"../../../styleguide/css/styleguide-specific.css",
    		]
    	},
    	src: ['<%= paths.app.html %>/03-templates-00-basic-grid-system/03-templates-00-basic-grid-system.html'],
    	dest: '<%= paths.app.css %>/cleaned-style.css'
	}
    
};
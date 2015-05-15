module.exports = {
	dest: {
	  	options: {
            mangle: false,
            beautify: true,
            preserveComments: 'all'
        },
		files: [
			{
				expanded: true,
	            "src": 
	            	[
	            		"<%= paths.src.js_lib %>/_bower.js", 
	            		"<%= paths.src.js %>/restive_setup.js"
					],
	      		"dest": "<%= paths.dest.js %>/app.js"
        	}
        ]
	},
	prod: {	  	
		options: {
      		compress: {
        		global_defs: {
          			"DEBUG": false
        		},
        		dead_code: true
      		},
      		beautify: false,
      		removeComments: true,
        	collapseWhitespace: true
    	},
		files: [
			{
				"src": 
	            	[
	            		"<%= paths.src.js_lib %>/_bower.js", 
	            		"<%= paths.src.js %>/restive_setup.js"
					],
	      		"dest": "<%= paths.app.js %>/app.js"
        	}
        ]
	}
};

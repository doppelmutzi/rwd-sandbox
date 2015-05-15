module.exports = {
	dest : {
		options: {
          compatibility: 'ie8',
          keepSpecialComments: 0
        },
        files: {
          '<%= paths.dest.css %>/style.min.css': '<%= paths.dest.css %>/style.css'
        }
	},
	app : {
		options: {
          compatibility: 'ie8',
          keepSpecialComments: 0
        },
        files: {
          '<%= paths.app.css %>/cleaned-style.min.css': '<%= paths.app.css %>/cleaned-style.css'
        }
	}  
};

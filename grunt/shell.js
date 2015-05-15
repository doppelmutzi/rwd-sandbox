module.exports = {
  patternlab: {
    options: {
      stdout: true
    },
    command: 'php core/builder.php -g'
  },
  empty_folder_public: {
  	options: {
      stdout: true
    },
    command: 'rm -rf <%= paths.src.public %>/*'
  },
  empty_folder_export: {
  	options: {
      stdout: true
    },
    command: 'rm -rf <%= paths.src.export %>/*'
  },
  copy_over_styleguide: {
  	options: {
      stdout: true
    },
    command: 'cp -r core/styleguide/ <%= paths.src.public %>'
  },
	copy_over_style_to_public: {
		options: {
			stdout: true
		},
		command: 'cp -r source/css/style.css <%= paths.src.public %>/css/style.css'
	},
	copy_over_js_to_public: {
		options: {
			stdout: true
		},
		command: 'cp -r source/js/app.js <%= paths.src.public %>/js/app.js'
	}  


};

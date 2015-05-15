module.exports = {
    all: {
        files: ['<%= paths.app.js %>/app.js'],
        options: {
            // an array of method names to remove 
            methods: ['log', 'info', 'debug', 'assert'], 
            
            // replacement strategy 
            strategy: function(consoleStatement) {
                return ''; // to remove  
            }
        }
    }
};
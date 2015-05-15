module.exports = {
    "css": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dest.css %>",
            "src": ["style.css"],
            "dest": "<%= paths.app.css %>"
        }]
    },
    "fonts": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dest.fonts %>",
            "src": ["**/*"],
            "dest": "<%= paths.app.fonts %>"
        }]
    },
    "js": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dest.js %>",
            "src": ["app.js"],
            "dest": "<%= paths.app.js %>"
        }]
    },
    "html": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dest.html %>",
            "src": ["**/*.html"],
            "dest": "<%= paths.app.html %>"
        }]
    },
    "images": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dest.images %>",
            "src": ["**/**"],
            "dest": "<%= paths.app.images %>"
        }]
    }
};
module.exports = {
    "dev": {
        "options": {
            "sassDir": "<%= paths.src.css %>",
            "cssDir": "<%= paths.dest.css %>",
            "require": [
                "sass-globbing"
            ]
        }
    }
};
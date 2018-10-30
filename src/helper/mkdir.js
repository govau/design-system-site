const Fs = require("fs");

module.exports = {
    /**
     * Recursivly create a directory ( including the parent ), given a pathname
     * @param { String } path - Path of new directory
     * @see https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback
     */
    CreateDirectory: function( path ) {
        if (!Fs.existsSync(path)) {
            Fs.mkdirSync( path, { recursive: true }, ( error ) => {
                if (error) throw error;
              });
        }
        console.log(`Directory ${path} already exists, no need to create...`)
    }
}

// Given the first argument e.g "node this-script.js /path/to/create"
module.exports.CreateDirectory(process.argv[2]);

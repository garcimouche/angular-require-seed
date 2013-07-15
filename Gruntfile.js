module.exports = function (grunt) {
    var distDir = 'dist/',httpServerPort=9001;
    /*build directory*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //clean up destination dir
        clean: {
            clean: [distDir]
        },
        connect: {
            options: {
                hostname: "localhost",
                base: "."
            },
            server: {
                options: {
                    port: httpServerPort
                }
            }
        },
        karma: {
            ci_unit: {
                configFile: 'karma.unit.conf.js',
                browsers:['PhantomJS'],
                singleRun:true
            },
            ci_e2e: {
                configFile: 'karma.e2e.conf.js',
                browsers:['PhantomJS'],
                singleRun:true
            }
        }
    });

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('build', ['clean','connect:server','karma:ci_unit','karma:ci_e2e']);
    //run this to start up a local http server on current directory
    grunt.registerTask('dev', ['connect:server:keepalive'])

    grunt.registerTask('default', function () {
        var blue = '\033[34m', reset = '\033[0m', green = '\033[32m', cyan = '\033[36m';
        console.log("\n\n");
        console.log(blue + "Welcome to the angular-requirejs-seed grunt build file\n");
        console.log(reset + "The following grunt tasks are available:");
        console.log(reset + "****************************************\n");
        console.log(green + "build:\t\t"+ cyan + "This task builds the entire application. Directory "  + distDir + " will be available for distribution\n");
        console.log(green + "dev:\t\t"+ cyan + "This will start a local http server listening on port " + httpServerPort + ". This is very handy at development time.");
        console.log("\n\n");
        console.log(reset + "Example:");
        console.log(reset + "********\n");
        console.log(blue + "grunt build");

    });


};

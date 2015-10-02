/**
 * Created by root on 10/2/15.
 */
'use strict';

module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            index: {
                files: {
                    'public/stylesheets/main.css': 'public/stylesheets/main.scss'

                }
            }
        }


    });
    //Load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Grunt tasks
    grunt.registerTask('build',['sass']);
    grunt.registerTask('default',['build']);


};
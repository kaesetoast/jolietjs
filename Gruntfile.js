module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['src/**/*.js', 'test/**/*.js', '!src/_foot.js', '!src/_head.js']
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'src',
                    cssDir: 'dist',
                    outputStyle: 'compressed'
                }
            }
        },

        concat: {
            dist: {
                src : [
                    'src/_head.js',
                    'src/main.js',
                    'src/_foot.js'
                ],
                dest: 'dist/joliet.js'
            }
        },

        uglify: {
            all: {
                files: {
                    'dist/joliet.min.js': 'dist/joliet.js'
                }
            }
        },

        jsbeautifier: {
            files: ['dist/joliet.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        watch: {
            js: {
                files: ['src/*.js', 'demo/*.html'],
                tasks: ['jshint', 'concat', 'jsbeautifier', 'uglify']
            },
            css: {
                files: ['src/*scss'],
                tasks: ['compass']
            },
            options: {
                livereload: 35729
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['jshint', 'concat', 'jsbeautifier', 'uglify', 'watch']);

};
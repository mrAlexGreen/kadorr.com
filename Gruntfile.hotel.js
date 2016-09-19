module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    uglify: {
      start: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },

    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['images/sprite_hotel/*.svg']
        }]
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false,
        svg: {
          style: 'display:none',
        },
        cleanup: [
          'fill',
        ],
      },
      default : {
        files: {
          'images/sprite_hotel.svg': ['images/sprite_hotel/*.svg'],
        },
      },
    },

    watch: {
      livereload: {
        options: { livereload: true },
        files: ['build/**/*'],
      },
      scripts: {
        files: ['js/script.js'],
        tasks: ['js'],
        options: {
          spawn: false
        },
      },
      images: {
        files: [
          'images/sprite_svg/*.svg'
        ],
        tasks: ['images'],
        options: {
          spawn: false
        },
      },
      html: {
        files: ['./building.html'],
        // tasks: ['html'],
        options: {
          spawn: false
        },
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'images/sprite.svg',
            './building.html',
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./",
          },
          startPath: "building.html",
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }

  });




  grunt.registerTask('default', [
    'js',
    'images',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('js', [
    'uglify',
  ]);

  grunt.registerTask('images', [
    'imagemin',
    'svgstore',
  ]);

};
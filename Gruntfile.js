'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // All output artifacts for packaging MUST be generated into
    // this directory.

    copy: {
      default: {
        files: [
          {
            cwd: './app/components',  // set working folder / root to copy
            src: ['**/*.html', '**/*.css'],    // copy all html and css files and subfolders
            dest: './app/dist/components',    // destination folder
            expand: true           // required when using cwd
          }
        ]
      }
    },
    
    exec: {
        tsc: {
            command: 'tsc',
            stdout: true,
            stderr: true
        } 
    }
    
});

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask( 'html', [
    'copy:default'
  ])
  

  grunt.registerTask(
    'dev',
    'Compile .ts files and copy html templates',
    [ 
      'exec:tsc',
      'copy:default' 
    ]
  );

  grunt.registerTask('default', [ 'dev' ]);
  
};
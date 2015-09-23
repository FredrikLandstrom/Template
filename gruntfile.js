module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					// 'public/js/script.js': ['dev/js/script.js']
					'public/js/script.js': ['dev/js/*.js']
				} // files
			} // my_target
		}, // uglify

		watch: {
			files: ['dev/js/*.js'],
			tasks: ['uglify']
		} // watch

	}) // initConfig
} // exports
module.exports = function (grunt) {
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		uglify: { // https://github.com/gruntjs/grunt-contrib-uglify
			dev: {
				options: {
					banner: '/* hCard Builder <%= pkg.author %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: false, // removes unused code
					sourceMap: false, // creates source map
					beautify: true, // prettifies code
					mangle: false, // changes variable and function names
					preserveComments: true
				},
				files: {
					'js/scripts.min.js': [ 
						'scripts/bootstrap.min.js',
						'scripts/scripts.js'
					]
				}
			},
			prod: {
				options: {
					banner: '/* hCard Builder <%= pkg.author %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					compress: true, // removes unused code
					sourceMap: true, // creates source map
					beautify: false, // prettifies code
					mangle: true, // changes variable and function names
					preserveComments: false
				},
				files: {
					'js/scripts.min.js': [ 
						'scripts/bootstrap.min.js',
						'scripts/scripts.js'
					]
				}
			}
		},

		compass:{ //https://github.com/gruntjs/grunt-contrib-compass
			dev:{
				options: {
					sassDir: ['sass'],
					cssDir: ['css'],
					environment: 'development',
					outputStyle: 'expanded',
					relativeAssets: true,
					sourcemap: false,
					force: true
				}
			},
			prod:{
				options: {
					sassDir: ['sass'],
					cssDir: ['css'],
					environment: 'production',
					outputStyle: 'compressed',
					relativeAssets: true,
					sourcemap: true,
					force: true
				}
			}
		},

		watch: { // https://github.com/gruntjs/grunt-contrib-watch
			/*scripts: {
				files: ['scripts/*.js'],
				tasks: ['uglify:dev']
			},*/
			compass:{
				files: ['sass/*.{scss,sass}'],
				tasks: ['compass:dev']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['watch']);
	grunt.registerTask('prod', ['compass:prod','uglify:prod']);
};

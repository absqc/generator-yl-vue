const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    prompting(){
        return this.prompt({
            type:'input',
            name:'name',
            message:'Your project name',
            default: this.appname
        }).then(answers =>{
            this.answers = answers
        })
    }
    writing(){
        const templates = [
            'README.md',
            'package.json',
            'index.html',
            '.postcssrc.js',
            '.gitignore',
            '.eslintrc.js',
            '.eslintignore',
            '.editorconfig',
            '.babelrc',
            'static/.gitkeep',
            'src/main.js',
            'src/App.vue',
            'src/router/index.js',
            'src/components/helloWorld.vue',
            'src/assets/logo.png',
            'config/dev.env.js',
            'config/index.js',
            'config/prod.env.js',
            'config/test.env.js',
            'build/build.js',
            'build/check-versions.js',
            'build/logo.png',
            'build/utils.js',
            'build/vue-loader.conf.js',
            'build/webpack.base.conf.js',
            'build/webpack.dev.conf.js',
            'build/webpack.prod.conf.js'
        ]
        templates.forEach(item=> {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}
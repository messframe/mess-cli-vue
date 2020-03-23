const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:8237' : '/mess_vue',
    chainWebpack: config => {
        config.entryPoints.clear()
        config.entry('mess_vue').add(process.env.VUE_APP_ENTRY).end()
        if (process.env.VUE_APP_CURRENTMODE === 'portal') {
            config.output.filename('mess_vue.js').library('mess_vue').libraryTarget('amd').end()
        } else {
            config.output.filename('mess_vue.js').library('mess_vue')
        }
        config.devServer.port(8237).headers({
            "Access-Control-Allow-Origin": "*",
        })
        if (process.env.VUE_APP_CURRENTMODE === 'portal') {
            config.externals(['vue', 'vue-router']);
        }
        config.module.rule('images').use('url-loader').loader('url-loader').tap(options => ({
            limit: 4096,
            fallback: {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]'
            }
            }
        }))
    },
    outputDir: path.resolve(__dirname, '../portal/build/mess_vue')
}
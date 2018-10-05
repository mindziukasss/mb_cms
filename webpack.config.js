var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('public/build/')


    // public path used by the web server to access the output path
    .setPublicPath('/build')

    /// enable sass loader
    .enableSassLoader(function (sassOptions) {
    }, {
        resolveUrlLoader: false,
    })
    .autoProvideVariables({
        Tether: 'tether'})

    .createSharedEntry('vendor', [
        'jquery/dist/jquery.js', 'bootstrap'
    ])

    .addStyleEntry('css/backend', './assets/scss/backend/app.scss')
    .addEntry('js/backend', './assets/js/backend/app.js')

    .addEntry('app', './assets/js/app.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();

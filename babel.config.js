module.exports = function (api) {
    api.cache(true);
    const presets = [
        ["@babel/preset-env"]
    ];
    const plugins = [ "./babel-plugins/plugin-change-operator" ];

    return {
        presets,
        plugins
    };
};
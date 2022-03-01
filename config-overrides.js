const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  // проверка работоспособности на локальной машине
  // npx serve -p 3001 -C -s ./build

  config.output = {
    ...config.output,
    publicPath: "auto",
    clean: true,
    crossOriginLoading: "anonymous",
  };

  const moduleFederation = new ModuleFederationPlugin({
    name: "remote",
    filename: "remoteEntry.js",
    library: { type: "var", name: "remote" },
    exposes: {
      "./RemoteApp": "./src/App",
    },
    shared: {
      "react-router-dom": {
        requiredVersion: "6.2.1",
        eager: false,
        singleton: true,
      },
      "react-dom": {
        requiredVersion: deps["react-dom"],
        eager: false,
        singleton: true,
      },
      react: {
        requiredVersion: deps.react,
        eager: false,
        singleton: true,
      },
    },
  });

  config.plugins.push(moduleFederation);

  return config;
};

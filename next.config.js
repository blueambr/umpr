const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new ESLintPlugin({
        exclude: ['.next', 'node_modules'],
        fix: true,
      }),
      new StylelintPlugin({
        configFile: '.stylelintrc',
        files: 'src/**/*.(css|s(a|c)ss)',
        fix: true,
      })
    );

    return config;
  },
};

module.exports = nextConfig;

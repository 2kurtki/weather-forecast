const { generateScopedNameFactory } = require("@dr.pogodin/babel-plugin-react-css-modules/utils");

const presets = [
	"@babel/preset-env",
	[
		"@babel/preset-react",
		{
			runtime: "automatic",
		},
	],
];

const plugins = [
	[
		"@dr.pogodin/react-css-modules",
		{
			generateScopedName: generateScopedNameFactory("[path][name]__[local]--[hash:base64:5]"),
			filetypes: {
				".scss": {
					syntax: "postcss-scss",
				},
			},
		},
	],
];

module.exports = { presets, plugins };

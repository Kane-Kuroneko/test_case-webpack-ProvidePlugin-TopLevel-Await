

export const devServerConf:DevServer = {
	port : 3000,
	
};

export const webpackDevConf:Configuration = {
	mode : 'development',
	entry : path.join( process.cwd() , 'src/index.tsx' ),
	module: {
		rules : [
			{
				test : /(t|j)sx?/i,
				use : {
					loader : 'babel-loader',
					options : babelOptions
				}
			},
		]
	},
	resolve : {
		alias : {
			'#src' : path.join(process.cwd(),'src'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	plugins : [
		new ProvidePlugin( {
			thing : [ '#src/thing' , 'thing' ] ,
		} ),
		new HtmlWebpackPlugin({
			template : 'src/index.html',
			
		}),
	],
	
}

import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';
import { ProvidePlugin  } from 'webpack';
import { babelOptions } from './babel.conf.ts';
import path from 'node:path';
import process from 'node:process';
import { Configuration as DevServer } from 'webpack-dev-server';

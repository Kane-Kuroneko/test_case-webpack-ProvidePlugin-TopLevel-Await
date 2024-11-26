import {webpack} from 'webpack';
import {devServerConf,webpackDevConf} from './webpack.dev.ts';
import WebpackDevServer from 'webpack-dev-server';


const compiler = webpack( webpackDevConf );

const server = new WebpackDevServer(devServerConf,compiler);
server.start().then(() => {
	console.log('served successfully');
}).catch(e => {
	console.log( e );
});

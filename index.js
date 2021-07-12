const express = require( 'express' );
const fs = require( 'fs' );
const app = express();
const port = 3000;

app.get( '/video', ( req, res ) => {
	const path = "video/descente.mp4";
	fs.stat( path, ( err, stats ) => {
		if ( err ) {
			console.log( 'Une erreur inattendue est arrivée!' );
			res.sendStatus( 500 );
			return;
		}
		res.writeHead( 200, {
			"Content-Length": stats.size,
			"Content-Type": "video/mp4"
		} );
		fs.createReadStream( path ).pipe( res );
	} );
} );

app.listen( port, () => {
	console.log( `Tgotube is listening on port ${ port }!` );
} );
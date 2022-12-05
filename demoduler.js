	
class Demoduler
{
	static id = 0;
	
	constructor ( file )
	{
		// if file is string, then this is fake file for debug purposes
		if( typeof file === 'string' )
		{
			this.file = {name:'test-file'};
			this.js = file;
			this.id = Demoduler.id++;
			document.getElementById( 'log' ).innerHTML += `<p class="file">test-file <span id="size-${this.id}">(${file.length} bytes)</span> <span class="error" id="error-${this.id}"></span></p>`;
			this.process( );
			return;
		}
			
		
		this.file = file;
		this.js = '';
		this.id = Demoduler.id++;
		
		document.getElementById( 'log' ).innerHTML += `<p class="file">${file.name} <span id="size-${this.id}"></span> <span class="error" id="error-${this.id}"></span></p>`;
		

		if( file.name.split( '.' ).pop( ) != 'js' )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = ` &rarr; not a <code>*.js</code> file`;
			return;
		}
		
		this.loadFile( );
		
//		this.js = js;
	} // Demoduler.constructor
	
	
	
	// request loading a file (asynchronous load)
	loadFile( )
	{
		var reader = new FileReader();
		
		reader.addEventListener( 'load', event => this.loadedFile(event) );
		reader.readAsText( this.file );
	} // Demoduler.loadFile



	// file is loaded
	loadedFile( event )
	{
		this.js = event.target.result;

		document.getElementById( `size-${this.id}` ).innerHTML = ` (${event.target.result.length} bytes)`;

		this.process( );
		
		//console.log( event.target.result );
	} // Demoduler.loadedFile
	


	// process a JS file
	process( )
	{
		console.log( this.js );
	}
	
/*
	consume( word )
	{
		var pos = this.js.indexOf( word );
		if( pos < 0 ) return;
		
		this.js = this.js.substring( pos+word.length );
	}

	consumeWS( )
	{
		for( var pos = 0; pos<this.js.length; pos++ )
		{
			if( this.js[pos] > ' ' )
				break;
		}
		
		this.js = this.js.substring( pos );
	}
	
	
	consumeToken( )
	{
		this.consumeWS( );
		
		for( var pos = 0; pos<this.js.length; pos++ )
		{
			if( this.js[pos]<' ' || this.js[pos]==',' )
				break;
		}
		
		var token = this.js.substring( 0, pos );
		
		this.js = this.js.substring( pos );
		return token;
	}
	*/
	
}
	
	
	/*
	
	function demodulize( jsm )
	{
		var js = jsm,
			token = '';
		
		js = consume( js, 'import' );
		js = consume( js, '{' );
		
		var {js,token} = consumeToken( js );
		
		console.log('imported ->',token);
		
		console.log( js );
	}
	
	
	demodulize( test_jsm );
	*/
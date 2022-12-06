	
class Demoduler
{
	static id = 0;
	
	constructor ( file )
	{
		this.NL = ''; // code for new lines (a combination of line feeds and carriage returns)
		this.tokens = [];
		this.imports = [];
		
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
	


	// validate a string wether it contains 'expected' characters
	valideText( )
	{
		for( var i=0; i<this.js.length; i++ )
		{
			var code = this.js.codePointAt( i );
			
			if( code<31 && code!=9 && code!=10 && code!=13 )
				return false;
		}

		return true;
	}
	
	
	
	// find all sequences of tokens separated by whitespace
	// returns char position {from,to}
	findTokens( tokens )
	{
		var result = [],
			pos = 0;
		
		while( pos < this.js.length )
		{
		}
	}
	
	
	
	// gets the first new line code
	getNL( )
	{
		var posCR = this.js.indexOf( '\r' ),
			posNL = this.js.indexOf( '\n' );
			
		if( 0<=posCR && posNL==posCR+1 )
			this.NL = '\r\n';
		else
		if( 0<=posNL && posCR==posNL+1 )
			this.NL = '\n\r';
		else
		if( 0<=posCR && posNL>posCR+1 )
			this.NL = '\r';
		else
		if( 0<=posNL && posCR>posNL+1 )
			this.NL = '\n';
		else
		if( 0<=posCR && posNL<0 )
			this.NL = '\r';
		else
		if( 0<=posNL && posCR<0 )
			this.NL = '\n';
	}
	
	
	
	// process imports (if any) and fill array imports
	//
	// good imports:
	// 1.   import { Material, ShaderMaterial } from 'three';
	// 2.	import * as NURBSUtils from '../curves/NURBSUtils.js';
	//		import * as THREE from 'three';
	// 3.	import lottie from '../libs/lottie_canvas.module.js';
	//
	// bad imports:
	//		throw new Error( 'THREE.MMDAnimationHelper: Import CCDIKSolver.' );
	//		// In case of cinematicCamera, having a default lens set is important
	//		// import Howl from '../../3rd_party/howler';
	//		ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
	//		var _scriptDir = import.meta.url;
	//		// Make available for import by `require()`
	
	processImports( )
	{
		for( var i=0; i<this.tokens.length; i++ )
		{
			if( this.tokens[i-1] != '//' && this.tokens[i] == 'import' )
			{
				if( this.tokens[i+1] == '{' )
					console.log( '(1)=>', this.tokens[i], this.tokens[i+1], this.tokens[i+2], this.tokens[i+3] );
				if( this.tokens[i+1] == '*' && this.tokens[i+2] == 'as' )
					console.log( '(2)=>', this.tokens[i], this.tokens[i+1], this.tokens[i+2], this.tokens[i+3] );
				if( this.tokens[i+2] == 'from' && (this.tokens[i+3][1] == "'" || this.tokens[i+3][1] == '"') )
					console.log( '(3)=>', this.tokens[i], this.tokens[i+1], this.tokens[i+2], this.tokens[i+3] );
			}
		}
	}
	
	
	// process a JS file
	process( )
	{
		if( !this.valideText( ) )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = ` &rarr; contains invalid characters`;
			return;
		}
			
		console.log( this.js );
		
		this.getNL( );
		
		this.tokens = ['',...this.js.split( /\s/ ).filter( x => x!='' ),''];
		
		console.log( this.tokens );
		this.processImports( );
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
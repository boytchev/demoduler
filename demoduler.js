	
class Demoduler
{
	static id = 0;
	
	constructor ( file )
	{
		this.tokens = [];
		this.importedSymbols = [];
		this.importedNamespaces = [];
		this.importSections = [];
		
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
	
	
	
	// get a list of tokens
	getTokens( )
	{
		var result;
		var regex = /[^\s\,\;\(\)]+|\,|\;|\(|\)/g;
		
		while( result = regex.exec(this.js) )
		{
			var start = result.index,
				end = start + result[0].length,
				string = this.js.substring( start, end );
				
			this.tokens.push({ string: string, start: start, end: end});
		}
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

	getImports( )
	{
		// 1: import { symbol, symbol, ... } from 'string';
		// 2: import * as namespace from 'string';
		// 3: import symbol from 'string';

		var i, importStart, importEnd, token;

		var that = this;
		
		function consume( tokens )
		{
			for( token of tokens )
			{
				if( that.tokens[i].string == token || token!='*' )
					i++;
				else
					break;
			}
		}
		
		// extract imported symbols
		for( i=0; i<this.tokens.length; i++ )
		{
			if( this.tokens[i].string != 'import' )
				continue;

			importStart = this.tokens[i].start;
			
			// import { symbol , symbol , ... } from 'string' ;
			if( this.tokens[i+1].string == '{' )
			{
				for( i=i+2; i<this.tokens.length && this.tokens[i].string!='}'; i++ )
					if( this.tokens[i].string != ',' )
						this.importedSymbols.push( this.tokens[i].string );
		
				consume( ['}', 'from', '*'] );
				
				importEnd = this.tokens[i].end;
				
				this.importSections.push( {
					string: this.js.substring( importStart, importEnd ),
					start: importStart,
					end: importEnd
				} );
				
				continue;
			}
				
			// import * as namespace from 'string';
			if( this.tokens[i+1].string == '*' && 
				this.tokens[i+2].string == 'as' &&
				this.tokens[i+4].string == 'from'
			)
			{
				this.importedNamespaces.push( this.tokens[i+3].string );
				i += 6;
				
				importEnd = this.tokens[i].end;
				
				this.importSections.push( {
					string: this.js.substring( importStart, importEnd ),
					start: importStart,
					end: importEnd
				} );

				continue;
			}
				
			// import symbol from 'string';
			if( this.tokens[i+2].string == 'from' )
			{
				this.importedSymbols.push( this.tokens[i+1].string );
				i += 4;
				
				importEnd = this.tokens[i].end;
				
				this.importSections.push( {
					string: this.js.substring( importStart, importEnd ),
					start: importStart,
					end: importEnd
				} );

				continue;
			}
		}

		console.log( `\t symbols: ${this.importedSymbols.join(' ')}` );
		console.log( `\t namespaces: ${this.importedNamespaces.join(' ')}` );
		console.log( `\t importsections:` );
		for( var section of this.importSections )
			console.log( section.string );
	}
	
	
	// process a JS file
	process( )
	{
		console.log( `processing file ${this.file.name}` );

		if( !this.valideText( ) )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = ` &rarr; contains invalid characters`;
			return;
		}
			
		//console.log( this.js );
		
		this.getTokens( );
		
		//console.log( this.tokens );
		
		this.getImports( );
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
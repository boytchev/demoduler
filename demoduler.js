const DEBUG_SHOW_TOKENS = false;


class Demoduler
{
	static id = 0;
	static demodulers = [];

	static LOGO = '^..^';
	
	constructor ( file )
	{
		this.idx = -1;
		this.tokens = [];
		this.importedSymbols = [];
		this.importedNamespaces = [];
		this.importSections = [];
		this.exportedSymbols = [];
		this.exportSections = [];
		
		this.js = '';
		this.id = Demoduler.id++;
		Demoduler.demodulers[ this.id ] = this;

		// if file is string, then this is fake file for debug purposes
		if( typeof file === 'string' )
		{
			this.file = {name:'test-file'};
			this.js = file;
			document.getElementById( 'log' ).innerHTML += `<p class="file">test-file</span> <span class="error" id="error-${this.id}"></span> <span class="download" id="download-${this.id}"></span><span class="info" id="info-${this.id}"></span></p>`;
			this.process( );
			return;
		}
			
		
		this.file = file;
		
		document.getElementById( 'log' ).innerHTML += `<p class="file">${file.name} <span class="error" id="error-${this.id}"></span> <span class="download" id="download-${this.id}"></span><span class="info" id="info-${this.id}"></span></p>`;
		

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
	
	
	
	// get a list of tokens
	getTokens( )
	{
		var result;
		var regex = /'[^']*'|"[^"]*"|[^\s\,\;\(\)\.]+|\,|\;|\(|\)|\./g;
		
		while( result = regex.exec(this.js) )
		{
			var start = result.index,
				end = start + result[0].length,
				string = this.js.substring( start, end );
				
			this.tokens.push({ string: string, start: start, end: end});
		}
	}
	
	
	// bad exports:
	//		* https://github.com/gkjohnson/collada-exporter-js
	//		*  const exporter = new ColladaExporter();
	//		*  const data = exporter.parse(mesh);
	//		console.warn( `ColladaExporter : Version ${ version } not supported for export. Only 1.4.1 and 1.5.0.` );
	//		// Do not export and alpha map for the reasons mentioned in issue (#13792)
	//		'<authoring_tool>three.js Collada Exporter</authoring_tool>' +
	//		 * Export draco compressed files from threejs geometry objects.
	//		class GLTFExporter {
	//				// Skip creating an accessor if the attribute doesn't have data to export
	//			 * @param  {String} mimeType export format
	
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


	consume( tokens )
	{		
		for( var token of tokens )
		{
			if( this.tokens[this.idx].string == token || token=='*' )
				this.idx++;
		}
		this.idx--;
	}


	// import { symbol , symbol , ... } from 'string' ;
	getImport_SymbolList( )
	{
		if( this.tokens[this.idx+1].string != '{' ) return null;
		
		for( this.idx=this.idx+2; this.idx<this.tokens.length && this.tokens[this.idx].string!='}'; this.idx++ )
			if( this.tokens[this.idx].string != ',' )
				this.importedSymbols.push( this.tokens[this.idx].string );

		this.consume( ['}', 'from', '*', ';'] );
		
		return this.tokens[this.idx].end;
	}


	// import * as namespace from 'string';
	getImport_Namespace( )
	{
		if( this.tokens[this.idx+1].string != '*' ) return null;
		if( this.tokens[this.idx+2].string != 'as' ) return null;
		if( this.tokens[this.idx+4].string != 'from' ) return null;

		this.importedNamespaces.push( this.tokens[this.idx+3].string );
		this.idx += 6;
		
		return this.tokens[this.idx].end;
	}


	// import symbol from 'string';
	getImport_Symbol( )
	{
		if( this.tokens[this.idx+2].string != 'from' ) return null;

		this.importedSymbols.push( this.tokens[this.idx+1].string );
		this.idx += 4;

		return this.tokens[this.idx].end;
	}
	
	
	getImports( )
	{
		// extract imported symbols and namespaces
		for( this.idx=0; this.idx<this.tokens.length; this.idx++ )
		{
			if( this.tokens[this.idx].string != 'import' )
				continue;

			var importStart = this.tokens[this.idx].start,
				importEnd = null;

			// import { symbol , symbol , ... } from 'string' ;
			importEnd = this.getImport_SymbolList( );

			// import * as namespace from 'string';
			if( importEnd == null )
			importEnd = this.getImport_Namespace( );

			// import symbol from 'string';
			if( importEnd == null )
			importEnd = this.getImport_Symbol( );

			if( importEnd != null )
			{
				this.importSections.push( {
					string: this.js.substring( importStart, importEnd ),
					start: importStart,
					end: importEnd
				} );
			}
		
		}

		// console.group( 'Imports' );
		// console.log( `\t symbols: ${this.importedSymbols.join(' ')}` );
		// console.log( `\t namespaces: ${this.importedNamespaces.join(' ')}` );
		// console.group( `\t sections:` );
		// for( var section of this.importSections )
			// console.log( section.string );
		// console.groupEnd( );
		// console.groupEnd( );
	}
	
	


	// export { symbol , symbol , ... };
	getExport_SymbolList( )
	{
		if( this.tokens[this.idx+1].string != '{' ) return null;
		
		for( this.idx=this.idx+2; this.idx<this.tokens.length && this.tokens[this.idx].string!='}'; this.idx++ )
			if( this.tokens[this.idx].string != ',' )
				this.exportedSymbols.push( this.tokens[this.idx].string );

		this.consume( ['}', ';'] );
		
		return this.tokens[this.idx].end;
	}


	getExports( )
	{
		// extract exported symbols
		for( this.idx=0; this.idx<this.tokens.length; this.idx++ )
		{
			if( this.tokens[this.idx].string != 'export' )
				continue;

			var exportStart = this.tokens[this.idx].start,
				exportEnd = null;

			// export { symbol , symbol , ... };
			exportEnd = this.getExport_SymbolList( );

////			// import * as namespace from 'string';
////			if( importEnd == null )
////			importEnd = this.getImport_Namespace( );

			if( exportEnd != null )
			{
				this.exportSections.push( {
					string: this.js.substring( exportStart, exportEnd ),
					start: exportStart,
					end: exportEnd
				} );
			}
		
		}

		// console.group( 'Exports' );
		// console.log( `\t symbols: ${this.exportedSymbols.join(' ')}` );
		// console.group( `\t sections:` );
		// for( var section of this.exportSections )
			// console.log( section.string );
		// console.groupEnd( );
		// console.groupEnd( );
	}
	
	
	insertCode( code, position )
	{
		this.js = this.js.substring( 0, position ) + code + this.js.substring( position );
	}
	
	
	removeCode( startPosition, endPosition )
	{
		var extract = this.js.substring( startPosition, endPosition );
		
		// sanitize by removing all internal /*, */ and //
		extract = extract.split('/*').join('/ *');
		extract = extract.split('//').join('/ /');
		extract = extract.split('*/').join('* /');
		extract = `/* ${Demoduler.LOGO}\n\r${extract}\n\r*/\n\r`;
		
		this.js = this.js.substring( 0, startPosition ) + extract + this.js.substring( endPosition );
	}
	
	
	appendCode( code )
	{
		if( code )
		{
			this.js += `${code} // ${Demoduler.LOGO}`;
		}
		this.js += `\n\r`;
	}
	
	
	prependCode( code )
	{
		if( code )
			this.js = `${code} // ${Demoduler.LOGO}\n\r` + this.js;
		else
			this.js = '\n\r' + this.js;
	}
	
	
	// transform js->jsm
	demodulize( )
	{
		// remove import and export sections, add namespaces to symbol
		// do this backwards, because these modifications destroy known positions of tokens
		var actions = [];
		
		for( var section of this.importSections )
			actions.push( {type:'remove', object:section} );

		for( var section of this.exportSections )
			actions.push( {type:'remove', object:section} );

		for( var token of this.tokens )
		{
			if( this.importedSymbols.indexOf( token.string ) > -1 )
			{
				// if this token is in import section, then do not replace it
				if( !this.importSections.find( sec => sec.start<=token.start && sec.end>=token.end ) )
					actions.push( {type:'insert', object:token} );
			}
		}

		actions.sort( (a,b) => b.object.start-a.object.start );
		
		// console.group( 'Actions' );
		// for( var action of actions )
			// console.log( `\t ${action.object.start} ${action.type} ${action.object.string}` );
		// console.groupEnd( );

		// process actions
		for( var action of actions )
			if( action.type=='insert' )
				this.insertCode( 'THREE.', action.object.start );
			else
			if( action.type=='remove' )
				this.removeCode( action.object.start, action.object.end );
		
		// appends after main code (they do not change token positions)
		this.appendCode( );
		for( var symbol of this.exportedSymbols )
		{
			this.appendCode( `\tTHREE.${symbol} = ${symbol};` );
			this.appendCode( );
		}
		this.appendCode( '} )();' );
		

		// insert before main code (must be the last text modification)
		this.prependCode( );
		this.prependCode( '( function () {' );

		
		// console.group( 'Result' );
		// console.log( this.js );
		// console.groupEnd( );
		
	}
	
	
	// process a JS file
	process( )
	{
		console.log( `processing file ${this.file.name}` );

		this.hashIn = cyrb53( this.js );

		if( !this.valideText( ) )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = ` &rarr; contains invalid characters`;
			return;
		}
			
		//console.log( this.js );
		
		this.getTokens( );
		
		if( DEBUG_SHOW_TOKENS ) console.log( this.tokens );

		this.getImports( );
		this.getExports( );
		this.demodulize( );

		this.hashOut = cyrb53( this.js );

		this.checkHash( );
		console.log( `\t[ '${this.file.name}', ${this.hashIn}, ${this.hashOut}],` );
		
		document.getElementById( `download-${this.id}` ).innerHTML = `<span onclick="Demoduler.demodulers[${this.id}].download()">download</span>`;
	}
	
	
	checkHash( )
	{
		// get all records for this file name
		var recs = hashes.filter( rec => rec[0]==this.file.name );
		
		if( recs.length == 0 )
		{
			console.log( `unknown file name ${this.file.name}` );
			return;
		}

		// get all records with this hash code of input source
		var matches = recs.filter( rec => rec[1]==this.hashIn );

		if( matches.length == 0 )
		{
			console.log( `unknown contents of ${this.file.name}` );
			return;
		}
		

		// get all records with this hash code of output source
		var finals = matches.filter( rec => rec[2]==this.hashOut );

		if( finals.length == 0 )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = ` &rarr; mismatched hash`;
			console.error( `mismatched output hash code of ${this.file.name}` );
			return;
		}
		
		
		document.getElementById( `info-${this.id}` ).innerHTML = `<br>known file, conversion confirmed`;
		console.log( `matching hash code of ${this.file.name}` );
		return;
	}
	
	
	download( )
	{
		var blob = new Blob( [this.js], {type: 'text/plain;charset=utf-8'} );
		
		var link = document.createElement('a');
			link.href = URL.createObjectURL( blob );
			link.download = this.file.name;
			link.click();
	}
}

const DEBUG_SHOW_TOKENS = false;
const DEBUG_SHOW_IMPORTS = false;
const DEBUG_SHOW_EXPORTS = false;
const DEBUG_SHOW_RESULT = false;

const EXCLUDE_TOKENS = ['fflate', 'MMDParser'];
const THREE_EXPORTS = 'ACESFilmicToneMapping,AddEquation,AddOperation,AdditiveAnimationBlendMode,AdditiveBlending,AlphaFormat,AlwaysDepth,AlwaysStencilFunc,AmbientLight,AmbientLightProbe,AnimationClip,AnimationLoader,AnimationMixer,AnimationObjectGroup,AnimationUtils,ArcCurve,ArrayCamera,ArrowHelper,Audio,AudioAnalyser,AudioContext,AudioListener,AudioLoader,AxesHelper,BackSide,BasicDepthPacking,BasicShadowMap,Bone,BooleanKeyframeTrack,Box2,Box3,Box3Helper,BoxBufferGeometry,BoxGeometry,BoxHelper,BufferAttribute,BufferGeometry,BufferGeometryLoader,ByteType,Cache,Camera,CameraHelper,CanvasTexture,CapsuleBufferGeometry,CapsuleGeometry,CatmullRomCurve3,CineonToneMapping,CircleBufferGeometry,CircleGeometry,ClampToEdgeWrapping,Clock,Color,ColorKeyframeTrack,ColorManagement,CompressedArrayTexture,CompressedTexture,CompressedTextureLoader,ConeBufferGeometry,ConeGeometry,CubeCamera,CubeReflectionMapping,CubeRefractionMapping,CubeTexture,CubeTextureLoader,CubeUVReflectionMapping,CubicBezierCurve,CubicBezierCurve3,CubicInterpolant,CullFaceBack,CullFaceFront,CullFaceFrontBack,CullFaceNone,Curve,CurvePath,CustomBlending,CustomToneMapping,CylinderBufferGeometry,CylinderGeometry,Cylindrical,Data3DTexture,DataArrayTexture,DataTexture,DataTexture2DArray,DataTexture3D,DataTextureLoader,DataUtils,DecrementStencilOp,DecrementWrapStencilOp,DefaultLoadingManager,DepthFormat,DepthStencilFormat,DepthTexture,DirectionalLight,DirectionalLightHelper,DiscreteInterpolant,DodecahedronBufferGeometry,DodecahedronGeometry,DoubleSide,DstAlphaFactor,DstColorFactor,DynamicCopyUsage,DynamicDrawUsage,DynamicReadUsage,EdgesGeometry,EllipseCurve,EqualDepth,EqualStencilFunc,EquirectangularReflectionMapping,EquirectangularRefractionMapping,Euler,EventDispatcher,ExtrudeBufferGeometry,ExtrudeGeometry,FileLoader,Float16BufferAttribute,Float32BufferAttribute,Float64BufferAttribute,FloatType,Fog,FogExp2,FramebufferTexture,FrontSide,Frustum,GLBufferAttribute,GLSL1,GLSL3,GreaterDepth,GreaterEqualDepth,GreaterEqualStencilFunc,GreaterStencilFunc,GridHelper,Group,HalfFloatType,HemisphereLight,HemisphereLightHelper,HemisphereLightProbe,IcosahedronBufferGeometry,IcosahedronGeometry,ImageBitmapLoader,ImageLoader,ImageUtils,ImmediateRenderObject,IncrementStencilOp,IncrementWrapStencilOp,InstancedBufferAttribute,InstancedBufferGeometry,InstancedInterleavedBuffer,InstancedMesh,Int16BufferAttribute,Int32BufferAttribute,Int8BufferAttribute,IntType,InterleavedBuffer,InterleavedBufferAttribute,Interpolant,InterpolateDiscrete,InterpolateLinear,InterpolateSmooth,InvertStencilOp,KeepStencilOp,KeyframeTrack,LOD,LatheBufferGeometry,LatheGeometry,Layers,LessDepth,LessEqualDepth,LessEqualStencilFunc,LessStencilFunc,Light,LightProbe,Line,Line3,LineBasicMaterial,LineCurve,LineCurve3,LineDashedMaterial,LineLoop,LineSegments,LinearEncoding,LinearFilter,LinearInterpolant,LinearMipMapLinearFilter,LinearMipMapNearestFilter,LinearMipmapLinearFilter,LinearMipmapNearestFilter,LinearSRGBColorSpace,LinearToneMapping,Loader,LoaderUtils,LoadingManager,LoopOnce,LoopPingPong,LoopRepeat,LuminanceAlphaFormat,LuminanceFormat,MOUSE,Material,MaterialLoader,MathUtils,Matrix3,Matrix4,MaxEquation,Mesh,MeshBasicMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshLambertMaterial,MeshMatcapMaterial,MeshNormalMaterial,MeshPhongMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshToonMaterial,MinEquation,MirroredRepeatWrapping,MixOperation,MultiplyBlending,MultiplyOperation,NearestFilter,NearestMipMapLinearFilter,NearestMipMapNearestFilter,NearestMipmapLinearFilter,NearestMipmapNearestFilter,NeverDepth,NeverStencilFunc,NoBlending,NoColorSpace,NoToneMapping,NormalAnimationBlendMode,NormalBlending,NotEqualDepth,NotEqualStencilFunc,NumberKeyframeTrack,Object3D,ObjectLoader,ObjectSpaceNormalMap,OctahedronBufferGeometry,OctahedronGeometry,OneFactor,OneMinusDstAlphaFactor,OneMinusDstColorFactor,OneMinusSrcAlphaFactor,OneMinusSrcColorFactor,OrthographicCamera,PCFShadowMap,PCFSoftShadowMap,PMREMGenerator,Path,PerspectiveCamera,Plane,PlaneBufferGeometry,PlaneGeometry,PlaneHelper,PointLight,PointLightHelper,Points,PointsMaterial,PolarGridHelper,PolyhedronBufferGeometry,PolyhedronGeometry,PositionalAudio,PropertyBinding,PropertyMixer,QuadraticBezierCurve,QuadraticBezierCurve3,Quaternion,QuaternionKeyframeTrack,QuaternionLinearInterpolant,REVISION,RGBADepthPacking,RGBAFormat,RGBAIntegerFormat,RGBA_ASTC_10x10_Format,RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format,RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format,RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format,RGBA_BPTC_Format,RGBA_ETC2_EAC_Format,RGBA_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format,RGBFormat,RGB_ETC1_Format,RGB_ETC2_Format,RGB_PVRTC_2BPPV1_Format,RGB_PVRTC_4BPPV1_Format,RGB_S3TC_DXT1_Format,RGFormat,RGIntegerFormat,RawShaderMaterial,Ray,Raycaster,RectAreaLight,RedFormat,RedIntegerFormat,ReinhardToneMapping,RepeatWrapping,ReplaceStencilOp,ReverseSubtractEquation,RingBufferGeometry,RingGeometry,SRGBColorSpace,Scene,ShaderChunk,ShaderLib,ShaderMaterial,ShadowMaterial,Shape,ShapeBufferGeometry,ShapeGeometry,ShapePath,ShapeUtils,ShortType,Skeleton,SkeletonHelper,SkinnedMesh,Source,Sphere,SphereBufferGeometry,SphereGeometry,Spherical,SphericalHarmonics3,SplineCurve,SpotLight,SpotLightHelper,Sprite,SpriteMaterial,SrcAlphaFactor,SrcAlphaSaturateFactor,SrcColorFactor,StaticCopyUsage,StaticDrawUsage,StaticReadUsage,StereoCamera,StreamCopyUsage,StreamDrawUsage,StreamReadUsage,StringKeyframeTrack,SubtractEquation,SubtractiveBlending,TOUCH,TangentSpaceNormalMap,TetrahedronBufferGeometry,TetrahedronGeometry,Texture,TextureLoader,TorusBufferGeometry,TorusGeometry,TorusKnotBufferGeometry,TorusKnotGeometry,Triangle,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,TubeBufferGeometry,TubeGeometry,UVMapping,Uint16BufferAttribute,Uint32BufferAttribute,Uint8BufferAttribute,Uint8ClampedBufferAttribute,Uniform,UniformsGroup,UniformsLib,UniformsUtils,UnsignedByteType,UnsignedInt248Type,UnsignedIntType,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedShortType,VSMShadowMap,Vector2,Vector3,Vector4,VectorKeyframeTrack,VideoTexture,WebGL1Renderer,WebGL3DRenderTarget,WebGLArrayRenderTarget,WebGLCubeRenderTarget,WebGLMultipleRenderTargets,WebGLMultisampleRenderTarget,WebGLRenderTarget,WebGLRenderer,WebGLUtils,WireframeGeometry,WrapAroundEnding,ZeroCurvatureEnding,ZeroFactor,ZeroSlopeEnding,ZeroStencilOp,_SRGBAFormat,sRGBEncoding';

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

		this.file = file;

		document.getElementById( 'log' ).insertAdjacentHTML( 'beforeend', `
			<div class="file" id="file-${this.id}">
				<span class="error" id="error-${this.id}"></span>
				<span class="info" id="info-${this.id}"></span>
				${file.name}
			</div>`
		);
		

		if( file.name.split( '.' ).pop( ) != 'js' )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = 'bad file name';
			return;
		}
		
		this.loadFile( );
		
	} // Demoduler.constructor
	
	
	
	// request loading a file (asynchronous load)
	loadFile( )
	{
		if( this.file.contents )
		{
			this.js = this.file.contents;
			this.process( );
		}
		else
		{
			var reader = new FileReader();
			
			reader.addEventListener( 'load', event => this.loadedFile(event) );
			reader.readAsText( this.file );
		}
	} // Demoduler.loadFile
	


	loadedFile( event )
	{
		this.js = event.target.result;
		this.process( );
	}


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
//		var regex = /'[^']*'|"[^"]*"|[^\s\,\;\(\)\.\[\:]+|\,|\;|\(|\)|\.|\[|\:/g;
		var regex = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|[^\s\,\;\(\)\.\[\:]+|\,|\;|\(|\)|\.|\[|\:/g;
		
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
		if( this.tokens[this.idx+3].string == 'THREE' )
			this.importedSymbols.push( ...THREE_EXPORTS.split(',') );
		else
			this.importedSymbols.push( this.tokens[this.idx+3].string );
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

		if( DEBUG_SHOW_IMPORTS )
		{
			console.group( 'Imports' );
			console.log( `\t symbols: ${this.importedSymbols.join(' ')}` );
			console.log( `\t namespaces: ${this.importedNamespaces.join(' ')}` );
			console.group( `\t sections:` );
			for( var section of this.importSections )
				console.log( section.string );
			console.groupEnd( );
			console.groupEnd( );
		}
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


	// export class symbol ...
	getExport_Class( )
	{
		if( this.tokens[this.idx+1].string != 'class' ) return null;
		
		this.exportedSymbols.push( this.tokens[this.idx+2].string );

		return this.tokens[this.idx].end;
	}


	// export function symbol ...
	getExport_Function( )
	{
		if( this.tokens[this.idx+1].string != 'function' ) return null;
		
		this.exportedSymbols.push( this.tokens[this.idx+2].string );

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

			// export class symbol
			if( exportEnd == null )
			exportEnd = this.getExport_Class( );

			// export function symbol
			if( exportEnd == null )
			exportEnd = this.getExport_Function( );

			if( exportEnd != null )
			{
				this.exportSections.push( {
					string: this.js.substring( exportStart, exportEnd ),
					start: exportStart,
					end: exportEnd
				} );
			}
		
		}

		if( DEBUG_SHOW_EXPORTS )
		{
			console.group( 'Exports' );
			console.log( `\t symbols: ${this.exportedSymbols.join(' ')}` );
			console.group( `\t sections:` );
			for( var section of this.exportSections )
				console.log( section.string );
			console.groupEnd( );
			console.groupEnd( );
		}
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

		for( var i=0; i<this.tokens.length; i++ )
		{
			var token = this.tokens[i];

			if( this.importedSymbols.indexOf( token.string ) > -1 )
			if( EXCLUDE_TOKENS.indexOf( token.string ) == -1 )
			if( i>0 && this.tokens[i-1].string!='.' )
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
//		console.log( `processing file ${this.file.name}` );

		this.hashIn = cyrb53( this.js );

		if( !this.valideText( ) )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = 'bad file contents';
			return;
		}
			
		//console.log( this.js );
		
		this.getTokens( );
		
		if( DEBUG_SHOW_TOKENS )
		{
			for( var token of this.tokens )
			console.log( `${token.string}\t${token.start}->${token.end}` );
		}

		this.getImports( );
		this.getExports( );
		this.demodulize( );

		if( this.importSections.length+this.exportSections.length == 0 )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = 'not a module';
			return;
		}


		this.hashOut = cyrb53( this.js );

		this.checkHash( );
		console.log( `\t{ name: '${this.file.name}',\thashIn: ${this.hashIn}, hashOut: ${this.hashOut}, signature: '' },` );

		if( DEBUG_SHOW_RESULT )
		{
			console.group( 'Result' );
			console.log( this.js );
			console.groupEnd( );
		}
		
		var that = this;
//		document.getElementById( `info-${this.id}` ).innerHTML = `click to download`;
		document.getElementById( `file-${this.id}` ).onclick = function(){that.download()};
	}
	
	
	checkHash( )
	{
		// get all records for this file name
		var recs = hashes.filter( rec => rec.name==this.file.name );
		
		if( recs.length == 0 )
		{
			console.log( `unknown file name ${this.file.name}` );
			return;
		}

		// get all records with this hash-in code
		var matches = recs.filter( rec => rec.hashIn==this.hashIn );

		if( matches.length == 0 )
		{
			console.log( `unknown contents of ${this.file.name}` );
			return;
		}
		

		// get all records with this hash-out code
		var finals = matches.filter( rec => rec.hashOut==this.hashOut );

		if( finals.length == 0 )
		{
			document.getElementById( `error-${this.id}` ).innerHTML = 'bad signature';
			console.error( `mismatched output hash code of ${this.file.name}` );
//			return;
		}
		else
			document.getElementById( `info-${this.id}` ).innerHTML = `${finals[0].signature}`;
		
//		console.log( `matching hash code of ${this.file.name}` );
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

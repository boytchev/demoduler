
const NOT_THREE_JS = 'not a Three.js file <span class="bull-ignore">&nbsp;</span>';
const NOT_CONFIRMED = ' <span class="bull-warning">&nbsp;</span>';
const CANNOT_CONVERT = ' cannot convert <span class="bull-error">&nbsp;</span>';
//const ESTIMATED = ' [estimated] ';

class Release
{
	constructor( name )
	{
		this.name = 'r'+name;
	}
}

const R147 = new Release( 147 );
const R148 = new Release( 148 );
const R149 = new Release( 149 );
const R150 = new Release( 150 );
const R151 = new Release( 151 );
const R152 = new Release( 152 );

const RLAST = 'R152';


var hashes = [];
	

/*
var hashes = [
	
// build\three.module.js

	{ name: 'three.module.js',	hashIn: 2340088931094189, hashOut: 7401641734355085, signature: 'r147' }, // debug mode
	{ name: 'three.module.js',	hashIn: 2340088931094189, hashOut: 4354204085491623, signature: 'r147' }, // normal mode
	
	{ name: 'three.module.js',	hashIn: 8206269217664674, hashOut: 2069818104690616, signature: 'r148' }, // debug mode
	{ name: 'three.module.js',	hashIn: 8206269217664674, hashOut: 7261310370223862, signature: 'r148' }, // normal mode
	
	{ name: 'three.module.js',	hashIn: 3418431085877075, hashOut: 4355588814216040, signature: 'r149' }, // debug mode
	{ name: 'three.module.js',	hashIn: 3418431085877075, hashOut: 3727258555033782, signature: 'r149' }, // normal mode
	
	{ name: 'three.module.js',	hashIn: 4073485943750582, hashOut: 3060098335498890, signature: 'r150' }, // debug mode
	{ name: 'three.module.js',	hashIn: 4073485943750582, hashOut: 1931680927955748, signature: 'r150' }, // normal mode

	{ name: 'three.module.js',	hashIn: 4335081748333267, hashOut: 3434032628753384, signature: 'r151' },


// jsm\animation\*.js

	{ name: 'AnimationClipCreator.js',	hashIn: 1226843274980437, hashOut: 7116389223769906, signature: 'r147~r149' },
	{ name: 'AnimationClipCreator.js',	hashIn: 3382535474109152, hashOut: 546115356815044,  signature: 'r150~r151' },
	{ name: 'CCDIKSolver.js',			hashIn: 6987903500913477, hashOut: 1432833081281724, signature: 'r147~r151' },
	{ name: 'MMDAnimationHelper.js',	hashIn: 4051486523834537, hashOut: 7711676366751655, signature: 'r147~r151' },
	{ name: 'MMDPhysics.js',			hashIn: 3517359931114889, hashOut: 7499978108447581, signature: 'r147~r151' },


// jsm\cameras\*.js
	{ name: 'CinematicCamera.js',		hashIn: 8657467710839774, hashOut: 6093747022937238, signature: 'r147~r151' },
	

// jsm\capabilities\*.js

	{ name: 'WebGL.js',					hashIn: 1806524370189791, hashOut: 4290716052244725, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WebGPU.js',				hashIn: 7382216207052479, hashOut: 1736094083887989, signature: 'r147~r151', warning: NOT_CONFIRMED },


// jsm\controls\*.js

 	{ name: 'ArcballControls.js',		hashIn: 5224525621429883, hashOut: 6689598522756220, signature: 'r147~r148' },
 	{ name: 'ArcballControls.js',		hashIn: 3152556976512707, hashOut: 7419895869021261, signature: 'r149~r151' },
 	{ name: 'DragControls.js',			hashIn: 68330822021333,   hashOut: 8465009894812906, signature: 'r147~r151' },
 	{ name: 'FirstPersonControls.js',	hashIn: 3881222951926969, hashOut: 8794825488562693, signature: 'r147~r151' },
 	{ name: 'FlyControls.js', 			hashIn: 5733191412332319, hashOut: 6216594149040715, signature: 'r147~r151' },
	{ name: 'MapControls.js',			hashIn: 6218203932873556, hashOut: 8192997951170060, signature: 'r151' },
 	{ name: 'OrbitControls.js', 		hashIn: 3461413604478402, hashOut: 3508093428857771, signature: 'r147~r149' },
 	{ name: 'OrbitControls.js', 		hashIn: 6406664314921444, hashOut: 7395453312622649, signature: 'r150' },
	{ name: 'OrbitControls.js',			hashIn: 7979551823229156, hashOut: 1979674451436062, signature: 'r151' },
 	{ name: 'PointerLockControls.js',	hashIn: 7234374874125097, hashOut: 534253466008181,  signature: 'r147~r150' },
	{ name: 'PointerLockControls.js',	hashIn: 478361203029289,  hashOut: 5342386648813856, signature: 'r151' },
 	{ name: 'TrackballControls.js',		hashIn: 5995901654950252, hashOut: 6267983764043843, signature: 'r147~r150' },
	{ name: 'TrackballControls.js',		hashIn: 4203226680836628, hashOut: 8775426104840178, signature: 'r151' },
	{ name: 'TransformControls.js', 	hashIn: 2496079475009952, hashOut: 3634417817542913, signature: 'r147' },
	{ name: 'TransformControls.js',		hashIn: 2867994341181097, hashOut: 6007517594025721, signature: 'r148~r151' },


// jsm\csm\*.js

	{ name: 'CSM.js',					hashIn: 6434818151254405, hashOut: 2753891380550471, signature: 'r147~r148' },
	{ name: 'CSM.js',					hashIn: 826172807001094,  hashOut: 6578377904600523, signature: 'r149~r151' },
	{ name: 'CSMFrustum.js',			hashIn: 1426916298755981, hashOut: 812024260606097,  signature: 'r147~r151' },
	{ name: 'CSMShader.js',				hashIn: 2623585483244840, hashOut: 3839493011915698, signature: 'r147' },
	{ name: 'CSMShader.js',				hashIn: 6808812247645686, hashOut: 2407777480630806, signature: 'r148~r151' },
	{ name: 'CSMHelper.js',				hashIn: 95514300219672,   hashOut: 6615675358907333, signature: 'r147' },
	{ name: 'CSMHelper.js',				hashIn: 95514300219672,   hashOut: 1973834970125863, signature: 'r148~r151' },


// jsm\curves\*.js

	{ name: 'NURBSCurve.js',			hashIn: 1481469610032845, hashOut: 8208446348316763, signature: 'r147~r151' },
	{ name: 'CurveExtras.js',			hashIn: 8174127866409531, hashOut: 5051572476771642, signature: 'r147~r151' },
	{ name: 'NURBSSurface.js',			hashIn: 5935856335412392, hashOut: 5788121849566634, signature: 'r147~r151' },
	{ name: 'NURBSUtils.js',			hashIn: 1382614706821951, hashOut: 4725962503857902, signature: 'r147~r151' },


// jsm\effects\*.js

	{ name: 'AnaglyphEffect.js',		hashIn: 8494041100070890, hashOut: 6806847312914103, signature: 'r147~r151' },
	{ name: 'AsciiEffect.js',			hashIn: 2409110624323613, hashOut: 7688735697818189, signature: 'r147' },
	{ name: 'AsciiEffect.js',			hashIn: 4319291803888832, hashOut: 8863660430852870, signature: 'r148~r151' },
	{ name: 'OutlineEffect.js',			hashIn: 174470279120084,  hashOut: 8537021526150794, signature: 'r147~r149' },
	{ name: 'OutlineEffect.js',			hashIn: 3897572940080614, hashOut: 1600378654525614, signature: 'r150~r151' },
	{ name: 'ParallaxBarrierEffect.js',	hashIn: 4611171881184362, hashOut: 4712923974677065, signature: 'r147~r151' },
	{ name: 'PeppersGhostEffect.js',	hashIn: 8449197647267113, hashOut: 2948822358444019, signature: 'r147~r151' },
	{ name: 'StereoEffect.js',			hashIn: 5569155035758829, hashOut: 8246708936356330, signature: 'r147~r151' },


// jsm\environments\*.js

	{ name: 'RoomEnvironment.js',		hashIn: 5802007185481666, hashOut: 2943116661036073, signature: 'r147~r151' },
	{ name: 'DebugEnvironment.js',		hashIn: 6492595570066171, hashOut: 1502295319298227, signature: 'r147~r151' },
	

// jsm\exporters\*.js

	{ name: 'ColladaExporter.js',		hashIn: 2040032360564170, hashOut: 5227371727001555, signature: 'r147' },
	{ name: 'ColladaExporter.js',		hashIn: 3741571901473790, hashOut: 5229667671348325, signature: 'r148~r151' },
	{ name: 'DRACOExporter.js',			hashIn: 1917974346732773, hashOut: 391086298448543,  signature: 'r147' },
	{ name: 'DRACOExporter.js',			hashIn: 2226776876950114, hashOut: 2506051549198426, signature: 'r148~r149' },
	{ name: 'DRACOExporter.js',			hashIn: 2368994100667333, hashOut: 5228161319846518, signature: 'r150~r151' },
	{ name: 'EXRExporter.js',			hashIn: 2211521531772346, hashOut: 3532023270548790, signature: 'r147' },
	{ name: 'EXRExporter.js',			hashIn: 3962920640275117, hashOut: 535614201717199,  signature: 'r148~r151' },
	{ name: 'GLTFExporter.js',			hashIn: 7097485653378711, hashOut: 3363199132645821, signature: 'r147' },
	{ name: 'GLTFExporter.js',			hashIn: 1196074284463602, hashOut: 8683437420229622, signature: 'r148~r149' },
	{ name: 'GLTFExporter.js',			hashIn: 4160312389647633, hashOut: 5974250420279954, signature: 'r150~r151' },
	{ name: 'KTX2Exporter.js',			hashIn: 3368305390814835, hashOut: 3517880226381192, signature: 'r147~r151' },
	{ name: 'MMDExporter.js',			hashIn: 346341606190126,  hashOut: 5311766141910379, signature: 'r147' },
	{ name: 'MMDExporter.js',			hashIn: 4779782672140724, hashOut: 1737206538996828, signature: 'r148~r151' },
	{ name: 'OBJExporter.js',			hashIn: 5196360952527578, hashOut: 373058448930680,  signature: 'r147~r151' },
	{ name: 'PLYExporter.js',			hashIn: 2885756046710828, hashOut: 8399769101506180, signature: 'r147' },
	{ name: 'PLYExporter.js',			hashIn: 6620986018715772, hashOut: 5606569644274359, signature: 'r148' },
	{ name: 'PLYExporter.js',			hashIn: 7573114018869779, hashOut: 2360947503717018, signature: 'r149~r151' },
	{ name: 'STLExporter.js',			hashIn: 1962334263618299, hashOut: 8791824661524967, signature: 'r147' },
	{ name: 'STLExporter.js',			hashIn: 7714718659571966, hashOut: 4214645860282604, signature: 'r148~r150' },
	{ name: 'STLExporter.js',			hashIn: 5953041762952135, hashOut: 1279488673682302, signature: 'r151' },
	{ name: 'USDZExporter.js',			hashIn: 5081691085947601, hashOut: 8702964794222611, signature: 'r147' },
	{ name: 'USDZExporter.js',			hashIn: 1818464051912836, hashOut: 6856698102147236, signature: 'r148~r150' },
	{ name: 'USDZExporter.js',			hashIn: 6867538231382744, hashOut: 6361299460533110, signature: 'r151' },


// jsm\geometries\*.js

 	{ name: 'BoxLineGeometry.js',		hashIn: 6715624084493554, hashOut: 8861167976725231, signature: 'r147~r151' },
 	{ name: 'ConvexGeometry.js',		hashIn: 7147676395705516, hashOut: 3916208406701340, signature: 'r147' },
	{ name: 'ConvexGeometry.js',		hashIn: 6066078645477342, hashOut: 7424773974475037, signature: 'r148~r151' },
 	{ name: 'DecalGeometry.js',			hashIn: 1507980540546980, hashOut: 3535909775668692, signature: 'r147~r151' },
	{ name: 'LightningStrike.js',		hashIn: 1191645353049985, hashOut: 2624903429688936, signature: 'r147~r151' },
 	{ name: 'ParametricGeometries.js',	hashIn: 107533732253491,  hashOut: 815149824560642,  signature: 'r147~r151' },
 	{ name: 'ParametricGeometry.js',	hashIn: 8085017494352590, hashOut: 7874298973850542, signature: 'r147~r149' },
 	{ name: 'ParametricGeometry.js',	hashIn: 1529333648366145, hashOut: 1648448834148130, signature: 'r150~r151' },
 	{ name: 'RoundedBoxGeometry.js',	hashIn: 5502296987449710, hashOut: 7311095839334729, signature: 'r147~r151' },
 	{ name: 'TeapotGeometry.js',		hashIn: 1270481738028427, hashOut: 8815500691832546, signature: 'r147~r151' },
 	{ name: 'TextGeometry.js',			hashIn: 2530618317268137, hashOut: 8100759542272196, signature: 'r147~r151' },


// jsm\helpers\*.js

	{ name: 'LightProbeHelper.js',		hashIn: 6400788453127014, hashOut: 3600597602235927, signature: 'r147~r151' },
	{ name: 'OctreeHelper.js',			hashIn: 4835047289618362, hashOut: 3352396781641842, signature: 'r147~r148' },
	{ name: 'OctreeHelper.js',			hashIn: 3719363927393434, hashOut: 5020645413669748, signature: 'r149~r151' },
	{ name: 'PositionalAudioHelper.js',	hashIn: 4485771109068509, hashOut: 3792633801047678, signature: 'r147~r151' },
	{ name: 'RectAreaLightHelper.js',	hashIn: 2323756755171944, hashOut: 7093708729301997, signature: 'r147~r151' },
	{ name: 'VertexNormalsHelper.js',	hashIn: 5070185591957948, hashOut: 674242172204673,  signature: 'r147~r151' },
	{ name: 'VertexTangentsHelper.js',	hashIn: 662534324265405,  hashOut: 205872472201194,  signature: 'r147~r151' },
	{ name: 'ViewHelper.js',			hashIn: 4660377876647747, hashOut: 4639934960027406, signature: 'r147~r148' },
	{ name: 'ViewHelper.js',			hashIn: 2319027273958534, hashOut: 5919738884326682, signature: 'r149~r151' },


// jsm\interactive\*.js

	{ name: 'HTMLMesh.js',				hashIn: 1878649372860153, hashOut: 3192597895142587, signature: 'r147~r148' },
	{ name: 'HTMLMesh.js',				hashIn: 4358958328917816, hashOut: 1816649510028030, signature: 'r149~r150' },
	{ name: 'HTMLMesh.js',				hashIn: 394329064848404,  hashOut: 2558391474191133, signature: 'r151' },
	{ name: 'InteractiveGroup.js',		hashIn: 1211502322032098, hashOut: 8467776172842284, signature: 'r147~r148' },
	{ name: 'InteractiveGroup.js',		hashIn: 6195192393162974, hashOut: 1533848710701858, signature: 'r149~r151' },
	{ name: 'SelectionBox.js',			hashIn: 7064250896203132, hashOut: 7488209743941230, signature: 'r147~r151' },
	{ name: 'SelectionHelper.js',		hashIn: 2604057417266652, hashOut: 1236952692415177, signature: 'r147~r151' },


// jsm\libs\*.js
	{ name: 'chevrotain.module.min.js',	hashIn: 8610778070704401, hashOut: 2181733518121743, signature: '', warning: NOT_THREE_JS },
	{ name: 'ecsy.module.js',			hashIn: 2143193075671949, hashOut: 2855799025138990, signature: '', warning: NOT_THREE_JS },
	{ name: 'fflate.module.js',			hashIn: 2873969778761120, hashOut: 6223503074093484, signature: '', warning: NOT_THREE_JS },
	{ name: 'flow.module.js',			hashIn: 8962083420513474, hashOut: 1894893191019385, signature: '', warning: NOT_THREE_JS },
	{ name: 'flow.module.js',			hashIn: 91636917355232,   hashOut: 804658828079676,  signature: '', warning: NOT_THREE_JS },
	{ name: 'flow.module.js',			hashIn: 7632711381093562, hashOut: 661822554583793,  signature: '', warning: NOT_THREE_JS },
	{ name: 'ktx-parse.module.js',		hashIn: 8668226453980035, hashOut: 7271678376224768, signature: '', warning: NOT_THREE_JS },
	{ name: 'lil-gui.module.min.js',	hashIn: 7214462785814887, hashOut: 7054343677832408, signature: '', warning: NOT_THREE_JS },
	{ name: 'lil-gui.module.min.js',	hashIn: 2407448484675201, hashOut: 3089335268765329, signature: '', warning: NOT_THREE_JS },
	{ name: 'lottie_canvas.module.js',	hashIn: 2245927073147872, hashOut: 1456158983931478, signature: '', warning: NOT_THREE_JS },
	{ name: 'meshopt_decoder.module.js',hashIn: 801166090116187,  hashOut: 2448267990077663, signature: '', warning: NOT_THREE_JS },
	{ name: 'mikktspace.module.js',		hashIn: 8719419322244607, hashOut: 5216793118533395, signature: '', warning: NOT_THREE_JS },
	{ name: 'mmdparser.module.js',		hashIn: 8202443895328062, hashOut: 3622136400949581, signature: '', warning: NOT_THREE_JS },
	{ name: 'motion-controllers.module.js',hashIn:5709579865562258,hashOut:5681181871857957, signature: '', warning: NOT_THREE_JS },
	{ name: 'opentype.module.js',		hashIn: 848534191210722,  hashOut: 8313800755823623, signature: '', warning: NOT_THREE_JS },
	{ name: 'potpack.module.js',		hashIn: 1283655972451878, hashOut: 5200029942189273, signature: '', warning: NOT_THREE_JS },
	{ name: 'stats.module.js',			hashIn: 4205307359432763, hashOut: 2815192571905565, signature: '', warning: NOT_THREE_JS },
	{ name: 'tween.module.min.js',		hashIn: 561090084058616,  hashOut: 3540154676240152, signature: '', warning: NOT_THREE_JS },
	{ name: 'tween.module.js',			hashIn: 3912684966659390, hashOut: 8014186627132810, signature: '', warning: NOT_THREE_JS },
	{ name: 'utif.module.js',			hashIn: 5715595447783189, hashOut: 2329173948366792, signature: '', warning: NOT_THREE_JS },
	{ name: 'zstddec.module.js',		hashIn: 6877927829665610, hashOut: 6419293948366379, signature: '', warning: NOT_THREE_JS },
// jsm\libs\OimoPhysics\*.js
	{ name: 'index.js',					hashIn: 4429172777201225, hashOut: 224229038370084,  signature: '', warning: NOT_THREE_JS },
	{ name: 'OimoPhysics.js',			hashIn: 338989220735410,  hashOut: 3916132481343801, signature: '', warning: NOT_THREE_JS },
// jsm\libs\rhino3dm\*.js
	{ name: 'rhino3dm.module.js',		hashIn: 5477667109273140, hashOut: 5220638887459029, signature: '', warning: NOT_THREE_JS },
// jsm\libs\basis\*.js


// jsm\lights\*.js

	{ name: 'LightProbeGenerator.js',		hashIn: 6177039655558016, hashOut: 698274494607814,  signature: 'r147~r151' },
	{ name: 'RectAreaLightUniformsLib.js',	hashIn: 7797007073339547, hashOut: 620191334569173,  signature: 'r147~r151' },
	{ name: 'IESSpotLight.js',	            hashIn: 8960652235443064, hashOut: 5857885885978284, signature: 'r149~r151', warning: NOT_CONFIRMED },


// jsm\lines\*.js

	{ name: 'Line2.js',					hashIn: 3135289954063428, hashOut: 7765501135355907, signature: 'r147~r151' },
	{ name: 'LineGeometry.js',			hashIn: 8600814032145600, hashOut: 7773308748004646, signature: 'r147~r151' },
	{ name: 'LineMaterial.js',			hashIn: 1491028438321448, hashOut: 4088370860958898, signature: 'r147~r151' },
	{ name: 'LineSegments2.js',			hashIn: 3749850439058021, hashOut: 7950772605671349, signature: 'r147' },
	{ name: 'LineSegments2.js',			hashIn: 4185560240751701, hashOut: 4123731577629405, signature: 'r148~r151', warning: NOT_CONFIRMED },
	{ name: 'WireframeGeometry2.js',	hashIn: 1847977233267918, hashOut: 4489740044747535, signature: 'r147~r151' },
	{ name: 'LineSegmentsGeometry.js',	hashIn: 2449821987236612, hashOut: 3575789517828356, signature: 'r147~r151' },
	{ name: 'Wireframe.js',				hashIn: 6605080101837332, hashOut: 63213171175972,   signature: 'r147~r151' },

// jsm\loaders\*.js
	{ name: '3DMLoader.js',				hashIn: 985397630770524,  hashOut: 941102389810339,  signature: 'r147~r150' },
	{ name: '3DMLoader.js',				hashIn: 6592185293051179, hashOut: 7482981974176333, signature: 'r151' },
	{ name: '3MFLoader.js',				hashIn: 1614454356478586, hashOut: 7807398297238918, signature: 'r147' },
	{ name: '3MFLoader.js',				hashIn: 4335550215743065, hashOut: 6553591786665702, signature: 'r148' },
	{ name: '3MFLoader.js',				hashIn: 3470662050951324, hashOut: 8168338494862914, signature: 'r149~r151' },
	{ name: 'AMFLoader.js',				hashIn: 8591404426020785, hashOut: 72357308031188,   signature: 'r147' },
	{ name: 'AMFLoader.js',				hashIn: 1570200235435579, hashOut: 6094324743161253, signature: 'r148' },
	{ name: 'AMFLoader.js',				hashIn: 2609276738124967, hashOut: 1517260372187621, signature: 'r149~r151' },
	{ name: 'BVHLoader.js',				hashIn: 3703503551115264, hashOut: 3079569560819572, signature: 'r147~r151' },
	{ name: 'BasisTextureLoader.js',	hashIn: 5918785881493078, hashOut: 1809785238072726, signature: 'r147~r149' },
	{ name: 'ColladaLoader.js',			hashIn: 5521032082652047, hashOut: 2541482346977545, signature: 'r147' },
	{ name: 'ColladaLoader.js',			hashIn: 7760747400432314, hashOut: 7172026971444105, signature: 'r148~r151' },
	{ name: 'DDSLoader.js',				hashIn: 1842847107263814, hashOut: 8514036890283198, signature: 'r147~r151' },
	{ name: 'DRACOLoader.js',			hashIn: 5176611380117225, hashOut: 3325218987558685, signature: 'r147~r148' },
	{ name: 'DRACOLoader.js',			hashIn: 8143959119653327, hashOut: 3696860707897220, signature: 'r149' },
	{ name: 'DRACOLoader.js',			hashIn: 7497383781133774, hashOut: 8043006305011337, signature: 'r150~r151' },
	{ name: 'EXRLoader.js',				hashIn: 4151380879470427, hashOut: 6250149702201060, signature: 'r147' },
	{ name: 'EXRLoader.js',				hashIn: 5029969153171262, hashOut: 2400253278494816, signature: 'r148~r149' },
	{ name: 'EXRLoader.js',				hashIn: 3689074498523906, hashOut: 7731055900464456, signature: 'r150~r151' },
	{ name: 'FBXLoader.js',				hashIn: 561481140767537,  hashOut: 6836947826046547, signature: 'r147' },
	{ name: 'FBXLoader.js',				hashIn: 4421646834633747, hashOut: 7197077195013415, signature: 'r148' },
	{ name: 'FBXLoader.js',				hashIn: 6725391311408481, hashOut: 4099288921457154, signature: 'r149~r150' },
	{ name: 'FBXLoader.js',				hashIn: 2803775840028056, hashOut: 3797832264286259, signature: 'r151' },
	{ name: 'FontLoader.js',			hashIn: 4772390691205073, hashOut: 7405204033567376, signature: 'r147~r151' },
	{ name: 'GCodeLoader.js',			hashIn: 6895845443187997, hashOut: 1972034445838697, signature: 'r147' },
	{ name: 'GCodeLoader.js',			hashIn: 7905819486375718, hashOut: 6094790376039546, signature: 'r148~r151' },
	{ name: 'GLTFLoader.js',			hashIn: 7612331930241984, hashOut: 6625683675195739, signature: 'r147' },
	{ name: 'GLTFLoader.js',			hashIn: 1569998721190733, hashOut: 1513700305281128, signature: 'r148' },
	{ name: 'GLTFLoader.js',			hashIn: 8267145606619935, hashOut: 3108258337147762, signature: 'r149' },
	{ name: 'GLTFLoader.js',			hashIn: 2209539503779939, hashOut: 6619135629090164, signature: 'r150' },
	{ name: 'GLTFLoader.js',			hashIn: 1880245480636752, hashOut: 787110731298836,  signature: 'r151' },
	{ name: 'HDRCubeTextureLoader.js',	hashIn: 7805781237823912, hashOut: 4231031161080693, signature: 'r147~r151' },
	{ name: 'IESLoader.js',	            hashIn: 963510463726312,  hashOut: 3841030642095921, signature: 'r149~r151', warning: NOT_CONFIRMED },
	{ name: 'IFCLoader.js',				hashIn: 8358358394655750, hashOut: 3271092516851721, signature: 'r147' },
	{ name: 'IFCLoader.js',				hashIn: 5873512685887024, hashOut: 8198725716566877, signature: 'r148~r149' },
	{ name: 'KMZLoader.js',				hashIn: 2084211947861808, hashOut: 2261888104295646, signature: 'r147' },
	{ name: 'KMZLoader.js',				hashIn: 4335252644311496, hashOut: 1443846302677404, signature: 'r148~r151' },
	{ name: 'KTX2Loader.js',			hashIn: 799691039851878,  hashOut: 5293708535068152, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'KTX2Loader.js',			hashIn: 3469875342013994, hashOut: 5023052550303643, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'KTXLoader.js',				hashIn: 263438741191973,  hashOut: 7574132455449631, signature: 'r147~r151' },
	{ name: 'LDrawLoader.js',			hashIn: 4404633801468125, hashOut: 8438955610967346, signature: 'r147~r151' },
	{ name: 'LUT3dlLoader.js',			hashIn: 4248108453745573, hashOut: 372962538737651,  signature: 'r147~r151' },
	{ name: 'LUTCubeLoader.js',			hashIn: 6853322971310589, hashOut: 2632651733553323, signature: 'r147~r151' },
	{ name: 'LWOLoader.js',				hashIn: 1727556100386125, hashOut: 4344984544325385, signature: 'r147~r151' },
	{ name: 'LogLuvLoader.js',			hashIn: 7667019988018542, hashOut: 8390392656884706, signature: 'r147~r151' },
	{ name: 'LottieLoader.js',			hashIn: 268525378638103,  hashOut: 6462582376925120, signature: 'r147~r151' },
	{ name: 'MD2Loader.js',				hashIn: 6627229281615931, hashOut: 5600921949207869, signature: 'r147~r151' },
	{ name: 'MDDLoader.js',				hashIn: 5081020771383909, hashOut: 5170736741190117, signature: 'r147~r151' },
	{ name: 'MMDLoader.js',				hashIn: 4383285479766598, hashOut: 7329145116112537, signature: 'r147' },
	{ name: 'MMDLoader.js',				hashIn: 5094201978029026, hashOut: 1714568125472221, signature: 'r148' },
	{ name: 'MMDLoader.js',				hashIn: 5497486971384448, hashOut: 5116660463084889, signature: 'r149~r151' },
	{ name: 'MTLLoader.js',				hashIn: 4195166263994081, hashOut: 4951816203125526, signature: 'r147~r151' },
	{ name: 'MaterialXLoader.js',		hashIn: 2589487512906114, hashOut: 5991910953175831, signature: 'r147~r148' },
	{ name: 'MaterialXLoader.js',		hashIn: 5972464427434372, hashOut: 7066232822650616, signature: 'r149~r151' },
	{ name: 'NRRDLoader.js',			hashIn: 5338428868198690, hashOut: 6633643662599103, signature: 'r147' },
	{ name: 'NRRDLoader.js',			hashIn: 5693135991814745, hashOut: 7490979462191516, signature: 'r148~r149' },
	{ name: 'NRRDLoader.js',			hashIn: 6488822937816826, hashOut: 2745001940093010, signature: 'r150~r151' },
	{ name: 'OBJLoader.js',				hashIn: 8539320613750621, hashOut: 8607005329758113, signature: 'r147~r151' },
	{ name: 'PCDLoader.js',				hashIn: 174577900587893,  hashOut: 90758871773622,   signature: 'r147~r148' },
	{ name: 'PCDLoader.js',				hashIn: 6793139786421067, hashOut: 6146014770852025, signature: 'r149~r151' },
	{ name: 'PDBLoader.js',				hashIn: 1942390824571940, hashOut: 4426568255037448, signature: 'r147~r151' },
	{ name: 'PLYLoader.js',				hashIn: 6321820453703505, hashOut: 2743104829861464, signature: 'r147~r148' },
	{ name: 'PLYLoader.js',				hashIn: 1418122416639786, hashOut: 8382084666320243, signature: 'r149~r150' },
	{ name: 'PLYLoader.js',				hashIn: 1556833428085929, hashOut: 3718135579201797, signature: 'r151' },
	{ name: 'PRWMLoader.js',			hashIn: 1676435722552577, hashOut: 2234547836370822, signature: 'r147~r151' },
	{ name: 'PVRLoader.js',				hashIn: 4742186827557016, hashOut: 6783905259006905, signature: 'r147~r151' },
	{ name: 'RGBELoader.js',			hashIn: 8774373481774371, hashOut: 2713451528555688, signature: 'r147~r151' },
	{ name: 'RGBMLoader.js',			hashIn: 3327906731718763, hashOut: 4787902181355767, signature: 'r147~r151' },
	{ name: 'STLLoader.js',				hashIn: 6207484324625078, hashOut: 8361981785006721, signature: 'r147~r148' },
	{ name: 'STLLoader.js',				hashIn: 2212177642244125, hashOut: 4777605153179350, signature: 'r149~r151' },
	{ name: 'SVGLoader.js',				hashIn: 2167699369704942, hashOut: 238359676406321,  signature: 'r147' },
	{ name: 'SVGLoader.js',				hashIn: 4794616874251051, hashOut: 3354732762839924, signature: 'r148' },
	{ name: 'SVGLoader.js',				hashIn: 2914919729198626, hashOut: 3044301665410567, signature: 'r149' },
	{ name: 'SVGLoader.js',				hashIn: 8887828308674914, hashOut: 7028881234996431, signature: 'r150~r151' },
	{ name: 'TDSLoader.js',				hashIn: 5324737644850882, hashOut: 8557847669562224, signature: 'r147~r151' },
	{ name: 'TGALoader.js',				hashIn: 8353641252569428, hashOut: 1541610114347383, signature: 'r147~r151' },
	{ name: 'TIFFLoader.js',			hashIn: 970894889256765,  hashOut: 3296249949909854, signature: 'r147~r151' },
	{ name: 'TTFLoader.js',				hashIn: 3095059602065207, hashOut: 99085047078076,   signature: 'r147' },
	{ name: 'TTFLoader.js',				hashIn: 3252944310227874, hashOut: 530587144421515,  signature: 'r148~r151' },
	{ name: 'TiltLoader.js',			hashIn: 8451212746147442, hashOut: 1717678540383378, signature: 'r147~r151' },
	{ name: 'USDZLoader.js',			hashIn: 4464726926800400, hashOut: 6882285661587657, signature: 'r147' },
	{ name: 'USDZLoader.js',			hashIn: 7566436751954421, hashOut: 4437723288908059, signature: 'r148' },
	{ name: 'USDZLoader.js',			hashIn: 7805072436462254, hashOut: 1084462240753188, signature: 'r149~r151' },
	{ name: 'VOXLoader.js',				hashIn: 2702156927078460, hashOut: 627638577338378,  signature: 'r147~r151' },
	{ name: 'VRMLLoader.js',			hashIn: 4690350257828032, hashOut: 3875099409831451, signature: 'r147' },
	{ name: 'VRMLLoader.js',			hashIn: 7676867688540942, hashOut: 998583324716256,  signature: 'r148~r151' },
	{ name: 'VTKLoader.js',				hashIn: 6102122003933343, hashOut: 701582992248102,  signature: 'r147' },
	{ name: 'VTKLoader.js',				hashIn: 3391402218885390, hashOut: 2227872139841773, signature: 'r148' },
	{ name: 'VTKLoader.js',				hashIn: 3190147807957138, hashOut: 7683487262041329, signature: 'r149~r151' },
	{ name: 'XYZLoader.js',				hashIn: 2615578234448851, hashOut: 7752910996023513, signature: 'r147~r151' },
// jsm\loaders\lwo\*.js
	{ name: 'LWO3Parser.js',			hashIn: 2233868388697166, hashOut: 606396101170167,  signature: 'r147~r151' },
	{ name: 'IFFParser.js',				hashIn: 2890081654480287, hashOut: 40983122673736,   signature: 'r147~r148' },
	{ name: 'IFFParser.js',				hashIn: 425950599607865,  hashOut: 206491386401030,  signature: 'r151' },
	{ name: 'LWO2Parser.js',			hashIn: 1796443683206867, hashOut: 2780350827774177, signature: 'r147~r151' },
// jsm\loaders\ifc\*.js
	{ name: 'web-ifc-api.js',			hashIn: 1494675225369448, hashOut: 8661637107957611, signature: 'r147~r149', warning: NOT_CONFIRMED }, // removed in r150

// jsm\materials\*.js
	{ name: 'MeshGouraudMaterial.js',	hashIn: 2670340595270464, hashOut: 6746845651059425, signature: 'r147~r150' },
	{ name: 'MeshGouraudMaterial.js',	hashIn: 6773356758842839, hashOut: 4014836451519884, signature: 'r151' },


// jsm\math\*.js

	{ name: 'OBB.js',					hashIn: 2135207588843929, hashOut: 6624993466955481, signature: 'r147~r151' },
	{ name: 'Capsule.js',				hashIn: 4997626879274240, hashOut: 8413714414397691, signature: 'r147~r151' },
	{ name: 'ColorConverter.js',		hashIn: 5844967795436179, hashOut: 3187359492214079, signature: 'r147~r151' },
	{ name: 'ConvexHull.js',			hashIn: 8974035973211290, hashOut: 3052918960303382, signature: 'r147~r151' },
	{ name: 'ImprovedNoise.js',			hashIn: 4254330716041642, hashOut: 1175196362348590, signature: 'r147~r151' },
	{ name: 'Lut.js',					hashIn: 5890901043033984, hashOut: 5091633800361764, signature: 'r147~r151' },
	{ name: 'MeshSurfaceSampler.js',	hashIn: 3546265222360370, hashOut: 1593821863726880, signature: 'r147~r149' },
	{ name: 'MeshSurfaceSampler.js',	hashIn: 710402181043761,  hashOut: 3135356683031879, signature: 'r151' },
	{ name: 'Octree.js',				hashIn: 6053182518677834, hashOut: 7302867661003629, signature: 'r147~r151' },
	{ name: 'SimplexNoise.js',			hashIn: 313130152119344,  hashOut: 3168858546443066, signature: 'r147~r151' },


// jsm\misc\*.js

	{ name: 'ConvexObjectBreaker.js',	hashIn: 2987161165189093, hashOut: 5268372775307386, signature: 'r147~r149' },
	{ name: 'ConvexObjectBreaker.js',	hashIn: 5043318973182456, hashOut: 8653162609787474, signature: 'r151' },
	{ name: 'GPUComputationRenderer.js',hashIn: 1894481260558729, hashOut: 8879369700942526, signature: 'r147~r148' },
	{ name: 'GPUComputationRenderer.js',hashIn: 3674054687449417, hashOut: 6534116509697642, signature: 'r149~r151' },
	{ name: 'Gyroscope.js',				hashIn: 3063251394555570, hashOut: 5760639262413468, signature: 'r147~r151' },
	{ name: 'MD2Character.js',			hashIn: 6623186545850287, hashOut: 6634136292271183, signature: 'r147~r151' },
	{ name: 'MD2CharacterComplex.js',	hashIn: 7509488030443826, hashOut: 2159455090720704, signature: 'r147~r151' },
	{ name: 'MorphAnimMesh.js',			hashIn: 371275972047758,  hashOut: 4390419688620672, signature: 'r147~r151' },
	{ name: 'MorphBlendMesh.js',		hashIn: 2645368413028812, hashOut: 1977338054594739, signature: 'r147~r151' },
	{ name: 'ProgressiveLightMap.js',	hashIn: 4662929733634732, hashOut: 1142870966063398, signature: 'r147~r150' },
	{ name: 'ProgressiveLightMap.js',	hashIn: 2772618257222963, hashOut: 2733634500242489, signature: 'r151' },
	{ name: 'RollerCoaster.js',			hashIn: 4968034576584817, hashOut: 6698144221527486, signature: 'r147~r151' },
	{ name: 'TubePainter.js',			hashIn: 4706751632377804, hashOut: 7332834514313893, signature: 'r147~r151' },
	{ name: 'Volume.js',				hashIn: 4185603872654050, hashOut: 7373291575608959, signature: 'r147~r151' },
	{ name: 'VolumeSlice.js',			hashIn: 5921125576207369, hashOut: 2864729225536748, signature: 'r147~r151' },


// jsm\modifiers\*.js

	{ name: 'CurveModifier.js',			hashIn: 2161126201929561, hashOut: 2232249837049942, signature: 'r147~r150' },
	{ name: 'CurveModifier.js',			hashIn: 6107572258254008, hashOut: 6889820974919284, signature: 'r151' },
	{ name: 'EdgeSplitModifier.js',		hashIn: 4661968250764111, hashOut: 2525991716015486, signature: 'r147~r151' },
	{ name: 'SimplifyModifier.js',		hashIn: 8325670109126825, hashOut: 7089325051573543, signature: 'r147~r151' },
	{ name: 'TessellateModifier.js',	hashIn: 8441784596459318, hashOut: 1151084173615225, signature: 'r147~r151' },
	
	
// jsm\node-editor\*.js

	{ name: 'AngleEditor.js',			hashIn: 7103042719526831, hashOut: 2648621351455328, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'BaseNode.js',				hashIn: 4696210223607859, hashOut: 7524013299532647, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'BaseNode.js',				hashIn: 1764447501889882, hashOut: 3441823990490223, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'BasicMaterialEditor.js',	hashIn: 468567294668750,  hashOut: 8701627047776784, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'BlendEditor.js',			hashIn: 985517102603003,  hashOut: 1609903978843049, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'CheckerEditor.js',			hashIn: 3024729574522539, hashOut: 7763214454883906, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'ColorEditor.js',			hashIn: 7145537340890478, hashOut: 4486461929688680, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'DataFile.js',				hashIn: 2077767642808545, hashOut: 8788504260217521, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'DotEditor.js',				hashIn: 1367113573024168, hashOut: 8093023032787717, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'FileEditor.js',			hashIn: 5742270388155860, hashOut: 6327428751632264, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'FileURLEditor.js',			hashIn: 932005385267466,  hashOut: 8795826954268334, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'FloatEditor.js',			hashIn: 1725718387012867, hashOut: 3710900384988531, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'InvertEditor.js',			hashIn: 2226139934222310, hashOut: 5777460077577603, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'JoinEditor.js',			hashIn: 4954158062034340, hashOut: 3554914767187268, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'LimiterEditor.js',			hashIn: 3842865318405121, hashOut: 7335980582195251, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'MatcapUVEditor.js',		hashIn: 660325595579377,  hashOut: 5672368538554476, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'MeshEditor.js',			hashIn: 5378855441743591, hashOut: 3742233525249708, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'NodeEditor.js',			hashIn: 1444796095874123, hashOut: 1216932877769085, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'NodeEditor.js',			hashIn: 7302614402687781, hashOut: 2290300507602803, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NormalEditor.js',			hashIn: 475152709346262,  hashOut: 3521916181129061, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'NormalMapEditor.js',		hashIn: 6148939952210289, hashOut: 1436103787050961, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'NormalizeEditor.js',		hashIn: 3408227873320708, hashOut: 5506965056897427, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'Object3DEditor.js',		hashIn: 4164205520538156, hashOut: 4788566936713453, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'OperatorEditor.js',		hashIn: 686985015210577,  hashOut: 5204439375479894, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'OscillatorEditor.js',		hashIn: 8503482133814040, hashOut: 7097307166903253, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'PointsEditor.js',			hashIn: 2137657412265819, hashOut: 6202726717056428, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'PointsMaterialEditor.js',	hashIn: 3765830111885167, hashOut: 5733170420314888, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'PositionEditor.js',		hashIn: 1149847810990391, hashOut: 5666227552024079, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'PowerEditor.js',			hashIn: 5564897189213694, hashOut: 2879629968390496, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'PreviewEditor.js',			hashIn: 4730143078278435, hashOut: 685847901383335,  signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'SliderEditor.js',			hashIn: 5403269129578312, hashOut: 5309041856348877, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'SplitEditor.js',			hashIn: 3195733930952767, hashOut: 235893935799661,  signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'StandardMaterialEditor.js',hashIn: 486669368941575,  hashOut: 2285905273724121, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'TextureEditor.js',			hashIn: 2600379447117599, hashOut: 6795947952040273, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'TimerEditor.js',			hashIn: 765498612922649,  hashOut: 2761193396438746, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'TrigonometryEditor.js',	hashIn: 5754107985597034, hashOut: 8850809840793077, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'UVEditor.js',				hashIn: 5005885370621501, hashOut: 4229172361836172, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'Vector2Editor.js',			hashIn: 3513055448970024, hashOut: 5565911179672624, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'Vector3Editor.js',			hashIn: 3442536313023315, hashOut: 1753596741334741, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'Vector4Editor.js',			hashIn: 2494326139638469, hashOut: 2141125090827580, signature: 'r147~r150', warning: NOT_CONFIRMED },


// jsm\nodes\*.js
	{ name: 'Nodes.js',					hashIn: 3739034354562765, hashOut: 7169626053645541, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Nodes.js',					hashIn: 1148773408938007, hashOut: 1025901858767157, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'Nodes.js',					hashIn: 7253534545186686, hashOut: 0,                signature: 'r149', warning: CANNOT_CONVERT },
	{ name: 'Nodes.js',					hashIn: 3785469259821889, hashOut: 0,                signature: 'r150', warning: CANNOT_CONVERT },
	{ name: 'Nodes.js',					hashIn: 649884851656731,  hashOut: 0,                signature: 'r151', warning: CANNOT_CONVERT },
	
// jsm\nodes\accessors\*.js
	{ name: 'BitangentNode.js',			hashIn: 4478064407642248, hashOut: 7400311994412170, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'BitangentNode.js',			hashIn: 4892948953298703, hashOut: 6954194866565464, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'BitangentNode.js',			hashIn: 3348198289940834, hashOut: 5789445584582288, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'BufferNode.js',			hashIn: 8657926454501624, hashOut: 2250190727216212, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'BufferNode.js',			hashIn: 5816274045167395, hashOut: 479347960281748,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'CameraNode.js',			hashIn: 2582092261289307, hashOut: 1325185706514015, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'CameraNode.js',			hashIn: 4675226800587361, hashOut: 4943535935746380, signature: 'r147~r148', warning: NOT_CONFIRMED },
 	{ name: 'CameraNode.js',			hashIn: 6254205280683850, hashOut: 3654105472172444, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'CubeTextureNode.js',		hashIn: 4105038834861426, hashOut: 4307658617972962, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CubeTextureNode.js',		hashIn: 4886264389574773, hashOut: 1552423336093892, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'CubeTextureNode.js',		hashIn: 6094436420843852, hashOut: 8024648986861385, signature: 'r148', warning: NOT_CONFIRMED },
 	{ name: 'CubeTextureNode.js',		hashIn: 6586715039536022, hashOut: 461906253582011,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'CubeTextureNode.js',		hashIn: 4555514613414753, hashOut: 7904539073345873, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'ExtendedMaterialNode.js',	hashIn: 2569731610026583, hashOut: 1834150953467961, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ExtendedMaterialNode.js',	hashIn: 6912370882960406, hashOut: 5403231881762153, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'InstanceNode.js',			hashIn: 25142085207799,   hashOut: 4143719270330534, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'InstanceNode.js',			hashIn: 7687662411561372, hashOut: 2309026533631502, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MaterialNode.js',			hashIn: 1477999328193230, hashOut: 951464408891222,  signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'MaterialNode.js',			hashIn: 288734895774665,  hashOut: 361190237741108,   signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'MaterialNode.js',			hashIn: 3452944660931535, hashOut: 2095966928101194, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'MaterialNode.js',			hashIn: 5261219440034990, hashOut: 5840103989073775, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MaterialReferenceNode.js',	hashIn: 3121709357695823, hashOut: 5287539237471833, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'MaterialReferenceNode.js',	hashIn: 660178799287067,  hashOut: 2010340120888318, signature: 'r147~r148', warning: NOT_CONFIRMED },
 	{ name: 'MaterialReferenceNode.js',	hashIn: 1440248560824210, hashOut: 1828643039874225, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ModelNode.js',				hashIn: 6266252382709979, hashOut: 5432235811995455, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'ModelNode.js',				hashIn: 5399836974658625, hashOut: 6188235531083665, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ModelViewProjectionNode.js',hashIn: 3959737172233400,hashOut: 7648661217622527, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'ModelViewProjectionNode.js',hashIn: 174497317759714, hashOut: 7681380159331983, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'NormalNode.js',			hashIn: 4663284445626661, hashOut: 198290098465077,  signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'NormalNode.js',			hashIn: 5520115395422454, hashOut: 7110116526237323, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalNode.js',			hashIn: 6962306010877206, hashOut: 8589352558659585, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'NormalNode.js',			hashIn: 2592946858511138, hashOut: 5833949835700213, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'Object3DNode.js',			hashIn: 181259750474701,  hashOut: 7155981781521024, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'Object3DNode.js',			hashIn: 238552438689512,  hashOut: 3976930702120029, signature: 'r147~r148', warning: NOT_CONFIRMED },
 	{ name: 'Object3DNode.js',			hashIn: 4468247911004360, hashOut: 1903365845977533, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'PointUVNode.js',			hashIn: 6528536225258988, hashOut: 8041044549100753, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'PointUVNode.js',			hashIn: 1453521277504776, hashOut: 3625102350367081, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'PositionNode.js',			hashIn: 386678160075834,  hashOut: 8584236017871279, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PositionNode.js',			hashIn: 5337069572572243, hashOut: 7101340156302795, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'PositionNode.js',			hashIn: 6789603473699339, hashOut: 2822326752724185, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'PositionNode.js',			hashIn: 3432960919851759, hashOut: 1924140850592136, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ReferenceNode.js',			hashIn: 7874964702771107, hashOut: 2903456627682933, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'ReferenceNode.js',			hashIn: 8634383008211599, hashOut: 3258542487865157, signature: 'r147~r148', warning: NOT_CONFIRMED },
 	{ name: 'ReferenceNode.js',			hashIn: 2365320213102946, hashOut: 5375799671457504, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ReflectVectorNode.js',		hashIn: 6180018898058907, hashOut: 79281962945934,   signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'ReflectVectorNode.js',		hashIn: 7933366515622147, hashOut: 845359256997357,  signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ReflectVectorNode.js',		hashIn: 6911357020160846, hashOut: 4479297587979364, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SkinningNode.js',			hashIn: 3030483146409240, hashOut: 3596362395010190, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'SkinningNode.js',			hashIn: 6869193537967095, hashOut: 3165280499714936, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'StorageBufferNode.js',		hashIn: 4788076833532350, hashOut: 5931033116372254, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'StorageBufferNode.js',		hashIn: 7007331866552867, hashOut: 4103883375124174, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'TangentNode.js',			hashIn: 2082324939942180, hashOut: 7384625819404769, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'TangentNode.js',			hashIn: 6757437416015567, hashOut: 1131114924383363, signature: 'r147~r148', warning: NOT_CONFIRMED },
 	{ name: 'TangentNode.js',			hashIn: 3694310923145455, hashOut: 6134050391891240, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'TextureNode.js',			hashIn: 3360527597154010, hashOut: 4985628915588008, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'TextureNode.js',			hashIn: 4374528483563140, hashOut: 5734693667142344, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TextureNode.js',			hashIn: 6539037016272871, hashOut: 1131332537679184, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'TextureNode.js',			hashIn: 6523398353646059, hashOut: 537198482415957,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'TextureNode.js',			hashIn: 235657372029839,  hashOut: 3678122460059408, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'UVNode.js',				hashIn: 6428767211569947, hashOut: 2188461703391638, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'UVNode.js',				hashIn: 6572264849159658, hashOut: 6907078933797648, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'UserDataNode.js',			hashIn: 1836814027368517, hashOut: 2895346125139011, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'UserDataNode.js',			hashIn: 8728634303789332, hashOut: 2265226874894635, signature: 'r150~r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\code\*.js
	{ name: 'CodeNode.js',				hashIn: 4014169988643956, hashOut: 866190272440995,  signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'CodeNode.js',				hashIn: 3231029829250461, hashOut: 5023976221800027, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'CodeNode.js',				hashIn: 1080502561363558, hashOut: 2434496642377253, signature: 'r151' },
	{ name: 'ExpressionNode.js',		hashIn: 4993036877621130, hashOut: 359795046775582,  signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'ExpressionNode.js',		hashIn: 5739646222693034, hashOut: 1510995691527671, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'ExpressionNode.js',		hashIn: 4239544061694438, hashOut: 3947422488880348, signature: 'r150', warning: NOT_CONFIRMED },
 	{ name: 'ExpressionNode.js',		hashIn: 6853565174004261, hashOut: 5927161690666437, signature: 'r151' },
	{ name: 'FunctionCallNode.js',		hashIn: 5079249912911592, hashOut: 5834487436044087, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'FunctionCallNode.js',		hashIn: 1939356246775464, hashOut: 7987875029467870, signature: 'r150', warning: NOT_CONFIRMED },
 	{ name: 'FunctionCallNode.js',		hashIn: 702154363274085,  hashOut: 4380933598054753, signature: 'r151' },
	{ name: 'FunctionNode.js',			hashIn: 250070119451863,  hashOut: 5989836821471026, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'FunctionNode.js',			hashIn: 4011459111918015, hashOut: 2703291138845755, signature: 'r150', warning: NOT_CONFIRMED },
 	{ name: 'FunctionNode.js',			hashIn: 8258090358811150, hashOut: 4793824046456947, signature: 'r151' },
 	{ name: 'ScriptableNode.js',		hashIn: 5062613646797522, hashOut: 2962631689787211, signature: 'r151', warning: NOT_CONFIRMED },
 	{ name: 'ScriptableValueNode.js',	hashIn: 1346828629162414, hashOut: 1098758819509229, signature: 'r151', warning: NOT_CONFIRMED },

// jsm\nodes\core\*.js
	{ name: 'ArrayUniformNode.js',		hashIn: 4271434437372202, hashOut: 4072066383035614, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'ArrayUniformNode.js',		hashIn: 8334698831222535, hashOut: 8437174928667923, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'AttributeNode.js',			hashIn: 2875674653398771, hashOut: 3246408860774080, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'AttributeNode.js',			hashIn: 2506276538901435, hashOut: 2898452942727919, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'BypassNode.js',			hashIn: 205161900825960,  hashOut: 1495481959668535, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'BypassNode.js',			hashIn: 8399778689646609, hashOut: 5395995555247438, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'BypassNode.js',			hashIn: 7881681820816433, hashOut: 5144388833475584, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'CacheNode.js',				hashIn: 437864208551428,  hashOut: 6067779932302013, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'CacheNode.js',				hashIn: 4873863781871652, hashOut: 7417148008206325, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'constants.js',				hashIn: 8092164987108498, hashOut: 4979088863225746, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'constants.js',				hashIn: 2423846254686774, hashOut: 8821360085291984, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ConstNode.js',				hashIn: 4114800523612154, hashOut: 8859067331978084, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'ConstNode.js',				hashIn: 7326833239974615, hashOut: 4474544798920943, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ContextNode.js',			hashIn: 1240346436129892, hashOut: 1677238775506857, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'ContextNode.js',			hashIn: 4933509378064108, hashOut: 8384424971231132, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'InputNode.js',				hashIn: 4745662524942874, hashOut: 1149565278900201, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'InputNode.js',				hashIn: 6114445815488301, hashOut: 7852040024182418, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'InputNode.js',				hashIn: 818791233705455,  hashOut: 813391896657225,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'InputNode.js',				hashIn: 6816901614576228, hashOut: 2189507116816183, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'InstanceIndexNode.js',		hashIn: 8790427031006074, hashOut: 3898404940607954, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'InstanceIndexNode.js',		hashIn: 6489865221212967, hashOut: 5142964724061501, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'LightingNode.js',			hashIn: 1116855223595862, hashOut: 5554684411935167, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'LightingModel.js',			hashIn: 6998653216530530, hashOut: 5607714258154835, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'LightingModel.js',			hashIn: 557913877304014,  hashOut: 6557389243797118, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 6244524141875284, hashOut: 3018411548857356, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 6084694813978921, hashOut: 6577947127223138, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 3036780560079528, hashOut: 3441612981170080, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 3249127934741000, hashOut: 185665293519666,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 5445294999017782, hashOut: 5879788175955685, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeAttribute.js',			hashIn: 4787554578847778, hashOut: 2977492529861007, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 7196143292553381, hashOut: 3334793217902839, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 6054816939987917, hashOut: 1683435233931976, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 758728875513416,  hashOut: 6324558953447387, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 2001411520915032, hashOut: 6634645705573344, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 7721252664983939, hashOut: 7181920984035133, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeCache.js',				hashIn: 1861989613104239, hashOut: 2321924915472615, signature: 'r149~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeCode.js',				hashIn: 1016992313207737, hashOut: 4533058625715521, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeFrame.js',				hashIn: 8967708589533208, hashOut: 2584608326015115, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'NodeFrame.js',				hashIn: 5411895366146225, hashOut: 4612933499893510, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeFunction.js',			hashIn: 4872268463155198, hashOut: 8070923404082827, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeFunctionInput.js',		hashIn: 2826682585646658, hashOut: 984423109007925,  signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeKeywords.js',			hashIn: 6186253221635348, hashOut: 7142121143031890, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeParser.js',			hashIn: 2789411952290145, hashOut: 4214987953860710, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeUniform.js',			hashIn: 938892601707905,  hashOut: 6849343660009814, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeUtils.js',				hashIn: 5148966146741746, hashOut: 2850712212549755, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'NodeUtils.js',				hashIn: 9000658394427583, hashOut: 4069176016698668, signature: 'r149~r150', warning: NOT_CONFIRMED },
	{ name: 'NodeUtils.js',				hashIn: 6201804890237942, hashOut: 0, 				 signature: 'r151', warning: CANNOT_CONVERT },
	{ name: 'NodeVar.js',				hashIn: 6755529505393788, hashOut: 5500764033555152, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'NodeVarying.js',			hashIn: 8270580599641779, hashOut: 5764626595242919, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'PropertyNode.js',			hashIn: 5321941455446123, hashOut: 4570037250674243, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'PropertyNode.js',			hashIn: 497398800169691,  hashOut: 3176221584105851, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'PropertyNode.js',			hashIn: 8836085045647372, hashOut: 1261294572399445, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'StackNode.js',				hashIn: 1425335880725081, hashOut: 2744179587184063, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'StackNode.js',				hashIn: 4990843265457167, hashOut: 8398056736416604, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'StackNode.js',				hashIn: 669162858935817,  hashOut: 1613584716262228, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'StackNode.js',				hashIn: 1992640991234704, hashOut: 3798944766884794, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'TempNode.js',				hashIn: 7854831728001326, hashOut: 4772784475611884, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TempNode.js',				hashIn: 4963936143914691, hashOut: 4930038205240158, signature: 'r148~r149', warning: NOT_CONFIRMED },
	{ name: 'TempNode.js',				hashIn: 5341913875871269, hashOut: 6435462833910767, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'TempNode.js',				hashIn: 5576968626604265, hashOut: 8397050010288672, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'UniformNode.js',			hashIn: 5563840458832001, hashOut: 5632304488122298, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'UniformNode.js',			hashIn: 6359511432218341, hashOut: 969217372178063,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'VarNode.js',				hashIn: 3119767482048547, hashOut: 6721205794504776, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'VarNode.js',				hashIn: 2770914690922873, hashOut: 335511253841787,  signature: 'r148~r149', warning: NOT_CONFIRMED },
	{ name: 'VarNode.js',				hashIn: 4312478120876983, hashOut: 171612890498765,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'VarNode.js',				hashIn: 5439663556385481, hashOut: 227630048987994,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'VaryingNode.js',			hashIn: 569838008193615,  hashOut: 3537126659855544, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'VaryingNode.js',			hashIn: 5419129497685865, hashOut: 8722203091470208, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'VaryingNode.js',			hashIn: 6923244854607096, hashOut: 881783484508677,  signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'VaryingNode.js',			hashIn: 1629573272919334, hashOut: 265155226957154,  signature: 'r150~r151', warning: NOT_CONFIRMED },
// jsm\nodes\display\*.js	
	{ name: 'BlendModeNode.js',			hashIn: 4268371694686236, hashOut: 1451958407181120, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'BlendModeNode.js',			hashIn: 2035315954062093, hashOut: 491516900812213,  signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'BlendModeNode.js',			hashIn: 7431417373753131, hashOut: 6277765877285556, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'BlendModeNode.js',			hashIn: 4258865926305308, hashOut: 2016081638866912, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'ColorAdjustmentNode.js',	hashIn: 6986943287482690, hashOut: 2691352570044187, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'ColorAdjustmentNode.js',	hashIn: 124899475970635,  hashOut: 4101072498796618, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ColorAdjustmentNode.js',	hashIn: 7367250490597390, hashOut: 1815621809373030, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'ColorAdjustmentNode.js',	hashIn: 8775536377765166, hashOut: 7010144984905740, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'ColorSpaceNode.js',		hashIn: 4148152951523050, hashOut: 2887899281193633, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'ColorSpaceNode.js',		hashIn: 2285007283109350, hashOut: 6366531660065329, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ColorSpaceNode.js',		hashIn: 761662327732718,  hashOut: 7130790206626629, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'FrontFacingNode.js',		hashIn: 1705351267893703, hashOut: 5006821604756800, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'FrontFacingNode.js',		hashIn: 7272560116006036, hashOut: 25168822703660,   signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'NormalMapNode.js',			hashIn: 2324830254906597, hashOut: 6554811592662327, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'NormalMapNode.js',			hashIn: 1430804267300398, hashOut: 7698451057577833, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NormalMapNode.js',			hashIn: 5430455739921479, hashOut: 793496646448345,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'PosterizeNode.js',			hashIn: 4530133854420088, hashOut: 6770549636584985, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'PosterizeNode.js',			hashIn: 6362940299672679, hashOut: 5778741012433438, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ToneMappingNode.js',		hashIn: 1866434321729206, hashOut: 2004796257404351, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ToneMappingNode.js',		hashIn: 540011706282124,  hashOut: 3102268412214681, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'ToneMappingNode.js',		hashIn: 8220621123844243, hashOut: 6080826608652587, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ToneMappingNode.js',		hashIn: 3248139373125562, hashOut: 1921580101685148, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ViewportNode.js',			hashIn: 6801193502744891, hashOut: 3150052211689763, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'ViewportNode.js',			hashIn: 7285965225799671, hashOut: 6951426854663280, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'ViewportNode.js',			hashIn: 1951326846746040, hashOut: 4257752609230408, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'ViewportNode.js',			hashIn: 2228272693553598, hashOut: 6593035105417650, signature: 'r151', warning: NOT_CONFIRMED },

// jsm\nodes\fog\*.js
	{ name: 'FogExp2Node.js',			hashIn: 1118240580560743, hashOut: 5954065012267516, signature: 'r148~r149', warning: NOT_CONFIRMED },
	{ name: 'FogExp2Node.js',			hashIn: 1545568106235915, hashOut: 635059506405385,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'FogExp2Node.js',			hashIn: 8842088722632041, hashOut: 502311806890625,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'FogNode.js',				hashIn: 1949545219141071, hashOut: 6597392341536451, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'FogNode.js',				hashIn: 4635508911339628, hashOut: 8615662424949298, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'FogNode.js',				hashIn: 8908729623107719, hashOut: 817458771918976,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'FogRangeNode.js',			hashIn: 7314524163268548, hashOut: 412982001161073,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FogRangeNode.js',			hashIn: 4342966143209429, hashOut: 7961791138616513, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'FogRangeNode.js',			hashIn: 1234004238635127, hashOut: 7081638706361276, signature: 'r150~r151', warning: NOT_CONFIRMED },

// jsm\nodes\functions\*.js
	{ name: 'PhongLightingModel.js',	hashIn: 3089915195455047, hashOut: 842691363847741,  signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'PhongLightingModel.js',	hashIn: 1485419832221026, hashOut: 1326636289022729, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'PhysicalLightingModel.js',	hashIn: 6038683283243869, hashOut: 4968826458403452, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'PhysicalLightingModel.js',	hashIn: 3389734775035072, hashOut: 3707792337211636, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'PhysicalLightingModel.js',	hashIn: 5866891325783084, hashOut: 2562397886566015, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'PhysicalLightingModel.js',	hashIn: 4823044049481653, hashOut: 1950671373452996, signature: 'r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\functions\BSDF\*.js
	{ name: 'BRDF_BlinnPhong.js',		hashIn: 5885240336771608, hashOut: 7115008704647969, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'BRDF_BlinnPhong.js',		hashIn: 4349396311070209, hashOut: 5934835213427001, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'BRDF_GGX.js',				hashIn: 3067212415344788, hashOut: 724582098149373,  signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'BRDF_GGX.js',				hashIn: 2843215169992132, hashOut: 8761836614212487, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'BRDF_Lambert.js',			hashIn: 7218619997592786, hashOut: 4368596691387029, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'BRDF_Lambert.js',			hashIn: 7617291054445535, hashOut: 683133558804081,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'D_GGX.js',					hashIn: 4371787720755138, hashOut: 658475706444905,  signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'D_GGX.js',					hashIn: 7611265532051736, hashOut: 8299846976250311, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'D_GGX.js',					hashIn: 3262735429085279, hashOut: 6763073914529634, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'DFGApprox.js',				hashIn: 5223718001073784, hashOut: 3623551371560894, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'DFGApprox.js',				hashIn: 7573316470420469, hashOut: 1461868277193185, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'DFGApprox.js',				hashIn: 7044215842973076, hashOut: 6818790879384570, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'DFGApprox.js',				hashIn: 6319455175026269, hashOut: 1244488801658880, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'F_Schlick.js',				hashIn: 754685430247297,  hashOut: 6439127058146034, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'F_Schlick.js',				hashIn: 2672004333860047, hashOut: 2642875467068315, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'F_Schlick.js',				hashIn: 3565812327724925, hashOut: 4959121770688785, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'F_Schlick.js',				hashIn: 5147339769893546, hashOut: 7525718980095134, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'V_GGX_SmithCorrelated.js',	hashIn: 4401754165615415, hashOut: 8470078391617563, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'V_GGX_SmithCorrelated.js',	hashIn: 612125684217327,  hashOut: 5149876071613341, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'V_GGX_SmithCorrelated.js',	hashIn: 8589662491829133, hashOut: 437117355082939,  signature: 'r151', warning: NOT_CONFIRMED },

// jsm\nodes\functions\light\*.js
	{ name: 'getDirectionVector.js',	hashIn: 3407393882558236, hashOut: 3749327545372091, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'getDirectionVector.js',	hashIn: 5459864147203751, hashOut: 3542027159627523, signature: 'r149~r151', warning: NOT_CONFIRMED },
	{ name: 'getDistanceAttenuation.js',hashIn: 4670384299842605, hashOut: 1254305106933734, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'getDistanceAttenuation.js',hashIn: 7709160963280537, hashOut: 7177492147651234, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'getDistanceAttenuation.js',hashIn: 4510926106073972, hashOut: 8491358205381568, signature: 'r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\functions\material\*.js
	{ name: 'getGeometryRoughness.js',	hashIn: 2403794302506185, hashOut: 4797686265846784, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'getGeometryRoughness.js',	hashIn: 254257497006472,  hashOut: 479997647360575,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'getRoughness.js',			hashIn: 2344767431956718, hashOut: 2275029749759530, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'getRoughness.js',			hashIn: 6944480685073801, hashOut: 7108141078837659, signature: 'r150~r151', warning: NOT_CONFIRMED },
// geometry
	{ name: 'RangeNode.js',				hashIn: 71056648543846,   hashOut: 8796000323577376, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'RangeNode.js',				hashIn: 7853319243946466, hashOut: 107781457256653,  signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'RangeNode.js',				hashIn: 1752254243436991, hashOut: 5638887236774016, signature: 'r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\gpgpu\*.js
	{ name: 'ComputeNode.js',			hashIn: 1054784988531654, hashOut: 712962072860169, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'ComputeNode.js',			hashIn: 1583215515749524, hashOut: 682780310678136, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'ComputeNode.js',			hashIn: 7020333711562187, hashOut: 5916751503795630,signature: 'r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\lightning\*.js
	{ name: 'AmbientLightNode.js',		hashIn: 6933123981270860, hashOut: 2091292576559292, signature: 'r148~r149', warning: NOT_CONFIRMED },
	{ name: 'AmbientLightNode.js',		hashIn: 3646608535896135, hashOut: 6085619036348639, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'AnalyticLightNode.js',		hashIn: 8853826026754983, hashOut: 8892800106056051, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'AnalyticLightNode.js',		hashIn: 2984155383399464, hashOut: 6103636689661128, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'AONode.js',				hashIn: 1428261846415909, hashOut: 8404964755996444, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'AONode.js',				hashIn: 3030769898413722, hashOut: 3936019759842487, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'DirectionalLightNode.js',	hashIn: 7343441490723245, hashOut: 492266805946406,  signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'DirectionalLightNode.js',	hashIn: 5579758910973357, hashOut: 5600095316156866, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'DirectionalLightNode.js',	hashIn: 7749064665061213, hashOut: 1612028366082663, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'EnvironmentNode.js',		hashIn: 4997902556795400, hashOut: 8685970366529682, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'EnvironmentNode.js',		hashIn: 4240995083602251, hashOut: 3162065436468083, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'EnvironmentNode.js',		hashIn: 3961857425756535, hashOut: 3594619579179468, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'EnvironmentNode.js',		hashIn: 8251113228218987, hashOut: 2754429388137469, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'HemisphereLightNode.js',	hashIn: 8140502267106289, hashOut: 8654205769074875, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'HemisphereLightNode.js',	hashIn: 7461671846617177, hashOut: 2721180404477822, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'IESSpotLightNode.js',		hashIn: 544416506575978,  hashOut: 6797565721230102, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'IESSpotLightNode.js',		hashIn: 6120088013448167, hashOut: 2708269197628114, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'LightingContextNode.js',	hashIn: 2799802348666513, hashOut: 6733142606809730, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'LightingContextNode.js',	hashIn: 6436221094896364, hashOut: 6655840268235082, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'LightingContextNode.js',	hashIn: 1455108025713366, hashOut: 3044615741826104, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'LightsNode.js',			hashIn: 1068998306406529, hashOut: 431796183355173,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LightsNode.js',			hashIn: 5644489177566251, hashOut: 6857141418808134, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'LightsNode.js',			hashIn: 2057805505632913, hashOut: 3157829763047716, signature: 'r150~r151', warning: NOT_CONFIRMED },
 	{ name: 'LightingNode.js',			hashIn: 7481073444214539, hashOut: 6612833031012326, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'PointLightNode.js',		hashIn: 5630060986903121, hashOut: 8493810733381263, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'PointLightNode.js',		hashIn: 8717006840869635, hashOut: 1898731818518044, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'PointLightNode.js',		hashIn: 5635521632711962, hashOut: 4631858717731191, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SpotLightNode.js',			hashIn: 8186293475502268, hashOut: 6669444222257681, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'SpotLightNode.js',			hashIn: 5354886822347785, hashOut: 88870268953468,   signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'SpotLightNode.js',			hashIn: 5025160528172803, hashOut: 8760204836497525, signature: 'r150~r151', warning: NOT_CONFIRMED },
	
// loaders
	{ name: 'NodeLoader.js',			hashIn: 2918269744395290, hashOut: 6855500209763981, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'NodeLoader.js',			hashIn: 1939046988662703, hashOut: 7589538649087080, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NodeLoader.js',			hashIn: 2667139736588400, hashOut: 1529237760733884, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterialLoader.js',	hashIn: 3521758013197878, hashOut: 8536997720879747, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterialLoader.js',	hashIn: 655481302506818,  hashOut: 2957273072875342, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterialLoader.js',	hashIn: 3974224044652751, hashOut: 8851726477065285, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeObjectLoader.js',		hashIn: 927652164438870,  hashOut: 8317656018210108, signature: 'r147~r151', warning: NOT_CONFIRMED },
// jsm\nodes\materialx\*.js
	{ name: 'MaterialXNodes.js',		hashIn: 8125210337175823, hashOut: 1777437433286646, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'MaterialXNodes.js',		hashIn: 2475229826762752, hashOut: 6232350157434792, signature: 'r150~r151', warning: NOT_CONFIRMED },
// jsm\nodes\materialx\lib\*.js
	{ name: 'mx_hsv.js',				hashIn: 8612247265397573, hashOut: 6593626437483743, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'mx_hsv.js',				hashIn: 7414644985977917, hashOut: 8508319204600,    signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'mx_hsv.js',				hashIn: 324714855931635, hashOut: 5381728742964780,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'mx_noise.js',				hashIn: 7545102876068827, hashOut: 1461732013261418, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'mx_noise.js',				hashIn: 7288725542598969, hashOut: 7511840910262214, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'mx_noise.js',				hashIn: 985237645879781, hashOut: 3076902791193785,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'mx_transform_color.js',	hashIn: 6937448922803299, hashOut: 153109051091149,  signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'mx_transform_color.js',	hashIn: 1887933327871652, hashOut: 1909389673979823, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'mx_transform_color.js',	hashIn: 8699135669795161, hashOut: 4011809048770202, signature: 'r151', warning: NOT_CONFIRMED },
// jsm\nodes\materialx\materials\*.js
	{ name: 'LineBasicNodeMaterial.js',	hashIn: 915052349798962,  hashOut: 3780283952005373, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'LineBasicNodeMaterial.js',	hashIn: 8155566396857658, hashOut: 8074903747577446, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'LineBasicNodeMaterial.js',	hashIn: 8004987051771505, hashOut: 436228807160005,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'Materials.js',				hashIn: 4711876339385991, hashOut: 5787978937654885, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'Materials.js',				hashIn: 3554615473939508, hashOut: 4264735835264861, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'Materials.js',				hashIn: 5682825957581573, hashOut: 0, 				 signature: 'r150~r151', warning: CANNOT_CONVERT },
	{ name: 'MeshBasicNodeMaterial.js',	hashIn: 191474633408006,  hashOut: 7829657454406210, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MeshBasicNodeMaterial.js',	hashIn: 7223464979996446, hashOut: 512323636173935,  signature: 'r148~r149', warning: NOT_CONFIRMED },
	{ name: 'MeshBasicNodeMaterial.js',	hashIn: 7881633730322065, hashOut: 542722800622075,  signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MeshNormalNodeMaterial.js',hashIn: 588056682142571,  hashOut: 5265597440157264, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'MeshNormalNodeMaterial.js',hashIn: 7610894947638110, hashOut: 8629809373235523, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'MeshPhysicalNodeMaterial.js',hashIn: 53564693443152, hashOut: 5031420011405163, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'MeshPhysicalNodeMaterial.js',hashIn: 6181038172292318,hashOut: 5413875859325409,signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MeshPhongNodeMaterial.js',	hashIn: 1779479591474311, hashOut: 8443695151522921, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'MeshPhongNodeMaterial.js',	hashIn: 7996897674808307, hashOut: 4152003277617364, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'MeshPhongNodeMaterial.js',	hashIn: 1096852225113518, hashOut: 5063992688128265, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'MeshStandardNodeMaterial.js',hashIn: 4097615313711052,hashOut:5258360580468659, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'MeshStandardNodeMaterial.js',hashIn: 2313322348888025,hashOut: 7329336660820799,signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'MeshStandardNodeMaterial.js',hashIn: 1512850053261915,hashOut: 1238438495623968,signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'MeshStandardNodeMaterial.js',hashIn: 2210662862198908,hashOut: 7206433780159313,signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterial.js',			hashIn: 5534438469452974, hashOut: 2173121791928452, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterial.js',			hashIn: 1197484520949455, hashOut: 8616035268064327, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterial.js',			hashIn: 3963065837387633, hashOut: 6427969562449655, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'NodeMaterial.js',			hashIn: 3985987086896924, hashOut: 2194695343925292, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterial.js',			hashIn: 1392064129175203, hashOut: 7168147145340761, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'PointsNodeMaterial.js',	hashIn: 5690698238683948, hashOut: 3082694739062762, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'PointsNodeMaterial.js',	hashIn: 1426705471214529, hashOut: 8229530409381194, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'PointsNodeMaterial.js',	hashIn: 4720509615321105, hashOut: 8749012573957313, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SpriteNodeMaterial.js',	hashIn: 2846465361364088, hashOut: 2953135237559588, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'SpriteNodeMaterial.js',	hashIn: 4907098073094447, hashOut: 4842226301389373, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'SpriteNodeMaterial.js',	hashIn: 7808658972772234, hashOut: 8608304554714993, signature: 'r150~r151', warning: NOT_CONFIRMED },

// jsm\nodes\math\*.js
	{ name: 'CondNode.js',				hashIn: 4747466710930709, hashOut: 7917238149438753, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'CondNode.js',				hashIn: 7970461200263882, hashOut: 8251821724476558, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'CondNode.js',				hashIn: 1281032624006275, hashOut: 8888257454039634, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'CondNode.js',				hashIn: 2566060507427126, hashOut: 7301857252059240, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'MathNode.js',				hashIn: 1146322599696457, hashOut: 6362407122514158, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'MathNode.js',				hashIn: 717885523461531,  hashOut: 6092735861386127, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'MathNode.js',				hashIn: 5719624825207856, hashOut: 5016565328048292, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'MathNode.js',				hashIn: 1950955009752578, hashOut: 1786917480036475, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'OperatorNode.js',			hashIn: 4060169501724292, hashOut: 4641569127094616, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OperatorNode.js',			hashIn: 556468773345689,  hashOut: 1203894687843575, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'OperatorNode.js',			hashIn: 7713872811912282, hashOut: 5585615718279628, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'OperatorNode.js',			hashIn: 5708669963006803, hashOut: 2353024627515193, signature: 'r151', warning: NOT_CONFIRMED },
	
// jsm\nodes\parsers\*.js
	{ name: 'GLSLNodeFunction.js',		hashIn: 6982558975747232, hashOut: 8466011150986809, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'GLSLNodeParser.js',		hashIn: 5583752251510215, hashOut: 3477570324504544, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WGSLNodeFunction.js',		hashIn: 6349557700415329, hashOut: 7158507527723603, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WGSLNodeParser.js',		hashIn: 6864835405735064, hashOut: 1759840954041286, signature: 'r147~r151', warning: NOT_CONFIRMED },
// jsm\nodes\procedural\*.js
	{ name: 'CheckerNode.js',			hashIn: 4508494365689757, hashOut: 3605265016430087, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'CheckerNode.js',			hashIn: 895110767311155,  hashOut: 1252165915241168, signature: 'r150~r151', warning: NOT_CONFIRMED },
// jsm\nodes\shadernode\*.js
	{ name: 'ShaderNode.js',			hashIn: 8786764725414910, hashOut: 597607531843409,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNode.js',			hashIn: 2288327832267650, hashOut: 4454303852094058, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'ShaderNode.js',			hashIn: 7158859925017418, hashOut: 3871801375579752, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'ShaderNode.js',			hashIn: 8365547829429528, hashOut: 5892765432597212, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'ShaderNode.js',			hashIn: 1724608757989608, hashOut: 5773426435472130, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeBaseElements.js',hashIn: 3579918506930427, hashOut: 690654646081229,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeBaseElements.js',hashIn: 2123274722125215, hashOut: 2247070066086856, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeBaseElements.js',hashIn: 8423620286451124, hashOut: 6043104390019801, signature: 'r149', warning: NOT_CONFIRMED }, // not in r150
	{ name: 'ShaderNodeElements.js',	hashIn: 2023750765430871, hashOut: 5280875851785970, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeElements.js',	hashIn: 5233302915359883, hashOut: 3201744976920407, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeElements.js',	hashIn: 8989385294953215, hashOut: 0,                signature: 'r149', warning: CANNOT_CONVERT }, // not in r150
	
// jsm\nodes\utils\*.js
	{ name: 'ArrayElementNode.js',		hashIn: 151517071030299,  hashOut: 4402141580431990, signature: 'r147~r149', warning: NOT_CONFIRMED },
	{ name: 'ArrayElementNode.js',		hashIn: 1124506755005466, hashOut: 1957240396988261, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'ConvertNode.js',			hashIn: 7332660443613330, hashOut: 811191572225775,  signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'ConvertNode.js',			hashIn: 4708581825804387, hashOut: 6604174541563335, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'ConvertNode.js',			hashIn: 376839471451187,  hashOut: 921910738415037,  signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'DiscardNode.js',			hashIn: 3620598703914213, hashOut: 3616111220941703, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'DiscardNode.js',			hashIn: 8849663320844721, hashOut: 2703397685152948, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'DiscardNode.js',			hashIn: 2391356247204950, hashOut: 8303490895823411, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'EquirectUVNode.js',		hashIn: 5100097419253401, hashOut: 4260722865229749, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'EquirectUVNode.js',		hashIn: 5557103303256171, hashOut: 5264022142091034, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'JoinNode.js',				hashIn: 2141976976878696, hashOut: 3623156150873223, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'JoinNode.js',				hashIn: 1243665493216725, hashOut: 8298601222997352, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MatcapUVNode.js',			hashIn: 4941972844409322, hashOut: 8815158564622193, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'MatcapUVNode.js',			hashIn: 2021974535766673, hashOut: 2637069687949557, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'MaxMipLevelNode.js',		hashIn: 602439603219396,  hashOut: 2039416061182014, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MaxMipLevelNode.js',		hashIn: 6482260510157480, hashOut: 3444693899632633, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'MaxMipLevelNode.js',		hashIn: 329092347032166,  hashOut: 4058733851691784, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'MaxMipLevelNode.js',		hashIn: 7088592330264542, hashOut: 4314755486073305, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'OscNode.js',				hashIn: 3856586745182517, hashOut: 7985691560233075, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'OscNode.js',				hashIn: 6535243439193757, hashOut: 1842095595168091, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'OscNode.js',				hashIn: 3224479978384070, hashOut: 7006827613802896, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'OscNode.js',				hashIn: 1516226709710314, hashOut: 8719428294455219, signature: 'r151', warning: NOT_CONFIRMED },
 	{ name: 'PackingNode.js',			hashIn: 120788249685470,  hashOut: 5341904924018230, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'PunctualLightNode.js',		hashIn: 1306255561420557, hashOut: 5915399369038238, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'RemapNode.js',				hashIn: 3807366216421104, hashOut: 7310239829035835, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'RemapNode.js',				hashIn: 8731313367688168, hashOut: 7707879163275330, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'RotateUVNode.js',			hashIn: 2367528223223485, hashOut: 4165772284993252, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'RotateUVNode.js',			hashIn: 3234646920394197, hashOut: 2670678251820697, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SpecularMIPLevelNode.js',	hashIn: 5634408285338769, hashOut: 2761291051509060, signature: 'r148~r149', warning: NOT_CONFIRMED },
 	{ name: 'SpecularMIPLevelNode.js',	hashIn: 4303151215558206, hashOut: 2685049653005925, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SplitNode.js',				hashIn: 8360039447636289, hashOut: 3303493127846199, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'SplitNode.js',				hashIn: 1428832237322359, hashOut: 6920810366871019, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'SpriteSheetUVNode.js',		hashIn: 2878205285409150, hashOut: 4001252429027452, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'SpriteSheetUVNode.js',		hashIn: 2608385981404671, hashOut: 5490016164281684, signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'TimerNode.js',				hashIn: 4655543445248130, hashOut: 6195930687012453, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'TimerNode.js',				hashIn: 6657640932462718, hashOut: 5638403653139266, signature: 'r149', warning: NOT_CONFIRMED },
 	{ name: 'TimerNode.js',				hashIn: 7534632370389815, hashOut: 63236825296483,   signature: 'r150~r151', warning: NOT_CONFIRMED },
	{ name: 'TriplanarTexturesNode.js',	hashIn: 5646109207943854, hashOut: 2308487192366783, signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'TriplanarTexturesNode.js',	hashIn: 6653531619596883, hashOut: 8275866202943249, signature: 'r150~r151', warning: NOT_CONFIRMED },


// jsm\objects\*.js

	{ name: 'GroundProjectedEnv.js',	hashIn: 3209647647024930, hashOut: 243069015256079,  signature: 'r147' },
	{ name: 'GroundProjectedEnv.js',	hashIn: 2022798777032067, hashOut: 6592994775661888, signature: 'r148' },
	{ name: 'GroundProjectedEnv.js',	hashIn: 1042770395217430, hashOut: 6991233553576540, signature: 'r149~r150' },
	{ name: 'GroundProjectedSkybox.js',	hashIn: 1767782377206942, hashOut: 7362579815519085, signature: 'r151' },
	{ name: 'Lensflare.js',				hashIn: 933464714826082,  hashOut: 6954238707737649, signature: 'r147~r151' },
	{ name: 'LightningStorm.js',		hashIn: 6616917369283776, hashOut: 864874431866378,  signature: 'r147~r151' },
	{ name: 'Reflector.js',				hashIn: 4871058277040602, hashOut: 888175106352713,  signature: 'r147~r151' },
	{ name: 'MarchingCubes.js',			hashIn: 4667258537036907, hashOut: 5532718995014579, signature: 'r147~r151' },
	{ name: 'ReflectorForSSRPass.js',	hashIn: 6977488871853286, hashOut: 2771238122644462, signature: 'r147~r151' },
	{ name: 'Refractor.js',				hashIn: 3935440023460978, hashOut: 7033534258479891, signature: 'r147~r151' },
	{ name: 'ShadowMesh.js',			hashIn: 68183448930033,   hashOut: 8611885472979811, signature: 'r147~r150' },
	{ name: 'ShadowMesh.js',			hashIn: 6574685351092758, hashOut: 8632527320583635, signature: 'r151' },
	{ name: 'Sky.js',					hashIn: 249847175026169,  hashOut: 2558137094218159, signature: 'r147~r151' },
	{ name: 'Water.js',					hashIn: 1067915028797984, hashOut: 712711564490518,  signature: 'r147~r151' },
	{ name: 'Water2.js',				hashIn: 2120526706889228, hashOut: 8732319691887990, signature: 'r147~r151' },


// jsm\offscreen\*.js

	{ name: 'jank.js',					hashIn: 4774812515654055, hashOut: 973414975233232,  signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'offscreen.js',				hashIn: 662043014197242,  hashOut: 7690537328017043, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'scene.js',					hashIn: 3216947742627446, hashOut: 1942905870555189, signature: 'r147~r151', warning: NOT_CONFIRMED },


// jsm\physics\*.js

	{ name: 'AmmoPhysics.js',			hashIn: 7517264819391925, hashOut: 6615522549059090, signature: 'r147~r150' },
	{ name: 'AmmoPhysics.js',			hashIn: 2344711409916840, hashOut: 2990016954173698, signature: 'r151' },
 	{ name: 'OimoPhysics.js',			hashIn: 2613689718091502, hashOut: 3002843339918750, signature: 'r147~r150' },
 	{ name: 'OimoPhysics (1).js',		hashIn: 2613689718091502, hashOut: 3002843339918750, signature: 'r147~r150' },// synonym of OimoPhysics.js
	{ name: 'OimoPhysics.js',			hashIn: 5623565153424374, hashOut: 7702088865370174, signature: 'r151' },
	{ name: 'OimoPhysics (1).js',		hashIn: 5623565153424374, hashOut: 7702088865370174, signature: 'r151' },// synonym of OimoPhysics.js


// jsm\postprocessing\*.js
	{ name: 'AdaptiveToneMappingPass.js',hashIn: 2364970081330801,hashOut: 5599991563324348, signature: 'r147' },
	{ name: 'AdaptiveToneMappingPass.js',hashIn: 4845566868124166,hashOut: 890677095544409,  signature: 'r148~r151' },
	{ name: 'AfterimagePass.js',		hashIn: 7653725564678955, hashOut: 3352420493560622, signature: 'r147' },
	{ name: 'AfterimagePass.js',		hashIn: 8556643418937601, hashOut: 3093597036496954, signature: 'r148~r151' },
	{ name: 'BloomPass.js',				hashIn: 5134099620091276, hashOut: 5323953240874273, signature: 'r147' },
	{ name: 'BloomPass.js',				hashIn: 1574425029952198, hashOut: 3122067867030238, signature: 'r148~r151' },
	{ name: 'BokehPass.js',				hashIn: 7407330994318264, hashOut: 3911492235336931, signature: 'r147' },
	{ name: 'BokehPass.js',				hashIn: 2472370746737956, hashOut: 2704357889170418, signature: 'r148~r151' },
	{ name: 'ClearPass.js',				hashIn: 3179283397434010, hashOut: 3406065309805403, signature: 'r147~r151' },
	{ name: 'CubeTexturePass.js',		hashIn: 4846912716183097, hashOut: 8666533997924014, signature: 'r147~r151' },
	{ name: 'DotScreenPass.js',			hashIn: 6061038516236221, hashOut: 565630309179435,  signature: 'r147' },
	{ name: 'DotScreenPass.js',			hashIn: 2159316520373534, hashOut: 559266143810656,  signature: 'r148~r151' },
	{ name: 'EffectComposer.js',		hashIn: 6447861811187505, hashOut: 5905050568889170, signature: 'r147' },
	{ name: 'EffectComposer.js',		hashIn: 4373285152784193, hashOut: 4210390225481079, signature: 'r148~r151' },
	{ name: 'FilmPass.js',				hashIn: 5578919757601172, hashOut: 2121330939589775, signature: 'r147' },
	{ name: 'FilmPass.js',				hashIn: 8367874878724797, hashOut: 6697941188075044, signature: 'r148~r151' },
	{ name: 'GlitchPass.js',			hashIn: 8312595776594738, hashOut: 6257538433351437, signature: 'r147' },
	{ name: 'GlitchPass.js',			hashIn: 8649277378190012, hashOut: 7926267536242065, signature: 'r148~r151' },
	{ name: 'HalftonePass.js',			hashIn: 7629117879539993, hashOut: 7083245433838368, signature: 'r147' },
	{ name: 'HalftonePass.js',			hashIn: 9019118997954,    hashOut: 1650583007893950, signature: 'r148~r151' },
	{ name: 'LUTPass.js',				hashIn: 3243928235390895, hashOut: 6181074452900292, signature: 'r147~r151' },
	{ name: 'MaskPass.js',				hashIn: 1333654107434139, hashOut: 8267734874329596, signature: 'r147~r151' },
	{ name: 'OutlinePass.js',			hashIn: 4708797621364561, hashOut: 7060673549532945, signature: 'r147' },
	{ name: 'OutlinePass.js',			hashIn: 44053359780665,   hashOut: 6972775623853994, signature: 'r148~r151' },
	{ name: 'Pass.js',					hashIn: 3154920630396720, hashOut: 4064811221804372, signature: 'r147~r150' },
	{ name: 'Pass.js',					hashIn: 7624336251225098, hashOut: 4925620950001672, signature: 'r151' },
	{ name: 'RenderPass.js',			hashIn: 8210427678242849, hashOut: 1731156248757721, signature: 'r147~r151' },
	{ name: 'RenderPixelatedPass.js',	hashIn: 7188498385698559, hashOut: 8265344145956456, signature: 'r147~r151' },
	{ name: 'SAOPass.js',				hashIn: 1158702175465290, hashOut: 672109693742732,  signature: 'r147' },
	{ name: 'SAOPass.js',				hashIn: 3462132740504279, hashOut: 7717991170300342, signature: 'r148~r151' },
	{ name: 'SMAAPass.js',				hashIn: 152998597593694,  hashOut: 8589778776161150, signature: 'r147' },
	{ name: 'SMAAPass.js',				hashIn: 6127638268264785, hashOut: 6173812857992655, signature: 'r148~r151' },
	{ name: 'SSAARenderPass.js',		hashIn: 5570188049648057, hashOut: 4819531753089386, signature: 'r147' },
	{ name: 'SSAARenderPass.js',		hashIn: 7835443657191228, hashOut: 7926724496651569, signature: 'r148~r151' },
	{ name: 'SSAOPass.js',				hashIn: 3689986794206844, hashOut: 984689668651417,  signature: 'r147' },
	{ name: 'SSAOPass.js',				hashIn: 4995075412297645, hashOut: 5250187939831256, signature: 'r148~r151' },
	{ name: 'SSRPass.js',				hashIn: 2809967475621701, hashOut: 4287306947692424, signature: 'r147' },
	{ name: 'SSRPass.js',				hashIn: 2353002127099622, hashOut: 1081347176573888, signature: 'r148~r151' },
	{ name: 'SavePass.js',				hashIn: 791685695598490,  hashOut: 3681879478760896, signature: 'r147' },
	{ name: 'SavePass.js',				hashIn: 2488755430187002, hashOut: 145463280439165,  signature: 'r148~r151' },
	{ name: 'ShaderPass.js',			hashIn: 2914158575483121, hashOut: 5879691536794496, signature: 'r147~r151' },
	{ name: 'TAARenderPass.js',			hashIn: 6546205943478792, hashOut: 7385786089780327, signature: 'r147~r151' },
	{ name: 'TexturePass.js',			hashIn: 2002512202019259, hashOut: 878485824922162,  signature: 'r147' },	
	{ name: 'TexturePass.js',			hashIn: 3339245081240628, hashOut: 1603419785485516, signature: 'r148~r151' },
	{ name: 'UnrealBloomPass.js',		hashIn: 622222350514699,  hashOut: 2810488985597342, signature: 'r147' },
	{ name: 'UnrealBloomPass.js',		hashIn: 5797237821641505, hashOut: 871861160617678,  signature: 'r148~r151' },


// jsm\renderers\*.js
	{ name: 'CSS2DRenderer.js',			hashIn: 5761697393480706, hashOut: 2343738057319828, signature: 'r147~r150' },
	{ name: 'CSS2DRenderer.js',			hashIn: 6223938530497245, hashOut: 5917643144737120, signature: 'r151' },
	{ name: 'CSS3DRenderer.js',			hashIn: 5213607906990352, hashOut: 7366260962428179, signature: 'r147~r149' },
	{ name: 'CSS3DRenderer.js',			hashIn: 2531187368023445, hashOut: 2335829492788340, signature: 'r150~r151' },
	{ name: 'Projector.js',				hashIn: 4874510425331828, hashOut: 3421560008749342, signature: 'r147~r151' },
	{ name: 'SVGRenderer.js',			hashIn: 8409222279450335, hashOut: 1540426567003354, signature: 'r147~r151' },
// jsm\renderers\webgl\nodes\*.js
	{ name: 'SlotNode.js',				hashIn: 6246269276999764, hashOut: 8539121015996565, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodeBuilder.js',		hashIn: 7603786283542514, hashOut: 3811833020584754, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodeBuilder.js',		hashIn: 7366194964777105, hashOut: 8078351098205838, signature: 'r149~r150', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodeBuilder.js',		hashIn: 4604345549560844, hashOut: 8661890694549361, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodes.js',			hashIn: 6102206417239882, hashOut: 5874712525988994, signature: 'r147~r151', warning: NOT_CONFIRMED },	
// jsm\renderers\webgpu\*.js
	{ name: 'constants.js',				hashIn: 4212168181234294, hashOut: 8184446578479143, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'constants (1).js',			hashIn: 4212168181234294, hashOut: 8184446578479143, signature: 'r147~r151', warning: NOT_CONFIRMED }, // synonym of constants.js
 	{ name: 'WebGPUAnimation.js',		hashIn: 4396707476536727, hashOut: 1362172952059245, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUAttributes.js',		hashIn: 8260799714901852, hashOut: 4833428561682782, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUAttributes.js',		hashIn: 8248860689729662, hashOut: 3488913737687400, signature: 'r149~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBackground.js',		hashIn: 8602578334808291, hashOut: 7332439247329840, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBackground.js',		hashIn: 7709647571553623, hashOut: 3638112494218140, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUBackground.js',		hashIn: 5928101977796949, hashOut: 8738388598289618, signature: 'r149', warning: NOT_CONFIRMED },
	{ name: 'WebGPUBackground.js',		hashIn: 673359525068489,  hashOut: 6601984067471993, signature: 'r150', warning: NOT_CONFIRMED },
	{ name: 'WebGPUBackground.js',		hashIn: 3542486725493208, hashOut: 3650969244820747, signature: 'r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBinding.js',			hashIn: 1052849230428151, hashOut: 2351370438823779, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBindings.js',		hashIn: 6390769329634040, hashOut: 1028539862070895, signature: 'r147~r150', warning: NOT_CONFIRMED },
	{ name: 'WebGPUBindings.js',		hashIn: 6907167281777253, hashOut: 5773346779509956, signature: 'r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBuffer.js',			hashIn: 1128114772154585, hashOut: 4108507015491386, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBufferUtils.js',		hashIn: 5582104232779032, hashOut: 5968375678232184, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUComputePipelines.js',hashIn: 304143103404491,  hashOut: 2605402938365662, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUGeometries.js',		hashIn: 703305899898364,  hashOut: 705015854005336,  signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUGeometries.js',		hashIn: 5929460143369587, hashOut: 4305673033133587, signature: 'r149~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUInfo.js',			hashIn: 135504537623419,  hashOut: 5223825081876484, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUObjects.js',			hashIn: 920700533351342,  hashOut: 5025316533615468, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUObjects.js',			hashIn: 7017445078018932, hashOut: 7105222220362789, signature: 'r149~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUProgrammableStage.js',hashIn: 842663305465827, hashOut: 2648485720576282, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUProperties.js',		hashIn: 6920639407860960, hashOut: 8808909663707579, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderLists.js',		hashIn: 2600605215882859, hashOut: 8106823019483006, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderPipeline.js',	hashIn: 8886684872891921, hashOut: 7590242043935142, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderPipelines.js',	hashIn: 6071989857243972, hashOut: 2904017431086197, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderStates.js',	hashIn: 4238935362379250, hashOut: 711628329736901,  signature: 'r147~r149', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderStates.js',	hashIn: 6330372510436986, hashOut: 4826157079116893, signature: 'r150~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderer.js',		hashIn: 3105965882093147, hashOut: 6867104072899155, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPURenderer.js',		hashIn: 2724571404603711, hashOut: 1343793424578254, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPURenderer.js',		hashIn: 8368918193870273, hashOut: 5781419125025215, signature: 'r149~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUSampledTexture.js',	hashIn: 1044834228631084, hashOut: 2161359546613042, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUSampler.js',			hashIn: 4379276160546224, hashOut: 6179457164325694, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUStorageBuffer.js',	hashIn: 8879012140483729, hashOut: 4063232874262165, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextureRenderer.js',	hashIn: 3644421805341548, hashOut: 1277260471497666, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextureUtils.js',	hashIn: 6209481707381743, hashOut: 188130353276075,  signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextures.js',		hashIn: 4993903402759818, hashOut: 1210147287088057, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUTextures.js',		hashIn: 6657530217354840, hashOut: 8894441647739386, signature: 'r149~r150', warning: NOT_CONFIRMED },
	{ name: 'WebGPUTextures.js',		hashIn: 1020814800147821, hashOut: 5738777050922371, signature: 'r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniform.js',			hashIn: 7573108404564106, hashOut: 5074264400380264, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniformBuffer.js',	hashIn: 2678477547380328, hashOut: 2916007059851266, signature: 'r147~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniformsGroup.js',	hashIn: 7548286641043798, hashOut: 4892996170429149, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUUniformsGroup.js',	hashIn: 6293676918834958, hashOut: 972244663601452,  signature: 'r148~r151', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUtils.js',			hashIn: 401528447373683,  hashOut: 2664965900388194, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUUtils.js',			hashIn: 4382630997169875, hashOut: 5919906337052048, signature: 'r149~r151', warning: NOT_CONFIRMED },
// jsm\renderers\webgpu\nodes\*.js
	{ name: 'WebGPUNodeBuilder.js',		hashIn: 5630792256502948, hashOut: 6469113420531100, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeBuilder.js',		hashIn: 3611378909333641, hashOut: 5406769082327755, signature: 'r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeBuilder.js',		hashIn: 2717391475484226, hashOut: 7249990501044928, signature: 'r149~r150', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeBuilder.js',		hashIn: 5778248873912201, hashOut: 2427120244623704, signature: 'r151', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeSampledTexture.js',hashIn:4182530203320379,hashOut: 7869343793535983, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeSampler.js',		hashIn: 2952521742598095, hashOut: 1757604139554156, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeUniform.js',		hashIn: 1197191436633885, hashOut: 3333588586681962, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodes.js',			hashIn: 8910817616796492, hashOut: 3746429705554871, signature: 'r147~r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodes.js',			hashIn: 1134742417599496, hashOut: 7317247823492625, signature: 'r149~r151', warning: NOT_CONFIRMED },


// jsm\shaders\*.js

	{ name: 'ACESFilmicToneMappingShader.js',hashIn:5258378719643215,hashOut:3317902934456707,signature:'r147~r151' },
	{ name: 'AfterimageShader.js',		hashIn: 1853522238344266, hashOut: 1036581519118649, signature: 'r147~r151' },
	{ name: 'BasicShader.js',			hashIn: 6171277070307398, hashOut: 2002560184745876, signature: 'r147~r151' },
	{ name: 'BleachBypassShader.js',	hashIn: 8695360369077117, hashOut: 7029425841183617, signature: 'r147~r151' },
	{ name: 'BlendShader.js',			hashIn: 7843294192220771, hashOut: 3342083449252165, signature: 'r147~r151' },
	{ name: 'BokehShader.js',			hashIn: 4703011871283499, hashOut: 157836022820183,  signature: 'r147~r151' },
	{ name: 'BokehShader2.js',			hashIn: 1977334425116581, hashOut: 5396667625338936, signature: 'r147~r151' },
	{ name: 'BrightnessContrastShader.js',hashIn:3967265984788799,hashOut: 2358526049380075, signature: 'r147~r151' },
	{ name: 'ColorCorrectionShader.js',	hashIn: 5055259411793326, hashOut: 6590322515405828, signature: 'r147~r151' },
	{ name: 'ColorifyShader.js',		hashIn: 153489079315625,  hashOut: 6382597169065982, signature: 'r147~r151' },
	{ name: 'ConvolutionShader.js',		hashIn: 5974258379535476, hashOut: 485908628382688,  signature: 'r147~r151' },
	{ name: 'CopyShader.js',			hashIn: 8069323330935930, hashOut: 4010972446276340, signature: 'r147~r151' },
	{ name: 'DOFMipMapShader.js',		hashIn: 3059587087095805, hashOut: 4680435379908302, signature: 'r147~r151' },
	{ name: 'DepthLimitedBlurShader.js',hashIn: 2570419379241619, hashOut: 1916946377194660, signature: 'r147~r151' },
	{ name: 'DigitalGlitch.js',			hashIn: 3240701949089782, hashOut: 8603348631761156, signature: 'r147~r151' },
	{ name: 'DotScreenShader.js',		hashIn: 1820637089993678, hashOut: 7389813360795599, signature: 'r147~r151' },
	{ name: 'FXAAShader.js',			hashIn: 5277748508273219, hashOut: 6901070472968357, signature: 'r147~r151' },
	{ name: 'FilmShader.js',			hashIn: 4904460898327878, hashOut: 6768407777951243, signature: 'r147~r151' },
	{ name: 'FocusShader.js',			hashIn: 6213423017407100, hashOut: 8483935674792700, signature: 'r147~r151' },
	{ name: 'FreiChenShader.js',		hashIn: 5070010603073323, hashOut: 6356390143480617, signature: 'r147~r151' },
	{ name: 'GammaCorrectionShader.js',	hashIn: 3454969009186858, hashOut: 582113574246248,  signature: 'r147~r151' },
	{ name: 'GodRaysShader.js',			hashIn: 2401867666235434, hashOut: 2798896236447159, signature: 'r147~r151' },
	{ name: 'HalftoneShader.js',		hashIn: 47155110157681,   hashOut: 3378201717609767, signature: 'r147~r151' },
	{ name: 'HorizontalBlurShader.js',	hashIn: 6234880670881553, hashOut: 2201917459687553, signature: 'r147~r151' },
	{ name: 'HorizontalTiltShiftShader.js',	hashIn: 10538750070480,hashOut: 211777929111573, signature: 'r147~r151' },
	{ name: 'HueSaturationShader.js',	hashIn: 8518298462313437, hashOut: 7353575343397985, signature: 'r147~r151' },
	{ name: 'KaleidoShader.js',			hashIn: 6128008827164570, hashOut: 7555178727106116, signature: 'r147~r151' },
	{ name: 'LuminosityHighPassShader.js', hashIn: 2780705295520947,hashOut: 62593864058149, signature: 'r147~r151' },
	{ name: 'LuminosityShader.js',		hashIn: 6278979903195307, hashOut: 422580035089278,  signature: 'r147~r151' },
	{ name: 'MMDToonShader.js',			hashIn: 5729257508387137, hashOut: 8714249088752168, signature: 'r147~r148' },
	{ name: 'MMDToonShader.js',			hashIn: 8913790358153409, hashOut: 3531695100586275, signature: 'r149~r151' },
	{ name: 'MirrorShader.js',			hashIn: 6935752437031718, hashOut: 7631280483356669, signature: 'r147~r151' },
	{ name: 'NormalMapShader.js',		hashIn: 6623486650005275, hashOut: 3023837186198741, signature: 'r147~r151' },
	{ name: 'RGBShiftShader.js',		hashIn: 6488934629672525, hashOut: 6446501902115415, signature: 'r147~r149' },
	{ name: 'RGBShiftShader.js',		hashIn: 5104461682713959, hashOut: 361552506151142,  signature: 'r150~r151' },
	{ name: 'SAOShader.js',				hashIn: 4509662881104571, hashOut: 7341093554953721, signature: 'r147~r151' },
	{ name: 'SMAAShader.js',			hashIn: 7171081707607249, hashOut: 160761357699808,  signature: 'r147~r151' },
	{ name: 'SSAOShader.js',			hashIn: 4514944621678800, hashOut: 4052665314780446, signature: 'r147~r151' },
	{ name: 'SSRShader.js',				hashIn: 5908592751262896, hashOut: 3796192715054877, signature: 'r147~r151' },
	{ name: 'SepiaShader.js',			hashIn: 1415710288835149, hashOut: 8754947513932719, signature: 'r147~r151' },
	{ name: 'SobelOperatorShader.js',	hashIn: 2456630343939578, hashOut: 2842948134168369, signature: 'r147~r151' },
	{ name: 'SubsurfaceScatteringShader.js',hashIn:8491180681271036,hashOut:7841578875331788,signature: 'r147~r151' },
	{ name: 'TechnicolorShader.js',		hashIn: 6427976170541877, hashOut: 8936986527657645, signature: 'r147~r151' },
	{ name: 'ToneMapShader.js',			hashIn: 122960329870117,  hashOut: 2388173745438001, signature: 'r147~r151' },
	{ name: 'ToonShader.js',			hashIn: 7501434952691393, hashOut: 3763820921640163, signature: 'r147~r151' },
	{ name: 'TriangleBlurShader.js',	hashIn: 277835109696312,  hashOut: 4216337555715115, signature: 'r147~r151' },
	{ name: 'UnpackDepthRGBAShader.js',	hashIn: 983825312039527,  hashOut: 159295952492590,  signature: 'r147~r151' },
	{ name: 'VelocityShader.js',		hashIn: 1068095141001080, hashOut: 4287112586084650, signature: 'r147~r150' },
	{ name: 'VelocityShader.js',		hashIn: 5880308127394816, hashOut: 1868005837603712, signature: 'r151' },
	{ name: 'VerticalBlurShader.js',	hashIn: 7743851693116371, hashOut: 5200615354655531, signature: 'r147~r151' },
	{ name: 'VerticalTiltShiftShader.js',hashIn: 1033330917334101,hashOut: 1811377788722827, signature: 'r147~r151' },
	{ name: 'VignetteShader.js',		hashIn: 2792448367336573, hashOut: 3400156942148079, signature: 'r147~r151' },
	{ name: 'VolumeShader.js',			hashIn: 6320047063890666, hashOut: 4529607936444149, signature: 'r147~r151' },
	{ name: 'WaterRefractionShader.js',	hashIn: 7273399850368277, hashOut: 4215338308211416, signature: 'r147~r151' },


// jsm\textures\*.js

	{ name: 'FlakesTexture.js',			hashIn: 4582515071681576, hashOut: 8402823063941429, signature: 'r147~r151' },


// jsm\utils\*.js

	{ name: 'BufferGeometryUtils.js',	hashIn: 7014196652191254, hashOut: 942206056289407,  signature: 'r147~r149' },
	{ name: 'BufferGeometryUtils.js',	hashIn: 6960728184335821, hashOut: 6240011952495542, signature: 'r150' },
	{ name: 'BufferGeometryUtils.js',	hashIn: 5682220831745699, hashOut: 2354531262076120, signature: 'r151' },
	{ name: 'CameraUtils.js',			hashIn: 362012460112664,  hashOut: 1667508449377211, signature: 'r147~r151' },
	{ name: 'GPUStatsPanel.js',			hashIn: 7849635543326202, hashOut: 8518362217355809, signature: 'r147~r151' },
	{ name: 'GeometryCompressionUtils.js',hashIn:2952293075389709,hashOut: 8338267574310261, signature: 'r147~r151' },
	{ name: 'GeometryUtils.js',			hashIn: 3028883636171673, hashOut: 4360446744906453, signature: 'r147~r151' },
	{ name: 'LDrawUtils.js',			hashIn: 4678907742689053, hashOut: 1649942618301254, signature: 'r147~r150' },
	{ name: 'LDrawUtils.js',			hashIn: 4853194149054884, hashOut: 5197257360394349, signature: 'r151' },
	{ name: 'PackedPhongMaterial.js',	hashIn: 6970196574512597, hashOut: 2826086413052148, signature: 'r147' },
	{ name: 'PackedPhongMaterial.js',	hashIn: 3647962238133551, hashOut: 3533526968549557, signature: 'r148~r150' },
	{ name: 'PackedPhongMaterial.js',	hashIn: 5920448440652540, hashOut: 6411481405269772, signature: 'r151' },
	{ name: 'SceneUtils.js',			hashIn: 800211159559702,  hashOut: 7243966955611208, signature: 'r147' },
	{ name: 'SceneUtils.js',			hashIn: 4720750871343649, hashOut: 5859889340854455, signature: 'r148~r151' },
	{ name: 'ShadowMapViewer.js',		hashIn: 6590898882115409, hashOut: 5424733363202046, signature: 'r147~r151' },
	{ name: 'SkeletonUtils.js',			hashIn: 3534120956770652, hashOut: 297335428320915,  signature: 'r147~r150' },
	{ name: 'SkeletonUtils.js',			hashIn: 1611837024089073, hashOut: 1444437736653378, signature: 'r151' },
	{ name: 'UVsDebug.js',				hashIn: 8105347050356548, hashOut: 6663772268431673, signature: 'r147~r151' },
	{ name: 'WorkerPool.js',			hashIn: 3246011286632014, hashOut: 783692235551946,  signature: 'r147~r151' },


// jsm\webxr\*.js

	{ name: 'ARButton.js',				hashIn: 8307713251987614, hashOut: 1164723941635390, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'OculusHandModel.js',		hashIn: 7336903788101115, hashOut: 4820665227128967, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'OculusHandPointerModel.js',hashIn: 2743340387686345, hashOut: 2055423246537440, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'Text2D.js',				hashIn: 3805893496892771, hashOut: 3505818620765703, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'VRButton.js',				hashIn: 3639654738784569, hashOut: 991810163511646,  signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'VRButton.js',				hashIn: 5220146417186769, hashOut: 6058092661732667, signature: 'r149~r151', warning: NOT_CONFIRMED },
	{ name: 'XRControllerModelFactory.js',hashIn:8062276701282514,hashOut: 753178303472884,  signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'XREstimatedLight.js',		hashIn: 4449085036796168, hashOut: 898097676899629,  signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'XRHandMeshModel.js',		hashIn: 441184717897252,  hashOut: 7801530398093108, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'XRHandModelFactory.js',	hashIn: 1611190162569754, hashOut: 2664303828079253, signature: 'r147~r151', warning: NOT_CONFIRMED },
	{ name: 'XRHandPrimitiveModel.js',	hashIn: 1188717343203177, hashOut: 4964027065307799, signature: 'r147~r151', warning: NOT_CONFIRMED },

];



function pure_name( i )
{
	var name = hashes[i].name.split('.');
		name.pop();
		name = name.join('.');
		
	try
	{
		new Function('var '+name+' = 0;');
	}
	catch
	{
		return `'${name}'`;
	}
	return name;
}

function compress_data( i )
{
	var signature = hashes[i].signature ? ', '+hashes[i].signature.toUpperCase().split('~').join(', ') : '';
		
	result = `${hashes[i].hashIn}, ${hashes[i].hashOut} ${signature}`;

	if( hashes[i].warning == NOT_THREE_JS ) result += ', NOT_THREE_JS';
	if( hashes[i].warning == NOT_CONFIRMED ) result += ', NOT_CONFIRMED';
	if( hashes[i].warning == CANNOT_CONVERT ) result += ', CANNOT_CONVERT';

	
	return result;
}

function compress( )
{
	var result = '';
	
	result += 'var hash_data = {\n';

	for( var i=0; i<hashes.length; i++ )
	{		
		result += `\t${pure_name(i)}:\t`;
		if( (i==hashes.length-1) || (hashes[i].name!=hashes[i+1].name) )
		{	// only one row
			result += `[\n\t\t\t${compress_data(i)},\n\t\t],`;
		}
		else
		{	// two or more rows
			result += `[\n`;
			result += `\t\t\t${compress_data(i)},`;
			
			for( i++; i<hashes.length && hashes[i].name==hashes[i-1].name; i++ )
				result += `\n\t\t\t${compress_data(i)},`;
				
			result += `\n\t\t],`;
			i--;
		}
		
		result += '\n';
	}
	
	result += '};\n';
	return result;
}

console.log( compress() );

*/
// format
// {...
//		name: [ {hashIn, hashOut, {release,}* {warning,}}* ]
// ...}

var hash_data = {
	
// build\three.module.js

	'three.module':	[
			2340088931094189, 7401641734355085 , R147,
			2340088931094189, 4354204085491623 , R147,
			8206269217664674, 2069818104690616 , R148,
			8206269217664674, 7261310370223862 , R148,
			3418431085877075, 4355588814216040 , R149,
			3418431085877075, 3727258555033782 , R149,
			4073485943750582, 3060098335498890 , R150,
			4073485943750582, 1931680927955748 , R150,
			4335081748333267, 3434032628753384 , R151,
			2353372963713005, 7333836569024841 , R152,
		],
		
		
// jsm\animation\*.js

	AnimationClipCreator:	[
			1226843274980437, 7116389223769906 , R147, R149,
			3382535474109152, 546115356815044 , R150, R152,
		],
	CCDIKSolver:	[
			6987903500913477, 1432833081281724 , R147, R152,
		],
	MMDAnimationHelper:	[
			4051486523834537, 7711676366751655 , R147, R152,
		],
	MMDPhysics:	[
			3517359931114889, 7499978108447581 , R147, R152,
		],
		
		
// jsm\cameras\*.js

	CinematicCamera:	[
			8657467710839774, 6093747022937238 , R147, R152,
		],
		
		
// jsm\capabilities\*.js

	WebGL:	[
			1806524370189791, 4290716052244725 , R147, R152, NOT_CONFIRMED,
		],
	WebGPU:	[
			7382216207052479, 1736094083887989 , R147, R151, NOT_CONFIRMED,
			5672822289649499, 7770064355452479 , R152, NOT_CONFIRMED,
		],
		

// jsm\controls\*.js
		
	ArcballControls:	[
			5224525621429883, 6689598522756220 , R147, R148,
			3152556976512707, 7419895869021261 , R149, R152,
		],
	DragControls:	[
			68330822021333, 8465009894812906 , R147, R152,
		],
	FirstPersonControls:	[
			3881222951926969, 8794825488562693 , R147, R152,
		],
	FlyControls:	[
			5733191412332319, 6216594149040715 , R147, R152,
		],
	MapControls:	[
			6218203932873556, 8192997951170060 , R151, R152,
		],
	OrbitControls:	[
			3461413604478402, 3508093428857771 , R147, R149,
			6406664314921444, 7395453312622649 , R150,
			7979551823229156, 1979674451436062 , R151, R152,
		],
	PointerLockControls:	[
			7234374874125097, 534253466008181 , R147, R150,
			478361203029289, 5342386648813856 , R151, R152,
		],
	TrackballControls:	[
			5995901654950252, 6267983764043843 , R147, R150,
			4203226680836628, 8775426104840178 , R151,
			3407770029594726, 5623581448850390 , R152,
		],
	TransformControls:	[
			2496079475009952, 3634417817542913 , R147,
			2867994341181097, 6007517594025721 , R148, R152,
		],


// jsm\csm\*.js

	CSM:	[
			6434818151254405, 2753891380550471 , R147, R148,
			826172807001094, 6578377904600523 , R149, R152,
		],
	CSMFrustum:	[
			1426916298755981, 812024260606097 , R147, R152,
		],
	CSMShader:	[
			2623585483244840, 3839493011915698 , R147,
			6808812247645686, 2407777480630806 , R148, R152,
		],
	CSMHelper:	[
			95514300219672, 6615675358907333 , R147,
			95514300219672, 1973834970125863 , R148, R152,
		],


// jsm\curves\*.js

	NURBSCurve:	[
			1481469610032845, 8208446348316763 , R147, R152,
		],
	CurveExtras:	[
			8174127866409531, 5051572476771642 , R147, R152,
		],
	NURBSSurface:	[
			5935856335412392, 5788121849566634 , R147, R152,
		],
	NURBSUtils:	[
			1382614706821951, 4725962503857902 , R147, R152,
		],


// jsm\effects\*.js

	AnaglyphEffect:	[
			8494041100070890, 6806847312914103 , R147, R152,
		],
	AsciiEffect:	[
			2409110624323613, 7688735697818189 , R147,
			4319291803888832, 8863660430852870 , R148, R152,
		],
	OutlineEffect:	[
			174470279120084, 8537021526150794 , R147, R149,
			3897572940080614, 1600378654525614 , R150, R152,
		],
	ParallaxBarrierEffect:	[
			4611171881184362, 4712923974677065 , R147, R152,
		],
	PeppersGhostEffect:	[
			8449197647267113, 2948822358444019 , R147, R152,
		],
	StereoEffect:	[
			5569155035758829, 8246708936356330 , R147, R152,
		],


// jsm\environments\*.js

	RoomEnvironment:	[
			5802007185481666, 2943116661036073 , R147, R152,
		],
	DebugEnvironment:	[
			6492595570066171, 1502295319298227 , R147, R152,
		],
	

// jsm\exporters\*.js

	ColladaExporter:	[
			2040032360564170, 5227371727001555 , R147,
			3741571901473790, 5229667671348325 , R148, R151,
			651594721858314,  6398541827915172 , R152,
		],
	DRACOExporter:	[
			1917974346732773, 391086298448543 , R147,
			2226776876950114, 2506051549198426 , R148, R149,
			2368994100667333, 5228161319846518 , R150, R152,
		],
	EXRExporter:	[
			2211521531772346, 3532023270548790 , R147,
			3962920640275117, 535614201717199 , R148, R151,
			230697929382995, 233080285966452, R152,
		],
	GLTFExporter:	[
			7097485653378711, 3363199132645821 , R147,
			1196074284463602, 8683437420229622 , R148, R149,
			4160312389647633, 5974250420279954 , R150, R151,
			734293498041989, 8652347560027936, R152,
		],
	KTX2Exporter:	[
			3368305390814835, 3517880226381192 , R147, R151,
			405600095078374, 3647200953829293, R152,
		],
	MMDExporter:	[
			346341606190126, 5311766141910379 , R147,
			4779782672140724, 1737206538996828 , R148, R152,
		],
	OBJExporter:	[
			5196360952527578, 373058448930680 , R147, R152,
		],
	PLYExporter:	[
			2885756046710828, 8399769101506180 , R147,
			6620986018715772, 5606569644274359 , R148,
			7573114018869779, 2360947503717018 , R149, R152,
		],
	STLExporter:	[
			1962334263618299, 8791824661524967 , R147,
			7714718659571966, 4214645860282604 , R148, R150,
			5953041762952135, 1279488673682302 , R152,
		],
	USDZExporter:	[
			5081691085947601, 8702964794222611 , R147,
			1818464051912836, 6856698102147236 , R148, R150,
			6867538231382744, 6361299460533110 , R152,
		],


// jsm\geometries\*.js

	BoxLineGeometry:	[
			6715624084493554, 8861167976725231 , R147, R152,
		],
	ConvexGeometry:	[
			7147676395705516, 3916208406701340 , R147,
			6066078645477342, 7424773974475037 , R148, R152,
		],
	DecalGeometry:	[
			1507980540546980, 3535909775668692 , R147, R152,
		],
	LightningStrike:	[
			1191645353049985, 2624903429688936 , R147, R152,
		],
	ParametricGeometries:	[
			107533732253491, 815149824560642 , R147, R152,
		],
	ParametricGeometry:	[
			8085017494352590, 7874298973850542 , R147, R149,
			1529333648366145, 1648448834148130 , R150, R152,
		],
	RoundedBoxGeometry:	[
			5502296987449710, 7311095839334729 , R147, R152,
		],
	TeapotGeometry:	[
			1270481738028427, 8815500691832546 , R147, R152,
		],
	TextGeometry:	[
			2530618317268137, 8100759542272196 , R147, R152,
		],


// jsm\helpers\*.js

	LightProbeHelper:	[
			6400788453127014, 3600597602235927 , R147, R152,
		],
	OctreeHelper:	[
			4835047289618362, 3352396781641842 , R147, R148,
			3719363927393434, 5020645413669748 , R149, R152,
		],
	PositionalAudioHelper:	[
			4485771109068509, 3792633801047678 , R147, R152,
		],
	RectAreaLightHelper:	[
			2323756755171944, 7093708729301997 , R147, R152,
		],
	VertexNormalsHelper:	[
			5070185591957948, 674242172204673 , R147, R152,
		],
	VertexTangentsHelper:	[
			662534324265405, 205872472201194 , R147, R152,
		],
	ViewHelper:	[
			4660377876647747, 4639934960027406 , R147, R148,
			2319027273958534, 5919738884326682 , R149, R152,
		],


// jsm\interactive\*.js

	HTMLMesh:	[
			1878649372860153, 3192597895142587 , R147, R148,
			4358958328917816, 1816649510028030 , R149, R150,
			394329064848404, 2558391474191133 , R151,
			8455665092834609, 6298793298282766, R152,
		],
	InteractiveGroup:	[
			1211502322032098, 8467776172842284 , R147, R148,
			6195192393162974, 1533848710701858 , R149, R152,
		],
	SelectionBox:	[
			7064250896203132, 7488209743941230 , R147, R152,
		],
	SelectionHelper:	[
			2604057417266652, 1236952692415177 , R147, R152,
		],


// jsm\libs\*.js

	'chevrotain.module.min':	[
			8610778070704401, 2181733518121743 , NOT_THREE_JS,
		],
	'ecsy.module':	[
			2143193075671949, 2855799025138990 , NOT_THREE_JS,
		],
	'fflate.module':	[
			2873969778761120, 6223503074093484 , NOT_THREE_JS,
		],
	'flow.module':	[
			8962083420513474, 1894893191019385 , NOT_THREE_JS,
			91636917355232, 804658828079676 , NOT_THREE_JS,
			7632711381093562, 661822554583793 , NOT_THREE_JS,
		],
	'ktx-parse.module':	[
			8668226453980035, 7271678376224768 , NOT_THREE_JS,
		],
	'lil-gui.module.min':	[
			7214462785814887, 7054343677832408 , NOT_THREE_JS,
			2407448484675201, 3089335268765329 , NOT_THREE_JS,
		],
	'lottie_canvas.module':	[
			2245927073147872, 1456158983931478 , NOT_THREE_JS,
		],
	'meshopt_decoder.module':	[
			801166090116187, 2448267990077663 , NOT_THREE_JS,
		],
	'mikktspace.module':	[
			8719419322244607, 5216793118533395 , NOT_THREE_JS,
		],
	'mmdparser.module':	[
			8202443895328062, 3622136400949581 , NOT_THREE_JS,
		],
	'motion-controllers.module':	[
			5709579865562258, 5681181871857957 , NOT_THREE_JS,
		],
	'opentype.module':	[
			848534191210722, 8313800755823623 , NOT_THREE_JS,
		],
	'potpack.module':	[
			1283655972451878, 5200029942189273 , NOT_THREE_JS,
		],
	'stats.module':	[
			4205307359432763, 2815192571905565 , NOT_THREE_JS,
		],
	'tween.module.min':	[
			561090084058616, 3540154676240152 , NOT_THREE_JS,
		],
	'tween.module':	[
			3912684966659390, 8014186627132810 , NOT_THREE_JS,
		],
	'utif.module':	[
			5715595447783189, 2329173948366792 , NOT_THREE_JS,
		],
	'zstddec.module':	[
			6877927829665610, 6419293948366379 , NOT_THREE_JS,
		],
// jsm\libs\OimoPhysics\*.js
	index:	[
			4429172777201225, 224229038370084 , NOT_THREE_JS,
		],
	//NOTE: OimoPhysics.js is later on
// jsm\libs\rhino3dm\*.js
	'rhino3dm.module':	[
			5477667109273140, 5220638887459029 , NOT_THREE_JS,
		],
// jsm\libs\basis\*.js


// jsm\lights\*.js

	LightProbeGenerator:	[
			6177039655558016, 698274494607814 , R147, R151,
			7598109708254495, 2722927059048832 , R152,
		],
	RectAreaLightUniformsLib:	[
			7797007073339547, 620191334569173 , R147, R152,
		],
	IESSpotLight:	[
			8960652235443064, 5857885885978284 , R149, R152, NOT_CONFIRMED,
		],


// jsm\lines\*.js

	Line2:	[
			3135289954063428, 7765501135355907 , R147, R152,
		],
	LineGeometry:	[
			8600814032145600, 7773308748004646 , R147, R152,
		],
	LineMaterial:	[
			1491028438321448, 4088370860958898 , R147, R152,
		],
	LineSegments2:	[
			3749850439058021, 7950772605671349 , R147,
			4185560240751701, 4123731577629405 , R148, R151, NOT_CONFIRMED,
			556113696313730, 3310417125069076 , R152, NOT_CONFIRMED,
		],
	WireframeGeometry2:	[
			1847977233267918, 4489740044747535 , R147, R152,
		],
	LineSegmentsGeometry:	[
			2449821987236612, 3575789517828356 , R147, R152,
		],
	Wireframe:	[
			6605080101837332, 63213171175972 , R147, R152,
		],


// jsm\loaders\*.js

	'3DMLoader':	[
			985397630770524, 941102389810339 , R147, R150,
			6592185293051179, 7482981974176333 , R151, R152,
		],
	'3MFLoader':	[
			1614454356478586, 7807398297238918 , R147,
			4335550215743065, 6553591786665702 , R148,
			3470662050951324, 8168338494862914 , R149, R151,
			5026888285245933, 2782476241641947 , R152,
		],
	AMFLoader:	[
			8591404426020785, 72357308031188 , R147,
			1570200235435579, 6094324743161253 , R148,
			2609276738124967, 1517260372187621 , R149, R152,
		],
	BVHLoader:	[
			3703503551115264, 3079569560819572 , R147, R151,
			5588120395846900, 7493075730328032 , R152,
		],
	BasisTextureLoader:	[
			5918785881493078, 1809785238072726 , R147, R149,
		],
	ColladaLoader:	[
			5521032082652047, 2541482346977545 , R147,
			7760747400432314, 7172026971444105 , R148, R151,
			6634371570013117, 861534311891108 , R152,
		],
	DDSLoader:	[
			1842847107263814, 8514036890283198 , R147, R152,
		],
	DRACOLoader:	[
			5176611380117225, 3325218987558685 , R147, R148,
			8143959119653327, 3696860707897220 , R149,
			7497383781133774, 8043006305011337 , R150, R151,
			5482454865972299, 8058812012937817 , R152,
		],
	EXRLoader:	[
			4151380879470427, 6250149702201060 , R147,
			5029969153171262, 2400253278494816 , R148, R149,
			3689074498523906, 7731055900464456 , R150, R151,
			3407864830417673, 1332278363525415 , R152,
		],
	FBXLoader:	[
			561481140767537, 6836947826046547 , R147,
			4421646834633747, 7197077195013415 , R148,
			6725391311408481, 4099288921457154 , R149, R150,
			2803775840028056, 3797832264286259 , R151,
			1790829322038968, 4830298945286962 , R152,
		],
	FontLoader:	[
			4772390691205073, 7405204033567376 , R147, R152,
		],
	GCodeLoader:	[
			6895845443187997, 1972034445838697 , R147,
			7905819486375718, 6094790376039546 , R148, R152,
		],
	GLTFLoader:	[
			7612331930241984, 6625683675195739 , R147,
			1569998721190733, 1513700305281128 , R148,
			8267145606619935, 3108258337147762 , R149,
			2209539503779939, 6619135629090164 , R150,
			1880245480636752, 787110731298836 , R151,
			1748433758258646, 4639139306176327 , R152,
		],
	HDRCubeTextureLoader:	[
			7805781237823912, 4231031161080693 , R147, R151,
			1459435079540040, 7772015176776196 , R152,
		],
	IESLoader:	[
			963510463726312, 3841030642095921 , R149, R152, NOT_CONFIRMED,
		],
	IFCLoader:	[
			8358358394655750, 3271092516851721 , R147,
			5873512685887024, 8198725716566877 , R148, R149,
		],
	KMZLoader:	[
			2084211947861808, 2261888104295646 , R147,
			4335252644311496, 1443846302677404 , R148, R152,
		],
	KTX2Loader:	[
			799691039851878, 5293708535068152 , R147, R149, NOT_CONFIRMED,
			3469875342013994, 5023052550303643 , R151, NOT_CONFIRMED,
			2217543037816360, 3357696082726129 , R152, NOT_CONFIRMED,
		],
	KTXLoader:	[
			263438741191973, 7574132455449631 , R147, R152,
		],
	LDrawLoader:	[
			4404633801468125, 8438955610967346 , R147, R151,
			8700609711125515, 7488605119929769 , R152,
		],
	LUT3dlLoader:	[
			4248108453745573, 372962538737651 , R147, R152,
		],
	LUTCubeLoader:	[
			6853322971310589, 2632651733553323 , R147, R152,
		],
	LWOLoader:	[
			1727556100386125, 4344984544325385 , R147, R151,
			190858931302695, 3490317267704589 , R152,
		],
	LogLuvLoader:	[
			7667019988018542, 8390392656884706 , R147, R152,
		],
	LottieLoader:	[
			268525378638103, 6462582376925120 , R147, R151,
			3703012266144952, 347931383213861 , R152,
		],
	MD2Loader:	[
			6627229281615931, 5600921949207869 , R147, R152,
		],
	MDDLoader:	[
			5081020771383909, 5170736741190117 , R147, R152,
		],
	MMDLoader:	[
			4383285479766598, 7329145116112537 , R147,
			5094201978029026, 1714568125472221 , R148,
			5497486971384448, 5116660463084889 , R149, R151,
			5521986180303537, 3408581567526360 , R152,
		],
	MTLLoader:	[
			4195166263994081, 4951816203125526 , R147, R151,
			5780379092525062, 4323493295791391 , R152,
		],
	MaterialXLoader:	[
			2589487512906114, 5991910953175831 , R147, R148,
			5972464427434372, 7066232822650616 , R149, R152,
		],
	NRRDLoader:	[
			5338428868198690, 6633643662599103 , R147,
			5693135991814745, 7490979462191516 , R148, R149,
			6488822937816826, 2745001940093010 , R150, R151,
			4042716272876581, 8185085380804888 , R152,
		],
	OBJLoader:	[
			8539320613750621, 8607005329758113 , R147, R151,
			7109205687366574, 4809694544359256 , R152,
		],
	PCDLoader:	[
			174577900587893, 90758871773622 , R147, R148,
			6793139786421067, 6146014770852025 , R149, R152,
		],
	PDBLoader:	[
			1942390824571940, 4426568255037448 , R147, R152,
		],
	PLYLoader:	[
			6321820453703505, 2743104829861464 , R147, R148,
			1418122416639786, 8382084666320243 , R149, R150,
			1556833428085929, 3718135579201797 , R151,
			6711188178019447, 2014669386217201 , R152,
		],
	PRWMLoader:	[
			1676435722552577, 2234547836370822 , R147, R152,
		],
	PVRLoader:	[
			4742186827557016, 6783905259006905 , R147, R152,
		],
	RGBELoader:	[
			8774373481774371, 2713451528555688 , R147, R151,
			2361303660823283, 3889305763245704 , R152,
		],
	RGBMLoader:	[
			3327906731718763, 4787902181355767 , R147, R152,
		],
	STLLoader:	[
			6207484324625078, 8361981785006721 , R147, R148,
			2212177642244125, 4777605153179350 , R149, R152,
		],
	SVGLoader:	[
			2167699369704942, 238359676406321 , R147,
			4794616874251051, 3354732762839924 , R148,
			2914919729198626, 3044301665410567 , R149,
			8887828308674914, 7028881234996431 , R150, R151,
			3144415691285865, 7528986593757173 , R152,
		],
	TDSLoader:	[
			5324737644850882, 8557847669562224 , R147, R152,
		],
	TGALoader:	[
			8353641252569428, 1541610114347383 , R147, R152,
		],
	TIFFLoader:	[
			970894889256765, 3296249949909854 , R147, R152,
		],
	TTFLoader:	[
			3095059602065207, 99085047078076 , R147,
			3252944310227874, 530587144421515 , R148, R152,
		],
	TiltLoader:	[
			8451212746147442, 1717678540383378 , R147, R151,
			5009596666179145, 7103272132285704 , R152,
		],
	USDZLoader:	[
			4464726926800400, 6882285661587657 , R147,
			7566436751954421, 4437723288908059 , R148,
			7805072436462254, 1084462240753188 , R149, R151,
			7888681874171061, 4170886151401528 , R152,
		],
	VOXLoader:	[
			2702156927078460, 627638577338378 , R147, R151,
			6546453939046352, 5821260065018820 , R152,
		],
	VRMLLoader:	[
			4690350257828032, 3875099409831451 , R147,
			7676867688540942, 998583324716256 , R148, R152,
		],
	VTKLoader:	[
			6102122003933343, 701582992248102 , R147,
			3391402218885390, 2227872139841773 , R148,
			3190147807957138, 7683487262041329 , R149, R152,
		],
	XYZLoader:	[
			2615578234448851, 7752910996023513 , R147, R152,
		],
		
		
// jsm\loaders\lwo\*.js

	LWO3Parser:	[
			2233868388697166, 606396101170167 , R147, R152,
		],
	IFFParser:	[
			2890081654480287, 40983122673736 , R147, R148,
			425950599607865, 206491386401030 , R151, R152,
		],
	LWO2Parser:	[
			1796443683206867, 2780350827774177 , R147, R152,
		],
		
		
// jsm\loaders\ifc\*.js

	'web-ifc-api':	[
			1494675225369448, 8661637107957611 , R147, R149, NOT_CONFIRMED,
		],
		

// jsm\materials\*.js

	MeshGouraudMaterial:	[
			2670340595270464, 6746845651059425 , R147, R150,
			6773356758842839, 4014836451519884 , R151, R152,
		],


// jsm\math\*.js

	OBB:	[
			2135207588843929, 6624993466955481 , R147, R152,
		],
	Capsule:	[
			4997626879274240, 8413714414397691 , R147, R152,
		],
	ColorConverter:	[
			5844967795436179, 3187359492214079 , R147, R152,
		],
	ConvexHull:	[
			8974035973211290, 3052918960303382 , R147, R152,
		],
	ImprovedNoise:	[
			4254330716041642, 1175196362348590 , R147, R152,
		],
	Lut:	[
			5890901043033984, 5091633800361764 , R147, R152,
		],
	MeshSurfaceSampler:	[
			3546265222360370, 1593821863726880 , R147, R149,
			710402181043761, 3135356683031879 , R151, R152,
		],
	Octree:	[
			6053182518677834, 7302867661003629 , R147, R152,
		],
	SimplexNoise:	[
			313130152119344, 3168858546443066 , R147, R152,
		],


// jsm\misc\*.js

	ConvexObjectBreaker:	[
			2987161165189093, 5268372775307386 , R147, R149,
			5043318973182456, 8653162609787474 , R151, R152,
		],
	GPUComputationRenderer:	[
			1894481260558729, 8879369700942526 , R147, R148,
			3674054687449417, 6534116509697642 , R149, R151,
			356360144017392, 2902154465889645 , R152,
		],
	Gyroscope:	[
			3063251394555570, 5760639262413468 , R147, R152,
		],
	MD2Character:	[
			6623186545850287, 6634136292271183 , R147, R151,
			1142836020051922, 7694294738887362 , R152,
		],
	MD2CharacterComplex:	[
			7509488030443826, 2159455090720704 , R147, R151,
			7543342472972999, 7988213853028016 , R152,
		],
	MorphAnimMesh:	[
			371275972047758, 4390419688620672 , R147, R152,
		],
	MorphBlendMesh:	[
			2645368413028812, 1977338054594739 , R147, R152,
		],
	ProgressiveLightMap:	[
			4662929733634732, 1142870966063398 , R147, R150,
			2772618257222963, 2733634500242489 , R151,
			2757322720497745, 4978001337287573 , R152,
		],
	RollerCoaster:	[
			4968034576584817, 6698144221527486 , R147, R151,
			8433272488885822, 1320693076966266 , R152,
		],
	TubePainter:	[
			4706751632377804, 7332834514313893 , R147, R152,
		],
	Volume:	[
			4185603872654050, 7373291575608959 , R147, R151,
			2237028052730867, 5731404348491477 , R152,
		],
	VolumeSlice:	[
			5921125576207369, 2864729225536748 , R147, R152,
		],


// jsm\modifiers\*.js

	CurveModifier:	[
			2161126201929561, 2232249837049942 , R147, R150,
			6107572258254008, 6889820974919284 , R151, R152,
		],
	EdgeSplitModifier:	[
			4661968250764111, 2525991716015486 , R147, R152,
		],
	SimplifyModifier:	[
			8325670109126825, 7089325051573543 , R147, R152,
		],
	TessellateModifier:	[
			8441784596459318, 1151084173615225 , R147, R151,
			6724539213960756, 6559454560137351 , R152,
		],
	
	
// jsm\node-editor\*.js

	AngleEditor:	[
			7103042719526831, 2648621351455328 , R147, R150, NOT_CONFIRMED,
		],
	BaseNode:	[
			4696210223607859, 7524013299532647 , R147, R149, NOT_CONFIRMED,
			1764447501889882, 3441823990490223 , R150, NOT_CONFIRMED,
		],
	BasicMaterialEditor:	[
			468567294668750, 8701627047776784 , R147, R150, NOT_CONFIRMED,
		],
	BlendEditor:	[
			985517102603003, 1609903978843049 , R147, R150, NOT_CONFIRMED,
		],
	CheckerEditor:	[
			3024729574522539, 7763214454883906 , R147, R150, NOT_CONFIRMED,
		],
	ColorEditor:	[
			7145537340890478, 4486461929688680 , R147, R150, NOT_CONFIRMED,
		],
	DataFile:	[
			2077767642808545, 8788504260217521 , R147, R150, NOT_CONFIRMED,
		],
	DotEditor:	[
			1367113573024168, 8093023032787717 , R147, R150, NOT_CONFIRMED,
		],
	FileEditor:	[
			5742270388155860, 6327428751632264 , R147, R150, NOT_CONFIRMED,
		],
	FileURLEditor:	[
			932005385267466, 8795826954268334 , R147, R150, NOT_CONFIRMED,
		],
	FloatEditor:	[
			1725718387012867, 3710900384988531 , R147, R150, NOT_CONFIRMED,
		],
	InvertEditor:	[
			2226139934222310, 5777460077577603 , R147, R150, NOT_CONFIRMED,
		],
	JoinEditor:	[
			4954158062034340, 3554914767187268 , R147, R150, NOT_CONFIRMED,
		],
	LimiterEditor:	[
			3842865318405121, 7335980582195251 , R147, R150, NOT_CONFIRMED,
		],
	MatcapUVEditor:	[
			660325595579377, 5672368538554476 , R147, R150, NOT_CONFIRMED,
		],
	MeshEditor:	[
			5378855441743591, 3742233525249708 , R147, R150, NOT_CONFIRMED,
		],
	NodeEditor:	[
			1444796095874123, 1216932877769085 , R147, R149, NOT_CONFIRMED,
			7302614402687781, 2290300507602803 , R150, NOT_CONFIRMED,
		],
	NormalEditor:	[
			475152709346262, 3521916181129061 , R147, R150, NOT_CONFIRMED,
		],
	NormalMapEditor:	[
			6148939952210289, 1436103787050961 , R147, R150, NOT_CONFIRMED,
		],
	NormalizeEditor:	[
			3408227873320708, 5506965056897427 , R147, R150, NOT_CONFIRMED,
		],
	Object3DEditor:	[
			4164205520538156, 4788566936713453 , R147, R150, NOT_CONFIRMED,
		],
	OperatorEditor:	[
			686985015210577, 5204439375479894 , R147, R150, NOT_CONFIRMED,
		],
	OscillatorEditor:	[
			8503482133814040, 7097307166903253 , R147, R150, NOT_CONFIRMED,
		],
	PointsEditor:	[
			2137657412265819, 6202726717056428 , R147, R150, NOT_CONFIRMED,
		],
	PointsMaterialEditor:	[
			3765830111885167, 5733170420314888 , R147, R150, NOT_CONFIRMED,
		],
	PositionEditor:	[
			1149847810990391, 5666227552024079 , R147, R150, NOT_CONFIRMED,
		],
	PowerEditor:	[
			5564897189213694, 2879629968390496 , R147, R150, NOT_CONFIRMED,
		],
	PreviewEditor:	[
			4730143078278435, 685847901383335 , R147, R150, NOT_CONFIRMED,
		],
	SliderEditor:	[
			5403269129578312, 5309041856348877 , R147, R150, NOT_CONFIRMED,
		],
	SplitEditor:	[
			3195733930952767, 235893935799661 , R147, R150, NOT_CONFIRMED,
		],
	StandardMaterialEditor:	[
			486669368941575, 2285905273724121 , R147, R150, NOT_CONFIRMED,
		],
	TextureEditor:	[
			2600379447117599, 6795947952040273 , R147, R150, NOT_CONFIRMED,
		],
	TimerEditor:	[
			765498612922649, 2761193396438746 , R147, R150, NOT_CONFIRMED,
		],
	TrigonometryEditor:	[
			5754107985597034, 8850809840793077 , R147, R150, NOT_CONFIRMED,
		],
	UVEditor:	[
			5005885370621501, 4229172361836172 , R147, R150, NOT_CONFIRMED,
		],
	Vector2Editor:	[
			3513055448970024, 5565911179672624 , R147, R150, NOT_CONFIRMED,
		],
	Vector3Editor:	[
			3442536313023315, 1753596741334741 , R147, R150, NOT_CONFIRMED,
		],
	Vector4Editor:	[
			2494326139638469, 2141125090827580 , R147, R150, NOT_CONFIRMED,
		],


// jsm\nodes\*.js

	Nodes:	[
			3739034354562765, 7169626053645541 , R147, NOT_CONFIRMED,
			1148773408938007, 1025901858767157 , R148, NOT_CONFIRMED,
			7253534545186686, 0 , R149, CANNOT_CONVERT,
			3785469259821889, 0 , R150, CANNOT_CONVERT,
			649884851656731, 0 , R151, CANNOT_CONVERT,
			42742043758325, 0, R152, CANNOT_CONVERT,
		],
		
		
// jsm\nodes\accessors\*.js

	BitangentNode:	[
			4478064407642248, 7400311994412170 , R147, R148, NOT_CONFIRMED,
			4892948953298703, 6954194866565464 , R149, NOT_CONFIRMED,
			3348198289940834, 5789445584582288 , R150, R152, NOT_CONFIRMED,
		],
	BufferNode:	[
			8657926454501624, 2250190727216212 , R147, R149, NOT_CONFIRMED,
			5816274045167395, 479347960281748 , R150, R152, NOT_CONFIRMED,
		],
	CameraNode:	[
			2582092261289307, 1325185706514015 , R149, NOT_CONFIRMED,
			4675226800587361, 4943535935746380 , R147, R148, NOT_CONFIRMED,
			6254205280683850, 3654105472172444 , R150, R152, NOT_CONFIRMED,
		],
	CubeTextureNode:	[
			4105038834861426, 4307658617972962 , R147, NOT_CONFIRMED,
			4886264389574773, 1552423336093892 , R149, NOT_CONFIRMED,
			6094436420843852, 8024648986861385 , R148, NOT_CONFIRMED,
			6586715039536022, 461906253582011 , R150, NOT_CONFIRMED,
			4555514613414753, 7904539073345873 , R151, NOT_CONFIRMED,
			4698253573509265, 8950166641941890 , R152, NOT_CONFIRMED,
		],
	ExtendedMaterialNode:	[
			2569731610026583, 1834150953467961 , R149, NOT_CONFIRMED,
			6912370882960406, 5403231881762153 , R150, R152, NOT_CONFIRMED,
		],
	InstanceNode:	[
			25142085207799, 4143719270330534 , R147, R149, NOT_CONFIRMED,
			7687662411561372, 2309026533631502 , R150, R152, NOT_CONFIRMED,
		],
	MaterialNode:	[
			1477999328193230, 951464408891222 , R148, NOT_CONFIRMED,
			288734895774665, 361190237741108 , R149, NOT_CONFIRMED,
			3452944660931535, 2095966928101194 , R147, NOT_CONFIRMED,
			5261219440034990, 5840103989073775 , R150, R152, NOT_CONFIRMED,
		],
	MaterialReferenceNode:	[
			3121709357695823, 5287539237471833 , R149, NOT_CONFIRMED,
			660178799287067, 2010340120888318 , R147, R148, NOT_CONFIRMED,
			1440248560824210, 1828643039874225 , R150, R152, NOT_CONFIRMED,
		],
	ModelNode:	[
			6266252382709979, 5432235811995455 , R147, R149, NOT_CONFIRMED,
			5399836974658625, 6188235531083665 , R150, R152, NOT_CONFIRMED,
		],
	ModelViewProjectionNode:	[
			3959737172233400, 7648661217622527 , R147, R149, NOT_CONFIRMED,
			174497317759714, 7681380159331983 , R150, R152, NOT_CONFIRMED,
		],
	NormalNode:	[
			4663284445626661, 198290098465077 , R148, NOT_CONFIRMED,
			5520115395422454, 7110116526237323 , R147, NOT_CONFIRMED,
			6962306010877206, 8589352558659585 , R149, NOT_CONFIRMED,
			2592946858511138, 5833949835700213 , R150, R152, NOT_CONFIRMED,
		],
	Object3DNode:	[
			181259750474701, 7155981781521024 , R149, NOT_CONFIRMED,
			238552438689512, 3976930702120029 , R147, R148, NOT_CONFIRMED,
			4468247911004360, 1903365845977533 , R150, R152, NOT_CONFIRMED,
		],
	PointUVNode:	[
			6528536225258988, 8041044549100753 , R147, R149, NOT_CONFIRMED,
			1453521277504776, 3625102350367081 , R150, R152, NOT_CONFIRMED,
		],
	PositionNode:	[
			386678160075834, 8584236017871279 , R147, NOT_CONFIRMED,
			5337069572572243, 7101340156302795 , R148, NOT_CONFIRMED,
			6789603473699339, 2822326752724185 , R149, NOT_CONFIRMED,
			3432960919851759, 1924140850592136 , R150, R151, NOT_CONFIRMED,
			8998717668609082, 2821217554798230 , R152, NOT_CONFIRMED,
		],
	ReferenceNode:	[
			7874964702771107, 2903456627682933 , R149, NOT_CONFIRMED,
			8634383008211599, 3258542487865157 , R147, R148, NOT_CONFIRMED,
			2365320213102946, 5375799671457504 , R150, R152, NOT_CONFIRMED,
		],
	ReflectVectorNode:	[
			6180018898058907, 79281962945934 , R147, R148, NOT_CONFIRMED,
			7933366515622147, 845359256997357 , R149, NOT_CONFIRMED,
			6911357020160846, 4479297587979364 , R150, R152, NOT_CONFIRMED,
		],
	SkinningNode:	[
			3030483146409240, 3596362395010190 , R147, R149, NOT_CONFIRMED,
			6869193537967095, 3165280499714936 , R150, R152, NOT_CONFIRMED,
		],
	StorageBufferNode:	[
			4788076833532350, 5931033116372254 , R147, R149, NOT_CONFIRMED,
			7007331866552867, 4103883375124174 , R150, R152, NOT_CONFIRMED,
		],
	TangentNode:	[
			2082324939942180, 7384625819404769 , R149, NOT_CONFIRMED,
			6757437416015567, 1131114924383363 , R147, R148, NOT_CONFIRMED,
			3694310923145455, 6134050391891240 , R150, R152, NOT_CONFIRMED,
		],
	TextureNode:	[
			3360527597154010, 4985628915588008 , R148, NOT_CONFIRMED,
			4374528483563140, 5734693667142344 , R147, NOT_CONFIRMED,
			6539037016272871, 1131332537679184 , R149, NOT_CONFIRMED,
			6523398353646059, 537198482415957 , R150, NOT_CONFIRMED,
			235657372029839, 3678122460059408 , R151, NOT_CONFIRMED,
			5120843542953203, 5823244292529606 , R152, NOT_CONFIRMED,
		],
	UserDataNode:	[
			1836814027368517, 2895346125139011 , R147, R149, NOT_CONFIRMED,
			8728634303789332, 2265226874894635 , R150, R152, NOT_CONFIRMED,
		],
	UVNode:	[
			6428767211569947, 2188461703391638 , R147, R149, NOT_CONFIRMED,
			6572264849159658, 6907078933797648 , R150, R152, NOT_CONFIRMED,
		],


// jsm\nodes\code\*.js

	CodeNode:	[
			4014169988643956, 866190272440995 , R147, R149, NOT_CONFIRMED,
			3231029829250461, 5023976221800027 , R150, NOT_CONFIRMED,
			1080502561363558, 2434496642377253 , R151, R152, NOT_CONFIRMED,
		],
	ExpressionNode:	[
			4993036877621130, 359795046775582 , R147, R148, NOT_CONFIRMED,
			5739646222693034, 1510995691527671 , R149, NOT_CONFIRMED,
			4239544061694438, 3947422488880348 , R150, NOT_CONFIRMED,
			6853565174004261, 5927161690666437 , R151, R152, NOT_CONFIRMED,
		],
	FunctionCallNode:	[
			5079249912911592, 5834487436044087 , R147, R149, NOT_CONFIRMED,
			1939356246775464, 7987875029467870 , R150, NOT_CONFIRMED,
			702154363274085, 4380933598054753 , R151, R152, NOT_CONFIRMED,
		],
	FunctionNode:	[
			250070119451863, 5989836821471026 , R147, R149, NOT_CONFIRMED,
			4011459111918015, 2703291138845755 , R150, NOT_CONFIRMED,
			8258090358811150, 4793824046456947 , R151, R152, NOT_CONFIRMED,
		],
	ScriptableNode:	[
			5062613646797522, 2962631689787211 , R151, R152, NOT_CONFIRMED,
		],
	ScriptableValueNode:	[
			1346828629162414, 1098758819509229 , R151, R152, NOT_CONFIRMED,
		],


// jsm\nodes\core\*.js

	ArrayUniformNode:	[
			4271434437372202, 4072066383035614 , R147, R149, NOT_CONFIRMED,
			8334698831222535, 8437174928667923 , R150, R152, NOT_CONFIRMED,
		],
	AttributeNode:	[
			2875674653398771, 3246408860774080 , R147, R149, NOT_CONFIRMED,
			2506276538901435, 2898452942727919 , R150, R151, NOT_CONFIRMED,
			6521042932156765, 5573888981534441 , R152, NOT_CONFIRMED,
		],
	BypassNode:	[
			205161900825960, 1495481959668535 , R147, R149, NOT_CONFIRMED,
			8399778689646609, 5395995555247438 , R150, NOT_CONFIRMED,
			7881681820816433, 5144388833475584 , R151, R152, NOT_CONFIRMED,
		],
	CacheNode:	[
			437864208551428, 6067779932302013 , R149, NOT_CONFIRMED,
			4873863781871652, 7417148008206325 , R150, R152, NOT_CONFIRMED,
		],
	ConstNode:	[
			4114800523612154, 8859067331978084 , R147, R149, NOT_CONFIRMED,
			7326833239974615, 4474544798920943 , R150, R152, NOT_CONFIRMED,
		],
	ContextNode:	[
			1240346436129892, 1677238775506857 , R147, R149, NOT_CONFIRMED,
			4933509378064108, 8384424971231132 , R150, R152, NOT_CONFIRMED,
		],
	InputNode:	[
			4745662524942874, 1149565278900201 , R147, R148, NOT_CONFIRMED,
			6114445815488301, 7852040024182418 , R149, NOT_CONFIRMED,
			818791233705455, 813391896657225 , R150, NOT_CONFIRMED,
			6816901614576228, 2189507116816183 , R151, R152, NOT_CONFIRMED,
		],
	InstanceIndexNode:	[
			8790427031006074, 3898404940607954 , R147, R149, NOT_CONFIRMED,
			6489865221212967, 5142964724061501 , R150, R152, NOT_CONFIRMED,
		],
	LightingNode:	[
			1116855223595862, 5554684411935167 , R147, R150, NOT_CONFIRMED,
		],
	LightingModel:	[
			6998653216530530, 5607714258154835 , R149, NOT_CONFIRMED,
			557913877304014, 6557389243797118 , R150, R152, NOT_CONFIRMED,
		],
	Node:	[
			6244524141875284, 3018411548857356 , R147, NOT_CONFIRMED,
			6084694813978921, 6577947127223138 , R148, NOT_CONFIRMED,
			3036780560079528, 3441612981170080 , R149, NOT_CONFIRMED,
			3249127934741000, 185665293519666 , R150, NOT_CONFIRMED,
			5445294999017782, 5879788175955685 , R151, NOT_CONFIRMED,
			2431451718876932, 487026533563582 , R152, NOT_CONFIRMED,
		],
	NodeAttribute:	[
			4787554578847778, 2977492529861007 , R147, R152, NOT_CONFIRMED,
		],
	NodeBuilder:	[
			7196143292553381, 3334793217902839 , R147, NOT_CONFIRMED,
			6054816939987917, 1683435233931976 , R148, NOT_CONFIRMED,
			758728875513416, 6324558953447387 , R149, NOT_CONFIRMED,
			2001411520915032, 6634645705573344 , R150, NOT_CONFIRMED,
			7721252664983939, 7181920984035133 , R151, NOT_CONFIRMED,
			5022098028834600, 8399834208146003 , R152, NOT_CONFIRMED,
		],
	NodeCache:	[
			1861989613104239, 2321924915472615 , R149, R152, NOT_CONFIRMED,
		],
	NodeCode:	[
			1016992313207737, 4533058625715521 , R147, R152, NOT_CONFIRMED,
		],
	NodeFrame:	[
			8967708589533208, 2584608326015115 , R147, R150, NOT_CONFIRMED,
			5411895366146225, 4612933499893510 , R151, NOT_CONFIRMED,
			4008484741296832, 7534800167208602 , R152, NOT_CONFIRMED,
		],
	NodeFunction:	[
			4872268463155198, 8070923404082827 , R147, R152, NOT_CONFIRMED,
		],
	NodeFunctionInput:	[
			2826682585646658, 984423109007925 , R147, R152, NOT_CONFIRMED,
		],
	NodeKeywords:	[
			6186253221635348, 7142121143031890 , R147, R152, NOT_CONFIRMED,
		],
	NodeParser:	[
			2789411952290145, 4214987953860710 , R147, R152, NOT_CONFIRMED,
		],
	NodeUniform:	[
			938892601707905, 6849343660009814 , R147, R152, NOT_CONFIRMED,
		],
	NodeUtils:	[
			5148966146741746, 2850712212549755 , R147, R148, NOT_CONFIRMED,
			9000658394427583, 4069176016698668 , R149, R150, NOT_CONFIRMED,
			6201804890237942, 0 , R151, R152, CANNOT_CONVERT,
		],
	NodeVar:	[
			6755529505393788, 5500764033555152 , R147, R152, NOT_CONFIRMED,
		],
	NodeVarying:	[
			8270580599641779, 5764626595242919 , R147, R152, NOT_CONFIRMED,
		],
	PropertyNode:	[
			5321941455446123, 4570037250674243 , R147, R148, NOT_CONFIRMED,
			497398800169691, 3176221584105851 , R149, NOT_CONFIRMED,
			8836085045647372, 1261294572399445 , R150, R152, NOT_CONFIRMED,
		],
	StackNode:	[
			1425335880725081, 2744179587184063 , R148, NOT_CONFIRMED,
			4990843265457167, 8398056736416604 , R149, NOT_CONFIRMED,
			669162858935817, 1613584716262228 , R150, NOT_CONFIRMED,
			1992640991234704, 3798944766884794 , R151, R152, NOT_CONFIRMED,
		],
	TempNode:	[
			7854831728001326, 4772784475611884 , R147, NOT_CONFIRMED,
			4963936143914691, 4930038205240158 , R148, R149, NOT_CONFIRMED,
			5341913875871269, 6435462833910767 , R150, NOT_CONFIRMED,
			5576968626604265, 8397050010288672 , R151, R152, NOT_CONFIRMED,
		],
	UniformNode:	[
			5563840458832001, 5632304488122298 , R147, R149, NOT_CONFIRMED,
			6359511432218341, 969217372178063 , R150, R152, NOT_CONFIRMED,
		],
	VarNode:	[
			3119767482048547, 6721205794504776 , R147, NOT_CONFIRMED,
			2770914690922873, 335511253841787 , R148, R149, NOT_CONFIRMED,
			4312478120876983, 171612890498765 , R150, NOT_CONFIRMED,
			5439663556385481, 227630048987994 , R151, R152, NOT_CONFIRMED,
		],
	VaryingNode:	[
			569838008193615, 3537126659855544 , R147, NOT_CONFIRMED,
			5419129497685865, 8722203091470208 , R148, NOT_CONFIRMED,
			6923244854607096, 881783484508677 , R149, NOT_CONFIRMED,
			1629573272919334, 265155226957154 , R150, R152, NOT_CONFIRMED,
		],


// jsm\nodes\display\*.js	

	BlendModeNode:	[
			4268371694686236, 1451958407181120 , R147, R148, NOT_CONFIRMED,
			2035315954062093, 491516900812213 , R149, NOT_CONFIRMED,
			7431417373753131, 6277765877285556 , R150, NOT_CONFIRMED,
			4258865926305308, 2016081638866912 , R151, R152, NOT_CONFIRMED,
		],
	ColorAdjustmentNode:	[
			6986943287482690, 2691352570044187 , R147, R148, NOT_CONFIRMED,
			124899475970635, 4101072498796618 , R149, NOT_CONFIRMED,
			7367250490597390, 1815621809373030 , R150, NOT_CONFIRMED,
			8775536377765166, 7010144984905740 , R151, R152, NOT_CONFIRMED,
		],
	ColorSpaceNode:	[
			4148152951523050, 2887899281193633 , R147, R148, NOT_CONFIRMED,
			2285007283109350, 6366531660065329 , R149, NOT_CONFIRMED,
			761662327732718, 7130790206626629 , R150, R151, NOT_CONFIRMED,
			4680287669077872, 3662188157067086 , R152, NOT_CONFIRMED,
		],
	FrontFacingNode:	[
			1705351267893703, 5006821604756800 , R147, R149, NOT_CONFIRMED,
			7272560116006036, 25168822703660 , R150, R152, NOT_CONFIRMED,
		],
	NormalMapNode:	[
			2324830254906597, 6554811592662327 , R147, R149, NOT_CONFIRMED,
			1430804267300398, 7698451057577833 , R150, NOT_CONFIRMED,
			5430455739921479, 793496646448345 , R151, R152, NOT_CONFIRMED,
		],
	PosterizeNode:	[
			4530133854420088, 6770549636584985 , R147, R149, NOT_CONFIRMED,
			6362940299672679, 5778741012433438 , R150, R152, NOT_CONFIRMED,
		],
	ToneMappingNode:	[
			1866434321729206, 2004796257404351 , R147, NOT_CONFIRMED,
			540011706282124, 3102268412214681 , R148, NOT_CONFIRMED,
			8220621123844243, 6080826608652587 , R149, NOT_CONFIRMED,
			3248139373125562, 1921580101685148 , R150, R152, NOT_CONFIRMED,
		],
	ViewportNode:	[
			6801193502744891, 3150052211689763 , R147, R148, NOT_CONFIRMED,
			7285965225799671, 6951426854663280 , R149, NOT_CONFIRMED,
			1951326846746040, 4257752609230408 , R150, NOT_CONFIRMED,
			2228272693553598, 6593035105417650 , R151, NOT_CONFIRMED,
			4691625277623650, 7873298247937987 , R152, NOT_CONFIRMED,
		],
	ViewportSharedTextureNode: [
			5670349375465322, 8137490804480849 , R152, NOT_CONFIRMED,
		],
	ViewportTextureNode: [
			2216666946133050, 7164177832438046 , R152, NOT_CONFIRMED,
		],


// jsm\nodes\fog\*.js

	FogExp2Node:	[
			1118240580560743, 5954065012267516 , R148, R149, NOT_CONFIRMED,
			1545568106235915, 635059506405385 , R150, NOT_CONFIRMED,
			8842088722632041, 502311806890625 , R151, NOT_CONFIRMED,
			8529223393041605, 1575581942265589 , R152, NOT_CONFIRMED,
		],
	FogNode:	[
			1949545219141071, 6597392341536451 , R147, R149, NOT_CONFIRMED,
			4635508911339628, 8615662424949298 , R150, NOT_CONFIRMED,
			8908729623107719, 817458771918976 , R151, NOT_CONFIRMED,
			5274688252227515, 5788268422604201 , R152, NOT_CONFIRMED,
		],
	FogRangeNode:	[
			7314524163268548, 412982001161073 , R147, NOT_CONFIRMED,
			4342966143209429, 7961791138616513 , R148, R149, NOT_CONFIRMED,
			1234004238635127, 7081638706361276 , R150, R151, NOT_CONFIRMED,
			3285855925618462, 7824726243055397 , R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\functions\*.js

	PhongLightingModel:	[
			3089915195455047, 842691363847741 , R149, NOT_CONFIRMED,
			1485419832221026, 1326636289022729 , R150, R152, NOT_CONFIRMED,
		],
	PhysicalLightingModel:	[
			6038683283243869, 4968826458403452 , R147, R148, NOT_CONFIRMED,
			3389734775035072, 3707792337211636 , R149, NOT_CONFIRMED,
			5866891325783084, 2562397886566015 , R150, NOT_CONFIRMED,
			4823044049481653, 1950671373452996 , R151, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\functions\BSDF\*.js

	BRDF_BlinnPhong:	[
			5885240336771608, 7115008704647969 , R149, NOT_CONFIRMED,
			4349396311070209, 5934835213427001 , R150, R152, NOT_CONFIRMED,
		],
	BRDF_GGX:	[
			3067212415344788, 724582098149373 , R147, R149, NOT_CONFIRMED,
			2843215169992132, 8761836614212487 , R150, R152, NOT_CONFIRMED,
		],
	BRDF_Lambert:	[
			7218619997592786, 4368596691387029 , R147, R149, NOT_CONFIRMED,
			7617291054445535, 683133558804081 , R150, R152, NOT_CONFIRMED,
		],
	D_GGX:	[
			4371787720755138, 658475706444905 , R147, R149, NOT_CONFIRMED,
			7611265532051736, 8299846976250311 , R150, NOT_CONFIRMED,
			3262735429085279, 6763073914529634 , R151, R152, NOT_CONFIRMED,
		],
	DFGApprox:	[
			5223718001073784, 3623551371560894 , R147, NOT_CONFIRMED,
			7573316470420469, 1461868277193185 , R148, NOT_CONFIRMED,
			7044215842973076, 6818790879384570 , R149, NOT_CONFIRMED,
			6319455175026269, 1244488801658880 , R150, R152, NOT_CONFIRMED,
		],
	F_Schlick:	[
			754685430247297, 6439127058146034 , R147, NOT_CONFIRMED,
			2672004333860047, 2642875467068315 , R148, R149, NOT_CONFIRMED,
			3565812327724925, 4959121770688785 , R150, NOT_CONFIRMED,
			5147339769893546, 7525718980095134 , R151, R152, NOT_CONFIRMED,
		],
	V_GGX_SmithCorrelated:	[
			4401754165615415, 8470078391617563 , R147, R149, NOT_CONFIRMED,
			612125684217327, 5149876071613341 , R150, NOT_CONFIRMED,
			8589662491829133, 437117355082939 , R151, R152, NOT_CONFIRMED,
		],


// jsm\nodes\functions\light\*.js

	getDirectionVector:	[
			3407393882558236, 3749327545372091 , R148, NOT_CONFIRMED,
			5459864147203751, 3542027159627523 , R149, R152, NOT_CONFIRMED,
		],
	getDistanceAttenuation:	[
			4670384299842605, 1254305106933734 , R147, R149, NOT_CONFIRMED,
			7709160963280537, 7177492147651234 , R150, NOT_CONFIRMED,
			4510926106073972, 8491358205381568 , R151, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\functions\material\*.js

	getGeometryRoughness:	[
			2403794302506185, 4797686265846784 , R147, R149, NOT_CONFIRMED,
			254257497006472, 479997647360575 , R150, R152, NOT_CONFIRMED,
		],
	getRoughness:	[
			2344767431956718, 2275029749759530 , R147, R149, NOT_CONFIRMED,
			6944480685073801, 7108141078837659 , R150, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\functions\geometry\*.js

	RangeNode:	[
			71056648543846, 8796000323577376 , R147, R149, NOT_CONFIRMED,
			7853319243946466, 107781457256653 , R150, NOT_CONFIRMED,
			1752254243436991, 5638887236774016 , R151, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\gpgpu\*.js

	ComputeNode:	[
			1054784988531654, 712962072860169 , R147, R149, NOT_CONFIRMED,
			1583215515749524, 682780310678136 , R150, NOT_CONFIRMED,
			7020333711562187, 5916751503795630 , R151, R152, NOT_CONFIRMED,
		],
	
	
// jsm\nodes\lightning\*.js

	AmbientLightNode:	[
			6933123981270860, 2091292576559292 , R148, R149, NOT_CONFIRMED,
			3646608535896135, 6085619036348639 , R150, R152, NOT_CONFIRMED,
		],
	AnalyticLightNode:	[
			8853826026754983, 8892800106056051 , R147, R149, NOT_CONFIRMED,
			2984155383399464, 6103636689661128 , R150, R151, NOT_CONFIRMED,
			1053197274546659, 6698217553177339 , R152, NOT_CONFIRMED,
		],
	AONode:	[
			1428261846415909, 8404964755996444 , R147, R149, NOT_CONFIRMED,
			3030769898413722, 3936019759842487 , R150, R152, NOT_CONFIRMED,
		],
	DirectionalLightNode:	[
			7343441490723245, 492266805946406 , R148, NOT_CONFIRMED,
			5579758910973357, 5600095316156866 , R149, NOT_CONFIRMED,
			7749064665061213, 1612028366082663 , R150, R151, NOT_CONFIRMED,
			7216939307799175, 4381919158195080 , R152, NOT_CONFIRMED,
		],
	EnvironmentNode:	[
			4997902556795400, 8685970366529682 , R147, NOT_CONFIRMED,
			4240995083602251, 3162065436468083 , R148, R149, NOT_CONFIRMED,
			3961857425756535, 3594619579179468 , R150, NOT_CONFIRMED,
			8251113228218987, 2754429388137469 , R151, NOT_CONFIRMED,
			2403797376972238, 5343429179835392 , R152, NOT_CONFIRMED,
		],
	HemisphereLightNode:	[
			8140502267106289, 8654205769074875 , R147, R149, NOT_CONFIRMED,
			7461671846617177, 2721180404477822 , R150, R152, NOT_CONFIRMED,
		],
	IESSpotLightNode:	[
			544416506575978, 6797565721230102 , R149, NOT_CONFIRMED,
			6120088013448167, 2708269197628114 , R150, R152, NOT_CONFIRMED,
		],
	LightingContextNode:	[
			2799802348666513, 6733142606809730 , R147, R148, NOT_CONFIRMED,
			6436221094896364, 6655840268235082 , R149, NOT_CONFIRMED,
			1455108025713366, 3044615741826104 , R150, R151, NOT_CONFIRMED,
			162787984496464, 3633391302264652 , R152, NOT_CONFIRMED,
		],
	LightingNode:	[
			7481073444214539, 6612833031012326 , R150, R152, NOT_CONFIRMED,
		],
	LightNode: [
			1008411676904077, 3396115951185150 , R152, NOT_CONFIRMED,
		],
	LightsNode:	[
			1068998306406529, 431796183355173 , R147, NOT_CONFIRMED,
			5644489177566251, 6857141418808134 , R148, R149, NOT_CONFIRMED,
			2057805505632913, 3157829763047716 , R150, R152, NOT_CONFIRMED,
		],
	LightUtils: [
			3005867912566238, 8591335748783058 , R152, NOT_CONFIRMED,
		],
	PointLightNode:	[
			5630060986903121, 8493810733381263 , R148, NOT_CONFIRMED,
			8717006840869635, 1898731818518044 , R149, NOT_CONFIRMED,
			5635521632711962, 4631858717731191 , R150, R151, NOT_CONFIRMED,
			4307488142089339, 7229601140856665 , R152, NOT_CONFIRMED,
		],
	SpotLightNode:	[
			8186293475502268, 6669444222257681 , R148, NOT_CONFIRMED,
			5354886822347785, 88870268953468 , R149, NOT_CONFIRMED,
			5025160528172803, 8760204836497525 , R150, R151, NOT_CONFIRMED,
			4316918418477295, 6592614087832783 , R152, NOT_CONFIRMED,
		],
	
	
// loaders

	NodeLoader:	[
			2918269744395290, 6855500209763981 , R147, R149, NOT_CONFIRMED,
			1939046988662703, 7589538649087080 , R150, NOT_CONFIRMED,
			2667139736588400, 1529237760733884 , R151, R152,  NOT_CONFIRMED,
		],
	NodeMaterialLoader:	[
			3521758013197878, 8536997720879747 , R147, R149, NOT_CONFIRMED,
			655481302506818, 2957273072875342 , R150, NOT_CONFIRMED,
			3974224044652751, 8851726477065285 , R151, R152,  NOT_CONFIRMED,
		],
	NodeObjectLoader:	[
			927652164438870, 8317656018210108 , R147, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\materialx\*.js

	MaterialXNodes:	[
			8125210337175823, 1777437433286646 , R147, R149, NOT_CONFIRMED,
			2475229826762752, 6232350157434792 , R150, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\materialx\lib\*.js

	mx_hsv:	[
			8612247265397573, 6593626437483743 , R147, R149, NOT_CONFIRMED,
			7414644985977917, 8508319204600 , R150, NOT_CONFIRMED,
			324714855931635, 5381728742964780 , R151, R152, NOT_CONFIRMED,
		],
	mx_noise:	[
			7545102876068827, 1461732013261418 , R147, R149, NOT_CONFIRMED,
			7288725542598969, 7511840910262214 , R150, NOT_CONFIRMED,
			985237645879781, 3076902791193785 , R151, R152, NOT_CONFIRMED,
		],
	mx_transform_color:	[
			6937448922803299, 153109051091149 , R147, R149, NOT_CONFIRMED,
			1887933327871652, 1909389673979823 , R150, NOT_CONFIRMED,
			8699135669795161, 4011809048770202 , R151, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\materialx\materials\*.js

	LineBasicNodeMaterial:	[
			915052349798962, 3780283952005373 , R147, R148, NOT_CONFIRMED,
			8155566396857658, 8074903747577446 , R149, NOT_CONFIRMED,
			8004987051771505, 436228807160005 , R150, R151, NOT_CONFIRMED,
			3151613625265477, 1602468288498355 , R152, NOT_CONFIRMED,
		],
	Materials:	[
			4711876339385991, 5787978937654885 , R147, R148, NOT_CONFIRMED,
			3554615473939508, 4264735835264861 , R149, NOT_CONFIRMED,
			5682825957581573, 0 , R150, R152, CANNOT_CONVERT,
		],
	MeshBasicNodeMaterial:	[
			191474633408006, 7829657454406210 , R147, NOT_CONFIRMED,
			7223464979996446, 512323636173935 , R148, R149, NOT_CONFIRMED,
			7881633730322065, 542722800622075 , R150, R151, NOT_CONFIRMED,
			4518709394337010, 1128502748937750 , R152, NOT_CONFIRMED,
		],
	MeshNormalNodeMaterial:	[
			588056682142571, 5265597440157264 , R150, NOT_CONFIRMED,
			7610894947638110, 8629809373235523 , R151, NOT_CONFIRMED,
			8372869262734662, 5047260112140345 , R152, NOT_CONFIRMED,
		],
	MeshPhongNodeMaterial:	[
			1779479591474311, 8443695151522921 , R149, NOT_CONFIRMED,
			7996897674808307, 4152003277617364 , R150, NOT_CONFIRMED,
			1096852225113518, 5063992688128265 , R151, NOT_CONFIRMED,
			5272858608130655, 1555017938548460 , R152, NOT_CONFIRMED,
		],
	MeshPhysicalNodeMaterial:	[
			53564693443152, 5031420011405163 , R147, R149, NOT_CONFIRMED,
			6181038172292318, 5413875859325409 , R150, R151, NOT_CONFIRMED,
			5275928747548458, 5593774001273188 , R152, NOT_CONFIRMED,
		],
	MeshStandardNodeMaterial:	[
			4097615313711052, 5258360580468659 , R147, R148, NOT_CONFIRMED,
			2313322348888025, 7329336660820799 , R149, NOT_CONFIRMED,
			1512850053261915, 1238438495623968 , R150, NOT_CONFIRMED,
			2210662862198908, 7206433780159313 , R151, NOT_CONFIRMED,
			2796240644687143, 7434707794711006 , R152, NOT_CONFIRMED,
		],
	NodeMaterial:	[
			5534438469452974, 2173121791928452 , R147, NOT_CONFIRMED,
			1197484520949455, 8616035268064327 , R148, NOT_CONFIRMED,
			3963065837387633, 6427969562449655 , R149, NOT_CONFIRMED,
			3985987086896924, 2194695343925292 , R150, NOT_CONFIRMED,
			1392064129175203, 7168147145340761 , R151, NOT_CONFIRMED,
			427548321090601, 3907188176689911 , R152, NOT_CONFIRMED,
		],
	PointsNodeMaterial:	[
			5690698238683948, 3082694739062762 , R147, R148, NOT_CONFIRMED,
			1426705471214529, 8229530409381194 , R149, NOT_CONFIRMED,
			4720509615321105, 8749012573957313 , R150, R152, NOT_CONFIRMED,
		],
	SpriteNodeMaterial:	[
			2846465361364088, 2953135237559588 , R147, R148, NOT_CONFIRMED,
			4907098073094447, 4842226301389373 , R149, NOT_CONFIRMED,
			7808658972772234, 8608304554714993 , R150, R152, NOT_CONFIRMED,
		],


// jsm\nodes\math\*.js

	CondNode:	[
			4747466710930709, 7917238149438753 , R147, R148, NOT_CONFIRMED,
			7970461200263882, 8251821724476558 , R149, NOT_CONFIRMED,
			1281032624006275, 8888257454039634 , R150, NOT_CONFIRMED,
			2566060507427126, 7301857252059240 , R151, R152, NOT_CONFIRMED,
		],
	MathNode:	[
			1146322599696457, 6362407122514158 , R147, R148, NOT_CONFIRMED,
			717885523461531, 6092735861386127 , R149, NOT_CONFIRMED,
			5719624825207856, 5016565328048292 , R150, NOT_CONFIRMED,
			1950955009752578, 1786917480036475 , R151, R152, NOT_CONFIRMED,
		],
	OperatorNode:	[
			4060169501724292, 4641569127094616 , R147, NOT_CONFIRMED,
			556468773345689, 1203894687843575 , R148, R149, NOT_CONFIRMED,
			7713872811912282, 5585615718279628 , R150, NOT_CONFIRMED,
			5708669963006803, 2353024627515193 , R151, R152, NOT_CONFIRMED,
		],
	
	
// jsm\nodes\parsers\*.js

	GLSLNodeFunction:	[
			6982558975747232, 8466011150986809 , R147, R152, NOT_CONFIRMED,
		],
	GLSLNodeParser:	[
			5583752251510215, 3477570324504544 , R147, R152, NOT_CONFIRMED,
		],
	WGSLNodeFunction:	[
			6349557700415329, 7158507527723603 , R147, R152, NOT_CONFIRMED,
		],
	WGSLNodeParser:	[
			6864835405735064, 1759840954041286 , R147, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\procedural\*.js

	CheckerNode:	[
			4508494365689757, 3605265016430087 , R147, R149, NOT_CONFIRMED,
			895110767311155, 1252165915241168 , R150, R152, NOT_CONFIRMED,
		],
		
		
// jsm\nodes\shadernode\*.js

	ShaderNode:	[
			8786764725414910, 597607531843409 , R147, NOT_CONFIRMED,
			2288327832267650, 4454303852094058 , R148, NOT_CONFIRMED,
			7158859925017418, 3871801375579752 , R149, NOT_CONFIRMED,
			8365547829429528, 5892765432597212 , R150, NOT_CONFIRMED,
			1724608757989608, 5773426435472130 , R151, R152, NOT_CONFIRMED,
		],
	ShaderNodeBaseElements:	[ // discontinued
			3579918506930427, 690654646081229 , R147, NOT_CONFIRMED,
			2123274722125215, 2247070066086856 , R148, NOT_CONFIRMED,
			8423620286451124, 6043104390019801 , R149, NOT_CONFIRMED,
		],
	ShaderNodeElements:	[ // discontinued
			2023750765430871, 5280875851785970 , R147, NOT_CONFIRMED,
			5233302915359883, 3201744976920407 , R148, NOT_CONFIRMED,
			8989385294953215, 0 , R149, CANNOT_CONVERT,
		],
		
		
// jsm\nodes\utils\*.js

	ArrayElementNode:	[
			151517071030299, 4402141580431990 , R147, R149, NOT_CONFIRMED,
			1124506755005466, 1957240396988261 , R150, R152, NOT_CONFIRMED,
		],
	ConvertNode:	[
			7332660443613330, 811191572225775 , R147, R149, NOT_CONFIRMED,
			4708581825804387, 6604174541563335 , R150, NOT_CONFIRMED,
			376839471451187, 921910738415037 , R151, R152, NOT_CONFIRMED,
		],
	DiscardNode:	[
			3620598703914213, 3616111220941703 , R149, NOT_CONFIRMED,
			8849663320844721, 2703397685152948 , R150, NOT_CONFIRMED,
			2391356247204950, 8303490895823411 , R151, R152, NOT_CONFIRMED,
		],
	EquirectUVNode:	[
			5100097419253401, 4260722865229749 , R147, R149, NOT_CONFIRMED,
			5557103303256171, 5264022142091034 , R150, R151, NOT_CONFIRMED,
			2881387731750933, 4640371855178460 , R152, NOT_CONFIRMED,
		],
	JoinNode:	[
			2141976976878696, 3623156150873223 , R147, R149, NOT_CONFIRMED,
			1243665493216725, 8298601222997352 , R150, R152, NOT_CONFIRMED,
		],
	MatcapUVNode:	[
			4941972844409322, 8815158564622193 , R147, R149, NOT_CONFIRMED,
			2021974535766673, 2637069687949557 , R150, R152, NOT_CONFIRMED,
		],
	MaxMipLevelNode:	[
			602439603219396, 2039416061182014 , R147, NOT_CONFIRMED,
			6482260510157480, 3444693899632633 , R148, NOT_CONFIRMED,
			329092347032166, 4058733851691784 , R149, NOT_CONFIRMED,
			7088592330264542, 4314755486073305 , R150, R152, NOT_CONFIRMED,
		],
	OscNode:	[
			3856586745182517, 7985691560233075 , R147, R148, NOT_CONFIRMED,
			6535243439193757, 1842095595168091 , R149, NOT_CONFIRMED,
			3224479978384070, 7006827613802896 , R150, NOT_CONFIRMED,
			1516226709710314, 8719428294455219 , R151, R152, NOT_CONFIRMED,
		],
	PackingNode:	[
			120788249685470, 5341904924018230 , R150, R152, NOT_CONFIRMED,
		],
	PunctualLightNode:	[ // discontinued
			1306255561420557, 5915399369038238 , R147, NOT_CONFIRMED,
		],
	RemapNode:	[
			3807366216421104, 7310239829035835 , R147, R149, NOT_CONFIRMED,
			8731313367688168, 7707879163275330 , R150, R152, NOT_CONFIRMED,
		],
	RotateUVNode:	[
			2367528223223485, 4165772284993252 , R147, R149, NOT_CONFIRMED,
			3234646920394197, 2670678251820697 , R150, R152, NOT_CONFIRMED,
		],
	SpecularMIPLevelNode:	[
			5634408285338769, 2761291051509060 , R148, R149, NOT_CONFIRMED,
			4303151215558206, 2685049653005925 , R150, R152, NOT_CONFIRMED,
		],
	SplitNode:	[
			8360039447636289, 3303493127846199 , R147, R149, NOT_CONFIRMED,
			1428832237322359, 6920810366871019 , R150, R152, NOT_CONFIRMED,
		],
	SpriteSheetUVNode:	[
			2878205285409150, 4001252429027452 , R147, R149, NOT_CONFIRMED,
			2608385981404671, 5490016164281684 , R150, R152, NOT_CONFIRMED,
		],
	TimerNode:	[
			4655543445248130, 6195930687012453 , R147, R148, NOT_CONFIRMED,
			6657640932462718, 5638403653139266 , R149, NOT_CONFIRMED,
			7534632370389815, 63236825296483 , R150, R152, NOT_CONFIRMED,
		],
	TriplanarTexturesNode:	[
			5646109207943854, 2308487192366783 , R147, R149, NOT_CONFIRMED,
			6653531619596883, 8275866202943249 , R150, R152, NOT_CONFIRMED,
		],


// jsm\objects\*.js

	GroundProjectedEnv:	[
			3209647647024930, 243069015256079 , R147,
			2022798777032067, 6592994775661888 , R148,
			1042770395217430, 6991233553576540 , R149, R150,
		],
	GroundProjectedSkybox:	[
			1767782377206942, 7362579815519085 , R151, R152,
		],
	Lensflare:	[
			933464714826082, 6954238707737649 , R147, R152,
		],
	LightningStorm:	[
			6616917369283776, 864874431866378 , R147, R152,
		],
	MarchingCubes:	[
			4667258537036907, 5532718995014579 , R147, R152,
		],
	Reflector:	[
			4871058277040602, 888175106352713 , R147, R151,
			7472061799103395, 7731001287100172 , R152,
		],
	ReflectorForSSRPass:	[
			6977488871853286, 2771238122644462 , R147, R152,
		],
	Refractor:	[
			3935440023460978, 7033534258479891 , R147, R151,
			2417618705046344, 4296867419472115 , R152,
		],
	ShadowMesh:	[
			68183448930033, 8611885472979811 , R147, R150,
			6574685351092758, 8632527320583635 , R151, R152,
		],
	Sky:	[
			249847175026169, 2558137094218159 , R147, R152,
		],
	Water:	[
			1067915028797984, 712711564490518 , R147, R152,
		],
	Water2:	[
			2120526706889228, 8732319691887990 , R147, R152,
		],


// jsm\offscreen\*.js

	jank:	[
			4774812515654055, 973414975233232 , R147, R152, NOT_CONFIRMED,
		],
	offscreen:	[
			662043014197242, 7690537328017043 , R147, R152, NOT_CONFIRMED,
		],
	scene:	[
			3216947742627446, 1942905870555189 , R147, R152, NOT_CONFIRMED,
		],


// jsm\physics\*.js

	AmmoPhysics:	[
			7517264819391925, 6615522549059090 , R147, R150,
			2344711409916840, 2990016954173698 , R151,
			8164116827736263, 3578564277577235 , R152,
		],
	OimoPhysics:	[
			338989220735410, 3916132481343801 , NOT_THREE_JS,
			2613689718091502, 3002843339918750 , R147, R150,
			5623565153424374, 7702088865370174 , R151,
		],
	'OimoPhysics (1)':	[
			2613689718091502, 3002843339918750 , R147, R150,
			5623565153424374, 7702088865370174 , R151,
		],
	RapierPhysics: [
		8071219442777258, 6396630075526611 , R152, NOT_CONFIRMED,
	],


// jsm\postprocessing\*.js

	AdaptiveToneMappingPass:	[
			2364970081330801, 5599991563324348 , R147,
			4845566868124166, 890677095544409 , R148, R152,
		],
	AfterimagePass:	[
			7653725564678955, 3352420493560622 , R147,
			8556643418937601, 3093597036496954 , R148, R152,
		],
	BloomPass:	[
			5134099620091276, 5323953240874273 , R147,
			1574425029952198, 3122067867030238 , R148, R152,
		],
	BokehPass:	[
			7407330994318264, 3911492235336931 , R147,
			2472370746737956, 2704357889170418 , R148, R152,
		],
	ClearPass:	[
			3179283397434010, 3406065309805403 , R147, R152,
		],
	CubeTexturePass:	[
			4846912716183097, 8666533997924014 , R147, R152,
		],
	DotScreenPass:	[
			6061038516236221, 565630309179435 , R147,
			2159316520373534, 559266143810656 , R148, R152,
		],
	EffectComposer:	[
			6447861811187505, 5905050568889170 , R147,
			4373285152784193, 4210390225481079 , R148, R151,
			1480554259795336, 4562645429739017 , R152,
		],
	FilmPass:	[
			5578919757601172, 2121330939589775 , R147,
			8367874878724797, 6697941188075044 , R148, R152,
		],
	GlitchPass:	[
			8312595776594738, 6257538433351437 , R147,
			8649277378190012, 7926267536242065 , R148, R152,
		],
	HalftonePass:	[
			7629117879539993, 7083245433838368 , R147,
			9019118997954, 1650583007893950 , R148, R152,
		],
	LUTPass:	[
			3243928235390895, 6181074452900292 , R147, R152,
		],
	MaskPass:	[
			1333654107434139, 8267734874329596 , R147, R152,
		],
	OutlinePass:	[
			4708797621364561, 7060673549532945 , R147,
			44053359780665, 6972775623853994 , R148, R152,
		],
	Pass:	[
			3154920630396720, 4064811221804372 , R147, R150,
			7624336251225098, 4925620950001672 , R152,
		],
	RenderPass:	[
			8210427678242849, 1731156248757721 , R147, R152,
		],
	RenderPixelatedPass:	[
			7188498385698559, 8265344145956456 , R147, R152,
		],
	SAOPass:	[
			1158702175465290, 672109693742732 , R147,
			3462132740504279, 7717991170300342 , R148, R152,
		],
	SavePass:	[
			791685695598490, 3681879478760896 , R147,
			2488755430187002, 145463280439165 , R148, R152,
		],
	ShaderPass:	[
			2914158575483121, 5879691536794496 , R147, R152,
		],
	SMAAPass:	[
			152998597593694, 8589778776161150 , R147,
			6127638268264785, 6173812857992655 , R148, R152,
		],
	SSAARenderPass:	[
			5570188049648057, 4819531753089386 , R147,
			7835443657191228, 7926724496651569 , R148, R152,
		],
	SSAOPass:	[
			3689986794206844, 984689668651417 , R147,
			4995075412297645, 5250187939831256 , R148, R152,
		],
	SSRPass:	[
			2809967475621701, 4287306947692424 , R147,
			2353002127099622, 1081347176573888 , R148, R152,
		],
	TAARenderPass:	[
			6546205943478792, 7385786089780327 , R147, R152,
		],
	TexturePass:	[
			2002512202019259, 878485824922162 , R147,
			3339245081240628, 1603419785485516 , R148, R152,
		],
	UnrealBloomPass:	[
			622222350514699, 2810488985597342 , R147,
			5797237821641505, 871861160617678 , R148, R152,
		],


// jsm\renderers\*.js

	CSS2DRenderer:	[
			5761697393480706, 2343738057319828 , R147, R150,
			6223938530497245, 5917643144737120 , R151,
			4151742177928340, 8933662959096835 , R152,
		],
	CSS3DRenderer:	[
			5213607906990352, 7366260962428179 , R147, R149,
			2531187368023445, 2335829492788340 , R150, R152,
		],
	Projector:	[
			4874510425331828, 3421560008749342 , R147, R152,
		],
	SVGRenderer:	[
			8409222279450335, 1540426567003354 , R147, R152,
		],
		
		
// jsm\renderers\webgl\nodes\*.js

	SlotNode:	[
			6246269276999764, 8539121015996565 , R147, R152, NOT_CONFIRMED,
		],
	WebGLNodeBuilder:	[
			7603786283542514, 3811833020584754 , R147, R148, NOT_CONFIRMED,
			7366194964777105, 8078351098205838 , R149, R150, NOT_CONFIRMED,
			4604345549560844, 8661890694549361 , R151, NOT_CONFIRMED,
			6015230732472716, 5522566654455572 , R152, NOT_CONFIRMED,
		],
	WebGLNodes:	[
			6102206417239882, 5874712525988994 , R147, R152, NOT_CONFIRMED,
		],
		
		
// jsm\renderers\webgpu\*.js

	constants:	[
			8092164987108498, 4979088863225746 , R149, NOT_CONFIRMED,
			2423846254686774, 8821360085291984 , R150, R151, NOT_CONFIRMED,
			4212168181234294, 8184446578479143 , R147, R151, NOT_CONFIRMED,
			37166142899439, 2551000574374222 , R152, NOT_CONFIRMED,
			2147434047152027, 6067165578382122 , R152, NOT_CONFIRMED,
		],
	'constants (1)':	[
			4212168181234294, 8184446578479143 , R147, R151, NOT_CONFIRMED,
			37166142899439, 2551000574374222 , R152, NOT_CONFIRMED,
		],
	WebGPUAnimation:	[
			4396707476536727, 1362172952059245 , R147, R151, NOT_CONFIRMED,
			663334871299887, 8247420506630567 , R152, NOT_CONFIRMED,
		],
	WebGPUAttributes:	[
			8260799714901852, 4833428561682782 , R147, R148, NOT_CONFIRMED,
			8248860689729662, 3488913737687400 , R149, R151, NOT_CONFIRMED,
			2903591640482434, 4195672479876754 , R152, NOT_CONFIRMED,
		],
	WebGPUBackground:	[
			8602578334808291, 7332439247329840 , R147, NOT_CONFIRMED,
			7709647571553623, 3638112494218140 , R148, NOT_CONFIRMED,
			5928101977796949, 8738388598289618 , R149, NOT_CONFIRMED,
			673359525068489, 6601984067471993 , R150, NOT_CONFIRMED,
			3542486725493208, 3650969244820747 , R151, NOT_CONFIRMED,
			2674251498039963, 8400292557397653 , R152, NOT_CONFIRMED,
		],
	WebGPUBinding:	[
			1052849230428151, 2351370438823779 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUBindings:	[
			6390769329634040, 1028539862070895 , R147, R150, NOT_CONFIRMED,
			6907167281777253, 5773346779509956 , R151, NOT_CONFIRMED,
			5726828488435129, 7126778175291600 , R152, NOT_CONFIRMED,
		],
	WebGPUBuffer:	[
			1128114772154585, 4108507015491386 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUBufferUtils:	[
			5582104232779032, 5968375678232184 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUComputePipelines:	[
			304143103404491, 2605402938365662 , R147, R151, NOT_CONFIRMED,
			7020470257488124, 6968643989924386 , R152, NOT_CONFIRMED,
		],
	WebGPUGeometries:	[
			703305899898364, 705015854005336 , R147, R148, NOT_CONFIRMED,
			5929460143369587, 4305673033133587 , R149, R151, NOT_CONFIRMED,
			3918957948722940, 1007520242464209 , R152, NOT_CONFIRMED,
		],
	WebGPUInfo:	[
			135504537623419, 5223825081876484 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUObjects:	[
			920700533351342, 5025316533615468 , R147, R148, NOT_CONFIRMED,
			7017445078018932, 7105222220362789 , R149, R151, NOT_CONFIRMED,
		],
	WebGPUProgrammableStage:	[
			842663305465827, 2648485720576282 , R147, R151, NOT_CONFIRMED,
			769015594678433, 43285933345191 , R152, NOT_CONFIRMED,
		],
	WebGPUProperties:	[
			6920639407860960, 8808909663707579 , R147, R151, NOT_CONFIRMED,
			7052798113404978, 1464246289781945 , R152, NOT_CONFIRMED,
		],
	WebGPURenderer:	[
			3105965882093147, 6867104072899155 , R147, NOT_CONFIRMED,
			2724571404603711, 1343793424578254 , R148, NOT_CONFIRMED,
			8368918193870273, 5781419125025215 , R149, R151, NOT_CONFIRMED,
			505710180541208, 8684189766029180 , R152, NOT_CONFIRMED,
		],
	WebGPURenderLists:	[
			2600605215882859, 8106823019483006 , R147, R151, NOT_CONFIRMED,
			6005722336558030, 822367783575115 , R152, NOT_CONFIRMED,
		],
	WebGPURenderObject: [
			3754973013123137, 1096066661717312 , R152, NOT_CONFIRMED,
		],
	WebGPURenderObjects: [
			3182913277687797, 8355538862288859 , R152, NOT_CONFIRMED,
		],
	WebGPURenderPipeline:	[
			8886684872891921, 7590242043935142 , R147, R151, NOT_CONFIRMED,
			3570182304814599, 4016263134779138 , R152, NOT_CONFIRMED,
		],
	WebGPURenderPipelines:	[
			6071989857243972, 2904017431086197 , R147, R151, NOT_CONFIRMED,
			8855119187523896, 523741989808652 , R152, NOT_CONFIRMED,
		],
	WebGPURenderStates:	[
			4238935362379250, 711628329736901 , R147, R149, NOT_CONFIRMED,
			6330372510436986, 4826157079116893 , R150, R151, NOT_CONFIRMED,
			3942148305206887, 6080160371538719 , R152, NOT_CONFIRMED,
		],
	WebGPURenderTarget: [
			3692137294054167, 1951743741694889 , R152, NOT_CONFIRMED,
	],
	WebGPUSampledTexture:	[
			1044834228631084, 2161359546613042 , R147, R151, NOT_CONFIRMED,
			5590487903252118, 2920041596565728 , R152, NOT_CONFIRMED,
		],
	WebGPUSampler:	[
			4379276160546224, 6179457164325694 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUStorageBuffer:	[
			8879012140483729, 4063232874262165 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUTextureRenderer:	[
			3644421805341548, 1277260471497666 , R147, R151, NOT_CONFIRMED,
			6262692794998025, 954365237043472 , R152, NOT_CONFIRMED,
		],
	WebGPUTextures:	[
			4993903402759818, 1210147287088057 , R147, R148, NOT_CONFIRMED,
			6657530217354840, 8894441647739386 , R149, R150, NOT_CONFIRMED,
			1020814800147821, 5738777050922371 , R151, NOT_CONFIRMED,
			5043777976043394, 1866092297985379 , R152, NOT_CONFIRMED,
		],
	WebGPUTextureUtils:	[
			6209481707381743, 188130353276075 , R147, R151, NOT_CONFIRMED,
			374813453502579, 3665561553373575 , R152, NOT_CONFIRMED,
		],
	WebGPUUniform:	[
			7573108404564106, 5074264400380264 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUUniformBuffer:	[
			2678477547380328, 2916007059851266 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUUniformsGroup:	[
			7548286641043798, 4892996170429149 , R147, NOT_CONFIRMED,
			6293676918834958, 972244663601452 , R148, R152, NOT_CONFIRMED,
		],
	WebGPUUtils:	[
			401528447373683, 2664965900388194 , R147, R148, NOT_CONFIRMED,
			4382630997169875, 5919906337052048 , R149, R151, NOT_CONFIRMED,
			2537891347317999, 8091116832670704 , R152, NOT_CONFIRMED,
		],
	WebGPUWeakMap: [
			5515476143268762, 8434090334737549 , R152, NOT_CONFIRMED,
		],
		
		
// jsm\renderers\webgpu\nodes\*.js

	WebGPUNodeBuilder:	[
			5630792256502948, 6469113420531100 , R147, NOT_CONFIRMED,
			3611378909333641, 5406769082327755 , R148, NOT_CONFIRMED,
			2717391475484226, 7249990501044928 , R149, R150, NOT_CONFIRMED,
			5778248873912201, 2427120244623704 , R151, NOT_CONFIRMED,
			7193796259634242, 1092041048582671 , R152, NOT_CONFIRMED,
		],
	WebGPUNodes:	[
			8910817616796492, 3746429705554871 , R147, R148, NOT_CONFIRMED,
			1134742417599496, 7317247823492625 , R149, R151, NOT_CONFIRMED,
			6119840543240959, 2145941625696366 , R152, NOT_CONFIRMED,
		],
	WebGPUNodeSampledTexture:	[
			4182530203320379, 7869343793535983 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUNodeSampler:	[
			2952521742598095, 1757604139554156 , R147, R152, NOT_CONFIRMED,
		],
	WebGPUNodeUniform:	[
			1197191436633885, 3333588586681962 , R147, R152, NOT_CONFIRMED,
		],


// jsm\shaders\*.js

	ACESFilmicToneMappingShader:	[
			5258378719643215, 3317902934456707 , R147, R152,
		],
	AfterimageShader:	[
			1853522238344266, 1036581519118649 , R147, R152,
		],
	BasicShader:	[
			6171277070307398, 2002560184745876 , R147, R152,
		],
	BleachBypassShader:	[
			8695360369077117, 7029425841183617 , R147, R152,
		],
	BlendShader:	[
			7843294192220771, 3342083449252165 , R147, R152,
		],
	BokehShader:	[
			4703011871283499, 157836022820183 , R147, R152,
		],
	BokehShader2:	[
			1977334425116581, 5396667625338936 , R147, R152,
		],
	BrightnessContrastShader:	[
			3967265984788799, 2358526049380075 , R147, R152,
		],
	ColorCorrectionShader:	[
			5055259411793326, 6590322515405828 , R147, R152,
		],
	ColorifyShader:	[
			153489079315625, 6382597169065982 , R147, R152,
		],
	ConvolutionShader:	[
			5974258379535476, 485908628382688 , R147, R152,
		],
	CopyShader:	[
			8069323330935930, 4010972446276340 , R147, R152,
		],
	DepthLimitedBlurShader:	[
			2570419379241619, 1916946377194660 , R147, R152,
		],
	DigitalGlitch:	[
			3240701949089782, 8603348631761156 , R147, R152,
		],
	DOFMipMapShader:	[
			3059587087095805, 4680435379908302 , R147, R152,
		],
	DotScreenShader:	[
			1820637089993678, 7389813360795599 , R147, R152,
		],
	FilmShader:	[
			4904460898327878, 6768407777951243 , R147, R152,
		],
	FocusShader:	[
			6213423017407100, 8483935674792700 , R147, R152,
		],
	FreiChenShader:	[
			5070010603073323, 6356390143480617 , R147, R152,
		],
	FXAAShader:	[
			5277748508273219, 6901070472968357 , R147, R152,
		],
	GammaCorrectionShader:	[
			3454969009186858, 582113574246248 , R147, R152,
		],
	GodRaysShader:	[
			2401867666235434, 2798896236447159 , R147, R152,
		],
	HalftoneShader:	[
			47155110157681, 3378201717609767 , R147, R152,
		],
	HorizontalBlurShader:	[
			6234880670881553, 2201917459687553 , R147, R152,
		],
	HorizontalTiltShiftShader:	[
			10538750070480, 211777929111573 , R147, R152,
		],
	HueSaturationShader:	[
			8518298462313437, 7353575343397985 , R147, R152,
		],
	KaleidoShader:	[
			6128008827164570, 7555178727106116 , R147, R152,
		],
	LuminosityHighPassShader:	[
			2780705295520947, 62593864058149 , R147, R152,
		],
	LuminosityShader:	[
			6278979903195307, 422580035089278 , R147, R152,
		],
	MirrorShader:	[
			6935752437031718, 7631280483356669 , R147, R152,
		],
	MMDToonShader:	[
			5729257508387137, 8714249088752168 , R147, R148,
			8913790358153409, 3531695100586275 , R149, R152,
		],
	NormalMapShader:	[
			6623486650005275, 3023837186198741 , R147, R152,
		],
	RGBShiftShader:	[
			6488934629672525, 6446501902115415 , R147, R149,
			5104461682713959, 361552506151142 , R150, R152,
		],
	SAOShader:	[
			4509662881104571, 7341093554953721 , R147, R152,
		],
	SepiaShader:	[
			1415710288835149, 8754947513932719 , R147, R152,
		],
	SMAAShader:	[
			7171081707607249, 160761357699808 , R147, R152,
		],
	SobelOperatorShader:	[
			2456630343939578, 2842948134168369 , R147, R152,
		],
	SSAOShader:	[
			4514944621678800, 4052665314780446 , R147, R152,
		],
	SSRShader:	[
			5908592751262896, 3796192715054877 , R147, R152,
		],
	SubsurfaceScatteringShader:	[
			8491180681271036, 7841578875331788 , R147, R152,
		],
	TechnicolorShader:	[
			6427976170541877, 8936986527657645 , R147, R152,
		],
	ToneMapShader:	[
			122960329870117, 2388173745438001 , R147, R152,
		],
	ToonShader:	[
			7501434952691393, 3763820921640163 , R147, R152,
		],
	TriangleBlurShader:	[
			277835109696312, 4216337555715115 , R147, R152,
		],
	UnpackDepthRGBAShader:	[
			983825312039527, 159295952492590 , R147, R152,
		],
	VelocityShader:	[
			1068095141001080, 4287112586084650 , R147, R150,
			5880308127394816, 1868005837603712 , R151, R152,
		],
	VerticalBlurShader:	[
			7743851693116371, 5200615354655531 , R147, R152,
		],
	VerticalTiltShiftShader:	[
			1033330917334101, 1811377788722827 , R147, R152,
		],
	VignetteShader:	[
			2792448367336573, 3400156942148079 , R147, R152,
		],
	VolumeShader:	[
			6320047063890666, 4529607936444149 , R147, R152,
		],
	WaterRefractionShader:	[
			7273399850368277, 4215338308211416 , R147, R152,
		],


// jsm\textures\*.js

	FlakesTexture:	[
			4582515071681576, 8402823063941429 , R147, R152,
		],


// jsm\utils\*.js

	BufferGeometryUtils:	[
			7014196652191254, 942206056289407 , R147, R149,
			6960728184335821, 6240011952495542 , R150,
			5682220831745699, 2354531262076120 , R151,
			6162400278750749, 333458743647981 , R152,
		],
	CameraUtils:	[
			362012460112664, 1667508449377211 , R147, R152,
		],
	GeometryCompressionUtils:	[
			2952293075389709, 8338267574310261 , R147, R152,
		],
	GeometryUtils:	[
			3028883636171673, 4360446744906453 , R147, R152,
		],
	GPUStatsPanel:	[
			7849635543326202, 8518362217355809 , R147, R152,
		],
	LDrawUtils:	[
			4678907742689053, 1649942618301254 , R147, R150,
			4853194149054884, 5197257360394349 , R151, R152,
		],
	PackedPhongMaterial:	[
			6970196574512597, 2826086413052148 , R147,
			3647962238133551, 3533526968549557 , R148, R150,
			5920448440652540, 6411481405269772 , R151, R152,
		],
	SceneUtils:	[
			800211159559702, 7243966955611208 , R147,
			4720750871343649, 5859889340854455 , R148, R152,
		],
	ShadowMapViewer:	[
			6590898882115409, 5424733363202046 , R147, R152,
		],
	SkeletonUtils:	[
			3534120956770652, 297335428320915 , R147, R150,
			1611837024089073, 1444437736653378 , R151,
			2215793105828204, 2655100781121192 , R152,
		],
	UVsDebug:	[
			8105347050356548, 6663772268431673 , R147, R152,
		],
	WorkerPool:	[
			3246011286632014, 783692235551946 , R147, R152,
		],


// jsm\webxr\*.js

	ARButton:	[
			8307713251987614, 1164723941635390 , R147, R152, NOT_CONFIRMED,
		],
	OculusHandModel:	[
			7336903788101115, 4820665227128967 , R147, R152, NOT_CONFIRMED,
		],
	OculusHandPointerModel:	[
			2743340387686345, 2055423246537440 , R147, R152, NOT_CONFIRMED,
		],
	Text2D:	[
			3805893496892771, 3505818620765703 , R147, R152, NOT_CONFIRMED,
		],
	VRButton:	[
			3639654738784569, 991810163511646 , R147, R148, NOT_CONFIRMED,
			5220146417186769, 6058092661732667 , R149, R152, NOT_CONFIRMED,
		],
	XRButton: [
			4166716993008855, 4137854364303225 , R152, NOT_CONFIRMED,
		],
	XRControllerModelFactory:	[
			8062276701282514, 753178303472884 , R147, R152, NOT_CONFIRMED,
		],
	XREstimatedLight:	[
			4449085036796168, 898097676899629 , R147, R152, NOT_CONFIRMED,
		],
	XRHandMeshModel:	[
			441184717897252, 7801530398093108 , R147, R152, NOT_CONFIRMED,
		],
	XRHandModelFactory:	[
			1611190162569754, 2664303828079253 , R147, R152, NOT_CONFIRMED,
		],
	XRHandPrimitiveModel:	[
			1188717343203177, 4964027065307799 , R147, R152, NOT_CONFIRMED,
		],
};



function uncompress( )
{
	// hash_data -> hashes
	
	var files = Object.keys( hash_data );

	for( var i=0; i<files.length; i++)
	{
		var name = files[i],
			data = hash_data[ name ];
			
		name += '.js';
    
		for( var j=0; j<data.length; )
		{
			var hashIn = data[j++];
			var hashOut = data[j++];
			
			
			var releaseFrom = '';
			var releaseTo = '';

			if( j<data.length && data[j] instanceof Release )
			{
				releaseFrom = data[j++].name;
				while( j<data.length && data[j] instanceof Release )
				{
					releaseTo = data[j++].name;
				}
			}
			
			
			var warning = '';
			if( j<data.length && typeof data[j] == 'string' )
			{
				warning = data[j++];
			}
			
			var row = {name:name, hashIn:hashIn, hashOut:hashOut, };
			if( releaseTo == '' )
				row.signature = releaseFrom;
			else
				row.signature = releaseFrom+'~'+releaseTo;
			
			if( warning != '' )
				row.warning = warning;
			
//			console.log( row );
			hashes.push( row );
		}
	}
}

// 	{ name: 'WebGL.js',					hashIn: 1806524370189791, hashOut: 4290716052244725, signature: 'r147~r151', warning: NOT_CONFIRMED },

uncompress( );
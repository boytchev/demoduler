
const NOT_THREE_JS = 'not a Three.js file <span class="bull-ignore">&nbsp;</span>';
const NOT_CONFIRMED = ' ( ! ) <span class="bull-warning">&nbsp;</span>';

var hashes = [
	

// jsm\animation\*.js

	{ name: 'AnimationClipCreator.js',	hashIn: 1226843274980437, hashOut: 7116389223769906, signature: 'r147-r148' },
	{ name: 'CCDIKSolver.js',			hashIn: 6987903500913477, hashOut: 1432833081281724, signature: 'r147-r148' },
	{ name: 'MMDAnimationHelper.js',	hashIn: 4051486523834537, hashOut: 7711676366751655, signature: 'r147-r148' },
	{ name: 'MMDPhysics.js',			hashIn: 3517359931114889, hashOut: 7499978108447581, signature: 'r147-r148' },


// jsm\cameras\*.js
	{ name: 'CinematicCamera.js',		hashIn: 8657467710839774, hashOut: 5730324717484419, signature: 'r147-r148' },
	

// jsm\capabilities\*.js

	{ name: 'WebGL.js',					hashIn: 1806524370189791, hashOut: 4870279779579904, signature: 'r147-r148', warning: NOT_CONFIRMED },
	{ name: 'WebGPU.js',				hashIn: 7382216207052479, hashOut: 1598428415000864, signature: 'r147-r148', warning: NOT_CONFIRMED },


// jsm\controls\*.js

 	{ name: 'ArcballControls.js',		hashIn: 5224525621429883, hashOut: 6689598522756220, signature: 'r147-r148' },
 	{ name: 'DragControls.js',			hashIn: 68330822021333,   hashOut: 8465009894812906, signature: 'r147-r148' },
 	{ name: 'FirstPersonControls.js',	hashIn: 3881222951926969, hashOut: 8794825488562693, signature: 'r147-r148' },
 	{ name: 'FlyControls.js', 			hashIn: 5733191412332319, hashOut: 6216594149040715, signature: 'r147-r148' },
 	{ name: 'OrbitControls.js', 		hashIn: 3461413604478402, hashOut: 3508093428857771, signature: 'r147-r148' },
 	{ name: 'PointerLockControls.js',	hashIn: 7234374874125097, hashOut: 534253466008181,  signature: 'r147-r148' },
 	{ name: 'TrackballControls.js',		hashIn: 5995901654950252, hashOut: 6267983764043843, signature: 'r147-r148' },
	{ name: 'TransformControls.js', 	hashIn: 2496079475009952, hashOut: 6657645048355341, signature: 'r147' },
	{ name: 'TransformControls.js',		hashIn: 2867994341181097, hashOut: 7365048463741066, signature: 'r148' },


// jsm\csm\*.js

	{ name: 'CSM.js',					hashIn: 6434818151254405, hashOut: 2753891380550471, signature: 'r147-r148' },
	{ name: 'CSMFrustum.js',			hashIn: 1426916298755981, hashOut: 812024260606097,  signature: 'r147-r148' },
	{ name: 'CSMShader.js',				hashIn: 2623585483244840, hashOut: 3839493011915698, signature: 'r147' },
	{ name: 'CSMShader.js',				hashIn: 6808812247645686, hashOut: 2407777480630806, signature: 'r148' },
	{ name: 'CSMHelper.js',				hashIn: 95514300219672,   hashOut: 6615675358907333, signature: 'r147-r148' },


// jsm\curves\*.js

	{ name: 'NURBSCurve.js',			hashIn: 1481469610032845, hashOut: 1594058175648828, signature: 'r147' },
	{ name: 'CurveExtras.js',			hashIn: 8174127866409531, hashOut: 7013266783512900, signature: 'r147' },
	{ name: 'NURBSSurface.js',			hashIn: 5935856335412392, hashOut: 7490315855827020, signature: 'r147' },
	{ name: 'NURBSUtils.js',			hashIn: 1382614706821951, hashOut: 4725962503857902, signature: 'r147' },


// jsm\effects\*.js

	{ name: 'AnaglyphEffect.js',		hashIn: 8494041100070890, hashOut: 6806847312914103, signature: 'r147' },
	{ name: 'AsciiEffect.js',			hashIn: 2409110624323613, hashOut: 7688735697818189, signature: 'r147' },
	{ name: 'OutlineEffect.js',			hashIn: 174470279120084,  hashOut: 666433738717835,  signature: 'r147' },
	{ name: 'ParallaxBarrierEffect.js',	hashIn: 4611171881184362, hashOut: 4712923974677065, signature: 'r147' },
	{ name: 'PeppersGhostEffect.js',	hashIn: 8449197647267113, hashOut: 2948822358444019, signature: 'r147' },
	{ name: 'StereoEffect.js',			hashIn: 5569155035758829, hashOut: 8246708936356330, signature: 'r147' },


// jsm\environments\*.js

	{ name: 'RoomEnvironment.js',		hashIn: 5802007185481666, hashOut: 2943116661036073, signature: 'r147' },
	{ name: 'DebugEnvironment.js',		hashIn: 6492595570066171, hashOut: 1502295319298227, signature: 'r147' },
	

// jsm\exporters\*.js

	{ name: 'ColladaExporter.js',		hashIn: 2040032360564170, hashOut: 5227371727001555, signature: 'r147' },
	{ name: 'DRACOExporter.js',			hashIn: 1917974346732773, hashOut: 391086298448543,  signature: 'r147' },
	{ name: 'EXRExporter.js',			hashIn: 2211521531772346, hashOut: 3532023270548790, signature: 'r147' },
	{ name: 'GLTFExporter.js',			hashIn: 7097485653378711, hashOut: 3363199132645821, signature: 'r147' },
	{ name: 'KTX2Exporter.js',			hashIn: 3368305390814835, hashOut: 3517880226381192, signature: 'r147' },
	{ name: 'MMDExporter.js',			hashIn: 346341606190126,  hashOut: 5311766141910379, signature: 'r147' },
	{ name: 'OBJExporter.js',			hashIn: 5196360952527578, hashOut: 373058448930680,  signature: 'r147' },
	{ name: 'PLYExporter.js',			hashIn: 2885756046710828, hashOut: 7029313742956203, signature: 'r147' },
	{ name: 'STLExporter.js',			hashIn: 1962334263618299, hashOut: 8791824661524967, signature: 'r147' },
	{ name: 'USDZExporter.js',			hashIn: 5081691085947601, hashOut: 8702964794222611, signature: 'r147' },


// jsm\geometries\*.js

 	{ name: 'BoxLineGeometry.js',		hashIn: 6715624084493554, hashOut: 8861167976725231, signature: 'r147' },
 	{ name: 'ConvexGeometry.js',		hashIn: 7147676395705516, hashOut: 3916208406701340, signature: 'r147' },
 	{ name: 'DecalGeometry.js',			hashIn: 1507980540546980, hashOut: 7888227951955648, signature: 'r147' },
	{ name: 'LightningStrike.js',		hashIn: 1191645353049985, hashOut: 2624903429688936, signature: 'r147' },
 	{ name: 'ParametricGeometries.js',	hashIn: 107533732253491,  hashOut: 815149824560642,  signature: 'r147' },
 	{ name: 'ParametricGeometry.js',	hashIn: 8085017494352590, hashOut: 7874298973850542, signature: 'r147' },
 	{ name: 'RoundedBoxGeometry.js',	hashIn: 5502296987449710, hashOut: 7311095839334729, signature: 'r147' },
 	{ name: 'TeapotGeometry.js',		hashIn: 1270481738028427, hashOut: 8815500691832546, signature: 'r147' },
 	{ name: 'TextGeometry.js',			hashIn: 2530618317268137, hashOut: 6961183132809707, signature: 'r147' },


// jsm\helpers\*.js

	{ name: 'LightProbeHelper.js',		hashIn: 6400788453127014, hashOut: 3600597602235927, signature: 'r147' },
	{ name: 'OctreeHelper.js',			hashIn: 4835047289618362, hashOut: 3352396781641842, signature: 'r147' },
	{ name: 'PositionalAudioHelper.js',	hashIn: 4485771109068509, hashOut: 3792633801047678, signature: 'r147' },
	{ name: 'RectAreaLightHelper.js',	hashIn: 2323756755171944, hashOut: 7093708729301997, signature: 'r147' },
	{ name: 'VertexNormalsHelper.js',	hashIn: 5070185591957948, hashOut: 674242172204673,  signature: 'r147' },
	{ name: 'VertexTangentsHelper.js',	hashIn: 662534324265405,  hashOut: 205872472201194,  signature: 'r147' },
	{ name: 'ViewHelper.js',			hashIn: 4660377876647747, hashOut: 4639934960027406, signature: 'r147' },


// jsm\interactive\*.js

	{ name: 'HTMLMesh.js',				hashIn: 1878649372860153, hashOut: 3192597895142587, signature: 'r147' },
	{ name: 'InteractiveGroup.js',		hashIn: 1211502322032098, hashOut: 8467776172842284, signature: 'r147' },
	{ name: 'SelectionBox.js',			hashIn: 7064250896203132, hashOut: 7488209743941230, signature: 'r147' },
	{ name: 'SelectionHelper.js',		hashIn: 2604057417266652, hashOut: 1236952692415177, signature: 'r147' },


// jsm\libs\*.js
	{ name: 'chevrotain.module.min.js',	hashIn: 8610778070704401, hashOut: 2181733518121743, signature: '', warning: NOT_THREE_JS },
	{ name: 'ecsy.module.js',			hashIn: 2143193075671949, hashOut: 2855799025138990, signature: '', warning: NOT_THREE_JS },
	{ name: 'fflate.module.js',			hashIn: 2873969778761120, hashOut: 6223503074093484, signature: '', warning: NOT_THREE_JS },
	{ name: 'flow.module.js',			hashIn: 8962083420513474, hashOut: 1894893191019385, signature: '', warning: NOT_THREE_JS },
	{ name: 'ktx-parse.module.js',		hashIn: 8668226453980035, hashOut: 7271678376224768, signature: '', warning: NOT_THREE_JS },
	{ name: 'lil-gui.module.min.js',	hashIn: 7214462785814887, hashOut: 7054343677832408, signature: '', warning: NOT_THREE_JS },
	{ name: 'lottie_canvas.module.js',	hashIn: 2245927073147872, hashOut: 5153989288124340, signature: '', warning: NOT_THREE_JS },
	{ name: 'meshopt_decoder.module.js',hashIn: 801166090116187,  hashOut: 2448267990077663, signature: '', warning: NOT_THREE_JS },
	{ name: 'mikktspace.module.js',		hashIn: 8719419322244607, hashOut: 616149660818570,  signature: '', warning: NOT_THREE_JS },
	{ name: 'mmdparser.module.js',		hashIn: 8202443895328062, hashOut: 3622136400949581, signature: '', warning: NOT_THREE_JS },
	{ name: 'motion-controllers.module.js',hashIn: 5709579865562258,hashOut: 5681181871857957,signature: '', warning: NOT_THREE_JS },
	{ name: 'opentype.module.js',		hashIn: 848534191210722,  hashOut: 560837276447764,  signature: '', warning: NOT_THREE_JS },
	{ name: 'potpack.module.js',		hashIn: 1283655972451878, hashOut: 5200029942189273, signature: '', warning: NOT_THREE_JS },
	{ name: 'stats.module.js',			hashIn: 4205307359432763, hashOut: 717116555038742,  signature: '', warning: NOT_THREE_JS },
	{ name: 'tween.module.min.js',		hashIn: 561090084058616,  hashOut: 3540154676240152, signature: '', warning: NOT_THREE_JS },
	{ name: 'utif.module.js',			hashIn: 5715595447783189, hashOut: 2329173948366792, signature: '', warning: NOT_THREE_JS },
	{ name: 'zstddec.module.js',		hashIn: 6877927829665610, hashOut: 6419293948366379, signature: '', warning: NOT_THREE_JS },
// jsm\libs\OimoPhysics\*.js
	{ name: 'index.js',					hashIn: 4429172777201225, hashOut: 1217336635563562, signature: '', warning: NOT_THREE_JS },
	{ name: 'OimoPhysics.js',			hashIn: 338989220735410,  hashOut: 3916132481343801, signature: '', warning: NOT_THREE_JS },
// jsm\libs\rhino3dm\*.js
	{ name: 'rhino3dm.module.js',		hashIn: 5477667109273140, hashOut: 1733520317928640, signature: '', warning: NOT_THREE_JS },

// jsm\lights\*.js

	{ name: 'LightProbeGenerator.js',		hashIn: 6177039655558016, hashOut: 698274494607814, signature: 'r147' },
	{ name: 'RectAreaLightUniformsLib.js',	hashIn: 7797007073339547, hashOut: 620191334569173, signature: 'r147' },


// jsm\lines\*.js

	{ name: 'Line2.js',					hashIn: 3135289954063428, hashOut: 7765501135355907, signature: 'r147' },
	{ name: 'LineGeometry.js',			hashIn: 8600814032145600, hashOut: 7773308748004646, signature: 'r147' },
	{ name: 'LineMaterial.js',			hashIn: 1491028438321448, hashOut: 4088370860958898, signature: 'r147' },
	{ name: 'LineSegments2.js',			hashIn: 3749850439058021, hashOut: 1346872539046023, signature: 'r147' },
	{ name: 'WireframeGeometry2.js',	hashIn: 1847977233267918, hashOut: 4489740044747535, signature: 'r147' },
	{ name: 'LineSegmentsGeometry.js',	hashIn: 2449821987236612, hashOut: 3575789517828356, signature: 'r147' },
	{ name: 'Wireframe.js',				hashIn: 6605080101837332, hashOut: 4515273103577048, signature: 'r147' },


// jsm\loaders\*.js
 	{ name: '3DMLoader.js',				hashIn: 985397630770524,  hashOut: 941102389810339,  signature: 'r147' },
 	{ name: '3MFLoader.js',				hashIn: 1614454356478586, hashOut: 7807398297238918, signature: 'r147' },
 	{ name: 'AMFLoader.js',				hashIn: 8591404426020785, hashOut: 72357308031188,   signature: 'r147' },
 	{ name: 'BVHLoader.js',				hashIn: 3703503551115264, hashOut: 3079569560819572, signature: 'r147' },
 	{ name: 'BasisTextureLoader.js',	hashIn: 5918785881493078, hashOut: 1809785238072726, signature: 'r147' },
 	{ name: 'ColladaLoader.js',			hashIn: 5521032082652047, hashOut: 2329134453935869, signature: 'r147' },
 	{ name: 'DDSLoader.js',				hashIn: 1842847107263814, hashOut: 8514036890283198, signature: 'r147' },
 	{ name: 'DRACOLoader.js',			hashIn: 5176611380117225, hashOut: 3325218987558685, signature: 'r147' },
 	{ name: 'EXRLoader.js',				hashIn: 4151380879470427, hashOut: 6250149702201060, signature: 'r147' },
 	{ name: 'FBXLoader.js',				hashIn: 561481140767537,  hashOut: 1576272260588620, signature: 'r147' },
 	{ name: 'FontLoader.js',			hashIn: 4772390691205073, hashOut: 7405204033567376, signature: 'r147' },
 	{ name: 'GCodeLoader.js',			hashIn: 6895845443187997, hashOut: 1972034445838697, signature: 'r147' },
 	{ name: 'GLTFLoader.js',			hashIn: 7612331930241984, hashOut: 7072942037027231, signature: 'r147' },
 	{ name: 'HDRCubeTextureLoader.js',	hashIn: 7805781237823912, hashOut: 4231031161080693, signature: 'r147' },
 	{ name: 'IFCLoader.js',				hashIn: 8358358394655750, hashOut: 3271092516851721, signature: 'r147' },
 	{ name: 'KMZLoader.js',				hashIn: 2084211947861808, hashOut: 2261888104295646, signature: 'r147' },
 	{ name: 'KTX2Loader.js',			hashIn: 799691039851878,  hashOut: 3990891608967407, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'KTXLoader.js',				hashIn: 263438741191973,  hashOut: 7574132455449631, signature: 'r147' },
 	{ name: 'LDrawLoader.js',			hashIn: 4404633801468125, hashOut: 7286058058932818, signature: 'r147' },
 	{ name: 'LUT3dlLoader.js',			hashIn: 4248108453745573, hashOut: 372962538737651,  signature: 'r147' },
 	{ name: 'LUTCubeLoader.js',			hashIn: 6853322971310589, hashOut: 2632651733553323, signature: 'r147' },
 	{ name: 'LWOLoader.js',				hashIn: 1727556100386125, hashOut: 5259212402301010, signature: 'r147' },
 	{ name: 'LogLuvLoader.js',			hashIn: 7667019988018542, hashOut: 8390392656884706, signature: 'r147' },
 	{ name: 'LottieLoader.js',			hashIn: 268525378638103,  hashOut: 6462582376925120, signature: 'r147' },
 	{ name: 'MD2Loader.js',				hashIn: 6627229281615931, hashOut: 5600921949207869, signature: 'r147' },
 	{ name: 'MDDLoader.js',				hashIn: 5081020771383909, hashOut: 5170736741190117, signature: 'r147' },
 	{ name: 'MMDLoader.js',				hashIn: 4383285479766598, hashOut: 5267511197866556, signature: 'r147' },
 	{ name: 'MTLLoader.js',				hashIn: 4195166263994081, hashOut: 4951816203125526, signature: 'r147' },
 	{ name: 'MaterialXLoader.js',		hashIn: 2589487512906114, hashOut: 5991910953175831, signature: 'r147' },
 	{ name: 'NRRDLoader.js',			hashIn: 5338428868198690, hashOut: 6633643662599103, signature: 'r147' },
 	{ name: 'OBJLoader.js',				hashIn: 8539320613750621, hashOut: 8607005329758113, signature: 'r147' },
 	{ name: 'PCDLoader.js',				hashIn: 174577900587893,  hashOut: 90758871773622,   signature: 'r147' },
 	{ name: 'PDBLoader.js',				hashIn: 1942390824571940, hashOut: 4426568255037448, signature: 'r147' },
 	{ name: 'PLYLoader.js',				hashIn: 6321820453703505, hashOut: 2743104829861464, signature: 'r147' },
 	{ name: 'PRWMLoader.js',			hashIn: 1676435722552577, hashOut: 2234547836370822, signature: 'r147' },
 	{ name: 'PVRLoader.js',				hashIn: 4742186827557016, hashOut: 6783905259006905, signature: 'r147' },
 	{ name: 'RGBELoader.js',			hashIn: 8774373481774371, hashOut: 2713451528555688, signature: 'r147' },
 	{ name: 'RGBMLoader.js',			hashIn: 3327906731718763, hashOut: 4787902181355767, signature: 'r147' },
 	{ name: 'STLLoader.js',				hashIn: 6207484324625078, hashOut: 8361981785006721, signature: 'r147' },
 	{ name: 'SVGLoader.js',				hashIn: 2167699369704942, hashOut: 1863109955040964, signature: 'r147' },
 	{ name: 'TDSLoader.js',				hashIn: 5324737644850882, hashOut: 8557847669562224, signature: 'r147' },
 	{ name: 'TGALoader.js',				hashIn: 8353641252569428, hashOut: 1541610114347383, signature: 'r147' },
 	{ name: 'TIFFLoader.js',			hashIn: 970894889256765,  hashOut: 3296249949909854, signature: 'r147' },
 	{ name: 'TTFLoader.js',				hashIn: 3095059602065207, hashOut: 99085047078076,   signature: 'r147' },
 	{ name: 'TiltLoader.js',			hashIn: 8451212746147442, hashOut: 1717678540383378, signature: 'r147' },
 	{ name: 'USDZLoader.js',			hashIn: 4464726926800400, hashOut: 5357057847310502, signature: 'r147' },
 	{ name: 'VOXLoader.js',				hashIn: 2702156927078460, hashOut: 627638577338378,  signature: 'r147' },
 	{ name: 'VRMLLoader.js',			hashIn: 4690350257828032, hashOut: 7794991638269273, signature: 'r147' },
 	{ name: 'VTKLoader.js',				hashIn: 6102122003933343, hashOut: 701582992248102,  signature: 'r147' },
 	{ name: 'XYZLoader.js',				hashIn: 2615578234448851, hashOut: 7752910996023513, signature: 'r147' },
// jsm\loaders\lwo\*.js
	{ name: 'LWO3Parser.js',			hashIn: 2233868388697166, hashOut: 606396101170167,  signature: 'r147' },
	{ name: 'IFFParser.js',				hashIn: 2890081654480287, hashOut: 40983122673736,   signature: 'r147' },
	{ name: 'LWO2Parser.js',			hashIn: 1796443683206867, hashOut: 2780350827774177, signature: 'r147' },
// jsm\loaders\ifc\*.js
	{ name: 'web-ifc-api.js',			hashIn: 1494675225369448, hashOut: 8661637107957611, signature: 'r147', warning: NOT_CONFIRMED },


// jsm\materials\*.js
	{ name: 'MeshGouraudMaterial.js',	hashIn: 2670340595270464, hashOut: 6746845651059425, signature: 'r147' },


// jsm\math\*.js

	{ name: 'OBB.js',					hashIn: 2135207588843929, hashOut: 6624993466955481, signature: 'r147' },
	{ name: 'Capsule.js',				hashIn: 4997626879274240, hashOut: 8413714414397691, signature: 'r147' },
	{ name: 'ColorConverter.js',		hashIn: 5844967795436179, hashOut: 3187359492214079, signature: 'r147' },
	{ name: 'ConvexHull.js',			hashIn: 8974035973211290, hashOut: 3052918960303382, signature: 'r147' },
	{ name: 'ImprovedNoise.js',			hashIn: 4254330716041642, hashOut: 1175196362348590, signature: 'r147' },
	{ name: 'Lut.js',					hashIn: 5890901043033984, hashOut: 5091633800361764, signature: 'r147' },
	{ name: 'MeshSurfaceSampler.js',	hashIn: 3546265222360370, hashOut: 1593821863726880, signature: 'r147' },
	{ name: 'Octree.js',				hashIn: 6053182518677834, hashOut: 7302867661003629, signature: 'r147' },
	{ name: 'SimplexNoise.js',			hashIn: 313130152119344,  hashOut: 3168858546443066, signature: 'r147' },


// jsm\misc\*.js

	{ name: 'ConvexObjectBreaker.js',	hashIn: 2987161165189093, hashOut: 7009488046621534, signature: 'r147' },
	{ name: 'GPUComputationRenderer.js',hashIn: 1894481260558729, hashOut: 377894397519675,  signature: 'r147' },
	{ name: 'Gyroscope.js',				hashIn: 3063251394555570, hashOut: 5760639262413468, signature: 'r147' },
	{ name: 'MD2Character.js',			hashIn: 6623186545850287, hashOut: 6634136292271183, signature: 'r147' },
	{ name: 'MD2CharacterComplex.js',	hashIn: 7509488030443826, hashOut: 2159455090720704, signature: 'r147' },
	{ name: 'MorphAnimMesh.js',			hashIn: 371275972047758,  hashOut: 4390419688620672, signature: 'r147' },
	{ name: 'MorphBlendMesh.js',		hashIn: 2645368413028812, hashOut: 1977338054594739, signature: 'r147' },
	{ name: 'ProgressiveLightMap.js',	hashIn: 4662929733634732, hashOut: 81272709478695,   signature: 'r147' },
	{ name: 'RollerCoaster.js',			hashIn: 4968034576584817, hashOut: 6698144221527486, signature: 'r147' },
	{ name: 'TubePainter.js',			hashIn: 4706751632377804, hashOut: 7332834514313893, signature: 'r147' },
	{ name: 'Volume.js',				hashIn: 4185603872654050, hashOut: 7373291575608959, signature: 'r147' },
	{ name: 'VolumeSlice.js',			hashIn: 5921125576207369, hashOut: 2864729225536748, signature: 'r147' },


// jsm\modifiers\*.js

	{ name: 'CurveModifier.js',			hashIn: 2161126201929561, hashOut: 2232249837049942, signature: 'r147' },
	{ name: 'EdgeSplitModifier.js',		hashIn: 4661968250764111, hashOut: 2525991716015486, signature: 'r147' },
	{ name: 'SimplifyModifier.js',		hashIn: 8325670109126825, hashOut: 7089325051573543, signature: 'r147' },
	{ name: 'TessellateModifier.js',	hashIn: 8441784596459318, hashOut: 1151084173615225, signature: 'r147' },
	
	
// jsm\node-editor\*.js

	{ name: 'AngleEditor.js',			hashIn: 7103042719526831, hashOut: 2648621351455328, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BaseNode.js',				hashIn: 4696210223607859, hashOut: 6986499246183130, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BasicMaterialEditor.js',	hashIn: 468567294668750,  hashOut: 8701627047776784, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BlendEditor.js',			hashIn: 985517102603003,  hashOut: 1609903978843049, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CheckerEditor.js',			hashIn: 3024729574522539, hashOut: 7763214454883906, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ColorEditor.js',			hashIn: 7145537340890478, hashOut: 4486461929688680, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'DataFile.js',				hashIn: 2077767642808545, hashOut: 8788504260217521, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'DotEditor.js',				hashIn: 1367113573024168, hashOut: 8093023032787717, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FileEditor.js',			hashIn: 5742270388155860, hashOut: 6327428751632264, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FileURLEditor.js',			hashIn: 932005385267466,  hashOut: 8795826954268334, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FloatEditor.js',			hashIn: 1725718387012867, hashOut: 3710900384988531, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'InvertEditor.js',			hashIn: 2226139934222310, hashOut: 5777460077577603, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'JoinEditor.js',			hashIn: 4954158062034340, hashOut: 3554914767187268, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LimiterEditor.js',			hashIn: 3842865318405121, hashOut: 4446706146405665, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MatcapUVEditor.js',		hashIn: 660325595579377,  hashOut: 5672368538554476, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MeshEditor.js',			hashIn: 5378855441743591, hashOut: 3742233525249708, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeEditor.js',			hashIn: 1444796095874123, hashOut: 1658026916634471, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalEditor.js',			hashIn: 475152709346262,  hashOut: 3521916181129061, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalMapEditor.js',		hashIn: 6148939952210289, hashOut: 1436103787050961, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalizeEditor.js',		hashIn: 3408227873320708, hashOut: 5506965056897427, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Object3DEditor.js',		hashIn: 4164205520538156, hashOut: 4788566936713453, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OperatorEditor.js',		hashIn: 686985015210577,  hashOut: 5204439375479894, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OscillatorEditor.js',		hashIn: 8503482133814040, hashOut: 7097307166903253, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PointsEditor.js',			hashIn: 2137657412265819, hashOut: 6202726717056428, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PointsMaterialEditor.js',	hashIn: 3765830111885167, hashOut: 5733170420314888, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PositionEditor.js',		hashIn: 1149847810990391, hashOut: 5666227552024079, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PowerEditor.js',			hashIn: 5564897189213694, hashOut: 2879629968390496, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PreviewEditor.js',			hashIn: 4730143078278435, hashOut: 685847901383335,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SliderEditor.js',			hashIn: 5403269129578312, hashOut: 5309041856348877, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SplitEditor.js',			hashIn: 3195733930952767, hashOut: 235893935799661,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'StandardMaterialEditor.js',hashIn: 486669368941575,  hashOut: 2285905273724121, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TextureEditor.js',			hashIn: 2600379447117599, hashOut: 6795947952040273, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TimerEditor.js',			hashIn: 765498612922649,  hashOut: 2761193396438746, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TrigonometryEditor.js',	hashIn: 5754107985597034, hashOut: 8850809840793077, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'UVEditor.js',				hashIn: 5005885370621501, hashOut: 4229172361836172, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Vector2Editor.js',			hashIn: 3513055448970024, hashOut: 5565911179672624, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Vector3Editor.js',			hashIn: 3442536313023315, hashOut: 1753596741334741, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Vector4Editor.js',			hashIn: 2494326139638469, hashOut: 2141125090827580, signature: 'r147', warning: NOT_CONFIRMED },


// jsm\nodes\*.js

	{ name: 'AONode.js',				hashIn: 1428261846415909, hashOut: 7842123931733132, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'AnalyticLightNode.js',		hashIn: 8853826026754983, hashOut: 6029076322388652, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ArrayElementNode.js',		hashIn: 151517071030299,  hashOut: 7306808084081052, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ArrayUniformNode.js',		hashIn: 4271434437372202, hashOut: 3409071693571188, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'AttributeNode.js',			hashIn: 2875674653398771, hashOut: 1076722355744925, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BRDF_GGX.js',				hashIn: 3067212415344788, hashOut: 4356382309971393, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BRDF_Lambert.js',			hashIn: 7218619997592786, hashOut: 5469518645344774, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BitangentNode.js',			hashIn: 4478064407642248, hashOut: 3232212521887289, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BlendModeNode.js',			hashIn: 4268371694686236, hashOut: 2566188678727937, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BufferNode.js',			hashIn: 8657926454501624, hashOut: 2858140719485246, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'BypassNode.js',			hashIn: 205161900825960,  hashOut: 6144337904164034, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CameraNode.js',			hashIn: 4675226800587361, hashOut: 4431682129723693, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CheckerNode.js',			hashIn: 4508494365689757, hashOut: 7859284399028803, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CodeNode.js',				hashIn: 4014169988643956, hashOut: 5027027662772454, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ColorAdjustmentNode.js',	hashIn: 6986943287482690, hashOut: 7494613873351170, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ColorSpaceNode.js',		hashIn: 4148152951523050, hashOut: 2137219624543002, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ComputeNode.js',			hashIn: 1054784988531654, hashOut: 8828297487024682, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CondNode.js',				hashIn: 4747466710930709, hashOut: 1100953787429468, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ConstNode.js',				hashIn: 4114800523612154, hashOut: 2035423480036742, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ContextNode.js',			hashIn: 1240346436129892, hashOut: 6020962973848601, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ConvertNode.js',			hashIn: 7332660443613330, hashOut: 5829247055634575, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'CubeTextureNode.js',		hashIn: 4105038834861426, hashOut: 15087508244271,   signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'DFGApprox.js',				hashIn: 5223718001073784, hashOut: 8196328693426442, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'D_GGX.js',					hashIn: 4371787720755138, hashOut: 1570696404407824, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'EnvironmentNode.js',		hashIn: 4997902556795400, hashOut: 3362584092463132, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'EquirectUVNode.js',		hashIn: 5100097419253401, hashOut: 5769016980727085, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ExpressionNode.js',		hashIn: 4993036877621130, hashOut: 1591103426930732, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'F_Schlick.js',				hashIn: 754685430247297,  hashOut: 5223368022786147, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FogNode.js',				hashIn: 1949545219141071, hashOut: 7922131694259603, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FogRangeNode.js',			hashIn: 7314524163268548, hashOut: 5769009627605018, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FrontFacingNode.js',		hashIn: 1705351267893703, hashOut: 5029925192862135, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FunctionCallNode.js',		hashIn: 5079249912911592, hashOut: 4354300493057510, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'FunctionNode.js',			hashIn: 250070119451863,  hashOut: 1945188657859021, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'GLSLNodeFunction.js',		hashIn: 6982558975747232, hashOut: 8736268425388895, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'GLSLNodeParser.js',		hashIn: 5583752251510215, hashOut: 5796922617707855, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'HemisphereLightNode.js',	hashIn: 8140502267106289, hashOut: 8867147705962144, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'InputNode.js',				hashIn: 4745662524942874, hashOut: 4147233113639292, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'InstanceIndexNode.js',		hashIn: 8790427031006074, hashOut: 4010417358821788, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'InstanceNode.js',			hashIn: 25142085207799,   hashOut: 2214537604178594, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'JoinNode.js',				hashIn: 2141976976878696, hashOut: 7278839648883682, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LightingContextNode.js',	hashIn: 2799802348666513, hashOut: 8686092702719341, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LightingNode.js',			hashIn: 1116855223595862, hashOut: 2654289122696685, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LightsNode.js',			hashIn: 1068998306406529, hashOut: 4226266656600182, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'LineBasicNodeMaterial.js',	hashIn: 915052349798962,  hashOut: 6311373494985749, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MatcapUVNode.js',			hashIn: 4941972844409322, hashOut: 1967195873572031, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MaterialNode.js',			hashIn: 3452944660931535, hashOut: 808990057617771,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MaterialReferenceNode.js',	hashIn: 660178799287067,  hashOut: 7410976640608589, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MaterialXNodes.js',		hashIn: 8125210337175823, hashOut: 3393806440350942, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Materials.js',				hashIn: 4711876339385991, hashOut: 5787978937654885, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MathNode.js',				hashIn: 1146322599696457, hashOut: 7238916784332356, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MaxMipLevelNode.js',		hashIn: 602439603219396,  hashOut: 7487567057147352, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MeshBasicNodeMaterial.js',	hashIn: 191474633408006,  hashOut: 8217816762648550, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MeshPhysicalNodeMaterial.js',hashIn: 53564693443152, hashOut: 4845338058017795, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'MeshStandardNodeMaterial.js',hashIn: 4097615313711052,hashOut:3521578537148603, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ModelNode.js',				hashIn: 6266252382709979, hashOut: 1441469531921708, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ModelViewProjectionNode.js',hashIn: 3959737172233400,hashOut: 3480449166025710, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Node.js',					hashIn: 6244524141875284, hashOut: 7401309900544046, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeAttribute.js',			hashIn: 4787554578847778, hashOut: 8626697121657356, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeBuilder.js',			hashIn: 7196143292553381, hashOut: 8358771313796043, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeCode.js',				hashIn: 1016992313207737, hashOut: 5264932645951578, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeFrame.js',				hashIn: 8967708589533208, hashOut: 5374867160817562, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeFunction.js',			hashIn: 4872268463155198, hashOut: 416098331944628,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeFunctionInput.js',		hashIn: 2826682585646658, hashOut: 2819013870710274, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeKeywords.js',			hashIn: 6186253221635348, hashOut: 5793114366797968, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeLoader.js',			hashIn: 2918269744395290, hashOut: 5174762759628540, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterial.js',			hashIn: 5534438469452974, hashOut: 4066509539282089, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeMaterialLoader.js',	hashIn: 3521758013197878, hashOut: 8417149944261608, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeObjectLoader.js',		hashIn: 927652164438870,  hashOut: 5634226416554342, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeParser.js',			hashIn: 2789411952290145, hashOut: 8862580306305440, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeUniform.js',			hashIn: 938892601707905,  hashOut: 5427672079767190, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeUtils.js',				hashIn: 5148966146741746, hashOut: 3702546121657602, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeVar.js',				hashIn: 6755529505393788, hashOut: 1079867761671783, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NodeVarying.js',			hashIn: 8270580599641779, hashOut: 4017682403208878, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Nodes.js',					hashIn: 3739034354562765, hashOut: 7169626053645541, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalMapNode.js',			hashIn: 2324830254906597, hashOut: 4533440960453897, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'NormalNode.js',			hashIn: 5520115395422454, hashOut: 631083841203684,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Object3DNode.js',			hashIn: 238552438689512,  hashOut: 785081659689592,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OperatorNode.js',			hashIn: 4060169501724292, hashOut: 3926624096432563, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OscNode.js',				hashIn: 3856586745182517, hashOut: 4911250897609781, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PhysicalLightingModel.js',	hashIn: 6038683283243869, hashOut: 607582228036142,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PointUVNode.js',			hashIn: 6528536225258988, hashOut: 1458924638319744, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PointsNodeMaterial.js',	hashIn: 5690698238683948, hashOut: 3911994845399845, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PositionNode.js',			hashIn: 386678160075834,  hashOut: 5203056045575330, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PosterizeNode.js',			hashIn: 4530133854420088, hashOut: 8029222875034814, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PropertyNode.js',			hashIn: 5321941455446123, hashOut: 7411807060417251, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'PunctualLightNode.js',		hashIn: 1306255561420557, hashOut: 2205984001222080, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'RangeNode.js',				hashIn: 71056648543846,   hashOut: 3441766802738973, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ReferenceNode.js',			hashIn: 8634383008211599, hashOut: 309316503950894,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ReflectVectorNode.js',		hashIn: 6180018898058907, hashOut: 2220640046015764, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'RemapNode.js',				hashIn: 3807366216421104, hashOut: 5814776922264659, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'RotateUVNode.js',			hashIn: 2367528223223485, hashOut: 8803948510227874, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNode.js',			hashIn: 8786764725414910, hashOut: 2154255004114870, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeBaseElements.js',hashIn: 3579918506930427, hashOut: 5950739681631407, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ShaderNodeElements.js',	hashIn: 2023750765430871, hashOut: 5280875851785970, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SkinningNode.js',			hashIn: 3030483146409240, hashOut: 8230532971868100, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SplitNode.js',				hashIn: 8360039447636289, hashOut: 2262337765780415, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SpriteNodeMaterial.js',	hashIn: 2846465361364088, hashOut: 8986231702347070, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'SpriteSheetUVNode.js',		hashIn: 2878205285409150, hashOut: 3626511114446557, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'StorageBufferNode.js',		hashIn: 4788076833532350, hashOut: 7913595561113979, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TangentNode.js',			hashIn: 6757437416015567, hashOut: 8560494318496465, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TempNode.js',				hashIn: 7854831728001326, hashOut: 5144925849559364, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TextureNode.js',			hashIn: 4374528483563140, hashOut: 6328848551739719, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TimerNode.js',				hashIn: 4655543445248130, hashOut: 4461524694641568, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ToneMappingNode.js',		hashIn: 1866434321729206, hashOut: 7778926978289221, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'TriplanarTexturesNode.js',	hashIn: 5646109207943854, hashOut: 663895142766239,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'UVNode.js',				hashIn: 6428767211569947, hashOut: 3788330289398857, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'UniformNode.js',			hashIn: 5563840458832001, hashOut: 4932879523089,    signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'UserDataNode.js',			hashIn: 1836814027368517, hashOut: 1529593921503969, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'V_GGX_SmithCorrelated.js',	hashIn: 4401754165615415, hashOut: 6165427921132954, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'VarNode.js',				hashIn: 3119767482048547, hashOut: 3394777877432474, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'VaryingNode.js',			hashIn: 569838008193615,  hashOut: 6698198983293883, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'ViewportNode.js',			hashIn: 6801193502744891, hashOut: 5330860697272399, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WGSLNodeFunction.js',		hashIn: 6349557700415329, hashOut: 5611711425243928, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WGSLNodeParser.js',		hashIn: 6864835405735064, hashOut: 5073078957435533, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'getDistanceAttenuation.js',hashIn: 4670384299842605, hashOut: 8493468981731055, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'getGeometryRoughness.js',	hashIn: 2403794302506185, hashOut: 2175418755754332, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'getRoughness.js',			hashIn: 2344767431956718, hashOut: 1837070749453847, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'mx_hsv.js',				hashIn: 8612247265397573, hashOut: 8159827998343377, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'mx_noise.js',				hashIn: 7545102876068827, hashOut: 281974909777804,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'mx_transform_color.js',	hashIn: 6937448922803299, hashOut: 7325456897904952, signature: 'r147', warning: NOT_CONFIRMED },


// jsm\objects\*.js

	{ name: 'GroundProjectedEnv.js',	hashIn: 3209647647024930, hashOut: 243069015256079,  signature: 'r147' },
	{ name: 'Lensflare.js',				hashIn: 933464714826082,  hashOut: 6954238707737649, signature: 'r147' },
	{ name: 'LightningStorm.js',		hashIn: 6616917369283776, hashOut: 864874431866378,  signature: 'r147' },
	{ name: 'Reflector.js',				hashIn: 4871058277040602, hashOut: 888175106352713,  signature: 'r147' },
	{ name: 'MarchingCubes.js',			hashIn: 4667258537036907, hashOut: 5532718995014579, signature: 'r147' },
	{ name: 'ReflectorForSSRPass.js',	hashIn: 6977488871853286, hashOut: 2771238122644462, signature: 'r147' },
	{ name: 'Refractor.js',				hashIn: 3935440023460978, hashOut: 7033534258479891, signature: 'r147' },
	{ name: 'ShadowMesh.js',			hashIn: 68183448930033,   hashOut: 8611885472979811, signature: 'r147' },
	{ name: 'Sky.js',					hashIn: 249847175026169,  hashOut: 2558137094218159, signature: 'r147' },
	{ name: 'Water.js',					hashIn: 1067915028797984, hashOut: 712711564490518,  signature: 'r147' },
	{ name: 'Water2.js',				hashIn: 2120526706889228, hashOut: 8732319691887990, signature: 'r147' },


// jsm\offscreen\*.js

	{ name: 'jank.js',					hashIn: 4774812515654055, hashOut: 7697562307433248, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'offscreen.js',				hashIn: 662043014197242,  hashOut: 7690537328017043, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'scene.js',					hashIn: 3216947742627446, hashOut: 8090888971754530, signature: 'r147', warning: NOT_CONFIRMED },


// jsm\physics\*.js

	{ name: 'AmmoPhysics.js',			hashIn: 7517264819391925, hashOut: 6615522549059090, signature: 'r147' },
 	{ name: 'OimoPhysics.js',			hashIn: 2613689718091502, hashOut: 3002843339918750, signature: 'r147' },


// jsm\postprocessing\*.js
	{ name: 'AdaptiveToneMappingPass.js',hashIn: 2364970081330801,hashOut: 5599991563324348, signature: 'r147' },
	{ name: 'AfterimagePass.js',		hashIn: 7653725564678955, hashOut: 3352420493560622, signature: 'r147' },
	{ name: 'BloomPass.js',				hashIn: 5134099620091276, hashOut: 5323953240874273, signature: 'r147' },
	{ name: 'BokehPass.js',				hashIn: 7407330994318264, hashOut: 3911492235336931, signature: 'r147' },
	{ name: 'ClearPass.js',				hashIn: 3179283397434010, hashOut: 3406065309805403, signature: 'r147' },
	{ name: 'CubeTexturePass.js',		hashIn: 4846912716183097, hashOut: 8666533997924014, signature: 'r147' },
	{ name: 'DotScreenPass.js',			hashIn: 6061038516236221, hashOut: 565630309179435,  signature: 'r147' },
	{ name: 'EffectComposer.js',		hashIn: 6447861811187505, hashOut: 5905050568889170, signature: 'r147' },
	{ name: 'FilmPass.js',				hashIn: 5578919757601172, hashOut: 2121330939589775, signature: 'r147' },
	{ name: 'GlitchPass.js',			hashIn: 8312595776594738, hashOut: 6257538433351437, signature: 'r147' },
	{ name: 'HalftonePass.js',			hashIn: 7629117879539993, hashOut: 7083245433838368, signature: 'r147' },
	{ name: 'LUTPass.js',				hashIn: 3243928235390895, hashOut: 6181074452900292, signature: 'r147' },
	{ name: 'MaskPass.js',				hashIn: 1333654107434139, hashOut: 8267734874329596, signature: 'r147' },
	{ name: 'OutlinePass.js',			hashIn: 4708797621364561, hashOut: 3198139561429586, signature: 'r147' },
	{ name: 'Pass.js',					hashIn: 3154920630396720, hashOut: 4064811221804372, signature: 'r147' },
	{ name: 'RenderPass.js',			hashIn: 8210427678242849, hashOut: 1731156248757721, signature: 'r147' },
	{ name: 'RenderPixelatedPass.js',	hashIn: 7188498385698559, hashOut: 8265344145956456, signature: 'r147' },
	{ name: 'SAOPass.js',				hashIn: 1158702175465290, hashOut: 6130409662300277, signature: 'r147' },
	{ name: 'SMAAPass.js',				hashIn: 152998597593694,  hashOut: 8589778776161150, signature: 'r147' },
	{ name: 'SSAARenderPass.js',		hashIn: 5570188049648057, hashOut: 4819531753089386, signature: 'r147' },
	{ name: 'SSAOPass.js',				hashIn: 3689986794206844, hashOut: 984689668651417,  signature: 'r147' },
	{ name: 'SSRPass.js',				hashIn: 2809967475621701, hashOut: 6900833753991918, signature: 'r147' },
	{ name: 'SavePass.js',				hashIn: 791685695598490,  hashOut: 3681879478760896, signature: 'r147' },
	{ name: 'ShaderPass.js',			hashIn: 2914158575483121, hashOut: 5879691536794496, signature: 'r147' },
	{ name: 'TAARenderPass.js',			hashIn: 6546205943478792, hashOut: 7385786089780327, signature: 'r147' },
	{ name: 'TexturePass.js',			hashIn: 2002512202019259, hashOut: 878485824922162,  signature: 'r147' },
	{ name: 'UnrealBloomPass.js',		hashIn: 622222350514699,  hashOut: 2810488985597342, signature: 'r147' },


// jsm\renderers\*.js
	{ name: 'CSS2DRenderer.js',			hashIn: 5761697393480706, hashOut: 2343738057319828, signature: 'r147' },
	{ name: 'CSS3DRenderer.js',			hashIn: 5213607906990352, hashOut: 7366260962428179, signature: 'r147' },
	{ name: 'Projector.js',				hashIn: 4874510425331828, hashOut: 3421560008749342, signature: 'r147' },
	{ name: 'SVGRenderer.js',			hashIn: 8409222279450335, hashOut: 1540426567003354, signature: 'r147' },
// jsm\renderers\webgl\nodes\*.js
	{ name: 'SlotNode.js',				hashIn: 6246269276999764, hashOut: 5574910273872138, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodeBuilder.js',		hashIn: 7603786283542514, hashOut: 3811833020584754, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGLNodes.js',			hashIn: 6102206417239882, hashOut: 6792703053183744, signature: 'r147', warning: NOT_CONFIRMED },	
// jsm\renderers\webgpu\*.js
 	{ name: 'WebGPUAnimation.js',		hashIn: 4396707476536727, hashOut: 6059007472941729, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUAttributes.js',		hashIn: 8260799714901852, hashOut: 7180654057736436, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBackground.js',		hashIn: 8602578334808291, hashOut: 5457405022729735, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBinding.js',			hashIn: 1052849230428151, hashOut: 1520991417530505, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBindings.js',		hashIn: 6390769329634040, hashOut: 8071769768594988, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBuffer.js',			hashIn: 1128114772154585, hashOut: 3442582429346934, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUBufferUtils.js',		hashIn: 5582104232779032, hashOut: 5968375678232184, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUComputePipelines.js',hashIn: 304143103404491,  hashOut: 8427786889418933, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUGeometries.js',		hashIn: 703305899898364,  hashOut: 1678255175788060, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUInfo.js',			hashIn: 135504537623419,  hashOut: 1501893377929083, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUObjects.js',			hashIn: 920700533351342,  hashOut: 779440371716419,  signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUProgrammableStage.js',hashIn: 842663305465827, hashOut: 7510340213511128, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUProperties.js',		hashIn: 6920639407860960, hashOut: 8210134604702535, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderLists.js',		hashIn: 2600605215882859, hashOut: 227123805837987,  signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderPipeline.js',	hashIn: 8886684872891921, hashOut: 7259276178378050, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderPipelines.js',	hashIn: 6071989857243972, hashOut: 4718692502288010, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderStates.js',	hashIn: 4238935362379250, hashOut: 1232561016529127, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPURenderer.js',		hashIn: 3105965882093147, hashOut: 8236578075007431, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUSampledTexture.js',	hashIn: 1044834228631084, hashOut: 2161359546613042, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUSampler.js',			hashIn: 4379276160546224, hashOut: 7374028534699927, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUStorageBuffer.js',	hashIn: 8879012140483729, hashOut: 837092752893438,  signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextureRenderer.js',	hashIn: 3644421805341548, hashOut: 2829278118382515, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextureUtils.js',	hashIn: 6209481707381743, hashOut: 7601542675599434, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUTextures.js',		hashIn: 4993903402759818, hashOut: 4417885382540306, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniform.js',			hashIn: 7573108404564106, hashOut: 5074264400380264, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniformBuffer.js',	hashIn: 2678477547380328, hashOut: 5101516112642716, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUniformsGroup.js',	hashIn: 7548286641043798, hashOut: 8027541965283301, signature: 'r147', warning: NOT_CONFIRMED },
 	{ name: 'WebGPUUtils.js',			hashIn: 401528447373683,  hashOut: 4462071849638358, signature: 'r147', warning: NOT_CONFIRMED },
// jsm\renderers\webgpu\nodes\*.js
	{ name: 'WebGPUNodeBuilder.js',		hashIn: 5630792256502948, hashOut: 6044084589054602, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeSampledTexture.js',hashIn:4182530203320379,hashOut: 7869343793535983, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeSampler.js',		hashIn: 2952521742598095, hashOut: 4855234977267165, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodeUniform.js',		hashIn: 1197191436633885, hashOut: 3333588586681962, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'WebGPUNodes.js',			hashIn: 8910817616796492, hashOut: 814458688602712,  signature: 'r147', warning: NOT_CONFIRMED },


// jsm\shaders\*.js

	{ name: 'ACESFilmicToneMappingShader.js',hashIn:5258378719643215,hashOut:3317902934456707,signature:'r147' },
	{ name: 'AfterimageShader.js',		hashIn: 1853522238344266, hashOut: 1036581519118649, signature: 'r147' },
	
	{ name: 'BasicShader.js',			hashIn: 6171277070307398, hashOut: 2002560184745876, signature: 'r147' },
	{ name: 'BleachBypassShader.js',	hashIn: 8695360369077117, hashOut: 7029425841183617, signature: 'r147' },
	{ name: 'BlendShader.js',			hashIn: 7843294192220771, hashOut: 3342083449252165, signature: 'r147' },
	{ name: 'BokehShader.js',			hashIn: 4703011871283499, hashOut: 157836022820183,  signature: 'r147' },
	{ name: 'BokehShader2.js',			hashIn: 1977334425116581, hashOut: 5396667625338936, signature: 'r147' },
	{ name: 'BrightnessContrastShader.js',hashIn:3967265984788799,hashOut: 2358526049380075, signature: 'r147' },
	
	{ name: 'ColorCorrectionShader.js',	hashIn: 5055259411793326, hashOut: 6590322515405828, signature: 'r147' },
	{ name: 'ColorifyShader.js',		hashIn: 153489079315625,  hashOut: 6382597169065982, signature: 'r147' },
	{ name: 'ConvolutionShader.js',		hashIn: 5974258379535476, hashOut: 485908628382688,  signature: 'r147' },
	{ name: 'CopyShader.js',			hashIn: 8069323330935930, hashOut: 4010972446276340, signature: 'r147' },
	
	{ name: 'DOFMipMapShader.js',		hashIn: 3059587087095805, hashOut: 4680435379908302, signature: 'r147' },
	{ name: 'DepthLimitedBlurShader.js',hashIn: 2570419379241619, hashOut: 1916946377194660, signature: 'r147' },
	{ name: 'DigitalGlitch.js',			hashIn: 3240701949089782, hashOut: 8603348631761156, signature: 'r147' },
	{ name: 'DotScreenShader.js',		hashIn: 1820637089993678, hashOut: 7389813360795599, signature: 'r147' },
	
	{ name: 'FXAAShader.js',			hashIn: 5277748508273219, hashOut: 6901070472968357, signature: 'r147' },
	{ name: 'FilmShader.js',			hashIn: 4904460898327878, hashOut: 6768407777951243, signature: 'r147' },
	{ name: 'FocusShader.js',			hashIn: 6213423017407100, hashOut: 8483935674792700, signature: 'r147' },
	{ name: 'FreiChenShader.js',		hashIn: 5070010603073323, hashOut: 6356390143480617, signature: 'r147' },
	
	{ name: 'GammaCorrectionShader.js',	hashIn: 3454969009186858, hashOut: 582113574246248,  signature: 'r147' },
	{ name: 'GodRaysShader.js',			hashIn: 2401867666235434, hashOut: 2798896236447159, signature: 'r147' },
	
	{ name: 'HalftoneShader.js',		hashIn: 47155110157681,   hashOut: 3378201717609767, signature: 'r147' },
	{ name: 'HorizontalBlurShader.js',	hashIn: 6234880670881553, hashOut: 2201917459687553, signature: 'r147' },
	{ name: 'HorizontalTiltShiftShader.js',	hashIn: 10538750070480,hashOut: 211777929111573, signature: 'r147' },
	{ name: 'HueSaturationShader.js',	hashIn: 8518298462313437, hashOut: 7353575343397985, signature: 'r147' },
	
	{ name: 'KaleidoShader.js',			hashIn: 6128008827164570, hashOut: 7555178727106116, signature: 'r147' },
	
	{ name: 'LuminosityHighPassShader.js', hashIn: 2780705295520947,hashOut: 62593864058149, signature: 'r147' },
	{ name: 'LuminosityShader.js',		hashIn: 6278979903195307, hashOut: 422580035089278,  signature: 'r147' },
	
	{ name: 'MMDToonShader.js',			hashIn: 5729257508387137, hashOut: 8714249088752168, signature: 'r147' },
	{ name: 'MirrorShader.js',			hashIn: 6935752437031718, hashOut: 7631280483356669, signature: 'r147' },
	
	{ name: 'NormalMapShader.js',		hashIn: 6623486650005275, hashOut: 3023837186198741, signature: 'r147' },
	
	{ name: 'RGBShiftShader.js',		hashIn: 6488934629672525, hashOut: 6446501902115415, signature: 'r147' },
	
	{ name: 'SAOShader.js',				hashIn: 4509662881104571, hashOut: 7341093554953721, signature: 'r147' },
	{ name: 'SMAAShader.js',			hashIn: 7171081707607249, hashOut: 160761357699808,  signature: 'r147' },
	{ name: 'SSAOShader.js',			hashIn: 4514944621678800, hashOut: 4052665314780446, signature: 'r147' },
	{ name: 'SSRShader.js',				hashIn: 5908592751262896, hashOut: 3796192715054877, signature: 'r147' },
	{ name: 'SepiaShader.js',			hashIn: 1415710288835149, hashOut: 8754947513932719, signature: 'r147' },
	{ name: 'SobelOperatorShader.js',	hashIn: 2456630343939578, hashOut: 2842948134168369, signature: 'r147' },
	{ name: 'SubsurfaceScatteringShader.js',hashIn:8491180681271036,hashOut:7841578875331788,signature: 'r147' },
	
	{ name: 'TechnicolorShader.js',		hashIn: 6427976170541877, hashOut: 8936986527657645, signature: 'r147' },
	{ name: 'ToneMapShader.js',			hashIn: 122960329870117,  hashOut: 2388173745438001, signature: 'r147' },
	{ name: 'ToonShader.js',			hashIn: 7501434952691393, hashOut: 3763820921640163, signature: 'r147' },
	{ name: 'TriangleBlurShader.js',	hashIn: 277835109696312,  hashOut: 4216337555715115, signature: 'r147' },
	
	{ name: 'UnpackDepthRGBAShader.js',	hashIn: 983825312039527,  hashOut: 159295952492590,  signature: 'r147' },
	
	{ name: 'VelocityShader.js',		hashIn: 1068095141001080, hashOut: 4287112586084650, signature: 'r147' },
	{ name: 'VerticalBlurShader.js',	hashIn: 7743851693116371, hashOut: 5200615354655531, signature: 'r147' },
	{ name: 'VerticalTiltShiftShader.js',hashIn: 1033330917334101,hashOut: 1811377788722827, signature: 'r147' },
	{ name: 'VignetteShader.js',		hashIn: 2792448367336573, hashOut: 3400156942148079, signature: 'r147' },
	{ name: 'VolumeShader.js',			hashIn: 6320047063890666, hashOut: 4529607936444149, signature: 'r147' },
	
	{ name: 'WaterRefractionShader.js',	hashIn: 7273399850368277, hashOut: 4215338308211416, signature: 'r147' },


// jsm\textures\*.js

	{ name: 'FlakesTexture.js',			hashIn: 4582515071681576, hashOut: 8402823063941429, signature: 'r147' },


// jsm\utils\*.js

	{ name: 'BufferGeometryUtils.js',	hashIn: 7014196652191254, hashOut: 6412407108164034, signature: 'r147' },
	{ name: 'CameraUtils.js',			hashIn: 362012460112664,  hashOut: 1667508449377211, signature: 'r147' },
	{ name: 'GPUStatsPanel.js',			hashIn: 7849635543326202, hashOut: 8518362217355809, signature: 'r147' },
	{ name: 'GeometryCompressionUtils.js',hashIn:2952293075389709,hashOut: 8338267574310261, signature: 'r147' },
	{ name: 'GeometryUtils.js',			hashIn: 3028883636171673, hashOut: 4360446744906453, signature: 'r147' },
	{ name: 'LDrawUtils.js',			hashIn: 4678907742689053, hashOut: 1649942618301254, signature: 'r147' },
	{ name: 'PackedPhongMaterial.js',	hashIn: 6970196574512597, hashOut: 2826086413052148, signature: 'r147' },
	{ name: 'SceneUtils.js',			hashIn: 800211159559702,  hashOut: 7243966955611208, signature: 'r147' },
	{ name: 'ShadowMapViewer.js',		hashIn: 6590898882115409, hashOut: 5424733363202046, signature: 'r147' },
	{ name: 'SkeletonUtils.js',			hashIn: 3534120956770652, hashOut: 297335428320915,  signature: 'r147' },
	{ name: 'UVsDebug.js',				hashIn: 8105347050356548, hashOut: 6663772268431673, signature: 'r147' },
	{ name: 'WorkerPool.js',			hashIn: 3246011286632014, hashOut: 783692235551946,  signature: 'r147' },


// jsm\webxr\*.js

	{ name: 'ARButton.js',				hashIn: 8307713251987614, hashOut: 1164723941635390, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OculusHandModel.js',		hashIn: 7336903788101115, hashOut: 4820665227128967, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'OculusHandPointerModel.js',hashIn: 2743340387686345, hashOut: 2055423246537440, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'Text2D.js',				hashIn: 3805893496892771, hashOut: 3505818620765703, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'VRButton.js',				hashIn: 3639654738784569, hashOut: 991810163511646,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'XRControllerModelFactory.js',hashIn:8062276701282514,hashOut: 8260102107523725, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'XREstimatedLight.js',		hashIn: 4449085036796168, hashOut: 898097676899629,  signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'XRHandMeshModel.js',		hashIn: 441184717897252,  hashOut: 7801530398093108, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'XRHandModelFactory.js',	hashIn: 1611190162569754, hashOut: 2664303828079253, signature: 'r147', warning: NOT_CONFIRMED },
	{ name: 'XRHandPrimitiveModel.js',	hashIn: 1188717343203177, hashOut: 4964027065307799, signature: 'r147', warning: NOT_CONFIRMED },


];

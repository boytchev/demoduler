# THREE.JS DEMODULER

The [**Demoduler**](https://boytchev.github.io/demoduler/) is a simple tool that
converts Three.js JavaScript modules from the `examples\jsm` folder into ordinary
old-fashioned JavaScript scripts from the `examples\js` folder. Three.js r147
will be the last release that has both JSM and JS examples. In some very specific
circumstances Three.js users may still need JS files and Demoduler might be
able to create them. Hopefully.


### Deoduled files

This list contains the files from r147 that are demoduled correctly. As it is a
work in progress, more files are being added.

- **`examples\jsm\animation`**:<br>
	AnimationClipCreator.js, CCDIKSolver.js, MMDAnimationHelper.js, MMDPhysics.js
- **`examples\jsm\cameras`**:<br>
	CinematicCamera.js
- **`examples\jsm\controls`**:<br>
	ArcballControls.js, DragControls.js, FirstPersonControls.js, FlyControls.js,
	OrbitControls.js, PointerLockControls.js, TrackballControls.js, TransformControls.js
- **`examples\jsm\controls`**:<br>
	CSM.js, CSMFrustum.js, CSMHelper.js, CSMShader.js
- **`examples\jsm\effects`**:<br>
	AnaglyphEffect.js, AsciiEffect.js, OutlineEffect.js, ParallaxBarrierEffect.js,
	PeppersGhostEffect.js, StereoEffect.js
- **`examples\jsm\environments`**:<br>
	DebugEnvironment.js, RoomEnvironment.js
- **`examples\jsm\exporters`**:<br>
	ColladaExporter.js, DRACOExporter.js, EXRExporter.js, GLTFExporter.js, KTX2Exporter.js
	MMDExporter.js, OBJExporter.js, PLYExporter.js, STLExporter.js, USDZExporter.js
- **`examples\jsm\geometries`**:<br>
	BoxLineGeometry.js, ConvexGeometry.js, DecalGeometry.js, LightningStrike.js ,
	ParametricGeometries.js, ParametricGeometry.js, RoundedBoxGeometry.js,
	TeapotGeometry.js, TextGeometry.js
- **`examples\jsm\helpers`**:<br>
	LightProbeHelper.js, OctreeHelper.js, PositionalAudioHelper.js, RectAreaLightHelper.js,
	VertexNormalsHelper.js, VertexTangentsHelper.js, ViewHelper.js
- **`examples\jsm\interactive`**:<br>
	HTMLMesh.js, InteractiveGroup.js, SelectionBox.js, SelectionHelper.js
- **`examples\jsm\lights`**:<br>
	LightProbeGenerator.js, RectAreaLightUniformsLib.js
- **`examples\jsm\lines`**:<br>
	Line2.js, LineGeometry.js, LineMaterial.js, LineSegments2.js, LineSegmentsGeometry.js,
	Wireframe.js, WireframeGeometry2.js
- **`examples\jsm\materials`**:<br>
	MeshGouraudMaterial.js
- **`examples\jsm\modifiers`**:<br>
	CurveModifier.js, EdgeSplitModifier.js, SimplifyModifier.js, TessellateModifier.js
- **`examples\jsm\objects`**:<br>
	GroundProjectedEnv.js, Lensflare.js, LightningStorm.js, MarchingCubes.js, 
	Reflector.js, ReflectorForSSRPass.js, Refractor.js, ShadowMesh.js, Sky.js,
	Water.js, Water2.js
- **`examples\jsm\postprocessing`**:<br>
	AdaptiveToneMappingPass.js, AfterimagePass.js, BloomPass.js, BokehPass.js, ClearPass.js,
	CubeTexturePass.js, DotScreenPass.js, EffectComposer.js, FilmPass.js, GlitchPass.js,
	HalftonePass.js, LUTPass.js, MaskPass.js, OutlinePass.js, Pass.js, RenderPass.js,
	RenderPixelatedPass.js, SAOPass.js, SavePass.js, ShaderPass.js, SMAAPass.js,
	SSAARenderPass.js, SSAOPass.js, SSRPass.js, TAARenderPass.js, TexturePass.js,
	UnrealBloomPass.js
- **`examples\jsm\shaders`**:<br>
	ACESFilmicToneMappingShader.js, AfterimageShader.js, BasicShader.js, BleachBypassShader.js, BlendShader.js, BokehShader.js, BokehShader2.js, BrightnessContrastShader.js, ColorCorrectionShader.js, ColorifyShader.js, ConvolutionShader.js, CopyShader.js, DepthLimitedBlurShader.js, DigitalGlitch.js, DOFMipMapShader.js, DotScreenShader.js, FilmShader.js, FocusShader.js, FreiChenShader.js, FXAAShader.js, ammaCorrectionShader.js, GodRaysShader.js, GHalftoneShader.js, HorizontalBlurShader.js, HorizontalTiltShiftShader.js, HueSaturationShader.js, KaleidoShader.js, LuminosityHighPassShader.js, LuminosityShader.js, MirrorShader.js, MMDToonShader.js, NormalMapShader.js, RGBShiftShader.js, SAOShader.js, SepiaShader.js, SMAAShader.js, SobelOperatorShader.js, SSAOShader.js, SSRShader.js, SubsurfaceScatteringShader.js, TechnicolorShader.js, ToneMapShader.js, ToonShader.js, TriangleBlurShader.js, UnpackDepthRGBAShader.js, VelocityShader.js, VerticalBlurShader.js, VerticalTiltShiftShader.js, VignetteShader.js, VolumeShader.js, WaterRefractionShader.js
- **`examples\jsm\textures`**:<br>
	FlakesTexture.js
- **`examples\jsm\utils`**:<br>
	BufferGeometryUtils.js, CameraUtils.js, GeometryCompressionUtils.js, GeometryUtils.js, GPUStatsPanel.js, LDrawUtils.js, PackedPhongMaterial.js, SceneUtils.js, ShadowMapViewer.js, SkeletonUtils.js, UVsDebug.js, WorkerPool.js





### Metodology

The development and usage of Demoduler is in four phases. Currently the first
two phases run in parrallel (35% complete, 171 of 493 files).

- **Learning phase**:<br>Files from `examples\jsm` and `examples\js` are carefully
studied in order to extract the simplest transformation from `jsm` to `js`. This
relies on the consistency of Three.js's source code and hopes it will not change
drastically in the future.
- **Testing phase**: Files from `examples\jsm` are converted, minimized, reformatted
and compared against minimized-and-reformatted version from `examples\js`. They
are carefully compared to verify transformation correctness: files are either
identical, or the differences are acceptible (e.g. modules often have extra
parentheses).
- **Using phase**: Demoduler is used to convert modules from future Three.js
releases.
- **Dying phase**: R.I.P.


### Notable restrictions

Conversion is done by plain text transformation without any sophisticated source
code parsing and analysis. Conversion is focused only on Three.js modules starting
from the ones that we used most often. Conversion does not process cross-module
dependencies (imports and exports). Depending on our spare time, at some point
in the future we might improve Demoduler into a general tool for demoduling.


#### `import` statements

Thankfully, Three.js r147 uses only a limited set of import statments, instead
of the full [zoo of imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
Demoduler processes only this limited set:

```js
import * as name1 from "module-name";
import name1 from "module-name";
import { name1, name2, ... } from "module-name";
```

#### `export` statements

Three.js r147 uses quite a lot types of [export patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export):
Currently Demoduler processes only one of them:
```js
export { name1, name2, ... };
export class name1 ...
export function name1 ...
```

<!--
```js
export { name1, name2, ... };
export class name { ...
export class name1 extends name2 { ...
export function name ( ...
export { name as default };
export let name = ...
export const name = ...
export default name;
export * from 'module-name';
export { name } from 'module-name';
export { default as name } from 'module-name';
```
-->



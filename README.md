# demoduler

The **demoduler** will be a simple tool that converts JavaScript modules into
old-fashioned moduleless JavaScript files. The primary purpose is to convert
some of the Three.js files that will soon be provided only as modules.

### Notable restrictions

- Conversion will be done without any semantic parsing.
- Conversion will not work for any module, it will work for the Three.js modules
which I am interested in, and as a side effect, it may work for some other
Three.js modules.
- Conversion will not scan folders and other files to resolve cross-module
references.
- Conversion will not work into the local filesystem. At least for now.

When I gain enough knowledge, I will try to make a better demoduler ... by that
time, I might not it at all.

### Modules and non-modules
Three.js r147 will be the last one providing modular and non-modular versions of
examples. In r147 they are in folders `examples\jsm` and `examples\js`.

| examples\jsm | file | status |
| --- | --- | --- |
| **animation** | | |
| **cameras** | | |
| **controls** | | |
| **csm** | | |
| **curves** | | |
| **effects** | | |
| **environments** | | |
| **exporters** | | |
|| ColladaExporter.js ||
|| DRACOExporter.js ||
|| EXRExporter.js ||
|| GLTFExporter.js ||
|| KTX2Exporter.js | no JS version |
|| MMDExporter.js ||
|| OBJExporter.js ||
|| PLYExporter.js ||
|| STLExporter.js ||
|| USDZExporter.js ||
| **geometries** | | |
|| BoxLineGeometry.js ||
|| ConvexGeometry.js ||
|| DecalGeometry.js ||
|| LightningStrike.js ||
|| ParametricGeometries.js ||
|| ParametricGeometry.js ||
|| RoundedBoxGeometry.js ||
|| TeapotGeometry.js ||
|| TextGeometry.js ||
| **helpers** | | |
| **interactive** | | |
| **libs** | | |
| **lights** | | |
| **lines** | | |
| **loaders** | | |
| **materials** | | |
| **math** | | |
| **misc** | | |
| **modifiers** | | |
| **objects** | | |
| **physics** | | |
| **postprocessing** | | |
| **renderers** | | |
| **shaders** | | |
| **textures** | | |
| **utils** | | |




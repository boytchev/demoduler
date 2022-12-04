# THIS IS UNDER CONSTRUCTION
### Do not use it, yet. Don't!


When finished, the **demoduler** will be a simple tool that converts Three.js
JavaScript modules from the `examples\jsm` folder into JavaScript scripts from
the `examples\js` folder. Three.js r147 will be the last release that has both
JSM and JS examples. In some very specific circumstances Three.js users may
still need JS files. The **demoduler**  could create them. Hopefully.

### Notable restrictions

- Conversion will be done by plain text replacement, there will be no any
sophisticated parsing.
- Conversion will not work for any module out there. It will work for those
Three.js modules, that I use. It is expected, that other Three.js modules may
also be demoduled by the demoduler.
- Conversion will not process cross-modules dependencies (imports and exports),
as my goal is to make the simplest tool that helps me, instead of the most
general tool. However, depending on my spare time, at some point in the future
I might improve the demoduler into something better and more useer-friendly.

### Go to the <a href="https://boytchev.github.io/demoduler/">demoduler</a>


<!--
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


-->

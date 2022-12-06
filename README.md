# THIS IS UNDER CONSTRUCTION
### Do not use <a href="https://boytchev.github.io/demoduler/">Demoduler</a>, yet. Don't!


When finished, the **demoduler** will be a simple tool that converts Three.js
JavaScript modules from the `examples\jsm` folder into JavaScript scripts from
the `examples\js` folder. Three.js r147 will be the last release that has both
JSM and JS examples. In some very specific circumstances Three.js users may
still need JS files. The **demoduler**  could create them. Hopefully.

### Metodology

Modules from `examples\jsm` and their corresponding scripts from `examples\js`
will be studied in order to find the simplest text transformation. Then:

- Demoduler gets a file from `examples\jsm` and demodules it
- The minified demodulized version is compared with the minified script from `examples\js`
- If they match, we are happy and we expect that this module in future releases
of Three.js will still be demoduled correctly


### Notable restrictions

- Conversion will be done by plain text replacement, there will be no any
sophisticated parsing.
- Conversion will not work for any module out there. It will work for those
Three.js modules, that we use. It is expected, that other Three.js modules may
also be demoduled by the demoduler.
- Conversion will not process cross-modules dependencies (imports and exports),
as our goal is to make the simplest tool that helps us, instead of the most
general tool. However, depending on our spare time, at some point in the future
we might improve the demoduler into something better and more useer-friendly.

### Parsing `import` statements

Thankfully, Three.js r147 uses only a limited set of import statments, instead
of the full [zoo of imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
Demoduler processes only this limited set.

```js
import * as name1 from "module-name";
import name1 from "module-name";
import { name1, name2 } from "module-name";
```

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


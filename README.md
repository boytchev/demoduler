# THIS IS UNDER CONSTRUCTION
### Do not use <a href="https://boytchev.github.io/demoduler/">Demoduler</a>, yet. Don't!


When finished, the **demoduler** will be a simple tool that converts Three.js
JavaScript modules from the `examples\jsm` folder into JavaScript scripts from
the `examples\js` folder. Three.js r147 will be the last release that has both
JSM and JS examples. In some very specific circumstances Three.js users may
still need JS files. The **demoduler**  could create them. Hopefully.

### Metodology

The (author of) demoduler will learn how to convert modules to non-modules by
comparing corresponding files from `examples\jsm` and `examples\js` in r147.

Files from `examples\jsm` in future releases will be converted based on this
knowledge. The demoduler relies on the consistency of Three.js's source code
and hopes it will not change drastically in the future.


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
Demoduler processes only this limited set:

```js
import * as name1 from "module-name";
import name1 from "module-name";
import { name1, name2, ... } from "module-name";
```

### Parsing `export` statements

Three.js r147 uses quite a lot types of [export patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export):

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

Demoduler processes only this:
```js
export { name1, name2, ... };
```


| FILE R147 | STATUS R147 |
| :--- | :--- |
| **examples\jsm\controls** | *pending* |
| ArcballControls.js		| *pending* |
| DragControls.js			| OK |
| FirstPersonControls.js	| OK |
| FlyControls.js			| *pending* |
| OrbitControls.js			| *pending* |
| PointerLockControls.js	| OK |
| TrackballControls.js		| *pending* |
| TransformControls.js		| *pending* |
| **examples\jsm\geometries** | **OK** |
| BoxLineGeometry.js 		| OK |
| ConvexGeometry.js 		| OK - Error message not adjusted |
| DecalGeometry.js 			| OK |
| LightningStrike.js 		| OK |
| ParametricGeometries.js 	| OK |
| ParametricGeometry.js 	| OK |
| RoundedBoxGeometry.js 	| OK |
| TeapotGeometry.js 		| OK |
| TextGeometry.js 			| OK |


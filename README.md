# THREE.JS DEMODULER

**Demoduler** is an online tool that converts Three.js JavaScript modules from
folder `examples\jsm` into ordinary old-fashioned JavaScript files for the now
extinct folder `examples\js`. Three.js r147 is the last release that has
both JSM and JS examples.

It can also convert `build\three.module.js` into `three.js`.

In some cases seasonal Three.js users may still need JS files. **Demoduler**
might be able to recreate them.


## How to convert 

Conversion in done in three steps:

1. Open **Demoduler** from [**https://boytchev.github.io/demoduler/**](https://boytchev.github.io/demoduler/)
2. Drag-and-drop JavaScript files from Three.js's folder `examples\jsm`
3. When the files are converted, click on their names to download them.

That's all. 

The status of conversion of each file is indicated with a color dot:

| Status | Meaning | Description |
| --- | --- | --- |
| Green | Success | Most likely the conversion is successful. The file has been visually inspected in the past, and at that time it appeared to be consistent with the non-module version of the same file from release r147. |
| Yellow | Warning | Hopefully the conversion is successful. There is no corresponding file from release r147, so the conversion is done by applying conversion patterns from other files &ndash; i.e. the so-called *blind conversion*. |
| Red | Error | The file is not converted, because it contains code patterns that have never been used in release r147. |
| Gray | Ignore | The file is ignored and not converted, because it is not a JavaScript file, it is not a part from Three.js native files, or it does not follow the default Three.js style for modules. |

The indicator contains a short text, describing the result. If the text is `r???`, then the file is recognized as belonging to this specific Three.js release. If the text is `r???~r???`, then the file did not change in this interval of releases.


## Supported Three.js releases

Currently **Demoduler** is aware of example files from releases r147 to r153.
The following table lists the number of files and their conversion status.

| Conversion | r147  | r148  | r149  | r150  | r151  | r152  | r153  |
| ---------- | ----: | ----: | ----: | ----: | ----: | ----: | ----: |
| Success    | 254   | 253   | 252   | 251   | 256   | 252   | 248   |
| Warning    | 211   | 221   | 231   | 229   | 188   | 199   | 216   |
| Error      | 2     | 2     | 2     | 2     | 3     | 2     | 3     |
| Ignored    | 29    | 34    | 34    | 34    | 28    | 26    | 26    |
| **TOTAL**  |**496**|**510**|**519**|**516**|**475**|**479**|**493**|

The initial plan is to support future releases either till the end of 2023, or
until the difference from r147 becomes too big.



## Disclaimers, restrictions and usage

You may use Demoduler for free. Treat the generated files the way you treat all
other Three.js source files.

The conversion is done by plain text transformation without any sophisticated
source code analysis. There is no guarantee that the converted files work well.

We would be glad for any constructive or informative feedback, especially whether
the converted files worked in your situation.









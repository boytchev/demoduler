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

When I gain enough knowledge, I will try to make a better demoduler ... by that
time, I might not it at all.

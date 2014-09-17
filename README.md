pkguid
====

A module for parsing & creating package UIDs which supports CommonJS/AMD format

### Usage

```javascript
var pkguid = require("pkguid");

pkguid.parse("@namespace/name@1.0.0");
// returns { name: "@namespace/name", version: "1.0.0" }

pkguid.create("name", "1.0.0");
// returns "name@1.0.0"
```

View full documentation at https://docs.satellite.earth/

## Usage

``` js
const Parcel = require('@satellite-earth/parcel');

// Compress any value that can be represented as json
const parcel = new Parcel({ foo: 'bar' });
console.log(parcel.packed); // <Uint8Array>

// Uncompress data the same way
const parcel2 = new Parcel(compressed);
console.log(parcel.unpacked); // { foo: 'bar' }
```

**Constructor**

1. `Object|String|Number|Boolean|Uint8Array` - Uncompressed data to be compressed, or compressed data to be uncompressed.

## Properties

### ratio

``` js
parcel.ratio // 0.618
```

`Number` - ratio between compressed and uncompressed size

---

### bytes

``` js
parcel.bytes // 2514924
```

`Number` - Byte length of compressed data

---

``` js
parcel.packed // <Uint8Array>
```

`Uint8Array` - Gzipped data

---

### unpacked

``` js
parcel.unpacked // { foo: 'bar' }
```

`Object|String|Number|Boolean` - Parsed, uncompressed JSON 

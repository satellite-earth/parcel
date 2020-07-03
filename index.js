const pako = require('pako');

// Parcel is a container that gzips any data that can be
// represented as JSON. Such functionality is important
// for Satellite's State and Epoch classes since they
// both need to handle large, highly structured data,
// and for Client to conserve space in the browser cache.
class Parcel {

	constructor (input) {

		// If passed compressed data, store it directly. Memory is
		// conserved by storing the data in its minified/compressed
		// representation and rebuiding/decompressing it as needed.
		if (input instanceof Uint8Array || Buffer.isBuffer(input)) {
			this.packed = input;
		} else { // Otherwise, pack data first and then store it

			// Convert to raw data and gzip
			const json = JSON.stringify(input);
			const raw = Buffer.from(json, 'utf8');
			this.packed = pako.deflateRaw(raw);
		}
	}

	// Ungzip the compressed data and return object
	get unpacked () {
		const raw = pako.inflateRaw(this.packed);
		const json = Buffer.from(raw).toString('utf8');
		return JSON.parse(json);
	}

	// Size of compressed data
	get bytes () {
		return this.packed.length;
	}

	// Ratio of packed size to regular JSON 
	get ratio () {
		const uncompressed = JSON.stringify(this.unpacked);
		return (this.bytes / uncompressed.length);
	}
}

module.exports = Parcel;

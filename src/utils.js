function importAll(r) {
	const result = {}
	r.keys().forEach(key => (result[key] = r(key)))
	return result
}


export { importAll }

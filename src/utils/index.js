const fn = () => {
	console.log(123);
}
// 测试tree shaking，sideEffects
export const square = (v) => {
	return v * v
}

export const cube = (v) => {
	return v * v * v
}

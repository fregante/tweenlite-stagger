/* global TweenLite, TimelineLite*/
function proxyFn(fnName) {
	TweenLite[fnName] = function () {
		const tl = new TimelineLite();
		return tl[fnName].apply(tl, arguments);
	};
}
proxyFn('staggerFromTo');
proxyFn('staggerFrom');
proxyFn('staggerTo');

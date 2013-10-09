﻿/*
 * Raphael 1.4.7 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael = function () {
	function l() { if (l.is(arguments[0], U)) { for (var a = arguments[0], b = Ca[K](l, a.splice(0, 3 + l.is(a[0], P))), c = b.set(), d = 0, f = a[o]; d < f; d++) { var e = a[d] || {}; sb.test(e.type) && c[F](b[e.type]().attr(e)) } return c } return Ca[K](l, arguments) } l.version = "1.4.7"; var V = /[, ]+/, sb = /^(circle|rect|path|ellipse|text|image)$/, p = "prototype", z = "hasOwnProperty", C = document, aa = window, Qa = { was: Object[p][z].call(aa, "Raphael"), is: aa.Raphael }; function H() { } var x = "appendChild", K = "apply", M = "concat", Da = "createTouch" in C,
	A = "", N = " ", D = String, G = "split", Ra = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[G](N), Ea = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, R = "join", o = "length", fa = String[p].toLowerCase, v = Math, Y = v.max, ba = v.min, P = "number", ga = "string", U = "array", O = "toString", ca = "fill", tb = Object[p][O], E = v.pow, F = "push", ja = /^(?=[\da-f]$)/, Sa = /^url\(['"]?([^\)]+?)['"]?\)$/i, ub = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%)?)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
	Q = v.round, W = "setAttribute", y = parseFloat, ha = parseInt, Fa = " progid:DXImageTransform.Microsoft", sa = String[p].toUpperCase, ta = {
		blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", opacity: 1, path: "M0,0", r: 0, rotation: 0, rx: 0, ry: 0, scale: "1 1", src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt",
		"stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", translation: "0 0", width: 0, x: 0, y: 0
	}, Ga = { along: "along", blur: P, "clip-rect": "csv", cx: P, cy: P, fill: "colour", "fill-opacity": P, "font-size": P, height: P, opacity: P, path: "path", r: P, rotation: "csv", rx: P, ry: P, scale: "csv", stroke: "colour", "stroke-opacity": P, "stroke-width": P, translation: "csv", width: P, x: P, y: P }, I = "replace"; l.type = aa.SVGAngle || C.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
	"1.1") ? "SVG" : "VML"; if (l.type == "VML") { var da = C.createElement("div"); da.innerHTML = '<v:shape adj="1"/>'; da = da.firstChild; da.style.behavior = "url(#default#VML)"; if (!(da && typeof da.adj == "object")) return l.type = null; da = null } l.svg = !(l.vml = l.type == "VML"); H[p] = l[p]; l._id = 0; l._oid = 0; l.fn = {}; l.is = function (a, b) { b = fa.call(b); return b == "object" && a === Object(a) || b == "undefined" && typeof a == b || b == "null" && a == null || b == "array" && Array.isArray && Array.isArray(a) || fa.call(tb.call(a).slice(8, -1)) == b }; l.setWindow = function (a) {
		aa =
		a; C = aa.document
	}; function ua(a) {
		if (l.vml) { var b = /^\s+|\s+$/g; ua = Z(function (d) { var f; d = D(d)[I](b, A); try { var e = new aa.ActiveXObject("htmlfile"); e.write("<body>"); e.close(); f = e.body } catch (g) { f = aa.createPopup().document.body } e = f.createTextRange(); try { f.style.color = d; var h = e.queryCommandValue("ForeColor"); h = (h & 255) << 16 | h & 65280 | (h & 16711680) >>> 16; return "#" + ("000000" + h[O](16)).slice(-6) } catch (i) { return "none" } }) } else {
			var c = C.createElement("i"); c.title = "Rapha\u00ebl Colour Picker"; c.style.display = "none"; C.body[x](c);
			ua = Z(function (d) { c.style.color = d; return C.defaultView.getComputedStyle(c, A).getPropertyValue("color") })
		} return ua(a)
	} function Ta() { return "hsb(" + [this.h, this.s, this.b] + ")" } function vb() { return "hsl(" + [this.h, this.s, this.l] + ")" } function wb() { return this.hex } l.hsb2rgb = function (a, b, c) { if (l.is(a, "object") && "h" in a && "s" in a && "b" in a) { c = a.b; b = a.s; a = a.h } return l.hsl2rgb(a, b, c / 2) }; l.hsl2rgb = function (a, b, c) {
		if (l.is(a, "object") && "h" in a && "s" in a && "l" in a) { c = a.l; b = a.s; a = a.h } if (a > 1 || b > 1 || c > 1) {
			a /= 255; b /= 255; c /=
			255
		} var d = {}, f = ["r", "g", "b"], e; if (b) { b = c < 0.5 ? c * (1 + b) : c + b - c * b; c = 2 * c - b; for (var g = 0, h = f.length; g < h; g++) { e = a + 1 / 3 * -(g - 1); e < 0 && e++; e > 1 && e--; d[f[g]] = e * 6 < 1 ? c + (b - c) * 6 * e : e * 2 < 1 ? b : e * 3 < 2 ? c + (b - c) * (2 / 3 - e) * 6 : c } } else d = { r: c, g: c, b: c }; d.r *= 255; d.g *= 255; d.b *= 255; a = (~~d.r)[O](16); f = (~~d.g)[O](16); b = (~~d.b)[O](16); a = a[I](ja, "0"); f = f[I](ja, "0"); b = b[I](ja, "0"); d.hex = "#" + a + f + b; d.toString = wb; return d
	}; l.rgb2hsb = function (a, b, c) {
		if (b == null && l.is(a, "object") && "r" in a && "g" in a && "b" in a) { c = a.b; b = a.g; a = a.r } if (b == null && l.is(a, ga)) {
			var d =
			l.getRGB(a); a = d.r; b = d.g; c = d.b
		} if (a > 1 || b > 1 || c > 1) { a /= 255; b /= 255; c /= 255 } var f = Y(a, b, c), e = ba(a, b, c); d = f; if (e == f) return { h: 0, s: 0, b: f, toString: Ta }; else { var g = f - e; e = g / f; a = a == f ? (b - c) / g : b == f ? 2 + (c - a) / g : 4 + (a - b) / g; a /= 6; a < 0 && a++; a > 1 && a-- } return { h: a, s: e, b: d, toString: Ta }
	}; l.rgb2hsl = function (a, b, c) {
		if (b == null && l.is(a, "object") && "r" in a && "g" in a && "b" in a) { c = a.b; b = a.g; a = a.r } if (b == null && l.is(a, ga)) { var d = l.getRGB(a); a = d.r; b = d.g; c = d.b } if (a > 1 || b > 1 || c > 1) { a /= 255; b /= 255; c /= 255 } var f = Y(a, b, c), e = ba(a, b, c); d = (f + e) / 2; if (e == f) a =
		{ h: 0, s: 0, l: d }; else { var g = f - e; e = d < 0.5 ? g / (f + e) : g / (2 - f - e); a = a == f ? (b - c) / g : b == f ? 2 + (c - a) / g : 4 + (a - b) / g; a /= 6; a < 0 && a++; a > 1 && a--; a = { h: a, s: e, l: d } } a.toString = vb; return a
	}; var xb = /,?([achlmqrstvxz]),?/gi, ka = /\s*,\s*/, yb = { hs: 1, rg: 1 }; l._path2string = function () { return this.join(",")[I](xb, "$1") }; function Z(a, b, c) {
		function d() {
			var f = Array[p].slice.call(arguments, 0), e = f[R]("\u25ba"), g = d.cache = d.cache || {}, h = d.count = d.count || []; if (g[z](e)) return c ? c(g[e]) : g[e]; h[o] >= 1000 && delete g[h.shift()]; h[F](e); g[e] = a[K](b, f); return c ?
			c(g[e]) : g[e]
		} return d
	} l.getRGB = Z(function (a) {
		if (!a || (a = D(a)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1 }; if (a == "none") return { r: -1, g: -1, b: -1, hex: "none" }; !(yb[z](a.substring(0, 2)) || a.charAt() == "#") && (a = ua(a)); var b, c, d, f, e; if (a = a.match(ub)) {
			if (a[2]) { d = ha(a[2].substring(5), 16); c = ha(a[2].substring(3, 5), 16); b = ha(a[2].substring(1, 3), 16) } if (a[3]) { d = ha((e = a[3].charAt(3)) + e, 16); c = ha((e = a[3].charAt(2)) + e, 16); b = ha((e = a[3].charAt(1)) + e, 16) } if (a[4]) { a = a[4][G](ka); b = y(a[0]); c = y(a[1]); d = y(a[2]); f = y(a[3]) } if (a[5]) {
				a =
				a[5][G](ka); b = y(a[0]) * 2.55; c = y(a[1]) * 2.55; d = y(a[2]) * 2.55; f = y(a[3])
			} if (a[6]) { a = a[6][G](ka); b = y(a[0]); c = y(a[1]); d = y(a[2]); (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360); return l.hsb2rgb(b, c, d) } if (a[7]) { a = a[7][G](ka); b = y(a[0]) * 2.55; c = y(a[1]) * 2.55; d = y(a[2]) * 2.55; (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360 * 2.55); return l.hsb2rgb(b, c, d) } if (a[8]) { a = a[8][G](ka); b = y(a[0]); c = y(a[1]); d = y(a[2]); (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360); return l.hsl2rgb(b, c, d) } if (a[9]) {
				a =
				a[9][G](ka); b = y(a[0]) * 2.55; c = y(a[1]) * 2.55; d = y(a[2]) * 2.55; (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360 * 2.55); return l.hsl2rgb(b, c, d)
			} a = { r: b, g: c, b: d }; b = (~~b)[O](16); c = (~~c)[O](16); d = (~~d)[O](16); b = b[I](ja, "0"); c = c[I](ja, "0"); d = d[I](ja, "0"); a.hex = "#" + b + c + d; isFinite(y(f)) && (a.o = f); return a
		} return { r: -1, g: -1, b: -1, hex: "none", error: 1 }
	}, l); l.getColor = function (a) {
		a = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: a || 0.75 }; var b = this.hsb2rgb(a.h, a.s, a.b); a.h += 0.075; if (a.h > 1) {
			a.h = 0; a.s -= 0.2;
			a.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: a.b })
		} return b.hex
	}; l.getColor.reset = function () { delete this.start }; var zb = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig, Ab = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig; l.parsePathString = Z(function (a) {
		if (!a) return null; var b = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, c = []; if (l.is(a, U) && l.is(a[0], U)) c = va(a); c[o] || D(a)[I](zb, function (d, f, e) {
			var g = []; d = fa.call(f); e[I](Ab, function (h, i) { i && g[F](+i) }); if (d == "m" && g[o] > 2) {
				c[F]([f][M](g.splice(0, 2))); d = "l";
				f = f == "m" ? "l" : "L"
			} for (; g[o] >= b[d];) { c[F]([f][M](g.splice(0, b[d]))); if (!b[d]) break }
		}); c[O] = l._path2string; return c
	}); l.findDotsAtSegment = function (a, b, c, d, f, e, g, h, i) {
		var j = 1 - i, m = E(j, 3) * a + E(j, 2) * 3 * i * c + j * 3 * i * i * f + E(i, 3) * g; j = E(j, 3) * b + E(j, 2) * 3 * i * d + j * 3 * i * i * e + E(i, 3) * h; var n = a + 2 * i * (c - a) + i * i * (f - 2 * c + a), r = b + 2 * i * (d - b) + i * i * (e - 2 * d + b), q = c + 2 * i * (f - c) + i * i * (g - 2 * f + c), k = d + 2 * i * (e - d) + i * i * (h - 2 * e + d); a = (1 - i) * a + i * c; b = (1 - i) * b + i * d; f = (1 - i) * f + i * g; e = (1 - i) * e + i * h; h = 90 - v.atan((n - q) / (r - k)) * 180 / v.PI; (n > q || r < k) && (h += 180); return {
			x: m, y: j,
			m: { x: n, y: r }, n: { x: q, y: k }, start: { x: a, y: b }, end: { x: f, y: e }, alpha: h
		}
	}; var xa = Z(function (a) { if (!a) return { x: 0, y: 0, width: 0, height: 0 }; a = wa(a); for (var b = 0, c = 0, d = [], f = [], e, g = 0, h = a[o]; g < h; g++) { e = a[g]; if (e[0] == "M") { b = e[1]; c = e[2]; d[F](b); f[F](c) } else { b = Bb(b, c, e[1], e[2], e[3], e[4], e[5], e[6]); d = d[M](b.min.x, b.max.x); f = f[M](b.min.y, b.max.y); b = e[5]; c = e[6] } } a = ba[K](0, d); e = ba[K](0, f); return { x: a, y: e, width: Y[K](0, d) - a, height: Y[K](0, f) - e } }); function va(a) {
		var b = []; if (!l.is(a, U) || !l.is(a && a[0], U)) a = l.parsePathString(a); for (var c =
		0, d = a[o]; c < d; c++) { b[c] = []; for (var f = 0, e = a[c][o]; f < e; f++) b[c][f] = a[c][f] } b[O] = l._path2string; return b
	} var Ha = Z(function (a) {
		if (!l.is(a, U) || !l.is(a && a[0], U)) a = l.parsePathString(a); var b = [], c = 0, d = 0, f = 0, e = 0, g = 0; if (a[0][0] == "M") { c = a[0][1]; d = a[0][2]; f = c; e = d; g++; b[F](["M", c, d]) } g = g; for (var h = a[o]; g < h; g++) {
			var i = b[g] = [], j = a[g]; if (j[0] != fa.call(j[0])) {
				i[0] = fa.call(j[0]); switch (i[0]) {
					case "a": i[1] = j[1]; i[2] = j[2]; i[3] = j[3]; i[4] = j[4]; i[5] = j[5]; i[6] = +(j[6] - c).toFixed(3); i[7] = +(j[7] - d).toFixed(3); break; case "v": i[1] =
					+(j[1] - d).toFixed(3); break; case "m": f = j[1]; e = j[2]; default: for (var m = 1, n = j[o]; m < n; m++) i[m] = +(j[m] - (m % 2 ? c : d)).toFixed(3)
				}
			} else { b[g] = []; if (j[0] == "m") { f = j[1] + c; e = j[2] + d } i = 0; for (m = j[o]; i < m; i++) b[g][i] = j[i] } j = b[g][o]; switch (b[g][0]) { case "z": c = f; d = e; break; case "h": c += +b[g][j - 1]; break; case "v": d += +b[g][j - 1]; break; default: c += +b[g][j - 2]; d += +b[g][j - 1] }
		} b[O] = l._path2string; return b
	}, 0, va), oa = Z(function (a) {
		if (!l.is(a, U) || !l.is(a && a[0], U)) a = l.parsePathString(a); var b = [], c = 0, d = 0, f = 0, e = 0, g = 0; if (a[0][0] == "M") {
			c =
			+a[0][1]; d = +a[0][2]; f = c; e = d; g++; b[0] = ["M", c, d]
		} g = g; for (var h = a[o]; g < h; g++) {
			var i = b[g] = [], j = a[g]; if (j[0] != sa.call(j[0])) { i[0] = sa.call(j[0]); switch (i[0]) { case "A": i[1] = j[1]; i[2] = j[2]; i[3] = j[3]; i[4] = j[4]; i[5] = j[5]; i[6] = +(j[6] + c); i[7] = +(j[7] + d); break; case "V": i[1] = +j[1] + d; break; case "H": i[1] = +j[1] + c; break; case "M": f = +j[1] + c; e = +j[2] + d; default: for (var m = 1, n = j[o]; m < n; m++) i[m] = +j[m] + (m % 2 ? c : d) } } else { m = 0; for (n = j[o]; m < n; m++) b[g][m] = j[m] } switch (i[0]) {
				case "Z": c = f; d = e; break; case "H": c = i[1]; break; case "V": d = i[1];
					break; case "M": f = b[g][b[g][o] - 2]; e = b[g][b[g][o] - 1]; default: c = b[g][b[g][o] - 2]; d = b[g][b[g][o] - 1]
			}
		} b[O] = l._path2string; return b
	}, null, va); function ya(a, b, c, d) { return [a, b, c, d, c, d] } function Ua(a, b, c, d, f, e) { var g = 1 / 3, h = 2 / 3; return [g * a + h * c, g * b + h * d, g * f + h * c, g * e + h * d, f, e] } function Va(a, b, c, d, f, e, g, h, i, j) {
		var m = v.PI, n = m * 120 / 180, r = m / 180 * (+f || 0), q = [], k, t = Z(function (J, ia, za) { var Cb = J * v.cos(za) - ia * v.sin(za); J = J * v.sin(za) + ia * v.cos(za); return { x: Cb, y: J } }); if (j) { w = j[0]; k = j[1]; e = j[2]; B = j[3] } else {
			k = t(a, b, -r); a = k.x; b = k.y;
			k = t(h, i, -r); h = k.x; i = k.y; v.cos(m / 180 * f); v.sin(m / 180 * f); k = (a - h) / 2; w = (b - i) / 2; B = k * k / (c * c) + w * w / (d * d); if (B > 1) { B = v.sqrt(B); c = B * c; d = B * d } B = c * c; var L = d * d; B = (e == g ? -1 : 1) * v.sqrt(v.abs((B * L - B * w * w - L * k * k) / (B * w * w + L * k * k))); e = B * c * w / d + (a + h) / 2; var B = B * -d * k / c + (b + i) / 2, w = v.asin(((b - B) / d).toFixed(7)); k = v.asin(((i - B) / d).toFixed(7)); w = a < e ? m - w : w; k = h < e ? m - k : k; w < 0 && (w = m * 2 + w); k < 0 && (k = m * 2 + k); if (g && w > k) w -= m * 2; if (!g && k > w) k -= m * 2
		} m = k - w; if (v.abs(m) > n) {
			q = k; m = h; L = i; k = w + n * (g && k > w ? 1 : -1); h = e + c * v.cos(k); i = B + d * v.sin(k); q = Va(h, i, c, d, f, 0, g, m,
			L, [k, q, e, B])
		} m = k - w; f = v.cos(w); e = v.sin(w); g = v.cos(k); k = v.sin(k); m = v.tan(m / 4); c = 4 / 3 * c * m; m = 4 / 3 * d * m; d = [a, b]; a = [a + c * e, b - m * f]; b = [h + c * k, i - m * g]; h = [h, i]; a[0] = 2 * d[0] - a[0]; a[1] = 2 * d[1] - a[1]; if (j) return [a, b, h][M](q); else { q = [a, b, h][M](q)[R]()[G](","); j = []; h = 0; for (i = q[o]; h < i; h++) j[h] = h % 2 ? t(q[h - 1], q[h], r).y : t(q[h], q[h + 1], r).x; return j }
	} function la(a, b, c, d, f, e, g, h, i) { var j = 1 - i; return { x: E(j, 3) * a + E(j, 2) * 3 * i * c + j * 3 * i * i * f + E(i, 3) * g, y: E(j, 3) * b + E(j, 2) * 3 * i * d + j * 3 * i * i * e + E(i, 3) * h } } var Bb = Z(function (a, b, c, d, f, e, g, h) {
		var i = f - 2 *
		c + a - (g - 2 * f + c), j = 2 * (c - a) - 2 * (f - c), m = a - c, n = (-j + v.sqrt(j * j - 4 * i * m)) / 2 / i; i = (-j - v.sqrt(j * j - 4 * i * m)) / 2 / i; var r = [b, h], q = [a, g]; v.abs(n) > 1000000000000 && (n = 0.5); v.abs(i) > 1000000000000 && (i = 0.5); if (n > 0 && n < 1) { n = la(a, b, c, d, f, e, g, h, n); q[F](n.x); r[F](n.y) } if (i > 0 && i < 1) { n = la(a, b, c, d, f, e, g, h, i); q[F](n.x); r[F](n.y) } i = e - 2 * d + b - (h - 2 * e + d); j = 2 * (d - b) - 2 * (e - d); m = b - d; n = (-j + v.sqrt(j * j - 4 * i * m)) / 2 / i; i = (-j - v.sqrt(j * j - 4 * i * m)) / 2 / i; v.abs(n) > 1000000000000 && (n = 0.5); v.abs(i) > 1000000000000 && (i = 0.5); if (n > 0 && n < 1) {
			n = la(a, b, c, d, f, e, g, h, n); q[F](n.x);
			r[F](n.y)
		} if (i > 0 && i < 1) { n = la(a, b, c, d, f, e, g, h, i); q[F](n.x); r[F](n.y) } return { min: { x: ba[K](0, q), y: ba[K](0, r) }, max: { x: Y[K](0, q), y: Y[K](0, r) } }
	}), wa = Z(function (a, b) {
		var c = oa(a), d = b && oa(b); a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }; b = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }; function f(q, k) {
			var t; if (!q) return ["C", k.x, k.y, k.x, k.y, k.x, k.y]; !(q[0] in { T: 1, Q: 1 }) && (k.qx = k.qy = null); switch (q[0]) {
				case "M": k.X = q[1]; k.Y = q[2]; break; case "A": q = ["C"][M](Va[K](0, [k.x, k.y][M](q.slice(1)))); break; case "S": t = k.x + (k.x -
				(k.bx || k.x)); k = k.y + (k.y - (k.by || k.y)); q = ["C", t, k][M](q.slice(1)); break; case "T": k.qx = k.x + (k.x - (k.qx || k.x)); k.qy = k.y + (k.y - (k.qy || k.y)); q = ["C"][M](Ua(k.x, k.y, k.qx, k.qy, q[1], q[2])); break; case "Q": k.qx = q[1]; k.qy = q[2]; q = ["C"][M](Ua(k.x, k.y, q[1], q[2], q[3], q[4])); break; case "L": q = ["C"][M](ya(k.x, k.y, q[1], q[2])); break; case "H": q = ["C"][M](ya(k.x, k.y, q[1], k.y)); break; case "V": q = ["C"][M](ya(k.x, k.y, k.x, q[1])); break; case "Z": q = ["C"][M](ya(k.x, k.y, k.X, k.Y)); break
			} return q
		} function e(q, k) {
			if (q[k][o] > 7) {
				q[k].shift();
				for (var t = q[k]; t[o];) q.splice(k++, 0, ["C"][M](t.splice(0, 6))); q.splice(k, 1); i = Y(c[o], d && d[o] || 0)
			}
		} function g(q, k, t, L, B) { if (q && k && q[B][0] == "M" && k[B][0] != "M") { k.splice(B, 0, ["M", L.x, L.y]); t.bx = 0; t.by = 0; t.x = q[B][1]; t.y = q[B][2]; i = Y(c[o], d && d[o] || 0) } } for (var h = 0, i = Y(c[o], d && d[o] || 0) ; h < i; h++) {
			c[h] = f(c[h], a); e(c, h); d && (d[h] = f(d[h], b)); d && e(d, h); g(c, d, a, b, h); g(d, c, b, a, h); var j = c[h], m = d && d[h], n = j[o], r = d && m[o]; a.x = j[n - 2]; a.y = j[n - 1]; a.bx = y(j[n - 4]) || a.x; a.by = y(j[n - 3]) || a.y; b.bx = d && (y(m[r - 4]) || b.x); b.by = d && (y(m[r -
			3]) || b.y); b.x = d && m[r - 2]; b.y = d && m[r - 1]
		} return d ? [c, d] : c
	}, null, va), Wa = Z(function (a) { for (var b = [], c = 0, d = a[o]; c < d; c++) { var f = {}, e = a[c].match(/^([^:]*):?([\d\.]*)/); f.color = l.getRGB(e[1]); if (f.color.error) return null; f.color = f.color.hex; e[2] && (f.offset = e[2] + "%"); b[F](f) } c = 1; for (d = b[o] - 1; c < d; c++) if (!b[c].offset) { a = y(b[c - 1].offset || 0); e = 0; for (f = c + 1; f < d; f++) if (b[f].offset) { e = b[f].offset; break } if (!e) { e = 100; f = d } e = y(e); for (e = (e - a) / (f - c + 1) ; c < f; c++) { a += e; b[c].offset = a + "%" } } return b }); function Xa(a, b, c, d) {
		if (l.is(a,
		ga) || l.is(a, "object")) { a = l.is(a, ga) ? C.getElementById(a) : a; if (a.tagName) return b == null ? { container: a, width: a.style.pixelWidth || a.offsetWidth, height: a.style.pixelHeight || a.offsetHeight } : { container: a, width: b, height: c } } else return { container: 1, x: a, y: b, width: c, height: d }
	} function Ia(a, b) {
		var c = this; for (var d in b) if (b[z](d) && !(d in a)) switch (typeof b[d]) {
			case "function": (function (f) { a[d] = a === c ? f : function () { return f[K](c, arguments) } })(b[d]); break; case "object": a[d] = a[d] || {}; Ia.call(this, a[d], b[d]); break; default: a[d] =
			b[d]; break
		}
	} function ma(a, b) { a == b.top && (b.top = a.prev); a == b.bottom && (b.bottom = a.next); a.next && (a.next.prev = a.prev); a.prev && (a.prev.next = a.next) } function Ya(a, b) { if (b.top !== a) { ma(a, b); a.next = null; a.prev = b.top; b.top.next = a; b.top = a } } function Za(a, b) { if (b.bottom !== a) { ma(a, b); a.next = b.bottom; a.prev = null; b.bottom.prev = a; b.bottom = a } } function $a(a, b, c) { ma(a, c); b == c.top && (c.top = a); b.next && (b.next.prev = a); a.next = b.next; a.prev = b; b.next = a } function ab(a, b, c) {
		ma(a, c); b == c.bottom && (c.bottom = a); b.prev && (b.prev.next =
		a); a.prev = b.prev; b.prev = a; a.next = b
	} function bb(a) { return function () { throw new Error("Rapha\u00ebl: you are calling to method \u201c" + a + "\u201d of removed object"); } } var cb = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/; l.pathToRelative = Ha; if (l.svg) {
		H[p].svgns = "http://www.w3.org/2000/svg"; H[p].xlink = "http://www.w3.org/1999/xlink"; Q = function (a) { return +a + (~~a === a) * 0.5 }; var u = function (a, b) {
			if (b) for (var c in b) b[z](c) && a[W](c, D(b[c])); else {
				a = C.createElementNS(H[p].svgns, a); a.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
				return a
			}
		}; l[O] = function () { return "Your browser supports SVG.\nYou are running Rapha\u00ebl " + this.version }; var db = function (a, b) { var c = u("path"); b.canvas && b.canvas[x](c); b = new s(c, b); b.type = "path"; ea(b, { fill: "none", stroke: "#000", path: a }); return b }, pa = function (a, b, c) {
			var d = "linear", f = 0.5, e = 0.5, g = a.style; b = D(b)[I](cb, function (m, n, r) { d = "radial"; if (n && r) { f = y(n); e = y(r); m = (e > 0.5) * 2 - 1; E(f - 0.5, 2) + E(e - 0.5, 2) > 0.25 && (e = v.sqrt(0.25 - E(f - 0.5, 2)) * m + 0.5) && e != 0.5 && (e = e.toFixed(5) - 1.0E-5 * m) } return A }); b = b[G](/\s*\-\s*/);
			if (d == "linear") { var h = b.shift(); h = -y(h); if (isNaN(h)) return null; h = [0, 0, v.cos(h * v.PI / 180), v.sin(h * v.PI / 180)]; var i = 1 / (Y(v.abs(h[2]), v.abs(h[3])) || 1); h[2] *= i; h[3] *= i; if (h[2] < 0) { h[0] = -h[2]; h[2] = 0 } if (h[3] < 0) { h[1] = -h[3]; h[3] = 0 } } b = Wa(b); if (!b) return null; i = a.getAttribute(ca); (i = i.match(/^url\(#(.*)\)$/)) && c.defs.removeChild(C.getElementById(i[1])); i = u(d + "Gradient"); i.id = "r" + (l._id++)[O](36); u(i, d == "radial" ? { fx: f, fy: e } : { x1: h[0], y1: h[1], x2: h[2], y2: h[3] }); c.defs[x](i); c = 0; for (h = b[o]; c < h; c++) {
				var j = u("stop");
				u(j, { offset: b[c].offset ? b[c].offset : !c ? "0%" : "100%", "stop-color": b[c].color || "#fff" }); i[x](j)
			} u(a, { fill: "url(#" + i.id + ")", opacity: 1, "fill-opacity": 1 }); g.fill = A; g.opacity = 1; return g.fillOpacity = 1
		}, Ja = function (a) { var b = a.getBBox(); u(a.pattern, { patternTransform: l.format("translate({0},{1})", b.x, b.y) }) }, ea = function (a, b) {
			var c = { "": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] }, d = a.node, f = a.attrs, e =
			a.rotate(); function g(k, t) { if (t = c[fa.call(t)]) { var L = k.attrs["stroke-width"] || "1"; k = { round: L, square: L, butt: 0 }[k.attrs["stroke-linecap"] || b["stroke-linecap"]] || 0; for (var B = [], w = t[o]; w--;) B[w] = t[w] * L + (w % 2 ? 1 : -1) * k; u(d, { "stroke-dasharray": B[R](",") }) } } b[z]("rotation") && (e = b.rotation); var h = D(e)[G](V); if (h.length - 1) { h[1] = +h[1]; h[2] = +h[2] } else h = null; y(e) && a.rotate(0, true); for (var i in b) if (b[z](i)) if (ta[z](i)) {
				var j = b[i]; f[i] = j; switch (i) {
					case "blur": a.blur(j); break; case "rotation": a.rotate(j, true); break;
					case "href": case "title": case "target": var m = d.parentNode; if (fa.call(m.tagName) != "a") { var n = u("a"); m.insertBefore(n, d); n[x](d); m = n } m.setAttributeNS(a.paper.xlink, i, j); break; case "cursor": d.style.cursor = j; break; case "clip-rect": m = D(j)[G](V); if (m[o] == 4) { a.clip && a.clip.parentNode.parentNode.removeChild(a.clip.parentNode); var r = u("clipPath"); n = u("rect"); r.id = "r" + (l._id++)[O](36); u(n, { x: m[0], y: m[1], width: m[2], height: m[3] }); r[x](n); a.paper.defs[x](r); u(d, { "clip-path": "url(#" + r.id + ")" }); a.clip = n } if (!j) {
						(j =
						C.getElementById(d.getAttribute("clip-path")[I](/(^url\(#|\)$)/g, A))) && j.parentNode.removeChild(j); u(d, { "clip-path": A }); delete a.clip
					} break; case "path": if (a.type == "path") u(d, { d: j ? (f.path = oa(j)) : "M0,0" }); break; case "width": d[W](i, j); if (f.fx) { i = "x"; j = f.x } else break; case "x": if (f.fx) j = -f.x - (f.width || 0); case "rx": if (i == "rx" && a.type == "rect") break; case "cx": h && (i == "x" || i == "cx") && (h[1] += j - f[i]); d[W](i, j); a.pattern && Ja(a); break; case "height": d[W](i, j); if (f.fy) { i = "y"; j = f.y } else break; case "y": if (f.fy) j = -f.y -
					(f.height || 0); case "ry": if (i == "ry" && a.type == "rect") break; case "cy": h && (i == "y" || i == "cy") && (h[2] += j - f[i]); d[W](i, j); a.pattern && Ja(a); break; case "r": a.type == "rect" ? u(d, { rx: j, ry: j }) : d[W](i, j); break; case "src": a.type == "image" && d.setAttributeNS(a.paper.xlink, "href", j); break; case "stroke-width": d.style.strokeWidth = j; d[W](i, j); f["stroke-dasharray"] && g(a, f["stroke-dasharray"]); break; case "stroke-dasharray": g(a, j); break; case "translation": j = D(j)[G](V); j[0] = +j[0] || 0; j[1] = +j[1] || 0; if (h) { h[1] += j[0]; h[2] += j[1] } Aa.call(a,
					j[0], j[1]); break; case "scale": j = D(j)[G](V); a.scale(+j[0] || 1, +j[1] || +j[0] || 1, isNaN(y(j[2])) ? null : +j[2], isNaN(y(j[3])) ? null : +j[3]); break; case ca: if (m = D(j).match(Sa)) {
						r = u("pattern"); var q = u("image"); r.id = "r" + (l._id++)[O](36); u(r, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }); u(q, { x: 0, y: 0 }); q.setAttributeNS(a.paper.xlink, "href", m[1]); r[x](q); j = C.createElement("img"); j.style.cssText = "position:absolute;left:-9999em;top-9999em"; j.onload = function () {
							u(r, { width: this.offsetWidth, height: this.offsetHeight });
							u(q, { width: this.offsetWidth, height: this.offsetHeight }); C.body.removeChild(this); a.paper.safari()
						}; C.body[x](j); j.src = m[1]; a.paper.defs[x](r); d.style.fill = "url(#" + r.id + ")"; u(d, { fill: "url(#" + r.id + ")" }); a.pattern = r; a.pattern && Ja(a); break
					} m = l.getRGB(j); if (m.error) { if (({ circle: 1, ellipse: 1 }[z](a.type) || D(j).charAt() != "r") && pa(d, j, a.paper)) { f.gradient = j; f.fill = "none"; break } } else {
						delete b.gradient; delete f.gradient; !l.is(f.opacity, "undefined") && l.is(b.opacity, "undefined") && u(d, { opacity: f.opacity }); !l.is(f["fill-opacity"],
						"undefined") && l.is(b["fill-opacity"], "undefined") && u(d, { "fill-opacity": f["fill-opacity"] })
					} m[z]("o") && u(d, { "fill-opacity": m.o > 1 ? m.o / 100 : m.o }); case "stroke": m = l.getRGB(j); d[W](i, m.hex); i == "stroke" && m[z]("o") && u(d, { "stroke-opacity": m.o > 1 ? m.o / 100 : m.o }); break; case "gradient": (({ circle: 1, ellipse: 1 })[z](a.type) || D(j).charAt() != "r") && pa(d, j, a.paper); break; case "opacity": case "fill-opacity": if (f.gradient) {
						if (m = C.getElementById(d.getAttribute(ca)[I](/^url\(#|\)$/g, A))) {
							m = m.getElementsByTagName("stop"); m[m[o] -
							1][W]("stop-opacity", j)
						} break
					} default: i == "font-size" && (j = ha(j, 10) + "px"); m = i[I](/(\-.)/g, function (k) { return sa.call(k.substring(1)) }); d.style[m] = j; d[W](i, j); break
				}
			} Db(a, b); if (h) a.rotate(h.join(N)); else y(e) && a.rotate(e, true)
		}, eb = 1.2, Db = function (a, b) {
			if (!(a.type != "text" || !(b[z]("text") || b[z]("font") || b[z]("font-size") || b[z]("x") || b[z]("y")))) {
				var c = a.attrs, d = a.node, f = d.firstChild ? ha(C.defaultView.getComputedStyle(d.firstChild, A).getPropertyValue("font-size"), 10) : 10; if (b[z]("text")) {
					for (c.text = b.text; d.firstChild;) d.removeChild(d.firstChild);
					b = D(b.text)[G]("\n"); for (var e = 0, g = b[o]; e < g; e++) if (b[e]) { var h = u("tspan"); e && u(h, { dy: f * eb, x: c.x }); h[x](C.createTextNode(b[e])); d[x](h) }
				} else { b = d.getElementsByTagName("tspan"); e = 0; for (g = b[o]; e < g; e++) e && u(b[e], { dy: f * eb, x: c.x }) } u(d, { y: c.y }); a = a.getBBox(); (a = c.y - (a.y + a.height / 2)) && isFinite(a) && u(d, { y: c.y + a })
			}
		}, s = function (a, b) {
			this[0] = a; this.id = l._oid++; this.node = a; a.raphael = this; this.paper = b; this.attrs = this.attrs || {}; this.transformations = []; this._ = { tx: 0, ty: 0, rt: { deg: 0, cx: 0, cy: 0 }, sx: 1, sy: 1 }; !b.bottom &&
			(b.bottom = this); (this.prev = b.top) && (b.top.next = this); b.top = this; this.next = null
		}; s[p].rotate = function (a, b, c) {
			if (this.removed) return this; if (a == null) { if (this._.rt.cx) return [this._.rt.deg, this._.rt.cx, this._.rt.cy][R](N); return this._.rt.deg } var d = this.getBBox(); a = D(a)[G](V); if (a[o] - 1) { b = y(a[1]); c = y(a[2]) } a = y(a[0]); if (b != null) this._.rt.deg = a; else this._.rt.deg += a; c == null && (b = null); this._.rt.cx = b; this._.rt.cy = c; b = b == null ? d.x + d.width / 2 : b; c = c == null ? d.y + d.height / 2 : c; if (this._.rt.deg) {
				this.transformations[0] =
				l.format("rotate({0} {1} {2})", this._.rt.deg, b, c); this.clip && u(this.clip, { transform: l.format("rotate({0} {1} {2})", -this._.rt.deg, b, c) })
			} else { this.transformations[0] = A; this.clip && u(this.clip, { transform: A }) } u(this.node, { transform: this.transformations[R](N) }); return this
		}; s[p].hide = function () { !this.removed && (this.node.style.display = "none"); return this }; s[p].show = function () { !this.removed && (this.node.style.display = ""); return this }; s[p].remove = function () {
			if (!this.removed) {
				ma(this, this.paper); this.node.parentNode.removeChild(this.node);
				for (var a in this) delete this[a]; this.removed = true
			}
		}; s[p].getBBox = function () {
			if (this.removed) return this; if (this.type == "path") return xa(this.attrs.path); if (this.node.style.display == "none") { this.show(); var a = true } var b = {}; try { b = this.node.getBBox() } catch (c) { } finally { b = b || {} } if (this.type == "text") {
				b = { x: b.x, y: Infinity, width: 0, height: 0 }; for (var d = 0, f = this.node.getNumberOfChars() ; d < f; d++) {
					var e = this.node.getExtentOfChar(d); e.y < b.y && (b.y = e.y); e.y + e.height - b.y > b.height && (b.height = e.y + e.height - b.y); e.x + e.width -
					b.x > b.width && (b.width = e.x + e.width - b.x)
				}
			} a && this.hide(); return b
		}; s[p].attr = function (a, b) {
			if (this.removed) return this; if (a == null) { a = {}; for (var c in this.attrs) if (this.attrs[z](c)) a[c] = this.attrs[c]; this._.rt.deg && (a.rotation = this.rotate()); (this._.sx != 1 || this._.sy != 1) && (a.scale = this.scale()); a.gradient && a.fill == "none" && (a.fill = a.gradient) && delete a.gradient; return a } if (b == null && l.is(a, ga)) {
				if (a == "translation") return Aa.call(this); if (a == "rotation") return this.rotate(); if (a == "scale") return this.scale();
				if (a == ca && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient; return this.attrs[a]
			} if (b == null && l.is(a, U)) { b = {}; c = 0; for (var d = a.length; c < d; c++) b[a[c]] = this.attr(a[c]); return b } if (b != null) { c = {}; c[a] = b; ea(this, c) } else a != null && l.is(a, "object") && ea(this, a); return this
		}; s[p].toFront = function () { if (this.removed) return this; this.node.parentNode[x](this.node); var a = this.paper; a.top != this && Ya(this, a); return this }; s[p].toBack = function () {
			if (this.removed) return this; if (this.node.parentNode.firstChild !=
			this.node) { this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild); Za(this, this.paper) } return this
		}; s[p].insertAfter = function (a) { if (this.removed) return this; var b = a.node || a[a.length].node; b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode[x](this.node); $a(this, a, this.paper); return this }; s[p].insertBefore = function (a) { if (this.removed) return this; var b = a.node || a[0].node; b.parentNode.insertBefore(this.node, b); ab(this, a, this.paper); return this }; s[p].blur =
		function (a) { var b = this; if (+a !== 0) { var c = u("filter"), d = u("feGaussianBlur"); b.attrs.blur = a; c.id = "r" + (l._id++)[O](36); u(d, { stdDeviation: +a || 1.5 }); c.appendChild(d); b.paper.defs.appendChild(c); b._blur = c; u(b.node, { filter: "url(#" + c.id + ")" }) } else { if (b._blur) { b._blur.parentNode.removeChild(b._blur); delete b._blur; delete b.attrs.blur } b.node.removeAttribute("filter") } }; var fb = function (a, b, c, d) {
			var f = u("circle"); a.canvas && a.canvas[x](f); a = new s(f, a); a.attrs = { cx: b, cy: c, r: d, fill: "none", stroke: "#000" }; a.type = "circle";
			u(f, a.attrs); return a
		}, gb = function (a, b, c, d, f, e) { var g = u("rect"); a.canvas && a.canvas[x](g); a = new s(g, a); a.attrs = { x: b, y: c, width: d, height: f, r: e || 0, rx: e || 0, ry: e || 0, fill: "none", stroke: "#000" }; a.type = "rect"; u(g, a.attrs); return a }, hb = function (a, b, c, d, f) { var e = u("ellipse"); a.canvas && a.canvas[x](e); a = new s(e, a); a.attrs = { cx: b, cy: c, rx: d, ry: f, fill: "none", stroke: "#000" }; a.type = "ellipse"; u(e, a.attrs); return a }, ib = function (a, b, c, d, f, e) {
			var g = u("image"); u(g, { x: c, y: d, width: f, height: e, preserveAspectRatio: "none" }); g.setAttributeNS(a.xlink,
			"href", b); a.canvas && a.canvas[x](g); a = new s(g, a); a.attrs = { x: c, y: d, width: f, height: e, src: b }; a.type = "image"; return a
		}, jb = function (a, b, c, d) { var f = u("text"); u(f, { x: b, y: c, "text-anchor": "middle" }); a.canvas && a.canvas[x](f); a = new s(f, a); a.attrs = { x: b, y: c, "text-anchor": "middle", text: d, font: ta.font, stroke: "none", fill: "#000" }; a.type = "text"; ea(a, a.attrs); return a }, kb = function (a, b) { this.width = a || this.width; this.height = b || this.height; this.canvas[W]("width", this.width); this.canvas[W]("height", this.height); return this },
		Ca = function () { var a = Xa[K](0, arguments), b = a && a.container, c = a.x, d = a.y, f = a.width; a = a.height; if (!b) throw new Error("SVG container not found."); var e = u("svg"); c = c || 0; d = d || 0; f = f || 512; a = a || 342; u(e, { xmlns: "http://www.w3.org/2000/svg", version: 1.1, width: f, height: a }); if (b == 1) { e.style.cssText = "position:absolute;left:" + c + "px;top:" + d + "px"; C.body[x](e) } else b.firstChild ? b.insertBefore(e, b.firstChild) : b[x](e); b = new H; b.width = f; b.height = a; b.canvas = e; Ia.call(b, b, l.fn); b.clear(); return b }; H[p].clear = function () {
			for (var a =
			this.canvas; a.firstChild;) a.removeChild(a.firstChild); this.bottom = this.top = null; (this.desc = u("desc"))[x](C.createTextNode("Created with Rapha\u00ebl")); a[x](this.desc); a[x](this.defs = u("defs"))
		}; H[p].remove = function () { this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas); for (var a in this) this[a] = bb(a) }
	} if (l.vml) {
		var lb = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" }, Eb = /([clmz]),?([^clmz]*)/gi, Fb = /-?[^,\s-]+/g, qa = 1000 + N + 1000, na = 10, ra = { path: 1, rect: 1 }, Gb = function (a) {
			var b = /[ahqstv]/ig,
			c = oa; D(a).match(b) && (c = wa); b = /[clmz]/g; if (c == oa && !D(a).match(b)) return a = D(a)[I](Eb, function (i, j, m) { var n = [], r = fa.call(j) == "m", q = lb[j]; m[I](Fb, function (k) { if (r && n[o] == 2) { q += n + lb[j == "m" ? "l" : "L"]; n = [] } n[F](Q(k * na)) }); return q + n }); b = c(a); var d; a = []; for (var f = 0, e = b[o]; f < e; f++) { c = b[f]; d = fa.call(b[f][0]); d == "z" && (d = "x"); for (var g = 1, h = c[o]; g < h; g++) d += Q(c[g] * na) + (g != h - 1 ? "," : A); a[F](d) } return a[R](N)
		}; l[O] = function () {
			return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl " +
			this.version
		}; db = function (a, b) { var c = S("group"); c.style.cssText = "position:absolute;left:0;top:0;width:" + b.width + "px;height:" + b.height + "px"; c.coordsize = b.coordsize; c.coordorigin = b.coordorigin; var d = S("shape"), f = d.style; f.width = b.width + "px"; f.height = b.height + "px"; d.coordsize = qa; d.coordorigin = b.coordorigin; c[x](d); d = new s(d, c, b); f = { fill: "none", stroke: "#000" }; a && (f.path = a); d.isAbsolute = true; d.type = "path"; d.path = []; d.Path = A; ea(d, f); b.canvas[x](c); return d }; ea = function (a, b) {
			a.attrs = a.attrs || {}; var c = a.node,
			d = a.attrs, f = c.style, e; e = (b.x != d.x || b.y != d.y || b.width != d.width || b.height != d.height || b.r != d.r) && a.type == "rect"; var g = a; for (var h in b) if (b[z](h)) d[h] = b[h]; if (e) { d.path = mb(d.x, d.y, d.width, d.height, d.r); a.X = d.x; a.Y = d.y; a.W = d.width; a.H = d.height } b.href && (c.href = b.href); b.title && (c.title = b.title); b.target && (c.target = b.target); b.cursor && (f.cursor = b.cursor); "blur" in b && a.blur(b.blur); if (b.path && a.type == "path" || e) c.path = Gb(d.path); b.rotation != null && a.rotate(b.rotation, true); if (b.translation) {
				e = D(b.translation)[G](V);
				Aa.call(a, e[0], e[1]); if (a._.rt.cx != null) { a._.rt.cx += +e[0]; a._.rt.cy += +e[1]; a.setBox(a.attrs, e[0], e[1]) }
			} if (b.scale) { e = D(b.scale)[G](V); a.scale(+e[0] || 1, +e[1] || +e[0] || 1, +e[2] || null, +e[3] || null) } if ("clip-rect" in b) {
				e = D(b["clip-rect"])[G](V); if (e[o] == 4) {
					e[2] = +e[2] + +e[0]; e[3] = +e[3] + +e[1]; h = c.clipRect || C.createElement("div"); var i = h.style, j = c.parentNode; i.clip = l.format("rect({1}px {2}px {3}px {0}px)", e); if (!c.clipRect) {
						i.position = "absolute"; i.top = 0; i.left = 0; i.width = a.paper.width + "px"; i.height = a.paper.height +
						"px"; j.parentNode.insertBefore(h, j); h[x](j); c.clipRect = h
					}
				} if (!b["clip-rect"]) c.clipRect && (c.clipRect.style.clip = A)
			} if (a.type == "image" && b.src) c.src = b.src; if (a.type == "image" && b.opacity) { c.filterOpacity = Fa + ".Alpha(opacity=" + b.opacity * 100 + ")"; f.filter = (c.filterMatrix || A) + (c.filterOpacity || A) } b.font && (f.font = b.font); b["font-family"] && (f.fontFamily = '"' + b["font-family"][G](",")[0][I](/^['"]+|['"]+$/g, A) + '"'); b["font-size"] && (f.fontSize = b["font-size"]); b["font-weight"] && (f.fontWeight = b["font-weight"]); b["font-style"] &&
			(f.fontStyle = b["font-style"]); if (b.opacity != null || b["stroke-width"] != null || b.fill != null || b.stroke != null || b["stroke-width"] != null || b["stroke-opacity"] != null || b["fill-opacity"] != null || b["stroke-dasharray"] != null || b["stroke-miterlimit"] != null || b["stroke-linejoin"] != null || b["stroke-linecap"] != null) {
				c = a.shape || c; f = c.getElementsByTagName(ca) && c.getElementsByTagName(ca)[0]; e = false; !f && (e = f = S(ca)); if ("fill-opacity" in b || "opacity" in b) {
					a = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+l.getRGB(b.fill).o +
					1 || 2) - 1); a < 0 && (a = 0); a > 1 && (a = 1); f.opacity = a
				} b.fill && (f.on = true); if (f.on == null || b.fill == "none") f.on = false; if (f.on && b.fill) if (a = b.fill.match(Sa)) { f.src = a[1]; f.type = "tile" } else { f.color = l.getRGB(b.fill).hex; f.src = A; f.type = "solid"; if (l.getRGB(b.fill).error && (g.type in { circle: 1, ellipse: 1 } || D(b.fill).charAt() != "r") && pa(g, b.fill)) { d.fill = "none"; d.gradient = b.fill } } e && c[x](f); f = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0]; e = false; !f && (e = f = S("stroke")); if (b.stroke && b.stroke != "none" ||
				b["stroke-width"] || b["stroke-opacity"] != null || b["stroke-dasharray"] || b["stroke-miterlimit"] || b["stroke-linejoin"] || b["stroke-linecap"]) f.on = true; (b.stroke == "none" || f.on == null || b.stroke == 0 || b["stroke-width"] == 0) && (f.on = false); a = l.getRGB(b.stroke); f.on && b.stroke && (f.color = a.hex); a = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+a.o + 1 || 2) - 1); h = (y(b["stroke-width"]) || 1) * 0.75; a < 0 && (a = 0); a > 1 && (a = 1); b["stroke-width"] == null && (h = d["stroke-width"]); b["stroke-width"] && (f.weight = h); h && h < 1 && (a *= h) && (f.weight =
				1); f.opacity = a; b["stroke-linejoin"] && (f.joinstyle = b["stroke-linejoin"] || "miter"); f.miterlimit = b["stroke-miterlimit"] || 8; b["stroke-linecap"] && (f.endcap = b["stroke-linecap"] == "butt" ? "flat" : b["stroke-linecap"] == "square" ? "square" : "round"); if (b["stroke-dasharray"]) {
					a = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" }; f.dashstyle = a[z](b["stroke-dasharray"]) ? a[b["stroke-dasharray"]] :
					A
				} e && c[x](f)
			} if (g.type == "text") {
				f = g.paper.span.style; d.font && (f.font = d.font); d["font-family"] && (f.fontFamily = d["font-family"]); d["font-size"] && (f.fontSize = d["font-size"]); d["font-weight"] && (f.fontWeight = d["font-weight"]); d["font-style"] && (f.fontStyle = d["font-style"]); g.node.string && (g.paper.span.innerHTML = D(g.node.string)[I](/</g, "&#60;")[I](/&/g, "&#38;")[I](/\n/g, "<br>")); g.W = d.w = g.paper.span.offsetWidth; g.H = d.h = g.paper.span.offsetHeight; g.X = d.x; g.Y = d.y + Q(g.H / 2); switch (d["text-anchor"]) {
					case "start": g.node.style["v-text-align"] =
					"left"; g.bbx = Q(g.W / 2); break; case "end": g.node.style["v-text-align"] = "right"; g.bbx = -Q(g.W / 2); break; default: g.node.style["v-text-align"] = "center"; break
				}
			}
		}; pa = function (a, b) {
			a.attrs = a.attrs || {}; var c = "linear", d = ".5 .5"; a.attrs.gradient = b; b = D(b)[I](cb, function (i, j, m) { c = "radial"; if (j && m) { j = y(j); m = y(m); E(j - 0.5, 2) + E(m - 0.5, 2) > 0.25 && (m = v.sqrt(0.25 - E(j - 0.5, 2)) * ((m > 0.5) * 2 - 1) + 0.5); d = j + N + m } return A }); b = b[G](/\s*\-\s*/); if (c == "linear") { var f = b.shift(); f = -y(f); if (isNaN(f)) return null } var e = Wa(b); if (!e) return null;
			a = a.shape || a.node; b = a.getElementsByTagName(ca)[0] || S(ca); !b.parentNode && a.appendChild(b); if (e[o]) { b.on = true; b.method = "none"; b.color = e[0].color; b.color2 = e[e[o] - 1].color; a = []; for (var g = 0, h = e[o]; g < h; g++) e[g].offset && a[F](e[g].offset + N + e[g].color); b.colors && (b.colors.value = a[o] ? a[R]() : "0% " + b.color); if (c == "radial") { b.type = "gradientradial"; b.focus = "100%"; b.focussize = d; b.focusposition = d } else { b.type = "gradient"; b.angle = (270 - f) % 360 } } return 1
		}; s = function (a, b, c) {
			this[0] = a; this.id = l._oid++; this.node = a; a.raphael =
			this; this.Y = this.X = 0; this.attrs = {}; this.Group = b; this.paper = c; this._ = { tx: 0, ty: 0, rt: { deg: 0 }, sx: 1, sy: 1 }; !c.bottom && (c.bottom = this); (this.prev = c.top) && (c.top.next = this); c.top = this; this.next = null
		}; s[p].rotate = function (a, b, c) {
			if (this.removed) return this; if (a == null) { if (this._.rt.cx) return [this._.rt.deg, this._.rt.cx, this._.rt.cy][R](N); return this._.rt.deg } a = D(a)[G](V); if (a[o] - 1) { b = y(a[1]); c = y(a[2]) } a = y(a[0]); if (b != null) this._.rt.deg = a; else this._.rt.deg += a; c == null && (b = null); this._.rt.cx = b; this._.rt.cy = c;
			this.setBox(this.attrs, b, c); this.Group.style.rotation = this._.rt.deg; return this
		}; s[p].setBox = function (a, b, c) {
			if (this.removed) return this; var d = this.Group.style, f = this.shape && this.shape.style || this.node.style; a = a || {}; for (var e in a) if (a[z](e)) this.attrs[e] = a[e]; b = b || this._.rt.cx; c = c || this._.rt.cy; var g = this.attrs, h; switch (this.type) {
				case "circle": a = g.cx - g.r; e = g.cy - g.r; h = g = g.r * 2; break; case "ellipse": a = g.cx - g.rx; e = g.cy - g.ry; h = g.rx * 2; g = g.ry * 2; break; case "image": a = +g.x; e = +g.y; h = g.width || 0; g = g.height ||
				0; break; case "text": this.textpath.v = ["m", Q(g.x), ", ", Q(g.y - 2), "l", Q(g.x) + 1, ", ", Q(g.y - 2)][R](A); a = g.x - Q(this.W / 2); e = g.y - this.H / 2; h = this.W; g = this.H; break; case "rect": case "path": if (this.attrs.path) { g = xa(this.attrs.path); a = g.x; e = g.y; h = g.width; g = g.height } else { e = a = 0; h = this.paper.width; g = this.paper.height } break; default: e = a = 0; h = this.paper.width; g = this.paper.height; break
			} b = b == null ? a + h / 2 : b; c = c == null ? e + g / 2 : c; b = b - this.paper.width / 2; c = c - this.paper.height / 2; var i; d.left != (i = b + "px") && (d.left = i); d.top != (i = c + "px") &&
			(d.top = i); this.X = ra[z](this.type) ? -b : a; this.Y = ra[z](this.type) ? -c : e; this.W = h; this.H = g; if (ra[z](this.type)) { f.left != (i = -b * na + "px") && (f.left = i); f.top != (i = -c * na + "px") && (f.top = i) } else if (this.type == "text") { f.left != (i = -b + "px") && (f.left = i); f.top != (i = -c + "px") && (f.top = i) } else { d.width != (i = this.paper.width + "px") && (d.width = i); d.height != (i = this.paper.height + "px") && (d.height = i); f.left != (i = a - b + "px") && (f.left = i); f.top != (i = e - c + "px") && (f.top = i); f.width != (i = h + "px") && (f.width = i); f.height != (i = g + "px") && (f.height = i) }
		};
		s[p].hide = function () { !this.removed && (this.Group.style.display = "none"); return this }; s[p].show = function () { !this.removed && (this.Group.style.display = "block"); return this }; s[p].getBBox = function () { if (this.removed) return this; if (ra[z](this.type)) return xa(this.attrs.path); return { x: this.X + (this.bbx || 0), y: this.Y, width: this.W, height: this.H } }; s[p].remove = function () {
			if (!this.removed) {
				ma(this, this.paper); this.node.parentNode.removeChild(this.node); this.Group.parentNode.removeChild(this.Group); this.shape && this.shape.parentNode.removeChild(this.shape);
				for (var a in this) delete this[a]; this.removed = true
			}
		}; s[p].attr = function (a, b) {
			if (this.removed) return this; if (a == null) { a = {}; for (var c in this.attrs) if (this.attrs[z](c)) a[c] = this.attrs[c]; this._.rt.deg && (a.rotation = this.rotate()); (this._.sx != 1 || this._.sy != 1) && (a.scale = this.scale()); a.gradient && a.fill == "none" && (a.fill = a.gradient) && delete a.gradient; return a } if (b == null && l.is(a, ga)) {
				if (a == "translation") return Aa.call(this); if (a == "rotation") return this.rotate(); if (a == "scale") return this.scale(); if (a == ca &&
				this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient; return this.attrs[a]
			} if (this.attrs && b == null && l.is(a, U)) { var d = {}; c = 0; for (b = a[o]; c < b; c++) d[a[c]] = this.attr(a[c]); return d } if (b != null) { d = {}; d[a] = b } b == null && l.is(a, "object") && (d = a); if (d) { if (d.text && this.type == "text") this.node.string = d.text; ea(this, d); if (d.gradient && ({ circle: 1, ellipse: 1 }[z](this.type) || D(d.gradient).charAt() != "r")) pa(this, d.gradient); (!ra[z](this.type) || this._.rt.deg) && this.setBox(this.attrs) } return this
		}; s[p].toFront =
		function () { !this.removed && this.Group.parentNode[x](this.Group); this.paper.top != this && Ya(this, this.paper); return this }; s[p].toBack = function () { if (this.removed) return this; if (this.Group.parentNode.firstChild != this.Group) { this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild); Za(this, this.paper) } return this }; s[p].insertAfter = function (a) {
			if (this.removed) return this; if (a.constructor == X) a = a[a.length]; a.Group.nextSibling ? a.Group.parentNode.insertBefore(this.Group, a.Group.nextSibling) :
			a.Group.parentNode[x](this.Group); $a(this, a, this.paper); return this
		}; s[p].insertBefore = function (a) { if (this.removed) return this; if (a.constructor == X) a = a[0]; a.Group.parentNode.insertBefore(this.Group, a.Group); ab(this, a, this.paper); return this }; var Hb = / progid:\S+Blur\([^\)]+\)/g; s[p].blur = function (a) {
			var b = this.node.runtimeStyle, c = b.filter; c = c.replace(Hb, A); if (+a !== 0) { this.attrs.blur = a; b.filter = c + N + Fa + ".Blur(pixelradius=" + (+a || 1.5) + ")"; b.margin = l.format("-{0}px 0 0 -{0}px", Q(+a || 1.5)) } else {
				b.filter =
				c; b.margin = 0; delete this.attrs.blur
			}
		}; fb = function (a, b, c, d) { var f = S("group"), e = S("oval"); f.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px"; f.coordsize = qa; f.coordorigin = a.coordorigin; f[x](e); e = new s(e, f, a); e.type = "circle"; ea(e, { stroke: "#000", fill: "none" }); e.attrs.cx = b; e.attrs.cy = c; e.attrs.r = d; e.setBox({ x: b - d, y: c - d, width: d * 2, height: d * 2 }); a.canvas[x](f); return e }; function mb(a, b, c, d, f) {
			return f ? l.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",
			a + f, b, c - f * 2, f, -f, d - f * 2, f * 2 - c, f * 2 - d) : l.format("M{0},{1}l{2},0,0,{3},{4},0z", a, b, c, d, -c)
		} gb = function (a, b, c, d, f, e) { var g = mb(b, c, d, f, e); a = a.path(g); var h = a.attrs; a.X = h.x = b; a.Y = h.y = c; a.W = h.width = d; a.H = h.height = f; h.r = e; h.path = g; a.type = "rect"; return a }; hb = function (a, b, c, d, f) {
			var e = S("group"), g = S("oval"); e.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px"; e.coordsize = qa; e.coordorigin = a.coordorigin; e[x](g); g = new s(g, e, a); g.type = "ellipse"; ea(g, { stroke: "#000" }); g.attrs.cx =
			b; g.attrs.cy = c; g.attrs.rx = d; g.attrs.ry = f; g.setBox({ x: b - d, y: c - f, width: d * 2, height: f * 2 }); a.canvas[x](e); return g
		}; ib = function (a, b, c, d, f, e) { var g = S("group"), h = S("image"); g.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px"; g.coordsize = qa; g.coordorigin = a.coordorigin; h.src = b; g[x](h); h = new s(h, g, a); h.type = "image"; h.attrs.src = b; h.attrs.x = c; h.attrs.y = d; h.attrs.w = f; h.attrs.h = e; h.setBox({ x: c, y: d, width: f, height: e }); a.canvas[x](g); return h }; jb = function (a, b, c, d) {
			var f = S("group"),
			e = S("shape"), g = e.style, h = S("path"), i = S("textpath"); f.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px"; f.coordsize = qa; f.coordorigin = a.coordorigin; h.v = l.format("m{0},{1}l{2},{1}", Q(b * 10), Q(c * 10), Q(b * 10) + 1); h.textpathok = true; g.width = a.width; g.height = a.height; i.string = D(d); i.on = true; e[x](i); e[x](h); f[x](e); g = new s(i, f, a); g.shape = e; g.textpath = h; g.type = "text"; g.attrs.text = d; g.attrs.x = b; g.attrs.y = c; g.attrs.w = 1; g.attrs.h = 1; ea(g, { font: ta.font, stroke: "none", fill: "#000" });
			g.setBox(); a.canvas[x](f); return g
		}; kb = function (a, b) { var c = this.canvas.style; a == +a && (a += "px"); b == +b && (b += "px"); c.width = a; c.height = b; c.clip = "rect(0 " + a + " " + b + " 0)"; return this }; var S; C.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"); try { !C.namespaces.rvml && C.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"); S = function (a) { return C.createElement("<rvml:" + a + ' class="rvml">') } } catch (Pb) { S = function (a) { return C.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } Ca =
		function () {
			var a = Xa[K](0, arguments), b = a.container, c = a.height, d = a.width, f = a.x; a = a.y; if (!b) throw new Error("VML container not found."); var e = new H, g = e.canvas = C.createElement("div"), h = g.style; f = f || 0; a = a || 0; d = d || 512; c = c || 342; d == +d && (d += "px"); c == +c && (c += "px"); e.width = 1000; e.height = 1000; e.coordsize = na * 1000 + N + na * 1000; e.coordorigin = "0 0"; e.span = C.createElement("span"); e.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"; g[x](e.span); h.cssText =
			l.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", d, c); if (b == 1) { C.body[x](g); h.left = f + "px"; h.top = a + "px"; h.position = "absolute" } else b.firstChild ? b.insertBefore(g, b.firstChild) : b[x](g); Ia.call(e, e, l.fn); return e
		}; H[p].clear = function () {
			this.canvas.innerHTML = A; this.span = C.createElement("span"); this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"; this.canvas[x](this.span); this.bottom =
			this.top = null
		}; H[p].remove = function () { this.canvas.parentNode.removeChild(this.canvas); for (var a in this) this[a] = bb(a); return true }
	} H[p].safari = navigator.vendor == "Apple Computer, Inc." && (navigator.userAgent.match(/Version\/(.*?)\s/)[1] < 4 || aa.navigator.platform.slice(0, 2) == "iP") ? function () { var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: "none" }); aa.setTimeout(function () { a.remove() }) } : function () { }; function Ib() { this.returnValue = false } function Jb() { return this.originalEvent.preventDefault() }
	function Kb() { this.cancelBubble = true } function Lb() { return this.originalEvent.stopPropagation() } var Mb = function () {
		if (C.addEventListener) return function (a, b, c, d) { var f = Da && Ea[b] ? Ea[b] : b; function e(g) { if (Da && Ea[z](b)) for (var h = 0, i = g.targetTouches && g.targetTouches.length; h < i; h++) if (g.targetTouches[h].target == a) { i = g; g = g.targetTouches[h]; g.originalEvent = i; g.preventDefault = Jb; g.stopPropagation = Lb; break } return c.call(d, g) } a.addEventListener(f, e, false); return function () { a.removeEventListener(f, e, false); return true } };
		else if (C.attachEvent) return function (a, b, c, d) { function f(g) { g = g || aa.event; g.preventDefault = g.preventDefault || Ib; g.stopPropagation = g.stopPropagation || Kb; return c.call(d, g) } a.attachEvent("on" + b, f); function e() { a.detachEvent("on" + b, f); return true } return e }
	}(), $ = []; function Ka(a) {
		for (var b = a.clientX, c = a.clientY, d, f = $.length; f--;) {
			d = $[f]; if (Da) for (var e = a.touches.length, g; e--;) {
				g = a.touches[e]; if (g.identifier == d.el._drag.id) {
					b = g.clientX; c = g.clientY; (a.originalEvent ? a.originalEvent : a).preventDefault();
					break
				}
			} else a.preventDefault(); d.move && d.move.call(d.el, b - d.el._drag.x, c - d.el._drag.y, b, c)
		}
	} function La() { l.unmousemove(Ka).unmouseup(La); for (var a = $.length, b; a--;) { b = $[a]; b.el._drag = {}; b.end && b.end.call(b.el) } $ = [] } for (da = Ra[o]; da--;) (function (a) {
		l[a] = s[p][a] = function (b) { if (l.is(b, "function")) { this.events = this.events || []; this.events.push({ name: a, f: b, unbind: Mb(this.shape || this.node || C, a, b, this) }) } return this }; l["un" + a] = s[p]["un" + a] = function (b) {
			for (var c = this.events, d = c[o]; d--;) if (c[d].name == a && c[d].f ==
			b) { c[d].unbind(); c.splice(d, 1); !c.length && delete this.events; return this } return this
		}
	})(Ra[da]); s[p].hover = function (a, b) { return this.mouseover(a).mouseout(b) }; s[p].unhover = function (a, b) { return this.unmouseover(a).unmouseout(b) }; s[p].drag = function (a, b, c) {
		this._drag = {}; this.mousedown(function (d) {
			(d.originalEvent || d).preventDefault(); this._drag.x = d.clientX; this._drag.y = d.clientY; this._drag.id = d.identifier; b && b.call(this, d.clientX, d.clientY); !$.length && l.mousemove(Ka).mouseup(La); $.push({
				el: this, move: a,
				end: c
			})
		}); return this
	}; s[p].undrag = function (a, b, c) { for (b = $.length; b--;) { $[b].el == this && $[b].move == a && $[b].end == c && $.splice(b, 1); !$.length && l.unmousemove(Ka).unmouseup(La) } }; H[p].circle = function (a, b, c) { return fb(this, a || 0, b || 0, c || 0) }; H[p].rect = function (a, b, c, d, f) { return gb(this, a || 0, b || 0, c || 0, d || 0, f || 0) }; H[p].ellipse = function (a, b, c, d) { return hb(this, a || 0, b || 0, c || 0, d || 0) }; H[p].path = function (a) { a && !l.is(a, ga) && !l.is(a[0], U) && (a += A); return db(l.format[K](l, arguments), this) }; H[p].image = function (a, b, c,
	d, f) { return ib(this, a || "about:blank", b || 0, c || 0, d || 0, f || 0) }; H[p].text = function (a, b, c) { return jb(this, a || 0, b || 0, c || A) }; H[p].set = function (a) { arguments[o] > 1 && (a = Array[p].splice.call(arguments, 0, arguments[o])); return new X(a) }; H[p].setSize = kb; H[p].top = H[p].bottom = null; H[p].raphael = l; function nb() { return this.x + N + this.y } s[p].resetScale = function () { if (this.removed) return this; this._.sx = 1; this._.sy = 1; this.attrs.scale = "1 1" }; s[p].scale = function (a, b, c, d) {
		if (this.removed) return this; if (a == null && b == null) return {
			x: this._.sx,
			y: this._.sy, toString: nb
		}; b = b || a; !+b && (b = a); var f, e, g = this.attrs; if (a != 0) {
			var h = this.getBBox(), i = h.x + h.width / 2, j = h.y + h.height / 2; f = a / this._.sx; e = b / this._.sy; c = +c || c == 0 ? c : i; d = +d || d == 0 ? d : j; h = ~~(a / v.abs(a)); var m = ~~(b / v.abs(b)), n = this.node.style, r = c + (i - c) * f; j = d + (j - d) * e; switch (this.type) {
				case "rect": case "image": var q = g.width * h * f, k = g.height * m * e; this.attr({ height: k, r: g.r * ba(h * f, m * e), width: q, x: r - q / 2, y: j - k / 2 }); break; case "circle": case "ellipse": this.attr({ rx: g.rx * h * f, ry: g.ry * m * e, r: g.r * ba(h * f, m * e), cx: r, cy: j });
					break; case "text": this.attr({ x: r, y: j }); break; case "path": i = Ha(g.path); for (var t = true, L = 0, B = i[o]; L < B; L++) { var w = i[L], J = sa.call(w[0]); if (!(J == "M" && t)) { t = false; if (J == "A") { w[i[L][o] - 2] *= f; w[i[L][o] - 1] *= e; w[1] *= h * f; w[2] *= m * e; w[5] = +!(h + m ? !+w[5] : +w[5]) } else if (J == "H") { J = 1; for (var ia = w[o]; J < ia; J++) w[J] *= f } else if (J == "V") { J = 1; for (ia = w[o]; J < ia; J++) w[J] *= e } else { J = 1; for (ia = w[o]; J < ia; J++) w[J] *= J % 2 ? f : e } } } e = xa(i); f = r - e.x - e.width / 2; e = j - e.y - e.height / 2; i[0][1] += f; i[0][2] += e; this.attr({ path: i }); break
			} if (this.type in
			{ text: 1, image: 1 } && (h != 1 || m != 1)) if (this.transformations) { this.transformations[2] = "scale("[M](h, ",", m, ")"); this.node[W]("transform", this.transformations[R](N)); f = h == -1 ? -g.x - (q || 0) : g.x; e = m == -1 ? -g.y - (k || 0) : g.y; this.attr({ x: f, y: e }); g.fx = h - 1; g.fy = m - 1 } else { this.node.filterMatrix = Fa + ".Matrix(M11="[M](h, ", M12=0, M21=0, M22=", m, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')"); n.filter = (this.node.filterMatrix || A) + (this.node.filterOpacity || A) } else if (this.transformations) {
				this.transformations[2] =
				A; this.node[W]("transform", this.transformations[R](N)); g.fx = 0; g.fy = 0
			} else { this.node.filterMatrix = A; n.filter = (this.node.filterMatrix || A) + (this.node.filterOpacity || A) } g.scale = [a, b, c, d][R](N); this._.sx = a; this._.sy = b
		} return this
	}; s[p].clone = function () { if (this.removed) return null; var a = this.attr(); delete a.scale; delete a.translation; return this.paper[this.type]().attr(a) }; var ob = Z(function (a, b, c, d, f, e, g, h, i) {
		for (var j = 0, m, n = 0; n < 1.01; n += 0.01) {
			var r = la(a, b, c, d, f, e, g, h, n); n && (j += E(E(m.x - r.x, 2) + E(m.y - r.y,
			2), 0.5)); if (j >= i) return r; m = r
		}
	}); function Ma(a, b) {
		return function (c, d, f) {
			c = wa(c); for (var e, g, h, i, j = "", m = {}, n = 0, r = 0, q = c.length; r < q; r++) {
				h = c[r]; if (h[0] == "M") { e = +h[1]; g = +h[2] } else {
					i = Nb(e, g, h[1], h[2], h[3], h[4], h[5], h[6]); if (n + i > d) {
						if (b && !m.start) { e = ob(e, g, h[1], h[2], h[3], h[4], h[5], h[6], d - n); j += ["C", e.start.x, e.start.y, e.m.x, e.m.y, e.x, e.y]; if (f) return j; m.start = j; j = ["M", e.x, e.y + "C", e.n.x, e.n.y, e.end.x, e.end.y, h[5], h[6]][R](); n += i; e = +h[5]; g = +h[6]; continue } if (!a && !b) {
							e = ob(e, g, h[1], h[2], h[3], h[4], h[5], h[6],
							d - n); return { x: e.x, y: e.y, alpha: e.alpha }
						}
					} n += i; e = +h[5]; g = +h[6]
				} j += h
			} m.end = j; e = a ? n : b ? m : l.findDotsAtSegment(e, g, h[1], h[2], h[3], h[4], h[5], h[6], 1); e.alpha && (e = { x: e.x, y: e.y, alpha: e.alpha }); return e
		}
	} var Nb = Z(function (a, b, c, d, f, e, g, h) { for (var i = { x: 0, y: 0 }, j = 0, m = 0; m < 1.01; m += 0.01) { var n = la(a, b, c, d, f, e, g, h, m); m && (j += E(E(i.x - n.x, 2) + E(i.y - n.y, 2), 0.5)); i = n } return j }), pb = Ma(1), Ba = Ma(), Na = Ma(0, 1); s[p].getTotalLength = function () { if (this.type == "path") { if (this.node.getTotalLength) return this.node.getTotalLength(); return pb(this.attrs.path) } };
	s[p].getPointAtLength = function (a) { if (this.type == "path") { if (this.node.getPointAtLength) return this.node.getPointAtLength(a); return Ba(this.attrs.path, a) } }; s[p].getSubpath = function (a, b) { if (this.type == "path") { if (v.abs(this.getTotalLength() - b) < 1.0E-6) return Na(this.attrs.path, a).end; b = Na(this.attrs.path, b, 1); return a ? Na(b, a).end : b } }; l.easing_formulas = {
		linear: function (a) { return a }, "<": function (a) { return E(a, 3) }, ">": function (a) { return E(a - 1, 3) + 1 }, "<>": function (a) {
			a *= 2; if (a < 1) return E(a, 3) / 2; a -= 2; return (E(a,
			3) + 2) / 2
		}, backIn: function (a) { var b = 1.70158; return a * a * ((b + 1) * a - b) }, backOut: function (a) { a -= 1; var b = 1.70158; return a * a * ((b + 1) * a + b) + 1 }, elastic: function (a) { if (a == 0 || a == 1) return a; var b = 0.3, c = b / 4; return E(2, -10 * a) * v.sin((a - c) * 2 * v.PI / b) + 1 }, bounce: function (a) { var b = 7.5625, c = 2.75; if (a < 1 / c) a = b * a * a; else if (a < 2 / c) { a -= 1.5 / c; a = b * a * a + 0.75 } else if (a < 2.5 / c) { a -= 2.25 / c; a = b * a * a + 0.9375 } else { a -= 2.625 / c; a = b * a * a + 0.984375 } return a }
	}; var T = { length: 0 }; function qb() {
		var a = +new Date; for (var b in T) if (b != "length" && T[z](b)) {
			var c =
			T[b]; if (c.stop || c.el.removed) { delete T[b]; T[o]-- } else {
				var d = a - c.start, f = c.ms, e = c.easing, g = c.from, h = c.diff, i = c.to, j = c.t, m = c.prev || 0, n = c.el, r = c.callback, q = {}, k; if (d < f) {
					r = l.easing_formulas[e] ? l.easing_formulas[e](d / f) : d / f; for (var t in g) if (g[z](t)) {
						switch (Ga[t]) {
							case "along": k = r * f * h[t]; i.back && (k = i.len - k); e = Ba(i[t], k); n.translate(h.sx - h.x || 0, h.sy - h.y || 0); h.x = e.x; h.y = e.y; n.translate(e.x - h.sx, e.y - h.sy); i.rot && n.rotate(h.r + e.alpha, e.x, e.y); break; case P: k = +g[t] + r * f * h[t]; break; case "colour": k = "rgb(" + [Oa(Q(g[t].r +
							r * f * h[t].r)), Oa(Q(g[t].g + r * f * h[t].g)), Oa(Q(g[t].b + r * f * h[t].b))][R](",") + ")"; break; case "path": k = []; e = 0; for (var L = g[t][o]; e < L; e++) { k[e] = [g[t][e][0]]; for (var B = 1, w = g[t][e][o]; B < w; B++) k[e][B] = +g[t][e][B] + r * f * h[t][e][B]; k[e] = k[e][R](N) } k = k[R](N); break; case "csv": switch (t) {
								case "translation": k = h[t][0] * (d - m); e = h[t][1] * (d - m); j.x += k; j.y += e; k = k + N + e; break; case "rotation": k = +g[t][0] + r * f * h[t][0]; g[t][1] && (k += "," + g[t][1] + "," + g[t][2]); break; case "scale": k = [+g[t][0] + r * f * h[t][0], +g[t][1] + r * f * h[t][1], 2 in i[t] ? i[t][2] :
								A, 3 in i[t] ? i[t][3] : A][R](N); break; case "clip-rect": k = []; for (e = 4; e--;) k[e] = +g[t][e] + r * f * h[t][e]; break
							} break
						} q[t] = k
					} n.attr(q); n._run && n._run.call(n)
				} else { if (i.along) { e = Ba(i.along, i.len * !i.back); n.translate(h.sx - (h.x || 0) + e.x - h.sx, h.sy - (h.y || 0) + e.y - h.sy); i.rot && n.rotate(h.r + e.alpha, e.x, e.y) } (j.x || j.y) && n.translate(-j.x, -j.y); i.scale && (i.scale += A); n.attr(i); delete T[b]; T[o]--; n.in_animation = null; l.is(r, "function") && r.call(n) } c.prev = d
			}
		} l.svg && n && n.paper && n.paper.safari(); T[o] && aa.setTimeout(qb)
	} function Oa(a) {
		return Y(ba(a,
		255), 0)
	} function Aa(a, b) { if (a == null) return { x: this._.tx, y: this._.ty, toString: nb }; this._.tx += +a; this._.ty += +b; switch (this.type) { case "circle": case "ellipse": this.attr({ cx: +a + this.attrs.cx, cy: +b + this.attrs.cy }); break; case "rect": case "image": case "text": this.attr({ x: +a + this.attrs.x, y: +b + this.attrs.y }); break; case "path": var c = Ha(this.attrs.path); c[0][1] += +a; c[0][2] += +b; this.attr({ path: c }); break } return this } s[p].animateWith = function (a, b, c, d, f) {
		T[a.id] && (b.start = T[a.id].start); return this.animate(b, c, d,
		f)
	}; s[p].animateAlong = rb(); s[p].animateAlongBack = rb(1); function rb(a) { return function (b, c, d, f) { var e = { back: a }; l.is(d, "function") ? (f = d) : (e.rot = d); b && b.constructor == s && (b = b.attrs.path); b && (e.along = b); return this.animate(e, c, f) } } s[p].onAnimation = function (a) { this._run = a || 0; return this }; s[p].animate = function (a, b, c, d) {
		if (l.is(c, "function") || !c) d = c || null; var f = {}, e = {}, g = {}; for (var h in a) if (a[z](h)) if (Ga[z](h)) {
			f[h] = this.attr(h); f[h] == null && (f[h] = ta[h]); e[h] = a[h]; switch (Ga[h]) {
				case "along": var i = pb(a[h]),
				j = Ba(a[h], i * !!a.back), m = this.getBBox(); g[h] = i / b; g.tx = m.x; g.ty = m.y; g.sx = j.x; g.sy = j.y; e.rot = a.rot; e.back = a.back; e.len = i; a.rot && (g.r = y(this.rotate()) || 0); break; case P: g[h] = (e[h] - f[h]) / b; break; case "colour": f[h] = l.getRGB(f[h]); i = l.getRGB(e[h]); g[h] = { r: (i.r - f[h].r) / b, g: (i.g - f[h].g) / b, b: (i.b - f[h].b) / b }; break; case "path": i = wa(f[h], e[h]); f[h] = i[0]; j = i[1]; g[h] = []; i = 0; for (m = f[h][o]; i < m; i++) { g[h][i] = [0]; for (var n = 1, r = f[h][i][o]; n < r; n++) g[h][i][n] = (j[i][n] - f[h][i][n]) / b } break; case "csv": j = D(a[h])[G](V); i = D(f[h])[G](V);
					switch (h) { case "translation": f[h] = [0, 0]; g[h] = [j[0] / b, j[1] / b]; break; case "rotation": f[h] = i[1] == j[1] && i[2] == j[2] ? i : [0, j[1], j[2]]; g[h] = [(j[0] - f[h][0]) / b, 0, 0]; break; case "scale": a[h] = j; f[h] = D(f[h])[G](V); g[h] = [(j[0] - f[h][0]) / b, (j[1] - f[h][1]) / b, 0, 0]; break; case "clip-rect": f[h] = D(f[h])[G](V); g[h] = []; for (i = 4; i--;) g[h][i] = (j[i] - f[h][i]) / b; break } e[h] = j
			}
		} this.stop(); this.in_animation = 1; T[this.id] = { start: a.start || +new Date, ms: b, easing: c, from: f, diff: g, to: e, el: this, callback: d, t: { x: 0, y: 0 } }; ++T[o] == 1 && qb(); return this
	};
	s[p].stop = function () { T[this.id] && T[o]--; delete T[this.id]; return this }; s[p].translate = function (a, b) { return this.attr({ translation: a + " " + b }) }; s[p][O] = function () { return "Rapha\u00ebl\u2019s object" }; l.ae = T; function X(a) { this.items = []; this[o] = 0; this.type = "set"; if (a) for (var b = 0, c = a[o]; b < c; b++) if (a[b] && (a[b].constructor == s || a[b].constructor == X)) { this[this.items[o]] = this.items[this.items[o]] = a[b]; this[o]++ } } X[p][F] = function () {
		for (var a, b, c = 0, d = arguments[o]; c < d; c++) if ((a = arguments[c]) && (a.constructor == s ||
		a.constructor == X)) { b = this.items[o]; this[b] = this.items[b] = a; this[o]++ } return this
	}; X[p].pop = function () { delete this[this[o]--]; return this.items.pop() }; for (var Pa in s[p]) if (s[p][z](Pa)) X[p][Pa] = function (a) { return function () { for (var b = 0, c = this.items[o]; b < c; b++) this.items[b][a][K](this.items[b], arguments); return this } }(Pa); X[p].attr = function (a, b) { if (a && l.is(a, U) && l.is(a[0], "object")) { b = 0; for (var c = a[o]; b < c; b++) this.items[b].attr(a[b]) } else { c = 0; for (var d = this.items[o]; c < d; c++) this.items[c].attr(a, b) } return this };
	X[p].animate = function (a, b, c, d) { (l.is(c, "function") || !c) && (d = c || null); var f = this.items[o], e = f, g, h = this, i; d && (i = function () { !--f && d.call(h) }); c = l.is(c, ga) ? c : i; for (g = this.items[--e].animate(a, b, c, i) ; e--;) this.items[e].animateWith(g, a, b, c, i); return this }; X[p].insertAfter = function (a) { for (var b = this.items[o]; b--;) this.items[b].insertAfter(a); return this }; X[p].getBBox = function () {
		for (var a = [], b = [], c = [], d = [], f = this.items[o]; f--;) {
			var e = this.items[f].getBBox(); a[F](e.x); b[F](e.y); c[F](e.x + e.width); d[F](e.y +
			e.height)
		} a = ba[K](0, a); b = ba[K](0, b); return { x: a, y: b, width: Y[K](0, c) - a, height: Y[K](0, d) - b }
	}; X[p].clone = function (a) { a = new X; for (var b = 0, c = this.items[o]; b < c; b++) a[F](this.items[b].clone()); return a }; l.registerFont = function (a) {
		if (!a.face) return a; this.fonts = this.fonts || {}; var b = { w: a.w, face: {}, glyphs: {} }, c = a.face["font-family"]; for (var d in a.face) if (a.face[z](d)) b.face[d] = a.face[d]; if (this.fonts[c]) this.fonts[c][F](b); else this.fonts[c] = [b]; if (!a.svg) {
			b.face["units-per-em"] = ha(a.face["units-per-em"], 10);
			for (var f in a.glyphs) if (a.glyphs[z](f)) { c = a.glyphs[f]; b.glyphs[f] = { w: c.w, k: {}, d: c.d && "M" + c.d[I](/[mlcxtrv]/g, function (g) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[g] || "M" }) + "z" }; if (c.k) for (var e in c.k) if (c[z](e)) b.glyphs[f].k[e] = c.k[e] }
		} return a
	}; H[p].getFont = function (a, b, c, d) {
		d = d || "normal"; c = c || "normal"; b = +b || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[b] || 400; if (l.fonts) {
			var f = l.fonts[a]; if (!f) {
				a = new RegExp("(^|\\s)" + a[I](/[^\w\d\s+!~.:_-]/g, A) + "(\\s|$)", "i"); for (var e in l.fonts) if (l.fonts[z](e)) if (a.test(e)) {
					f =
					l.fonts[e]; break
				}
			} var g; if (f) { e = 0; for (a = f[o]; e < a; e++) { g = f[e]; if (g.face["font-weight"] == b && (g.face["font-style"] == c || !g.face["font-style"]) && g.face["font-stretch"] == d) break } } return g
		}
	}; H[p].print = function (a, b, c, d, f, e) {
		e = e || "middle"; var g = this.set(), h = D(c)[G](A), i = 0; l.is(d, c) && (d = this.getFont(d)); if (d) {
			c = (f || 16) / d.face["units-per-em"]; var j = d.face.bbox.split(V); f = +j[0]; e = +j[1] + (e == "baseline" ? j[3] - j[1] + +d.face.descent : (j[3] - j[1]) / 2); j = 0; for (var m = h[o]; j < m; j++) {
				var n = j && d.glyphs[h[j - 1]] || {}, r = d.glyphs[h[j]];
				i += j ? (n.w || d.w) + (n.k && n.k[h[j]] || 0) : 0; r && r.d && g[F](this.path(r.d).attr({ fill: "#000", stroke: "none", translation: [i, 0] }))
			} g.scale(c, c, f, e).translate(a - f, b - e)
		} return g
	}; var Ob = /\{(\d+)\}/g; l.format = function (a, b) { var c = l.is(b, U) ? [0][M](b) : arguments; a && l.is(a, ga) && c[o] - 1 && (a = a[I](Ob, function (d, f) { return c[++f] == null ? A : c[f] })); return a || A }; l.ninja = function () { Qa.was ? (Raphael = Qa.is) : delete Raphael; return l }; l.el = s[p]; return l
}();
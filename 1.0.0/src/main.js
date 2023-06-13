// I have yet to figure out why this is a function
// This function is never called and is just used to obfuscate the code
// I think it should be an object
function k5GmD() { }

/// Reference version
const mainObj = k5GmD;

/// The window/this/globalThis object
mainObj.Z0 = (function () {
    // If the globalThis object exists, return it
    if (typeof globalThis === "object") return globalThis;
    // If the window object exists, return it
    return typeof this === "undefined" ? window : this;
})();

mainObj.Y$pQ_ = Y$pQ_;
l8pJOD(mainObj.Z0);

const getStringMp = (i) => {
    const strMap = {
        0: "get-memory-info",
        1: "url",
        2: "__awaiter",
        3: "check-kiosk",
        4: "system",
        5: "type",
        6: "done",
        7: "now",
        8: "call-restart",
        9: "version",
        10: "enterprise",
        11: "https://chromebook-api.app.collegeboard.org/api.json",
        12: "",
        13: "toString",
        14: "restart",
        15: "apply",
        16: "then",
        17: "get-device-info",
        18: "next",
        19: "timezone",
        20: "memory",
        21: "runtime",
        22: "currentTime",
        23: "onMessageExternal",
        24: "getPlatformInfo",
        25: "getManifest",
        26: "addListener",
        27: "getTimezoneOffset",
        28: "N/A",
        29: "throw",
        30: "display",
        31: "platform",
        32: "getInfo",
        33: "get-web-app-url",
        34: "getDeviceSerialNumber",
        35: "message",
        36: "serialNumber",
        37: "json",
        38: "deviceAttributes",
        39: "value",
        40: "get-serial-number"
    };
    return strMap[i];
};

/// The string map store
mainObj.C_ = {
    /// String map
    k6jD7q6: getStringMp,
    /// String map
    stringMap: getStringMp,
};

mainObj.i$ = mainObj.C_.stringMap;
mainObj.M$ = mainObj.C_.stringMap;
k5GmD.i6 = function () {
    return "function" === typeof k5GmD.x2.X8A$Wxb
        ? k5GmD.x2.X8A$Wxb.apply(k5GmD.x2, arguments)
        : k5GmD.x2.X8A$Wxb;
};
k5GmD.G8 = (function () {
    for (var c = 2; 9 !== c;)
        switch (c) {
            case 1:
                return (
                    (k[2] = void 0),
                    (k[4] = {}),
                    (k[4].m3$TP5U = function () {
                        for (var g = 2; 90 !== g;)
                            switch (g) {
                                case 68:
                                    g = 68;
                                    break;
                                case 11:
                                    b[5] = {};
                                    b[5].J0 = ["C3"];
                                    g = 20;
                                    break;
                                case 67:
                                    return (k[2] = 73), 85;
                                case 52:
                                    b[9].P_EdH8(b[59]);
                                    b[9].P_EdH8(b[61]);
                                    b[9].P_EdH8(b[64]);
                                    g = 49;
                                    break;
                                case 58:
                                    b[34] = 0;
                                    g = 57;
                                    break;
                                case 70:
                                    b[34]++;
                                    g = 57;
                                    break;
                                case 6:
                                    b[4] = {};
                                    b[4].J0 = ["x4"];
                                    b[4].Y_ = function () {
                                        return !/\060\x78\u0036\061/.G05F5l(
                                            function () {
                                                return String.fromCharCode(97);
                                            } + []
                                        );
                                    };
                                    b[8] = b[4];
                                    g = 11;
                                    break;
                                case 71:
                                    b[27]++;
                                    g = 76;
                                    break;
                                case 48:
                                    b[9].P_EdH8(b[90]);
                                    b[9].P_EdH8(b[8]);
                                    g = 46;
                                    break;
                                case 4:
                                    b[9] = [];
                                    b[2] = {};
                                    b[2].J0 = ["x4"];
                                    b[2].Y_ = function () {
                                        return !/\u0062\u0074\157\x61/.G05F5l(
                                            function () {
                                                return btoa("=");
                                            } + []
                                        );
                                    };
                                    b[7] = b[2];
                                    g = 6;
                                    break;
                                case 22:
                                    b[19].J0 = ["C3"];
                                    b[19].Y_ = function () {
                                        return "function" === typeof R4pDEA;
                                    };
                                    b[57] = b[19];
                                    b[74] = {};
                                    b[74].J0 = ["C3"];
                                    b[74].Y_ = function () {
                                        return "function" === typeof s_rDKB;
                                    };
                                    b[64] = b[74];
                                    g = 30;
                                    break;
                                case 20:
                                    b[5].Y_ = function () {
                                        return "function" === typeof J_N$DL;
                                    };
                                    b[6] = b[5];
                                    b[3] = {};
                                    b[3].J0 = ["x4"];
                                    g = 16;
                                    break;
                                case 76:
                                    g = b[27] < b[42][b[83]].length ? 75 : 70;
                                    break;
                                case 40:
                                    b[59] = b[14];
                                    b[91] = {};
                                    b[91].J0 = ["x4"];
                                    g = 37;
                                    break;
                                case 5:
                                    return 67;
                                case 16:
                                    b[3].Y_ = function () {
                                        return /\x58/.G05F5l(
                                            function () {
                                                return "X";
                                            } + []
                                        );
                                    };
                                    b[1] = b[3];
                                    b[52] = {};
                                    b[52].J0 = ["x4"];
                                    b[52].Y_ = function () {
                                        return /3D/.G05F5l(
                                            function () {
                                                return escape("=");
                                            } + []
                                        );
                                    };
                                    b[61] = b[52];
                                    b[19] = {};
                                    g = 22;
                                    break;
                                case 57:
                                    g = b[34] < b[9].length ? 56 : 69;
                                    break;
                                case 59:
                                    b[21] = "K3";
                                    g = 58;
                                    break;
                                case 56:
                                    b[42] = b[9][b[34]];
                                    try {
                                        b[87] = b[42][b[51]]() ? b[43] : b[77];
                                    } catch (u) {
                                        b[87] = b[77];
                                    }
                                    g = 77;
                                    break;
                                case 46:
                                    b[9].P_EdH8(b[6]);
                                    b[9].P_EdH8(b[1]);
                                    b[75] = [];
                                    b[43] = "O6";
                                    g = 63;
                                    break;
                                case 1:
                                    g = k[2] ? 5 : 4;
                                    break;
                                case 2:
                                    var b = [arguments];
                                    g = 1;
                                    break;
                                case 69:
                                    g = (function (u) {
                                        for (var n = 2; 22 !== n;)
                                            switch (n) {
                                                case 13:
                                                    e[6][e[7][b[21]]] = function () {
                                                        for (var f = 2; 9 !== f;)
                                                            switch (f) {
                                                                case 3:
                                                                    return d[4];
                                                                case 2:
                                                                    var d = [arguments, , , , {}];
                                                                    f = 5;
                                                                    break;
                                                                case 5:
                                                                    (d[4].h = 0), (d[4].t = 0), (f = 3);
                                                            }
                                                    }.apply(this, arguments);
                                                    n = 12;
                                                    break;
                                                case 18:
                                                    e[5] = !1;
                                                    n = 17;
                                                    break;
                                                case 19:
                                                    e[9]++;
                                                    n = 7;
                                                    break;
                                                case 10:
                                                    n = e[7][b[28]] === b[43] ? 20 : 19;
                                                    break;
                                                case 6:
                                                    e[7] = e[0][0][e[9]];
                                                    n = 14;
                                                    break;
                                                case 2:
                                                    var e = [arguments];
                                                    n = 1;
                                                    break;
                                                case 4:
                                                    e[6] = {};
                                                    e[1] = [];
                                                    e[9] = 0;
                                                    n = 8;
                                                    break;
                                                case 15:
                                                    e[4] = e[1][e[9]];
                                                    e[8] = e[6][e[4]].h / e[6][e[4]].t;
                                                    n = 26;
                                                    break;
                                                case 20:
                                                    e[6][e[7][b[21]]].h += !0;
                                                    n = 19;
                                                    break;
                                                case 23:
                                                    return e[5];
                                                case 5:
                                                    return;
                                                case 11:
                                                    e[6][e[7][b[21]]].t += !0;
                                                    n = 10;
                                                    break;
                                                case 8:
                                                    e[9] = 0;
                                                    n = 7;
                                                    break;
                                                case 1:
                                                    n = 0 === e[0][0].length ? 5 : 4;
                                                    break;
                                                case 14:
                                                    n =
                                                        "undefined" === typeof e[6][e[7][b[21]]] ? 13 : 11;
                                                    break;
                                                case 25:
                                                    e[5] = !0;
                                                    n = 24;
                                                    break;
                                                case 12:
                                                    e[1].P_EdH8(e[7][b[21]]);
                                                    n = 11;
                                                    break;
                                                case 24:
                                                    e[9]++;
                                                    n = 16;
                                                    break;
                                                case 17:
                                                    e[9] = 0;
                                                    n = 16;
                                                    break;
                                                case 7:
                                                    n = e[9] < e[0][0].length ? 6 : 18;
                                                    break;
                                                case 26:
                                                    n = 0.5 <= e[8] ? 25 : 24;
                                                    break;
                                                case 16:
                                                    n = e[9] < e[1].length ? 15 : 23;
                                            }
                                    })(b[75])
                                        ? 68
                                        : 67;
                                    break;
                                case 37:
                                    b[91].Y_ = function () {
                                        return /\x78\170/.G05F5l(
                                            function () {
                                                return "x".repeat(2);
                                            } + []
                                        );
                                    };
                                    b[90] = b[91];
                                    b[9].P_EdH8(b[57]);
                                    b[9].P_EdH8(b[7]);
                                    g = 52;
                                    break;
                                case 75:
                                    b[45] = {};
                                    b[45][b[21]] = b[42][b[83]][b[27]];
                                    b[45][b[28]] = b[87];
                                    b[75].P_EdH8(b[45]);
                                    g = 71;
                                    break;
                                case 77:
                                    b[27] = 0;
                                    g = 76;
                                    break;
                                case 43:
                                    b[14] = {};
                                    b[14].J0 = ["x4"];
                                    b[14].Y_ = function () {
                                        return /\170/.G05F5l(
                                            function () {
                                                return "x";
                                            } + []
                                        );
                                    };
                                    g = 40;
                                    break;
                                case 30:
                                    b[55] = {};
                                    b[55].J0 = ["C3"];
                                    b[55].Y_ = function () {
                                        var u = !1,
                                            n = [];
                                        try {
                                            for (var e in console) n.P_EdH8(e);
                                            u = 0 === n.length;
                                        } catch (f) { }
                                        return u;
                                    };
                                    b[25] = b[55];
                                    g = 43;
                                    break;
                                case 49:
                                    b[9].P_EdH8(b[25]);
                                    g = 48;
                                    break;
                                case 63:
                                    (b[77] = "G1"),
                                        (b[83] = "J0"),
                                        (b[28] = "q$"),
                                        (b[51] = "Y_"),
                                        (g = 59);
                            }
                    }),
                    k[4]
                );
            case 2:
                var k = [arguments];
                c = 1;
        }
})();
k5GmD.s3 = function () {
    return "function" === typeof k5GmD.x2.X8A$Wxb
        ? k5GmD.x2.X8A$Wxb.apply(k5GmD.x2, arguments)
        : k5GmD.x2.X8A$Wxb;
};
function l8pJOD(c) {
    function k(t) {
        for (; ;) return arguments[0].Math;
    }
    function g(t, v, q, l, m) {
        for (var r = 2; 13 !== r;)
            switch (r) {
                case 2:
                    var h = [arguments];
                    h[6] = "";
                    h[6] = "";
                    h[6] = "ty";
                    r = 3;
                    break;
                case 6:
                    h[1] = !1;
                    try {
                        for (r = 2; 13 !== r;)
                            switch (r) {
                                case 2:
                                    h[5] = {};
                                    h[8] = (0, h[0][1])(h[0][0]);
                                    h[2] = [h[8], h[8].prototype][h[0][3]];
                                    r = 4;
                                    break;
                                case 4:
                                    r =
                                        h[2].hasOwnProperty(h[0][4]) &&
                                            h[2][h[0][4]] === h[2][h[0][2]]
                                            ? 3
                                            : 9;
                                    break;
                                case 9:
                                    h[2][h[0][4]] = h[2][h[0][2]];
                                    h[5].set = function (x) {
                                        for (var w = 2; 5 !== w;)
                                            switch (w) {
                                                case 2:
                                                    (h[2][h[0][2]] = arguments[0]), (w = 5);
                                            }
                                    };
                                    h[5].get = function () {
                                        for (var x = 2; 12 !== x;)
                                            switch (x) {
                                                case 6:
                                                    return (
                                                        (w[2] += w[4]),
                                                        (w[2] += w[1]),
                                                        typeof h[2][h[0][2]] == w[2]
                                                            ? void 0
                                                            : h[2][h[0][2]]
                                                    );
                                                case 2:
                                                    var w = [arguments, ""];
                                                    w[1] = "ined";
                                                    w[4] = "";
                                                    x = 3;
                                                    break;
                                                case 3:
                                                    (w[4] = "f"),
                                                        (w[7] = ""),
                                                        (w[7] = "unde"),
                                                        (w[2] = w[7]),
                                                        (x = 6);
                                            }
                                    };
                                    r = 6;
                                    break;
                                case 3:
                                    return;
                                case 6:
                                    h[5].enumerable = h[1];
                                    try {
                                        for (var y = 2; 3 !== y;)
                                            switch (y) {
                                                case 2:
                                                    (h[7] = h[4]),
                                                        (h[7] += h[3]),
                                                        (h[7] += h[6]),
                                                        h[0][0].Object[h[7]](h[2], h[0][4], h[5]),
                                                        (y = 3);
                                            }
                                    } catch (x) { }
                                    r = 13;
                            }
                    } catch (x) { }
                    r = 13;
                    break;
                case 3:
                    (h[3] = "roper"),
                        (h[4] = ""),
                        (h[4] = "defineP"),
                        (h[1] = !0),
                        (r = 6);
            }
    }
    function b(t) {
        for (var v = 2; 5 !== v;)
            switch (v) {
                case 2:
                    var q = [arguments];
                    v = 1;
                    break;
                case 1:
                    return q[0][0];
            }
    }
    function u(t) {
        for (; ;) return arguments[0].String;
    }
    function n(t) {
        for (; ;) return arguments[0].Function;
    }
    function e(t) {
        for (; ;) return arguments[0].RegExp;
    }
    function f(t) {
        for (; ;) return arguments[0].Array;
    }
    for (var d = 2; 183 !== d;)
        switch (d) {
            case 187:
                p(b, a[47], a[16], a[23]);
                d = 186;
                break;
            case 13:
                a[7] = "J";
                a[6] = "";
                a[6] = "2";
                a[2] = "";
                d = 20;
                break;
            case 122:
                a[71] += a[19];
                a[71] += a[34];
                a[55] = a[37];
                a[55] += a[69];
                a[55] += a[51];
                a[25] = a[22];
                a[25] += a[50];
                d = 148;
                break;
            case 105:
                a[47] += a[54];
                a[45] = a[39];
                a[45] += a[89];
                a[45] += a[63];
                d = 132;
                break;
            case 141:
                a[61] = a[79];
                a[61] += a[93];
                a[61] += a[2];
                a[99] = a[69];
                d = 137;
                break;
            case 132:
                a[53] = a[81];
                a[53] += a[73];
                a[53] += a[33];
                a[59] = a[80];
                a[59] += a[43];
                a[59] += a[36];
                d = 126;
                break;
            case 71:
                a[33] = "N";
                a[98] = "__";
                a[42] = "e";
                a[48] = "J_";
                d = 67;
                break;
            case 185:
                p(b, a[74], a[16], a[40]);
                d = 184;
                break;
            case 93:
                a[40] = a[11];
                a[40] += a[85];
                a[40] += a[90];
                a[74] = a[85];
                a[74] += a[82];
                a[74] += a[30];
                a[68] = a[65];
                d = 115;
                break;
            case 188:
                p(e, "test", a[32], a[45]);
                d = 187;
                break;
            case 101:
                a[32] = 0;
                a[32] = 1;
                a[16] = 4;
                a[16] = 6;
                d = 97;
                break;
            case 16:
                a[8] = "";
                a[8] = "S";
                a[76] = "";
                a[14] = "1q";
                a[76] = "";
                a[76] = "h6";
                d = 23;
                break;
            case 137:
                a[99] += a[6];
                a[99] += a[84];
                a[70] = a[7];
                a[70] += a[3];
                d = 168;
                break;
            case 8:
                a[9] = "v_";
                a[3] = "";
                a[3] = "_L";
                a[7] = "";
                d = 13;
                break;
            case 40:
                a[69] = "j";
                a[37] = "";
                a[37] = "w0g3";
                a[34] = "mu";
                a[19] = "";
                a[19] = "d";
                d = 53;
                break;
            case 158:
                p(f, "sort", a[32], a[75]);
                d = 157;
                break;
            case 109:
                a[23] += a[33];
                a[23] += a[88];
                a[47] = a[85];
                a[47] += a[85];
                d = 105;
                break;
            case 159:
                p(k, "random", a[16], a[52]);
                d = 158;
                break;
            case 168:
                a[70] += a[4];
                a[86] = a[1];
                a[86] += a[14];
                a[86] += a[9];
                d = 164;
                break;
            case 53:
                a[83] = "";
                a[83] = "47";
                a[36] = "";
                a[36] = "";
                d = 49;
                break;
            case 20:
                a[2] = "O";
                a[5] = "";
                a[5] = "ztt";
                a[8] = "";
                d = 16;
                break;
            case 126:
                a[58] = a[60];
                a[58] += a[83];
                a[58] += a[44];
                a[71] = a[20];
                d = 122;
                break;
            case 78:
                a[77] = "";
                a[77] = "8";
                a[38] = "dH";
                a[21] = "P_E";
                d = 101;
                break;
            case 67:
                a[29] = "";
                a[29] = "A";
                a[10] = "4pDE";
                a[65] = "";
                d = 88;
                break;
            case 63:
                a[81] = "";
                a[81] = "R5j5";
                a[20] = "D_r";
                a[88] = "";
                a[88] = "$DL";
                a[89] = "F";
                d = 57;
                break;
            case 155:
                p(u, "split", a[32], a[71]);
                d = 154;
                break;
            case 148:
                a[25] += a[62];
                a[75] = a[69];
                a[75] += a[97];
                a[75] += a[31];
                a[52] = a[76];
                a[52] += a[8];
                a[52] += a[5];
                d = 141;
                break;
            case 153:
                p(n, "apply", a[32], a[59]);
                d = 189;
                break;
            case 57:
                a[60] = "i8c";
                a[43] = "5hl";
                a[28] = "";
                a[39] = "G05";
                d = 76;
                break;
            case 162:
                p(b, "String", a[16], a[70]);
                d = 161;
                break;
            case 2:
                var a = [arguments, ""];
                a[1] = "";
                a[1] = "h";
                a[4] = "";
                a[4] = "rx";
                d = 8;
                break;
            case 23:
                a[84] = "H26T";
                a[31] = "";
                a[31] = "1e";
                a[97] = "";
                a[93] = "M";
                a[97] = "3BM";
                a[79] = "o67P";
                d = 31;
                break;
            case 88:
                a[65] = "R";
                a[30] = "";
                a[30] = "ual";
                a[85] = "";
                a[85] = "_";
                a[82] = "_resid";
                d = 82;
                break;
            case 157:
                p(f, "join", a[32], a[25]);
                d = 156;
                break;
            case 82:
                a[90] = "rDKB";
                a[11] = "";
                a[11] = "";
                a[11] = "s";
                d = 78;
                break;
            case 49:
                a[36] = "uP";
                a[50] = "z";
                a[80] = "";
                a[80] = "Z";
                a[73] = "";
                a[73] = "B";
                a[44] = "6";
                d = 63;
                break;
            case 186:
                p(b, a[56], a[16], a[68]);
                d = 185;
                break;
            case 76:
                a[63] = "5l";
                a[28] = "optimiz";
                a[98] = "";
                a[54] = "abstract";
                a[98] = "";
                d = 71;
                break;
            case 156:
                p(b, "decodeURI", a[16], a[55]);
                d = 155;
                break;
            case 31:
                a[62] = "";
                a[62] = "qxL";
                a[22] = "";
                a[22] = "d9";
                d = 44;
                break;
            case 161:
                p(u, "fromCharCode", a[16], a[99]);
                d = 160;
                break;
            case 97:
                a[16] = 0;
                a[24] = a[21];
                a[24] += a[38];
                a[24] += a[77];
                d = 93;
                break;
            case 44:
                a[51] = "";
                a[51] = "";
                a[51] = "Y";
                a[69] = "";
                d = 40;
                break;
            case 160:
                p(b, "Math", a[16], a[61]);
                d = 159;
                break;
            case 154:
                p(f, "unshift", a[32], a[58]);
                d = 153;
                break;
            case 164:
                var p = function (t, v, q, l) {
                    for (var m = 2; 5 !== m;)
                        switch (m) {
                            case 2:
                                (m = [arguments]),
                                    g(a[0][0], m[0][0], m[0][1], m[0][2], m[0][3]),
                                    (m = 5);
                        }
                };
                d = 163;
                break;
            case 163:
                p(u, "charCodeAt", a[32], a[86]);
                d = 162;
                break;
            case 184:
                p(f, "push", a[32], a[24]);
                d = 183;
                break;
            case 115:
                a[68] += a[10];
                a[68] += a[29];
                a[56] = a[98];
                a[56] += a[28];
                a[56] += a[42];
                a[23] = a[48];
                d = 109;
                break;
            case 189:
                p(f, "splice", a[32], a[53]), (d = 188);
        }
}
k5GmD.B9 = function () {
    return "function" === typeof k5GmD.G8.m3$TP5U
        ? k5GmD.G8.m3$TP5U.apply(k5GmD.G8, arguments)
        : k5GmD.G8.m3$TP5U;
};
k5GmD.t$ = function () {
    return "function" === typeof k5GmD.G8.m3$TP5U
        ? k5GmD.G8.m3$TP5U.apply(k5GmD.G8, arguments)
        : k5GmD.G8.m3$TP5U;
};
k5GmD.x2 = (function () {
    var c = function (k, g) {
        var b = g & 65535;
        return ((((g - b) * k) | 0) + ((b * k) | 0)) | 0;
    };
    return {
        X8A$Wxb: function (k, g, b) {
            for (var u = g & -4, n = 0; n < u; n += 4) {
                var e =
                    (k.h1qv_(n) & 255) |
                    ((k.h1qv_(n + 1) & 255) << 8) |
                    ((k.h1qv_(n + 2) & 255) << 16) |
                    ((k.h1qv_(n + 3) & 255) << 24);
                e = c(e, 3432918353);
                e = ((e & 131071) << 15) | (e >>> 17);
                e = c(e, 461845907);
                b ^= e;
                b = ((b & 524287) << 13) | (b >>> 19);
                b = (5 * b + 3864292196) | 0;
            }
            e = 0;
            switch (g % 4) {
                case 3:
                    e = (k.h1qv_(u + 2) & 255) << 16;
                case 2:
                    e |= (k.h1qv_(u + 1) & 255) << 8;
                case 1:
                    (e |= k.h1qv_(u) & 255),
                        (e = c(e, 3432918353)),
                        (e = c(((e & 131071) << 15) | (e >>> 17), 461845907)),
                        (b ^= e);
            }
            b ^= g;
            b = c(b ^ (b >>> 16), 2246822507);
            b = c(b ^ (b >>> 13), 3266489909);
            return b ^ (b >>> 16);
        },
    };
})();
var b2UUkB = 2;
for (k5GmD.B9(); 13 !== b2UUkB;)
    switch (b2UUkB) {
        case 2:
            b2UUkB = 99 < k5GmD.M$(15) ? 1 : 5;
            break;
        case 6:
            b2UUkB = k5GmD.M$(18) > k5GmD.i$(29) ? 14 : 13;
            break;
        case 7:
            k5GmD.T3 = 97;
            b2UUkB = 6;
            break;
        case 3:
            b2UUkB = 60 !== k5GmD.M$(33) ? 9 : 8;
            break;
        case 14:
            k5GmD.o7 = 65;
            b2UUkB = 13;
            break;
        case 4:
            k5GmD.u$ = 15;
            b2UUkB = 3;
            break;
        case 5:
            b2UUkB = k5GmD.M$(1) <= k5GmD.i$(39) ? 4 : 3;
            break;
        case 9:
            k5GmD.t2 = 2;
            b2UUkB = 8;
            break;
        case 1:
            k5GmD.Q7 = 84;
            b2UUkB = 5;
            break;
        case 8:
            b2UUkB = k5GmD.M$(31) < k5GmD.M$(7) ? 7 : 6;
    }
function Y$pQ_() {
    return "$$Z)?G9qY52R&%22%5B4oA%259%6075I%7C*L-~Q%25/%048#Vm8%5B5oA%259m%3C%25O#(z%3C!O!!g,%3ED%25?%1546U3,N%3CoU%25?@8?h5%20K%3C!%1A*%3EF7oB%25;@:6g49%5B01S4(Ze%25G,8Le4C4%60Z%3C!O!!%047&K%22(%5Be4C4%60D%3C%3EI24%040=@/q%5C+?%1A%1F%12H.2O4(%5Be0N%25.Bt8O/%3EBe!C39H+'%1A34Z-6K%7C%3EP*'C-q%5D%20#C%7C)F76%1A28G-:K%25qG6$%1A#,E5~T%25%3E%5D8!R%7C;L+%20O/#%15%3C=R%25?Y+:U%25qA-'V3w%06v0N2%22D%3C1I/&%048#On,Y)%7DE/!E%3C4C%22%22H+7%08/?Nv2V)cC*%3CH%7Cq%5D6%00R2$G%3EoT%25%3E%5D8!R%7C%12v8$G)9L+oG0=E%20oR((Ge4C4%60M%3C%25O#(%040=@/qG%3C+R%7C9@46%5C/#Le'I%139%5B0=A%7C?L*'G29%1546K/?Pe!S.9@46%1A#8%5B+6H4%19@46%1A'(%5D%10=@/qA-'V3w%06v0N2%22D%3C1I/&%048#On,Y)%7DE/!E%3C4C%22%22H+7%08/?Nv2V)cC*%3CH%7C%22G%146U3,N%3C%16%5E4(%5B72J%7C*L-%03J!9O6!K%09#O6oA%259d8=O&(Z-oG$)e0%20R%25#L+oP!!%5C%3CoA%259%7D0%3EC:%22G%3C%1C@&%3EL-oho%0C%15-;C.q%5D1!I7qN%3C'r)%20L#%3CH%25%02O?%20C4";
}
(function () {
    for (
        var c = k5GmD, k = [arguments, 1080999779, -404456511, 1, 2];
        c.i6(k[3].toString(), k[3].toString().length, 63962) !== k[2];
        k[3]++
    )
        (k[5] = {}), (k[4] += 2);
    c.i6(k[4].toString(), k[4].toString().length, 21389) !== k[1] && (k[5] = {});
    k[5] = {};
    k[5][919] = function () {
        var g = [arguments];
        c.t$();
        g[1] =
            (this && this[c.i$(2)]) ||
            function (b, u, n, e) {
                c.t$();
                var f = [arguments];
                return new (f[0][2] || (f[0][2] = Promise))(function (d, a) {
                    function p(l) {
                        var m = [arguments];
                        c.t$();
                        try {
                            m[3] = -1034810192;
                            m[7] = 861906224;
                            m[5] = 2;
                            for (
                                m[4] = 1;
                                c.s3(m[4].toString(), m[4].toString().length, 21423) !== m[3];
                                m[4]++
                            )
                                v(f[0][3][c.i$(12)](m[0][0])), (m[5] += 2);
                            c.i6(m[5].toString(), m[5].toString().length, 710) !== m[7] &&
                                v(f[0][3][c.M$(12)](m[0][0]));
                            v(f[0][3][c.i$(18)](m[0][0]));
                        } catch (r) {
                            (0, q[0][1])(r);
                        }
                    }
                    function t(l) {
                        c.t$();
                        var m = [arguments];
                        try {
                            v(f[0][3][c.M$(29)](m[0][0]));
                        } catch (r) {
                            (0, q[0][1])(r);
                        }
                    }
                    function v(l) {
                        var m = [arguments];
                        c.B9();
                        m[0][0][c.i$(6)]
                            ? (0, q[0][0])(m[0][0][c.M$(39)])
                            : ((m[4] = m[0][0][c.M$(39)]),
                                m[4] instanceof f[0][2]
                                    ? m[4]
                                    : new f[0][2](function (r) {
                                        var h = [arguments];
                                        c.B9();
                                        (0, h[0][0])(m[4]);
                                    }))[c.i$(16)](p, t);
                    }
                    var q = [arguments];
                    v((f[0][3] = f[0][3][c.M$(15)](f[0][0], f[0][1] || []))[c.M$(18)]());
                    c.t$();
                });
            };
        chrome[c.i$(21)][c.M$(23)][c.i$(26)](function (b, u, n) {
            var e = [arguments];
            return (0, g[1])(this, void 0, void 0, function* () {
                c.B9();
                var f = [arguments];
                if (c.M$(33) === e[0][0][c.i$(5)])
                    yield (function () {
                        c.B9();
                        return (0, g[1])(this, void 0, void 0, function* () {
                            var d = [arguments];
                            d[8] = yield fetch(c.M$(11));
                            c.t$();
                            d[6] = 1531692321;
                            d[3] = 149180526;
                            d[9] = 2;
                            for (
                                d[1] = 1;
                                c.s3(d[1].toString(), d[1].toString().length, 24457) !== d[6];

                            )
                                return yield d[8][c.i$(12)]();
                            return c.s3(d[9].toString(), d[9].toString().length, 88473) !==
                                d[3]
                                ? yield d[8][c.i$(12)]()
                                : yield d[8][c.i$(37)]();
                        });
                    })()[c.i$(16)]((d) => {
                        c.t$();
                        var a = e[0],
                            p = a[2];
                        c.t$();
                        var t = {};
                        var v = 2;
                        for (
                            var q = 1;
                            -418680911 !== c.s3(q.toString(), q.toString().length, 56141);
                            q++
                        )
                            (t[c.M$(1)] = d[c.M$(1)]), (v += 2);
                        -107248548 !== c.i6(v.toString(), v.toString().length, 52405) &&
                            (t[c.M$(1)] = d[c.M$(1)]);
                        p.call(a, t);
                    });
                else if (c.M$(0) === e[0][0][c.i$(5)])
                    (f[6] = yield chrome[c.i$(4)][c.i$(20)][c.i$(32)]()),
                        (0, e[0][2])(f[6]);
                else if (c.i$(17) === e[0][0][c.i$(5)]) {
                    f[4] = -371805782;
                    f[9] = 930687026;
                    f[8] = 2;
                    for (
                        f[95] = 1;
                        c.i6(f[95].toString(), f[95].toString().length, 19027) !== f[4];
                        f[95]++
                    )
                        (f[2] = yield chrome[c.M$(32)][c.i$(4)]()),
                            (f[1] = yield chrome[c.i$(32)][c.i$(32)][c.M$(32)]()),
                            (f[8] += 2);
                    c.s3(f[8].toString(), f[8].toString().length, 83182) !== f[9] &&
                        ((f[2] = yield chrome[c.i$(21)][c.M$(24)]()),
                            (f[1] = yield chrome[c.M$(4)][c.i$(20)][c.M$(32)]()));
                    f[7] = c.M$(28);
                    yield chrome[c.M$(10)][c.i$(38)][c.i$(34)]((d) => {
                        c.B9();
                        var a = 2;
                        for (
                            var p = 1;
                            -1895475451 !== c.i6(p.toString(), p.toString().length, 71637);
                            p++
                        )
                            (f[7] = d), (a += 2);
                        -1671453890 !== c.i6(a.toString(), a.toString().length, 49101) &&
                            (f[7] = d);
                        f[7] = d;
                    });
                    f[3] = yield chrome[c.M$(4)][c.i$(30)][c.i$(32)]();
                    f[5] = yield* function* () {
                        var d = [arguments, {}];
                        d[1][c.i$(9)] = chrome[c.M$(21)][c.i$(25)]()[c.M$(9)];
                        d[1][c.M$(36)] = f[7];
                        d[1][c.M$(31)] = f[2];
                        d[1][c.M$(20)] = f[1];
                        d[1][c.M$(30)] = f[3];
                        d[1][c.M$(22)] = Date[c.i$(7)]();
                        d[1][c.M$(19)] = new Date()[c.i$(27)]()[c.i$(13)]();
                        return d[1];
                    }[c.M$(15)](this, arguments);
                    (0, e[0][2])(f[5]);
                } else if (c.i$(8) == e[0][0][c.M$(5)]) chrome[c.i$(21)][c.i$(14)]();
                else if (c.M$(3) == e[0][0][c.M$(5)])
                    void 0 ===
                        (yield chrome[c.i$(10)][c.i$(38)][c.i$(34)]((d) => {
                            d = e[0];
                            var a = d[2];
                            a: {
                                var p = {};
                                for (
                                    p[c.i$(35)] = !0;
                                    1275945280 !==
                                    c.i6((1).toString(), (1).toString().length, 37088);

                                )
                                    break a;
                                p =
                                    1019972741 !==
                                        c.i6((2).toString(), (2).toString().length, 66299)
                                        ? p
                                        : void 0;
                            }
                            a.call(d, p);
                        })) &&
                        (0, e[0][2])(
                            yield* function* () {
                                var d = [arguments];
                                d[8] = 1582813431;
                                d[1] = 1804995727;
                                d[2] = 2;
                                for (
                                    d[6] = 1;
                                    c.s3(d[6].toString(), d[6].toString().length, 99819) !== d[8];
                                    d[6]++
                                )
                                    (d[4] = {}), (d[4][c.i$(35)] = !1), (d[2] += 2);
                                c.i6(d[2].toString(), d[2].toString().length, 84421) !== d[1] &&
                                    ((d[4] = {}), (d[4][c.i$(12)] = -4));
                                return d[4];
                            }[c.i$(15)](this, arguments)
                        );
                else if (c.M$(40) === e[0][0][c.M$(5)])
                    (f[31] = yield new Promise((d) => {
                        c.t$();
                        var a = 2;
                        for (
                            var p = 1;
                            1380490552 !== c.i6(p.toString(), p.toString().length, 10600);
                            p++
                        )
                            chrome[c.i$(34)][c.M$(38)][c.M$(38)]((t) => d(t)), (a += 2);
                        if (1158988575 !== c.s3(a.toString(), a.toString().length, 8472))
                            chrome[c.M$(10)][c.i$(38)][c.i$(34)]((t) => d(t));
                    })),
                        (0, e[0][2])(null != f[31] ? f[31] : null);
                else
                    (0, e[0][2])(
                        yield* function* () {
                            var d = [arguments, , , , 1940066962];
                            c.B9();
                            d[2] = -859490327;
                            d[8] = 2;
                            for (
                                d[6] = 1;
                                c.i6(d[6].toString(), d[6].toString().length, 47175) !== d[4];
                                d[6]++
                            )
                                (d[9] = {}), (d[9][c.M$(35)] = c.M$(28)), (d[8] += 2);
                            c.i6(d[8].toString(), d[8].toString().length, 2795) !== d[2] &&
                                ((d[9] = {}), (d[9][c.M$(28)] = c.i$(28)));
                            return d[9];
                        }[c.M$(15)](this, arguments)
                    );
            });
        });
    };
    c.B9();
    return k[5];
})[k5GmD.i$(15)](this)[919]();

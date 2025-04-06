// Crypt funcs
function random(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min)
  return num
}



function randomInArray(arr) {
  if (!arr) return ""
  return arr[Math.floor(Math.random() * arr.length)]
}


export function code72(str, key) {
  
  const cods72 = {
    "a": ["J1", "LJ", "S0", "GA", "AR12", "FQ7777", "Q7777"],
    "h": ["J2", "JJ2", "hEh", "2JJ", "4K4", "K4", "GDF"],
    "g": ["R2", "xrx", "XJA", "A1lPa7"],
    "b": ["J3", "DJ3", "d3"],
    "e": ["J4", "YA", "DJ4", "F1T192", "Kw2bjdixi2Ahdfr2beci9d9292", "EwVw", "AwOxq"],
    "x": ["XY", "XX", "XLXL"],
    "y": ["YX", "YY", "YLYL"],
    "q": ["wW", "R91", "xr", "vW", "vvW"],
    "v": ["W", "D10e", "J1902H", "1010", "f140"],
    "k": ["R90", "k-k-k", "R70", "R60", "R71", "R72", "R19000A"],
    "c": ["WWW", "k15", "C2C", "cAwx9", "FrAp"],
    "l": ["f200", "JAj", "f100", "Eaoeq", "Mwox9w"],
    "r": ["&", "M&qnwc", "RR13", "FaF", "Nwn9c"],
    "d": ["Jq1wnoc","R6", "mDm", "b"],
    "n": ["RF2", "J1100", "jjj", "Knw9cq10"],
    "t": ["FA12", "AF12", "GJQ", "fRs1"],
    null: ["J0"],
    " ": ["__", "———", ".."],
    "$": "SS1",
    "%": "SS2",
    "*": "SS3",
    "&": "SS4",
    "^": "**",
    "+": "-",
    "×": "/",
    "¿": ["TL", "SS6"],
    "?": ["LT", "SS5"]
  }
  const cods72_2 = {
    "a": ["Z1", "PL", "X0", "HA", "JR34", "ZP8888", "T4444"],
    "h": ["L3", "JJ4", "hHh", "3KK", "5L5", "M5", "HRF"],
    "g": ["Q3", "yrz", "YCB", "B2mQa8"],
    "b": ["M3", "DJ4", "b4"],
    "e": ["T5", "AB", "DD5", "G2T303", "Lz3cjdixe3Bhdfo3d8d9293", "EzVx", "FwPx"],
    "x": ["XZ", "ZZ", "XMZM"],
    "y": ["ZX", "ZZ", "ZLZL"],
    "q": ["yX", "S92", "xr2", "wT", "wwT"],
    "v": ["U", "F12c", "K1803K", "1210", "g240"],
    "k": ["S80", "l-l-l", "S60", "S50", "S61", "S62", "S18000B"],
    "c": ["WWWX", "l25", "D3D", "dBx9", "KrUp"],
    "l": ["g400", "JKj", "f500", "Dopex", "Xwox7v"],
    "r": ["^", "L&vnwc", "SS21", "FaG", "Pwn3c"],
    "d": ["Kq3wnoc", "Q8", "mMm", "d"],
    "n": ["TF4", "K2200", "jjj2", "Lkw9cr11"],
    "t": ["FB13", "AG23", "HJR", "gRs2"],
    "null": ["A1"],
    " ": ["Q__L", "-----", "..9"],
    "$": ["XX1"],
    "%": ["XX2"],
    "*": ["XX3"],
    "&": ["XX4"],
    "^": "++",
    "+": "_",
    "×": "//",
    "¿": ["XR", "XX6"],
    "?": ["RX", "XX5"]
  };
  const cods72_3 = {
    "a": ["Z1A", "LM", "S7", "ZK", "AK21", "LZ5555", "V9999"],
    "h": ["M4", "KK5", "hJj", "7LL", "6P6", "N6", "YHR"],
    "g": ["T4", "zrz", "ZBC", "C3nPb9"],
    "b": ["N4", "EK4", "c5"],
    "e": ["R6", "AB", "ED6", "H3Y404", "Hz5djsx7YBd9hfo3d8d9294", "FwVx", "GvQx"],
    "x": ["ZX1", "ZZY", "ZYZY"],
    "y": ["ZW", "WW", "ZZZZ"],
    "q": ["yY", "W83", "xr3", "rX", "vvX"],
    "v": ["U1", "F34b", "B3403", "2202", "z340"],
    "k": ["K70", "l-m-l", "K50", "S40", "S51", "S52", "K19001C"],
    "c": ["ZZZ", "l35", "F4F", "fAx9", "KsVp"],
    "l": ["g600", "LKj", "h400", "Poxz", "Yxox2v"],
    "r": ["*", "Z&lnwc", "F221", "GaH", "Qwn7c"],
    "d": ["Kx4wnoc", "Q9", "mMm2", "y"],
    "n": ["TF5", "M3300", "jjj3", "Rhw9cq13"],
    "t": ["FB14", "AG24", "HJS", "iRt3"],
    "null": ["B2"],
    " ": ["___", "— — —2", "..3"],
    "$": ["YY1"],
    "%": ["YY2"],
    "*": ["YY3"],
    "&": ["YY4"],
    "^": "++1",
    "+": "_1",
    "×": "//1",
    "¿": ["XR2", "YY6"],
    "?": ["RX1", "YY5"]
  };
  
  const cods72_4 = {
    "a": ["Z2", "SM", "T2", "ZL", "AK23", "LZ4444", "V8888"],
    "h": ["L5", "KK6", "hKk", "8LL", "9P9", "O9", "YHR"],
    "g": ["U5", "zaz", "YCB", "C4nNb9"],
    "b": ["O5", "FK5", "d6"],
    "e": ["S7", "AB", "GF7", "I4T505", "Hz5djsx8ZBf9hfo3d8d9295", "FwWx", "DgQx"],
    "x": ["ZXX", "ZXY", "ZYXZ"],
    "y": ["ZY", "WWY", "ZYYZ"],
    "q": ["yZ", "V93", "xr4", "rY", "vvY"],
    "v": ["W2", "F45d", "B4504", "3303", "z450"],
    "k": ["L60", "m-n-m", "S50", "S41", "S61", "S62", "L19002D"],
    "c": ["XXY", "m45", "H5H", "gBz9", "KrTp"],
    "l": ["g700", "LKk", "i500", "Pyzb", "Yxox3v"],
    "r": ["#", "Z&tnwc", "F322", "GaI", "Twn5c"],
    "d": ["Kx5wnoc", "P10", "mMn", "z"],
    "n": ["TF6", "K4400", "jjj4", "Tnw9cr14"],
    "t": ["FB15", "AG25", "HJT", "jRt4"],
    "null": ["C3"],
    " ": ["____", "— — —3", "..4"],
    "$": ["ZZ1"],
    "%": ["ZZ2"],
    "*": ["ZZ3"],
    "&": ["ZZ4"],
    "^": "++2",
    "+": "_2",
    "×": "//2",
    "¿": ["YR", "ZZ6"],
    "?": ["RY", "ZZ5"]
  };
  const cods72_5 = {
    "a": ["J10004", "BM5", "t32", "lz3", "AK43", "LG1444", "V8188"],
    "h": ["Lj5", "Kkj6", "hdk", "8LLDA", "9P8", "19", "YrR"],
    "g": ["U6", "zaz", "YCB", "C4nNb9"],
    "b": ["15", "FK11", "b6"],
    "e": ["7SjsjA", "BA", "GF7", "I9T905", "Hz5djsxAjndiwfo3d8d9295", "Hxbe", "Q29d9"],
    "x": ["ZYF", "ZXF", "ZYYF"],
    "y": ["ZSF", "WFY", "ZYFZ"],
    "q": ["zDq", "V43", "xl5", "rY", "vvX"],
    "v": ["W2", "F45d", "B4504", "3303", "z450"],
    "k": ["L60", "m-n-m", "S50", "S41", "Ssj1", "Ssj32", "L19ej"],
    "c": ["XXY", "m45", "H5H", "gBz9", "KrTp"],
    "l": ["g700", "LKk", "i500", "Pyzb", "Yxox3v"],
    "r": ["+^", "Z&jq2nwc", "F322", "G-I", "Twn5c"],
    "d": ["Kx5wjnoc", "P1je0", "mMn", "z"],
    "n": ["TF6", "K4400", "jjj4", "Tnw9cr14"],
    "t": ["TF61", "AG16", "HJaT", "jRf19"],
    "null": ["C3"],
    " ": ["____", "— —49", "..5"],
    "$": ["SZ1"],
    "%": ["SZ2"],
    "*": ["SZ3"],
    "&": ["SZ4"],
    "^": "+1h5",
    "+": "v2",
    "×": "/2",
    "¿": ["R5", "Z96"],
    "?": ["Y5", "Z95"]
  };
  const cods72_6 = { "a": ["B2001", "LM4", "p77", "nz9", "AD67", "XC300", "Q789"], "h": ["Mk2", "Lqj9", "hrb", "6TTRA", "1P2", "82", "XtT"], "g": ["W8", "zaq", "XRB", "C9bNk7"], "b": ["24", "MT22", "b8"], "e": ["8KlakZ", "CD", "GY6", "K2L505", "Pz6dksxZpfnjgf6d3d7831", "Hcze", "N82g1"], "x": ["ZXG", "ZYX", "ZYYX"], "y": ["WTF", "QXY", "ZYXZ"], "q": ["zFq", "T57", "yl2", "rZ", "vvC"], "v": ["V9", "L68g", "A8901", "6634", "y451"], "k": ["J78", "m-p-p", "S22", "S65", "Ssk9", "Ssk44", "L81dk"], "c": ["XZX", "m67", "H9K", "qBv7", "TgUp"], "l": ["g900", "MLp", "j600", "Tzbc", "Zxov3w"], "r": ["-#", "Y&qt4xzb", "F879", "H-J", "Qxt9p"], "d": ["Kp6wjkoq", "O3lx5", "nNq", "x"], "n": ["RJ8", "T6600", "jjj7", "Tzv8qr25"], "t": ["RJ81", "VG18", "JKaT", "lTf24"], "null": ["C9"], " ": ["____", "— — —7", "..5"], "$": ["SX1"], "%": ["SX2"], "*": ["SX3"], "&": ["SX4"], "^": "+2j8", "+": "v9", "×": "/7", "¿": ["R6", "Z97"], "?": ["Y6", "Z98"] 
  };
  
  const cods72_7 = {
    "a": ["K9", "PQ7", "T88", "MX1", "BR56", "XY9999", "W1234"],
    "h": ["N7", "MM8", "hZh", "9PP", "3Q3", "P3", "JKT"],
    "g": ["V6", "xyz", "WKD", "D5oRc2"],
    "b": ["P6", "GJ6", "e7"],
    "e": ["U8", "CD", "HG8", "J5U606", "Px7ekty9ACg0jgp4e9e8306", "GxWy", "HrRy"],
    "x": ["YZ1", "YYZ", "YXYX"],
    "y": ["XW", "VV", "YWWY"],
    "q": ["xX", "U74", "yz5", "sY", "uuY"],
    "v": ["V3", "G56c", "C5604", "4404", "x560"],
    "k": ["M50", "n-o-n", "M40", "T30", "T41", "T42", "M20003E"],
    "c": ["YYY", "n56", "G6G", "hCy8", "LtWq"],
    "l": ["h800", "MJk", "j600", "Qxyz", "Zxoy4w"],
    "r": ["@", "Y&mnwc", "G432", "HbJ", "Rwn6d"],
    "d": ["Ly6xnoc", "R11", "nNn", "w"],
    "n": ["UG7", "N5500", "kkk5", "Snw8ds15"],
    "t": ["GC16", "BH26", "IKU", "kSu5"],
    "null": ["D4"],
    " ": ["_____", "— — —4", "..6"],
    "$": ["WW1"],
    "%": ["WW2"],
    "*": ["WW3"],
    "&": ["WW4"],
    "^": "++3",
    "+": "_3",
    "×": "//3",
    "¿": ["ZS", "WW6"],
    "?": ["SZ", "WW5"]
  };
  
  const cods72_8 = {
    "a": ["L10", "QR8", "U99", "NY2", "CS78", "YZ0000", "X5678"],
    "h": ["O8", "NN9", "hXh", "0QQ", "4R4", "Q4", "LMV"],
    "g": ["W7", "wyz", "XLE", "E6pSd3"],
    "b": ["Q7", "HK7", "f8"],
    "e": ["V9", "EF", "IH9", "K6V707", "Qy8fluz0BDh1khq5f0f9407", "HyXz", "IsSz"],
    "x": ["ZX2", "ZZX", "ZXZX"],
    "y": ["YV", "UU", "ZXXZ"],
    "q": ["wY", "V85", "xz6", "tZ", "vvZ"],
    "v": ["W4", "H67d", "D6705", "5505", "y670"],
    "k": ["N60", "o-p-o", "N50", "U40", "U51", "U52", "N21004F"],
    "c": ["ZZX", "o67", "H7H", "iDz9", "MuXr"],
    "l": ["i900", "NKl", "k700", "Rwyz", "Ayoz5x"],
    "r": ["!", "X&nnwc", "H543", "IcK", "Swn7e"],
    "d": ["Mz7ynoc", "S12", "oOo", "v"],
    "n": ["VH8", "O6600", "lll6", "Tnx9et16"],
    "t": ["HD17", "CI27", "JLV", "lTv6"],
    "null": ["E5"],
    " ": ["______", "— — —5", "..7"],
    "$": ["VV1"],
    "%": ["VV2"],
    "*": ["VV3"],
    "&": ["VV4"],
    "^": "++4",
    "+": "_4",
    "×": "//4",
    "¿": ["ZT", "VV6"],
    "?": ["TZ", "VV5"]
  };
  const cods72_9 = {
  "a": ["P13", "TU1", "X22", "QB5", "FV01", "BC3333", "A8901"],
  "h": ["R1", "QQ2", "hAh", "3TT", "7U7", "T7", "OPZ"],
  "g": ["Z0", "tvx", "AOH", "H9sVg6"],
  "b": ["T0", "KN0", "i1"],
  "e": ["Y2", "KL", "LK2", "N9Y010", "Tb1iowc3EGk4nkt8i3i2700", "KbAc", "LvVc"],
  "x": ["XZ5", "XXZ", "XZXZ"],
  "y": ["WS", "RR", "VAAV"],
  "q": ["tB", "Y18", "uw9", "wC", "yyC"],
  "v": ["Z7", "K90g", "G9018", "8808", "b901"],
  "k": ["Q90", "r-s-r", "Q80", "X70", "X81", "X82", "Q24007I"],
  "c": ["ZZY", "r90", "K0K", "lGc2", "PxAu"],
  "l": ["l222", "QNo", "n000", "Uybc", "Dapc8a"],
  "r": ["^", "U&qowc", "K876", "LfN", "Vwn0h"],
  "d": ["Pc0bpc", "V15", "rRr", "s"],
  "n": ["YK1", "R9900", "ooo9", "Wqa2hw19"],
  "t": ["KG20", "FL30", "MOY", "oWy9"],
  "null": ["H8"],
  " ": ["_________", "— — —8", "..0"],
  "$": ["SS1"],
  "%": ["SS2"],
  "*": ["SS3"],
  "&": ["SS4"],
  "^": "++7",
  "+": "_7",
  "×": "//7",
  "¿": ["AW", "SS6"],
  "?": ["WA", "SS5"]
};

const cods72_10 = {
  "a": ["Q14", "UV2", "Y33", "RC6", "GW12", "CD4444", "B9012"],
  "h": ["S2", "RR3", "hBh", "4UU", "8V8", "U8", "PQA"],
  "g": ["A1", "suw", "BPI", "I0tWh7"],
  "b": ["U1", "LO1", "j2"],
  "e": ["Z3", "MN", "ML3", "O0Z121", "Uc2jpxd4FHl5olu9j4j3811", "LcBd", "MwWd"],
  "x": ["YZ6", "YYA", "YAYA"],
  "y": ["VR", "QQ", "UBBU"],
  "q": ["sC", "Z29", "tv0", "xD", "zzD"],
  "v": ["A8", "L01h", "H0129", "9909", "c012"],
  "k": ["R00", "s-t-s", "R90", "Y80", "Y91", "Y92", "R25008J"],
  "c": ["AAZ", "s01", "L1L", "mHd3", "QyBv"],
  "l": ["m333", "ROp", "o111", "Vzcd", "Eaqd9b"],
  "r": ["&", "T&rpwc", "L987", "MgO", "Wwn1i"],
  "d": ["Qd1cqd", "W16", "sSs", "r"],
  "n": ["ZL2", "S0000", "ppp0", "Xrb3ix20"],
  "t": ["LH21", "GM31", "NPZ", "pXz0"],
  "null": ["I9"],
  " ": ["__________", "— — —9", "..10"],
  "$": ["TT1"],
  "%": ["TT2"],
  "*": ["TT3"],
  "&": ["TT4"],
  "^": "++8",
  "+": "_8",
  "×": "//8",
  "¿": ["BX", "TT6"],
  "?": ["XB", "TT5"]
};

const cods72_11 = {
  "a": ["R15", "VW3", "Z44", "SD7", "HX23", "DE5555", "C0123"],
  "h": ["T3", "SS4", "hCh", "5VV", "9W9", "V9", "QRB"],
  "g": ["B2", "rtv", "CQJ", "J1uXi8"],
  "b": ["V2", "MP2", "k3"],
  "e": ["A4", "OP", "NM4", "P1A232", "Vd3kqye5GIo6pmv0k5k4922", "MdCe", "NxXe"],
  "x": ["XZ7", "ZZB", "ZBZB"],
  "y": ["UQ", "PP", "VCCV"],
  "q": ["rD", "A30", "su1", "yE", "aaE"],
  "v": ["B9", "M12i", "I1230", "0010", "d123"],
  "k": ["S10", "t-u-t", "S00", "Z90", "Z01", "Z02", "S26009K"],
  "c": ["BBA", "t12", "M2M", "nIe4", "RzCw"],
  "l": ["n444", "SPq", "p222", "Wade", "Fbre0c"],
  "r": ["*", "S&sqwc", "M098", "NhP", "Xwn2j"],
  "d": ["Re2dre", "X17", "tTt", "q"],
  "n": ["AM3", "T1111", "qqq1", "Ysc4jy21"],
  "t": ["MI22", "HN32", "OQA", "qYa1"],
  "null": ["J0"],
  " ": ["_____j_____", "— —", "....."],
  "$": ["UU1"],
  "%": ["UU2"],
  "*": ["UU3"],
  "&": ["UU4"],
  "^": "++9",
  "+": "_9",
  "×": "//9",
  "¿": ["CY", "UU6"],
  "?": ["YC", "UU5"]
};

const cods72_12 = {
  "a": ["S16", "WX4", "A55", "TE8", "IY34", "EF6666", "D1234"],
  "h": ["U4", "TT5", "hDh", "6WW", "0X0", "W0", "RSC"],
  "g": ["C3", "qsu", "DRK", "K2vYj9"],
  "b": ["W3", "NQ3", "l4"],
  "e": ["B5", "QR", "ON5", "Q2B343", "We4lrzf6HJp7qnw1l6l5033", "NeDf", "OyYf"],
  "x": ["YZ8", "AAC", "ACZC"],
  "y": ["TP", "OO", "WDDW"],
  "q": ["qE", "B41", "rt2", "zF", "bbF"],
  "v": ["C0", "N23j", "J2341", "1121", "e234"],
  "k": ["T20", "u-v-u", "T10", "A00", "A11", "A12", "T27000L"],
  "c": ["CCB", "u23", "N3N", "oJf5", "SaDx"],
  "l": ["o555", "TQr", "q333", "Xbef", "Gcsf1d"],
  "r": ["#", "R&trwc", "N109", "OiQ", "Ywn3k"],
  "d": ["Sf3esf", "Y18", "uUu", "p"],
  "n": ["BN4", "U2222", "rrr2", "Ztd5kz22"],
  "t": ["NJ23", "IO33", "PRB", "rZb2"],
  "null": ["K1"],
  " ": ["_a__", "— — —1—", "..01"],
  "$": ["VV1"],
  "%": ["VV2"],
  "*": ["VV3"],
  "&": ["VV4"],
  "^": "++0",
  "+": "_0",
  "×": "//0",
  "¿": ["DZ", "VV6"],
  "?": ["ZD", "VV5"]
};

const cods72_13 = {
  "a": ["T17", "XY5", "B66", "UF9", "JZ45", "FG7777", "E2345"],
  "h": ["V5", "UU6", "hEh", "7XX", "1Y1", "X1", "STD"],
  "g": ["D4", "pru", "ESL", "L3wZk0"],
  "b": ["X4", "OR4", "m5"],
  "e": ["C6", "ST", "PO6", "R3C454", "Xf5msag7IKq8rox2m7m6144", "OfEg", "PzZg"],
  "x": ["XZ9", "BBD", "BDAD"],
  "y": ["SO", "NN", "XEEX"],
  "q": ["pF", "C52", "qs3", "aG", "ccG"],
  "v": ["D1", "O34k", "K3452", "2232", "f345"],
  "k": ["U30", "v-w-v", "U20", "B10", "B21", "B22", "U28001M"],
  "c": ["DDC", "v34", "O4O", "pKg6", "TbEy"],
  "l": ["p666", "URs", "r444", "Ycfg", "Hdtg2e"],
  "r": ["@", "Q&uswc", "O210", "PjR", "Zwn4l"],
  "d": ["Tg4ftg", "Z19", "vVv", "o"],
  "n": ["CO5", "V3333", "sss3", "Aue6la23"],
  "t": ["OK24", "JP34", "QSC", "sAc3"],
  "null": ["L2"],
  " ": ["__h_________", "— — —47", "..47"],
  "$": ["WW1"],
  "%": ["WW2"],
  "*": ["WW3"],
  "&": ["WW4"],
  "^": "++1",
  "+": "_1",
  "×": "//1",
  "¿": ["EA", "WW6"],
  "?": ["AE", "WW5"]
};

const cods72_14 = {
  "a": ["U18", "YZ6", "C77", "VG0", "KA56", "GH8888", "F3456"],
  "h": ["W6", "VV7", "hFh", "8YY", "2Z2", "Y2", "TUE"],
  "g": ["E5", "oqt", "FTM", "M4xAl1"],
  "b": ["Y5", "PS5", "n6"],
  "e": ["D7", "UV", "QP7", "S4D565", "Yg6ntbh8JLr9spy3n8n7255", "PgFh", "QaAh"],
  "x": ["YA0", "CCE", "CEBE"],
  "y": ["RN", "MM", "YFFY"],
  "q": ["oG", "D63", "pr4", "bH", "ddH"],
  "v": ["E2", "P45l", "L4563", "3343", "g456"],
  "k": ["V40", "w-x-w", "V30", "C20", "C31", "C32", "V29002N"],
  "c": ["EED", "w45", "P5P", "qLh7", "UcFz"],
  "l": ["q777", "VSr", "s555", "Zdgh", "Ieuh3f"],
  "r": ["!", "P&vtwc", "P321", "QkS", "Awn5m"],
  "d": ["Uh5guh", "A20", "wWw", "n"],
  "n": ["DP6", "W4444", "ttt4", "Bvf7mb24"],
  "t": ["PL25", "KQ35", "RTD", "tBd4"],
  "null": ["M3"],
  " ": ["_m__", "jakaka— — —", "..kaka"],
  "$": ["XX1"],
  "%": ["XX2"],
  "*": ["XX3"],
  "&": ["XX4"],
  "^": "++2",
  "+": "_2",
  "×": "//2",
  "¿": ["FB", "XX6"],
  "?": ["BF", "XX5"]
};  

const cods72_15 = {
  "a": ["V19", "ZA7", "D88", "WH1", "LB67", "HI9999", "G4567"],
  "h": ["X7", "WW8", "hGh", "9ZZ", "3A3", "Z3", "UVF"],
  "g": ["F6", "nps", "GUN", "N5yBm2"],
  "b": ["Z6", "QT6", "o7"],
  "e": ["E8", "WX", "RQ8", "T5E676", "Zh7ouci9KMt0tqz4o9o8366", "QhGi", "RbBi"],
  "x": ["ZB1", "DDF", "DFCF"],
  "y": ["QM", "LL", "ZGGZ"],
  "q": ["nH", "E74", "oq5", "cI", "eeI"],
  "v": ["F3", "Q56m", "M5674", "4454", "h567"],
  "k": ["W50", "x-y-x", "W40", "D30", "D41", "D42", "W30003O"],
  "c": ["FFE", "x56", "Q6Q", "rMi8", "VdGa"],
  "l": ["r888", "WTs", "t666", "Aehj", "Jfvi4g"],
  "r": ["$", "O&wuwc", "Q432", "RlT", "Bwn6n"],
  "d": ["Vi6hvi", "B21", "xXx", "m"],
  "n": ["EQ7", "X5555", "uuu5", "Cwg8nc25"],
  "t": ["QM26", "LR36", "SUE", "uCe5"],
  "null": ["N4"],
  " ": [".-__", "— — —4.-.", "......6"],
  "$": ["YY1"],
  "%": ["YY2"],
  "*": ["YY3"],
  "&": ["YY4"],
  "^": "++3",
  "+": "_3",
  "×": "//3",
  "¿": ["GC", "YY6"],
  "?": ["CG", "YY5"]
};

const cods72_16 = {
  "a": ["W20", "AB8", "E99", "XI2", "MC78", "IJ0000", "H5678"],
  "h": ["Y8", "XX9", "hHh", "0AA", "4B4", "A4", "VWG"],
  "g": ["G7", "mor", "HVO", "O6zCn3"],
  "b": ["A7", "RU7", "p8"],
  "e": ["F9", "YZ", "SR9", "U6F787", "Ai8pvjd0LNv1ura5p0p9477", "RiHj", "ScCj"],
  "x": ["AC2", "EEG", "EGDG"],
  "y": ["PL", "KK", "AHHZ"],
  "q": ["mI", "F85", "np6", "dJ", "ffJ"],
  "v": ["G4", "R67n", "N6785", "5565", "i678"],
  "k": ["X60", "y-z-y", "X50", "E40", "E51", "E52", "X31004P"],
  "c": ["GGF", "y67", "R7R", "sNj9", "WeHb"],
  "l": ["s999", "XUt", "u777", "Bfik", "Kgwj5h"],
  "r": ["%", "N&xvwc", "R543", "SmU", "Cwn7o"],
  "d": ["Wj7iwj", "C22", "yYy", "l"],
  "n": ["FR8", "Y6666", "vvv6", "Dxh9od26"],
  "t": ["RN27", "MS37", "TVF", "vDf6"],
  "null": ["O5"],
  " ": [" ", ". .", "ooooooo"],
  "$": ["ZZ1"],
  "%": ["ZZ2"],
  "*": ["ZZ3"],
  "&": ["ZZ4"],
  "^": "++4",
  "+": "_4",
  "×": "//4",
  "¿": ["HD", "ZZ6"],
  "?": ["DH", "ZZ5"]
};

  let str_ = str.toLowerCase()
  let str1 = 0
  
  if (key && key.length >= 17) {
    return null
  }
  
  str_ = addSalt(str_)

  const useDefault = !key || (!key.includes('x') && !key.includes('f') && !key.includes('q')) && !key.includes('r') && !key.includes('b') && !key.includes('e') && !key.includes('k');
  const useCods72_2 = key && key.includes('x');
  const useCods72_3 = key && key.includes('f');
  const useCods72_4 = key && key.includes('q');
  const useCods72_5 = key && key.includes('r');
  const useCods72_6 = key && key.includes('b');
  const useCods72_7 = key && key.includes('e');
  const useCods72_8 = key && key.includes('k');
  const useCods72_9 = key && key.includes('w');
  const useCods72_10 = key && key.includes('l');
  const useCods72_11 = key && key.includes('g');
  const useCods72_12 = key && key.includes('z');
  const useCods72_13 = key && key.includes('a');
  const useCods72_14 = key && key.includes('v');
  const useCods72_15 = key && key.includes('j');
  const useCods72_16 = key && key.includes('o');

  const getCombinedMapping = (char) => {
  const tables = [
    { use: useDefault, table: cods72 },
    { use: useCods72_2, table: cods72_2 },
    { use: useCods72_3, table: cods72_3 },
    { use: useCods72_4, table: cods72_4 },
    { use: useCods72_5, table: cods72_5 },
    { use: useCods72_6, table: cods72_6 },
    { use: useCods72_7, table: cods72_7 },
    { use: useCods72_8, table: cods72_8 },
    { use: useCods72_9, table: cods72_9 },
    { use: useCods72_10, table: cods72_10 },
    { use: useCods72_11, table: cods72_11 },
    { use: useCods72_12, table: cods72_12 },
    { use: useCods72_13, table: cods72_13 },
    { use: useCods72_14, table: cods72_14 },
    { use: useCods72_15, table: cods72_15 },
    { use: useCods72_16, table: cods72_16 }
  ];
  const keyHash = key.split("").reduce((sum, c) => sum * 31 + c.charCodeAt(0), 0);
  for (let i = blocks.length - 1; i > 0; i--) {
    const j = (keyHash + i) % (i + 1);
    [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
  }
  let combined = [];
  for (const { use, table } of tables) {
    if (use) combined = combined.concat(table[char] || []);
  }
  const shift = keyHash & 7; // 0–7 бітів
  return combined.map(item => item.split("").map(c => String.fromCharCode(c.charCodeAt(0) ^ shift)).join(""));
};
  const blockSize = random(4, 8);
  let blocks = [];
  for (let i = 0; i < str_.length; i += blockSize) {
    blocks.push(str_.slice(i, i + blockSize));
  }
  str1 = blocks.map(block => block.split("").map(char => randomInArray(getCombinedMapping(char))).join("")).join("");
  let str2 = str1.split("").reverse().join("");
  return str2;
}


function gsalt(len = random(6, 32)) {
  const lett = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/%$()[]&@#?¿"
  let salt = ''
  for (let i = 0; i < len; i++) {
    salt += lett.charAt(Math.floor(Math.random() * lett.length))
  }
  return salt
}

function addSalt(src) {
  let ssrc_ = ''
  for (let i = 0; i < src.length; i++) {
    ssrc_ += src[i] + gsalt()
  }
  return ssrc_
}

export function randomKey() {
  const keys = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i));
  const length = Math.floor(Math.random() * 16) + 1;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomInArray(keys);
  }
  return result;
}

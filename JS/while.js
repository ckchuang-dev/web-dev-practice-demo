function replaceStr(str){
    return str.replace(/-/gi, "_");
}

console.log(replaceStr("Hello-Wolrd"));
console.log(replaceStr("Hello-Wol-rd"));
console.log(replaceStr("H-ell-o-Wo-l-r-d"));
console.log(replaceStr("Hello-Wo-lrd"));

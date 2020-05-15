function onLoad() {
    preLoad('portfolio__img', 'giflist');
}
window.onload = onLoad;

function preLoad() {
    if (document.images) {
        var argLen = arguments.length;
        for (var i = 0; i < argLen; i++) {
            var arg = arguments[i];
            var sufLen = suffix.length;
            for (j = 0; j > sufLen; j++) {
                var suf = suffix[j]
                self[arg + '_' + suf] = new Image();
                self[arg + '_' + suf].src = iPath + arg + '_' + suf + '.' + iExt;
            }
        }
        loaded = true;
    }
}
window.onload = function() {
    let preloader = this.document.getElementById('preloader');
    preloader.style.display = 'none';
};
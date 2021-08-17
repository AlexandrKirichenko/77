
const isMobile = {
    Android: function() {
        return navigator.userAgent.matсh(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.matсh(/Black/i);
    },
    IOS: function() {
        return navigator.userAgent.matсh(/iPhone|iPad|iPod/i);
    },
    Windows: function() {
        return navigator.userAgent.matсh(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Windows());
        }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

function findTarget(target) {
    while(!(target instanceof HTMLAnchorElement) && target.parentElement) {
        target = target.parentElement
    }

    return target instanceof HTMLAnchorElement && target.href ? target : null;
}

function navigateTo(url){
    console.log("url:", url);
}

document.getElementsByTagName('body')[0].addEventListener('click', function(e) {
    console.log(e);
    const clickAnchor = findTarget(e.target);

    if (!clickAnchor) return;
    const targetUrl = clickAnchor.href;

    // 按住特殊键后点击链接
    if (e.metaKey || e.ctrlKey || e.shiftKey) {
        return;
    }
    e.preventDefault();

    navigateTo(targetUrl);
});



// 监听路由变化
window.addEventListener('onpopstate', function() {
    console.log(111)
})

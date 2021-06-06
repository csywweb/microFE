
function findTarget(target) {
    const target = e.target;
    while(!(target instanceof HTMLAnchorElement || target === document.body) && target.parentElement) {
        target = target.parentElement
    }

    return anchor instanceof HTMLAnchorElement && anchor.href ? anchor : null;
}

function navigateTo(url){
    
}

document.addEventListener('click', function(e) {
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
}, false);



// 监听路由变化
window.addEventListener('onpopstate', function() {
    console.log(111)
})

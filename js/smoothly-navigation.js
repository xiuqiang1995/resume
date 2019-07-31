! function() {
    //平滑滚动
    let liTags = document.querySelectorAll('nav.menu > ul > li');
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(e) {
            e.currentTarget.classList.add('active');
        }
        liTags[i].onmouseleave = function(e) {
            e.currentTarget.classList.remove('active');
        }
    }
    //锚点
    let aTags = document.querySelectorAll('nav.menu > ul > li > a');

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function(e) {
            e.preventDefault();
            let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop;
            let currentTop = window.scrollY;
            let targetTop = top - 70;
            let s = targetTop - currentTop;
            var coords = {
                y: currentTop
            };
            var t = Math.abs((s / 100) * 300);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    window.scrollTo(0, coords.y)
                }).start();
        }
    }
}.call()
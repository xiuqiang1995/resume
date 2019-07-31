! function() {
    //平滑滚动
    var view = document.querySelector('nav.menu');
    var controller = {
        view: null,
        aTags: null,
        liTags: null,
        initAnimation: function() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element) {
            let top = element.offsetTop;
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
        },
        bindEvents: function() {
            //锚点
            let aTags = document.querySelectorAll('nav.menu > ul > li > a');
            let liTags = this.view.querySelectorAll('nav.menu > ul > li');

            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (e) => {
                    e.preventDefault();
                    let href = e.currentTarget.getAttribute('href');
                    let element = document.querySelector(href);
                    this.scrollToElement(element)
                }
            }
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function(e) {
                    e.currentTarget.classList.add('active');
                }
                liTags[i].onmouseleave = function(e) {
                    e.currentTarget.classList.remove('active');
                }
            }
        },
        init: function(view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        }
    }

    controller.init(view);
}.call()
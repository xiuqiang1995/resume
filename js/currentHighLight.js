setTimeout(function() {
    currentHighLight()
}, 1000)
window.addEventListener('scroll', function() {
    currentHighLight()
})

function currentHighLight() {
    //查询包含data-main属性的任意标签
    let specialTags = document.querySelectorAll('[data-main]');
    let minIndex = 0;
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    //specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let childrens = li.parentNode.children;
    for (let index = 0; index < childrens.length; index++) {
        childrens[index].classList.remove('highLight');
    }
    li.classList.add('highLight')
}
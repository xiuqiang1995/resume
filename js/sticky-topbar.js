! function() {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
                //this.bindEvents.call(this)
        },
        bindEvents: function() {
            var view = this.view
                //箭头函数内外 this不变
            window.addEventListener('scroll', () => {
                window.scrollY > 0 ? this.active() : this.deactive()
            })
        },
        active: function() {
            this.view.classList.add('sticky');
        },
        deactive: function() {
            this.view.classList.remove('sticky');
        }
    }
    controller.init(view)
        //controller.init.call(controller,view)
}.call()
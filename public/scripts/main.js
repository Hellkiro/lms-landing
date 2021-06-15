class Spoiler {
    constructor (container) {
        this.container = container;
        this.btn = this.container.querySelector('.spoiler-btn');
        this.text = this.container.querySelector('.spoiler-text');
        this.btn.addEventListener('click', this.toggle.bind(this))
    }
    toggle() {
        this.btn.classList.toggle('active');
        this.text.classList.toggle('active');
    }
}

function spoilersInit() {
    let spoilers = [];
    document.querySelectorAll('.spoiler').forEach((item) => {
        spoilers.push(new Spoiler(item));
    })
}

spoilersInit();
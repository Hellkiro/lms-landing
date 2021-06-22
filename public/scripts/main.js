class Spoiler {
    constructor (container) {
        this.container = container;
        this.btn = this.container.querySelector('.spoiler-btn');
        this.text = this.container.querySelector('.spoiler-text');
        this.container.addEventListener('click', this.toggle.bind(this))
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

function anchorsInit() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }    
}

anchorsInit();

class Form{
    constructor (container) {
        this.container = container;
        this.inputs = this.container.querySelectorAll('input');
        this.submit = this.container.querySelector('.form-btn');
        this.submit.addEventListener('click', this.send.bind(this));
    }    
    async send() {
        let message = 'Заявка с лендоса \n';
        this.inputs.forEach((item) => {
            message += item.value + '\n';            
        })
        let body = {message: message};
        let response = await fetch('/api/telegram/', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json;charset=utf-8'}
        });
        
        this.responseElem = this.container.querySelector('.response');
        this.responseElem.classList.remove('ok');
        this.responseElem.classList.remove('fail');
        this.responseElem.innerHTML = '...';

        if (response.ok){
            this.responseElem.classList.add('ok');
            this.responseElem.innerHTML = 'заявка успешно доставлена';
        } else {
            this.responseElem.classList.add('fail');
            this.responseElem.innerHTML = 'произошла ошибка при отправке';
        }
    }
}

let form = new Form(document.querySelector('.final .form'));
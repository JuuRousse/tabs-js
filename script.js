document.querySelector('#app').innerHTML = `
<div class="container">
    <div class="tabs-section">
        <div class="tabs">
            <div class="tab active">Kitten</div>
            <div class="tab">Puppy</div>
            <div class="tab">Humster</div>
        </div>
    </div>

    <div class="content-section">
        <div class="tab-content">
            <img src="./img/images.jpg" alt="kitten">
        </div>
        <div class="tab-content">
            <img src="./img/Corgi-puppy-1-scaled.jpg" alt="puppy">
        </div>
        <div class="tab-content">
            <img src="./img/hamster-690108_1920-pic905-895x505-8554.jpg" alt="puppy">
        </div>
    </div>
</div>
`

const tabs = document.querySelector('.tabs');
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    })

    tab.forEach(item => {
        item.classList.remove('active');
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');

    tab[i].classList.add('active');
}
hideTabContent();
showTabContent(0);

tabs.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tab')) {
        tab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});



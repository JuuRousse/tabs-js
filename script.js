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



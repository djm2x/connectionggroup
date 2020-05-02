const classes = document.querySelectorAll('.anime');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            //get delay from data-delay in DOM
            let delay = entry.target.dataset.delay;

            delay = delay ? delay : '1.2s';

            const transition = `opacity ${delay} ease-in-out, transform ${delay} cubic-bezier(0, 1.1, 1, 1)`;
            // stye our element
            entry.target.style = `transition: ${transition};opacity: 1; transform: translateY(0);`;
        } else {
            entry.target.style = `opacity: 0; transform: translateY(-100px);`;
        }
    });
});

classes.forEach(e => observer.observe(e));

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const button = document.querySelectorAll('.button-menu');

    const preventScroll = (event) => {
        event.preventDefault();
    },
        preventTouchScroll = (event) => {
        event.preventDefault();
    };

    [...button].forEach((element) => {
        element.addEventListener('click', () => {
            menu.classList.toggle('open');

            if (menu.classList.contains('open')) {
                document.addEventListener('wheel', preventScroll, { passive: false });
                document.addEventListener('touchmove', preventTouchScroll, { passive: false });
            } else {
                document.removeEventListener('wheel', preventScroll);
                document.removeEventListener('touchmove', preventTouchScroll);
            }
        });
    });

    document.addEventListener('keydown', (element) => {
        if (element.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.toggle('open');
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventTouchScroll);
        }
    });
});
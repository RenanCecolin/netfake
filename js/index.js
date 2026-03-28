document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles a[data-name][data-image]');

    profileLinks.forEach(link => {
        link.addEventListener('click', event => {
            const name = link.dataset.name;
            const image = link.dataset.image;

            if (name) {
                localStorage.setItem('activeProfileName', name);
                localStorage.setItem('perfilAtivoNome', name);
            }

            if (image) {
                localStorage.setItem('activeProfileImage', image);
                localStorage.setItem('perfilAtivoImagem', image);
            }

            event.preventDefault();
            window.location.href = link.href;
        });
    });
});

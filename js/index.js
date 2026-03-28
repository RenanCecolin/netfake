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
                // Pega apenas o nome do arquivo (ex: Perfil-1.jpeg)
                const imageFileName = image.split('/').filter(Boolean).pop();
                
                // Define o caminho para ser usado de DENTRO da pasta catalogo
                // O ../assets/ volta uma pasta para achar a imagem
                const catalogImagePath = `../assets/${imageFileName}`;
                
                localStorage.setItem('activeProfileImage', catalogImagePath);
                localStorage.setItem('perfilAtivoImagem', catalogImagePath);
            }

            // Deixa o link seguir para a página do catálogo
            // Removi o preventDefault para o link funcionar normalmente
        });
    });
});
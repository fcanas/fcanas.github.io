// Progressive enhancement: lightbox via native <dialog>
const dialog = document.createElement('dialog');
dialog.className = 'lightbox';
dialog.innerHTML = `
    <figure class="lightbox-content">
        <button class="close-btn" aria-label="Close">&times;</button>
        <img src="" alt="">
        <figcaption></figcaption>
    </figure>
`;
document.body.appendChild(dialog);

const dialogImg = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('figcaption');

dialog.querySelector('.close-btn').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
});

document.querySelectorAll('a.lightbox-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();

        const title = link.dataset.title;
        const year = link.dataset.year;
        const month = link.dataset.month;
        const material = link.dataset.material;
        const dimensions = link.dataset.dimensions;

        dialogImg.src = link.dataset.image;
        dialogImg.alt = link.dataset.alt;

        dialogCaption.textContent = '';
        if (title) {
            const strong = document.createElement('strong');
            strong.textContent = title;
            dialogCaption.appendChild(strong);
            dialogCaption.appendChild(document.createElement('br'));
        }
        dialogCaption.appendChild(document.createTextNode(year));
        if (month) dialogCaption.appendChild(document.createTextNode('-' + month.padStart(2, '0')));
        if (material) {
            dialogCaption.appendChild(document.createElement('br'));
            dialogCaption.appendChild(document.createTextNode(material));
        }
        if (dimensions) {
            dialogCaption.appendChild(document.createElement('br'));
            dialogCaption.appendChild(document.createTextNode(dimensions));
        }

        dialog.showModal();
    });
});

export function cleanTable() {
    const cells = document.querySelectorAll('.cell');
    if (cells) {
        for (let key of cells) {
            key.remove();
        }
    }
}
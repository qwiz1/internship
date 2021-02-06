export default function cleanTable() {
  document.querySelectorAll('.cell')
    .forEach((cell) => cell.remove());
}

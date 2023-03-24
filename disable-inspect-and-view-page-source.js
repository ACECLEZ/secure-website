// Disable F12, Ctrl+Shift+I, and Ctrl+U
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.keyCode == 85)) {
    event.preventDefault();
  }
});
/*@ACECLEZ*/
/*import code: <script src="https://ACECLEZ.github.io/secure-website/disable-inspect-and-view-page-source.js"></script>   */

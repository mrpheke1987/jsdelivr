<script>
function addJNCFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = 'JNC Edukasi. All rights reserved.';
    footer.style.backgroundColor = '#f0f0f0';
    footer.style.color = '#333';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    document.body.appendChild(footer);
}
document.addEventListener('DOMContentLoaded', function() {
      addJNCFooter();
  });
</script>

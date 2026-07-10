document.querySelectorAll('[data-tab]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('[data-tab]').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('d-none'));
    document.getElementById('panel-' + this.dataset.tab).classList.remove('d-none');
  });
});

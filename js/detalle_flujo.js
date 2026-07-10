document.querySelectorAll('[data-stage]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('[data-stage]').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.stage-block').forEach(b => b.classList.add('d-none'));
    document.getElementById('stage-' + this.dataset.stage).classList.remove('d-none');
    document.querySelectorAll('.stage-ribbon').forEach(r => r.classList.add('d-none'));
    const ribbon = document.getElementById('ribbon-' + this.dataset.stage);
    if (ribbon) ribbon.classList.remove('d-none');
  });
});

document.querySelectorAll('[data-tab]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('[data-tab]').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('d-none'));
    document.getElementById('panel-' + this.dataset.tab).classList.remove('d-none');
  });
});

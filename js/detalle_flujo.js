const stageNames = {
  'examen': 'Examen', 'pago': 'Pago', 'status': 'Status',
  'documentos': 'Documentos', 'matricula': 'Matrícula'
};

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

    const now = new Date();
    const time = now.toLocaleTimeString('es-PE', { hour: 'numeric', minute: '2-digit', hour12: true });
    const feed = document.getElementById('chatterFeed');
    const msg = document.createElement('div');
    msg.className = 'chatter-msg';
    const stage = this.dataset.stage;
    msg.innerHTML = '<div class="avatar-badge">S</div><div><div><strong>Sistema</strong> <span class="text-muted">' + time + '</span></div><div class="text-muted">Avance a etapa: ' + stageNames[stage] + '</div>' + (stage === 'matricula' ? '<div class="mt-2"><img src="images/mailing.png" style="max-width:100%;border-radius:6px;"></div>' : '') + '</div>';
    feed.insertBefore(msg, feed.firstChild);
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

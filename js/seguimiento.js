document.querySelectorAll('.seg-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.seg-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    const tabText = this.textContent.trim().toLowerCase();

    document.querySelectorAll('.table-seg tbody tr').forEach(row => {
      const badge = row.querySelector('.badge-seg');
      const rowStatus = badge ? badge.textContent.trim().toLowerCase() : '';

      if (tabText === 'todos') {
        row.style.display = '';
        return;
      }

      if (tabText === 'perdidos') {
        row.style.display = rowStatus === 'perdido' ? '' : 'none';
        return;
      }

      if (tabText === 'admitidos') {
        row.style.display = rowStatus === 'admitido' ? '' : 'none';
        return;
      }

      row.style.display = rowStatus === tabText ? '' : 'none';
    });
  });
});

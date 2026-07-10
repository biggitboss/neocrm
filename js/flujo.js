const columns = [
  {name:"Exámen", cards:[
    {title:"Sara Mendoza", sub:"", badge:"A"},
    {title:"Lead de Juan Perez", sub:"Juanito Perez", badge:"A"},
  ]},
  {name:"Pago", cards:[
    {title:"Marina Guitierrez", sub:"", badge:"A"},
  ]},
  {name:"Status Académico", cards:[
    {title:"Ivan Mendoza", sub:"", badge:"A"},
    {title:"Luis Torres", sub:"", badge:"A"},
  ]},
  {name:"Status Exámen", cards:[
    {title:"Alberto Rodriguez", sub:"", badge:"A"},
  ]},
  {name:"Documentos", cards:[
    {title:"Gisela Floreian", sub:"", badge:"A"},
  ]},
  {name:"Matriculado", cards:[
    {title:"Lead de Pedro Gabiria", sub:"", badge:"A"},
  ]},
];

const row = document.getElementById('kanbanRow');
columns.forEach(col => {
  const colDiv = document.createElement('div');
  colDiv.className = "col";
  colDiv.style.minWidth = "230px";

  let cardsHtml = "";
  col.cards.forEach(c => {
    cardsHtml += `
      <div class="kanban-card" onclick="window.location.href='detalle_flujo.html'">
        <div class="fw-semibold">${c.title}</div>
        ${c.sub ? `<div class="subtext">${c.sub}</div>` : ""}
        <div class="card-footer-row">
          <span class="stars">★★★</span>
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-clock text-muted"></i>
            <span class="avatar-badge">${c.badge}</span>
          </div>
        </div>
      </div>`;
  });

  colDiv.innerHTML = `
    <div class="kanban-col">
      <div class="kanban-col-header">
        <span>${col.name} <i class="bi bi-plus-lg text-muted"></i></span>
        <span class="text-muted">${col.cards.length === 0 ? 0 : 0}</span>
      </div>
      <div class="kanban-progress"></div>
      ${cardsHtml}
    </div>`;
  row.appendChild(colDiv);
});

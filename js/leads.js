const leads = [
  ["Alemny Ramírez Peña","kelly.ramirezp19@gmail.com","S","Sheyla Rut Peña Estrada"],
  ["ED: Beth Milenn","ibethmilenyllosaromero@gmail.com","P","Pya Fanny Pinto Quiroz"],
  ["OD1: Terroso Angee","","P","Pya Fanny Pinto Quiroz"],
  ["ED: Edwin Paredes Condori","edwinparedescondori@gmail.com","S","Sheyla Rut Peña Estrada"],
  ["OD1: yrma yrene reyes yarasca","","S","Sheyla Rut Peña Estrada"],
  ["AR: Evelyn Leiva Trujillo","evelynleivatrujillo@gmail.com","J","Jeffrei Julián Collantes Salas"],
  ["OD1: Lili Huamani","","J","Jeffrei Julián Collantes Salas"],
  ["ED: Miguel veliz vidalon","miguel_10_255@hotmail.com","S","Sheyla Rut Peña Estrada"],
  ["OD1: Miguel Ángel Soriano","","J","Jeffrei Julián Collantes Salas"],
  ["ED: Rosa Adco Val","rosariodc_19@hotmail.com","S","Sheyla Rut Peña Estrada"],
  ["ED: Dey EJ","deysyespinozajorge23@gmail.com","S","Sheyla Rut Peña Estrada"],
  ["Katherine Pamela Mallma Crespo","katherin.frida@gmail.com","P","Pya Fanny Pinto Quiroz"],
  ["ED: Stefani Toledo","tatianatoledo0611@gmail.com","P","Pya Fanny Pinto Quiroz"],
  ["ED: Dani Dani","ddani27888@gmail.com","J","Jeffrei Julián Collantes Salas"],
  ["ED: Rafael Alexander Goto Salazar","milu_mb14@hotmail.com","P","Pya Fanny Pinto Quiroz"],
  ["ED: Edme Vargas ayca","edme_d12@hotmail.com","S","Sheyla Rut Peña Estrada"],
  ["ED: Anyie Bravo Lagos","anyielagos@gmail.com","P","Pya Fanny Pinto Quiroz"],
  ["OD1: Johnnier Martinez Garay","","J","Jeffrei Julián Collantes Salas"],
];

const body = document.getElementById('leadsBody');
leads.forEach(l => {
  const tr = document.createElement('tr');
  tr.onclick = () => window.location.href = 'detalle_lead.html';
  tr.innerHTML = `
    <td onclick="event.stopPropagation()"><input type="checkbox"></td>
    <td>${l[0]}</td>
    <td>${l[1]}</td>
    <td></td>
    <td></td>
    <td><div class="vendor-cell"><span class="avatar-badge">${l[2]}</span> ${l[3]}</div></td>
    <td>Comercial Pregrado</td>`;
  body.appendChild(tr);
});

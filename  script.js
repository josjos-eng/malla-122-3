/******** 1. Datos ********/
const courses = [
  /* --- 1.º Semestre --- */
  {id:"QUIM_GEN",   nombre:"QUÍMICA GENERAL",           sem:1, pre:[]},
  {id:"FIS_BAS_I",  nombre:"FÍSICA BÁSICA I",           sem:1, pre:[]},
  {id:"DIB_TEC_I",  nombre:"DIBUJO TÉCNICO I",          sem:1, pre:[]},
  {id:"CALC_I",     nombre:"CÁLCULO I",                 sem:1, pre:[]},
  {id:"ALG_I",      nombre:"ÁLGEBRA I",                 sem:1, pre:[]},

  /* --- 2.º Semestre --- */
  {id:"QUIM_ORG",   nombre:"QUÍMICA ORGÁNICA",          sem:2, pre:["QUIM_GEN"]},
  {id:"FIS_BAS_II", nombre:"FÍSICA BÁSICA II",          sem:2, pre:["CALC_I","FIS_BAS_I"]},
  {id:"INF_I",      nombre:"INFORMÁTICA I",             sem:2, pre:["DIB_TEC_I"]},
  {id:"CALC_II",    nombre:"CÁLCULO II",                sem:2, pre:["CALC_I"]},
  {id:"ALG_II",     nombre:"ÁLGEBRA II",                sem:2, pre:["ALG_I"]},
  {id:"ECON_GEN",   nombre:"ECONOMÍA GENERAL",          sem:2, pre:["ALG_I"]},

  /* --- 3.º Semestre --- */
  {id:"FISICOQ",    nombre:"FISICOQUÍMICA",             sem:3, pre:["QUIM_ORG","FIS_BAS_II"]},
  {id:"FIS_BAS_III",nombre:"FÍSICA BÁSICA III",         sem:3, pre:["FIS_BAS_II","CALC_II"]},
  {id:"CIEN_MAT",   nombre:"CIENCIA DE MATERIALES",     sem:3, pre:["INF_I"]},
  {id:"ECU_DIFF",   nombre:"ECUACIONES DIFERENCIALES",  sem:3, pre:["CALC_II"]},
  {id:"PROB_EST",   nombre:"PROBABILIDAD Y ESTAD.",     sem:3, pre:["ALG_II"]},
  {id:"CONT_IND",   nombre:"CONTABILIDAD INDUSTRIAL",   sem:3, pre:["ECON_GEN"]},
  /* …continúa hasta 10.º semestre con el resto de asignaturas… */
];

/******** 2. Estado dinámico ********/
const state = {};            // id → 'pending' | 'passed' | 'failed'
const grid  = document.getElementById("grid");

function colorClass(id){
  return state[id] || "pending";
}

/******** 3. Render inicial ********/
courses.forEach(c=>{
  const div = document.createElement("div");
  div.className = `card ${colorClass(c.id)}`;
  div.dataset.id = c.id;
  div.innerHTML = `<strong>${c.nombre}</strong><br><small>${c.sem}° Sem.</small>`;
  grid.appendChild(div);
});

/******** 4. Eventos ********/
grid.addEventListener("click", e=>{
  if(!e.target.classList.contains("card")) return;
  const id   = e.target.dataset.id;
  const curso= courses.find(x=>x.id===id);

  // a) Highlight prerrequisitos
  document.querySelectorAll(".card").forEach(card=>card.classList.remove("highlight"));
  curso.pre.forEach(pid=>{
    const card=document.querySelector(`.card[data-id='${pid}']`);
    if(card) card.classList.add("highlight");
  });
});

/* Ctrl+clic  ⇒  cambiar estado */
grid.addEventListener("click", e=>{
  if(!e.ctrlKey || !e.target.classList.contains("card")) return;
  const card = e.target;
  const id   = card.dataset.id;
  const cycle = {pending:"passed", passed:"failed", failed:"pending"};
  state[id] = cycle[state[id]||"pending"];
  card.className = `card ${state[id]}`;
});

fetch('/data/tiendita-clo.json')
.then(res=>res.json())
.then(data=>{
 animateCounter(document.querySelector("#clientes"),data.kpis.clientes);
 animateCounter(document.querySelector("#eventos"),data.kpis.eventos);
 animateCounter(document.querySelector("#personalizados"),data.kpis.personalizados);
 const ctx=document.getElementById('chart');
 new Chart(ctx,{type:'line',data:{labels:['Inicio','Mes1','Mes2','Mes3','Hoy'],
 datasets:[{label:'Crecimiento',data:data.crecimiento}]}})
});
setupVideos();
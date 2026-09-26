const state={projects:[],search:"",track:"",sector:""};
const $=s=>document.querySelector(s);

function normalise(v){return (v||"").toString().toLowerCase().trim()}

function unique(values){return [...new Set(values)].sort((a,b)=>a.localeCompare(b))}

function fillSelect(el,values,label){
  el.innerHTML='<option value="">'+label+'</option>'+values.map(v=>'<option value="'+v+'">'+v+'</option>').join("");
}

function matches(project){
  const q=normalise(state.search);
  const hay=[
    project.id,project.name,project.track,project.sector,project.problem,
    ...(project.capabilities||[]),...(project.expertise||[])
  ].join(" ").toLowerCase();

  const searchOk=!q || q.split(/\s+/).every(term=>hay.includes(term));
  const trackOk=!state.track || project.track===state.track || (project.capabilities||[]).includes(state.track);
  const sectorOk=!state.sector || project.sector===state.sector;
  return searchOk && trackOk && sectorOk;
}

function esc(v){
  return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}

function card(p){
  const tags=(p.capabilities||[]).slice(0,7).map(x=>'<span class="tag">'+esc(x)+'</span>').join("");
  const expertise=(p.expertise||[]).join(" · ");
  return `
  <article class="card">
    <div class="card-top">
      <span class="id">${esc(p.id)}</span>
      <span class="track">${esc(p.track)}</span>
    </div>
    <h3>${esc(p.name)}</h3>
    <div class="sector">${esc(p.sector)}</div>
    <p class="problem">${esc(p.problem)}</p>
    <div class="tags">${tags}</div>
    <div class="expertise"><strong>Expertise:</strong> ${esc(expertise)}</div>
    <div class="actions">
      <span class="team">Team: ${esc(p.team_size)}</span>
      <a class="open" href="${esc(p.repository)}" target="_blank" rel="noopener">Open project →</a>
    </div>
  </article>`;
}

function render(){
  const filtered=state.projects.filter(matches);
  $("#count").textContent=filtered.length+" project"+(filtered.length===1?"":"s");
  $("#cards").innerHTML=filtered.length
    ? filtered.map(card).join("")
    : '<div class="empty">No projects match those filters. Try another capability, sector or keyword.</div>';
}

async function init(){
  const res=await fetch("./projects.json");
  state.projects=await res.json();

  fillSelect($("#track"),unique(state.projects.flatMap(p=>[p.track,...(p.capabilities||[])])
    .filter(v=>["Data Analytics","Data Engineering","Data Science","Machine Learning","Artificial Intelligence","AI Engineering","LLM Engineering","RAG"].includes(v))),
    "All capabilities");

  fillSelect($("#sector"),unique(state.projects.map(p=>p.sector)),"All sectors");

  $("#search").addEventListener("input",e=>{state.search=e.target.value;render()});
  $("#track").addEventListener("change",e=>{state.track=e.target.value;render()});
  $("#sector").addEventListener("change",e=>{state.sector=e.target.value;render()});
  $("#reset").addEventListener("click",()=>{
    state.search="";state.track="";state.sector="";
    $("#search").value="";$("#track").value="";$("#sector").value="";
    render();
  });

  $("#totalProjects").textContent=state.projects.length;
  $("#totalTracks").textContent=unique(state.projects.map(p=>p.track)).length;
  $("#totalSectors").textContent=unique(state.projects.map(p=>p.sector)).length;
  render();
}
init().catch(err=>{
  $("#cards").innerHTML='<div class="empty">The catalogue could not be loaded. Please refresh the page.</div>';
  console.error(err);
});
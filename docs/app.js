const state={projects:[],search:"",track:"",role:"",sector:"",sort:"number-asc",page:1};
const $=s=>document.querySelector(s);

function normalise(v){return (v||"").toString().toLowerCase().trim()}
function unique(values){return [...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b))}
function fillSelect(el,values,label){
  el.innerHTML='<option value="">'+label+'</option>'+values.map(v=>'<option value="'+esc(v)+'">'+esc(v)+'</option>').join("");
}
function sectors(project){return (project.sector||"").split("/").map(s=>s.trim()).filter(Boolean)}
function matches(project){
  const q=normalise(state.search);
  const hay=[
    project.id,project.name,project.track,project.sector,project.brief,project.problem,project.use_case,project.data_source,
    ...(project.capabilities||[]),...(project.roles||[]),...(project.expertise||[])
  ].join(" ").toLowerCase();

  const searchOk=!q || q.split(/\s+/).every(term=>hay.includes(term));
  const trackOk=!state.track || project.track===state.track;
  const roleOk=!state.role || (project.roles||[]).includes(state.role);
  const sectorOk=!state.sector || sectors(project).includes(state.sector);
  return searchOk && trackOk && roleOk && sectorOk;
}
function esc(v){
  return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function card(p){
  const tags=(p.capabilities||[]).slice(0,7).map(x=>'<span class="tag">'+esc(x)+'</span>').join("");
  const roles=(p.roles||[]).map(x=>'<span class="role-chip">'+esc(x)+'</span>').join("");
  const expertise=(p.expertise||[]).join(" · ");
  const dataSource=p.data_source?'<div class="data-source"><strong>Data:</strong> '+esc(p.data_source)+'</div>':"";
  const downloads=(p.data_downloads||[]).map(d=>'<a href="'+esc(d.url)+'" target="_blank" rel="noopener">'+esc(d.label)+'</a>').join(' · ');
  const sourceGuide=p.source_guide?'<a href="'+esc(p.source_guide)+'" target="_blank" rel="noopener">Data guide</a>':"";
  const dataLinks=(downloads||sourceGuide)?'<div class="data-links" aria-label="Project data downloads">'+[downloads,sourceGuide].filter(Boolean).join(' · ')+'</div>':"";
  return `
  <article class="card">
    <div class="card-top">
      <span class="id">${esc(p.id)}</span>
      <span class="track">${esc(p.track)}</span>
    </div>
    <h3>${esc(p.name)}</h3>
    <div class="sector">${esc(p.sector)}</div>
    <p class="project-brief"><strong>Project brief:</strong> ${esc(p.brief||p.problem)}</p>
    ${dataSource}
    ${dataLinks}
    <div class="roles">${roles}</div>
    <div class="tags">${tags}</div>
    <div class="expertise"><strong>Skills:</strong> ${esc(expertise)}</div>
    <div class="actions">
      <span class="team">Team: ${esc(p.team_size)}</span>
      <a class="open" href="${esc(p.repository)}" target="_blank" rel="noopener">Open project →</a>
    </div>
  </article>`;
}
const PAGE_SIZE=10;
function projectNumber(p){return Number(p.id.match(/\d+$/)?.[0]||0)}
function sortedProjects(projects){
  return [...projects].sort((a,b)=>{
    const tie=projectNumber(a)-projectNumber(b)||a.id.localeCompare(b.id);
    switch(state.sort){
      case "number-desc": return -tie;
      case "name-asc": return a.name.localeCompare(b.name)||tie;
      case "name-desc": return b.name.localeCompare(a.name)||tie;
      case "track": return a.track.localeCompare(b.track)||tie;
      case "sector": return a.sector.localeCompare(b.sector)||tie;
      default: return tie;
    }
  });
}
function changePage(delta){
  state.page+=delta;
  render();
  $("#results").focus({preventScroll:true});
  $("#results").scrollIntoView({behavior:"smooth",block:"start"});
}
function render(){
  const filtered=sortedProjects(state.projects.filter(matches));
  const pages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  state.page=Math.min(Math.max(1,state.page),pages);
  const start=(state.page-1)*PAGE_SIZE;
  const visible=filtered.slice(start,start+PAGE_SIZE);
  document.querySelectorAll(".pagination").forEach(nav=>{nav.hidden=filtered.length<=PAGE_SIZE});
  document.querySelectorAll("[data-page-status]").forEach(el=>{el.textContent="Page "+state.page+" of "+pages});
  document.querySelectorAll("[data-page-prev]").forEach(el=>{el.disabled=state.page===1});
  document.querySelectorAll("[data-page-next]").forEach(el=>{el.disabled=state.page===pages});
  $("#count").textContent=filtered.length?"Showing "+(start+1)+"–"+Math.min(start+PAGE_SIZE,filtered.length)+" of "+filtered.length+" projects"+(filtered.length!==state.projects.length?" ("+state.projects.length+" total)":""):"0 matching projects ("+state.projects.length+" total)";
  $("#cards").innerHTML=filtered.length?visible.map(card).join(""):'<div class="empty">No projects match those filters. Try another track, role, sector or keyword.</div>';
}
async function init(){
  const res=await fetch("./projects.json",{cache:"no-store"});
  if(!res.ok) throw new Error("Catalogue request failed: "+res.status);
  state.projects=await res.json();

  fillSelect($("#track"),unique(state.projects.map(p=>p.track)),"All tracks");
  fillSelect($("#role"),unique(state.projects.flatMap(p=>p.roles||[])),"All roles");
  fillSelect($("#sector"),unique(state.projects.flatMap(sectors)),"All sectors");

  $("#search").addEventListener("input",e=>{state.search=e.target.value;state.page=1;render()});
  $("#track").addEventListener("change",e=>{state.track=e.target.value;state.page=1;render()});
  $("#role").addEventListener("change",e=>{state.role=e.target.value;state.page=1;render()});
  $("#sector").addEventListener("change",e=>{state.sector=e.target.value;state.page=1;render()});
  $("#sort").addEventListener("change",e=>{state.sort=e.target.value;state.page=1;render()});
  document.querySelectorAll("[data-page-prev]").forEach(el=>el.addEventListener("click",()=>changePage(-1)));
  document.querySelectorAll("[data-page-next]").forEach(el=>el.addEventListener("click",()=>changePage(1)));
  $("#reset").addEventListener("click",()=>{
    state.search="";state.track="";state.role="";state.sector="";state.sort="number-asc";state.page=1;
    $("#sort").value="number-asc";
    $("#search").value="";$("#track").value="";$("#role").value="";$("#sector").value="";
    render();
  });

  $("#totalProjects").textContent=state.projects.length;
  $("#totalTracks").textContent=unique(state.projects.map(p=>p.track)).length;
  $("#totalSectors").textContent=unique(state.projects.flatMap(sectors)).length;
  render();
}
init().catch(err=>{
  $("#cards").innerHTML='<div class="empty">The catalogue could not be loaded. Please refresh the page.</div>';
  console.error(err);
});
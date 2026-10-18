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
    project.id,project.name,project.track,project.sector,project.brief,project.problem,project.use_case,project.data_source,project.learning_pathway,project.duration,
    ...(project.deliverables||[]),
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
  const tags=(p.capabilities||[]).slice(0,5).map(x=>'<span class="tag">'+esc(x)+'</span>').join("");
  const roles=(p.roles||[]).map(x=>'<span class="role-chip">'+esc(x)+'</span>').join("");
  const expertise=(p.expertise||[]).join(" · ");
  const dataSource=p.data_source?'<div class="data-source"><strong>Data:</strong> '+esc(p.data_source)+'</div>':"";
  const downloads=(p.data_downloads||[]).map(d=>'<a href="'+esc(d.url)+'" target="_blank" rel="noopener">'+esc(d.label)+'</a>').join(' · ');
  const sourceGuide=p.source_guide?'<a href="'+esc(p.source_guide)+'" target="_blank" rel="noopener">Data guide</a>':"";
  const dataLinks=(downloads||sourceGuide)?'<div class="data-links" aria-label="Project data downloads">'+[downloads,sourceGuide].filter(Boolean).join(' · ')+'</div>':"";
  const pathway=p.learning_pathway?'<p><strong>BA focus:</strong> '+esc(p.learning_pathway)+'</p>':"";
  const deliverables=(p.deliverables||[]).length?'<div><strong>Key deliverables:</strong><ul>'+p.deliverables.map(d=>'<li>'+esc(d)+'</li>').join('')+'</ul></div>':"";
  const submission=p.submission_guide?'<p><a href="'+esc(p.submission_guide)+'" target="_blank" rel="noopener">Team deliverables and submission checklist →</a></p>':"";
  const brief=p.brief||p.problem||"";
  const sentences=brief.match(/^(.+?[.!?])\s+([\s\S]+)$/);
  const challenge=sentences?sentences[1]:p.problem||brief;
  const build=sentences?sentences[2]:brief;
  return `
  <article class="card">
    <div class="card-top">
      <span class="id">${esc(p.id)}</span>
      <span class="track">${esc(p.track)}</span>
    </div>
    <h3>${esc(p.name)}</h3>
    <div class="sector">${esc(p.sector)}</div>
    <div class="card-copy"><h4>The challenge</h4><p>${esc(challenge)}</p><h4>What you’ll build</h4><p>${esc(build)}</p></div>
    <dl class="project-meta"><div><dt>Team</dt><dd>${esc(p.team_size||"See project brief")}</dd></div><div><dt>Duration</dt><dd>${esc(p.duration||"See project brief")}</dd></div></dl>
    <h4>Skills you’ll practise</h4><div class="tags">${tags}</div>
    <details class="project-details"><summary>Roles, deliverables &amp; resources</summary><div class="detail-content"><h4>Delivery roles</h4><div class="roles">${roles}</div><p class="expertise"><strong>Core expertise:</strong> ${esc(expertise)}</p><p><strong>All capabilities:</strong> ${esc((p.capabilities||[]).join(" · "))}</p>${pathway}${deliverables}${submission}${dataSource}${dataLinks}</div></details>
    <div class="actions">
      <a class="button primary" href="https://tally.so/r/eq4Wjo" target="_blank" rel="noopener" aria-label="Apply for ${esc(p.id)} — ${esc(p.name)}">Apply <span aria-hidden="true">↗</span></a>
      <a class="open" href="${esc(p.repository)}" target="_blank" rel="noopener" aria-label="View project ${esc(p.id)} — ${esc(p.name)}">View project →</a>
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
  $("#results").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"});
}
function render(){
  document.querySelectorAll('[data-track]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.track===state.track)));
  const active=[state.track,state.role,state.sector,state.search&&'Search: '+state.search].filter(Boolean);
  $("#active-filters").hidden=!active.length;
  $("#active-filters").textContent="Filtering by: "+active.join(" · ");
  $("#filter-count").textContent=[state.role,state.sector].filter(Boolean).length?"("+[state.role,state.sector].filter(Boolean).length+" active)":"";
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

  const tracks=unique(state.projects.map(p=>p.track));
  $("#track-options").innerHTML=["",...tracks].map(t=>'<button type="button" data-track="'+esc(t)+'" aria-pressed="'+(!t)+'" aria-controls="cards"><span>'+esc(t||"All projects")+'</span><span class="track-count">'+state.projects.filter(p=>!t||p.track===t).length+'</span></button>').join("");
  $("#track-options").addEventListener("click",e=>{const button=e.target.closest("[data-track]");if(!button)return;state.track=button.dataset.track;$("#track").value=state.track;state.page=1;render()});
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
  $("#cards").innerHTML='<div class="empty">The catalogue could not be loaded. Please refresh the page or <a href="https://github.com/Mettelo/project-library">browse the project library</a>.</div>';
  console.error(err);
});
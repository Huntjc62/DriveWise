
const $=id=>document.getElementById(id);
const postsKey="dw_posts", memberKey="dw_member", garageKey="dw_garage", subsKey="dw_subs";
function posts(){let p=JSON.parse(localStorage.getItem(postsKey)||"null");if(!p){p=SEED_POSTS;localStorage.setItem(postsKey,JSON.stringify(p))}return p}
function savePosts(p){localStorage.setItem(postsKey,JSON.stringify(p))}
function dateUK(d){return new Date(d+"T12:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}
function member(){return JSON.parse(localStorage.getItem(memberKey)||"null")}
function route(path){
 if(!path)return "index.html";
 if(path.startsWith("/pages/"))path=path.slice(7);
 if(path.startsWith("/"))path=path.slice(1);
 return location.pathname.includes("/pages/") ? path : "pages/"+path;
}
function requireMember(next){if(member()){location.href=route(next);return}openAuth(next)}
function openAuth(next="account.html"){window.__next=next;$("authModal").classList.remove("hide");$("authModal").style.display="flex"}
function closeAuth(){$("authModal").style.display="none"}
function authSubmit(e){e.preventDefault();let email=$("authEmail").value.trim().toLowerCase(),pass=$("authPassword").value,name=$("authName")?.value.trim()||email.split("@")[0];let existing=member();if($("authMode").value==="login"){if(!existing||existing.email!==email||existing.password!==pass)return alert("Login details not recognised.")}else{if(pass.length<6)return alert("Password must be at least 6 characters.");localStorage.setItem(memberKey,JSON.stringify({email,password:pass,name,createdAt:Date.now()}))}closeAuth();location.href=route(window.__next||"account.html")}
function switchAuth(){let login=$("authMode").value==="login";$("authMode").value=login?"signup":"login";$("authTitle").textContent=login?"Create your free account":"Welcome back";$("authName").style.display=login?"block":"none";$("authSubmit").textContent=login?"Create account":"Log in";$("authSwitch").textContent=login?"Already have an account? Log in":"Need an account? Create one"}
function logout(){localStorage.removeItem(memberKey);location.href=location.pathname.includes("/pages/")?"../index.html":"index.html"}
function protect(){if(!member()){openAuth(location.pathname.split("/").pop()||"account.html");return false}return true}
function populateSelect(id,arr,placeholder){let s=$(id);if(!s)return;s.innerHTML=`<option value="">${placeholder}</option>`+arr.map(x=>`<option>${x}</option>`).join("")}
function setupGarage(){
 if(!protect())return;
 let g=JSON.parse(localStorage.getItem(garageKey)||"null");
 populateSelect("make",Object.keys(MAKES),"Choose make");
 if(g){$("make").value=g.make;populateModels();$("model").value=g.model;populateYears();$("year").value=g.year;$("trim").value=g.trim||"";$("engine").value=g.engine||"";$("fuel").value=g.fuel||"";$("gear").value=g.gear||"";$("reg").value=g.reg||"";renderGarage(g)}
}
function populateModels(){let make=$("make").value;populateSelect("model",MAKES[make]||[],"Choose model");$("model").disabled=!make;populateSelect("year",[],"Choose year");$("year").disabled=true}
function populateYears(){let make=$("make").value;if(!make)return;let years=Array.from({length:2026-2000+1},(_,i)=>2026-i);populateSelect("year",years,"Choose year");$("year").disabled=false}
function saveGarage(){let g={make:$("make").value,model:$("model").value,year:$("year").value,trim:$("trim").value,engine:$("engine").value,fuel:$("fuel").value,gear:$("gear").value,reg:$("reg").value};if(!g.make||!g.model||!g.year)return alert("Choose your make, model and year.");localStorage.setItem(garageKey,JSON.stringify(g));renderGarage(g);alert("Your car has been saved to My Garage.")}
function renderGarage(g){$("garageTitle").textContent=`${g.make} ${g.model}${g.trim?" "+g.trim:""}`;$("garageSub").textContent=`${g.year}${g.engine?" · "+g.engine:""}${g.fuel?" · "+g.fuel:""}`;let title=(g.model+" "+(g.trim||"")).toLowerCase();let shape=/q|x1|x2|x3|x4|x5|x6|x7|kuga|puma|tucson|sportage|sorento|rav4|cr-v|xc40|xc60|xc90|tiguan|defender|evoque|macan|cayenne/.test(title)?"SUV":/ranger|hilux|amarok|transit/.test(title)?"Pickup":/911|tt|z4|mustang|supra|cayman|boxster|mx-5/.test(title)?"Coupe":"Hatchback";$("shapeLabel").textContent=shape}
function setupCars(){if(!protect())return;let g=JSON.parse(localStorage.getItem(garageKey)||"null");if(g&&$("savedCar"))$("savedCar").textContent=`Your garage: ${g.make} ${g.model} ${g.trim||""}`}
function setupParts(){if(!protect())return;let g=JSON.parse(localStorage.getItem(garageKey)||"null");if(g&&$("partsCar"))$("partsCar").textContent=`Parts for ${g.make} ${g.model} ${g.trim||""}`}
function setupGuides(){let p=posts().sort((a,b)=>new Date(b.date)-new Date(a.date));let f=p.find(x=>x.featured)||p[0];if($("feature"))$("feature").innerHTML=`<span class="tag">${f.category}</span><h2>${f.title}</h2><p>${f.excerpt||""}</p><small>${dateUK(f.date)}</small><div class="actions"><a class="btn" href="${route("article.html")}?id=${encodeURIComponent(f.id)}">Read guide →</a></div>`;let grid=$("guideGrid");if(grid)grid.innerHTML=p.map(x=>`<article class="card"><span class="tag">${x.category}</span><h3>${x.title}</h3><p>${x.excerpt||""}</p><div class="date">${dateUK(x.date)}</div><div class="actions"><a class="btn secondary" href="${route("article.html")}?id=${encodeURIComponent(x.id)}">Read guide →</a></div></article>`).join("")}
function setupArticle(){let id=new URLSearchParams(location.search).get("id"),p=posts().find(x=>x.id===id)||posts()[0];if(!p)return;$("article").innerHTML=`<span class="tag">${p.category}</span><h1>${p.title}</h1><p class="excerpt">${p.excerpt||""}</p><div class="date">${dateUK(p.date)} · DriveWise</div><div class="reader-content">${p.body}</div>`}
function subscribe(e){e.preventDefault();let email=$(e.target.dataset.input).value.trim();if(!email)return;let s=JSON.parse(localStorage.getItem(subsKey)||"[]");if(!s.includes(email))s.push(email);localStorage.setItem(subsKey,JSON.stringify(s));alert("You’re subscribed to the DriveWise Monthly.");e.target.reset()}
function editorFormat(cmd,val=null){document.execCommand(cmd,false,val)}
function editorLink(){let url=prompt("Full URL");if(url)document.execCommand("createLink",false,url)}
function seoCheck(){let title=$("postTitle").value.trim(),seo=$("seoTitle").value.trim()||title,meta=$("meta").value.trim(),body=$("editor").innerText,html=$("editor").innerHTML,checks=[["SEO title",seo.length>=30&&seo.length<=60,seo.length+" characters"],["Meta description",meta.length>=120&&meta.length<=160,meta.length+" characters"],["Content depth",body.split(/\s+/).length>=500,body.split(/\s+/).length+" words"],["Headings",(html.match(/<h[23]/gi)||[]).length>=2,(html.match(/<h[23]/gi)||[]).length+" headings"],["Links",(html.match(/<a /gi)||[]).length>=1,(html.match(/<a /gi)||[]).length+" links"]];let score=Math.round(checks.filter(x=>x[1]).length/checks.length*100);$("seoBox").classList.remove("hide");$("seoBox").innerHTML=`<div class="score">${score}/100</div><div class="checks">${checks.map(x=>`<div class="check ${x[1]?"good":"bad"}"><b>${x[1]?"✓":"✕"} ${x[0]}</b><span>${x[2]}</span></div>`).join("")}</div>`}
function adminLoad(){let p=posts();$("adminPosts").innerHTML=p.map(x=>`<div class="admin-row"><div><b>${x.title}</b><small>${x.category} · ${dateUK(x.date)}</small></div><div class="actions"><button class="btn secondary" onclick="editPost('${x.id}')">Edit</button><button class="btn danger" onclick="deletePost('${x.id}')">Delete</button></div></div>`).join("")}
function editPost(id){let p=posts().find(x=>x.id===id);if(!p)return;$("postId").value=p.id;$("postTitle").value=p.title;$("category").value=p.category;$("postDate").value=p.date;$("excerpt").value=p.excerpt||"";$("seoTitle").value=p.seoTitle||p.title;$("meta").value=p.metaDescription||"";$("editor").innerHTML=p.body||"";window.scrollTo({top:0,behavior:"smooth"})}
function savePost(){let id=$("postId").value,title=$("postTitle").value.trim(),p=posts(),obj={id:id||"post-"+Date.now(),title,category:$("category").value,date:$("postDate").value,excerpt:$("excerpt").value,seoTitle:$("seoTitle").value||title,metaDescription:$("meta").value,body:$("editor").innerHTML,featured:false};if(!title||!obj.date||!obj.body)return alert("Add a title, date and content.");if(id)p=p.map(x=>x.id===id?{...x,...obj}:x);else p.unshift(obj);savePosts(p);adminLoad();alert(id?"Article updated.":"Article published.");}
function deletePost(id){if(confirm("Delete this article?")){savePosts(posts().filter(x=>x.id!==id));adminLoad()}}
function adminLogin(e){e.preventDefault();if($("adminUser").value==="admin"&&$("adminPass").value==="admin123"){sessionStorage.setItem("dw_admin","1");location.href=route("admin.html")}else alert("Incorrect admin login.")}
function adminProtect(){if(sessionStorage.getItem("dw_admin")!=="1"){location.href=route("admin-login.html");return false}adminLoad();return true}
function adminLogout(){sessionStorage.removeItem("dw_admin");location.href=route("admin-login.html")}

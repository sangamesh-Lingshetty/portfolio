import { useState, useEffect, useRef } from "react";

const LINKS = {
  email: "mailto:sangameshlingshetty@gmail.com",
  linkedin: "https://www.linkedin.com/in/sangamesh-lingshetty-5a6647279/",
  github: "https://github.com/sangamesh-Lingshetty",
  twitter: "https://x.com/Sangamesh9819",
  hashnode: "https://hashnode.com/@SangameshLingshetty",
  getquest: "https://getquest.cloud",
  habitdemo: "https://habit-frontend-psi.vercel.app/",
  devinsights: "https://github.com/sangamesh-Lingshetty/serverlessLambdaCode",
  rbac: "https://frontend-assignment-vrv.onrender.com/",
  deeplock: "https://chromewebstore.google.com/detail/deeplock/hmpcpccdkjjcpccgcjhodnjaaefaeldm",
  topmate: "https://topmate.io/sangamesha",
  shapeart: "https://www.3dshapeart.com/",
};

const C = {
  bg:"#fafaf8", surface:"#fff", border:"#e7e5e4", border2:"#d6d3d1",
  text:"#1c1917", textMuted:"#78716c", textFaint:"#a8a29e",
  accent:"#16a34a", accentBg:"#f0fdf4", accentBorder:"#bbf7d0",
};

// ─── CHATBOT ─────────────────────────────────────────────────────────────────
const ChatBot = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [persona, setPersona] = useState(null);
  const personas = [
    { id:"recruiter", label:"Recruiter / Hiring Manager", icon:"◈" },
    { id:"founder",   label:"Startup Founder / CTO",      icon:"◎" },
    { id:"freelance", label:"Looking to hire freelancer",  icon:"◇" },
    { id:"dev",       label:"Fellow Developer",            icon:"⬡" },
  ];
  const responses = {
    recruiter: {
      msg: "Sangamesh is actively open to Backend / Full-Stack roles (SDE-2) at AI-first startups. 1+ year production, ships fast, immediate joiner.",
      links: [
        { label:"LinkedIn",       href:LINKS.linkedin, icon:"↗" },
        { label:"Email directly", href:LINKS.email,    icon:"@" },
        { label:"GitHub",         href:LINKS.github,   icon:"⌥" },
      ],
    },
    founder: {
      msg: "Sangamesh has shipped 3 live products solo — GetQuest (GDPR SaaS), DeepLock (Chrome Extension), Habit Tracker. He integrates LLMs into real backend workflows. He moves fast.",
      links: [
        { label:"GetQuest (live)",    href:LINKS.getquest, icon:"↗" },
        { label:"DeepLock Extension", href:LINKS.deeplock, icon:"↗" },
        { label:"Email",              href:LINKS.email,    icon:"@" },
      ],
    },
    freelance: {
      msg: "Sangamesh does contract work — backend APIs, SaaS products, AWS infra. Book a free intro call on Topmate or email directly.",
      links: [
        { label:"Book on Topmate",    href:LINKS.topmate,   icon:"↗" },
        { label:"Email",              href:LINKS.email,     icon:"@" },
        { label:"See freelance work", href:"#freelance",    icon:"→" },
      ],
    },
    dev: {
      msg: "Node.js, TypeScript, AWS serverless, GenAI integrations. Check the GitHub for real code — no toy repos.",
      links: [
        { label:"GitHub",        href:LINKS.github,   icon:"⌥" },
        { label:"Articles",      href:LINKS.hashnode, icon:"✦" },
        { label:"Topmate (1:1)", href:LINKS.topmate,  icon:"↗" },
      ],
    },
  };
  return (
    <div style={{position:"fixed",bottom:"1.5rem",right:"1.5rem",width:"min(360px,calc(100vw - 2rem))",background:"#fafaf9",border:"1px solid #e7e5e4",borderRadius:"16px",zIndex:9999,overflow:"hidden",fontFamily:"'DM Mono',monospace",boxShadow:"0 20px 60px rgba(0,0,0,0.12),0 4px 16px rgba(0,0,0,0.06)"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid #e7e5e4",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f5f5f4"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <div style={{width:7,height:7,borderRadius:"50%",background:"#16a34a",animation:"pulse 2s infinite"}}/>
          <span style={{color:"#78716c",fontSize:"11px",letterSpacing:"0.1em"}}>SANGAMESH · ONLINE</span>
        </div>
        <button onClick={onClose} style={{background:"none",border:"none",color:"#a8a29e",cursor:"pointer",fontSize:"15px",lineHeight:1}}>✕</button>
      </div>
      <div style={{padding:"16px"}}>
        {step===0&&(<>
          <p style={{color:"#1c1917",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px"}}>Hey 👋 — thanks for stopping by.<br/>Who are you here as?</p>
          <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
            {personas.map(p=>(
              <button key={p.id} onClick={()=>{setPersona(p.id);setStep(1);}} style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"8px",padding:"10px 14px",color:"#57534e",fontSize:"13px",cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:"10px",transition:"all 0.15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#16a34a";e.currentTarget.style.color="#1c1917";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e7e5e4";e.currentTarget.style.color="#57534e";}}>
                <span style={{color:"#16a34a",fontSize:"13px"}}>{p.icon}</span>{p.label}
              </button>
            ))}
          </div>
        </>)}
        {step===1&&persona&&(<>
          <p style={{color:"#1c1917",fontSize:"13px",lineHeight:1.7,margin:"0 0 16px"}}>{responses[persona].msg}</p>
          <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
            {responses[persona].links.map(l=>(
              <a key={l.label} href={l.href} target={l.href.startsWith("#")?"_self":"_blank"} rel="noreferrer"
                onClick={l.href.startsWith("#")?(e)=>{e.preventDefault();onClose();document.querySelector(l.href)?.scrollIntoView({behavior:"smooth"});}:undefined}
                style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"8px",padding:"10px 14px",color:"#16a34a",fontSize:"13px",cursor:"pointer",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span>{l.label}</span>
                <span style={{fontSize:"11px",opacity:0.5}}>{l.icon}</span>
              </a>
            ))}
          </div>
          <button onClick={()=>{setStep(0);setPersona(null);}} style={{background:"none",border:"none",color:"#a8a29e",fontSize:"12px",cursor:"pointer",marginTop:"12px",padding:0}}>← back</button>
        </>)}
      </div>
    </div>
  );
};

// ─── TESTIMONIALS MARQUEE ────────────────────────────────────────────────────
const Testimonials = () => {
  const all = [
    { name:"Abhishek", role:"Startup Founder", text:"Delivered a clean, fast backend API within the week. No back-and-forth — just shipped. Exactly what an early-stage team needs." },
    { name:"Anjali",   role:"Product Manager",  text:"He doesn't just write code — he thinks through the problem first. The monitoring tool he built saved us hours every week in incident response." },
    { name:"Vivek",    role:"Co-Founder, 3DShapeArt", text:"Communication was clear, deadlines were met, and the code was clean enough that we could maintain it easily." },
    { name:"Abhishek", role:"Startup Founder", text:"Delivered a clean, fast backend API within the week. No back-and-forth — just shipped. Exactly what an early-stage team needs." },
    { name:"Anjali",   role:"Product Manager",  text:"He doesn't just write code — he thinks through the problem first. The monitoring tool he built saved us hours every week in incident response." },
    { name:"Vivek",    role:"Co-Founder, 3DShapeArt", text:"Communication was clear, deadlines were met, and the code was clean enough that we could maintain it easily." },
  ];
  return (
    <div style={{overflow:"hidden",position:"relative",padding:"8px 0"}}>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}} .mq{display:flex;gap:20px;animation:marquee 32s linear infinite;width:max-content;} .mq:hover{animation-play-state:paused;}`}</style>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:80,background:"linear-gradient(to right,#fafaf8,transparent)",zIndex:2,pointerEvents:"none"}}/>
      <div style={{position:"absolute",right:0,top:0,bottom:0,width:80,background:"linear-gradient(to left,#fafaf8,transparent)",zIndex:2,pointerEvents:"none"}}/>
      <div className="mq">
        {all.map((t,i)=>(
          <div key={i} style={{width:300,flexShrink:0,background:"#fff",border:"1px solid #e7e5e4",borderRadius:"14px",padding:"22px 24px"}}>
            <div style={{display:"flex",gap:"3px",marginBottom:"14px"}}>{[1,2,3,4,5].map(s=><span key={s} style={{color:"#f59e0b",fontSize:"13px"}}>★</span>)}</div>
            <p style={{fontSize:"13px",color:"#44403c",lineHeight:1.75,marginBottom:"18px",fontStyle:"italic"}}>"{t.text}"</p>
            <div style={{display:"flex",alignItems:"center",gap:"10px",borderTop:"1px solid #f5f5f4",paddingTop:"14px"}}>
              <div style={{width:34,height:34,borderRadius:"50%",background:"#f0fdf4",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:600,color:"#16a34a",fontFamily:"'DM Mono',monospace",flexShrink:0}}>{t.name[0]}</div>
              <div>
                <div style={{fontSize:"13px",fontWeight:500,color:"#1c1917"}}>{t.name}</div>
                <div style={{fontSize:"11px",color:"#a8a29e",fontFamily:"'DM Mono',monospace"}}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── BUILDER DASHBOARD ───────────────────────────────────────────────────────
const BuilderDashboard = () => {
  const items = [
    { label:"Years Building",    value:"1.2", unit:"yrs",    color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0", desc:"Since first deploy" },
    { label:"Side Projects",     value:"6",   unit:"apps",   color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe", desc:"GetQuest · Habit · DeepLock + more" },
    { label:"Chrome Extension",  value:"1",   unit:"live",   color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe", desc:"DeepLock — on Web Store" },
    { label:"App in Progress",   value:"1",   unit:"WIP",    color:"#ea580c", bg:"#fff7ed", border:"#fed7aa", desc:"DeepLock App (mobile)" },
    { label:"Live SaaS Products",value:"3",   unit:"live",   color:"#0891b2", bg:"#ecfeff", border:"#a5f3fc", desc:"GetQuest · Habit · DevInsights" },
    { label:"DSA Solved",        value:"500+",unit:"problems",color:"#dc2626",bg:"#fef2f2", border:"#fecaca", desc:"LeetCode + GFG" },
  ];
  return (
    <div style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"16px",padding:"24px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"}}>
        <div>
          <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#a8a29e",letterSpacing:"0.1em",marginBottom:"4px"}}>BUILDER STATS</div>
          <div style={{fontSize:"16px",fontWeight:600,color:"#1c1917"}}>What I've shipped</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"6px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"6px",padding:"4px 10px"}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:"#16a34a",animation:"pulse 2s infinite"}}/>
          <span style={{fontSize:"11px",color:"#16a34a",fontFamily:"'DM Mono',monospace"}}>Active builder</span>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
        {items.map(item=>(
          <div key={item.label} style={{background:item.bg,border:`1px solid ${item.border}`,borderRadius:"10px",padding:"14px 16px"}}>
            <div style={{display:"flex",alignItems:"baseline",gap:"4px",marginBottom:"4px"}}>
              <span style={{fontSize:"24px",fontWeight:700,color:item.color,fontFamily:"'DM Mono',monospace",lineHeight:1}}>{item.value}</span>
              <span style={{fontSize:"10px",color:item.color,fontFamily:"'DM Mono',monospace",opacity:0.7}}>{item.unit}</span>
            </div>
            <div style={{fontSize:"12px",fontWeight:500,color:"#1c1917",marginBottom:"3px"}}>{item.label}</div>
            <div style={{fontSize:"10px",color:"#78716c"}}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── NOW PAGE ────────────────────────────────────────────────────────────────
const NowPage = () => {
  const now = [
    { color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe", label:"Building",  item:"DeepLock mobile app",           detail:"React Native port of the Chrome Extension — App Store Q2 2025" },
    { color:"#0891b2", bg:"#ecfeff", border:"#a5f3fc", label:"Learning",  item:"Kafka & event-driven patterns",  detail:"For DevInsights AI pipeline — reading Designing Data-Intensive Applications" },
    { color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0", label:"At work",   item:"Observability at AqueraLabs",    detail:"Distributed tracing on Lambda functions — improving incident response" },
    { color:"#b45309", bg:"#fffbeb", border:"#fde68a", label:"Reading",   item:"Designing Data-Intensive Apps",  detail:"Kleppmann — replication, partitioning, consensus" },
  ];
  return (
    <div style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"16px",padding:"24px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"8px"}}>
        <div>
          <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#a8a29e",letterSpacing:"0.1em",marginBottom:"4px"}}>NOW PAGE</div>
          <div style={{fontSize:"15px",fontWeight:600,color:"#1c1917"}}>What I'm doing right now</div>
        </div>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:"#a8a29e",background:"#f5f5f4",padding:"4px 10px",borderRadius:"4px"}}>Updated Mar 2025</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
        {now.map((n,i)=>(
          <div key={i} style={{background:n.bg,border:`1px solid ${n.border}`,borderRadius:"10px",padding:"14px 16px"}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:n.color,letterSpacing:"0.06em",display:"block",marginBottom:"6px"}}>{n.label}</span>
            <div style={{fontSize:"13px",fontWeight:500,color:"#1c1917",marginBottom:"3px"}}>{n.item}</div>
            <div style={{fontSize:"12px",color:"#78716c",lineHeight:1.5}}>{n.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── HOW I WORK ──────────────────────────────────────────────────────────────
const HowIWork = () => {
  const traits = [
    { icon:"⚡", title:"Ship first, refine after",     desc:"Working code > perfect code. I push fast, then iterate. Waiting for perfect ships nothing." },
    { icon:"📡", title:"Async-first",                  desc:"Clear written updates. I flag blockers early and don't disappear mid-sprint." },
    { icon:"🔧", title:"Own the whole thing",           desc:"I debug in prod at 2am if needed. I don't hand things off at the edge of my ticket." },
    { icon:"💡", title:"Ask why before how",            desc:"Most bugs are caused by solving the wrong problem cleanly. I understand before I implement." },
  ];
  return (
    <div style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"16px",padding:"24px"}}>
      <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#a8a29e",letterSpacing:"0.1em",marginBottom:"4px"}}>WORKING STYLE</div>
      <div style={{fontSize:"15px",fontWeight:600,color:"#1c1917",marginBottom:"18px"}}>How I work</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
        {traits.map((t,i)=>(
          <div key={i} style={{padding:"14px",background:"#fafaf8",border:"1px solid #f5f5f4",borderRadius:"10px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"5px"}}>
              <span style={{fontSize:"14px"}}>{t.icon}</span>
              <span style={{fontSize:"12px",fontWeight:500,color:"#1c1917"}}>{t.title}</span>
            </div>
            <p style={{fontSize:"12px",color:"#78716c",lineHeight:1.55}}>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── ASK ME ABOUT ────────────────────────────────────────────────────────────
const AskMeAbout = () => {
  const topics = [
    { topic:"Multi-tenant SaaS backends",            depth:"Deep",    color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0" },
    { topic:"AWS Lambda + event-driven arch",         depth:"Deep",    color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0" },
    { topic:"LLM integrations in backend",           depth:"Deep",    color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0" },
    { topic:"Scalable REST API design",              depth:"Deep",    color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0" },
    { topic:"Redis caching strategies",              depth:"Good",    color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe" },
    { topic:"Founding a solo SaaS (GetQuest)",       depth:"Built it",color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe" },
  ];
  return (
    <div style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"16px",padding:"24px"}}>
      <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#a8a29e",letterSpacing:"0.1em",marginBottom:"4px"}}>INTERVIEW READY</div>
      <div style={{fontSize:"15px",fontWeight:600,color:"#1c1917",marginBottom:"5px"}}>Ask me about</div>
      <p style={{fontSize:"11px",color:"#a8a29e",marginBottom:"16px",fontFamily:"'DM Mono',monospace"}}>Topics I can go deep on</p>
      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
        {topics.map((t,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"9px 12px",background:t.bg,border:`1px solid ${t.border}`,borderRadius:"7px"}}>
            <span style={{fontSize:"13px",color:"#1c1917"}}>{t.topic}</span>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:t.color,flexShrink:0}}>{t.depth}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── TECH DECISIONS ──────────────────────────────────────────────────────────
const TechDecisions = () => {
  const decisions = [
    {
      question:"Why Lambda over EC2 for GetQuest?",
      answer:"GetQuest has bursty traffic — vendor reviews happen in clusters. Lambda auto-scales, zero ops, and pay-per-request made more sense than managing instances at early stage.",
      tags:["AWS Lambda","Cost","Scalability"],
    },
    {
      question:"Why Supabase over raw Postgres?",
      answer:"Needed row-level security for multi-tenant isolation and GDPR compliance without building auth from scratch. Traded some query control for 3 weeks of engineering time.",
      tags:["Supabase","GDPR","Multi-tenant"],
    },
    {
      question:"Why Redis for the monitoring tool?",
      answer:"Log aggregation was hammering MySQL on every page load. Redis with 30s TTL cut DB load 60% — monitoring doesn't need millisecond freshness.",
      tags:["Redis","MySQL","Performance"],
    },
  ];
  return (
    <div style={{background:"#fff",border:"1px solid #e7e5e4",borderRadius:"16px",padding:"24px"}}>
      <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#a8a29e",letterSpacing:"0.1em",marginBottom:"4px"}}>ENGINEERING THINKING</div>
      <div style={{fontSize:"15px",fontWeight:600,color:"#1c1917",marginBottom:"5px"}}>Why I chose what I chose</div>
      <p style={{fontSize:"11px",color:"#a8a29e",marginBottom:"20px",fontFamily:"'DM Mono',monospace"}}>Real decisions from real projects</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {decisions.map((d,i)=>(
          <div key={i} style={{borderLeft:"3px solid #e7e5e4",paddingLeft:"14px"}}>
            <div style={{fontSize:"13px",fontWeight:500,color:"#1c1917",marginBottom:"6px"}}>{d.question}</div>
            <p style={{fontSize:"12px",color:"#78716c",lineHeight:1.65,marginBottom:"10px"}}>{d.answer}</p>
            <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
              {d.tags.map(t=><span key={t} style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:"#78716c",background:"#f5f5f4",border:"1px solid #e7e5e4",borderRadius:"4px",padding:"2px 7px"}}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [botOpen,setBotOpen]=useState(false);
  const [activeSection,setActiveSection]=useState("home");
  const [menuOpen,setMenuOpen]=useState(false);

  useEffect(()=>{
    const s=()=>{
      const ids=["home","about","work","projects","freelance","skills","thinking","contact"];
      for(const id of [...ids].reverse()){
        const el=document.getElementById(id);
        if(el&&window.scrollY>=el.offsetTop-120){setActiveSection(id);break;}
      }
    };
    window.addEventListener("scroll",s,{passive:true});
    return()=>window.removeEventListener("scroll",s);
  },[]);

  useEffect(()=>{const t=setTimeout(()=>setBotOpen(true),4000);return()=>clearTimeout(t);},[]);

  const scrollTo=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false);};

  const navItems=[
    {id:"home",     label:"Home"},
    {id:"about",    label:"About"},
    {id:"work",     label:"Work"},
    {id:"projects", label:"Projects"},
    {id:"freelance",label:"Freelance"},
    {id:"skills",   label:"Skills"},
    {id:"thinking", label:"Thinking"},
    {id:"contact",  label:"Contact"},
  ];

  return (
    <div style={{background:C.bg,color:C.text,minHeight:"100vh",fontFamily:"'DM Sans','Segoe UI',sans-serif",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .tag{display:inline-block;padding:3px 10px;border-radius:4px;font-size:11px;font-family:'DM Mono',monospace;background:#f5f5f4;color:#78716c;border:1px solid #e7e5e4;}
        .tag.green{background:#f0fdf4;color:#15803d;border-color:#bbf7d0;}
        .tag.blue{background:#eff6ff;color:#1d4ed8;border-color:#bfdbfe;}
        .tag.amber{background:#fffbeb;color:#b45309;border-color:#fde68a;}
        .tag.purple{background:#f5f3ff;color:#6d28d9;border-color:#ddd6fe;}
        .tag.red{background:#fef2f2;color:#b91c1c;border-color:#fecaca;}
        .card{background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:24px;}
        a{color:inherit;text-decoration:none;}
        .nav-link{background:none;border:none;color:#78716c;font-size:13px;cursor:pointer;padding:5px 10px;border-radius:6px;transition:color 0.15s;font-family:'DM Sans',sans-serif;}
        .nav-link:hover,.nav-link.active{color:#1c1917;}
        .nav-link.active{background:#f5f5f4;}
        .btn-primary{background:#16a34a;color:#fff;font-weight:600;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-size:14px;font-family:'DM Sans',sans-serif;transition:background 0.15s;}
        .btn-primary:hover{background:#15803d;}
        .btn-outline{background:#fff;color:#1c1917;font-weight:500;border:1px solid #e7e5e4;padding:12px 24px;border-radius:8px;cursor:pointer;font-size:14px;font-family:'DM Sans',sans-serif;transition:border-color 0.15s;display:inline-flex;align-items:center;}
        .btn-outline:hover{border-color:#a8a29e;}
        .skill-bar{height:3px;background:#f5f5f4;border-radius:3px;overflow:hidden;}
        .skill-fill{height:100%;border-radius:3px;}
        .project-card{background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:24px;transition:box-shadow 0.2s,border-color 0.2s;}
        .project-card:hover{border-color:#d6d3d1;box-shadow:0 4px 16px rgba(0,0,0,0.06);}
        .section-label{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.14em;color:#a8a29e;text-transform:uppercase;margin-bottom:10px;}
        @media(max-width:768px){
          .three-col{grid-template-columns:1fr!important;}
          .two-col{grid-template-columns:1fr!important;}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .dash-grid{grid-template-columns:repeat(2,1fr)!important;}
          .work-grid{grid-template-columns:repeat(2,1fr)!important;}
          .desktop-nav{display:none!important;}
          .mob-btn{display:flex!important;}
        }
        @media(min-width:769px){.mob-btn{display:none!important;}.mob-menu{display:none!important;}}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(250,250,248,0.92)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${C.border}`,padding:"0 24px",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <button onClick={()=>scrollTo("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}}>
          <span style={{fontFamily:"'DM Mono',monospace",fontSize:"14px",color:C.accent,fontWeight:500}}>SL</span>
          <span style={{color:C.textFaint,fontSize:"13px"}}>sangamesh.vercel.app</span>
        </button>
        <div className="desktop-nav" style={{display:"flex",gap:"1px"}}>
          {navItems.map(n=>(
            <button key={n.id} onClick={()=>scrollTo(n.id)} className={`nav-link${activeSection===n.id?" active":""}`}>{n.label}</button>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"6px",background:C.accentBg,border:`1px solid ${C.accentBorder}`,borderRadius:"6px",padding:"5px 12px"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.accent,animation:"pulse 2s infinite"}}/>
            <span style={{fontSize:"11px",color:C.accent,fontFamily:"'DM Mono',monospace",whiteSpace:"nowrap"}}>Open to Work</span>
          </div>
          <button className="mob-btn" onClick={()=>setMenuOpen(o=>!o)} style={{background:"none",border:`1px solid ${C.border}`,color:C.textMuted,cursor:"pointer",fontSize:"16px",display:"none",width:36,height:36,borderRadius:8,alignItems:"center",justifyContent:"center"}}>☰</button>
        </div>
      </nav>

      {menuOpen&&(
        <div className="mob-menu" style={{position:"fixed",top:56,left:0,right:0,zIndex:99,background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"10px 16px",display:"flex",flexDirection:"column",gap:"2px"}}>
          {navItems.map(n=><button key={n.id} onClick={()=>scrollTo(n.id)} className="nav-link" style={{textAlign:"left"}}>{n.label}</button>)}
        </div>
      )}

      <main style={{paddingTop:"56px"}}>

        {/* ── HERO ── */}
        <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"0 24px",maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{width:"100%",animation:"fadeUp 0.7s ease",paddingTop:"40px",paddingBottom:"40px"}}>
            <p style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:C.textFaint,letterSpacing:"0.12em",marginBottom:"18px"}}>BACKEND ENGINEER · BUILDER · OPEN TO WORK</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"24px",alignItems:"center"}}>
              <span className="tag green">Backend Engineer</span>
              <span className="tag blue">AI Integrations</span>
              <span className="tag amber">Bengaluru · Remote OK</span>
              <span className="tag purple">SDE-2</span>
            </div>
            <h1 style={{fontSize:"clamp(42px,8vw,88px)",fontWeight:600,lineHeight:1.04,letterSpacing:"-0.03em",marginBottom:"20px",color:"#1c1917"}}>
              Sangamesh<br/><span style={{color:C.accent}}>Lingshetty</span>
            </h1>
            <p style={{fontSize:"clamp(16px,2vw,20px)",color:C.textMuted,maxWidth:"520px",lineHeight:1.7,marginBottom:"32px"}}>
              I build backends that don't break. Shipped 3 live products, 1 Chrome Extension, integrating LLMs into production — currently at AqueraLabs, looking for what's next.
            </p>
            <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"56px"}}>
              <button className="btn-primary" onClick={()=>scrollTo("contact")}>Get in touch →</button>
              <button className="btn-outline" onClick={()=>scrollTo("projects")}>View my work</button>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
              <a href={LINKS.topmate} target="_blank" rel="noreferrer" className="btn-outline">Book a call ↗</a>
            </div>
            <div className="stats-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:C.border,borderRadius:"12px",overflow:"hidden",maxWidth:"620px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
              {[
                {num:"1.2yr", label:"Production Exp."},
                {num:"3",     label:"Live SaaS Products"},
                {num:"1",     label:"Chrome Extension"},
                {num:"500+",  label:"DSA Solved"},
              ].map(s=>(
                <div key={s.label} style={{background:C.surface,padding:"18px 14px",textAlign:"center"}}>
                  <span style={{display:"block",fontFamily:"'DM Mono',monospace",fontSize:"20px",fontWeight:600,color:C.text}}>{s.num}</span>
                  <span style={{display:"block",fontSize:"11px",color:C.textFaint,marginTop:"4px"}}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUILDER DASHBOARD ── */}
        <section style={{padding:"0 24px 40px",maxWidth:"1100px",margin:"0 auto"}}>
          <BuilderDashboard/>
        </section>

        {/* ── NOW PAGE ── */}
        <section style={{padding:"0 24px 80px",maxWidth:"1100px",margin:"0 auto"}}>
          <NowPage/>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">About</div>
          <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}}>
            <div>
              <h2 style={{fontSize:"clamp(26px,4vw,38px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"20px",lineHeight:1.15}}>I build things<br/>that actually ship.</h2>
              <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"28px"}}>
                {[
                  "1+ year at AqueraLabs building production microservices on Node.js + AWS Lambda.",
                  "Shipped GetQuest solo — a live GDPR SaaS. Published DeepLock on the Chrome Web Store.",
                  "Now targeting AI-first startups where reliability and shipping speed both matter.",
                ].map((line,i)=>(
                  <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                    <span style={{color:C.accentBorder,flexShrink:0,marginTop:"4px",fontSize:"16px"}}>—</span>
                    <p style={{fontSize:"15px",color:C.textMuted,lineHeight:1.65}}>{line}</p>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{fontSize:"13px",padding:"8px 16px"}}>LinkedIn ↗</a>
                <a href={LINKS.topmate} target="_blank" rel="noreferrer" className="btn-outline" style={{fontSize:"13px",padding:"8px 16px"}}>Book 1:1 ↗</a>
                <a href={LINKS.hashnode} target="_blank" rel="noreferrer" className="btn-outline" style={{fontSize:"13px",padding:"8px 16px"}}>Articles ↗</a>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
              {[
                {year:"2022",    title:"Started from zero",       desc:"HTML, CSS, JS. First CRUD app. Figured out I loved the backend side.",             dot:"#d6d3d1"},
                {year:"2023",    title:"Got serious",             desc:"Deep Node.js, PostgreSQL, Git. Web dev internship, first production deploy.",       dot:"#d6d3d1"},
                {year:"Feb 2025",title:"AqueraLabs",              desc:"Backend SWE — microservices, AWS Lambda, CI/CD. Special Appreciation Award.",       dot:"#2563eb",bold:true},
                {year:"2025",    title:"Shipping solo",           desc:"GetQuest (live SaaS) · DeepLock (Chrome Extension) · DevInsights AI · LLM integrations.", dot:"#16a34a",bold:true},
                {year:"Now",     title:"Seeking next challenge",  desc:"SDE-2 at AI-first startups. Immediate joiner, 1 week notice.",                     dot:"#16a34a",pulse:true,bold:true},
              ].map(item=>(
                <div key={item.year} style={{display:"flex",gap:"14px"}}>
                  <div style={{paddingTop:"5px"}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:item.dot,...(item.pulse?{animation:"pulse 2s infinite"}:{})}}/>
                  </div>
                  <div>
                    <div style={{display:"flex",gap:"8px",alignItems:"baseline",marginBottom:"3px"}}>
                      <span style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:item.pulse?"#16a34a":C.textFaint}}>{item.year}</span>
                      <span style={{fontSize:"14px",fontWeight:item.bold?500:400,color:item.bold?C.text:C.textMuted}}>{item.title}</span>
                    </div>
                    <p style={{fontSize:"13px",color:C.textFaint,lineHeight:1.6}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK EXPERIENCE ── */}
        <section id="work" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Experience</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"36px"}}>Where I've worked</h2>
          <div className="card" style={{borderColor:"#bbf7d0"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"20px"}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"4px"}}>
                  <span style={{fontSize:"18px",fontWeight:600,color:C.text}}>AqueraLabs Pvt. Ltd.</span>
                  <span className="tag green" style={{fontSize:"10px"}}>Current</span>
                </div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"12px",color:C.accent}}>Backend Software Engineer</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:C.textFaint}}>Feb 2025 – Present</div>
                <div style={{fontSize:"12px",color:C.textFaint}}>Bengaluru, India</div>
              </div>
            </div>
            <div style={{marginBottom:"22px"}}>
              <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:C.textFaint,marginBottom:"14px",letterSpacing:"0.08em"}}>IMPACT</div>
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {[
                  {label:"API latency reduced",      before:100,after:55,color:"#16a34a",desc:"45% faster responses"},
                  {label:"DB load reduced (Redis)",  before:100,after:40,color:"#2563eb",desc:"60% less queries"},
                  {label:"Deploy time",              before:120,after:15,color:"#7c3aed",desc:"2hrs → 15min (CI/CD)"},
                  {label:"Incident response faster", before:100,after:30,color:"#ea580c",desc:"70% with AI log alerts"},
                ].map(m=>(
                  <div key={m.label}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}>
                      <span style={{fontSize:"12px",color:C.textMuted}}>{m.label}</span>
                      <span style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:m.color}}>{m.desc}</span>
                    </div>
                    <div style={{display:"flex",gap:"3px",height:"5px"}}>
                      <div style={{flex:m.after,background:m.color,borderRadius:"3px"}}/>
                      <div style={{flex:m.before-m.after,background:"#f5f5f4",borderRadius:"3px"}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"7px",marginBottom:"20px"}}>
              {[
                "Built and maintained REST APIs and backend services in production — core product + customer-facing features",
                "Designed MySQL schemas and AWS infra (Lambda, EC2, S3, IAM) for a multi-tenant SaaS platform",
                "Built internal monitoring tool with Slack/email alerts + AI-based log summarisation — 70% faster incident response",
                "Received Special Appreciation Award for technical contributions and innovation",
              ].map((item,i)=>(
                <li key={i} style={{display:"flex",gap:"10px",fontSize:"13px",color:C.textMuted,lineHeight:1.6}}>
                  <span style={{color:C.accentBorder,flexShrink:0}}>—</span>{item}
                </li>
              ))}
            </ul>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {["Node.js","TypeScript","AWS Lambda","EC2","S3","MySQL","Redis","Docker","GitHub Actions","OAuth 2.0","RBAC"].map(t=>(
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Projects</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"8px"}}>Things I've shipped</h2>
          <p style={{color:C.textFaint,fontSize:"13px",marginBottom:"36px",fontFamily:"'DM Mono',monospace"}}>Production products, not demos.</p>

          <div className="project-card" style={{borderColor:"#bbf7d0",marginBottom:"18px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px"}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"5px"}}>
                  <span style={{fontSize:"20px",fontWeight:600,color:C.text}}>GetQuest</span>
                  <span className="tag green" style={{fontSize:"10px"}}>Live · Production</span>
                </div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:C.accent}}>GDPR-Compliant Vendor Questionnaire Automation SaaS</div>
              </div>
              <a href={LINKS.getquest} target="_blank" rel="noreferrer" className="btn-primary" style={{fontSize:"12px",padding:"8px 16px"}}>getquest.cloud ↗</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",marginBottom:"16px"}}>
              {[
                {v:"2wk→30min",l:"Turnaround",   c:"#16a34a",bg:"#f0fdf4",b:"#bbf7d0"},
                {v:"95%+",     l:"Fill accuracy",c:"#2563eb",bg:"#eff6ff",b:"#bfdbfe"},
                {v:"SOC2+GDPR",l:"Compliance",   c:"#7c3aed",bg:"#f5f3ff",b:"#ddd6fe"},
              ].map(m=>(
                <div key={m.l} style={{background:m.bg,border:`1px solid ${m.b}`,borderRadius:"8px",padding:"12px",textAlign:"center"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:"14px",fontWeight:600,color:m.c,marginBottom:"3px"}}>{m.v}</div>
                  <div style={{fontSize:"10px",color:C.textFaint}}>{m.l}</div>
                </div>
              ))}
            </div>
            <p style={{fontSize:"13px",color:C.textMuted,lineHeight:1.7,marginBottom:"14px"}}>
              GDPR-compliant SaaS automating vendor security questionnaires. AI-driven analysis auto-fills 50–200 question forms from SOC2/GDPR policies. Secure multi-tenant backend, full audit trails, JWT auth.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {["TypeScript","Next.js","Supabase","Vercel","LLM APIs","JWT","Multi-tenant","GDPR"].map(t=><span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="project-card" style={{borderColor:"#ddd6fe",marginBottom:"18px"}}>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",marginBottom:"14px"}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"5px"}}>
                  <span style={{fontSize:"20px",fontWeight:600,color:C.text}}>DeepLock</span>
                  <span className="tag purple" style={{fontSize:"10px"}}>Chrome Extension · Live</span>
                  <span className="tag amber" style={{fontSize:"10px"}}>Mobile App WIP</span>
                </div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:"#7c3aed"}}>Published on Chrome Web Store · Mobile coming Q2 2025</div>
              </div>
              <a href={LINKS.deeplock} target="_blank" rel="noreferrer" className="btn-outline" style={{fontSize:"12px",padding:"8px 16px"}}>Web Store ↗</a>
            </div>
            <p style={{fontSize:"13px",color:C.textMuted,lineHeight:1.7,marginBottom:"14px"}}>
              Built and published on the official Chrome Web Store. Currently porting to mobile (React Native) — targeting App Store launch Q2 2025.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {["Chrome Extension","JavaScript","React Native","Web Store"].map(t=><span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="project-card" style={{marginBottom:"18px"}}>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",marginBottom:"14px"}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"5px"}}>
                  <span style={{fontSize:"18px",fontWeight:600,color:C.text}}>DevInsights AI</span>
                  <span className="tag blue" style={{fontSize:"10px"}}>Active Dev</span>
                </div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:"#2563eb"}}>Multi-Tenant GitHub Analytics SaaS</div>
              </div>
              <a href={LINKS.devinsights} target="_blank" rel="noreferrer" className="btn-outline" style={{fontSize:"12px",padding:"8px 14px"}}>GitHub ↗</a>
            </div>
            <p style={{fontSize:"13px",color:C.textMuted,lineHeight:1.7,marginBottom:"14px"}}>
              Multi-tenant SaaS analysing GitHub activity. Processes 10K+ events/day, 90% API call reduction via intelligent caching. LLM integration for burnout risk detection and code quality insights.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {["Node.js","AWS Lambda","S3","GitHub API","LLM APIs","RBAC","Serverless"].map(t=><span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px"}}>
            {[
              {name:"My Habit",sub:"Habit Tracking SaaS",desc:"Telegram Bot integration, AWS serverless backend, DynamoDB, 80%+ test coverage.",tags:["Node.js","AWS Lambda","DynamoDB","Telegram API"],link:LINKS.habitdemo,linkLabel:"Live Demo ↗",badgeClass:"green"},
              {name:"RBAC Admin Panel",sub:"Role-Based Access Control",desc:"JWT-authenticated admin panel. Full CRUD on roles, users, permissions.",tags:["React.js","JWT","Tailwind CSS"],link:LINKS.rbac,linkLabel:"View ↗",badgeClass:"green"},
            ].map(p=>(
              <div key={p.name} className="project-card">
                <div style={{fontSize:"15px",fontWeight:600,color:C.text,marginBottom:"3px"}}>{p.name}</div>
                <div style={{fontSize:"11px",color:C.textFaint,fontFamily:"'DM Mono',monospace",marginBottom:"10px"}}>{p.sub}</div>
                <p style={{fontSize:"13px",color:C.textMuted,lineHeight:1.6,marginBottom:"12px"}}>{p.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"4px",marginBottom:"12px"}}>
                  {p.tags.map(t=><span key={t} className="tag" style={{fontSize:"10px"}}>{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:C.accent}}>{p.linkLabel}</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── FREELANCE ── */}
        <section id="freelance" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Freelance</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"8px"}}>Client work</h2>
          <p style={{color:C.textFaint,fontSize:"13px",marginBottom:"36px",fontFamily:"'DM Mono',monospace"}}>Open to contracts · 3+ months · Backend · SaaS · APIs</p>
          <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"36px"}}>
            <div className="card">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                    <span style={{fontSize:"16px",fontWeight:600,color:C.text}}>3D Shape Art</span>
                    <span className="tag green" style={{fontSize:"10px"}}>Delivered</span>
                  </div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:C.textFaint}}>Web Platform · Full-Stack</div>
                </div>
                <a href={LINKS.shapeart} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:C.accent}}>3dshapeart.com ↗</a>
              </div>
              <p style={{fontSize:"13px",color:C.textMuted,lineHeight:1.7,marginBottom:"14px"}}>Built the web platform for 3DShapeArt. Clean, performant, delivered on time with zero revision loops.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {["Web Development","Full-Stack","Performance"].map(t=><span key={t} className="tag" style={{fontSize:"10px"}}>{t}</span>)}
              </div>
            </div>
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px",padding:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div>
                <div style={{fontSize:"11px",fontFamily:"'DM Mono',monospace",color:"#15803d",marginBottom:"10px",letterSpacing:"0.08em"}}>AVAILABLE FOR CONTRACTS</div>
                <h3 style={{fontSize:"16px",fontWeight:600,color:C.text,marginBottom:"12px",lineHeight:1.35}}>Need a backend engineer who ships?</h3>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"7px",marginBottom:"20px"}}>
                  {["REST API design & build","AWS serverless architecture","SaaS backend from scratch","LLM / AI integrations"].map(s=>(
                    <li key={s} style={{display:"flex",gap:"8px",fontSize:"13px",color:C.textMuted}}>
                      <span style={{color:"#16a34a",flexShrink:0}}>✓</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <a href={LINKS.topmate} target="_blank" rel="noreferrer" className="btn-primary" style={{fontSize:"13px",padding:"10px 18px"}}>Book a free call ↗</a>
                <a href={LINKS.email} className="btn-outline" style={{fontSize:"13px",padding:"10px 18px"}}>Email me</a>
              </div>
            </div>
          </div>
          <div className="section-label" style={{marginBottom:"20px"}}>What clients say</div>
          <Testimonials/>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Skills</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"36px"}}>Technical stack</h2>
          <div className="three-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"18px"}}>
            {[
              {category:"Backend & Runtime",color:"#16a34a",bg:"#f0fdf4",border:"#bbf7d0",skills:[
                {name:"Node.js",pct:90},{name:"TypeScript",pct:80},{name:"Express.js",pct:88},{name:"REST APIs",pct:92},{name:"Microservices",pct:75},
              ]},
              {category:"Cloud & DevOps",color:"#2563eb",bg:"#eff6ff",border:"#bfdbfe",skills:[
                {name:"AWS Lambda",pct:82},{name:"EC2 / S3 / IAM",pct:75},{name:"Docker",pct:70},{name:"Terraform",pct:62},{name:"GitHub Actions",pct:85},
              ]},
              {category:"Databases & AI",color:"#7c3aed",bg:"#f5f3ff",border:"#ddd6fe",skills:[
                {name:"MySQL",pct:82},{name:"PostgreSQL",pct:78},{name:"MongoDB",pct:70},{name:"Redis",pct:72},{name:"LLM APIs / GenAI",pct:65},
              ]},
            ].map(group=>(
              <div key={group.category} style={{background:group.bg,border:`1px solid ${group.border}`,borderRadius:"12px",padding:"22px"}}>
                <div style={{fontSize:"12px",fontWeight:500,color:group.color,marginBottom:"18px",fontFamily:"'DM Mono',monospace"}}>{group.category}</div>
                <div style={{display:"flex",flexDirection:"column",gap:"13px"}}>
                  {group.skills.map(s=>(
                    <div key={s.name}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}>
                        <span style={{fontSize:"13px",color:C.textMuted}}>{s.name}</span>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:C.textFaint}}>{s.pct}%</span>
                      </div>
                      <div className="skill-bar"><div className="skill-fill" style={{width:`${s.pct}%`,background:group.color}}/></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:"18px",background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"12px",padding:"20px"}}>
            <div style={{fontSize:"12px",fontFamily:"'DM Mono',monospace",color:"#b45309",marginBottom:"12px"}}>CURRENTLY LEARNING</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
              {["Kubernetes","GraphQL","Kafka / RabbitMQ","Advanced System Design","Distributed Systems","RAG Pipelines"].map(s=>(
                <span key={s} className="tag amber">{s}</span>
              ))}
            </div>
          </div>
          <div style={{marginTop:"18px",display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {[
              {name:"Full Stack Development",issuer:"Udemy · July 2024"},
              {name:"Problem Solving",       issuer:"GeeksforGeeks · June 2024"},
              {name:"Web Development",       issuer:"Code Clause · Sep 2023"},
              {name:"Computer Vision",       issuer:"Great Learning · Oct 2024"},
            ].map(c=>(
              <div key={c.name} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 14px"}}>
                <div style={{fontSize:"13px",color:C.text,fontWeight:500}}>{c.name}</div>
                <div style={{fontSize:"10px",color:C.textFaint,marginTop:"2px",fontFamily:"'DM Mono',monospace"}}>{c.issuer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── THINKING SECTION ─────────────────────────────────────────────────
             This is the most differentiating section. Most devs skip all of this.
             Recruiters screenshot this for hiring managers. CTOs read the tech decisions.
        */}
        <section id="thinking" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Thinking</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"8px"}}>How I think & work</h2>
          <p style={{color:C.textFaint,fontSize:"13px",marginBottom:"36px",fontFamily:"'DM Mono',monospace"}}>The stuff that doesn't show on a resume.</p>
          <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"20px"}}>
            <AskMeAbout/>
            <HowIWork/>
          </div>
          <TechDecisions/>
        </section>

        {/* ── WRITING ── */}
        <section style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Writing</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:"8px"}}>Articles</h2>
          <p style={{color:C.textFaint,fontSize:"13px",marginBottom:"28px",fontFamily:"'DM Mono',monospace"}}>Things I've written while building.</p>
          <div className="three-col" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
            {[
              {title:"Creating an Email OTP System with React.js",    date:"Jan 2024",mins:7,tags:["React","Auth"]},
              {title:"Leveraging Firebase Real-Time Database",         date:"Dec 2023",mins:6,tags:["Firebase","Real-Time"]},
              {title:"Connecting to MongoDB: A Beginner's Guide",      date:"Nov 2023",mins:5,tags:["MongoDB","Backend"]},
            ].map(a=>(
              <a key={a.title} href={LINKS.hashnode} target="_blank" rel="noreferrer" className="card" style={{display:"block",transition:"box-shadow 0.2s,border-color 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#d6d3d1";e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.05)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e7e5e4";e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:C.textFaint,marginBottom:"10px"}}>{a.date} · {a.mins} min</div>
                <h3 style={{fontSize:"14px",color:C.text,lineHeight:1.55,marginBottom:"12px",fontWeight:500}}>{a.title}</h3>
                <div style={{display:"flex",gap:"6px"}}>{a.tags.map(t=><span key={t} className="tag" style={{fontSize:"10px"}}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",borderTop:`1px solid ${C.border}`}}>
          <div className="section-label">Contact</div>
          <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"start"}}>
            <div>
              <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:"16px"}}>Let's build<br/>something</h2>
              <p style={{color:C.textMuted,lineHeight:1.8,marginBottom:"24px",fontSize:"15px"}}>
                Looking for Backend / Full-Stack SDE-2 roles at AI-first startups. <strong style={{color:C.text}}>Immediate joiner.</strong> Also open to freelance contracts.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"20px"}}>
                {[
                  {label:"Email",    value:"sangameshlingshetty@gmail.com", href:LINKS.email},
                  {label:"LinkedIn", value:"sangamesh-lingshetty",          href:LINKS.linkedin},
                  {label:"GitHub",   value:"sangamesh-Lingshetty",          href:LINKS.github},
                  {label:"Topmate", value:"Book a 1:1 call",               href:LINKS.topmate},
                ].map(l=>(
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{display:"flex",gap:"12px",alignItems:"center",padding:"11px 16px",background:C.surface,border:`1px solid ${C.border}`,borderRadius:"8px",transition:"border-color 0.15s,box-shadow 0.15s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="#a8a29e";e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.05)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="#e7e5e4";e.currentTarget.style.boxShadow="none";}}>
                    <span style={{fontFamily:"'DM Mono',monospace",fontSize:"10px",color:C.textFaint,minWidth:"56px"}}>{l.label}</span>
                    <span style={{fontSize:"13px",color:C.textMuted}}>{l.value}</span>
                    <span style={{marginLeft:"auto",color:C.textFaint,fontSize:"12px"}}>↗</span>
                  </a>
                ))}
              </div>
            </div>
            <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"28px"}}>
              <h3 style={{fontSize:"15px",fontWeight:500,marginBottom:"5px"}}>What I'm looking for</h3>
              <p style={{fontSize:"11px",color:C.textFaint,marginBottom:"20px",fontFamily:"'DM Mono',monospace"}}>SDE-2 · Backend / Full-Stack · AI startups</p>
              <div style={{display:"flex",flexDirection:"column"}}>
                {[
                  ["Role",         "Backend or Full-Stack Engineer (SDE-2)"],
                  ["Target",       "AI startups, product companies"],
                  ["Availability", "Immediate joiner · 1 week notice"],
                  ["Location",     "Bengaluru · Open to remote"],
                  ["Open to",      "Full-time · 3+ month contracts"],
                ].map(([k,v],i,arr)=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",gap:"16px",fontSize:"13px",padding:"12px 0",borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}>
                    <span style={{color:C.textFaint,flexShrink:0}}>{k}</span>
                    <span style={{color:C.textMuted,textAlign:"right"}}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:"20px",paddingTop:"16px",borderTop:`1px solid ${C.border}`}}>
                <a href={LINKS.topmate} target="_blank" rel="noreferrer" className="btn-primary" style={{display:"block",textAlign:"center",fontSize:"13px",padding:"11px 20px"}}>
                  Book a free intro call on Topmate ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{borderTop:`1px solid ${C.border}`,padding:"28px 24px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px",maxWidth:"1100px",margin:"0 auto"}}>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:"11px",color:C.textFaint}}>© 2025 Sangamesh Lingshetty</p>
          <div style={{display:"flex",gap:"16px"}}>
            {[{label:"GitHub",href:LINKS.github},{label:"LinkedIn",href:LINKS.linkedin},{label:"Twitter",href:LINKS.twitter},{label:"Topmate",href:LINKS.topmate}].map(l=>(
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:C.textFaint,fontFamily:"'DM Mono',monospace",transition:"color 0.15s"}}
                onMouseEnter={e=>e.currentTarget.style.color=C.text}
                onMouseLeave={e=>e.currentTarget.style.color=C.textFaint}>{l.label}</a>
            ))}
          </div>
        </footer>
      </main>

      {!botOpen&&(
        <button onClick={()=>setBotOpen(true)} style={{position:"fixed",bottom:"1.5rem",right:"1.5rem",zIndex:9998,background:C.accent,color:"#fff",border:"none",borderRadius:"50%",width:"52px",height:"52px",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(22,163,74,0.35)"}}>💬</button>
      )}
      {botOpen&&<ChatBot onClose={()=>setBotOpen(false)}/>}
    </div>
  );
}

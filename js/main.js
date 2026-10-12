(()=>{
  // mobile nav
  const m=document.getElementById('mnav'),b=document.getElementById('burger');
  const open=v=>{m.hidden=!v;b.setAttribute('aria-expanded',v);document.body.style.overflow=v?'hidden':''};
  b.onclick=()=>open(true);document.getElementById('mclose').onclick=()=>open(false);
  m.querySelectorAll('a').forEach(a=>a.onclick=()=>open(false));

  // causes rotator
  const words=[...document.querySelectorAll('#causes li')];let ci=0;
  setInterval(()=>{words[ci].classList.remove('on');ci=(ci+1)%words.length;words[ci].classList.add('on')},2200);

  // stories strip
  const items=[...document.querySelectorAll('.strip__item')];
  const act=el=>{items.forEach(i=>i.classList.toggle('is-open',i===el))};
  items.forEach(i=>{i.addEventListener('mouseenter',()=>act(i));i.addEventListener('click',()=>act(i));i.addEventListener('focus',()=>act(i))});

  // counters (start from visible values; animate once when seen)
  const fmt=n=>n.toLocaleString('en-US');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
    const el=e.target,end=+el.dataset.count,t0=performance.now();
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const step=t=>{const p=Math.min(1,(t-t0)/1400),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=fmt(v);if(p<1)requestAnimationFrame(step)};
    requestAnimationFrame(step)}),{threshold:.6});
  document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));

  // donate form
  let freq='one-time',amt=15;
  const amts=[...document.querySelectorAll('#amts button')],other=document.getElementById('other'),fee=document.getElementById('fee'),
        feeAmt=document.getElementById('feeAmt'),btn=document.getElementById('dbtn'),note=document.getElementById('dnote');
  const money=n=>'£'+(Number.isInteger(n)?n:n.toFixed(2));
  const update=()=>{const f=Math.round(amt*0.05*100)/100||0;feeAmt.textContent=money(f)+(freq==='monthly'?' each month':'');
    const total=amt+(fee.checked?f:0);btn.textContent=amt>0?`Donate ${money(total)}${freq==='monthly'?' monthly':''}`:'Donate now'};
  document.querySelectorAll('.seg button').forEach(s=>s.onclick=()=>{document.querySelectorAll('.seg button').forEach(x=>x.setAttribute('aria-pressed',x===s));freq=s.dataset.freq;update()});
  amts.forEach(a=>a.onclick=()=>{amts.forEach(x=>x.setAttribute('aria-pressed',x===a));amt=+a.textContent.replace(/[^0-9.]/g,'');other.value='';update()});
  other.oninput=()=>{const v=parseFloat(other.value.replace(/[^0-9.]/g,''));amts.forEach(x=>x.setAttribute('aria-pressed',false));amt=isNaN(v)?0:v;update()};
  fee.onchange=update;
  document.getElementById('dform').onsubmit=e=>{e.preventDefault();
    note.textContent=amt>0?'Online donations are opening soon. Thank you for wanting to give!':'Choose or enter an amount first.'};
  update();

  // newsletter
  document.getElementById('news').onsubmit=e=>{e.preventDefault();const v=document.getElementById('email').value.trim();
    document.getElementById('newsmsg').textContent=/^\S+@\S+\.\S+$/.test(v)?'Our newsletter is coming soon. Thanks for your interest!':'Enter a valid email address.'};
})();

// Shared helpers
window.HX = {
  parseId(s){ s=(s||'').trim(); if(/^[\w-]{11}$/.test(s)) return s;
    const m=s.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([\w-]{11})/); return m?m[1]:null; },
  custom(){ try{return JSON.parse(localStorage.getItem('hitster_custom')||'[]')}catch(e){return []} },
  saveCustom(a){ localStorage.setItem('hitster_custom',JSON.stringify(a)); },
  parseCSV(text){ const out=[],bad=[];
    text.split(/\r?\n/).forEach((line,i)=>{ if(!line.trim()||/^\s*url\s*,/i.test(line)) return;
      const f=[];let cur='',q=false; for(const ch of line){ if(ch=='"'){q=!q;continue} if(ch==','&&!q){f.push(cur);cur='';continue} cur+=ch } f.push(cur);
      const id=HX.parseId(f[0]); const year=parseInt(f[3]);
      if(id&&f.length>=4&&year>1800) out.push({id,title:f[1].trim(),artist:f[2].trim(),year}); else bad.push(i+1); });
    return {out,bad}; },
  ytmUrl(id){ return 'https://music.youtube.com/watch?v='+id; },
  esc(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
};

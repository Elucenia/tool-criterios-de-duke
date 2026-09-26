/* tool-criterios-de-duke · ELUCENIA · https://github.com/Elucenia/tool-criterios-de-duke
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"criterios-de-duke","title":"Critérios de Duke-ISCVID 2023","fields":[["pato","<strong>Critério patológico:</strong> microrganismo em vegetação, tecido cardíaco, prótese ou êmbolo (cultura, histologia ou PCR), ou endocardite ativa na histologia","chk",[]],["maior_micro","<strong>Maior microbiológico:</strong> agente típico em ≥ 2 hemoculturas separadas, agente ocasional em ≥ 3, PCR positiva no sangue para <em>Coxiella</em>, <em>Bartonella</em> ou <em>T. whipplei</em>, ou sorologia específica (IgG anti-fase I de <em>C. burnetii</em> &gt; 1:800; IgG para <em>Bartonella</em> ≥ 1:800)","chk",[]],["maior_img","<strong>Maior de imagem:</strong> vegetação, perfuração, aneurisma, abscesso, pseudoaneurisma ou fístula ao eco/TC cardíaca; regurgitação valvar nova significativa; deiscência nova de prótese; ou PET/CT com FDG alterado em valva ou eletrodo","chk",[]],["maior_cir","<strong>Maior cirúrgico:</strong> endocardite documentada por inspeção direta na cirurgia cardíaca","chk",[]],["men_pred","<strong>Menor:</strong> predisposição (endocardite prévia, prótese valvar, reparo valvar, cardiopatia congênita, regurgitação ou estenose valvar, dispositivo intracardíaco, cardiomiopatia hipertrófica, uso de drogas injetáveis)","chk",[]],["men_febre","<strong>Menor:</strong> febre &gt; 38,0 °C","chk",[]],["men_vasc","<strong>Menor:</strong> fenômenos vasculares (embolia arterial, infarto séptico pulmonar, abscesso cerebral ou esplênico, aneurisma micótico, hemorragia intracraniana, hemorragia conjuntival, lesões de Janeway, púrpura purulenta)","chk",[]],["men_imuno","<strong>Menor:</strong> fenômenos imunológicos (fator reumatoide positivo, nódulos de Osler, manchas de Roth, glomerulonefrite por imunocomplexos)","chk",[]],["men_micro","<strong>Menor:</strong> evidência microbiológica que não preenche o critério maior","chk",[]],["men_img","<strong>Menor:</strong> PET/CT com FDG alterado até 3 meses após implante de prótese, enxerto ou dispositivo","chk",[]],["men_exame","<strong>Menor:</strong> sopro de regurgitação novo ao exame físico, se o ecocardiograma não estiver disponível","chk",[]],["rej_alt","<strong>Rejeição:</strong> diagnóstico alternativo firme que explica o quadro","chk",[]],["rej_res","<strong>Rejeição:</strong> sem recorrência após antibioticoterapia por menos de 4 dias","chk",[]],["rej_pato","<strong>Rejeição:</strong> sem evidência patológica na cirurgia ou necrópsia, com antibioticoterapia por menos de 4 dias","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var a=e.h;
var r=a.yes;
e.def("criterios-de-duke",function(e){var a,i,o,s=["maior_micro","maior_img","maior_cir"].filter(function(a){return r(e[a])}).length,d=["men_pred","men_febre","men_vasc","men_imuno","men_micro","men_img","men_exame"].filter(function(a){return r(e[a])}).length,n=r(e.rej_alt)||r(e.rej_res)||r(e.rej_pato),t=[["Critérios maiores",String(s)],["Critérios menores",String(d)]],l=1===s&&d>=1||d>=3;return r(e.pato)||s>=2||1===s&&d>=3||d>=5?(a="definida",i="high",o=r(e.pato)?"Endocardite definida (critério patológico)":"Endocardite definida (critérios clínicos)"):n?(a="rejeitada",i="low",o="Endocardite rejeitada (critério de exclusão presente)"):l?(a="possível",i="mid",o="Endocardite possível"):(a="rejeitada",i="low",o="Endocardite rejeitada (não preenche critérios de possível)"),{main:[a.charAt(0).toUpperCase()+a.slice(1),""],label:"Duke-ISCVID 2023",level:i,verdict:o,rows:t,note:"possível"===a?"Endocardite possível: repita hemoculturas antes de antibiótico quando possível e amplie a imagem (ecocardiograma transesofágico, TC cardíaca ou PET/CT).":"",raw:{maiores:s,menores:d,cls:a}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);

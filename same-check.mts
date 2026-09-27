import { site as en } from "./app/i18n/site/en/index.ts";
const codes = ["fr","es","id"];
function* walk(n:any,p:string[]=[]):any{for(const[k,v]of Object.entries(n)){if(typeof v==="string")yield[[...p,k].join("."),v];else if(v&&typeof v==="object")yield*walk(v,[...p,k]);}}
for (const c of codes){ const {site} = await import(`./app/i18n/site/${c}/index.ts`); const out=[]; for(const[p,v] of walk(en)){const t=p.split(".").reduce((o:any,k)=>o?.[k],site); if(t===v && /[a-z]{4,}/i.test(v)) out.push(`${p}=${v.slice(0,40)}`);} console.log(c, out.join(" | ")); }

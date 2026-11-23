/* Berkeley Looks Out · bear art shared by bear-join.html (phone) and bear-wall.html (projection).
   Rebuilt from the playtest app's Figma bear parts (200 x 300 canvas). */
window.BEAR=(function(){
const INK='#141414';
/* ── bear art, rebuilt from the app's Figma exports (200 × 300 canvas) ── */
const BASE={
  shadow:'M114 297C149.3 297 178 292.1 178 286C178 279.9 149.3 275 114 275C78.7 275 50 279.9 50 286C50 292.1 78.7 297 114 297Z',
  legL:'M86 250C86 242.3 79.7 236 72 236C64.3 236 58 242.3 58 250V270C58 277.7 64.3 284 72 284C79.7 284 86 277.7 86 270V250Z',
  legR:'M142 250C142 242.3 135.7 236 128 236C120.3 236 114 242.3 114 250V270C114 277.7 120.3 284 128 284C135.7 284 142 277.7 142 270V250Z',
  earL:'M70 100C77.7 100 84 93.7 84 86C84 78.3 77.7 72 70 72C62.3 72 56 78.3 56 86C56 93.7 62.3 100 70 100Z',
  earR:'M130 100C137.7 100 144 93.7 144 86C144 78.3 137.7 72 130 72C122.3 72 116 78.3 116 86C116 93.7 122.3 100 130 100Z',
  body:'M100 74C132 74 148 96 146 128C145 144 140 152 142 164C156 190 160 236 146 256C134 272 66 272 54 256C40 236 44 190 58 164C60 152 55 144 54 128C52 96 68 74 100 74Z',
  armR:'M140 172C158 178 170 200 166 218C164 228 151 228 150 218C148 206 144 198 138 192L140 172Z',
  armL:'M60 172C42 178 30 200 34 218C36 228 49 228 50 218C52 206 56 198 62 192L60 172Z',
  muzzle:'M100 150C111 150 120 143.7 120 136C120 128.3 111 122 100 122C89 122 80 128.3 80 136C80 143.7 89 150 100 150Z',
  nose:'M100 135.5C104.7 135.5 108.5 132.6 108.5 129C108.5 125.4 104.7 122.5 100 122.5C95.3 122.5 91.5 125.4 91.5 129C91.5 132.6 95.3 135.5 100 135.5Z'
};
const FUR={polar:{fur:'#fff',limb:'#fff',muz:'#EFECE6'},sun:{fur:'#F3E3B5',limb:'#F3E3B5',muz:'#FBF3DC'},grizzly:{fur:'#BEB9AF',limb:'#BEB9AF',muz:'#DDD9D0'},panda:{fur:'#fff',limb:'#232323',muz:'#EFECE6'}};
const st=(f,s='',w='')=>`fill="${f}"${s?` stroke="${s}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`:''}`;
const FACE={
  happy:`<path d="M77 117C81.7 110.3 86.3 110.3 91 117M109 117C113.7 110.3 118.3 110.3 123 117" ${st('none',INK,4.5)}/><path d="M92 141C97.3 147.7 102.7 147.7 108 141" ${st('none',INK,3.5)}/><g fill="${INK}" fill-opacity=".45">${[[68,124],[72,124],[76,124],[70,128],[74,128],[124,124],[128,124],[132,124],[126,128],[130,128]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.2"/>`).join('')}</g>`,
  dot:`<circle cx="84" cy="114" r="4.5" fill="${INK}"/><circle cx="116" cy="114" r="4.5" fill="${INK}"/><path d="M94 142C98 145.3 102 145.3 106 142" ${st('none',INK,3)}/>`,
  sleepy:`<path d="M77 115H91M109 115H123" ${st('none',INK,4.5)}/><ellipse cx="100" cy="145" rx="3.5" ry="4" fill="${INK}"/>`
};
const HAT={
  tophat:`<path d="M100 87C126.5 87 148 83 148 78C148 73 126.5 69 100 69C73.5 69 52 73 52 78C52 83 73.5 87 100 87Z" ${st(INK,INK,5)}/><path d="M123 16H77C74.2 16 72 18.2 72 21V73C72 75.8 74.2 78 77 78H123C125.8 78 128 75.8 128 73V21C128 18.2 125.8 16 123 16Z" ${st(INK,INK,5)}/><path d="M128 60H72V70H128Z" ${st('#6E6B66',INK,5)}/>`,
  bow:`<path d="M74 76L50 62L52 92ZM74 76L94 58L98 86Z" ${st(INK,INK,5)}/><circle cx="74" cy="76" r="7" ${st(INK,INK,5)}/>`,
  bucket:`<path d="M64 82C64 48 136 48 136 82Z" ${st('#E6E3DC',INK,5)}/><path d="M50 90C54 74 146 74 150 90C142 98 58 98 50 90Z" ${st('#E6E3DC',INK,5)}/>`
};
const NECK={
  bowtie:`<path d="M100 168L78 154V182ZM100 168L122 154V182Z" ${st(INK,INK,5)}/><circle cx="100" cy="168" r="6.5" ${st(INK,INK,5)}/>`,
  scarf:`<path d="M60 192L82 178L84 226L64 230Z" ${st('#fff',INK,5)}/><path d="M62 206L83 200M63 218L84 212" ${st('none','#6E6B66',5)}/><path d="M54 156C80 172 120 172 146 156L148 172C120 190 80 190 52 172Z" ${st('#fff',INK,5)}/><path d="M74 168V183M94 171V186M114 171V186M132 166V180" ${st('none','#6E6B66',6)}/>`,
  beads:[[64,160],[71.2,164.9],[78.4,169.4],[85.6,172.9],[92.8,175.2],[100,176],[107.2,175.2],[114.4,172.9],[121.6,169.4],[128.8,164.9],[136,160]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" ${st('#fff',INK,3)}/>`).join('')
};
const ICON={
  umbrella:`<path d="M-12 1a12 11 0 0 1 24 0Z" fill="#003262"/><path d="M0 1v8a3.2 3.2 0 0 1-6.4 0" fill="none" stroke="#003262" stroke-width="2.6" stroke-linecap="round"/><path d="M0-10v-2" stroke="#003262" stroke-width="2.6" stroke-linecap="round"/>`,
  charger:`<rect x="-7.5" y="-11" width="15" height="22" rx="3.5" fill="none" stroke="#003262" stroke-width="2.6"/><path d="M1.5-6.5-3.5 1h4l-1.5 5.5L4-1.5H0l1.5-5z" fill="#003262"/>`,
  other:`<path d="M0-11.5l3.3 6.7 7.4 1.1-5.4 5.2 1.3 7.3L0 5.3l-6.6 3.5 1.3-7.3-5.4-5.2 7.4-1.1z" fill="#003262"/>`,
  nert:`<path d="M-12 6a12 12 0 0 1 24 0Z" fill="#003262"/><path d="M-14 6h28" stroke="#003262" stroke-width="3" stroke-linecap="round"/><path d="M0-6v12" stroke="#fff" stroke-width="2.4"/>`,
  firstaid:`<path d="M-4-11h8v7h7v8h-7v7h-8v-7h-7v-8h7z" fill="#003262"/>`,
  fixit:`<path d="M-8 9 3-2M2-9a6 6 0 1 0 7 7l-4-1-2-2z" fill="none" stroke="#003262" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  bike:`<circle cx="-6" cy="3" r="5" fill="none" stroke="#003262" stroke-width="2.6"/><circle cx="7" cy="3" r="5" fill="none" stroke="#003262" stroke-width="2.6"/><path d="M-6 3-1-6h7L7 3M-1-6l3 9" fill="none" stroke="#003262" stroke-width="2.4" stroke-linejoin="round"/>`
};
const badge=(id,x)=>`<g transform="translate(${x+16} 226) scale(.82)"><circle r="18" fill="#fff" stroke="${INK}" stroke-width="2.6" stroke-dasharray="4 3"/>${ICON[id]||''}</g>`;
const UMB_STYLES=[
  {n:4,R:96,tilt:-15,side:1,h:55},
  {n:6,R:90,tilt:12,side:-1,h:62},
  {n:6,R:100,tilt:-9,side:1,h:48},
  {n:4,R:92,tilt:18,side:-1,h:52},
  {n:6,R:94,tilt:-20,side:1,h:58},
  {n:4,R:88,tilt:8,side:-1,h:46}
];
function umbrellaSVG(st){
  const L=220,R=st.R,rim=-L,dome=st.h||55,top=-L-dome,n=st.n;
  const xs=[...Array(n+1)].map((_,i)=>R-i*2*R/n);
  const canopy=`M${-R} ${rim}C${-R} ${top+8} ${R} ${top+8} ${R} ${rim}`+xs.slice(1).reverse().map((x,i,arr)=>{const prev=i?arr[i-1]:-R;return `Q${(prev+x)/2} ${rim-11} ${x} ${rim}`}).join('')+'Z';
  const rib=x=>`Q${(x*.55).toFixed(1)} ${top+dome*.33} ${x.toFixed(1)} ${rim}`;
  const panels=xs.slice(0,-1).map((x,i)=>{const y=xs[i+1];return `<path d="M0 ${top}${rib(x)}Q${(x+y)/2} ${rim-11} ${y.toFixed(1)} ${rim}Q${(y*.55).toFixed(1)} ${top+dome*.33} 0 ${top}Z" fill="${i%2?st.b:st.a}"/>`}).join('');
  const ribs=xs.slice(1,-1).filter(x=>Math.abs(x)>1).map(x=>`M0 ${top}${rib(x)}`).join('');
  const op=st.clear?' fill-opacity=".38"':'';
  const sd=st.side||1;
  return `<g transform="translate(${sd>0?158:42} 224) rotate(${st.tilt})">
    <path d="M0 ${rim}V-6a8 8 0 0 ${sd>0?1:0} ${sd>0?-16:16} 0" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>
    <g${op}>${panels}</g>
    ${st.dots?`<path d="${canopy}" fill="url(#umbDots)"/>`:''}
    ${st.clear?`<path d="M${-R*.55} ${rim-8}Q${-R*.5} ${top+dome*.3} ${-R*.1} ${top+6}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>`:''}
    <path d="${ribs}" fill="none" stroke="${INK}" stroke-width="2.2" stroke-opacity="${st.clear?.45:.65}"/>
    <path d="${canopy}" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M0 ${top}v-12" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><circle cx="0" cy="${top-13}" r="3.5" fill="${st.tip||'#fdb515'}" stroke="${INK}" stroke-width="2"/></g>`;
}

function bearSVG(p,{umbrella=false,badges=true}={}){
  const c=FUR[p.bear];
  const dots=[];for(let y=226;y<=262;y+=6)for(let x=58;x<=142;x+=6){const k=(y-220)/44;dots.push(`<circle cx="${x+((y/6)%2?3:0)}" cy="${y}" r="${(0.6+k*1.1).toFixed(2)}"/>`)}
  return `<path d="${BASE.shadow}" fill="${INK}" fill-opacity=".1"/>
  <path d="${BASE.legL}" ${st(c.limb,INK,5)}/><path d="${BASE.legR}" ${st(c.limb,INK,5)}/>
  <path d="${BASE.earL}" ${st(c.limb,INK,5)}/><path d="${BASE.earR}" ${st(c.limb,INK,5)}/>
  <circle cx="70" cy="86" r="6" fill="${INK}" fill-opacity=".18"/><circle cx="130" cy="86" r="6" fill="${INK}" fill-opacity=".18"/>
  <path d="${BASE.body}" ${st(c.fur,INK,5)}/>
  <g clip-path="url(#bodyClip)" fill="${INK}" fill-opacity=".38">${dots.join('')}</g>
  <path d="${BASE.armR}" ${st(c.limb,INK,5)}/><path d="${BASE.armL}" ${st(c.limb,INK,5)}/>
  <path d="${BASE.muzzle}" fill="${c.muz}"/><path d="${BASE.nose}" fill="${INK}"/><ellipse cx="97.5" cy="127" rx="2.4" ry="1.5" fill="#fff"/>
  ${NECK[p.neck]||''}${badges?(p.skills||[]).slice(0,2).map((s,i)=>badge(s,i?101:67)).join(''):''}${FACE[p.face]||''}${HAT[p.hat]||''}${umbrella?umbrellaSVG(umbrella):''}`;
}



/* options the phone offers, in the app's order */
const OPTIONS={bear:['polar','sun','grizzly','panda'],hat:['none','bucket','tophat','bow'],neck:['none','scarf','bowtie','beads'],face:['happy','dot','sleepy']};
const SKILLS=[{id:'bike',kind:'bike',label:'Bike repair',sub:'Flats, chains, brakes'},{id:'firstaid',kind:'kit',label:'First aid',sub:'Bandages, staying calm, calling for help'},{id:'fixit',kind:'wrench',label:'Fix-it',sub:'Tools, loose screws, wobbly chairs'},{id:'nert',kind:'helmet',label:'NERT/CERT',sub:'Trained for campus emergencies'},{id:'umbrella',kind:'umbrella',label:'Spare umbrella',sub:'Can lend or share one when it rains'},{id:'charger',kind:'charger',label:'Power bank',sub:'Phone charger or battery to share'}];
const OTHER={id:'other',kind:'other',label:'Something else',sub:'Write what you can help with'};
/* full SVG for one bear, for pages that just need a picture */
function bearPicture(p,h){return `<svg viewBox="0 -60 200 360" height="${h}" width="${Math.round(h*200/360)}" aria-hidden="true"><defs><clipPath id="bodyClip"><path d="${BASE.body}"/></clipPath></defs>${bearSVG(p,{badges:false})}</svg>`;}
return {INK,BASE,FUR,FACE,HAT,NECK,ICON,UMB_STYLES,umbrellaSVG,bearSVG,bearPicture,OPTIONS,SKILLS,OTHER};
})();

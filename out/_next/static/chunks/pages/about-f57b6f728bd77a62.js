(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return s(9454)}])},250:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return N}});let i=s(8754),a=s(1757),l=s(5893),r=a._(s(7294)),n=i._(s(3935)),c=i._(s(3709)),d=s(8212),o=s(6270),x=s(3334);s(6415);let h=s(5832),m=i._(s(5930)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,s,i,a,l){let r=null==e?void 0:e.src;e&&e["data-loaded-src"]!==r&&(e["data-loaded-src"]=r,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;s.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function p(e){let[t,s]=r.version.split(".",2),i=parseInt(t,10),a=parseInt(s,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let j=(0,r.forwardRef)((e,t)=>{let{src:s,srcSet:i,sizes:a,height:n,width:c,decoding:d,className:o,style:x,fetchPriority:h,placeholder:m,loading:u,unoptimized:j,fill:g,onLoadRef:N,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:w,onLoad:y,onError:_,...S}=e;return(0,l.jsx)("img",{...S,...p(h),loading:u,width:c,height:n,decoding:d,"data-nimg":g?"fill":"1",className:o,style:x,sizes:a,srcSet:i,src:s,ref:(0,r.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&f(e,m,N,v,b,j))},[s,m,N,v,b,_,j,t]),onLoad:e=>{f(e.currentTarget,m,N,v,b,j)},onError:e=>{w(!0),"empty"!==m&&b(!0),_&&_(e)}})});function g(e){let{isAppRouter:t,imgAttributes:s}=e,i={as:"image",imageSrcSet:s.srcSet,imageSizes:s.sizes,crossOrigin:s.crossOrigin,referrerPolicy:s.referrerPolicy,...p(s.fetchPriority)};return t&&n.default.preload?(n.default.preload(s.src,i),null):(0,l.jsx)(c.default,{children:(0,l.jsx)("link",{rel:"preload",href:s.srcSet?void 0:s.src,...i},"__nimg-"+s.src+s.srcSet+s.sizes)})}let N=(0,r.forwardRef)((e,t)=>{let s=(0,r.useContext)(h.RouterContext),i=(0,r.useContext)(x.ImageConfigContext),a=(0,r.useMemo)(()=>{let e=u||i||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),s=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:s}},[i]),{onLoad:n,onLoadingComplete:c}=e,f=(0,r.useRef)(n);(0,r.useEffect)(()=>{f.current=n},[n]);let p=(0,r.useRef)(c);(0,r.useEffect)(()=>{p.current=c},[c]);let[N,v]=(0,r.useState)(!1),[b,w]=(0,r.useState)(!1),{props:y,meta:_}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:a,blurComplete:N,showAltText:b});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{...y,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:w,ref:t}),_.priority?(0,l.jsx)(g,{isAppRouter:!s,imgAttributes:y}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8212:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),s(6415);let i=s(4010),a=s(6270);function l(e){return void 0!==e.default}function r(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var s;let n,c,d,{src:o,sizes:x,unoptimized:h=!1,priority:m=!1,loading:u,className:f,quality:p,width:j,height:g,fill:N=!1,style:v,onLoad:b,onLoadingComplete:w,placeholder:y="empty",blurDataURL:_,fetchPriority:S,layout:k,objectFit:C,objectPosition:P,lazyBoundary:A,lazyRoot:E,...I}=e,{imgConf:O,showAltText:z,blurComplete:R,defaultLoader:T}=t,D=O||a.imageConfigDefault;if("allSizes"in D)n=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);n={...D,allSizes:e,deviceSizes:t}}let M=I.loader||T;delete I.loader,delete I.srcSet;let L="__next_img_default"in M;if(L){if("custom"===n.loader)throw Error('Image with src "'+o+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=M;M=t=>{let{config:s,...i}=t;return e(i)}}if(k){"fill"===k&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!x&&(x=t)}let F="",G=r(j),B=r(g);if("object"==typeof(s=o)&&(l(s)||void 0!==s.src)){let e=l(o)?o.default:o;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,_=_||e.blurDataURL,F=e.src,!N){if(G||B){if(G&&!B){let t=G/e.width;B=Math.round(e.height*t)}else if(!G&&B){let t=B/e.height;G=Math.round(e.width*t)}}else G=e.width,B=e.height}}let U=!m&&("lazy"===u||void 0===u);(!(o="string"==typeof o?o:F)||o.startsWith("data:")||o.startsWith("blob:"))&&(h=!0,U=!1),n.unoptimized&&(h=!0),L&&o.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(h=!0),m&&(S="high");let W=r(p),J=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},z?{}:{color:"transparent"},v),Y=R||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:G,heightInt:B,blurWidth:c,blurHeight:d,blurDataURL:_||"",objectFit:J.objectFit})+'")':'url("'+y+'")',V=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},X=function(e){let{config:t,src:s,unoptimized:i,width:a,quality:l,sizes:r,loader:n}=e;if(i)return{src:s,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,s){let{deviceSizes:i,allSizes:a}=e;if(s){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(s);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,r),o=c.length-1;return{sizes:r||"w"!==d?r:"100vw",srcSet:c.map((e,i)=>n({config:t,src:s,quality:l,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:n({config:t,src:s,quality:l,width:c[o]})}}({config:n,src:o,unoptimized:h,width:G,quality:W,sizes:x,loader:M});return{props:{...I,loading:U?"lazy":u,fetchPriority:S,width:G,height:B,decoding:"async",className:f,style:{...J,...V},sizes:X.sizes,srcSet:X.srcSet,src:X.src},meta:{unoptimized:h,priority:m,placeholder:y,fill:N}}}},4010:function(e,t){"use strict";function s(e){let{widthInt:t,heightInt:s,blurWidth:i,blurHeight:a,blurDataURL:l,objectFit:r}=e,n=i?40*i:t,c=a?40*a:s,d=n&&c?"viewBox='0 0 "+n+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===r?"xMidYMid":"cover"===r?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return s}})},7922:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{getImageProps:function(){return n},default:function(){return c}});let i=s(8754),a=s(8212),l=s(250),r=i._(s(5930)),n=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},c=l.Image},5930:function(e,t){"use strict";function s(e){let{config:t,src:s,width:i,quality:a}=e;return t.path+"?url="+encodeURIComponent(s)+"&w="+i+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),s.__next_img_default=!0;let i=s},9454:function(e,t,s){"use strict";s.r(t);var i=s(5893);s(7294);var a=s(5675),l=s.n(a),r=s(1664),n=s.n(r);s(3943),t.default=()=>(0,i.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between lg:w-3/4 p-10 mx-auto",children:[(0,i.jsx)("div",{className:"flex justify-end font-mono text-base lg:w-3/4",children:(0,i.jsxs)("div",{className:"space-x-5 p-5",children:[(0,i.jsx)(n(),{href:"/about",children:"Home"}),(0,i.jsx)(n(),{href:"/publication",children:"Publication"}),(0,i.jsx)("a",{href:"/document/AyakaTsutsui_Resume .pdf",children:"CV"})]})}),(0,i.jsx)(l(),{className:"flex justify-center",src:"/ayakatsutsui.png",alt:"profile2",width:290,height:290,priority:!0}),(0,i.jsxs)("div",{className:"font-mono text-2xl lg:w-3/4 mx-auto",children:[(0,i.jsxs)("div",{className:"p-1 text-center",children:[(0,i.jsx)("p",{className:"text-2lg font-bold",children:"Ayaka Tsutsui | 筒井 彩華 "}),(0,i.jsx)("p",{className:"text-sm font-bold",children:"University of Tsukuba, Digital Nature Group"}),(0,i.jsx)("p",{className:"text-sm font-bold",children:"ayakatsutsui1128@digitalnature.slis.tsukuba.ac.jp"})]}),(0,i.jsx)("div",{className:"flex justify-center font-mono text-sm m1",children:(0,i.jsxs)("div",{className:"space-x-5",children:[(0,i.jsx)("a",{href:"https://scholar.google.co.jp/citations?hl=ja&user=X8KCWFUAAAAJ&view_op=list_works&sortby=title",target:"_blank",rel:"noopener noreferrer",children:"Google Scholar"}),(0,i.jsx)("a",{href:"https://github.com/angeleru1128",target:"_blank",rel:"noopener noreferrer",children:"Github"}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/ayaka-tsutsui-a34637187/?originalSubdomain=jp",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),(0,i.jsx)("a",{href:"https://twitter.com/angel_eru1128",target:"_blank",rel:"noopener noreferrer",children:"X"}),(0,i.jsx)("a",{href:"https://note.com/ayakatsutsuidesu/",target:"_blank",rel:"noopener noreferrer",children:"Blog"})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"Educations"})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023-2025"})}),(0,i.jsxs)("div",{className:"w-3/4",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"University of Tsukuba, Japan"}),(0,i.jsx)("p",{className:"text-base text-right",children:"Master Programs in Informatics,"}),(0,i.jsx)("p",{className:"text-base text-right",children:"Graduate School of Comprehensive Human Sciences"}),(0,i.jsx)("p",{className:"text-sm text-right",children:"Supervisor: Yoichi Ochiai and Tatsuki Fushimi"})]})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4 ",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12 ",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2021-2023"})}),(0,i.jsxs)("div",{className:"w-3/4 ",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"University of Tsukuba, Japan"}),(0,i.jsx)("p",{className:"text-base text-right",children:"College of Knowledge and Library Sciences,"}),(0,i.jsx)("p",{className:"text-base text-right",children:"School of Informatics, Knowledge Information Systems"}),(0,i.jsx)("p",{className:"text-sm text-right",children:"Supervisor: Yoichi Ochiai and Tatsuki Fushimi"})]})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12 ",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2014-2016"})}),(0,i.jsxs)("div",{className:"w-3/4 ",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"Japan College of Foreign Language"}),(0,i.jsx)("p",{className:"text-base text-right",children:"(diploma)"})]})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"Work Experiment"})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2022-2023"})}),(0,i.jsxs)("div",{className:"w-3/4",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"Panda CO., LTD.,"}),(0,i.jsx)("p",{className:"text-sm text-right",children:"Intern"})]})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2019-2020"})}),(0,i.jsxs)("div",{className:"w-3/4",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"China Airline CO., LTD.,"}),(0,i.jsx)("p",{className:"text-base text-right",children:"Flight Attentdant"}),(0,i.jsx)("p",{className:"text-sm text-right",children:"Full Time"})]})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2016-2019"})}),(0,i.jsxs)("div",{className:"w-3/4",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"ALL NIPPON AIRWAYS CO., LTD.,"}),(0,i.jsx)("p",{className:"text-base text-right",children:"Flight Attentdant"}),(0,i.jsx)("p",{className:"text-sm text-right",children:"Full Time"})]})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"University Operations"})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023-2023"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Research Assistant at Digital Nature Group"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Teaching Assistant of Introduction to Programming"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Teaching Assistant of Media Art"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2022"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Official on-campus tutor for international students"})})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7 ",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"Awards"})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2024"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"29th Student CG Contest, Game & Interaction Category, Best Award"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"WIRED CREATIVE HACK AWARD 2023, Runner-Up Prize"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2021"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Business plan contest for students in Ibaraki Prefecture 2021"})})]})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2023"})}),(0,i.jsx)("div",{className:"w-3/4",children:(0,i.jsx)("p",{className:"text-base text-right",children:"Business plan contest 2021 presented by The Chiba Bank and The Bank of Yokohama"})})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"Radio"})}),(0,i.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,i.jsxs)("div",{className:"flex lg:w-11/12",children:[(0,i.jsx)("div",{className:"w-1/4 p-0",children:(0,i.jsx)("p",{className:"text-base",children:"2022"})}),(0,i.jsxs)("div",{className:"w-3/4",children:[(0,i.jsx)("p",{className:"text-base text-right",children:"UTURES 落合陽一　RADIO PIXIE DUST"}),(0,i.jsx)("p",{className:"text-right",children:(0,i.jsx)("a",{href:"https://audee.jp/voice/show/42708",target:"_blank",rel:"noopener noreferrer",className:"text-sm",children:"link"})})]})]})}),(0,i.jsx)("div",{className:"h-0.5 bg-black"}),(0,i.jsx)("div",{className:"flex justify-center p-7",children:(0,i.jsx)("p",{className:"text-lg font-bold",children:"Others"})}),(0,i.jsx)("div",{className:"flex justify-center p-7 ",children:(0,i.jsx)("div",{className:"lg:w-11/12 p-0"})})]})]})},3943:function(){},5675:function(e,t,s){e.exports=s(7922)}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);
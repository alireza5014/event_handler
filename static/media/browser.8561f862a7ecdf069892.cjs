"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ch2={},node_worker_1={default:function(t,n,e,r,i){var s=new Worker(ch2[n]||(ch2[n]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(t){var n=t.data,e=n.$e$;if(e){var r=new Error(e[0]);r.code=e[1],r.stack=e[2],i(r,null)}else i(null,n)},s.postMessage(e,r),s}},u8=Uint8Array,u16=Uint16Array,i32=Int32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(t,n){for(var e=new u16(31),r=0;r<31;++r)e[r]=n+=1<<t[r-1];var i=new i32(e[30]);for(r=1;r<30;++r)for(var s=e[r];s<e[r+1];++s)i[s]=s-e[r]<<5|r;return{b:e,r:i}},_a=freb(fleb,2),fl=_a.b,revfl=_a.r;fl[28]=258,revfl[258]=28;for(var _b=freb(fdeb,0),fd=_b.b,revfd=_b.r,rev=new u16(32768),i=0;i<32768;++i){var x=(43690&i)>>1|(21845&i)<<1;x=(61680&(x=(52428&x)>>2|(13107&x)<<2))>>4|(3855&x)<<4,rev[i]=((65280&x)>>8|(255&x)<<8)>>1}var hMap=function(t,n,e){for(var r=t.length,i=0,s=new u16(n);i<r;++i)t[i]&&++s[t[i]-1];var a,o=new u16(n);for(i=1;i<n;++i)o[i]=o[i-1]+s[i-1]<<1;if(e){a=new u16(1<<n);var f=15-n;for(i=0;i<r;++i)if(t[i])for(var l=i<<4|t[i],u=n-t[i],h=o[t[i]-1]++<<u,c=h|(1<<u)-1;h<=c;++h)a[rev[h]>>f]=l}else for(a=new u16(r),i=0;i<r;++i)t[i]&&(a[i]=rev[o[t[i]-1]++]>>15-t[i]);return a},flt=new u8(288);for(i=0;i<144;++i)flt[i]=8;for(i=144;i<256;++i)flt[i]=9;for(i=256;i<280;++i)flt[i]=7;for(i=280;i<288;++i)flt[i]=8;var fdt=new u8(32);for(i=0;i<32;++i)fdt[i]=5;var flm=hMap(flt,9,0),flrm=hMap(flt,9,1),fdm=hMap(fdt,5,0),fdrm=hMap(fdt,5,1),max=function(t){for(var n=t[0],e=1;e<t.length;++e)t[e]>n&&(n=t[e]);return n},bits=function(t,n,e){var r=n/8|0;return(t[r]|t[r+1]<<8)>>(7&n)&e},bits16=function(t,n){var e=n/8|0;return(t[e]|t[e+1]<<8|t[e+2]<<16)>>(7&n)},shft=function(t){return(t+7)/8|0},slc=function(t,n,e){return(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length),new u8(t.subarray(n,e))};exports.FlateErrorCode={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14};var ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(t,n,e){var r=new Error(n||ec[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,err),!e)throw r;return r},inflt=function(t,n,e,r){var i=t.length,s=r?r.length:0;if(!i||n.f&&!n.l)return e||new u8(0);var a=!e,o=a||2!=n.i,f=n.i;a&&(e=new u8(3*i));var l=function(t){var n=e.length;if(t>n){var r=new u8(Math.max(2*n,t));r.set(e),e=r}},u=n.f||0,h=n.p||0,c=n.b||0,p=n.l,v=n.d,b=n.m,d=n.n,y=8*i;do{if(!p){u=bits(t,h,1);var g=bits(t,h+1,3);if(h+=3,!g){var m=t[(M=shft(h)+4)-4]|t[M-3]<<8,z=M+m;if(z>i){f&&err(0);break}o&&l(c+m),e.set(t.subarray(M,z),c),n.b=c+=m,n.p=h=8*z,n.f=u;continue}if(1==g)p=flrm,v=fdrm,b=9,d=5;else if(2==g){var w=bits(t,h,31)+257,x=bits(t,h+10,15)+4,S=w+bits(t,h+5,31)+1;h+=14;for(var U=new u8(S),D=new u8(19),k=0;k<x;++k)D[clim[k]]=bits(t,h+3*k,7);h+=3*x;var A=max(D),I=(1<<A)-1,T=hMap(D,A,1);for(k=0;k<S;){var M,Z=T[bits(t,h,I)];if(h+=15&Z,(M=Z>>4)<16)U[k++]=M;else{var G=0,F=0;for(16==M?(F=3+bits(t,h,3),h+=2,G=U[k-1]):17==M?(F=3+bits(t,h,7),h+=3):18==M&&(F=11+bits(t,h,127),h+=7);F--;)U[k++]=G}}var C=U.subarray(0,w),O=U.subarray(w);b=max(C),d=max(O),p=hMap(C,b,1),v=hMap(O,d,1)}else err(1);if(h>y){f&&err(0);break}}o&&l(c+131072);for(var E=(1<<b)-1,P=(1<<d)-1,_=h;;_=h){var L=(G=p[bits16(t,h)&E])>>4;if((h+=15&G)>y){f&&err(0);break}if(G||err(2),L<256)e[c++]=L;else{if(256==L){_=h,p=null;break}var j=L-254;if(L>264){var $=fleb[k=L-257];j=bits(t,h,(1<<$)-1)+fl[k],h+=$}var H=v[bits16(t,h)&P],q=H>>4;H||err(3),h+=15&H;O=fd[q];if(q>3){$=fdeb[q];O+=bits16(t,h)&(1<<$)-1,h+=$}if(h>y){f&&err(0);break}o&&l(c+131072);var B=c+j;if(c<O){var N=s-O,R=Math.min(O,B);for(N+c<0&&err(3);c<R;++c)e[c]=r[N+c]}for(;c<B;++c)e[c]=e[c-O]}}n.l=p,n.p=_,n.b=c,n.f=u,p&&(u=1,n.m=b,n.d=v,n.n=d)}while(!u);return c!=e.length&&a?slc(e,0,c):e.subarray(0,c)},wbits=function(t,n,e){e<<=7&n;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8},wbits16=function(t,n,e){e<<=7&n;var r=n/8|0;t[r]|=e,t[r+1]|=e>>8,t[r+2]|=e>>16},hTree=function(t,n){for(var e=[],r=0;r<t.length;++r)t[r]&&e.push({s:r,f:t[r]});var i=e.length,s=e.slice();if(!i)return{t:et,l:0};if(1==i){var a=new u8(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort((function(t,n){return t.f-n.f})),e.push({s:-1,f:25001});var o=e[0],f=e[1],l=0,u=1,h=2;for(e[0]={s:-1,f:o.f+f.f,l:o,r:f};u!=i-1;)o=e[e[l].f<e[h].f?l++:h++],f=e[l!=u&&e[l].f<e[h].f?l++:h++],e[u++]={s:-1,f:o.f+f.f,l:o,r:f};var c=s[0].s;for(r=1;r<i;++r)s[r].s>c&&(c=s[r].s);var p=new u16(c+1),v=ln(e[u-1],p,0);if(v>n){r=0;var b=0,d=v-n,y=1<<d;for(s.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));r<i;++r){var g=s[r].s;if(!(p[g]>n))break;b+=y-(1<<v-p[g]),p[g]=n}for(b>>=d;b>0;){var m=s[r].s;p[m]<n?b-=1<<n-p[m]++-1:++r}for(;r>=0&&b;--r){var z=s[r].s;p[z]==n&&(--p[z],++b)}v=n}return{t:new u8(p),l:v}},ln=function(t,n,e){return-1==t.s?Math.max(ln(t.l,n,e+1),ln(t.r,n,e+1)):n[t.s]=e},lc=function(t){for(var n=t.length;n&&!t[--n];);for(var e=new u16(++n),r=0,i=t[0],s=1,a=function(t){e[r++]=t},o=1;o<=n;++o)if(t[o]==i&&o!=n)++s;else{if(!i&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(i),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(i);s=1,i=t[o]}return{c:e.subarray(0,r),n:n}},clen=function(t,n){for(var e=0,r=0;r<n.length;++r)e+=t[r]*n[r];return e},wfblk=function(t,n,e){var r=e.length,i=shft(n+2);t[i]=255&r,t[i+1]=r>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<r;++s)t[i+s+4]=e[s];return 8*(i+4+r)},wblk=function(t,n,e,r,i,s,a,o,f,l,u){wbits(n,u++,e),++i[256];for(var h=hTree(i,15),c=h.t,p=h.l,v=hTree(s,15),b=v.t,d=v.l,y=lc(c),g=y.c,m=y.n,z=lc(b),w=z.c,x=z.n,S=new u16(19),U=0;U<g.length;++U)++S[31&g[U]];for(U=0;U<w.length;++U)++S[31&w[U]];for(var D=hTree(S,7),k=D.t,A=D.l,I=19;I>4&&!k[clim[I-1]];--I);var T,M,Z,G,F=l+5<<3,C=clen(i,flt)+clen(s,fdt)+a,O=clen(i,c)+clen(s,b)+a+14+3*I+clen(S,k)+2*S[16]+3*S[17]+7*S[18];if(f>=0&&F<=C&&F<=O)return wfblk(n,u,t.subarray(f,f+l));if(wbits(n,u,1+(O<C)),u+=2,O<C){T=hMap(c,p,0),M=c,Z=hMap(b,d,0),G=b;var E=hMap(k,A,0);wbits(n,u,m-257),wbits(n,u+5,x-1),wbits(n,u+10,I-4),u+=14;for(U=0;U<I;++U)wbits(n,u+3*U,k[clim[U]]);u+=3*I;for(var P=[g,w],_=0;_<2;++_){var L=P[_];for(U=0;U<L.length;++U){var j=31&L[U];wbits(n,u,E[j]),u+=k[j],j>15&&(wbits(n,u,L[U]>>5&127),u+=L[U]>>12)}}}else T=flm,M=flt,Z=fdm,G=fdt;for(U=0;U<o;++U){var $=r[U];if($>255){wbits16(n,u,T[(j=$>>18&31)+257]),u+=M[j+257],j>7&&(wbits(n,u,$>>23&31),u+=fleb[j]);var H=31&$;wbits16(n,u,Z[H]),u+=G[H],H>3&&(wbits16(n,u,$>>5&8191),u+=fdeb[H])}else wbits16(n,u,T[$]),u+=M[$]}return wbits16(n,u,T[256]),u+M[256]},deo=new i32([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),et=new u8(0),dflt=function(t,n,e,r,i,s){var a=s.z||t.length,o=new u8(r+a+5*(1+Math.ceil(a/7e3))+i),f=o.subarray(r,o.length-i),l=s.l,u=7&(s.r||0);if(n){u&&(f[0]=s.r>>3);for(var h=deo[n-1],c=h>>13,p=8191&h,v=(1<<e)-1,b=s.p||new u16(32768),d=s.h||new u16(v+1),y=Math.ceil(e/3),g=2*y,m=function(n){return(t[n]^t[n+1]<<y^t[n+2]<<g)&v},z=new i32(25e3),w=new u16(288),x=new u16(32),S=0,U=0,D=s.i||0,k=0,A=s.w||0,I=0;D+2<a;++D){var T=m(D),M=32767&D,Z=d[T];if(b[M]=Z,d[T]=M,A<=D){var G=a-D;if((S>7e3||k>24576)&&(G>423||!l)){u=wblk(t,f,0,z,w,x,U,k,I,D-I,u),k=S=U=0,I=D;for(var F=0;F<286;++F)w[F]=0;for(F=0;F<30;++F)x[F]=0}var C=2,O=0,E=p,P=M-Z&32767;if(G>2&&T==m(D-P))for(var _=Math.min(c,G)-1,L=Math.min(32767,D),j=Math.min(258,G);P<=L&&--E&&M!=Z;){if(t[D+C]==t[D+C-P]){for(var $=0;$<j&&t[D+$]==t[D+$-P];++$);if($>C){if(C=$,O=P,$>_)break;var H=Math.min(P,$-2),q=0;for(F=0;F<H;++F){var B=D-P+F&32767,N=B-b[B]&32767;N>q&&(q=N,Z=B)}}}P+=(M=Z)-(Z=b[M])&32767}if(O){z[k++]=268435456|revfl[C]<<18|revfd[O];var R=31&revfl[C],W=31&revfd[O];U+=fleb[R]+fdeb[W],++w[257+R],++x[W],A=D+C,++S}else z[k++]=t[D],++w[t[D]]}}for(D=Math.max(D,A);D<a;++D)z[k++]=t[D],++w[t[D]];u=wblk(t,f,l,z,w,x,U,k,I,D-I,u),l||(s.r=7&u|f[u/8|0]<<3,u-=7,s.h=d,s.p=b,s.i=D,s.w=A)}else{for(D=s.w||0;D<a+l;D+=65535){var Y=D+65535;Y>=a&&(f[u/8|0]=l,Y=a),u=wfblk(f,u+1,t.subarray(D,Y))}s.i=a}return slc(o,0,r+shft(u)+i)},crct=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,r=9;--r;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),crc=function(){var t=-1;return{p:function(n){for(var e=t,r=0;r<n.length;++r)e=crct[255&e^n[r]]^e>>>8;t=e},d:function(){return~t}}},adler=function(){var t=1,n=0;return{p:function(e){for(var r=t,i=n,s=0|e.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=r+=e[a];r=(65535&r)+15*(r>>16),i=(65535&i)+15*(i>>16)}t=r,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},dopt=function(t,n,e,r,i){if(!i&&(i={l:1},n.dictionary)){var s=n.dictionary.subarray(-32768),a=new u8(s.length+t.length);a.set(s),a.set(t,s.length),t=a,i.w=s.length}return dflt(t,null==n.level?6:n.level,null==n.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(t.length)))):12+n.mem,e,r,i)},mrg=function(t,n){var e={};for(var r in t)e[r]=t[r];for(var r in n)e[r]=n[r];return e},wcln=function(t,n,e){for(var r=t(),i=t.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<r.length;++a){var o=r[a],f=s[a];if("function"==typeof o){n+=";"+f+"=";var l=o.toString();if(o.prototype)if(-1!=l.indexOf("[native code]")){var u=l.indexOf(" ",8)+1;n+=l.slice(u,l.indexOf("(",u))}else for(var h in n+=l,o.prototype)n+=";"+f+".prototype."+h+"="+o.prototype[h].toString();else n+=l}else e[f]=o}return n},ch=[],cbfs=function(t){var n=[];for(var e in t)t[e].buffer&&n.push((t[e]=new t[e].constructor(t[e])).buffer);return n},wrkr=function(t,n,e,r){if(!ch[e]){for(var i="",s={},a=t.length-1,o=0;o<a;++o)i=wcln(t[o],i,s);ch[e]={c:wcln(t[a],i,s),e:s}}var f=mrg({},ch[e].e);return(0,node_worker_1.default)(ch[e].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",e,f,cbfs(f),r)},bInflt=function(){return[u8,u16,i32,fleb,fdeb,clim,fl,fd,flrm,fdrm,rev,ec,hMap,max,bits,bits16,shft,slc,err,inflt,inflateSync,pbf,gopt]},bDflt=function(){return[u8,u16,i32,fleb,fdeb,clim,revfl,revfd,flm,flt,fdm,fdt,rev,deo,et,hMap,wbits,wbits16,hTree,ln,lc,clen,wfblk,wblk,shft,slc,dflt,dopt,deflateSync,pbf]},gze=function(){return[gzh,gzhl,wbytes,crc,crct]},guze=function(){return[gzs,gzl]},zle=function(){return[zlh,wbytes,adler]},zule=function(){return[zls]},pbf=function(t){return postMessage(t,[t.buffer])},gopt=function(t){return t&&{out:t.size&&new u8(t.size),dictionary:t.dictionary}},cbify=function(t,n,e,r,i,s){var a=wrkr(e,r,i,(function(t,n){a.terminate(),s(t,n)}));return a.postMessage([t,n],n.consume?[t.buffer]:[]),function(){a.terminate()}},astrm=function(t){return t.ondata=function(t,n){return postMessage([t,n],[t.buffer])},function(n){return t.push(n.data[0],n.data[1])}},astrmify=function(t,n,e,r,i,s){var a,o=wrkr(t,r,i,(function(t,e){t?(o.terminate(),n.ondata.call(n,t)):Array.isArray(e)?(e[1]&&o.terminate(),n.ondata.call(n,t,e[0],e[1])):s(e)}));o.postMessage(e),n.push=function(t,e){n.ondata||err(5),a&&n.ondata(err(4,0,1),null,!!e),o.postMessage([t,a=e],[t.buffer])},n.terminate=function(){o.terminate()}},b2=function(t,n){return t[n]|t[n+1]<<8},b4=function(t,n){return(t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24)>>>0},b8=function(t,n){return b4(t,n)+4294967296*b4(t,n+4)},wbytes=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},gzh=function(t,n){var e=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&wbytes(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),e){t[3]=8;for(var r=0;r<=e.length;++r)t[r+10]=e.charCodeAt(r)}},gzs=function(t){31==t[0]&&139==t[1]&&8==t[2]||err(6,"invalid gzip data");var n=t[3],e=10;4&n&&(e+=2+(t[10]|t[11]<<8));for(var r=(n>>3&1)+(n>>4&1);r>0;r-=!t[e++]);return e+(2&n)},gzl=function(t){var n=t.length;return(t[n-4]|t[n-3]<<8|t[n-2]<<16|t[n-1]<<24)>>>0},gzhl=function(t){return 10+(t.filename?t.filename.length+1:0)},zlh=function(t,n){var e=n.level,r=0==e?0:e<6?1:9==e?3:2;if(t[0]=120,t[1]=r<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=adler();i.p(n.dictionary),wbytes(t,2,i.d())}},zls=function(t,n){return(8!=(15&t[0])||t[0]>>4>7||(t[0]<<8|t[1])%31)&&err(6,"invalid zlib data"),(t[1]>>5&1)==+!n&&err(6,"invalid zlib data: "+(32&t[1]?"need":"unexpected")+" dictionary"),2+(t[1]>>3&4)};function StrmOpt(t,n){return"function"==typeof t&&(n=t,t={}),this.ondata=n,t}var Deflate=function(){function t(t,n){if("function"==typeof t&&(n=t,t={}),this.ondata=n,this.o=t||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new u8(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return t.prototype.p=function(t,n){this.ondata(dopt(t,this.o,0,0,this.s),n)},t.prototype.push=function(t,n){this.ondata||err(5),this.s.l&&err(4);var e=t.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var r=new u8(-32768&e);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;i&&(this.b.set(t.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(t.subarray(i),32768),this.s.z=t.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(t,this.s.z),this.s.z+=t.length;this.s.l=1&n,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2)},t}();exports.Deflate=Deflate;var AsyncDeflate=function(){return function(t,n){astrmify([bDflt,function(){return[astrm,Deflate]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Deflate(t.data);onmessage=astrm(n)}),6)}}();function deflate(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt],(function(t){return pbf(deflateSync(t.data[0],t.data[1]))}),0,e)}function deflateSync(t,n){return dopt(t,n||{},0,0)}exports.AsyncDeflate=AsyncDeflate,exports.deflate=deflate,exports.deflateSync=deflateSync;var Inflate=function(){function t(t,n){"function"==typeof t&&(n=t,t={}),this.ondata=n;var e=t&&t.dictionary&&t.dictionary.subarray(-32768);this.s={i:0,b:e?e.length:0},this.o=new u8(32768),this.p=new u8(0),e&&this.o.set(e)}return t.prototype.e=function(t){if(this.ondata||err(5),this.d&&err(4),this.p.length){if(t.length){var n=new u8(this.p.length+t.length);n.set(this.p),n.set(t,this.p.length),this.p=n}}else this.p=t},t.prototype.c=function(t){this.s.i=+(this.d=t||!1);var n=this.s.b,e=inflt(this.p,this.s,this.o);this.ondata(slc(e,n,this.s.b),this.d),this.o=slc(e,this.s.b-32768),this.s.b=this.o.length,this.p=slc(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(t,n){this.e(t),this.c(n)},t}();exports.Inflate=Inflate;var AsyncInflate=function(){return function(t,n){astrmify([bInflt,function(){return[astrm,Inflate]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Inflate(t.data);onmessage=astrm(n)}),7)}}();function inflate(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt],(function(t){return pbf(inflateSync(t.data[0],gopt(t.data[1])))}),1,e)}function inflateSync(t,n){return inflt(t,{i:2},n&&n.out,n&&n.dictionary)}exports.AsyncInflate=AsyncInflate,exports.inflate=inflate,exports.inflateSync=inflateSync;var Gzip=function(){function t(t,n){this.c=crc(),this.l=0,this.v=1,Deflate.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),this.l+=t.length,Deflate.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var e=dopt(t,this.o,this.v&&gzhl(this.o),n&&8,this.s);this.v&&(gzh(e,this.o),this.v=0),n&&(wbytes(e,e.length-8,this.c.d()),wbytes(e,e.length-4,this.l)),this.ondata(e,n)},t}();exports.Gzip=Gzip,exports.Compress=Gzip;var AsyncGzip=function(){return function(t,n){astrmify([bDflt,gze,function(){return[astrm,Deflate,Gzip]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Gzip(t.data);onmessage=astrm(n)}),8)}}();function gzip(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt,gze,function(){return[gzipSync]}],(function(t){return pbf(gzipSync(t.data[0],t.data[1]))}),2,e)}function gzipSync(t,n){n||(n={});var e=crc(),r=t.length;e.p(t);var i=dopt(t,n,gzhl(n),8),s=i.length;return gzh(i,n),wbytes(i,s-8,e.d()),wbytes(i,s-4,r),i}exports.AsyncGzip=AsyncGzip,exports.AsyncCompress=AsyncGzip,exports.gzip=gzip,exports.compress=gzip,exports.gzipSync=gzipSync,exports.compressSync=gzipSync;var Gunzip=function(){function t(t,n){this.v=1,this.r=0,Inflate.call(this,t,n)}return t.prototype.push=function(t,n){if(Inflate.prototype.e.call(this,t),this.r+=t.length,this.v){var e=this.p.subarray(this.v-1),r=e.length>3?gzs(e):4;if(r>e.length){if(!n)return}else this.v>1&&this.onmember&&this.onmember(this.r-e.length);this.p=e.subarray(r),this.v=0}Inflate.prototype.c.call(this,n),this.s.f&&!this.s.l&&(this.v=shft(this.s.p)+9,this.s={i:0},this.o=new u8(0),this.p.length&&this.push(new u8(0),n))},t}();exports.Gunzip=Gunzip;var AsyncGunzip=function(){return function(t,n){var e=this;astrmify([bInflt,guze,function(){return[astrm,Inflate,Gunzip]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Gunzip(t.data);n.onmember=function(t){return postMessage(t)},onmessage=astrm(n)}),9,(function(t){return e.onmember&&e.onmember(t)}))}}();function gunzip(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt,guze,function(){return[gunzipSync]}],(function(t){return pbf(gunzipSync(t.data[0],t.data[1]))}),3,e)}function gunzipSync(t,n){var e=gzs(t);return e+8>t.length&&err(6,"invalid gzip data"),inflt(t.subarray(e,-8),{i:2},n&&n.out||new u8(gzl(t)),n&&n.dictionary)}exports.AsyncGunzip=AsyncGunzip,exports.gunzip=gunzip,exports.gunzipSync=gunzipSync;var Zlib=function(){function t(t,n){this.c=adler(),this.v=1,Deflate.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),Deflate.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var e=dopt(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(zlh(e,this.o),this.v=0),n&&wbytes(e,e.length-4,this.c.d()),this.ondata(e,n)},t}();exports.Zlib=Zlib;var AsyncZlib=function(){return function(t,n){astrmify([bDflt,zle,function(){return[astrm,Deflate,Zlib]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Zlib(t.data);onmessage=astrm(n)}),10)}}();function zlib(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bDflt,zle,function(){return[zlibSync]}],(function(t){return pbf(zlibSync(t.data[0],t.data[1]))}),4,e)}function zlibSync(t,n){n||(n={});var e=adler();e.p(t);var r=dopt(t,n,n.dictionary?6:2,4);return zlh(r,n),wbytes(r,r.length-4,e.d()),r}exports.AsyncZlib=AsyncZlib,exports.zlib=zlib,exports.zlibSync=zlibSync;var Unzlib=function(){function t(t,n){Inflate.call(this,t,n),this.v=t&&t.dictionary?2:1}return t.prototype.push=function(t,n){if(Inflate.prototype.e.call(this,t),this.v){if(this.p.length<6&&!n)return;this.p=this.p.subarray(zls(this.p,this.v-1)),this.v=0}n&&(this.p.length<4&&err(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),Inflate.prototype.c.call(this,n)},t}();exports.Unzlib=Unzlib;var AsyncUnzlib=function(){return function(t,n){astrmify([bInflt,zule,function(){return[astrm,Inflate,Unzlib]}],this,StrmOpt.call(this,t,n),(function(t){var n=new Unzlib(t.data);onmessage=astrm(n)}),11)}}();function unzlib(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),cbify(t,n,[bInflt,zule,function(){return[unzlibSync]}],(function(t){return pbf(unzlibSync(t.data[0],gopt(t.data[1])))}),5,e)}function unzlibSync(t,n){return inflt(t.subarray(zls(t,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}exports.AsyncUnzlib=AsyncUnzlib,exports.unzlib=unzlib,exports.unzlibSync=unzlibSync;var Decompress=function(){function t(t,n){this.G=Gunzip,this.I=Inflate,this.Z=Unzlib,this.o=StrmOpt.call(this,t,n)||{}}return t.prototype.push=function(t,n){if(this.ondata||err(5),this.s)this.s.push(t,n);else{if(this.p&&this.p.length){var e=new u8(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var r=this,i=function(){r.ondata.apply(r,arguments)};this.s=31==this.p[0]&&139==this.p[1]&&8==this.p[2]?new this.G(this.o,i):8!=(15&this.p[0])||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o,i):new this.Z(this.o,i),this.s.push(this.p,n),this.p=null}}},t}();exports.Decompress=Decompress;var AsyncDecompress=function(){function t(t,n){this.G=AsyncGunzip,this.I=AsyncInflate,this.Z=AsyncUnzlib,Decompress.call(this,t,n)}return t.prototype.push=function(t,n){Decompress.prototype.push.call(this,t,n)},t}();function decompress(t,n,e){return e||(e=n,n={}),"function"!=typeof e&&err(7),31==t[0]&&139==t[1]&&8==t[2]?gunzip(t,n,e):8!=(15&t[0])||t[0]>>4>7||(t[0]<<8|t[1])%31?inflate(t,n,e):unzlib(t,n,e)}function decompressSync(t,n){return 31==t[0]&&139==t[1]&&8==t[2]?gunzipSync(t,n):8!=(15&t[0])||t[0]>>4>7||(t[0]<<8|t[1])%31?inflateSync(t,n):unzlibSync(t,n)}exports.AsyncDecompress=AsyncDecompress,exports.decompress=decompress,exports.decompressSync=decompressSync;var fltn=function(t,n,e,r){for(var i in t){var s=t[i],a=n+i,o=r;Array.isArray(s)&&(o=mrg(r,s[1]),s=s[0]),s instanceof u8?e[a]=[s,o]:(e[a+="/"]=[new u8(0),o],fltn(s,a,e,r))}},te="undefined"!=typeof TextEncoder&&new TextEncoder,td="undefined"!=typeof TextDecoder&&new TextDecoder,tds=0;try{td.decode(et,{stream:!0}),tds=1}catch(e){}var dutf8=function(t){for(var n="",e=0;;){var r=t[e++],i=(r>127)+(r>223)+(r>239);if(e+i>t.length)return{s:n,r:slc(t,e-1)};i?3==i?(r=((15&r)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r)):n+=1&i?String.fromCharCode((31&r)<<6|63&t[e++]):String.fromCharCode((15&r)<<12|(63&t[e++])<<6|63&t[e++]):n+=String.fromCharCode(r)}},DecodeUTF8=function(){function t(t){this.ondata=t,tds?this.t=new TextDecoder:this.p=et}return t.prototype.push=function(t,n){if(this.ondata||err(5),n=!!n,this.t)return this.ondata(this.t.decode(t,{stream:!0}),n),void(n&&(this.t.decode().length&&err(8),this.t=null));this.p||err(4);var e=new u8(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length);var r=dutf8(e),i=r.s,s=r.r;n?(s.length&&err(8),this.p=null):this.p=s,this.ondata(i,n)},t}();exports.DecodeUTF8=DecodeUTF8;var EncodeUTF8=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||err(5),this.d&&err(4),this.ondata(strToU8(t),this.d=n||!1)},t}();function strToU8(t,n){if(n){for(var e=new u8(t.length),r=0;r<t.length;++r)e[r]=t.charCodeAt(r);return e}if(te)return te.encode(t);var i=t.length,s=new u8(t.length+(t.length>>1)),a=0,o=function(t){s[a++]=t};for(r=0;r<i;++r){if(a+5>s.length){var f=new u8(a+8+(i-r<<1));f.set(s),s=f}var l=t.charCodeAt(r);l<128||n?o(l):l<2048?(o(192|l>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&t.charCodeAt(++r))>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|63&l)):(o(224|l>>12),o(128|l>>6&63),o(128|63&l))}return slc(s,0,a)}function strFromU8(t,n){if(n){for(var e="",r=0;r<t.length;r+=16384)e+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return e}if(td)return td.decode(t);var i=dutf8(t),s=i.s;return(e=i.r).length&&err(8),s}exports.EncodeUTF8=EncodeUTF8,exports.strToU8=strToU8,exports.strFromU8=strFromU8;var dbf=function(t){return 1==t?3:t<6?2:9==t?1:0},slzh=function(t,n){return n+30+b2(t,n+26)+b2(t,n+28)},zh=function(t,n,e){var r=b2(t,n+28),i=strFromU8(t.subarray(n+46,n+46+r),!(2048&b2(t,n+8))),s=n+46+r,a=b4(t,n+20),o=e&&4294967295==a?z64e(t,s):[a,b4(t,n+24),b4(t,n+42)],f=o[0],l=o[1],u=o[2];return[b2(t,n+10),f,l,i,s+b2(t,n+30)+b2(t,n+32),u]},z64e=function(t,n){for(;1!=b2(t,n);n+=4+b2(t,n+2));return[b8(t,n+12),b8(t,n+4),b8(t,n+20)]},exfl=function(t){var n=0;if(t)for(var e in t){var r=t[e].length;r>65535&&err(9),n+=r+4}return n},wzh=function(t,n,e,r,i,s,a,o){var f=r.length,l=e.extra,u=o&&o.length,h=exfl(l);wbytes(t,n,null!=a?33639248:67324752),n+=4,null!=a&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(s<0&&8),t[n++]=i&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var c=new Date(null==e.mtime?Date.now():e.mtime),p=c.getFullYear()-1980;if((p<0||p>119)&&err(10),wbytes(t,n,p<<25|c.getMonth()+1<<21|c.getDate()<<16|c.getHours()<<11|c.getMinutes()<<5|c.getSeconds()>>1),n+=4,-1!=s&&(wbytes(t,n,e.crc),wbytes(t,n+4,s<0?-s-2:s),wbytes(t,n+8,e.size)),wbytes(t,n+12,f),wbytes(t,n+14,h),n+=16,null!=a&&(wbytes(t,n,u),wbytes(t,n+6,e.attrs),wbytes(t,n+10,a),n+=14),t.set(r,n),n+=f,h)for(var v in l){var b=l[v],d=b.length;wbytes(t,n,+v),wbytes(t,n+2,d),t.set(b,n+4),n+=4+d}return u&&(t.set(o,n),n+=u),n},wzf=function(t,n,e,r,i){wbytes(t,n,101010256),wbytes(t,n+8,e),wbytes(t,n+10,e),wbytes(t,n+12,r),wbytes(t,n+16,i)},ZipPassThrough=function(){function t(t){this.filename=t,this.c=crc(),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||err(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}();exports.ZipPassThrough=ZipPassThrough;var ZipDeflate=function(){function t(t,n){var e=this;n||(n={}),ZipPassThrough.call(this,t),this.d=new Deflate(n,(function(t,n){e.ondata(null,t,n)})),this.compression=8,this.flag=dbf(n.level)}return t.prototype.process=function(t,n){try{this.d.push(t,n)}catch(e){this.ondata(e,null,n)}},t.prototype.push=function(t,n){ZipPassThrough.prototype.push.call(this,t,n)},t}();exports.ZipDeflate=ZipDeflate;var AsyncZipDeflate=function(){function t(t,n){var e=this;n||(n={}),ZipPassThrough.call(this,t),this.d=new AsyncDeflate(n,(function(t,n,r){e.ondata(t,n,r)})),this.compression=8,this.flag=dbf(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(t,n){this.d.push(t,n)},t.prototype.push=function(t,n){ZipPassThrough.prototype.push.call(this,t,n)},t}();exports.AsyncZipDeflate=AsyncZipDeflate;var Zip=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||err(5),2&this.d)this.ondata(err(4+8*(1&this.d),0,1),null,!1);else{var e=strToU8(t.filename),r=e.length,i=t.comment,s=i&&strToU8(i),a=r!=t.filename.length||s&&i.length!=s.length,o=r+exfl(t.extra)+30;r>65535&&this.ondata(err(11,0,1),null,!1);var f=new u8(o);wzh(f,0,t,e,a,-1);var l=[f],u=function(){for(var t=0,e=l;t<e.length;t++){var r=e[t];n.ondata(null,r,!1)}l=[]},h=this.d;this.d=0;var c=this.u.length,p=mrg(t,{f:e,u:a,o:s,t:function(){t.terminate&&t.terminate()},r:function(){if(u(),h){var t=n.u[c+1];t?t.r():n.d=1}h=1}}),v=0;t.ondata=function(e,r,i){if(e)n.ondata(e,r,i),n.terminate();else if(v+=r.length,l.push(r),i){var s=new u8(16);wbytes(s,0,134695760),wbytes(s,4,t.crc),wbytes(s,8,v),wbytes(s,12,t.size),l.push(s),p.c=v,p.b=o+v+16,p.crc=t.crc,p.size=t.size,h&&p.r(),h=1}else h&&u()},this.u.push(p)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(err(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,r=0,i=this.u;r<i.length;r++){e+=46+(f=i[r]).f.length+exfl(f.extra)+(f.o?f.o.length:0)}for(var s=new u8(e+22),a=0,o=this.u;a<o.length;a++){var f=o[a];wzh(s,t,f,f.f,f.u,-f.c-2,n,f.o),t+=46+f.f.length+exfl(f.extra)+(f.o?f.o.length:0),n+=f.b}wzf(s,t,this.u.length,e,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++){n[t].t()}this.d=2},t}();function zip(t,n,r){r||(r=n,n={}),"function"!=typeof r&&err(7);var i={};fltn(t,"",i,n);var s=Object.keys(i),a=s.length,o=0,f=0,l=a,u=new Array(a),h=[],c=function(){for(var t=0;t<h.length;++t)h[t]()},p=function(t,n){mt((function(){r(t,n)}))};mt((function(){p=r}));var v=function(){var t=new u8(f+22),n=o,r=f-o;f=0;for(var i=0;i<l;++i){var s=u[i];try{var a=s.c.length;wzh(t,f,s,s.f,s.u,a);var h=30+s.f.length+exfl(s.extra),c=f+h;t.set(s.c,c),wzh(t,o,s,s.f,s.u,a,f,s.m),o+=16+h+(s.m?s.m.length:0),f=c+a}catch(e){return p(e,null)}}wzf(t,o,u.length,r,n),p(null,t)};a||v();for(var b=function(t){var n=s[t],r=i[n],l=r[0],b=r[1],d=crc(),y=l.length;d.p(l);var g=strToU8(n),m=g.length,z=b.comment,w=z&&strToU8(z),x=w&&w.length,S=exfl(b.extra),U=0==b.level?0:8,D=function(e,r){if(e)c(),p(e,null);else{var i=r.length;u[t]=mrg(b,{size:y,crc:d.d(),c:r,f:g,m:w,u:m!=n.length||w&&z.length!=x,compression:U}),o+=30+m+S+i,f+=76+2*(m+S)+(x||0)+i,--a||v()}};if(m>65535&&D(err(11,0,1),null),U)if(y<16e4)try{D(null,deflateSync(l,b))}catch(e){D(e,null)}else h.push(deflate(l,b,D));else D(null,l)},d=0;d<l;++d)b(d);return c}function zipSync(t,n){n||(n={});var e={},r=[];fltn(t,"",e,n);var i=0,s=0;for(var a in e){var o=e[a],f=o[0],l=o[1],u=0==l.level?0:8,h=(S=strToU8(a)).length,c=l.comment,p=c&&strToU8(c),v=p&&p.length,b=exfl(l.extra);h>65535&&err(11);var d=u?deflateSync(f,l):f,y=d.length,g=crc();g.p(f),r.push(mrg(l,{size:f.length,crc:g.d(),c:d,f:S,m:p,u:h!=a.length||p&&c.length!=v,o:i,compression:u})),i+=30+h+b+y,s+=76+2*(h+b)+(v||0)+y}for(var m=new u8(s+22),z=i,w=s-i,x=0;x<r.length;++x){var S=r[x];wzh(m,S.o,S,S.f,S.u,S.c.length);var U=30+S.f.length+exfl(S.extra);m.set(S.c,S.o+U),wzh(m,i,S,S.f,S.u,S.c.length,S.o,S.m),i+=16+U+(S.m?S.m.length:0)}return wzf(m,i,r.length,w,z),m}exports.Zip=Zip,exports.zip=zip,exports.zipSync=zipSync;var UnzipPassThrough=function(){function t(){}return t.prototype.push=function(t,n){this.ondata(null,t,n)},t.compression=0,t}();exports.UnzipPassThrough=UnzipPassThrough;var UnzipInflate=function(){function t(){var t=this;this.i=new Inflate((function(n,e){t.ondata(null,n,e)}))}return t.prototype.push=function(t,n){try{this.i.push(t,n)}catch(e){this.ondata(e,null,n)}},t.compression=8,t}();exports.UnzipInflate=UnzipInflate;var AsyncUnzipInflate=function(){function t(t,n){var e=this;n<32e4?this.i=new Inflate((function(t,n){e.ondata(null,t,n)})):(this.i=new AsyncInflate((function(t,n,r){e.ondata(t,n,r)})),this.terminate=this.i.terminate)}return t.prototype.push=function(t,n){this.i.terminate&&(t=slc(t,0)),this.i.push(t,n)},t.compression=8,t}();exports.AsyncUnzipInflate=AsyncUnzipInflate;var Unzip=function(){function t(t){this.onfile=t,this.k=[],this.o={0:UnzipPassThrough},this.p=et}return t.prototype.push=function(t,n){var e=this;if(this.onfile||err(5),this.p||err(4),this.c>0){var r=Math.min(this.c,t.length),i=t.subarray(0,r);if(this.c-=r,this.d?this.d.push(i,!this.c):this.k[0].push(i),(t=t.subarray(r)).length)return this.push(t,n)}else{var s=0,a=0,o=void 0,f=void 0;this.p.length?t.length?((f=new u8(this.p.length+t.length)).set(this.p),f.set(t,this.p.length)):f=this.p:f=t;for(var l=f.length,u=this.c,h=u&&this.d,c=function(){var t,n=b4(f,a);if(67324752==n){s=1,o=a,p.d=null,p.c=0;var r=b2(f,a+6),i=b2(f,a+8),h=2048&r,c=8&r,v=b2(f,a+26),b=b2(f,a+28);if(l>a+30+v+b){var d=[];p.k.unshift(d),s=2;var y,g=b4(f,a+18),m=b4(f,a+22),z=strFromU8(f.subarray(a+30,a+=30+v),!h);4294967295==g?(t=c?[-2]:z64e(f,a),g=t[0],m=t[1]):c&&(g=-1),a+=b,p.c=g;var w={name:z,compression:i,start:function(){if(w.ondata||err(5),g){var t=e.o[i];t||w.ondata(err(14,"unknown compression type "+i,1),null,!1),(y=g<0?new t(z):new t(z,g,m)).ondata=function(t,n,e){w.ondata(t,n,e)};for(var n=0,r=d;n<r.length;n++){var s=r[n];y.push(s,!1)}e.k[0]==d&&e.c?e.d=y:y.push(et,!0)}else w.ondata(null,et,!0)},terminate:function(){y&&y.terminate&&y.terminate()}};g>=0&&(w.size=g,w.originalSize=m),p.onfile(w)}return"break"}if(u){if(134695760==n)return o=a+=12+(-2==u&&8),s=3,p.c=0,"break";if(33639248==n)return o=a-=4,s=3,p.c=0,"break"}},p=this;a<l-4;++a){if("break"===c())break}if(this.p=et,u<0){var v=s?f.subarray(0,o-12-(-2==u&&8)-(134695760==b4(f,o-16)&&4)):f.subarray(0,a);h?h.push(v,!!s):this.k[+(2==s)].push(v)}if(2&s)return this.push(f.subarray(a),n);this.p=f.subarray(a)}n&&(this.c&&err(13),this.p=null)},t.prototype.register=function(t){this.o[t.compression]=t},t}();exports.Unzip=Unzip;var mt="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()};function unzip(t,n,e){e||(e=n,n={}),"function"!=typeof e&&err(7);var r=[],i=function(){for(var t=0;t<r.length;++t)r[t]()},s={},a=function(t,n){mt((function(){e(t,n)}))};mt((function(){a=e}));for(var o=t.length-22;101010256!=b4(t,o);--o)if(!o||t.length-o>65558)return a(err(13,0,1),null),i;var f=b2(t,o+8);if(f){var l=f,u=b4(t,o+16),h=4294967295==u||65535==l;if(h){var c=b4(t,o-12);(h=101075792==b4(t,c))&&(l=f=b4(t,c+32),u=b4(t,c+48))}for(var p=n&&n.filter,v=function(n){var e=zh(t,u,h),l=e[0],c=e[1],v=e[2],b=e[3],d=e[4],y=e[5],g=slzh(t,y);u=d;var m=function(t,n){t?(i(),a(t,null)):(n&&(s[b]=n),--f||a(null,s))};if(!p||p({name:b,size:c,originalSize:v,compression:l}))if(l)if(8==l){var z=t.subarray(g,g+c);if(c<32e4)try{m(null,inflateSync(z,{out:new u8(v)}))}catch(o){m(o,null)}else r.push(inflate(z,{size:v},m))}else m(err(14,"unknown compression type "+l,1),null);else m(null,slc(t,g,g+c));else m(null,null)},b=0;b<l;++b)v()}else a(null,{});return i}function unzipSync(t,n){for(var e={},r=t.length-22;101010256!=b4(t,r);--r)(!r||t.length-r>65558)&&err(13);var i=b2(t,r+8);if(!i)return{};var s=b4(t,r+16),a=4294967295==s||65535==i;if(a){var o=b4(t,r-12);(a=101075792==b4(t,o))&&(i=b4(t,o+32),s=b4(t,o+48))}for(var f=n&&n.filter,l=0;l<i;++l){var u=zh(t,s,a),h=u[0],c=u[1],p=u[2],v=u[3],b=u[4],d=u[5],y=slzh(t,d);s=b,f&&!f({name:v,size:c,originalSize:p,compression:h})||(h?8==h?e[v]=inflateSync(t.subarray(y,y+c),{out:new u8(p)}):err(14,"unknown compression type "+h):e[v]=slc(t,y,y+c))}return e}exports.unzip=unzip,exports.unzipSync=unzipSync;
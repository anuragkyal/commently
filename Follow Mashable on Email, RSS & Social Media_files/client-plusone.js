var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,q=document,ca=Array,da=parseInt,r=String,ea=decodeURIComponent;function fa(a,b){return a.type=b}
var ga="appendChild",s="push",t="test",ha="shift",ia="exec",ja="width",ka="slice",v="replace",la="getElementById",ma="concat",na="charAt",oa="JSON",x="indexOf",pa="nodeName",qa="match",y="createElement",z="setAttribute",ra="type",sa="bind",ta="getTime",ua="getElementsByTagName",A="substr",B="toString",D="length",E="prototype",F="split",G="location",H="style",va="removeChild",I="call",K="getAttribute",wa="protocol",L="charCodeAt",M="href",xa="substring",ya="documentMode",za="action",N="apply",Aa="attributes",
O="parentNode",Ba="update",Ca="height",P="join",Da="toLowerCase",Ea=function(a,b,c){return a[I][N](a[sa],arguments)},Fa=function(a,b,c){if(!a)throw Error();if(2<arguments[D]){var d=ca[E][ka][I](arguments,2);return function(){var c=ca[E][ka][I](arguments);ca[E].unshift[N](c,d);return a[N](b,c)}}return function(){return a[N](b,arguments)}},Ga=function(a,b,c){Ga=Function[E][sa]&&-1!=Function[E][sa][B]()[x]("native code")?Ea:Fa;return Ga[N](null,arguments)};
Function[E].bind=Function[E][sa]||function(a,b){if(1<arguments[D]){var c=ca[E][ka][I](arguments,1);c.unshift(this,a);return Ga[N](null,c)}return Ga(this,a)};var Q=k,R=q,Ha=Q[G],Ia=function(){},Ja=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},Ka=function(a){for(var b=0;b<this[D];b++)if(this[b]===a)return b;return-1},La=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[D];d++){var e=a[d];e!=c&&b[s](e);c=e}return b},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=function(a){return r(a)[v](Ma,"&amp;")[v](Na,"&lt;")[v](Oa,"&gt;")[v](Pa,"&quot;")[v](Qa,"&#39;")},T=function(){var a;if((a=ba.create)&&Ja[t](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},U=function(a,b){return ba[E].hasOwnProperty[I](a,b)},Sa=function(a){if(Ja[t](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[s](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ta=function(a){return function(){Q.setTimeout(a,0)}},Ua=function(a,b){if(!a)throw Error(b||"");},W=S(Q,"gapi",{});var X=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ia](a)||b[ia](a)))try{c=ea(a[2])}catch(e){}return c},Va=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Wa=function(a){a=a[qa](Va);var b=T();b.H=a[1];b.j=a[3]?[a[3]]:[];b.o=a[5]?[a[5]]:[];return b},Xa=function(a){return a.H+(0<a.j[D]?"?"+a.j[P]("&"):"")+(0<a.o[D]?"#"+a.o[P]("&"):"")},Ya=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[s](aa(d)+
"="+aa(e))}return c},Za=function(a,b,c,d){a=Wa(a);a.j[s][N](a.j,Ya(b,d));a.o[s][N](a.o,Ya(c,d));return Xa(a)},$a=function(a,b){var c="";2E3<b[D]&&(c=b[xa](2E3),b=b[xa](0,2E3));var d=a[y]("div"),e=a[y]("a");e.href=b;d[ga](e);d.innerHTML=d.innerHTML;b=r(d.firstChild[M]);d[O]&&d[O][va](d);return b+c},ab=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var bb=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,!1);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},cb=function(){var a=R.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[x]("MSIE")},fb=function(a){var b=db;if(!cb())try{b()}catch(c){}eb(a)},eb=function(a){if(cb())a();else{var b=!1,c=function(){if(!b)return b=!0,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,!1),Q.addEventListener("DOMContentLoaded",c,!1)):Q.attachEvent&&
(Q.attachEvent("onreadystatechange",function(){cb()&&c[N](this,arguments)}),Q.attachEvent("onload",c))}},gb=function(a){for(;a.firstChild;)a[va](a.firstChild)},hb={button:!0,div:!0,span:!0};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var ib=function(a){return Y.dpo?Y.h:X(a,"jsh",Y.h)},jb=function(a){var b=S(Y,"sws",[]);b[s][N](b,a)},kb=function(a){return S(Y,"watt",T())[a]},lb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[D];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},mb=function(a){return S(S(Y,"H",T()),a,T())};var ob=S(Y,"perf",T()),pb=S(ob,"g",T()),qb=S(ob,"i",T());S(ob,"r",[]);T();T();var rb=function(a,b,c){var d=ob.r;"function"===typeof d?d(a,b,c):d[s]([a,b,c])},sb=function(a,b,c){pb[a]=!b&&pb[a]||c||(new Date)[ta]();rb(a)},ub=function(a,b,c){b&&0<b[D]&&(b=tb(b),c&&0<c[D]&&(b+="___"+tb(c)),28<b[D]&&(b=b[A](0,28)+(b[D]-28)),c=b,b=S(qb,"_p",T()),S(b,c,T())[a]=(new Date)[ta](),rb(a,"_p",c))},tb=function(a){return a[P]("__")[v](/\./g,"_")[v](/\-/g,"_")[v](/\,/g,"_")};var vb=T(),wb=[],xb=function(a){throw Error("Bad hint"+(a?": "+a:""));};wb[s](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[ma](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[s](b),(b=/^https:(.*)$/[ia](b))&&a[s]("http:"+b[1])}]);var yb=/^(\/[a-zA-Z0-9_\-]+)+$/,zb=/^[a-zA-Z0-9\-_\.,!]+$/,Ab=/^gapi\.loaded_[0-9]+$/,Bb=/^[a-zA-Z0-9,._-]+$/,Fb=function(a,b,c,d){var e=a[F](";"),f=vb[e[ha]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[qa](Cb),d=b[qa](Db),b=!!d&&1===d[D]&&Eb[t](b)&&!!c&&1===c[D];b||xb(a);return g},Ib=function(a,b,c,d){a=Gb(a);Ab[t](c)||xb("invalid_callback");b=Hb(b);d=d&&d[D]?Hb(d):null;var e=function(a){return aa(a)[v](/%2C/g,",")};return[aa(a.T)[v](/%2C/g,",")[v](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.K?"/rs="+e(a.K):"","/cb=",e(c)][P]("")},Gb=function(a){"/"!==a[na](0)&&xb("relative path");for(var b=a[xa](1)[F]("/"),c=[];b[D];){a=b[ha]();if(!a[D]||0==a[x]("."))xb("empty/relative directory");else if(0<a[x]("=")){b.unshift(a);break}c[s](a)}a={};for(var d=0,e=b[D];d<e;++d){var f=b[d][F]("="),g=ea(f[0]),h=ea(f[1]);2==f[D]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[P]("/");yb[t](b)||xb("invalid_prefix");c=Jb(a,"k",!0);d=Jb(a,"am");a=Jb(a,"rs");return{T:b,version:c,
J:d,K:a}},Hb=function(a){for(var b=[],c=0,d=a[D];c<d;++c){var e=a[c][v](/\./g,"_")[v](/-/g,"_");Bb[t](e)&&b[s](e)}return b[P](",")},Jb=function(a,b,c){a=a[b];!a&&c&&xb("missing: "+b);if(a){if(zb[t](a))return a;xb("invalid: "+b)}return null},Eb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Db=/\/cb=/g,Cb=/\/\//g,Kb=function(){var a=ib(Ha[M]);if(!a)throw Error("Bad hint");return a};
vb.m=function(a,b,c,d){(a=a[0])||xb("missing_hint");return"https://apis.google.com"+Ib(a,b,c,d)};var Lb=decodeURI("%73cript"),Mb=function(a,b){for(var c=[],d=0;d<a[D];++d){var e=a[d];e&&0>Ka[I](b,e)&&c[s](e)}return c},Ob=function(a){"loading"!=R.readyState?Nb(a):R.write("<"+Lb+' src="'+encodeURI(a)+'"></'+Lb+">")},Nb=function(a){var b=R[y](Lb);b[z]("src",a);b.async="true";(a=R[ua](Lb)[0])?a[O].insertBefore(b,a):(R.head||R.body||R.documentElement)[ga](b)},Pb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<wb[D];d++){var e=wb[d][0],f=wb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Rb=function(a,b){Qb(function(){var c;
c=b===ib(Ha[M])?S(W,"_",T()):T();c=S(mb(b),"_",c);a(c)})},Tb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Pb(a,c);var d=a?a[F](":"):[],e=c.h||Kb(),f=S(Y,"ah",T());if(f["::"]&&d[D]){for(var g=[],h=null;h=d[ha]();){var l=h[F]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g[D]&&g[g[D]-1]||null,m=n;n&&n.hint==l||(m={hint:l,M:[]},g[s](m));m.M[s](h)}var p=g[D];if(1<p){var w=c.callback;w&&(c.callback=function(){0==--p&&w()})}for(;d=g[ha]();)Sb(d.M,c,d.hint)}else Sb(d||[],c,e)},Sb=function(a,
b,c){a=La(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,l=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var n=S(mb(c),"r",[]).sort(),m=S(mb(c),"L",[]).sort(),p=[][ma](n),w=function(a,b){if(l)return 0;Q.clearTimeout(h);m[s][N](m,C);var d=((W||{}).config||{})[Ba];d?d(e):e&&S(Y,"cu",[])[s](e);if(b){ub("me0",a,p);try{Rb(b,c)}finally{ub("me1",a,p)}}return 1};0<f&&(h=Q.setTimeout(function(){l=!0;g()},f));var C=Mb(a,m);if(C[D]){var C=
Mb(a,n),u=S(Y,"CP",[]),J=u[D];u[J]=function(a){if(!a)return 0;ub("ml1",C,p);var b=function(b){u[J]=null;w(C,a)&&lb(function(){d&&d();b()})},c=function(){var a=u[J+1];a&&a()};0<J&&u[J-1]?u[J]=function(){b(c)}:b(c)};if(C[D]){var nb="loaded_"+Y.I++;W[nb]=function(a){u[J](a);W[nb]=null};a=Fb(c,C,"gapi."+nb,n);n[s][N](n,C);ub("ml0",C,p);b.sync||Q.___gapisync?Ob(a):Nb(a)}else u[J](Ia)}else w(C)&&d&&d()};var Qb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Tb("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};W.load=function(a,b){return Qb(function(){return Tb(a,b)})};var Ub=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Vb=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Wb=function(a){return"object"===typeof a&&/\[native code\]/[t](a[s])},Xb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Wb(a[c])&&!Wb(b[c])?Xb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Wb(b[c])?[]:{},Xb(a[c],b[c])):a[c]=b[c])},Yb=function(a){if(a&&!/^\s+$/[t](a)){for(;0==a[L](a[D]-
1);)a=a[xa](0,a[D]-1);var b;try{b=k[oa].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Zb=function(a){Vb(!0);var b=k.___gcfg,c=Ub("cu");if(b&&b!==k.___gu){var d={};Xb(d,b);c[s](d);k.___gu=b}var b=Ub("cu"),e=q.scripts||q[ua]("script")||[],d=[],f=[];f[s][N](f,Ub("us"));for(var g=0;g<e[D];++g)for(var h=e[g],l=0;l<f[D];++l)h.src&&
0==h.src[x](f[l])&&d[s](h);0==d[D]&&0<e[D]&&e[e[D]-1].src&&d[s](e[e[D]-1]);for(e=0;e<d[D];++e)d[e][K]("gapi_processed")||(d[e][z]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Yb(f))&&b[s](f));a&&(d={},Xb(d,a),c[s](d));d=Ub("cd");a=0;for(b=d[D];a<b;++a)Xb(Vb(),d[a]);d=Ub("ci");a=0;for(b=d[D];a<b;++a)Xb(Vb(),d[a]);a=0;for(b=c[D];a<b;++a)Xb(Vb(),c[a])},Z=function(a){if(!a)return Vb();a=a[F]("/");for(var b=Vb(),c=0,d=a[D];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[D]&&void 0!==b?b:void 0},$b=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[F]("/"),f=0,g=e[D];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}Zb(c)};var ac=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[s](a),k.__GOOGLEAPIS=void 0)};var bc={callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},cc=!1,dc=T(),ec=function(){if(!cc){for(var a=q[ua]("meta"),b=0;b<a[D];++b){var c=a[b].name[Da]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[xa](14),d=a[b].content;bc[c]&&d&&(dc[c]=d)}}if(k.self!==k.top){var a=q[G][B](),e;for(e in bc)0<bc[e]&&(b=X(a,e,""))&&(dc[e]=b)}cc=!0}e=T();V(dc,e);return e},fc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var gc=k.console,hc=function(a){gc&&gc.log&&gc.log(a)};var ic=function(){return!!Y.oa},jc=function(){};var $=S(Y,"rw",T()),kc=function(a){for(var b in $)a($[b])},lc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var mc;var nc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,oc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,pc=function(a){var b=Z("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[G][M],b=X(a,"authuser")||null,null==b&&(b=(b=a[qa](nc))?b[1]:null));return null==b?null:r(b)},qc=function(a){var b=Z("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[G][M])[qa](oc))?
a[1]:null);return null==b?null:r(b)};var rc=function(){this.c=-1};var sc=function(){this.c=-1;this.c=64;this.b=[];this.p=[];this.N=[];this.n=[];this.n[0]=128;for(var a=1;a<this.c;++a)this.n[a]=0;this.l=this.g=0;this.reset()};(function(){function a(){}a.prototype=rc[E];sc.aa=rc[E];sc.prototype=new a;sc.H=function(a,c,d){return rc[E][c][N](a,ca[E][ka][I](arguments,2))}})();sc[E].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.l=this.g=0};
var tc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[L](c)<<24|b[L](c+1)<<16|b[L](c+2)<<8|b[L](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],l=a.b[4],n,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),n=1518500249):(f=c^g^h,n=1859775393):60>e?(f=c&g|h&(c|g),n=2400959708):(f=c^g^h,n=3395469782),f=(b<<5|b>>>27)+f+
l+n+d[e]&4294967295,l=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};
sc[E].update=function(a,b){void 0===b&&(b=a[D]);for(var c=b-this.c,d=0,e=this.p,f=this.g;d<b;){if(0==f)for(;d<=c;)tc(this,a,d),d+=this.c;if("string"==typeof a)for(;d<b;){if(e[f]=a[L](d),++f,++d,f==this.c){tc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.c){tc(this,e);f=0;break}}this.g=f;this.l+=b};var uc=function(){this.q=new sc};uc[E].reset=function(){this.q.reset()};var Bc=function(){var a;vc?(a=new Q.Uint32Array(1),wc.getRandomValues(a),a=Number("0."+a[0])):(a=xc,a+=da(yc[A](0,20),16),yc=zc(yc),a/=Ac+Math.pow(16,20));return a},wc=Q.crypto,vc=!1,Cc=0,Dc=0,xc=1,Ac=0,yc="",Ec=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[ta]()%1E6*b;xc=xc*b%Ac;0<Cc&&++Dc==Cc&&bb("mousemove",Ec,"remove","de")},zc=function(a){var b=new uc;a=unescape(aa(a));for(var c=[],d=0,e=a[D];d<e;++d)c[s](a[L](d));b.q[Ba](c);a=b.q;b=[];d=8*a.l;
56>a.g?a[Ba](a.n,56-a.g):a[Ba](a.n,a.c-(a.g-56));for(c=a.c-1;56<=c;c--)a.p[c]=d&255,d/=256;tc(a,a.p);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[D];c++)a+="0123456789ABCDEF"[na](Math.floor(b[c]/16))+"0123456789ABCDEF"[na](b[c]%16);return a},vc=!!wc&&"function"==typeof wc.getRandomValues;
vc||(Ac=1E6*(screen[ja]*screen[ja]+screen[Ca]),yc=zc(R.cookie+"|"+R[G]+"|"+(new Date)[ta]()+"|"+Math.random()),Cc=Z("random/maxObserveMousemove")||0,0!=Cc&&bb("mousemove",Ec,"add","at"));var Fc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Gc=function(a,b){var c=b.onload;return"function"===typeof c?(Fc().a(a,c),c):null},Hc=function(a){Ua(/^\w+$/[t](a),"Unsupported id - "+a);Fc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Ic=function(a){Fc().r(a)};var Jc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Kc={allowtransparency:!0,onload:!0},Lc=0,Mc=function(a){Ua(!a||ab[t](a),"Illegal url for new iframe - "+a)},Nc=function(a,b,c,d,e){Mc(c.src);var f,g=Gc(d,c),h=g?Hc(d):"";try{f=a[y]('<iframe frameborder="'+Ra(r(c.frameborder))+'" scrolling="'+Ra(r(c.scrolling))+'" '+h+' name="'+Ra(r(c.name))+'"/>')}catch(l){f=a[y]("iframe"),g&&(f.onload=function(){f.onload=
null;g[I](this)},Ic(d))}for(var n in c)a=c[n],"style"===n&&"object"===typeof a?V(a,f[H]):Kc[n]||f[z](n,r(a));(n=e&&e.beforeNode||null)||e&&e.dontclear||gb(b);b.insertBefore(f,n);f=n?n.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Oc=/^:[\w]+$/,Pc=/:([a-zA-Z_]+):/g,Qc=function(){var a=pc()||"0",b=qc(),c;c=pc(void 0)||a;var d=qc(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===Z("isLoggedIn"))?"_/im/":"")&&(c="");var f=Z("iframes/:socialhost:"),g=Z("iframes/:im_socialhost:");return mc={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},Rc=function(a,b){return Qc()[b]||""},Sc=function(a){return function(b,c){return a?Qc()[c]||a[c]||"":Qc()[c]||""}};var Tc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Uc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[t](a)?'"'+a[v](b,function(a){var b=Tc[a];if(b)return b;b=a[L]();return"\\u00"+Math.floor(b/16)[B](16)+(b%16)[B](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?r(a):"null";case "boolean":case "null":return r(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[D]&&!a.propertyIsEnumerable("length")){d=
a[D];for(c=0;c<d;c+=1)b[s](Uc(a[c])||"null");return"["+b[P](",")+"]"}for(c in a)!/___$/[t](c)&&U(a,c)&&"string"===typeof c&&(d=Uc(a[c]))&&b[s](Uc(c)+":"+d);return"{"+b[P](",")+"}"}return""}},Vc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[t](a[v](/\\["\\\/b-u]/g,"@")[v](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[v](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Wc=!1;try{Wc=!!k[oa]&&'["a"]'===k[oa].stringify(["a"])&&"a"===k[oa].parse('["a"]')[0]}catch(Xc){}
var Yc=function(a){try{return k[oa].parse(a)}catch(b){return!1}},Zc=Wc?k[oa].stringify:Uc,$c=Wc?Yc:Vc;var ad=function(a){var b;a[qa](/^https?%3A/i)&&(b=ea(a));return $a(q,b?b:a)},bd=function(a){a=a||"canonical";for(var b=q[ua]("link"),c=0,d=b[D];c<d;c++){var e=b[c],f=e[K]("rel");if(f&&f[Da]()==a&&(e=e[K]("href"))&&(e=ad(e))&&null!=e[qa](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[G][M]};var cd={U:"se"},dd={U:"ad"},ed={ad:{"true":"1","false":"2"}},fd={post:!0},gd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},hd="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),id=S(Y,"WI",T()),jd=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b[za]&&(e=a+"_"+b[za],f=a+"/"+b[za]);(e=Z("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in cd)if(f=cd[g],b[f])d[f]=
f+"/"+b[f]+"/";else{var h=dd[g];h&&b[h]&&(d[f]=f+"/"+ed[h][b[h]]+"/")}d=$a(R,e[v](Pc,Sc(d)));e="iframes/"+a+"/params/";g={};V(b,g);(f=Z("lang")||Z("gwidget/lang"))&&(g.hl=f);fd[a]||(g.origin=k[G].origin||k[G][wa]+"//"+k[G].host);g.exp=Z(e+"exp");if(e=Z(e+"location"))for(f=0;f<e[D];f++)h=e[f],g[h]=Q[G][h];switch(a){case "plus":case "follow":e=g[M];f=b[za]?void 0:"publisher";e=(e="string"==typeof e?e:void 0)?ad(e):bd(f);g.url=e;delete g[M];break;case "plusone":e=(e=b[M])?ad(e):bd();g.url=e;e=b.db;f=
Z();null==e&&f&&(e=f.db,null==e&&(e=f.gwidget&&f.gwidget.db));g.db=e||void 0;e=b.ecp;f=Z();null==e&&f&&(e=f.ecp,null==e&&(e=f.gwidget&&f.gwidget.ecp));g.ecp=e||void 0;delete g[M];break;case "signin":g.url=bd()}Y.ILI&&(g.iloader="1");delete g["data-onload"];delete g.rd;for(var l in cd)e=cd[l],g[e]&&delete g[e];g.gsrc=Z("iframes/:source:");l=Z("inline/css");"undefined"!==typeof l&&0<c&&l>=c&&(g.ic="1");l=/^#|^fr-/;c={};for(var n in g)U(g,n)&&l[t](n)&&(c[n[v](l,"")]=g[n],delete g[n]);n="q"==Z("iframes/"+
a+"/params/si")?g:c;l=ec();for(var m in l)!U(l,m)||U(g,m)||U(c,m)||(n[m]=l[m]);m=[][ma](hd);(n=Z("iframes/"+a+"/methods"))&&"object"===typeof n&&Ja[t](n[s])&&(m=m[ma](n));for(var p in b)U(b,p)&&/^on/[t](p)&&("plus"!=a||"onconnect"!=p)&&(m[s](p),delete g[p]);delete g.callback;c._methods=m[P](",");return Za(d,g,c)},kd=["style","data-gapiscan"],md=function(a){for(var b=T(),c=0!=a[pa][Da]()[x]("g:"),d=0,e=a[Aa][D];d<e;d++){var f=a[Aa][d],g=f.name,h=f.value;0<=Ka[I](kd,g)||c&&0!=g[x]("data-")||"null"===
h||"specified"in f&&!f.specified||(c&&(g=g[A](5)),b[g[Da]()]=h)}a=a[H];(c=ld(a&&a[Ca]))&&(b.height=r(c));(a=ld(a&&a[ja]))&&(b.width=r(a));return b},ld=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=da(a,10));return b},od=function(){var a=Y.drw;kc(function(b){if(a!==b.id&&4!=b.state&&"share"!=b[ra]){var c=b.id,d=b[ra],e=b.url;b=b.userParams;var f=R[la](c);if(f){var g=jd(d,b,0);g?(f=f[O],e[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")!==g[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")&&(b.dontclear=
!0,b.rd=!0,b.ri=!0,fa(b,d),nd(f,b),(d=$[f.lastChild.id])&&(d.oid=c),lc(c,4))):delete $[c]}else delete $[c]}})};var pd,qd,rd,sd,td,ud=/(?:^|\s)g-((\S)*)(?:$|\s)/,vd={plusone:!0,autocomplete:!0,profile:!0,signin:!0};pd=S(Y,"SW",T());qd=S(Y,"SA",T());rd=S(Y,"SM",T());sd=S(Y,"FW",[]);td=null;
var xd=function(a,b){wd(void 0,!1,a,b)},wd=function(a,b,c,d){sb("ps0",!0);c=("string"===typeof c?q[la](c):c)||R;var e;e=R[ya];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Sa(pd)[ma](Sa(qd))[ma](Sa(rd));for(var f=[],g=0;g<e[D];g++){var h=e[g];f[s](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[P](","))}else e=c[ua]("*");c=T();for(f=0;f<e[D];f++){g=e[f];var l=g,h=d,n=l[pa][Da](),m=void 0;l[K]("data-gapiscan")?h=null:(0==n[x]("g:")?m=n[A](2):(l=(l=r(l.className||l[K]("class")))&&ud[ia](l))&&(m=l[1]),h=!m||!(pd[m]||
qd[m]||rd[m])||h&&m!==h?null:m);h&&(vd[h]||0==g[pa][Da]()[x]("g:")||0!=Sa(md(g))[D])&&(g[z]("data-gapiscan",!0),S(c,h,[])[s](g))}if(b)for(var p in c)for(b=c[p],d=0;d<b[D];d++)b[d][z]("data-onload",!0);for(var w in c)sd[s](w);sb("ps1",!0);if((p=sd[P](":"))||a)try{W.load(p,a)}catch(C){hc(C);return}if(yd(td||{}))for(var u in c){a=c[u];w=0;for(b=a[D];w<b;w++)a[w].removeAttribute("data-gapiscan");zd(u)}else{d=[];for(u in c)for(a=c[u],w=0,b=a[D];w<b;w++)e=a[w],Ad(u,e,md(e),d,b);Bd(p,d)}},Cd=function(a){var b=
S(W,a,{});b.go||(b.go=function(b){return xd(b,a)},b.render=function(b,d){var e=d||{};fa(e,a);return nd(b,e)})},Dd=function(a){pd[a]=!0},Ed=function(a){qd[a]=!0},Fd=function(a){rd[a]=!0};var zd=function(a,b){var c=kb(a);b&&c?(c(b),(c=b.iframeNode)&&c[z]("data-gapiattached",!0)):W.load(a,function(){var c=kb(a),e=b&&b.iframeNode;e&&c?(c(b),e[z]("data-gapiattached",!0)):(0,W[a].go)(e&&e[O])})},yd=function(){return!1},Bd=function(){},Ad=function(a,b,c,d,e,f){switch(Gd(b,a,f)){case 0:a=rd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;zd(a,d);break;case 1:var g;if(b[O]){for(var h in c){if(f=U(c,h))f=c[h],f=!!f&&"object"===typeof f&&(!f[B]||f[B]===ba[E][B]||f[B]===ca[E][B]);if(f)try{c[h]=
Zc(c[h])}catch(l){delete c[h]}}var n=!0;c.dontclear&&(n=!1);delete c.dontclear;jc();f=jd(a,c,e);h={allowPost:1,attributes:gd};h.dontclear=!n;e={};e.userParams=c;e.url=f;fa(e,a);var m;c.rd?m=b:(m=q[y]("div"),b[z]("data-gapistub",!0),m[H].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(m,b));e.siteElement=m;m.id||(b=m,S(id,a,0),n="___"+a+"_"+id[a]++,b.id=n);b=T();b[">type"]=a;V(c,b);n=f;c=m;f=h||{};b=f[Aa]||{};Ua(!f.allowPost||!b.onload,"onload is not supported by post iframe");
h=b=n;Oc[t](b)&&(h=Z("iframes/"+h[xa](1)+"/url"),Ua(!!h,"Unknown iframe url config for - "+b));n=$a(R,h[v](Pc,Rc));b=c.ownerDocument||R;m=0;do h=f.id||["I",Lc++,"_",(new Date)[ta]()][P]("");while(b[la](h)&&5>++m);Ua(5>m,"Error creating iframe id");m={};var p={};b[ya]&&9>b[ya]&&(m.hostiemode=b[ya]);V(f.queryParams||{},m);V(f.fragmentParams||{},p);var w=f.connectWithQueryParams?m:p,C=f.pfname,u=T();u.id=h;u.parent=b[G][wa]+"//"+b[G].host;var J=X(b[G][M],"parent"),C=C||"";!C&&J&&(J=X(b[G][M],"id",""),
C=X(b[G][M],"pfname",""),C=J?C+"/"+J:"");u.pfname=C;V(u,w);(u=X(n,"rpctoken")||m.rpctoken||p.rpctoken)||(u=w.rpctoken=f.rpctoken||r(Math.round(1E8*Bc())));f.rpctoken=u;u=b[G][M];w=T();(J=X(u,"_bsh",Y.bsh))&&(w._bsh=J);(u=ib(u))&&(w.jsh=u);f.hintInFragment?V(w,p):V(w,m);n=Za(n,m,p,f.paramsSerializer);p=T();V(Jc,p);V(f[Aa],p);p.name=p.id=h;p.src=n;f.eurl=n;if((f||{}).allowPost&&2E3<n[D]){m=Wa(n);p.src="";p["data-postorigin"]=n;n=Nc(b,c,p,h);-1!=navigator.userAgent[x]("WebKit")&&(g=n.contentWindow.document,
g.open(),p=g[y]("div"),w={},u=h+"_inner",w.name=u,w.src="",w.style="display:none",Nc(b,p,w,u,f));p=(f=m.j[0])?f[F]("&"):[];f=[];for(w=0;w<p[D];w++)u=p[w][F]("=",2),f[s]([ea(u[0]),ea(u[1])]);m.j=[];p=Xa(m);m=b[y]("form");m.action=p;m.method="POST";m.target=h;m[H].display="none";for(h=0;h<f[D];h++)p=b[y]("input"),fa(p,"hidden"),p.name=f[h][0],p.value=f[h][1],m[ga](p);c[ga](m);m.submit();m[O][va](m);g&&g.close();g=n}else g=Nc(b,c,p,h,f);e.iframeNode=g;e.id=g[K]("id");g=e.id;c=T();c.id=g;c.userParams=
e.userParams;c.url=e.url;fa(c,e[ra]);c.state=1;$[g]=c;g=e}else g=null;g&&((e=g.id)&&d[s](e),zd(a,g))}},Gd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(rd[b]){if(hb[a[pa][Da]()])return(a=a.innerHTML)&&a[v](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(qd[b])return 0;if(pd[b])return 1}}return null},nd=function(a,b){var c=b[ra];delete b[ra];var d=("string"===typeof a?q[la](a):a)||void 0;if(d){var e={},f;for(f in b)U(b,f)&&(e[f[Da]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];Ad(c,d,e,g,0,
f);Bd(c,g)}else hc("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};S(W,"platform",{}).go=xd;var yd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[D]&&a;c++)a=a[b[c]];b=ib(Ha[M]);return!a||0!=a[x]("n;")&&0!=b[x]("n;")&&a!==b},Bd=function(a,b){Hd(a,b)},db=function(a){wd(a,!0)},Id=function(a,b){for(var c=b||[],d=0;d<c[D];++d)a(c[d]);for(d=0;d<c[D];d++)Cd(c[d])};
wb[s](["platform",function(a,b,c){td=c;b&&sd[s](b);Id(Dd,a);Id(Ed,c._c.annotation);Id(Fd,c._c.bimodal);ac();Zb();if("explicit"!=Z("parsetags")){jb(a);fc(ec())&&!Z("disableRealtimeCallback")&&jc();var d;c&&(a=c.callback)&&(d=Ta(a),delete c.callback);fb(function(){db(d)})}}]);W._pl=!0;var Jd=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=R[la](a);b&&b[O][va](b);delete $[a];Jd(a)}};var Kd=/^\{h\:'/,Ld=/^!_/,Md="",Hd=function(a,b){function c(){bb("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(Nd(g,b)){var l=e;e=!1;l&&sb("rqe");Od(a,function(){l&&sb("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[D];b++)a[b]({data:g,origin:h})})}}if(0!==b[D]){Md=X(Ha[M],"pfname","");var e=!0;bb("message",d,"add","at");Tb(a,c)}},Nd=function(a,b){a=r(a);if(Kd[t](a))return!0;var c=!1;Ld[t](a)&&(c=!0,a=a[A](2));if(!/^\{/[t](a))return!1;var d=$c(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=Ka[I](b,e)){if("_renderstart"===d.s||d.s===Md+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=R[la](e);lc(e,2);if(f&&c&&f[ja]&&f[Ca]){n:{d=c[O];e=f||{};if(ic()){var g=c.id;if(g){f=(f=$[g])?f.state:void 0;if(1===f||4===f)break n;Jd(g)}}(f=d.nextSibling)&&f[K]&&f[K]("data-gapistub")&&(d[O][va](f),d[H].cssText="");var f=e[ja],h=e[Ca],l=d[H];l.textIndent="0";l.margin="0";l.padding="0";l.background="transparent";l.borderStyle="none";l.cssFloat="none";l.styleFloat="none";l.lineHeight="normal";l.fontSize=
"1px";l.verticalAlign="baseline";d=d[H];d.display="inline-block";l=c[H];l.position="static";l.left=0;l.top=0;l.visibility="visible";f&&(d.width=l.width=f+"px");h&&(d.height=l.height=h+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&lc(g,3)}c["data-csi-wdt"]=(new Date)[ta]()}}return!0}return!1},Od=function(a,b){Tb(a,b)};var Pd=function(a,b){this.B=a;var c=b||{};this.R=c.X;this.A=c.domain;this.C=c.path;this.S=c.Y},Qd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Rd=/^[A-Z_][A-Z0-9_]{0,63}$/;
Pd[E].write=function(a,b){if(!Rd[t](this.B))throw"Invalid cookie name";if(!Qd[t](a))throw"Invalid cookie value";var c=this.B+"="+a;this.A&&(c+=";domain="+this.A);this.C&&(c+=";path="+this.C);var d="number"===typeof b?b:this.R;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.S&&(c+=";secure");q.cookie=c;return!0};Pd.iterate=function(a){for(var b=q.cookie[F](/;\s*/),c=0;c<b[D];++c){var d=b[c][F]("="),e=d[ha]();a(e,d[P]("="))}};var Sd=function(a){this.V=a},Td={};Sd[E].write=function(a){Td[this.V]=a;return!0};Sd.iterate=function(a){for(var b in Td)Td.hasOwnProperty(b)&&a(b,Td[b])};var Ud="https:"===k[G][wa],Vd=Ud||"http:"===k[G][wa]?Pd:Sd,Wd=function(a){var b=a[A](1),c="",d=k[G].hostname;if(""!==b){c=da(b,10);if(isNaN(c))return null;b=d[F](".");if(b[D]<c-1)return null;b[D]==c-1&&(d="."+d)}else d="";return{d:"S"==a[na](0),domain:d,i:c}},Xd=function(a){if(0!==a[x]("GCSC"))return null;var b={w:!1};a=a[A](4);if(!a)return b;var c=a[na](0);a=a[A](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Wd(a[A](d+1));if(null==e)return b;a=a[xa](0,d);if("_"!==a[na](0))return b;d="E"===
c&&e.d;return!d&&("U"!==c||e.d)||d&&!Ud?b:{w:!0,d:d,W:a[A](1),domain:e.domain,i:e.i}},Yd=function(a){if(!a)return[];a=a[F]("=");return a[1]?a[1][F]("|"):[]},Zd=function(a){a=a[F](":");return{t:a[0][F]("=")[1],O:Yd(a[1]),$:Yd(a[2]),Z:Yd(a[3])}},$d=function(){var a,b=null;Vd.iterate(function(c,d){if(0===c[x]("G_AUTHUSER_")){var e=Wd(c[xa](11));if(!a||e.d&&!a.d||e.d==a.d&&e.i>a.i)a=e,b=d}});if(null!==b){var c;Vd.iterate(function(b,d){var e=Xd(b);e&&e.w&&e.d==a.d&&e.i==a.i&&(c=d)});if(c){var d=Zd(c),
e=d&&d.O[Number(b)],d=d&&d.t;if(e)return{P:b,Q:e,t:d}}}return null};var ae=function(a){this.G=a};ae[E].k=0;ae[E].F=2;ae[E].G=null;ae[E].v=!1;ae[E].L=function(){this.v||(this.k=0,this.v=!0,this.D())};ae[E].D=function(){this.v&&(this.G()?this.k=this.F:this.k=Math.min(2*(this.k||this.F),120),k.setTimeout(Ga(this.D,this),1E3*this.k))};for(var be=0;64>be;++be);var ce=null,ic=function(){return Y.oa=!0},jc=function(){Y.oa=!0;var a=$d();(a=a&&a.P)&&$b("googleapis.config/sessionIndex",a);ce||(ce=S(Y,"ss",new ae(de)));a=ce;a.L&&a.L()},de=function(){var a=$d(),b=a&&a.Q||null,c=a&&a.t;Tb("auth",{callback:function(){var a=Q.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,h=Z("isLoggedIn");b=c&&b||!c&&!b;if(h=h!=b)$b("isLoggedIn",b),jc(),od();b=ec();var l=Z("savedUserState"),c=a._guss(b.cookiepolicy),l=l!=c&&"undefined"!=
typeof l;$b("savedUserState",c);(h||l)&&fc(b)&&!Z("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};sb("bs0",!0,k.gapi._bs);sb("bs1",!0);delete k.gapi._bs;})();
gapi.load("client:plusone",{callback:window["plusOneLoaded"],_c:{"jsl":{"ci":{"llang":"en","client":{"headers":{"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"],"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"]},"cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":true,"disableRealtimeCallback":false,"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?usegapi\u003d1"},"youtube":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"shortlists":{"url":""},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"community":{"url":":socialhost:/:session_prefix:_/widget/render/community?usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},":source:":"3p","blogger":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},":im_socialhost:":"https://plus.googleapis.com","savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"eesw":{"enabled":true},"enableContextualSignin":false,"enableSigninTooltip":false,"deviceType":"desktop","inline":{"css":1},"lexps":[102,99,97,128,79,109,45,17,117,115,81,123,122,61,30],"include_granted_scopes":true,"oauth-flow":{"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*","gapi\\.signin\\..*"]},"csi":{"rate":0.01},"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en_GB.ew79mhU6Fpk.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/z\u003dzcms/rs\u003dAItRSTNv4V4apkwSdJyBpjZwSuL_8Gfxng","u":"https://apis.google.com/js/client:plusone.js?onload\u003dplusOneLoaded","hee":true,"fp":"c88e9a5494670c47e6f8deedaf813eca1bab3bb3","dpo":false},"platform":["additnow","blogger","comments","commentcount","community","follow","page","person","plus","plusone","post","savetodrive","savetowallet","shortlists","youtube","ytsubscribe","zoomableimage","hangout"],"fp":"c88e9a5494670c47e6f8deedaf813eca1bab3bb3","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin","share"]}});
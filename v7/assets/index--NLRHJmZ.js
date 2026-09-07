(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const fo="180",Vh=0,Xo=1,Wh=2,Pc=1,Lc=2,En=3,Bn=0,Ue=1,Ye=2,Fn=0,Li=1,Yo=2,qo=3,Zo=4,Xh=5,jn=100,Yh=101,qh=102,Zh=103,$h=104,Kh=200,Jh=201,jh=202,Qh=203,ma=204,ga=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,au=212,ou=213,lu=214,_a=0,xa=1,va=2,Ui=3,Ma=4,ya=5,Sa=6,wa=7,po=0,cu=1,hu=2,On=0,uu=1,du=2,fu=3,Dc=4,pu=5,mu=6,gu=7,Ic=300,Ni=301,Fi=302,Ea=303,ba=304,pr=306,cs=1e3,ti=1001,Ta=1002,qe=1003,_u=1004,Ts=1005,fn=1006,Mr=1007,ei=1008,gn=1009,Uc=1010,Nc=1011,hs=1012,mo=1013,ni=1014,pn=1015,ys=1016,go=1017,_o=1018,us=1020,Fc=35902,Oc=35899,Bc=1021,zc=1022,an=1023,ds=1026,fs=1027,xo=1028,vo=1029,kc=1030,Mo=1031,yo=1033,ir=33776,sr=33777,rr=33778,ar=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Da=37492,Ia=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,ka=37814,Ha=37815,Ga=37816,Va=37817,Wa=37818,Xa=37819,Ya=37820,qa=37821,Za=36492,$a=36494,Ka=36495,Ja=36283,ja=36284,Qa=36285,to=36286,xu=3200,vu=3201,So=0,Mu=1,Nn="",Je="srgb",Oi="srgb-linear",lr="linear",re="srgb",ci=7680,$o=519,yu=512,Su=513,wu=514,Hc=515,Eu=516,bu=517,Tu=518,Au=519,Ko=35044,Jo="300 es",mn=2e3,cr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,eo=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Ru(i,t){return(i%t+t)%t}function Sr(i,t,e){return(1-e)*i+e*t}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const T=Math.sqrt(w),R=Math.atan2(T,p*b);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}const v=o*b;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new L,jo=new Ss;class Vt{constructor(t,e,n,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],w=s[4],v=s[7],T=s[2],R=s[5],C=s[8];return r[0]=a*_+o*b+l*T,r[3]=a*m+o*w+l*R,r[6]=a*p+o*v+l*C,r[1]=c*_+h*b+u*T,r[4]=c*m+h*w+u*R,r[7]=c*p+h*v+u*C,r[2]=d*_+f*b+g*T,r[5]=d*m+f*w+g*R,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Vt;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){const i=hr("canvas");return i.style.display="block",i}const Qo={};function ps(i){i in Qo||(Qo[i]=!0,console.warn(i))}function Pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const tl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){const i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:tl,fromXYZ:el,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:re,toXYZ:tl,fromXYZ:el,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}const jt=Lu();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Du{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=hr("canvas")),hi.width=t.width,hi.height=t.height;const s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iu=0;class wo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(br(s[a].image)):r.push(br(s[a]))}else r=br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;const Tr=new L;class Pe extends Hi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ti,s=ti,r=fn,a=ei,o=an,l=gn,c=Pe.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Gi(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tr).x}get height(){return this.source.getSize(Tr).y}get depth(){return this.source.getSize(Tr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Ic;Pe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(f+1)/2,T=(p+1)/2,R=(h+d)/4,C=(u+_)/4,I=(g+m)/4;return w>v&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=C/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Pe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fu extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),Rs.subVectors(this.max,qi),ui.subVectors(t.a,qi),di.subVectors(t.b,qi),fi.subVectors(t.c,qi),An.subVectors(di,ui),Rn.subVectors(fi,di),Xn.subVectors(ui,fi);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Xn.y,Xn.x,0];return!Ar(e,ui,di,fi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,ui,di,fi,Rs))?!1:(Cs.crossVectors(An,Rn),e=[Cs.x,Cs.y,Cs.z],Ar(e,ui,di,fi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vn=[new L,new L,new L,new L,new L,new L,new L,new L],je=new L,As=new ri,ui=new L,di=new L,fi=new L,An=new L,Rn=new L,Xn=new L,qi=new L,Rs=new L,Cs=new L,Yn=new L;function Ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ou=new ri,Zi=new L,Rr=new L;class Gn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ou.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Rr)),this.expandByPoint(Zi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Mn=new L,Cr=new L,Ps=new L,Cn=new L,Pr=new L,Ls=new L,Lr=new L;class Eo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Cr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Cn.dot(this.direction),l=-Cn.dot(Ps),c=Cn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cr).addScaledVector(Ps,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Pr.subVectors(e,t),Ls.subVectors(n,t),Lr.crossVectors(Pr,Ls);let a=this.direction.dot(Lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(Ls.crossVectors(Cn,Ls));if(l<0)return null;const c=o*this.direction.dot(Pr.cross(Cn));if(c<0||l+c>a)return null;const h=-o*Cn.dot(Lr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,zu)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Pn.crossVectors(n,Ve),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Pn.crossVectors(n,Ve)),Pn.normalize(),Ds.crossVectors(Ve,Pn),s[0]=Pn.x,s[4]=Ds.x,s[8]=Ve.x,s[1]=Pn.y,s[5]=Ds.y,s[9]=Ve.y,s[2]=Pn.z,s[6]=Ds.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],w=n[7],v=n[11],T=n[15],R=s[0],C=s[4],I=s[8],S=s[12],y=s[1],P=s[5],O=s[9],k=s[13],Y=s[2],G=s[6],X=s[10],j=s[14],V=s[3],ht=s[7],_t=s[11],Mt=s[15];return r[0]=a*R+o*y+l*Y+c*V,r[4]=a*C+o*P+l*G+c*ht,r[8]=a*I+o*O+l*X+c*_t,r[12]=a*S+o*k+l*j+c*Mt,r[1]=h*R+u*y+d*Y+f*V,r[5]=h*C+u*P+d*G+f*ht,r[9]=h*I+u*O+d*X+f*_t,r[13]=h*S+u*k+d*j+f*Mt,r[2]=g*R+_*y+m*Y+p*V,r[6]=g*C+_*P+m*G+p*ht,r[10]=g*I+_*O+m*X+p*_t,r[14]=g*S+_*k+m*j+p*Mt,r[3]=b*R+w*y+v*Y+T*V,r[7]=b*C+w*P+v*G+T*ht,r[11]=b*I+w*O+v*X+T*_t,r[15]=b*S+w*k+v*j+T*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,T=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=e*b+n*w+s*v+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=b*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=w*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=T*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,w=l*h,v=l*u,T=n.x,R=n.y,C=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+w)*C,s[9]=(m-b)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===mn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new L,Qe=new oe,Bu=new L(0,0,0),zu=new L(1,1,1),Pn=new L,Ds=new L,Ve=new L,nl=new oe,il=new Ss;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ku=0;const sl=new L,mi=new Ss,yn=new oe,Is=new L,$i=new L,Hu=new L,Gu=new Ss,rl=new L(1,0,0),al=new L(0,1,0),ol=new L(0,0,1),ll={type:"added"},Vu={type:"removed"},gi={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Se extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new L,e=new ln,n=new Ss,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(rl,t)}rotateY(t){return this.rotateOnAxis(al,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return sl.copy(t).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rl,t)}translateY(t){return this.translateOnAxis(al,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt($i,Is,this.up):yn.lookAt(Is,$i,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(yn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ll),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ll),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new L,Sn=new L,Ir=new L,wn=new L,_i=new L,xi=new L,cl=new L,Ur=new L,Nr=new L,Fr=new L,Or=new ae,Br=new ae,zr=new ae;class rn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),Sn.subVectors(n,e),Ir.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(Sn),l=tn.dot(Ir),c=Sn.dot(Sn),h=Sn.dot(Ir),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Or.setScalar(0),Br.setScalar(0),zr.setScalar(0),Or.fromBufferAttribute(t,e),Br.fromBufferAttribute(t,n),zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(zr,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),Sn.subVectors(t,e),tn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;_i.subVectors(s,n),xi.subVectors(r,n),Ur.subVectors(t,n);const l=_i.dot(Ur),c=xi.dot(Ur);if(l<=0&&c<=0)return e.copy(n);Nr.subVectors(t,s);const h=_i.dot(Nr),u=xi.dot(Nr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(_i,a);Fr.subVectors(t,r);const f=_i.dot(Fr),g=xi.dot(Fr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(xi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(cl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Us={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Ru(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kr(a,r,t+1/3),this.g=kr(a,r,t),this.b=kr(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return jt.workingToColorSpace(Re.copy(this),t),Math.round(Yt(Re.r*255,0,255))*65536+Math.round(Yt(Re.g*255,0,255))*256+Math.round(Yt(Re.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Je){jt.workingToColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Us);const n=Sr(Ln.h,Us.h,e),s=Sr(Ln.s,Us.s,e),r=Sr(Ln.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Xt;Xt.NAMES=Wc;let Wu=0;class ai extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Li,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tn extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,Ns=new dt;let Xu=0;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}}class Xc extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yu=0;const Ke=new oe,Hr=new Se,vi=new L,We=new ri,Ki=new ri,be=new L;class ke extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Yc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,Ki.min),We.expandByPoint(be),be.addVectors(We.max,Ki.max),We.expandByPoint(be)):(We.expandByPoint(Ki.min),We.expandByPoint(Ki.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),be.add(vi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;const c=new L,h=new L,u=new L,d=new dt,f=new dt,g=new dt,_=new L,m=new L;function p(I,S,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[S].add(_),o[y].add(_),l[I].add(m),l[S].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,S=b.length;I<S;++I){const y=b[I],P=y.start,O=y.count;for(let k=P,Y=P+O;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new L,v=new L,T=new L,R=new L;function C(I){T.fromBufferAttribute(s,I),R.copy(T);const S=o[I];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(R,S);const P=v.dot(l[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,S=b.length;I<S;++I){const y=b[I],P=y.start,O=y.count;for(let k=P,Y=P+O;k<Y;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new oe,qn=new Eo,Fs=new Gn,ul=new L,Os=new L,Bs=new L,zs=new L,Gr=new L,ks=new L,dl=new L,Hs=new L;class Pt extends Se{constructor(t=new ke,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),a?ks.addScaledVector(Gr,h):ks.addScaledVector(Gr.sub(e),h))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Fs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Fs,ul)===null||qn.origin.distanceToSquared(ul)>(t.far-t.near)**2))&&(hl.copy(r).invert(),qn.copy(t.ray).applyMatrix4(hl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){const R=o.getX(v),C=o.getX(v+1),I=o.getX(v+2);s=Gs(this,p,t,n,c,h,u,R,C,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=Gs(this,a,t,n,c,h,u,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){const R=v,C=v+1,I=v+2;s=Gs(this,p,t,n,c,h,u,R,C,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,w=m+1,v=m+2;s=Gs(this,a,t,n,c,h,u,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qu(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:i}}function Gs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,Bs),i.getVertexPosition(c,zs);const h=qu(i,t,e,n,Os,Bs,zs,dl);if(h){const u=new L;rn.getBarycoord(dl,Os,Bs,zs,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};rn.getNormal(Os,Bs,zs,d.normal),h.face=d,h.barycoord=u}return h}class te extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function g(_,m,p,b,w,v,T,R,C,I,S){const y=v/C,P=T/I,O=v/2,k=T/2,Y=R/2,G=C+1,X=I+1;let j=0,V=0;const ht=new L;for(let _t=0;_t<X;_t++){const Mt=_t*P-k;for(let Ht=0;Ht<G;Ht++){const $t=Ht*y-O;ht[_]=$t*b,ht[m]=Mt*w,ht[p]=Y,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=R>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Ht/C),u.push(1-_t/I),j+=1}}for(let _t=0;_t<I;_t++)for(let Mt=0;Mt<C;Mt++){const Ht=d+Mt+G*_t,$t=d+Mt+G*(_t+1),ee=d+(Mt+1)+G*(_t+1),Kt=d+(Mt+1)+G*_t;l.push(Ht,$t,Kt),l.push($t,ee,Kt),V+=6}o.addGroup(f,V,S),f+=V,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function Zu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const $u={clone:Bi,merge:Ie};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new L,fl=new dt,pl=new dt;class ze extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,fl,pl),e.subVectors(pl,fl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,yi=1;class ju extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Mi,yi,t,e);s.layers=this.layers,this.add(s);const r=new ze(Mi,yi,t,e);r.layers=this.layers,this.add(r);const a=new ze(Mi,yi,t,e);a.layers=this.layers,this.add(a);const o=new ze(Mi,yi,t,e);o.layers=this.layers,this.add(o);const l=new ze(Mi,yi,t,e);l.layers=this.layers,this.add(l);const c=new ze(Mi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $c extends Pe{constructor(t=[],e=Ni,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qu extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $c(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new te(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Fn});r.uniforms.tEquirect.value=e;const a=new Pt(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=fn),new ju(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ye extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class To{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new To(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ao extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ed extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new oe,gl=new oe,Vs=[],_l=new ri,nd=new oe,Ji=new Pt,ji=new Gn;class id extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),_l.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(_l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),ji.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Si),gl.multiplyMatrices(n,Si),Ji.matrixWorld=gl,Ji.raycast(t,Vs);for(let a=0,o=Vs.length;a<o;a++){const l=Vs[a];l.instanceId=r,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ed(new Float32Array(s*this.count),s,this.count,xo,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new L,sd=new L,rd=new Vt;class Un{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rd.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Gn,ad=new dt(.5,.5),Ws=new L;class Ro{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-b).normalize(),s[1].setComponents(c+a,f+h,p+g,T+b).normalize(),s[2].setComponents(c+o,f+u,p+_,T+w).normalize(),s[3].setComponents(c-o,f-u,p-_,T-w).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-v).normalize(),e===mn)s[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(e===cr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){Zn.center.set(0,0,0);const e=ad.distanceTo(t.center);return Zn.radius=.7071067811865476+e,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kc extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ur=new L,dr=new L,xl=new oe,Qi=new Eo,Xs=new Gn,Xr=new L,vl=new L;class od extends Se{constructor(t=new ke,e=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ur.fromBufferAttribute(e,s-1),dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ur.distanceTo(dr);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;xl.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),w=Ys(this,t,Qi,l,p,b,_);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ys(this,t,Qi,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ys(this,t,Qi,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Ys(this,t,Qi,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ys(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(ur.fromBufferAttribute(o,s),dr.fromBufferAttribute(o,r),e.distanceSqToSegment(ur,dr,Xr,vl)>n)return;Xr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xr);if(!(c<t.near||c>t.far))return{distance:c,point:vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ml=new L,yl=new L;class ld extends od{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ml.fromBufferAttribute(e,s),yl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ml.distanceTo(yl);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jc extends Pe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jc extends Pe{constructor(t,e,n=ni,s,r,a,o=qe,l=qe,c,h=ds,u=1){if(h!==ds&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qc extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hn extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function b(){const v=new L,T=new L;let R=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const S=[],y=I/r,P=y*(e-t)+t;for(let O=0;O<=s;O++){const k=O/s,Y=k*l+o,G=Math.sin(Y),X=Math.cos(Y);T.x=P*G,T.y=-y*n+m,T.z=P*X,u.push(T.x,T.y,T.z),v.set(G,C,X).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-y),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=_[S][I],P=_[S+1][I],O=_[S+1][I+1],k=_[S][I+1];(t>0||S!==0)&&(h.push(y,P,k),R+=3),(e>0||S!==r-1)&&(h.push(P,O,k),R+=3)}c.addGroup(p,R,0),p+=R}function w(v){const T=g,R=new dt,C=new L;let I=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const Y=O/s*l+o,G=Math.cos(Y),X=Math.sin(Y);C.x=S*X,C.y=m*y,C.z=S*G,u.push(C.x,C.y,C.z),d.push(0,y,0),R.x=G*.5+.5,R.y=X*.5*y+.5,f.push(R.x,R.y),g++}for(let O=0;O<s;O++){const k=T+O,Y=P+O;v===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Co(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new oe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends _n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cd extends Po{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const qs=new L,Yr=new Lo,qr=new Lo,Zr=new Lo;class hd extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),qr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Zr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Zr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yr.calc(l),qr.calc(l),Zr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ud(i,t){const e=1-i;return e*e*t}function dd(i,t){return 2*(1-i)*i*t}function fd(i,t){return i*i*t}function rs(i,t,e,n){return ud(i,t)+dd(i,e)+fd(i,n)}function pd(i,t){const e=1-i;return e*e*e*t}function md(i,t){const e=1-i;return 3*e*e*i*t}function gd(i,t){return 3*(1-i)*i*i*t}function _d(i,t){return i*i*i*t}function as(i,t,e,n,s){return pd(i,t)+md(i,e)+gd(i,n)+_d(i,s)}class th extends _n{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xd extends _n{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y),as(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eh extends _n{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends _n{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends _n{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Md extends _n{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y),rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Sl(o,l.x,c.x,h.x,u.x),Sl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:cd,CatmullRomCurve3:hd,CubicBezierCurve:th,CubicBezierCurve3:xd,EllipseCurve:Po,LineCurve:eh,LineCurve3:vd,QuadraticBezierCurve:nh,QuadraticBezierCurve3:Md,SplineCurve:ih});class yd extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new no[s.type]().fromJSON(s))}return this}}class io extends yd{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new nh(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new th(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ih(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Po(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Do extends io{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new io().fromJSON(s))}return this}}function Sd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ad(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ms(r,a,e,o,l,c,0),a}function sh(i,t,e,n,s){let r;if(s===Bd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wl(a/n|0,i[a],i[a+1],r);return r&&zi(r,r.next)&&(_s(r),r=r.next),r}function ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zi(e,e.next)||ge(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ms(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Dd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Ed(i,n,s,r):wd(i)){t.push(l.i,i.i,c.i),_s(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bd(ii(i),t),ms(i,t,e,n,s,r,2)):a===2&&Td(i,t,e,n,s,r):ms(ii(i),t,e,n,s,r,1);break}}}function wd(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(s,o,r,l,a,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ed(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=so(f,g,t,e,n),b=so(_,m,t,e,n);let w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=b;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&is(o,h,l,u,c,d,w.x,w.y)&&ge(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,h,l,u,c,d,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&is(o,h,l,u,c,d,w.x,w.y)&&ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&is(o,h,l,u,c,d,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zi(n,s)&&ah(n,e,e.next,s)&&gs(n,s)&&gs(s,n)&&(t.push(n.i,e.i,s.i),_s(e),_s(e.next),e=i=s),e=e.next}while(e!==i);return ii(e)}function Td(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nd(a,o)){let l=oh(a,o);a=ii(a,a.next),l=ii(l,l.next),ms(a,t,e,n,s,r,0),ms(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ad(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=sh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ud(c))}s.sort(Rd);for(let r=0;r<s.length;r++)e=Cd(s[r],e);return e}function Rd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cd(i,t){const e=Pd(i,t);if(!e)return t;const n=oh(e,i);return ii(n,n.next),ii(e,e.next)}function Pd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(zi(i,e))return e;do{if(zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);gs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ld(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ld(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Dd(i,t,e,n){let s=i;do s.z===0&&(s.z=so(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Id(s)}function Id(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function so(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ud(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function is(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&rh(i,t,e,n,s,r,a,o)}function Nd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fd(i,t)&&(gs(i,t)&&gs(t,i)&&Od(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||zi(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zi(i,t){return i.x===t.x&&i.y===t.y}function ah(i,t,e,n){const s=$s(ge(i,t,e)),r=$s(ge(i,t,n)),a=$s(ge(e,n,i)),o=$s(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&Zs(i,e,t)||r===0&&Zs(i,n,t)||a===0&&Zs(e,i,n)||o===0&&Zs(e,t,n))}function Zs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $s(i){return i>0?1:i<0?-1:0}function Fd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ah(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Od(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function oh(i,t){const e=ro(i.i,i.x,i.y),n=ro(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wl(i,t,e,n){const s=ro(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ro(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class zd{static triangulate(t,e,n=2){return Sd(t,e,n)}}class Ci{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];El(t),bl(n,t);let a=t.length;e.forEach(El);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bl(n,e[l]);const o=zd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function El(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mr extends ke{constructor(t=new Do([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:kd;let w,v=!1,T,R,C,I;p&&(w=p.getSpacedPoints(h),v=!0,d=!1,T=p.computeFrenetFrames(h,!1),R=new L,C=new L,I=new L),d||(m=0,f=0,g=0,_=0);const S=o.extractPoints(c);let y=S.shape;const P=S.holes;if(!Ci.isClockWise(y)){y=y.reverse();for(let tt=0,K=P.length;tt<K;tt++){const $=P[tt];Ci.isClockWise($)&&(P[tt]=$.reverse())}}function k(tt){const $=10000000000000001e-36;let Z=tt[0];for(let lt=1;lt<=tt.length;lt++){const nt=lt%tt.length,ct=tt[nt],zt=ct.x-Z.x,Bt=ct.y-Z.y,E=zt*zt+Bt*Bt,x=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(Z.x),Math.abs(Z.y)),F=$*x*x;if(E<=F){tt.splice(nt,1),lt--;continue}Z=ct}}k(y),P.forEach(k);const Y=P.length,G=y;for(let tt=0;tt<Y;tt++){const K=P[tt];y=y.concat(K)}function X(tt,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(K,$)}const j=y.length;function V(tt,K,$){let Z,lt,nt;const ct=tt.x-K.x,zt=tt.y-K.y,Bt=$.x-tt.x,E=$.y-tt.y,x=ct*ct+zt*zt,F=ct*E-zt*Bt;if(Math.abs(F)>Number.EPSILON){const H=Math.sqrt(x),Q=Math.sqrt(Bt*Bt+E*E),W=K.x-zt/H,At=K.y+ct/H,ot=$.x-E/Q,Et=$.y+Bt/Q,bt=((ot-W)*E-(Et-At)*Bt)/(ct*E-zt*Bt);Z=W+ct*bt-tt.x,lt=At+zt*bt-tt.y;const it=Z*Z+lt*lt;if(it<=2)return new dt(Z,lt);nt=Math.sqrt(it/2)}else{let H=!1;ct>Number.EPSILON?Bt>Number.EPSILON&&(H=!0):ct<-Number.EPSILON?Bt<-Number.EPSILON&&(H=!0):Math.sign(zt)===Math.sign(E)&&(H=!0),H?(Z=-zt,lt=ct,nt=Math.sqrt(x)):(Z=ct,lt=zt,nt=Math.sqrt(x/2))}return new dt(Z/nt,lt/nt)}const ht=[];for(let tt=0,K=G.length,$=K-1,Z=tt+1;tt<K;tt++,$++,Z++)$===K&&($=0),Z===K&&(Z=0),ht[tt]=V(G[tt],G[$],G[Z]);const _t=[];let Mt,Ht=ht.concat();for(let tt=0,K=Y;tt<K;tt++){const $=P[tt];Mt=[];for(let Z=0,lt=$.length,nt=lt-1,ct=Z+1;Z<lt;Z++,nt++,ct++)nt===lt&&(nt=0),ct===lt&&(ct=0),Mt[Z]=V($[Z],$[nt],$[ct]);_t.push(Mt),Ht=Ht.concat(Mt)}let $t;if(m===0)$t=Ci.triangulateShape(G,P);else{const tt=[],K=[];for(let $=0;$<m;$++){const Z=$/m,lt=f*Math.cos(Z*Math.PI/2),nt=g*Math.sin(Z*Math.PI/2)+_;for(let ct=0,zt=G.length;ct<zt;ct++){const Bt=X(G[ct],ht[ct],nt);Lt(Bt.x,Bt.y,-lt),Z===0&&tt.push(Bt)}for(let ct=0,zt=Y;ct<zt;ct++){const Bt=P[ct];Mt=_t[ct];const E=[];for(let x=0,F=Bt.length;x<F;x++){const H=X(Bt[x],Mt[x],nt);Lt(H.x,H.y,-lt),Z===0&&E.push(H)}Z===0&&K.push(E)}}$t=Ci.triangulateShape(tt,K)}const ee=$t.length,Kt=g+_;for(let tt=0;tt<j;tt++){const K=d?X(y[tt],Ht[tt],Kt):y[tt];v?(C.copy(T.normals[0]).multiplyScalar(K.x),R.copy(T.binormals[0]).multiplyScalar(K.y),I.copy(w[0]).add(C).add(R),Lt(I.x,I.y,I.z)):Lt(K.x,K.y,0)}for(let tt=1;tt<=h;tt++)for(let K=0;K<j;K++){const $=d?X(y[K],Ht[K],Kt):y[K];v?(C.copy(T.normals[tt]).multiplyScalar($.x),R.copy(T.binormals[tt]).multiplyScalar($.y),I.copy(w[tt]).add(C).add(R),Lt(I.x,I.y,I.z)):Lt($.x,$.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const K=tt/m,$=f*Math.cos(K*Math.PI/2),Z=g*Math.sin(K*Math.PI/2)+_;for(let lt=0,nt=G.length;lt<nt;lt++){const ct=X(G[lt],ht[lt],Z);Lt(ct.x,ct.y,u+$)}for(let lt=0,nt=P.length;lt<nt;lt++){const ct=P[lt];Mt=_t[lt];for(let zt=0,Bt=ct.length;zt<Bt;zt++){const E=X(ct[zt],Mt[zt],Z);v?Lt(E.x,E.y+w[h-1].y,w[h-1].x+$):Lt(E.x,E.y,u+$)}}}q(),et();function q(){const tt=s.length/3;if(d){let K=0,$=j*K;for(let Z=0;Z<ee;Z++){const lt=$t[Z];wt(lt[2]+$,lt[1]+$,lt[0]+$)}K=h+m*2,$=j*K;for(let Z=0;Z<ee;Z++){const lt=$t[Z];wt(lt[0]+$,lt[1]+$,lt[2]+$)}}else{for(let K=0;K<ee;K++){const $=$t[K];wt($[2],$[1],$[0])}for(let K=0;K<ee;K++){const $=$t[K];wt($[0]+j*h,$[1]+j*h,$[2]+j*h)}}n.addGroup(tt,s.length/3-tt,0)}function et(){const tt=s.length/3;let K=0;vt(G,K),K+=G.length;for(let $=0,Z=P.length;$<Z;$++){const lt=P[$];vt(lt,K),K+=lt.length}n.addGroup(tt,s.length/3-tt,1)}function vt(tt,K){let $=tt.length;for(;--$>=0;){const Z=$;let lt=$-1;lt<0&&(lt=tt.length-1);for(let nt=0,ct=h+m*2;nt<ct;nt++){const zt=j*nt,Bt=j*(nt+1),E=K+Z+zt,x=K+lt+zt,F=K+lt+Bt,H=K+Z+Bt;qt(E,x,F,H)}}}function Lt(tt,K,$){l.push(tt),l.push(K),l.push($)}function wt(tt,K,$){ce(tt),ce(K),ce($);const Z=s.length/3,lt=b.generateTopUV(n,s,Z-3,Z-2,Z-1);A(lt[0]),A(lt[1]),A(lt[2])}function qt(tt,K,$,Z){ce(tt),ce(K),ce(Z),ce(K),ce($),ce(Z);const lt=s.length/3,nt=b.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);A(nt[0]),A(nt[1]),A(nt[3]),A(nt[1]),A(nt[2]),A(nt[3])}function ce(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function A(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new no[s.type]().fromJSON(s)),new mr(n,t.options)}}const kd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-u),new dt(d,1-g),new dt(_,1-p)]:[new dt(o,1-l),new dt(h,1-u),new dt(f,1-g),new dt(m,1-p)]}};function Hd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oi extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let w=0;w<c;w++){const v=w*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,v=b+c*(p+1),T=b+1+c*(p+1),R=b+1+c*p;f.push(w,v,R),f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ue extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vd extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xd extends gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new oe,Tl=new L,Al=new L;class lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rl=new oe,ts=new L,Kr=new L;class Yd extends lh{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),Kr.copy(n.position),Kr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kr),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,n.coordinateSystem,n.reversedDepth)}}class ch extends gr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Io extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qd extends lh{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new qd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $d extends gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kd extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Cl=new oe;class jd{constructor(t,e,n=0,s=1/0){this.ray=new Eo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(t,e=!0,n=[]){return ao(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ao(t[s],this,n,e);return n.sort(Pl),n}}function Pl(i,t){return i.distance-t.distance}function ao(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ao(r[a],t,e,!0)}}function Ll(i,t,e,n){const s=Qd(n);switch(e){case Bc:return i*t;case xo:return i*t/s.components*s.byteLength;case vo:return i*t/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Mo:return i*t*2/s.components*s.byteLength;case zc:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Za:case $a:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qd(i){switch(i){case gn:case Uc:return{byteLength:1,components:1};case hs:case Nc:case ys:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case ni:case mo:case pn:return{byteLength:4,components:1};case Fc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function hh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Mf,color_fragment:yf,color_pars_fragment:Sf,color_pars_vertex:wf,color_vertex:Ef,common:bf,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:If,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:kf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:Yf,lights_pars_begin:qf,lights_toon_fragment:$f,lights_toon_pars_fragment:Kf,lights_phong_fragment:Jf,lights_phong_pars_fragment:jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:Mp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:wp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:kp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:qp,tonemapping_pars_fragment:Zp,transmission_fragment:$p,transmission_pars_fragment:Kp,uv_pars_fragment:Jp,uv_pars_vertex:jp,uv_vertex:Qp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:vm,meshmatcap_frag:Mm,meshnormal_vert:ym,meshnormal_frag:Sm,meshphong_vert:wm,meshphong_frag:Em,meshphysical_vert:bm,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},ft={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},dn={basic:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ie([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ie([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ie([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ie([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ie([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ie([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ie([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ie([ft.lights,ft.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};dn.physical={uniforms:Ie([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ks={r:0,b:0,g:0},$n=new ln,Nm=new oe;function Fm(i,t,e,n,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function _(w){let v=!1;const T=g(w);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===pr)?(h===void 0&&(h=new Pt(new te(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Bi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(v.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler($n)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pt(new oi(2,2),new kn({name:"BackgroundMaterial",uniforms:Bi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,v){w.getRGB(Ks,qc(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,v=1){o.set(w),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m,dispose:b}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,P,O,k,Y){let G=!1;const X=u(k,O,P);r!==X&&(r=X,c(r.object)),G=f(y,k,O,Y),G&&g(y,k,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(y,P,O,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,O){const k=O.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let G=Y[P.id];G===void 0&&(G={},Y[P.id]=G);let X=G[k];return X===void 0&&(X=d(l()),G[k]=X),X}function d(y){const P=[],O=[],k=[];for(let Y=0;Y<e;Y++)P[Y]=0,O[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,P,O,k){const Y=r.attributes,G=P.attributes;let X=0;const j=O.getAttributes();for(const V in j)if(j[V].location>=0){const _t=Y[V];let Mt=G[V];if(Mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),_t===void 0||_t.attribute!==Mt||Mt&&_t.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(y,P,O,k){const Y={},G=P.attributes;let X=0;const j=O.getAttributes();for(const V in j)if(j[V].location>=0){let _t=G[V];_t===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));const Mt={};Mt.attribute=_t,_t&&_t.data&&(Mt.data=_t.data),Y[V]=Mt,X++}r.attributes=Y,r.attributesNum=X,r.index=k}function _(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const O=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;O[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),Y[y]!==P&&(i.vertexAttribDivisor(y,P),Y[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==y[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function w(y,P,O,k,Y,G,X){X===!0?i.vertexAttribIPointer(y,P,O,Y,G):i.vertexAttribPointer(y,P,O,k,Y,G)}function v(y,P,O,k){_();const Y=k.attributes,G=O.getAttributes(),X=P.defaultAttributeValues;for(const j in G){const V=G[j];if(V.location>=0){let ht=Y[j];if(ht===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const _t=ht.normalized,Mt=ht.itemSize,Ht=t.get(ht);if(Ht===void 0)continue;const $t=Ht.buffer,ee=Ht.type,Kt=Ht.bytesPerElement,q=ee===i.INT||ee===i.UNSIGNED_INT||ht.gpuType===mo;if(ht.isInterleavedBufferAttribute){const et=ht.data,vt=et.stride,Lt=ht.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)p(V.location+wt,et.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let wt=0;wt<V.locationSize;wt++)w(V.location+wt,Mt/V.locationSize,ee,_t,vt*Kt,(Lt+Mt/V.locationSize*wt)*Kt,q)}else{if(ht.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)p(V.location+et,ht.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let et=0;et<V.locationSize;et++)w(V.location+et,Mt/V.locationSize,ee,_t,Mt*Kt,Mt/V.locationSize*et*Kt,q)}}else if(X!==void 0){const _t=X[j];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(V.location,_t);break;case 3:i.vertexAttrib3fv(V.location,_t);break;case 4:i.vertexAttrib4fv(V.location,_t);break;default:i.vertexAttrib1fv(V.location,_t)}}}}b()}function T(){I();for(const y in n){const P=n[y];for(const O in P){const k=P[O];for(const Y in k)h(k[Y].object),delete k[Y];delete P[O]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const k=P[O];for(const Y in k)h(k[Y].object),delete k[Y];delete P[O]}delete n[y.id]}function C(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const k=O[y.id];for(const Y in k)h(k[Y].object),delete k[Y];delete O[y.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Bm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:T,maxSamples:R}}function km(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,w=b*4;let v=p.clippingState||null;l.value=v,v=h(g,d,w,f);for(let T=0;T!==w;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==_;++w,v+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hm(i){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=Ni:o===ba&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Pi=4,Dl=[.125,.215,.35,.446,.526,.582],Qn=20,Jr=new Io,Il=new Xt;let jr=null,Qr=0,ta=0,ea=!1;const Jn=(1+Math.sqrt(5))/2,wi=1/Jn,Ul=[new L(-Jn,wi,0),new L(Jn,wi,0),new L(-wi,0,Jn),new L(wi,0,Jn),new L(0,Jn,-wi),new L(0,Jn,wi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Gm=new L;class oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Gm}=r;jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Qr,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ys,format:an,colorSpace:Oi,depthBuffer:!1},s=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Wm(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s,r){const l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Il),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Tn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Pt(new te,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(Il),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const T=this._cubeSize;Js(s,v*T,w>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ul[(s-r-1)%Ul.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let b=0;for(let C=0;C<Qn;++C){const I=C/_,S=Math.exp(-I*I/2);p.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const v=this._sizeLods[s],T=3*v*(s>w-Pi?s-w+Pi:0),R=4*(this._cubeSize-v);Js(e,T,R,3*v,2*v),l.setRenderTarget(e),l.render(u,Jr)}}function Vm(i){const t=[],e=[],n=[];let s=i;const r=i-Pi+1+Dl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Pi?l=Dl[a-i+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,I=R>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(S,_*g*R),w.set(d,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const T=new ke;T.setAttribute("position",new Ne(b,_)),T.setAttribute("uv",new Ne(w,m)),T.setAttribute("faceIndex",new Ne(v,p)),t.push(T),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wm(i,t,e){const n=new Float32Array(Qn),s=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ol(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===ba,h=l===Ni||l===Fi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new oo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new oo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ym(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let w=0,v=b.length;w<v;w+=3){const T=b[w+0],R=b[w+1],C=b[w+2];d.push(T,R,R,C,C,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,v=b.length/3-1;w<v;w+=3){const T=w+0,R=w+1,C=w+2;d.push(T,R,R,C,C,T)}}else return;const m=new(Gc(d)?Yc:Xc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Zm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*R*4*u),I=new Vc(C,T,R,u);I.type=pn,I.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const O=p[P],k=b[P],Y=w[P],G=T*R*4*P;for(let X=0;X<O.count;X++){const j=X*S;g===!0&&(s.fromBufferAttribute(O,X),C[G+j+0]=s.x,C[G+j+1]=s.y,C[G+j+2]=s.z,C[G+j+3]=0),_===!0&&(s.fromBufferAttribute(k,X),C[G+j+4]=s.x,C[G+j+5]=s.y,C[G+j+6]=s.z,C[G+j+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),C[G+j+8]=s.x,C[G+j+9]=s.y,C[G+j+10]=s.z,C[G+j+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new dt(T,R)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const uh=new Pe,Bl=new jc(1,1),dh=new Vc,fh=new Fu,ph=new $c,zl=[],kl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Vl=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Ee(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Ee(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Ee(e,n)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=Hc,r=Bl):r=uh,e.setTexture2D(t||r,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fh,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ph,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dh,s)}function _0(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function y0(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function S0(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b0(i,t){i.uniform1iv(this.addr,t)}function T0(i,t){i.uniform2iv(this.addr,t)}function A0(i,t){i.uniform3iv(this.addr,t)}function R0(i,t){i.uniform4iv(this.addr,t)}function C0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||uh,r[a])}function U0(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||fh,r[a])}function N0(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ph,r[a])}function F0(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dh,r[a])}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return y0;case 35674:return S0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}}class k0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wl(e,c===void 0?new B0(o,i,t):new z0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new k0(o),Wl(e,u)),e=u}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);H0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const G0=37297;let V0=0;function W0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yl=new Vt;function X0(i){jt._getMatrix(Yl,jt.workingColorSpace,i);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+W0(i.getShaderSource(t),o)}else return r}function Y0(i,t){const e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q0(i,t){let e;switch(t){case uu:e="Linear";break;case du:e="Reinhard";break;case fu:e="Cineon";break;case Dc:e="ACESFilmic";break;case mu:e="AgX";break;case gu:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new L;function Z0(){jt.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ss(i){return i!==""}function Zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(j0,tg)}const Q0=new Map;function tg(i,t){let e=Wt[t];if(e===void 0){const n=Q0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fi&&(t="ENVMAP_MODE_REFRACTION"),t}function ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case hu:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ig(e),c=sg(e),h=rg(e),u=ag(e),d=og(e),f=$0(e),g=K0(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Wt.tonemapping_pars_fragment:"",e.toneMapping!==On?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=lo(a),a=Zl(a,e),a=$l(a,e),o=lo(o),o=Zl(o,e),o=$l(o,e),a=Kl(a),o=Kl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,v=b+p+o,T=Xl(s,s.VERTEX_SHADER,w),R=Xl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(T)||"",Y=s.getShaderInfoLog(R)||"",G=O.trim(),X=k.trim(),j=Y.trim();let V=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,R);else{const _t=ql(s,T,"vertex"),Mt=ql(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+_t+`
`+Mt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||j==="")&&(ht=!1);ht&&(P.diagnostics={runnable:V,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(T),s.deleteShader(R),I=new or(s,_),S=J0(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,G0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let cg=0;class hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ug(t),e.set(t,n)),n}}class ug{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}}function dg(i,t,e,n,s,r,a){const o=new bo,l=new hg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,O,k){const Y=O.fog,G=k.geometry,X=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=j&&j.mapping===pr?j.image.height:null,ht=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=_t!==void 0?_t.length:0;let Ht=0;G.morphAttributes.position!==void 0&&(Ht=1),G.morphAttributes.normal!==void 0&&(Ht=2),G.morphAttributes.color!==void 0&&(Ht=3);let $t,ee,Kt,q;if(ht){const Qt=dn[ht];$t=Qt.vertexShader,ee=Qt.fragmentShader}else $t=S.vertexShader,ee=S.fragmentShader,l.update(S),Kt=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,wt=k.isBatchedMesh===!0,qt=!!S.map,ce=!!S.matcap,A=!!j,tt=!!S.aoMap,K=!!S.lightMap,$=!!S.bumpMap,Z=!!S.normalMap,lt=!!S.displacementMap,nt=!!S.emissiveMap,ct=!!S.metalnessMap,zt=!!S.roughnessMap,Bt=S.anisotropy>0,E=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,H=S.sheen>0,Q=S.transmission>0,W=Bt&&!!S.anisotropyMap,At=E&&!!S.clearcoatMap,ot=E&&!!S.clearcoatNormalMap,Et=E&&!!S.clearcoatRoughnessMap,bt=F&&!!S.iridescenceMap,it=F&&!!S.iridescenceThicknessMap,gt=H&&!!S.sheenColorMap,Ft=H&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,pt=!!S.specularColorMap,Gt=!!S.specularIntensityMap,D=Q&&!!S.transmissionMap,at=Q&&!!S.thicknessMap,ut=!!S.gradientMap,yt=!!S.alphaMap,st=S.alphaTest>0,J=!!S.alphaHash,Tt=!!S.extensions;let kt=On;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(kt=i.toneMapping);const he={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:ee,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:wt,batchingColor:wt&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Oi,alphaToCoverage:!!S.alphaToCoverage,map:qt,matcap:ce,envMap:A,envMapMode:A&&j.mapping,envMapCubeUVHeight:V,aoMap:tt,lightMap:K,bumpMap:$,normalMap:Z,displacementMap:d&&lt,emissiveMap:nt,normalMapObjectSpace:Z&&S.normalMapType===Mu,normalMapTangentSpace:Z&&S.normalMapType===So,metalnessMap:ct,roughnessMap:zt,anisotropy:Bt,anisotropyMap:W,clearcoat:E,clearcoatMap:At,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:x,iridescence:F,iridescenceMap:bt,iridescenceThicknessMap:it,sheen:H,sheenColorMap:gt,sheenRoughnessMap:Ft,specularMap:Rt,specularColorMap:pt,specularIntensityMap:Gt,transmission:Q,transmissionMap:D,thicknessMap:at,gradientMap:ut,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:yt,alphaTest:st,alphaHash:J,combine:S.combine,mapUv:qt&&_(S.map.channel),aoMapUv:tt&&_(S.aoMap.channel),lightMapUv:K&&_(S.lightMap.channel),bumpMapUv:$&&_(S.bumpMap.channel),normalMapUv:Z&&_(S.normalMap.channel),displacementMapUv:lt&&_(S.displacementMap.channel),emissiveMapUv:nt&&_(S.emissiveMap.channel),metalnessMapUv:ct&&_(S.metalnessMap.channel),roughnessMapUv:zt&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:pt&&_(S.specularColorMap.channel),specularIntensityMapUv:Gt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:yt&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Z||Bt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(qt||yt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:qt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ye,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Tt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let P;if(y){const O=dn[y];P=$u.clone(O.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let O=0,k=h.length;O<k;O++){const Y=h[O];if(Y.cacheKey===y){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new lg(i,y,S,r),h.push(P)),P}function R(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:I}}function fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ql(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||pg),n.length>1&&n.sort(d||jl),s.length>1&&s.sort(d||jl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function mg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ql,i.set(n,[a])):s>=r.length?(a=new Ql,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function _g(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xg=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mg(i){const t=new gg,e=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,w=0,v=0,T=0,R=0,C=0;c.sort(vg);for(let S=0,y=c.length;S<y;S++){const P=c[S],O=P.color,k=P.intensity,Y=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*k,u+=O.g*k,d+=O.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const j=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=G,v++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==v||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=v,I.numSpotMaps=T,I.numLightProbes=C,n.version=xg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(w.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function tc(i){const t=new Mg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new tc(i),t.set(s,[o])):r>=a.length?(o=new tc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(i,t,e){let n=new Ro;const s=new dt,r=new dt,a=new ae,o=new Vd({depthPacking:vu}),l=new Wd,c={},h=e.maxTextureSize,u={[Bn]:Ue,[Ue]:Bn,[Ye]:Ye},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Sg,fragmentShader:wg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let p=this.type;this.render=function(R,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==En&&this.type===En,Y=p===En&&this.type!==En;for(let G=0,X=R.length;G<X;G++){const j=R[G],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ht=V.getFrameExtents();if(s.multiply(ht),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||k===!0||Y===!0){const Mt=this.type!==En?{minFilter:qe,magFilter:qe}:{};V.map!==null&&V.map.dispose(),V.map=new zn(s.x,s.y,Mt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const _t=V.getViewportCount();for(let Mt=0;Mt<_t;Mt++){const Ht=V.getViewport(Mt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),O.viewport(a),V.updateMatrices(j,Mt),n=V.getFrustum(),v(C,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===En&&b(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function b(R,C){const I=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,I,f,_,null)}function w(R,C,I,S){let y=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=y.uuid,k=C.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let G=Y[k];G===void 0&&(G=y.clone(),Y[k]=G,C.addEventListener("dispose",T)),y=G}if(y.visible=C.visible,y.wireframe=C.wireframe,S===En?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=I}return y}function v(R,C,I,S,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===En)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Y=R.material;if(Array.isArray(Y)){const G=k.groups;for(let X=0,j=G.length;X<j;X++){const V=G[X],ht=Y[V.materialIndex];if(ht&&ht.visible){const _t=w(R,ht,S,y);R.onBeforeShadow(i,R,C,I,k,_t,V),i.renderBufferDirect(I,null,k,_t,R,V),R.onAfterShadow(i,R,C,I,k,_t,V)}}}else if(Y.visible){const G=w(R,Y,S,y);R.onBeforeShadow(i,R,C,I,k,G,null),i.renderBufferDirect(I,null,k,G,R,null),R.onAfterShadow(i,R,C,I,k,G,null)}}const O=R.children;for(let k=0,Y=O.length;k<Y;k++)v(O[k],C,I,S,y)}function T(R){R.target.removeEventListener("dispose",T);for(const I in c){const S=c[I],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const bg={[_a]:xa,[va]:Sa,[Ma]:wa,[Ui]:ya,[xa]:_a,[Sa]:va,[wa]:Ma,[ya]:Ui};function Tg(i,t){function e(){let D=!1;const at=new ae;let ut=null;const yt=new ae(0,0,0,0);return{setMask:function(st){ut!==st&&!D&&(i.colorMask(st,st,st,st),ut=st)},setLocked:function(st){D=st},setClear:function(st,J,Tt,kt,he){he===!0&&(st*=kt,J*=kt,Tt*=kt),at.set(st,J,Tt,kt),yt.equals(at)===!1&&(i.clearColor(st,J,Tt,kt),yt.copy(at))},reset:function(){D=!1,ut=null,yt.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,ut=null,yt=null,st=null;return{setReversed:function(J){if(at!==J){const Tt=t.get("EXT_clip_control");J?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),at=J;const kt=st;st=null,this.setClear(kt)}},getReversed:function(){return at},setTest:function(J){J?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(J){ut!==J&&!D&&(i.depthMask(J),ut=J)},setFunc:function(J){if(at&&(J=bg[J]),yt!==J){switch(J){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=J}},setLocked:function(J){D=J},setClear:function(J){st!==J&&(at&&(J=1-J),i.clearDepth(J),st=J)},reset:function(){D=!1,ut=null,yt=null,st=null,at=!1}}}function s(){let D=!1,at=null,ut=null,yt=null,st=null,J=null,Tt=null,kt=null,he=null;return{setTest:function(Qt){D||(Qt?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!D&&(i.stencilMask(Qt),at=Qt)},setFunc:function(Qt,xn,cn){(ut!==Qt||yt!==xn||st!==cn)&&(i.stencilFunc(Qt,xn,cn),ut=Qt,yt=xn,st=cn)},setOp:function(Qt,xn,cn){(J!==Qt||Tt!==xn||kt!==cn)&&(i.stencilOp(Qt,xn,cn),J=Qt,Tt=xn,kt=cn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){he!==Qt&&(i.clearStencil(Qt),he=Qt)},reset:function(){D=!1,at=null,ut=null,yt=null,st=null,J=null,Tt=null,kt=null,he=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,v=null,T=null,R=null,C=new Xt(0,0,0),I=0,S=!1,y=null,P=null,O=null,k=null,Y=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=j>=2);let ht=null,_t={};const Mt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),$t=new ae().fromArray(Mt),ee=new ae().fromArray(Ht);function Kt(D,at,ut,yt){const st=new Uint8Array(4),J=i.createTexture();i.bindTexture(D,J),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ut;Tt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(at+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return J}const q={};q[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ui),$(!1),Z(Xo),et(i.CULL_FACE),tt(Fn);function et(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function vt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Lt(D,at){return u[D]!==at?(i.bindFramebuffer(D,at),u[D]=at,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(D,at){let ut=f,yt=!1;if(D){ut=d.get(at),ut===void 0&&(ut=[],d.set(at,ut));const st=D.textures;if(ut.length!==st.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Tt=st.length;J<Tt;J++)ut[J]=i.COLOR_ATTACHMENT0+J;ut.length=st.length,yt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ut)}function qt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const ce={[jn]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};ce[Zh]=i.MIN,ce[$h]=i.MAX;const A={[Kh]:i.ZERO,[Jh]:i.ONE,[jh]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(D,at,ut,yt,st,J,Tt,kt,he,Qt){if(D===Fn){_===!0&&(vt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),D!==Xh){if(D!==m||Qt!==S){if((p!==jn||v!==jn)&&(i.blendEquation(i.FUNC_ADD),p=jn,v=jn),Qt)switch(D){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,w=null,T=null,R=null,C.set(0,0,0),I=0,m=D,S=Qt}return}st=st||at,J=J||ut,Tt=Tt||yt,(at!==p||st!==v)&&(i.blendEquationSeparate(ce[at],ce[st]),p=at,v=st),(ut!==b||yt!==w||J!==T||Tt!==R)&&(i.blendFuncSeparate(A[ut],A[yt],A[J],A[Tt]),b=ut,w=yt,T=J,R=Tt),(kt.equals(C)===!1||he!==I)&&(i.blendColor(kt.r,kt.g,kt.b,he),C.copy(kt),I=he),m=D,S=!1}function K(D,at){D.side===Ye?vt(i.CULL_FACE):et(i.CULL_FACE);let ut=D.side===Ue;at&&(ut=!ut),$(ut),D.blending===Li&&D.transparent===!1?tt(Fn):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const yt=D.stencilWrite;o.setTest(yt),yt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Z(D){D!==Vh?(et(i.CULL_FACE),D!==P&&(D===Xo?i.cullFace(i.BACK):D===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),P=D}function lt(D){D!==O&&(X&&i.lineWidth(D),O=D)}function nt(D,at,ut){D?(et(i.POLYGON_OFFSET_FILL),(k!==at||Y!==ut)&&(i.polygonOffset(at,ut),k=at,Y=ut)):vt(i.POLYGON_OFFSET_FILL)}function ct(D){D?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function zt(D){D===void 0&&(D=i.TEXTURE0+G-1),ht!==D&&(i.activeTexture(D),ht=D)}function Bt(D,at,ut){ut===void 0&&(ht===null?ut=i.TEXTURE0+G-1:ut=ht);let yt=_t[ut];yt===void 0&&(yt={type:void 0,texture:void 0},_t[ut]=yt),(yt.type!==D||yt.texture!==at)&&(ht!==ut&&(i.activeTexture(ut),ht=ut),i.bindTexture(D,at||q[D]),yt.type=D,yt.texture=at)}function E(){const D=_t[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(D){$t.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),$t.copy(D))}function Ft(D){ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Rt(D,at){let ut=c.get(at);ut===void 0&&(ut=new WeakMap,c.set(at,ut));let yt=ut.get(D);yt===void 0&&(yt=i.getUniformBlockIndex(at,D.name),ut.set(D,yt))}function pt(D,at){const yt=c.get(at).get(D);l.get(at)!==yt&&(i.uniformBlockBinding(at,yt,D.__bindingPointIndex),l.set(at,yt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,_t={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,v=null,T=null,R=null,C=new Xt(0,0,0),I=0,S=!1,y=null,P=null,O=null,k=null,Y=null,$t.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Lt,drawBuffers:wt,useProgram:qt,setBlending:tt,setMaterial:K,setFlipSided:$,setCullFace:Z,setLineWidth:lt,setPolygonOffset:nt,setScissorTest:ct,activeTexture:zt,bindTexture:Bt,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:bt,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:pt,texStorage2D:ot,texStorage3D:Et,texSubImage2D:H,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:At,scissor:gt,viewport:Ft,reset:Gt}}function Ag(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return f?new OffscreenCanvas(E,x):hr("canvas")}function _(E,x,F){let H=1;const Q=Bt(E);if((Q.width>F||Q.height>F)&&(H=F/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(H*Q.width),At=Math.floor(H*Q.height);u===void 0&&(u=g(W,At));const ot=x?g(W,At):u;return ot.width=W,ot.height=At,ot.getContext("2d").drawImage(E,0,0,W,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+At+")."),ot}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,x,F,H,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=x;if(x===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),x===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){const At=Q?lr:jt.getTransfer(H);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=At===re?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(E,x){let F;return E?x===null||x===ni||x===us?F=i.DEPTH24_STENCIL8:x===pn?F=i.DEPTH32F_STENCIL8:x===hs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===us?F=i.DEPTH_COMPONENT24:x===pn?F=i.DEPTH_COMPONENT32F:x===hs&&(F=i.DEPTH_COMPONENT16),F}function T(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qe&&E.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),I(x),x.isVideoTexture&&h.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),y(x)}function I(E){const x=n.get(E);if(x.__webglInit===void 0)return;const F=E.source,H=d.get(F);if(H){const Q=H[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(E),Object.keys(H).length===0&&d.delete(F)}n.remove(E)}function S(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const F=E.source,H=d.get(F);delete H[x.__cacheKey],a.memory.textures--}function y(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let Q=0;Q<x.__webglFramebuffer[H].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[H][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=E.textures;for(let H=0,Q=F.length;H<Q;H++){const W=n.get(F[H]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(E)}let P=0;function O(){P=0}function k(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function Y(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function G(E,x){const F=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function X(E,x){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function j(E,x){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function V(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){et(F,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const ht={[cs]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},_t={[qe]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Mt={[yu]:i.NEVER,[Au]:i.ALWAYS,[Su]:i.LESS,[Hc]:i.LEQUAL,[wu]:i.EQUAL,[Tu]:i.GEQUAL,[Eu]:i.GREATER,[bu]:i.NOTEQUAL};function Ht(E,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Mr||x.magFilter===Ts||x.magFilter===ei||x.minFilter===fn||x.minFilter===Mr||x.minFilter===Ts||x.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ht[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==Ts&&x.minFilter!==ei||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let Q=d.get(H);Q===void 0&&(Q={},d.set(H,Q));const W=Y(x);if(W!==E.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[W].usedTimes++;const At=Q[E.__cacheKey];At!==void 0&&(Q[E.__cacheKey].usedTimes--,At.usedTimes===0&&S(x)),E.__cacheKey=W,E.__webglTexture=Q[W].texture}return F}function ee(E,x,F){return Math.floor(Math.floor(E/F)/x)}function Kt(E,x,F,H){const W=E.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,H,x.data);else{W.sort((it,gt)=>it.start-gt.start);let At=0;for(let it=1;it<W.length;it++){const gt=W[At],Ft=W[it],Rt=gt.start+gt.count,pt=ee(Ft.start,x.width,4),Gt=ee(gt.start,x.width,4);Ft.start<=Rt+1&&pt===Gt&&ee(Ft.start+Ft.count-1,x.width,4)===pt?gt.count=Math.max(gt.count,Ft.start+Ft.count-gt.start):(++At,W[At]=Ft)}W.length=At+1;const ot=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let it=0,gt=W.length;it<gt;it++){const Ft=W[it],Rt=Math.floor(Ft.start/4),pt=Math.ceil(Ft.count/4),Gt=Rt%x.width,D=Math.floor(Rt/x.width),at=pt,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Gt,D,at,ut,F,H,x.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function q(E,x,F){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);const Q=$t(E,x),W=x.source;e.bindTexture(H,E.__webglTexture,i.TEXTURE0+F);const At=n.get(W);if(W.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);const ot=jt.getPrimaries(jt.workingColorSpace),Et=x.colorSpace===Nn?null:jt.getPrimaries(x.colorSpace),bt=x.colorSpace===Nn||ot===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let it=_(x.image,!1,s.maxTextureSize);it=zt(x,it);const gt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type);let Rt=w(x.internalFormat,gt,Ft,x.colorSpace,x.isVideoTexture);Ht(H,x);let pt;const Gt=x.mipmaps,D=x.isVideoTexture!==!0,at=At.__version===void 0||Q===!0,ut=W.dataReady,yt=T(x,it);if(x.isDepthTexture)Rt=v(x.format===fs,x.type),at&&(D?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,gt,Ft,null));else if(x.isDataTexture)if(Gt.length>0){D&&at&&e.texStorage2D(i.TEXTURE_2D,yt,Rt,Gt[0].width,Gt[0].height);for(let st=0,J=Gt.length;st<J;st++)pt=Gt[st],D?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,gt,Ft,pt.data):e.texImage2D(i.TEXTURE_2D,st,Rt,pt.width,pt.height,0,gt,Ft,pt.data);x.generateMipmaps=!1}else D?(at&&e.texStorage2D(i.TEXTURE_2D,yt,Rt,it.width,it.height),ut&&Kt(x,it,gt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,gt,Ft,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Rt,Gt[0].width,Gt[0].height,it.depth);for(let st=0,J=Gt.length;st<J;st++)if(pt=Gt[st],x.format!==an)if(gt!==null)if(D){if(ut)if(x.layerUpdates.size>0){const Tt=Ll(pt.width,pt.height,x.format,x.type);for(const kt of x.layerUpdates){const he=pt.data.subarray(kt*Tt/pt.data.BYTES_PER_ELEMENT,(kt+1)*Tt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,kt,pt.width,pt.height,1,gt,he)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,it.depth,gt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Rt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,it.depth,gt,Ft,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Rt,pt.width,pt.height,it.depth,0,gt,Ft,pt.data)}else{D&&at&&e.texStorage2D(i.TEXTURE_2D,yt,Rt,Gt[0].width,Gt[0].height);for(let st=0,J=Gt.length;st<J;st++)pt=Gt[st],x.format!==an?gt!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,gt,Ft,pt.data):e.texImage2D(i.TEXTURE_2D,st,Rt,pt.width,pt.height,0,gt,Ft,pt.data)}else if(x.isDataArrayTexture)if(D){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Rt,it.width,it.height,it.depth),ut)if(x.layerUpdates.size>0){const st=Ll(it.width,it.height,x.format,x.type);for(const J of x.layerUpdates){const Tt=it.data.subarray(J*st/it.data.BYTES_PER_ELEMENT,(J+1)*st/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,gt,Ft,Tt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,gt,Ft,it.data);else if(x.isData3DTexture)D?(at&&e.texStorage3D(i.TEXTURE_3D,yt,Rt,it.width,it.height,it.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,gt,Ft,it.data);else if(x.isFramebufferTexture){if(at)if(D)e.texStorage2D(i.TEXTURE_2D,yt,Rt,it.width,it.height);else{let st=it.width,J=it.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Rt,st,J,0,gt,Ft,null),st>>=1,J>>=1}}else if(Gt.length>0){if(D&&at){const st=Bt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Rt,st.width,st.height)}for(let st=0,J=Gt.length;st<J;st++)pt=Gt[st],D?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt,Ft,pt):e.texImage2D(i.TEXTURE_2D,st,Rt,gt,Ft,pt);x.generateMipmaps=!1}else if(D){if(at){const st=Bt(it);e.texStorage2D(i.TEXTURE_2D,yt,Rt,st.width,st.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,Ft,it);m(x)&&p(H),At.__version=W.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function et(E,x,F){if(x.image.length!==6)return;const H=$t(E,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const W=n.get(Q);if(Q.version!==W.__version||H===!0){e.activeTexture(i.TEXTURE0+F);const At=jt.getPrimaries(jt.workingColorSpace),ot=x.colorSpace===Nn?null:jt.getPrimaries(x.colorSpace),Et=x.colorSpace===Nn||At===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!bt&&!it?gt[J]=_(x.image[J],!0,s.maxCubemapSize):gt[J]=it?x.image[J].image:x.image[J],gt[J]=zt(x,gt[J]);const Ft=gt[0],Rt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Gt=w(x.internalFormat,Rt,pt,x.colorSpace),D=x.isVideoTexture!==!0,at=W.__version===void 0||H===!0,ut=Q.dataReady;let yt=T(x,Ft);Ht(i.TEXTURE_CUBE_MAP,x);let st;if(bt){D&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Gt,Ft.width,Ft.height);for(let J=0;J<6;J++){st=gt[J].mipmaps;for(let Tt=0;Tt<st.length;Tt++){const kt=st[Tt];x.format!==an?Rt!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,kt.width,kt.height,Rt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,Gt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,kt.width,kt.height,Rt,pt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,Gt,kt.width,kt.height,0,Rt,pt,kt.data)}}}else{if(st=x.mipmaps,D&&at){st.length>0&&yt++;const J=Bt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(it){D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Rt,pt,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,gt[J].width,gt[J].height,0,Rt,pt,gt[J].data);for(let Tt=0;Tt<st.length;Tt++){const he=st[Tt].image[J].image;D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,he.width,he.height,Rt,pt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,Gt,he.width,he.height,0,Rt,pt,he.data)}}else{D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,pt,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Rt,pt,gt[J]);for(let Tt=0;Tt<st.length;Tt++){const kt=st[Tt];D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,Rt,pt,kt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,Gt,Rt,pt,kt.image[J])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function vt(E,x,F,H,Q,W){const At=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),Et=w(F.internalFormat,At,ot,F.colorSpace),bt=n.get(x),it=n.get(F);if(it.__renderTarget=x,!bt.__hasExternalTextures){const gt=Math.max(1,x.width>>W),Ft=Math.max(1,x.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,Et,gt,Ft,x.depth,0,At,ot,null):e.texImage2D(Q,W,Et,gt,Ft,0,At,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Q,it.__webglTexture,0,lt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Q,it.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const H=x.depthTexture,Q=H&&H.isDepthTexture?H.type:null,W=v(x.stencilBuffer,Q),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=lt(x);nt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,E)}else{const H=x.textures;for(let Q=0;Q<H.length;Q++){const W=H[Q],At=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),Et=w(W.internalFormat,At,ot,W.colorSpace),bt=lt(x);F&&nt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Et,x.width,x.height):nt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,Et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const Q=H.__webglTexture,W=lt(x);if(x.depthTexture.format===ds)nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===fs)nt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function qt(E){const x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=H}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const H=E.texture.mipmaps;H&&H.length>0?wt(x.__webglFramebuffer[0],E):wt(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),Lt(x.__webglDepthbuffer[H],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Lt(x.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(E,x,F){const H=n.get(E);x!==void 0&&vt(H.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qt(E)}function A(E){const x=E.texture,F=n.get(E),H=n.get(x);E.addEventListener("dispose",C);const Q=E.textures,W=E.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Et=0;Et<x.mipmaps.length;Et++)F.__webglFramebuffer[ot][Et]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(At)for(let ot=0,Et=Q.length;ot<Et;ot++){const bt=n.get(Q[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&nt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const Et=Q[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const bt=r.convert(Et.format,Et.colorSpace),it=r.convert(Et.type),gt=w(Et.internalFormat,bt,it,Et.colorSpace,E.isXRRenderTarget===!0),Ft=lt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)vt(F.__webglFramebuffer[ot][Et],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else vt(F.__webglFramebuffer[ot],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ot=0,Et=Q.length;ot<Et;ot++){const bt=Q[ot],it=n.get(bt);let gt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(gt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,it.__webglTexture),Ht(gt,bt),vt(F.__webglFramebuffer,E,bt,i.COLOR_ATTACHMENT0+ot,gt,0),m(bt)&&p(gt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,H.__webglTexture),Ht(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)vt(F.__webglFramebuffer[Et],E,x,i.COLOR_ATTACHMENT0,ot,Et);else vt(F.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}E.depthBuffer&&qt(E)}function tt(E){const x=E.textures;for(let F=0,H=x.length;F<H;F++){const Q=x[F];if(m(Q)){const W=b(E),At=n.get(Q).__webglTexture;e.bindTexture(W,At),p(W),e.unbindTexture()}}}const K=[],$=[];function Z(E){if(E.samples>0){if(nt(E)===!1){const x=E.textures,F=E.width,H=E.height;let Q=i.COLOR_BUFFER_BIT;const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(E),ot=x.length>1;if(ot)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Et=E.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const it=n.get(x[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,Q,i.NEAREST),l===!0&&(K.length=0,$.length=0,K.push(i.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push(W),$.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const it=n.get(x[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(E){return Math.min(s.maxSamples,E.samples)}function nt(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function zt(E,x){const F=E.colorSpace,H=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Oi&&F!==Nn&&(jt.getTransfer(F)===re?(H!==an||Q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=A,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nt}function Rg(i,t){function e(n,s=Nn){let r;const a=jt.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return i.BYTE;if(n===Nc)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===zc)return i.RGB;if(n===an)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===Mo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===$a||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===ja||n===Qa||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Qc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends Hi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Lg,p={},b=e.getContextAttributes();let w=null,v=null;const T=[],R=[],C=new dt;let I=null;const S=new ze;S.viewport=new ae;const y=new ze;y.viewport=new ae;const P=[S,y],O=new Kd;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=T[q];return et===void 0&&(et=new Vr,T[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=T[q];return et===void 0&&(et=new Vr,T[q]=et),et.getGripSpace()},this.getHand=function(q){let et=T[q];return et===void 0&&(et=new Vr,T[q]=et),et.getHandSpace()};function G(q){const et=R.indexOf(q.inputSource);if(et===-1)return;const vt=T[et];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let q=0;q<T.length;q++){const et=R[q];et!==null&&(R[q]=null,T[q].disconnect(et))}k=null,Y=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(w),f=null,d=null,u=null,s=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Lt=null,wt=null;b.depth&&(wt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?fs:ds,Lt=b.stencil?us:ni);const qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new zn(d.textureWidth,d.textureHeight,{format:an,type:gn,depthTexture:new jc(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new zn(f.framebufferWidth,f.framebufferHeight,{format:an,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(q){for(let et=0;et<q.removed.length;et++){const vt=q.removed[et],Lt=R.indexOf(vt);Lt>=0&&(R[Lt]=null,T[Lt].disconnect(vt))}for(let et=0;et<q.added.length;et++){const vt=q.added[et];let Lt=R.indexOf(vt);if(Lt===-1){for(let qt=0;qt<T.length;qt++)if(qt>=R.length){R.push(vt),Lt=qt;break}else if(R[qt]===null){R[qt]=vt,Lt=qt;break}if(Lt===-1)break}const wt=T[Lt];wt&&wt.connect(vt)}}const V=new L,ht=new L;function _t(q,et,vt){V.setFromMatrixPosition(et.matrixWorld),ht.setFromMatrixPosition(vt.matrixWorld);const Lt=V.distanceTo(ht),wt=et.projectionMatrix.elements,qt=vt.projectionMatrix.elements,ce=wt[14]/(wt[10]-1),A=wt[14]/(wt[10]+1),tt=(wt[9]+1)/wt[5],K=(wt[9]-1)/wt[5],$=(wt[8]-1)/wt[0],Z=(qt[8]+1)/qt[0],lt=ce*$,nt=ce*Z,ct=Lt/(-$+Z),zt=ct*-$;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Bt=ce+ct,E=A+ct,x=lt-zt,F=nt+(Lt-zt),H=tt*A/E*Bt,Q=K*A/E*Bt;q.projectionMatrix.makePerspective(x,F,H,Q,Bt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,vt=q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),O.near=y.near=S.near=et,O.far=y.far=S.far=vt,(k!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,Y=O.far),O.layers.mask=q.layers.mask|6,S.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Lt=q.parent,wt=O.cameras;Mt(O,Lt);for(let qt=0;qt<wt.length;qt++)Mt(wt[qt],Lt);wt.length===2?_t(O,S,y):O.projectionMatrix.copy(S.projectionMatrix),Ht(q,O,Lt)};function Ht(q,et,vt){vt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=eo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let $t=null;function ee(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Lt=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let A=0;A<vt.length;A++){const tt=vt[A];let K=null;if(f!==null)K=f.getViewport(tt);else{const Z=u.getViewSubImage(d,tt);K=Z.viewport,A===0&&(t.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(v))}let $=P[A];$===void 0&&($=new ze,$.layers.enable(A),$.viewport=new ae,P[A]=$),$.matrix.fromArray(tt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(tt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),A===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push($)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const A=u.getDepthInformation(vt[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let A=0;A<vt.length;A++){const tt=vt[A].camera;if(tt){let K=p[tt];K||(K=new Qc,p[tt]=K);const $=u.getCameraImage(tt);K.sourceTexture=$}}}}for(let vt=0;vt<T.length;vt++){const Lt=R[vt],wt=T[vt];Lt!==null&&wt!==void 0&&wt.update(Lt,et,c||a)}$t&&$t(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Kt=new hh;Kt.setAnimationLoop(ee),this.setAnimationLoop=function(q){$t=q},this.dispose=function(){}}}const Kn=new ln,Ig=new oe;function Ug(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,Kn.copy(v),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Kn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const v=w.program;n.uniformBlockBinding(b,v)}function c(b,w){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(b,T);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const w=u();b.__bindingPointIndex=w;const v=i.createBuffer(),T=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=s[b.id],v=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,C=v.length;R<C;R++){const I=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,y=I.length;S<y;S++){const P=I[S];if(f(P,R,S,T)===!0){const O=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let G=0;G<k.length;G++){const X=k[G],j=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,v,T){const R=b.value,C=w+"_"+v;if(T[C]===void 0)return typeof R=="number"||typeof R=="boolean"?T[C]=R:T[C]=R.clone(),!0;{const I=T[C];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return T[C]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(b){const w=b.uniforms;let v=0;const T=16;for(let C=0,I=w.length;C<I;C++){const S=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,P=S.length;y<P;y++){const O=S[y],k=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,G=k.length;Y<G;Y++){const X=k[Y],j=_(X),V=v%T,ht=V%j.boundary,_t=V+ht;v+=ht,_t!==0&&T-_t<j.storage&&(v+=T-_t),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=j.storage}}}const R=v%T;return R>0&&(v+=T-R),b.__size=v,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const v=a.indexOf(w.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Fg{constructor(t={}){const{canvas:e=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Je;let R=0,C=0,I=null,S=-1,y=null;const P=new ae,O=new ae;let k=null;const Y=new Xt(0);let G=0,X=e.width,j=e.height,V=1,ht=null,_t=null;const Mt=new ae(0,0,X,j),Ht=new ae(0,0,X,j);let $t=!1;const ee=new Ro;let Kt=!1,q=!1;const et=new oe,vt=new L,Lt=new ae,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ce(){return I===null?V:1}let A=n;function tt(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",st,!1),A===null){const U="webgl2";if(A=tt(U,M),A===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,$,Z,lt,nt,ct,zt,Bt,E,x,F,H,Q,W,At,ot,Et,bt,it,gt,Ft,Rt,pt,Gt;function D(){K=new Ym(A),K.init(),Rt=new Rg(A,K),$=new zm(A,K,t,Rt),Z=new Tg(A,K),$.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),lt=new $m(A),nt=new fg,ct=new Ag(A,K,Z,nt,$,Rt,lt),zt=new Hm(v),Bt=new Xm(v),E=new tf(A),pt=new Om(A,E),x=new qm(A,E,lt,pt),F=new Jm(A,x,E,lt),it=new Km(A,$,ct),ot=new km(nt),H=new dg(v,zt,Bt,K,$,pt,ot),Q=new Ug(v,nt),W=new mg,At=new yg(K),bt=new Fm(v,zt,Bt,Z,F,f,l),Et=new Eg(v,F,$),Gt=new Ng(A,lt,$,Z),gt=new Bm(A,K,lt),Ft=new Zm(A,K,lt),lt.programs=H.programs,v.capabilities=$,v.extensions=K,v.properties=nt,v.renderLists=W,v.shadowMap=Et,v.state=Z,v.info=lt}D();const at=new Dg(v,A);this.xr=at,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(X,j,!1))},this.getSize=function(M){return M.set(X,j)},this.setSize=function(M,U,B=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,j=U,e.width=Math.floor(M*V),e.height=Math.floor(U*V),B===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*V,j*V).floor()},this.setDrawingBufferSize=function(M,U,B){X=M,j=U,V=B,e.width=Math.floor(M*B),e.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Mt)},this.setViewport=function(M,U,B,z){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,U,B,z),Z.viewport(P.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,U,B,z){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,U,B,z),Z.scissor(O.copy(Ht).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(M){Z.setScissorTest($t=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,B=!0){let z=0;if(M){let N=!1;if(I!==null){const rt=I.texture.format;N=rt===yo||rt===Mo||rt===vo}if(N){const rt=I.texture.type,mt=rt===gn||rt===ni||rt===hs||rt===us||rt===go||rt===_o,St=bt.getClearColor(),xt=bt.getClearAlpha(),Nt=St.r,Ot=St.g,Dt=St.b;mt?(g[0]=Nt,g[1]=Ot,g[2]=Dt,g[3]=xt,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Nt,_[1]=Ot,_[2]=Dt,_[3]=xt,A.clearBufferiv(A.COLOR,0,_))}else z|=A.COLOR_BUFFER_BIT}U&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),bt.dispose(),W.dispose(),At.dispose(),nt.dispose(),zt.dispose(),Bt.dispose(),F.dispose(),pt.dispose(),Gt.dispose(),H.dispose(),at.dispose(),at.removeEventListener("sessionstart",cn),at.removeEventListener("sessionend",zo),Vn.stop()};function ut(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=lt.autoReset,U=Et.enabled,B=Et.autoUpdate,z=Et.needsUpdate,N=Et.type;D(),lt.autoReset=M,Et.enabled=U,Et.autoUpdate=B,Et.needsUpdate=z,Et.type=N}function st(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){const U=M.target;U.removeEventListener("dispose",J),Tt(U)}function Tt(M){kt(M),nt.remove(M)}function kt(M){const U=nt.get(M).programs;U!==void 0&&(U.forEach(function(B){H.releaseProgram(B)}),M.isShaderMaterial&&H.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,z,N,rt){U===null&&(U=wt);const mt=N.isMesh&&N.matrixWorld.determinant()<0,St=Oh(M,U,B,z,N);Z.setMaterial(z,mt);let xt=B.index,Nt=1;if(z.wireframe===!0){if(xt=x.getWireframeAttribute(B),xt===void 0)return;Nt=2}const Ot=B.drawRange,Dt=B.attributes.position;let Zt=Ot.start*Nt,ne=(Ot.start+Ot.count)*Nt;rt!==null&&(Zt=Math.max(Zt,rt.start*Nt),ne=Math.min(ne,(rt.start+rt.count)*Nt)),xt!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,xt.count)):Dt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,Dt.count));const _e=ne-Zt;if(_e<0||_e===1/0)return;pt.setup(N,z,St,B,xt);let de,le=gt;if(xt!==null&&(de=E.get(xt),le=Ft,le.setIndex(de)),N.isMesh)z.wireframe===!0?(Z.setLineWidth(z.wireframeLinewidth*ce()),le.setMode(A.LINES)):le.setMode(A.TRIANGLES);else if(N.isLine){let Ut=z.linewidth;Ut===void 0&&(Ut=1),Z.setLineWidth(Ut*ce()),N.isLineSegments?le.setMode(A.LINES):N.isLineLoop?le.setMode(A.LINE_LOOP):le.setMode(A.LINE_STRIP)}else N.isPoints?le.setMode(A.POINTS):N.isSprite&&le.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,pe=N._multiDrawCounts,Jt=N._multiDrawCount,He=xt?E.get(xt).bytesPerElement:1,li=nt.get(z).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)li.setValue(A,"_gl_DrawID",Ge),le.render(Ut[Ge]/He,pe[Ge])}else if(N.isInstancedMesh)le.renderInstances(Zt,_e,N.count);else if(B.isInstancedBufferGeometry){const Ut=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pe=Math.min(B.instanceCount,Ut);le.renderInstances(Zt,_e,pe)}else le.render(Zt,_e)};function he(M,U,B){M.transparent===!0&&M.side===Ye&&M.forceSinglePass===!1?(M.side=Ue,M.needsUpdate=!0,bs(M,U,B),M.side=Bn,M.needsUpdate=!0,bs(M,U,B),M.side=Ye):bs(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),p=At.get(B),p.init(U),w.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const St=rt[mt];he(St,B,N),z.add(St)}else he(rt,B,N),z.add(rt)}),p=w.pop(),z},this.compileAsync=function(M,U,B=null){const z=this.compile(M,U,B);return new Promise(N=>{function rt(){if(z.forEach(function(mt){nt.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){N(M);return}setTimeout(rt,10)}K.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Qt=null;function xn(M){Qt&&Qt(M)}function cn(){Vn.stop()}function zo(){Vn.start()}const Vn=new hh;Vn.setAnimationLoop(xn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(M){Qt=M,at.setAnimationLoop(M),M===null?Vn.stop():Vn.start()},at.addEventListener("sessionstart",cn),at.addEventListener("sessionend",zo),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,I),p=At.get(M,w.length),p.init(U),w.push(p),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(et,mn,U.reversedDepth),q=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,q),m=W.get(M,b.length),m.init(),b.push(m),at.enabled===!0&&at.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&xr(rt,U,-1/0,v.sortObjects)}xr(M,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ht,_t),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&bt.addToRenderList(m,M),this.info.render.frame++,Kt===!0&&ot.beginShadows();const B=p.state.shadowsArray;Et.render(B,M,U),Kt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let mt=0,St=rt.length;mt<St;mt++){const xt=rt[mt];Ho(z,N,M,xt)}qt&&bt.render(M);for(let mt=0,St=rt.length;mt<St;mt++){const xt=rt[mt];ko(m,M,xt,xt.viewport)}}else N.length>0&&Ho(z,N,M,U),qt&&bt.render(M),ko(m,M,U);I!==null&&C===0&&(ct.updateMultisampleRenderTarget(I),ct.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,U),pt.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],Kt===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function xr(M,U,B,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){z&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);const mt=F.update(M),St=M.material;St.visible&&m.push(M,mt,St,B,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){const mt=F.update(M),St=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Lt.copy(mt.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(St)){const xt=mt.groups;for(let Nt=0,Ot=xt.length;Nt<Ot;Nt++){const Dt=xt[Nt],Zt=St[Dt.materialIndex];Zt&&Zt.visible&&m.push(M,mt,Zt,B,Lt.z,Dt)}}else St.visible&&m.push(M,mt,St,B,Lt.z,null)}}const rt=M.children;for(let mt=0,St=rt.length;mt<St;mt++)xr(rt[mt],U,B,z)}function ko(M,U,B,z){const N=M.opaque,rt=M.transmissive,mt=M.transparent;p.setupLightsView(B),Kt===!0&&ot.setGlobalState(v.clippingPlanes,B),z&&Z.viewport(P.copy(z)),N.length>0&&Es(N,U,B),rt.length>0&&Es(rt,U,B),mt.length>0&&Es(mt,U,B),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ho(M,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new zn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?ys:gn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[z.id],mt=z.viewport||P;rt.setSize(mt.z*v.transmissionResolutionScale,mt.w*v.transmissionResolutionScale);const St=v.getRenderTarget(),xt=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(rt),v.getClearColor(Y),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),qt&&bt.render(B);const Ot=v.toneMapping;v.toneMapping=On;const Dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Kt===!0&&ot.setGlobalState(v.clippingPlanes,z),Es(M,B,z),ct.updateMultisampleRenderTarget(rt),ct.updateRenderTargetMipmap(rt),K.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ne=0,_e=U.length;ne<_e;ne++){const de=U[ne],le=de.object,Ut=de.geometry,pe=de.material,Jt=de.group;if(pe.side===Ye&&le.layers.test(z.layers)){const He=pe.side;pe.side=Ue,pe.needsUpdate=!0,Go(le,B,z,Ut,pe,Jt),pe.side=He,pe.needsUpdate=!0,Zt=!0}}Zt===!0&&(ct.updateMultisampleRenderTarget(rt),ct.updateRenderTargetMipmap(rt))}v.setRenderTarget(St,xt,Nt),v.setClearColor(Y,G),Dt!==void 0&&(z.viewport=Dt),v.toneMapping=Ot}function Es(M,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=M.length;N<rt;N++){const mt=M[N],St=mt.object,xt=mt.geometry,Nt=mt.group;let Ot=mt.material;Ot.allowOverride===!0&&z!==null&&(Ot=z),St.layers.test(B.layers)&&Go(St,U,B,xt,Ot,Nt)}}function Go(M,U,B,z,N,rt){M.onBeforeRender(v,U,B,z,N,rt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,U,B,z,M,rt),N.transparent===!0&&N.side===Ye&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,rt),N.side=Bn,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,rt),N.side=Ye):v.renderBufferDirect(B,U,z,N,M,rt),M.onAfterRender(v,U,B,z,N,rt)}function bs(M,U,B){U.isScene!==!0&&(U=wt);const z=nt.get(M),N=p.state.lights,rt=p.state.shadowsArray,mt=N.state.version,St=H.getParameters(M,N.state,rt,U,B),xt=H.getProgramCacheKey(St);let Nt=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?Bt:zt).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",J),Nt=new Map,z.programs=Nt);let Ot=Nt.get(xt);if(Ot!==void 0){if(z.currentProgram===Ot&&z.lightsStateVersion===mt)return Wo(M,St),Ot}else St.uniforms=H.getUniforms(M),M.onBeforeCompile(St,v),Ot=H.acquireProgram(St,xt),Nt.set(xt,Ot),z.uniforms=St.uniforms;const Dt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=ot.uniform),Wo(M,St),z.needsLights=zh(M),z.lightsStateVersion=mt,z.needsLights&&(Dt.ambientLightColor.value=N.state.ambient,Dt.lightProbe.value=N.state.probe,Dt.directionalLights.value=N.state.directional,Dt.directionalLightShadows.value=N.state.directionalShadow,Dt.spotLights.value=N.state.spot,Dt.spotLightShadows.value=N.state.spotShadow,Dt.rectAreaLights.value=N.state.rectArea,Dt.ltc_1.value=N.state.rectAreaLTC1,Dt.ltc_2.value=N.state.rectAreaLTC2,Dt.pointLights.value=N.state.point,Dt.pointLightShadows.value=N.state.pointShadow,Dt.hemisphereLights.value=N.state.hemi,Dt.directionalShadowMap.value=N.state.directionalShadowMap,Dt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Dt.spotShadowMap.value=N.state.spotShadowMap,Dt.spotLightMatrix.value=N.state.spotLightMatrix,Dt.spotLightMap.value=N.state.spotLightMap,Dt.pointShadowMap.value=N.state.pointShadowMap,Dt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ot,z.uniformsList=null,Ot}function Vo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=or.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Wo(M,U){const B=nt.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Oh(M,U,B,z,N){U.isScene!==!0&&(U=wt),ct.resetTextureUnits();const rt=U.fog,mt=z.isMeshStandardMaterial?U.environment:null,St=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Oi,xt=(z.isMeshStandardMaterial?Bt:zt).get(z.envMap||mt),Nt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ot=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Dt=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let _e=On;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=v.toneMapping);const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=de!==void 0?de.length:0,Ut=nt.get(z),pe=p.state.lights;if(Kt===!0&&(q===!0||M!==y)){const Le=M===y&&z.id===S;ot.setState(z,M,Le)}let Jt=!1;z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==pe.state.version||Ut.outputColorSpace!==St||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==xt||z.fog===!0&&Ut.fog!==rt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ot.numPlanes||Ut.numIntersection!==ot.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==Dt||Ut.morphNormals!==Zt||Ut.morphColors!==ne||Ut.toneMapping!==_e||Ut.morphTargetsCount!==le)&&(Jt=!0):(Jt=!0,Ut.__version=z.version);let He=Ut.currentProgram;Jt===!0&&(He=bs(z,U,N));let li=!1,Ge=!1,Xi=!1;const me=He.getUniforms(),Ze=Ut.uniforms;if(Z.useProgram(He.program)&&(li=!0,Ge=!0,Xi=!0),z.id!==S&&(S=z.id,Ge=!0),li||y!==M){Z.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),me.setValue(A,"projectionMatrix",M.projectionMatrix),me.setValue(A,"viewMatrix",M.matrixWorldInverse);const Oe=me.map.cameraPosition;Oe!==void 0&&Oe.setValue(A,vt.setFromMatrixPosition(M.matrixWorld)),$.logarithmicDepthBuffer&&me.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&me.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ge=!0,Xi=!0)}if(N.isSkinnedMesh){me.setOptional(A,N,"bindMatrix"),me.setOptional(A,N,"bindMatrixInverse");const Le=N.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),me.setValue(A,"boneTexture",Le.boneTexture,ct))}N.isBatchedMesh&&(me.setOptional(A,N,"batchingTexture"),me.setValue(A,"batchingTexture",N._matricesTexture,ct),me.setOptional(A,N,"batchingIdTexture"),me.setValue(A,"batchingIdTexture",N._indirectTexture,ct),me.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(A,"batchingColorTexture",N._colorsTexture,ct));const $e=B.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&it.update(N,B,He),(Ge||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,me.setValue(A,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ze.envMap.value=xt,Ze.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ze.envMapIntensity.value=U.environmentIntensity),Ge&&(me.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Bh(Ze,Xi),rt&&z.fog===!0&&Q.refreshFogUniforms(Ze,rt),Q.refreshMaterialUniforms(Ze,z,V,j,p.state.transmissionRenderTarget[M.id]),or.upload(A,Vo(Ut),Ze,ct)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(or.upload(A,Vo(Ut),Ze,ct),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&me.setValue(A,"center",N.center),me.setValue(A,"modelViewMatrix",N.modelViewMatrix),me.setValue(A,"normalMatrix",N.normalMatrix),me.setValue(A,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Le=z.uniformsGroups;for(let Oe=0,vr=Le.length;Oe<vr;Oe++){const Wn=Le[Oe];Gt.update(Wn,He),Gt.bind(Wn,He)}}return He}function Bh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function zh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,B){const z=nt.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),nt.get(M.texture).__webglTexture=U,nt.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const B=nt.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const kh=A.createFramebuffer();this.setRenderTarget=function(M,U=0,B=0){I=M,R=U,C=B;let z=!0,N=null,rt=!1,mt=!1;if(M){const xt=nt.get(M);if(xt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)ct.setupRenderTarget(M);else if(xt.__hasExternalTextures)ct.rebindTextures(M,nt.get(M.texture).__webglTexture,nt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Dt=M.depthTexture;if(xt.__boundDepthTexture!==Dt){if(Dt!==null&&nt.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(M)}}const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);const Ot=nt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?N=Ot[U][B]:N=Ot[U],rt=!0):M.samples>0&&ct.useMultisampledRTT(M)===!1?N=nt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[B]:N=Ot,P.copy(M.viewport),O.copy(M.scissor),k=M.scissorTest}else P.copy(Mt).multiplyScalar(V).floor(),O.copy(Ht).multiplyScalar(V).floor(),k=$t;if(B!==0&&(N=kh),Z.bindFramebuffer(A.FRAMEBUFFER,N)&&z&&Z.drawBuffers(M,N),Z.viewport(P),Z.scissor(O),Z.setScissorTest(k),rt){const xt=nt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,B)}else if(mt){const xt=U;for(let Nt=0;Nt<M.textures.length;Nt++){const Ot=nt.get(M.textures[Nt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,B,xt)}}else if(M!==null&&B!==0){const xt=nt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(M,U,B,z,N,rt,mt,St=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){Z.bindFramebuffer(A.FRAMEBUFFER,xt);try{const Nt=M.textures[St],Ot=Nt.format,Dt=Nt.type;if(!$.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+St),A.readPixels(U,B,z,N,Rt.convert(Ot),Rt.convert(Dt),rt))}finally{const Nt=I!==null?nt.get(I).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,z,N,rt,mt,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt)if(U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N){Z.bindFramebuffer(A.FRAMEBUFFER,xt);const Nt=M.textures[St],Ot=Nt.format,Dt=Nt.type;if(!$.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Zt),A.bufferData(A.PIXEL_PACK_BUFFER,rt.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+St),A.readPixels(U,B,z,N,Rt.convert(Ot),Rt.convert(Dt),0);const ne=I!==null?nt.get(I).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,ne);const _e=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Pu(A,_e,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Zt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,rt),A.deleteBuffer(Zt),A.deleteSync(_e),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(M.image.width*z),rt=Math.floor(M.image.height*z),mt=U!==null?U.x:0,St=U!==null?U.y:0;ct.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,mt,St,N,rt),Z.unbindTexture()};const Hh=A.createFramebuffer(),Gh=A.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,z=null,N=0,rt=null){rt===null&&(N!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=N,N=0):rt=0);let mt,St,xt,Nt,Ot,Dt,Zt,ne,_e;const de=M.isCompressedTexture?M.mipmaps[rt]:M.image;if(B!==null)mt=B.max.x-B.min.x,St=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,Nt=B.min.x,Ot=B.min.y,Dt=B.isBox3?B.min.z:0;else{const $e=Math.pow(2,-N);mt=Math.floor(de.width*$e),St=Math.floor(de.height*$e),M.isDataArrayTexture?xt=de.depth:M.isData3DTexture?xt=Math.floor(de.depth*$e):xt=1,Nt=0,Ot=0,Dt=0}z!==null?(Zt=z.x,ne=z.y,_e=z.z):(Zt=0,ne=0,_e=0);const le=Rt.convert(U.format),Ut=Rt.convert(U.type);let pe;U.isData3DTexture?(ct.setTexture3D(U,0),pe=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ct.setTexture2DArray(U,0),pe=A.TEXTURE_2D_ARRAY):(ct.setTexture2D(U,0),pe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=A.getParameter(A.UNPACK_ROW_LENGTH),He=A.getParameter(A.UNPACK_IMAGE_HEIGHT),li=A.getParameter(A.UNPACK_SKIP_PIXELS),Ge=A.getParameter(A.UNPACK_SKIP_ROWS),Xi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,de.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,de.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt);const me=M.isDataArrayTexture||M.isData3DTexture,Ze=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const $e=nt.get(M),Le=nt.get(U),Oe=nt.get($e.__renderTarget),vr=nt.get(Le.__renderTarget);Z.bindFramebuffer(A.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Wn=0;Wn<xt;Wn++)me&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,nt.get(M).__webglTexture,N,Dt+Wn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,nt.get(U).__webglTexture,rt,_e+Wn)),A.blitFramebuffer(Nt,Ot,mt,St,Zt,ne,mt,St,A.DEPTH_BUFFER_BIT,A.NEAREST);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||nt.has(M)){const $e=nt.get(M),Le=nt.get(U);Z.bindFramebuffer(A.READ_FRAMEBUFFER,Hh),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gh);for(let Oe=0;Oe<xt;Oe++)me?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,$e.__webglTexture,N,Dt+Oe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,$e.__webglTexture,N),Ze?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Le.__webglTexture,rt,_e+Oe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Le.__webglTexture,rt),N!==0?A.blitFramebuffer(Nt,Ot,mt,St,Zt,ne,mt,St,A.COLOR_BUFFER_BIT,A.NEAREST):Ze?A.copyTexSubImage3D(pe,rt,Zt,ne,_e+Oe,Nt,Ot,mt,St):A.copyTexSubImage2D(pe,rt,Zt,ne,Nt,Ot,mt,St);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ze?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(pe,rt,Zt,ne,_e,mt,St,xt,le,Ut,de.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(pe,rt,Zt,ne,_e,mt,St,xt,le,de.data):A.texSubImage3D(pe,rt,Zt,ne,_e,mt,St,xt,le,Ut,de):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,rt,Zt,ne,mt,St,le,Ut,de.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,rt,Zt,ne,de.width,de.height,le,de.data):A.texSubImage2D(A.TEXTURE_2D,rt,Zt,ne,mt,St,le,Ut,de);A.pixelStorei(A.UNPACK_ROW_LENGTH,Jt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,He),A.pixelStorei(A.UNPACK_SKIP_PIXELS,li),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xi),rt===0&&U.generateMipmaps&&A.generateMipmap(pe),Z.unbindTexture()},this.initRenderTarget=function(M){nt.get(M).__webglFramebuffer===void 0&&ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ct.setTextureCube(M,0):M.isData3DTexture?ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ct.setTexture2DArray(M,0):ct.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){R=0,C=0,I=null,Z.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Og extends Ao{constructor(){super();const t=new te;t.deleteAttribute("uv");const e=new ue({side:Ue}),n=new ue,s=new ch(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new id(t,n,6),o=new Se;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Pt(t,Ei(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Pt(t,Ei(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Pt(t,Ei(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Pt(t,Ei(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Pt(t,Ei(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Pt(t,Ei(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ei(i){return new Gd({color:0,emissive:16777215,emissiveIntensity:i})}const ec=Math.PI*2;function Xe(i,t,e){return i<t?t:i>e?e:i}function si(i,t=0){const e=Math.cos(i.rot),n=Math.sin(i.rot),s=i.w/2+t,r=i.d/2+t,a=[];for(const[o,l]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const c=o*s,h=l*r;a.push({x:i.x+c*e+h*n,z:i.z-c*n+h*e})}return a}function mh(i,t){const e=Math.cos(i.rot),n=Math.sin(i.rot),s=t.x-i.x,r=t.z-i.z;return{x:s*e-r*n,z:s*n+r*e}}function nc(i){const t=Math.cos(i.rot),e=Math.sin(i.rot);return[{x:t,z:-e},{x:e,z:t}]}function ic(i,t){let e=1/0,n=-1/0;for(const s of i){const r=s.x*t.x+s.z*t.z;r<e&&(e=r),r>n&&(n=r)}return[e,n]}function No(i,t,e=0){const n=si(i,e),s=si(t);for(const r of[...nc(i),...nc(t)]){const[a,o]=ic(n,r),[l,c]=ic(s,r);if(o<=l||c<=a)return!1}return!0}function Bg(i,t,e=0){const n=mh(t,i);return Math.abs(n.x)<=t.w/2+e&&Math.abs(n.z)<=t.d/2+e}function sc(i,t,e=0){for(const n of si(i,-e))if(!Bg(n,t))return!1;return!0}function rc(i,t){const e=mh(t,i),n=Math.max(Math.abs(e.x)-t.w/2,0),s=Math.max(Math.abs(e.z)-t.d/2,0);return Math.hypot(n,s)}function zg(i,t){if(No(i,t))return 0;let e=1/0;for(const n of si(i))e=Math.min(e,rc(n,t));for(const n of si(t))e=Math.min(e,rc(n,i));return e}function xs(i){for(;i>Math.PI;)i-=ec;for(;i<-Math.PI;)i+=ec;return i}const ie=i=>i*Math.PI/180,xe={citycar:{id:"citycar",name:"City Car",length:3.57,width:1.63,height:1.49,wheelbase:2.3,rearOverhang:.62,trackWidth:1.41,wheelRadius:.29,wheelWidth:.18,mirrors:{z:1.4,out:.13,d:.1,h:.09,y:1.22},maxSteer:ie(38),steerRate:ie(160),accel:3.1,brakeAccel:6,rollDrag:2,maxSpeed:2.9,maxReverse:2.3,crawlSpeed:1,bodyColor:15910205,body:{sill:.24,arch:1.22,taper:[.6,.86],top:[[1,.46],[.9,.53],[.7,.58],[.53,.98],[.23,1],[.07,.8],[0,.72]],glass:[2,4],sides:[[.25,.52,.63,.95]],eye:[.44,.88],look:[.502,.895]}},hatch:{id:"hatch",name:"Hatchback",length:3.95,width:1.76,height:1.44,wheelbase:2.45,rearOverhang:.75,trackWidth:1.5,wheelRadius:.31,wheelWidth:.2,mirrors:{z:1.55,out:.14,d:.1,h:.09,y:1.18},maxSteer:ie(36),steerRate:ie(155),accel:3,brakeAccel:6,rollDrag:2,maxSpeed:2.9,maxReverse:2.3,crawlSpeed:1,bodyColor:14826526,body:{sill:.24,arch:1.22,taper:[.6,.86],top:[[1,.44],[.905,.5],[.72,.545],[.56,.965],[.235,1],[.075,.775],[0,.7]],glass:[2,4],sides:[[.26,.545,.62,.94]],eye:[.479,.876],look:[.535,.877]}},saloon:{id:"saloon",name:"Saloon",length:4.75,width:1.83,height:1.46,wheelbase:2.79,rearOverhang:1.06,trackWidth:1.57,wheelRadius:.33,wheelWidth:.22,mirrors:{z:1.78,out:.14,d:.1,h:.1,y:1.2},maxSteer:ie(34),steerRate:ie(150),accel:2.9,brakeAccel:5.9,rollDrag:2,maxSpeed:2.85,maxReverse:2.25,crawlSpeed:1,bodyColor:3108686,body:{sill:.235,arch:1.22,taper:[.6,.87],top:[[1,.44],[.9,.5],[.735,.545],[.575,.965],[.29,1],[.185,.72],[.03,.66],[0,.6]],glass:[2,4],sides:[[.315,.555,.62,.94]],eye:[.508,.875],look:[.554,.879]}},suv:{id:"suv",name:"SUV",length:4.72,width:1.95,height:1.72,wheelbase:2.82,rearOverhang:.95,trackWidth:1.66,wheelRadius:.37,wheelWidth:.25,mirrors:{z:1.99,out:.15,d:.1,h:.11,y:1.38},maxSteer:ie(33),steerRate:ie(145),accel:2.7,brakeAccel:5.6,rollDrag:1.95,maxSpeed:2.8,maxReverse:2.2,crawlSpeed:.95,bodyColor:2837114,body:{sill:.26,arch:1.2,taper:[.62,.88],top:[[1,.42],[.905,.5],[.74,.55],[.6,.955],[.225,1],[.075,.87],[0,.78]],glass:[2,4],sides:[[.25,.585,.6,.94]],eye:[.532,.855],look:[.579,.882]}},van:{id:"van",name:"Delivery Van",length:5.3,width:2.02,height:2.3,wheelbase:3.2,rearOverhang:.95,trackWidth:1.72,wheelRadius:.36,wheelWidth:.24,mirrors:{z:3.19,out:.14,d:.1,h:.11,y:1.66},maxSteer:ie(32),steerRate:ie(130),accel:2.6,brakeAccel:5.4,rollDrag:1.9,maxSpeed:2.7,maxReverse:2.1,crawlSpeed:.95,bodyColor:15761170,body:{sill:.183,arch:1.24,taper:[.55,.96],top:[[1,.34],[.945,.4],[.9,.44],[.822,.9],[.792,.99],[.02,1],[0,.94]],glass:[2],sides:[[.8,.9,.55,.86]],eye:[.598,.808],look:[.664,.935]}},pickup:{id:"pickup",name:"Pickup Truck",length:6.1,width:2.03,height:1.95,wheelbase:3.68,rearOverhang:1.35,trackWidth:1.72,wheelRadius:.4,wheelWidth:.27,mirrors:{z:2.22,out:.18,d:.1,h:.16,y:1.56},maxSteer:ie(30),steerRate:ie(130),accel:2.5,brakeAccel:5.2,rollDrag:1.9,maxSpeed:2.7,maxReverse:2.1,crawlSpeed:.9,bodyColor:9190190,body:{sill:.26,arch:1.2,taper:[.62,.9],top:[[1,.44],[.93,.56],[.68,.6],[.56,.965],[.42,1],[.418,.6],[0,.6]],glass:[2,4],sides:[[.44,.55,.62,.94]],eye:[.508,.87],look:[.544,.902]}},lorry:{id:"lorry",name:"Box Lorry",length:7.6,width:2.35,height:3.2,wheelbase:4.2,rearOverhang:2.35,trackWidth:2,wheelRadius:.46,wheelWidth:.28,mirrors:{z:3.3,out:.2,d:.1,h:.3,y:2.3},maxSteer:ie(40),steerRate:ie(110),accel:2.2,brakeAccel:4.8,rollDrag:1.8,maxSpeed:2.5,maxReverse:1.95,crawlSpeed:.85,bodyColor:11821866,body:{sill:.185,arch:1.22,taper:[.5,.98],dash:!0,top:[[1,.3],[.985,.42],[.958,.8],[.93,.855],[.8,.855],[.8,1],[.01,1],[0,.94]],glass:[1],sides:[[.81,.95,.46,.78]],eye:[.88,.56],look:[.926,.814]}},stepvan:{id:"stepvan",name:"Step Van",length:7.3,width:2.4,height:3,wheelbase:4.75,rearOverhang:1.2,trackWidth:2.02,wheelRadius:.42,wheelWidth:.26,mirrors:{z:3.75,out:.2,d:.1,h:.28,y:2.1},maxSteer:ie(44),steerRate:ie(115),accel:2.3,brakeAccel:4.9,rollDrag:1.8,maxSpeed:2.55,maxReverse:2,crawlSpeed:.85,bodyColor:7305862,body:{sill:.16,arch:1.22,taper:[.5,.98],dash:!0,top:[[1,.36],[.988,.52],[.96,.94],[.945,1],[.015,1],[0,.93]],glass:[1],sides:[[.86,.95,.5,.88]],eye:[.88,.56],look:[.928,.957]}},schoolbus:{id:"schoolbus",name:"School Bus",length:10.9,width:2.44,height:3.05,wheelbase:6.55,rearOverhang:2.85,trackWidth:2.06,wheelRadius:.52,wheelWidth:.3,mirrors:{z:6.05,out:.22,d:.1,h:.3,y:2.2},maxSteer:ie(42),steerRate:ie(100),accel:2.1,brakeAccel:4.5,rollDrag:1.8,maxSpeed:2.45,maxReverse:1.9,crawlSpeed:.85,bodyColor:15246105,body:{sill:.185,arch:1.24,taper:[.52,.97],top:[[1,.36],[.968,.44],[.853,.46],[.818,.93],[.8,1],[.015,1],[0,.9]],glass:[3],sides:[[.05,.79,.52,.86]],eye:[.771,.64],look:[.791,.957]}},bus:{id:"bus",name:"City Bus",length:11,width:2.5,height:3.15,wheelbase:5.6,rearOverhang:2.9,trackWidth:2.1,wheelRadius:.5,wheelWidth:.3,mirrors:{z:7.75,out:.19,d:.1,h:.28,y:2.457},maxSteer:ie(50),steerRate:ie(105),accel:2.2,brakeAccel:4.6,rollDrag:1.8,maxSpeed:2.5,maxReverse:1.9,crawlSpeed:.85,bodyColor:14163806,body:{sill:.175,arch:1.2,taper:[.5,.97],dash:!0,top:[[1,.3],[.988,.56],[.972,.96],[.958,1],[.03,1],[.012,.62],[0,.32]],glass:[1,4],sides:[[.04,.95,.5,.9]],eye:[.859,.61],look:[.891,.959]}},coach:{id:"coach",name:"Tour Coach",length:12,width:2.55,height:3.35,wheelbase:6.1,rearOverhang:3.9,trackWidth:2.15,wheelRadius:.52,wheelWidth:.3,mirrors:{z:7.64,out:.19,d:.1,h:.28,y:2.613},maxSteer:ie(52),steerRate:ie(100),accel:2,brakeAccel:4.4,rollDrag:1.8,maxSpeed:2.4,maxReverse:1.8,crawlSpeed:.85,bodyColor:8015830,body:{sill:.185,arch:1.26,taper:[.52,.97],dash:!0,top:[[1,.34],[.986,.6],[.962,.95],[.944,1],[.04,1],[.018,.66],[0,.36]],glass:[1,4],sides:[[.05,.94,.58,.92]],eye:[.871,.579],look:[.9,.961]}},towcar:{id:"towcar",name:"Car + Trailer",length:4.6,width:1.86,height:1.62,wheelbase:2.75,rearOverhang:.95,trackWidth:1.6,wheelRadius:.33,wheelWidth:.22,mirrors:{z:2.02,out:.14,d:.1,h:.09,y:1.27},maxSteer:ie(34),steerRate:ie(140),accel:2.5,brakeAccel:5.2,rollDrag:1.9,maxSpeed:2.6,maxReverse:2,crawlSpeed:.9,bodyColor:1933280,body:{sill:.222,arch:1.2,taper:[.62,.88],top:[[1,.44],[.88,.48],[.775,.51],[.62,.94],[.15,1],[.055,.82],[0,.44]],glass:[2,4],sides:[[.18,.61,.58,.92]],eye:[.55,.852],look:[.598,.863]},trailer:{name:"box trailer",hitch:-1.1,axleFromHitch:2.9,axleToFront:1.9,axleToRear:1.15,width:1.9,height:1.75,trackWidth:1.62,wheelRadius:.29,wheelWidth:.2,maxAngle:ie(78),drawbar:!0}},semi:{id:"semi",name:"Semi Truck",length:6.3,width:2.5,height:3.4,wheelbase:3.9,rearOverhang:1,trackWidth:2.15,wheelRadius:.52,wheelWidth:.32,mirrors:{z:5.15,out:.21,d:.1,h:.5,y:2.931},maxSteer:ie(40),steerRate:ie(100),accel:2,brakeAccel:4.2,rollDrag:1.7,maxSpeed:2.3,maxReverse:1.7,crawlSpeed:.8,bodyColor:2074784,body:{sill:.288,arch:1.1,taper:[.6,.98],dash:!0,top:[[1,.42],[1,.93],[.982,1],[.603,1],[.603,.4],[0,.4]],glass:[0],sides:[[.66,.96,.62,.92]],eye:[.825,.681],look:[.881,.962]},trailer:{name:"semitrailer",hitch:.45,axleFromHitch:7.6,axleToFront:8.8,axleToRear:4.2,width:2.55,height:4,trackWidth:2.1,wheelRadius:.5,wheelWidth:.3,maxAngle:ie(72),drawbar:!1}}};function gh(i){const t=i.length-i.wheelbase-i.rearOverhang;return(i.wheelbase+t-i.rearOverhang)/2}function _h(i){return(i.axleToFront-i.axleToRear)/2}function xh(i){return i.axleToFront+i.axleToRear}function kg(i){const t=i.wheelbase+(i.length-i.wheelbase-i.rearOverhang);if(!i.trailer)return i.length;const e=i.trailer;return t+(-e.hitch+e.axleFromHitch+e.axleToRear)}function on(i,t){const e=gh(i);return{x:t.x+Math.sin(t.yaw)*e,z:t.z+Math.cos(t.yaw)*e,w:i.width,d:i.length,rot:t.yaw}}function Hg(i,t){const e=i.trailer;return{x:t.x+Math.sin(t.yaw)*e.hitch,z:t.z+Math.cos(t.yaw)*e.hitch}}function Wi(i,t){const e=i.trailer,n=Hg(i,t);return{x:n.x-Math.sin(t.trailerYaw)*e.axleFromHitch,z:n.z-Math.cos(t.trailerYaw)*e.axleFromHitch}}function ws(i,t){const e=i.trailer,n=Wi(i,t),s=_h(e);return{x:n.x+Math.sin(t.trailerYaw)*s,z:n.z+Math.cos(t.trailerYaw)*s,w:e.width,d:xh(e),rot:t.trailerYaw}}function vs(i){return{rear:i.id==="semi"?[0,-1.35]:[0],front:[i.wheelbase]}}function vh(i){return i.drawbar?[0]:[.7,-.7]}function ac(i,t){const e=[],n=Math.cos(t.yaw),s=Math.sin(t.yaw),r=vs(i);for(const a of[...r.rear,...r.front])for(const o of[-1,1]){const l=o*i.trackWidth/2;e.push({x:t.x+l*n+a*s,z:t.z-l*s+a*n,w:i.wheelWidth,rot:t.yaw})}if(i.trailer){const a=i.trailer,o=Wi(i,t),l=Math.cos(t.trailerYaw),c=Math.sin(t.trailerYaw);for(const h of vh(a))for(const u of[-1,1]){const d=u*a.trackWidth/2;e.push({x:o.x+d*l+h*c,z:o.z-d*c+h*l,w:a.wheelWidth,rot:t.trailerYaw})}}return e}function Mh(i,t){const e=i.mirrors;return{x:t.x+Math.sin(t.yaw)*e.z,z:t.z+Math.cos(t.yaw)*e.z,w:i.width+2*e.out,d:e.d,rot:t.yaw}}function yh(i,t){return i.trailer?ws(i,t):on(i,t)}function Gg(i,t){const e=[on(i,t),Mh(i,t)];return i.trailer&&e.push(ws(i,t)),e}function os(i,t,e,n){const s=t.speed,r=s*Math.tan(n)/i.wheelbase,a=t.yaw+r*e/2,o={x:t.x+s*Math.sin(a)*e,z:t.z+s*Math.cos(a)*e,yaw:t.yaw+r*e,trailerYaw:t.trailerYaw,speed:s};if(i.trailer){const l=i.trailer,c=-l.hitch,h=(d,f)=>{const g=d-f;return(s*Math.sin(g)-c*r*Math.cos(g))/l.axleFromHitch},u=h(t.yaw,t.trailerYaw)*(e/2);o.trailerYaw=t.trailerYaw+h(a,t.trailerYaw+u)*e,Math.abs(xs(o.yaw-o.trailerYaw))>l.maxAngle&&(o.jackknifed=!0)}return o}const Vg={steerSpeed:1,topSpeed:1,acceleration:1,slowdown:1};class Wg{constructor(t){this.spec=t,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.yaw=n,this.trailerYaw=n,this.speed=0,this.steer=0,this.wheelSpin=0,this.braking=!1}get state(){return{x:this.x,z:this.z,yaw:this.yaw,trailerYaw:this.trailerYaw,speed:this.speed}}set state(t){this.x=t.x,this.z=t.z,this.yaw=t.yaw,this.trailerYaw=t.trailerYaw}body(t=this){return on(this.spec,t)}trailerAxleWorld(t=this){return Wi(this.spec,t)}rects(t=this){return Gg(this.spec,t)}integrate(t,e){return os(this.spec,t,e,this.steer)}get articulation(){return this.spec.trailer?xs(this.yaw-this.trailerYaw):0}control(t,e){const n=this.spec,s=e.gains??Vg,r=Xe(e.steer,-1,1);if(e.steerMode==="rate")this.steer=Xe(this.steer+r*n.steerRate*s.steerSpeed*t,-n.maxSteer,n.maxSteer);else{const u=r*n.maxSteer,d=n.steerRate*(Math.abs(r)<.02?1.7:1)*t;this.steer+=Xe(u-this.steer,-d,d)}const a=Xe(e.throttle,-1,1),o=e.crawl?n.crawlSpeed:n.maxSpeed*s.topSpeed,l=e.crawl?n.crawlSpeed:n.maxReverse*s.topSpeed,c=n.accel*s.acceleration;let h;if(this.braking=!1,e.brake)this.braking=!0,h=-Math.sign(this.speed)*n.brakeAccel,Math.abs(this.speed)<=n.brakeAccel*t&&(this.speed=0,h=0);else if(e.throttleMode==="speed"){const u=a*(a>=0?o:l),d=Math.abs(u)<Math.abs(this.speed)||u*this.speed<0,f=(d?n.brakeAccel*s.slowdown:c)*t,g=Xe(u-this.speed,-f,f);this.braking=d&&Math.abs(g)>0,this.speed+=g,h=0}else if(Math.abs(a)>.02){const u=Math.sign(a);if(this.speed*u<-.05)this.braking=!0,h=u*n.brakeAccel;else{const d=(u>0?o:l)*Math.abs(a),f=1-Math.min(1,Math.abs(this.speed)/Math.max(d,.15));h=u*c*Math.max(f,.08),Math.abs(this.speed)>d&&(h=-Math.sign(this.speed)*n.brakeAccel*.5)}}else{const u=n.rollDrag*s.slowdown;h=-Math.sign(this.speed)*u,Math.abs(this.speed)<=u*t&&(this.speed=0,h=0)}this.speed=Xe(this.speed+h*t,-l,o),this.wheelSpin+=this.speed/n.wheelRadius*t}}const Ct=(i,t,e,n,s={})=>({type:"wall",x:i,z:t,w:e,d:n,rot:s.rot??0,h:s.h??2.6,color:s.color}),oc=(i,t,e,n,s=0)=>({type:"kerb",x:i,z:t,w:e,d:n,rot:s,h:.15}),ia=(i,t,e=.7,n=3.2)=>({type:"pillar",x:i,z:t,w:e,d:e,rot:0,h:n}),De=(i,t)=>({type:"cone",x:i,z:t,w:.42,d:.42,rot:0,h:.7}),Ce=(i,t,e=0,n="hatch",s)=>({type:"parked",x:i,z:t,rot:e,spec:n,color:s}),Xg=(i,t,e=0,n)=>({type:"dropped",x:i,z:t,rot:e,w:2.55,d:13,h:4,color:n}),ls=(i,t,e,n,s=0)=>({type:"line",x:i,z:t,w:e,d:n,rot:s}),Yg=new Set(["wall","kerb","pillar","cone","parked","dropped","line"]),lc=[13623535,15392720,14478040,15916769,14933485,14150120,15722707,15131355];function ki(i,t,e){const n=Math.cos(i.rot??0),s=Math.sin(i.rot??0);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function qg(i,t,e,n){const s=gh(xe[i]);return Ce(t-Math.sin(n)*s,e-Math.cos(n)*s,n,i)}function Sh(i){const{w:t=2.5,d:e=5,rot:n=0,slot:s=null,out:r=0}=i,a=.12,o=(h,u)=>ki(i,h,u),l=(h,u,d)=>ls(h.x,h.z,u,d,n),c=[l(o(-t/2,0),a,e),l(o(t/2,0),a,e),l(o(0,-e/2+a),t,a)];if(s){const h=o(0,r);c.push(qg(s,h.x,h.z,n))}return c}function Zg(i){const{w:t=2.5,d:e=5,rot:n=0,slots:s}=i,r=-((s.length-1)/2)*t;return s.flatMap((a,o)=>Sh({...ki(i,r+o*t,0),rot:n,w:t,d:e,slot:a,out:i.out}))}function $g(i){const{w:t,d:e,t:n=1.2,rot:s=0,h:r=3.2,color:a=13685462,open:o=[]}=i,l=(h,u,d,f)=>{const g=ki(i,h,u);return Ct(g.x,g.z,d,f,{rot:s,h:r,color:a})},c=[];return o.includes("left")||c.push(l(t/2+n/2,0,n,e+2*n)),o.includes("right")||c.push(l(-(t/2+n/2),0,n,e+2*n)),o.includes("front")||c.push(l(0,e/2+n/2,t+2*n,n)),o.includes("back")||c.push(l(0,-(e/2+n/2),t+2*n,n)),c}function Kg(i){const{width:t,length:e,rot:n=0,left:s=4,right:r=4,h:a=5,color:o=14274498}=i,l=.4,c=_=>ki(i,_,0),h=c(t/2+l/2),u=c(-(t/2+l/2)),d=c(t/2+l+s/2),f=c(-(t/2+l+r/2)),g=c(0);return[oc(h.x,h.z,l,e,n),oc(u.x,u.z,l,e,n),Ct(d.x,d.z,s,e,{rot:n,h:a,color:o}),Ct(f.x,f.z,r,e,{rot:n,h:a,color:o}),ls(g.x,g.z,.14,e,n)]}function Jg(i){const{w:t=4.7,d:e=13.3,t:n=.5,rot:s=0,slots:r,h:a=4.5,color:o=14146013}=i,l=-((r.length-1)/2)*t,c=[];for(let h=0;h<=r.length;h++){const u=ki(i,l+(h-.5)*t,0);c.push(Ct(u.x,u.z,n,e,{rot:s,h:a,color:o}))}return r.forEach((h,u)=>{if(!h)return;const d=ki(i,l+u*t,0);c.push(Xg(d.x,d.z,s))}),c}const Te=(i,t,e={})=>({type:"bay",x:i,z:t,...e}),en=(i,t,e,n={})=>({type:"bays",x:i,z:t,slots:e,...n}),cc=(i,t,e,n,s={})=>({type:"room",x:i,z:t,w:e,d:n,...s}),hc=(i,t,e,n,s={})=>({type:"street",x:i,z:t,width:e,length:n,...s}),uc=(i,t,e,n={})=>({type:"docks",x:i,z:t,slots:e,...n}),jg={bay:Sh,bays:Zg,room:$g,street:Kg,docks:Jg};function wh(i){const t=i.flatMap(s=>Yg.has(s.type)?[s]:jg[s.type](s));let e=0;const n=t.map(s=>(s.type==="parked"||s.type==="dropped")&&s.color==null?{...s,color:lc[e++%lc.length]}:s);return{obstacles:n.filter(s=>s.type!=="line"),paint:n.filter(s=>s.type==="line")}}const se=(i,t,e=.1)=>({id:i,label:t,kind:"number",step:e}),In={id:"rot",label:"rotation",kind:"angle"},hn=[se("x","x"),se("z","z")],Ri={wall:{name:"Wall",args:["x","z","w","d"],opts:!0,def:{w:4,d:.5,rot:0,h:2.6},fields:[...hn,se("w","width"),se("d","depth"),In,se("h","height")]},pillar:{name:"Pillar",args:["x","z","w","h"],def:{w:.7,h:3.2},fields:[...hn,se("w","side"),se("h","height")]},cone:{name:"Cone",args:["x","z"],def:{},fields:hn},line:{name:"Paint",fn:"line",args:["x","z","w","d","rot"],def:{w:.14,d:4,rot:0},fields:[...hn,se("w","width"),se("d","depth"),In]},parked:{name:"Parked vehicle",fn:"car",args:["x","z","rot","spec"],def:{rot:0,spec:"hatch"},fields:[...hn,In,{id:"spec",label:"vehicle",kind:"vehicle"}]},bay:{name:"Bay",args:["x","z"],opts:!0,def:{w:2.5,d:5,rot:0,slot:null,out:0},fields:[...hn,se("w","width"),se("d","depth"),In,{id:"slot",label:"parked in it",kind:"vehicle",empty:!0},se("out","sticks out")]},bays:{name:"Bay row",args:["x","z","slots"],opts:!0,def:{slots:["hatch",null,"hatch"],w:2.5,d:5,rot:0,out:0},fields:[...hn,se("w","bay width"),se("d","bay depth"),In,se("out","sticks out"),{id:"slots",label:"bays",kind:"slots"}]},room:{name:"Room",args:["x","z","w","d"],opts:!0,def:{w:10,d:12,rot:0,t:1.2,h:3.2,open:["front"]},fields:[...hn,se("w","clear width"),se("d","clear depth"),In,se("t","wall thickness"),se("h","height"),{id:"open",label:"open sides",kind:"sides"}]},street:{name:"Street",args:["x","z","width","length"],opts:!0,def:{width:7,length:30,rot:0,left:4,right:4,h:5},fields:[...hn,se("width","road width"),se("length","length"),In,se("left","left building"),se("right","right building"),se("h","height")]},docks:{name:"Loading docks",args:["x","z","slots"],opts:!0,def:{slots:["trailer",null],w:4.7,d:13.3,rot:0,t:.5,h:4.5},fields:[...hn,se("w","slot pitch"),se("d","depth"),In,se("t","divider"),se("h","height"),{id:"slots",label:"docks",kind:"slots",of:"trailer"}]}},Qg=i=>wh([i]),fe=Math.PI/2,sn=[{id:"first-bay",name:"First Bay",vehicle:"hatch",theme:"lot",bounds:{minX:-14,maxX:10,minZ:-15.5,maxZ:-3},start:{x:5.5,z:-9.05,yaw:-fe},target:{x:0,z:-13,w:2.5,d:5,rot:0},objects:[en(-2.5,-13,["hatch",null,"hatch",null,"hatch",null,"hatch","hatch",null],{w:2.5,d:5}),en(-2.5,-5.625,["hatch",null,"hatch",null,"hatch",null,"hatch",null,"hatch"],{w:2.5,d:5,rot:Math.PI})]},{id:"short-side",name:"The Short Side",vehicle:"hatch",theme:"garage",bounds:{minX:-1.6,maxX:15.7,minZ:-14.5,maxZ:1.1},start:{x:13,z:-6.3,yaw:-fe},target:{x:0,z:-11,w:2.4,d:5,rot:0},objects:[cc(7.075,-6.775,17.05,13.75),en(7.2,-11,[null,"hatch","hatch","van","hatch","hatch","hatch"],{w:2.4,d:5}),en(7.2,-2.6,["hatch","hatch","hatch",null,"hatch","hatch","hatch"],{w:2.4,d:5,rot:Math.PI})]},{id:"parallel",name:"Kerbside",vehicle:"hatch",theme:"street",bounds:{minX:-9,maxX:9,minZ:-13,maxZ:13},start:{x:-.4,z:-8.5,yaw:0},target:{x:2.85,z:-1.23,w:2.2,d:5.4,rot:0},objects:[hc(.25,0,7.5,24),Ce(2.9,-7.275,0,"hatch"),Ce(2.9,2.375,0,"hatch"),Ce(2.9,6.9,0,"van")]},{id:"herringbone",name:"Herringbone",vehicle:"citycar",theme:"lot",bounds:{minX:-14,maxX:9,minZ:-7,maxZ:5},start:{x:-1.5,z:.9,yaw:fe},target:{x:0,z:-2.6,w:2.2,d:4.6,rot:Math.PI/4},objects:[Te(-9.333,-2.6,{w:2.2,d:4.6,rot:Math.PI/4,slot:"citycar"}),Te(-6.222,-2.6,{w:2.2,d:4.6,rot:Math.PI/4}),Te(-3.111,-2.6,{w:2.2,d:4.6,rot:Math.PI/4,slot:"citycar"}),Te(0,-2.6,{w:2.2,d:4.6,rot:Math.PI/4}),Te(3.111,-2.6,{w:2.2,d:4.6,rot:Math.PI/4,slot:"citycar"}),Ct(-2.5,3.55,23,1.6,{h:3,color:14076347}),Ct(-2.5,-6.2,23,1.6,{h:3,color:14076347}),Ct(7.5,-1.3,1.6,8.2,{h:3,color:14076347})]},{id:"alcove",name:"The Alcove",vehicle:"hatch",theme:"garage",bounds:{minX:-5.1,maxX:5.1,minZ:-14.2,maxZ:-2.9},start:{x:3.2,z:-5.9,yaw:-fe},target:{x:0,z:-11,w:2.6,d:5,rot:0},objects:[cc(0,-8.475,9.2,10.35),en(0,-11,["hatch",null,"hatch"],{w:2.6,d:5})]},{id:"elbow",name:"The Elbow",vehicle:"saloon",theme:"garage",bounds:{minX:-9,maxX:12,minZ:-8,maxZ:13},start:{x:-.2,z:6.5,yaw:Math.PI},target:{x:-4.7,z:3,w:2.9,d:5.4,rot:fe},objects:[Ct(-2.8,8.75,1.6,8.1,{h:3.2,color:14076347}),Ct(-2.8,-2.75,1.6,8.1,{h:3.2,color:14076347}),Ct(-5.1,5.5,6.2,1.6,{h:3.2,color:14076347}),Ct(-5.1,.5,6.2,1.6,{h:3.2,color:14076347}),Ct(-8.2,3,1.6,6.6,{h:3.2,color:14076347}),Ct(6.7,5.3,10.2,15.4,{h:3.2,color:14076347}),Ct(4.5,-6.8,14.6,1.6,{h:3.2,color:14076347}),Ct(10.8,-4.6,1.6,5.2,{h:3.2,color:14076347}),Te(-4.7,3,{w:2.9,d:5.4,rot:fe})]},{id:"impossible-gap",name:"The Impossible Gap",vehicle:"hatch",theme:"alley",bounds:{minX:-16,maxX:11.5,minZ:-9.5,maxZ:11},start:{x:-9,z:0,yaw:fe},target:{x:8.1,z:-5.5,w:2.5,d:4.6,rot:0},objects:[Ct(2,-5.325,.5,8.35,{h:3.6,color:14076347}),Ct(2,6.075,.5,9.85,{h:3.6,color:14076347}),Ct(6.4,-5.45,.4,8.1,{h:3,color:14800841}),Ct(9.8,-5.45,.4,8.1,{h:3,color:14800841}),Te(8.1,-5.5,{w:2.5,d:4.6}),Ce(3.9,1.975,0,"hatch"),Ce(9.4,1.975,0,"hatch"),Ce(-3.225,-2.8,fe,"hatch"),Ce(-3.7,2.8,fe,"van"),De(-6,-2.4),De(-6,2.4)]},{id:"pinch",name:"The Pinch",vehicle:"suv",theme:"lot",bounds:{minX:-15,maxX:10,minZ:-11,maxZ:9},start:{x:-5,z:5.1,yaw:fe},target:{x:0,z:-4.6,w:3,d:5.6,rot:0},objects:[Ct(-3,8.1,23.8,1.8,{h:3.2,color:14076347}),Ct(-8.175,2.1,13.45,1.8,{h:3.2,color:14076347}),Ct(5.175,2.1,7.45,1.8,{h:3.2,color:14076347}),Ct(8.9,5.1,1.8,6,{h:3.2,color:14076347}),Ct(-5.4,-2.5,1.8,12,{h:3.2,color:14076347}),Ct(5.4,-2.5,1.8,12,{h:3.2,color:14076347}),Ct(0,-8.9,12.6,1.8,{h:3.2,color:14076347}),Te(0,-4.6,{w:3,d:5.6}),De(-3.6,.6),De(3.6,.6)]},{id:"dead-end",name:"Dead End",vehicle:"hatch",theme:"alley",bounds:{minX:-4.5,maxX:8,minZ:-13,maxZ:8},start:{x:0,z:4,yaw:Math.PI},target:{x:4.2,z:-3,w:2.6,d:5,rot:fe},objects:[Ct(-2.35,-2.5,1.3,21,{h:4.2,color:14076347}),Ct(2.35,-8.75,1.3,8.5,{h:4.2,color:14076347}),Ct(2.35,3.25,1.3,9.5,{h:4.2,color:14076347}),Ct(4.35,-4.65,5.3,.3,{h:3.4,color:14800841}),Ct(4.35,-1.35,5.3,.3,{h:3.4,color:14800841}),Ct(6.95,-3,.3,3.3,{h:3.4,color:14800841}),Te(4.2,-3,{w:2.6,d:5,rot:fe}),De(-1.2,-10),De(1.2,-11.5)]},{id:"van-life",name:"Van Life",vehicle:"van",theme:"lot",bounds:{minX:-16,maxX:19,minZ:-16,maxZ:4},start:{x:11,z:-6.7,yaw:-fe},target:{x:0,z:-12.5,w:3,d:6,rot:0},objects:[Ct(1.5,-3.6,35,.6,{h:1.6}),en(0,-12.5,[null,"van",null,"van",null,null,null,"hatch",null],{w:3,d:6}),Ce(3,-9,Math.PI,"van"),ia(6.2,-8.2,.6,2.8)]},{id:"loading-dock",name:"Loading Dock",vehicle:"van",theme:"garage",bounds:{minX:-5,maxX:21,minZ:-13,maxZ:6},start:{x:2.5,z:0,yaw:fe},target:{x:13.3,z:-9.5,w:3.2,d:6,rot:0},objects:[Ct(8.5,3.6,25,2.2,{h:3.4,color:14274498}),Ct(2.75,-3.6,13.5,2.2,{h:3.4,color:14274498}),Ct(19.5,-3.6,3,2.2,{h:3.4,color:14274498}),Ct(8.9,-7.75,1.2,10.5,{h:3.4,color:14274498}),Ct(18.6,-7.75,1.2,10.5,{h:3.4,color:14274498}),Te(13.3,-9.5,{w:3.2,d:6}),Ce(16.2,-11.1,0,"van"),Ce(10.55,-11.1,0,"van"),ls(6.5,0,21,.14),De(9.9,-4.9),De(20,1.8)]},{id:"wide-circle",name:"Wide Circle",vehicle:"pickup",theme:"lot",bounds:{minX:-16,maxX:12,minZ:-18,maxZ:2.5},start:{x:-1,z:-7.6,yaw:-fe},target:{x:0,z:-13.6,w:3,d:7,rot:0},objects:[en(0,-13.6,["hatch",null,"suv",null,"saloon",null,"hatch"],{w:3,d:7}),en(0,-1.6,["hatch",null,"hatch",null,"hatch",null,"hatch"],{w:3,d:7,rot:Math.PI})]},{id:"tail-sweep",name:"Tail Sweep",vehicle:"lorry",theme:"garage",bounds:{minX:-15,maxX:15,minZ:-17,maxZ:0},start:{x:5,z:-5.5,yaw:-fe},target:{x:0,z:-12,w:3.8,d:8.6,rot:0},objects:[en(0,-12,["lorry",null,"lorry"],{w:3.8,d:8.6}),Ct(0,-2.4,30,1.8,{h:4.2,color:14274498})]},{id:"back-alley",name:"Back Alley",vehicle:"stepvan",theme:"alley",bounds:{minX:-9,maxX:21,minZ:-12,maxZ:6},start:{x:1,z:2.2,yaw:fe},target:{x:-2.6,z:-5.1,w:4,d:9,rot:0},objects:[Ct(6,5.9,29.8,1.8,{h:4.2,color:14076347}),Ct(-7,-1.5,3.8,1.8,{h:4.2,color:14076347}),Ct(10.4,-1.5,21,1.8,{h:4.2,color:14076347}),Ct(-5.8,-5.45,1.8,9.7,{h:4.2,color:14076347}),Ct(.6,-5.45,1.8,9.7,{h:4.2,color:14076347}),Ct(-2.6,-10.5,8.2,1.8,{h:4.2,color:14076347}),Te(-2.6,-5.1,{w:4,d:9})]},{id:"bus-stop",name:"Bus Stop",vehicle:"bus",theme:"street",bounds:{minX:-13,maxX:11,minZ:-25,maxZ:21},start:{x:-1.9,z:-20,yaw:0},target:{x:2.6,z:-1.75,w:3.2,d:12.4,rot:0},objects:[hc(-1.625,-2,11.95,44,{left:6,right:5,h:6}),Te(2.6,-1.75,{w:3.2,d:12.4}),Ce(2.6,-16.6,0,"bus"),Ce(2.6,13.1,Math.PI,"bus"),Ct(5.45,-1.75,1.2,6,{h:2.6,color:14800841}),Ce(-5.2,-21,0,"hatch"),De(-5.2,6)]},{id:"depot",name:"Depot",vehicle:"schoolbus",theme:"lot",bounds:{minX:-20,maxX:7,minZ:-21,maxZ:-2.45},start:{x:-7,z:-5.45,yaw:fe},target:{x:-8,z:-14.2,w:4.6,d:11.9,rot:0},objects:[en(-8,-14.2,["schoolbus",null,"schoolbus"],{w:4.6,d:11.9}),Ct(-6,-1.75,30,1.8,{h:4.6,color:14274498}),Ct(5.9,-10,1.8,22,{h:4.6,color:14274498})]},{id:"tail-swing",name:"Tail Swing",vehicle:"coach",theme:"garage",bounds:{minX:-30,maxX:30,minZ:-21.4,maxZ:21.4},start:{x:0,z:11.6,yaw:0},target:{x:8,z:-13.7,w:3.4,d:13.4,rot:0},objects:[Ct(-15.925,13.7,28.15,13.4,{h:4.6,color:14274498}),Ct(15.925,13.7,28.15,13.4,{h:4.6,color:14274498}),Ct(-11.925,-13.7,36.15,13.4,{h:4.6,color:14274498}),Ct(19.925,-13.7,20.15,13.4,{h:4.6,color:14274498}),Te(0,13.7,{w:3.4,d:13.4}),Te(8,-13.7,{w:3.4,d:13.4})]},{id:"trailer-trouble",name:"Trailer Trouble",vehicle:"towcar",theme:"lot",bounds:{minX:-17,maxX:16,minZ:-16.5,maxZ:7},start:{x:9,z:-5.5,yaw:-fe},target:{x:0,z:-13.9,w:2.9,d:4.1,rot:0,part:"trailer"},objects:[Ct(-.5,-.4,33,.8,{h:1.5}),en(0,-13.9,[null,"van",null,"hatch",null,"hatch",null,"hatch",null],{w:3,d:4.3,out:1.725}),De(7.5,-3.4),De(-7.5,-3.4)]},{id:"fold",name:"Fold",vehicle:"towcar",theme:"garage",bounds:{minX:-18,maxX:18,minZ:-14,maxZ:2},start:{x:6.5,z:-2,yaw:-fe},target:{x:0,z:-11.6,w:2.9,d:4.1,rot:0,part:"trailer"},objects:[Ct(0,-6,4,1.6),Ct(4.5,-10,3,6,{h:3.4,color:14274498}),Te(0,-11.6,{w:2.9,d:4.1})]},{id:"artic-dock",name:"Artic Dock",vehicle:"semi",theme:"lot",bounds:{minX:-26,maxX:26,minZ:-26,maxZ:13},start:{x:-8,z:6,yaw:fe},target:{x:0,z:-17.1,w:3.9,d:15,rot:0,part:"trailer"},objects:[uc(0,-18.15,["trailer",null,"trailer"]),Ct(0,-25.4,52,1.2,{h:6,color:14274498}),Te(0,-17.1,{w:3.9,d:15}),Ce(-21,-6,fe,"semi"),ls(0,-4,44,.16),De(-13,-9),De(13,-9)]},{id:"yard-full",name:"Yard Full",vehicle:"semi",theme:"garage",bounds:{minX:-26,maxX:30,minZ:-26,maxZ:6},start:{x:16,z:-3,yaw:-fe},target:{x:8.1,z:-17.1,w:3.9,d:15,rot:0,part:"trailer"},objects:[uc(8.1,-18.15,["trailer",null,"trailer"]),Ct(0,-25.4,50,1.2,{h:6,color:14274498}),Te(8.1,-17.1,{w:3.9,d:15}),ia(-1.5,-6.5,.9,5),ia(19.5,-7,.9,5),Ce(-22,3,fe,"van"),ls(0,-4,44,.16),De(-8,-8),De(23,-8)]}],sa=new Map;function t_(i,t){const e=`${i}|${t}`;if(!sa.has(e)){const n=new Hn(i,i,t,18);n.rotateZ(Math.PI/2),sa.set(e,n)}return sa.get(e)}const e_=new ue({color:2895411,roughness:.85,metalness:.05}),n_=new ue({color:13225686,roughness:.4,metalness:.6}),fr=new ue({color:5593699,roughness:.7}),Eh=new ue({color:10470620,roughness:.1,metalness:.2,transparent:!0,opacity:.22}),Ii=new ue({color:9278364,roughness:.5,metalness:.5}),dc=new ue({color:3816772,roughness:.85,metalness:.04,side:Ye});function co(i,t,e,n,s,r){const a=t_(e,n),o=new Hn(e*.55,e*.55,n+.02,12);o.rotateZ(Math.PI/2);for(const l of t)for(const c of[-1,1]){const h=new ye;h.position.set(c*s/2,e,l);const u=new Pt(a,e_),d=new Pt(o,n_);h.add(u,d),h.userData.spin=u,h.userData.hub=d,i.add(h),r.push(h)}}function i_(){return{head:new ue({color:16774877,emissive:16773320,emissiveIntensity:.9,roughness:.3}),tail:new ue({color:7152419,emissive:16719888,emissiveIntensity:.25,roughness:.4}),reverse:new ue({color:12106946,emissive:16777215,emissiveIntensity:0,roughness:.4})}}function bh(i,t,e,n,s){const r=i.sill*e,a=Math.max(i.arch,1.04)*s,o=r-s,l=[[0,r]];if(Math.abs(o)<a){const c=Math.sqrt(a*a-o*o),h=Math.atan2(o,c),u=Math.PI-h;for(const d of[...n].sort((f,g)=>f-g)){if(d-c<=0||d+c>=t)continue;const f=12;for(let g=0;g<=f;g++){const _=u+(h-u)*(g/f);l.push([d+a*Math.cos(_),s+a*Math.sin(_)])}}}l.push([t,r]);for(const[c,h]of i.top)l.push([c*t,h*e]);return l}function s_(i,t,e){const n=r=>e?r[1]>=t:r[1]<=t,s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length];if(n(a)&&s.push(a),n(a)!==n(o)){const l=(t-a[1])/(o[1]-a[1]);s.push([a[0]+(o[0]-a[0])*l,t])}}return s}function ho(i,t,e,n){if(i.length<3)return null;const s=new Do(i.map(([o,l])=>new dt(o,l))),r=new mr(s,{depth:t,bevelEnabled:!1});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);const a=new Pt(r,n);return a.position.set(0,0,e),a}function Th(i,t,e,n,s,r,a){if(!s){i.add(ho(t,e,r,a));return}const o=s[0]*n;for(const[l,c]of[[!1,e],[!0,e*s[1]]]){const h=ho(s_(t,o,l),c,r,a);h&&i.add(h)}}function r_(i,t,e,n,s,r,a){const o=t[0]*s,l=t[1]*r,c=e[0]*s,h=e[1]*r,u=c-o,d=h-l,f=Math.hypot(u,d);if(f<.08)return;const g=.06,_=new Pt(new te(n,g,f*.94),Eh);_.rotation.x=Math.atan2(-d,u);const m=(g/2+.006)/f;_.position.set(0,(l+h)/2+u*m,a+(o+c)/2-d*m),i.add(_)}const Qs=.055,bi=.02;function a_(i,t,e,n){const s=t[0]*n[1]-t[1]*n[0];if(Math.abs(s)<1e-6)return null;const r=((e[0]-i[0])*n[1]-(e[1]-i[1])*n[0])/s;return[i[0]+t[0]*r,i[1]+t[1]*r]}function fc(i,t){const e=[];for(let n=0;n<i.length-1;n++){const s=[i[n+1][0]-i[n][0],i[n+1][1]-i[n][1]],r=Math.hypot(s[0],s[1])||1,a=[-s[1]/r,s[0]/r];e.push({o:[i[n][0]+a[0]*t,i[n][1]+a[1]*t],d:s})}return i.map((n,s)=>{const r=e[s-1],a=e[s];return r?a?a_(r.o,r.d,a.o,a.d)??[a.o[0],a.o[1]]:[r.o[0]+r.d[0],r.o[1]+r.d[1]]:a?[a.o[0],a.o[1]]:null})}function o_(i,t,e,n){const{length:s,height:r,width:a}=e,o=a*(t.taper?t.taper[1]:1)/2,l=(t.taper?t.taper[0]:0)*r,c=t.top.map(([_,m])=>[_*s,m*r]),h=new Set(t.glass??[]),u=fc(c,bi),d=fc(c,bi+Qs),f=Math.max(.02,o-bi-Qs/2);for(let _=0;_<c.length-1;_++){if(h.has(_)||(c[_][1]+c[_+1][1])/2<=l)continue;const m=[u[_],u[_+1],d[_+1],d[_]];if(m.some(b=>!b))continue;const p=ho(m,f*2,n,dc);p&&(p.userData.inner=!0,i.add(p))}const g=u.filter(_=>_&&_[1]>l);if(g.length>=2){const _=[...g],m=g[0],p=g[g.length-1];_.push([p[0],l-bi],[m[0],l-bi]);const b=new Do(_.map(([v,T])=>new dt(v,T)));for(const[v,T,R,C]of t.sides??[]){if(R*r<=l+.02)continue;const I=new io;I.moveTo(v*s,R*r),I.lineTo(T*s,R*r),I.lineTo(T*s,C*r),I.lineTo(v*s,C*r),b.holes.push(I)}const w=new mr(b,{depth:Qs,bevelEnabled:!1});w.rotateY(-Math.PI/2);for(const v of[-1,1]){const T=new Pt(w,dc);T.position.set(v*(o-bi)+(v>0?0:Qs),0,n),T.userData.inner=!0,i.add(T)}}}function l_(i,t){const e=i.mirrors,n=i.body,s=n?.taper&&e.y>n.taper[0]*i.height,r=i.width/2*(s?n.taper[1]:1),a=i.width/2+e.out,o=new Pt(new te(a-r,e.h,e.d),fr);return o.position.set(t*((r+a)/2),e.y,e.z),o}function c_(i,t,e,n){const s=t.body,{length:r,width:a,height:o}=t,l=-t.rearOverhang,c=[...vs(t).rear,...vs(t).front].map(b=>b-l);Th(i,bh(s,r,o,c,t.wheelRadius),a,o,s.taper,l,e),s.taper&&o_(i,s,t,l);const h=a*(s.taper?s.taper[1]:1)*.94;for(const b of s.glass??[])b+1>=s.top.length||r_(i,s.top[b],s.top[b+1],h,r,o,l);for(const[b,w,v,T]of s.sides??[]){const C=(T-v)*o,I=(w-b)*r,S=s.taper&&(v+T)/2>s.taper[0],y=a/2*(S?s.taper[1]:1)-.07/2+.01;for(const P of[-1,1]){const O=new Pt(new te(.07,C,I),Eh);O.position.set(P*y,(v+T)/2*o,l+(b+w)/2*r),i.add(O)}}const u=s.sill*o,d=l+r,f=s.top[0][1]*o,g=s.top[s.top.length-1][1]*o,_=u+(f-u)*.5,m=u+(g-u)*.5,p=a/2-Math.min(.35,a*.18);for(const b of[-1,1]){const w=new Pt(new te(a*.19,.17,.06),n.head);w.position.set(b*p,_,d-.031);const v=new Pt(new te(a*.17,.19,.06),n.tail);v.position.set(b*p,m,l+.031);const T=new Pt(new te(.15,.11,.06),n.reverse);T.position.set(b*(p-a*.16),m-.16,l+.031),i.add(w,v,T),i.add(l_(t,b))}for(const[b,w]of[[d-.081,f],[l+.081,g]]){const v=new Pt(new te(a*.99,.22,.16),fr);v.position.set(0,Math.min(u+.14,w-.12),b),i.add(v)}if(s.dash){const b=new Pt(new te(a*.88,.52,.8),fr);b.position.set(0,s.eye[1]*o-.62,d-.78),i.add(b)}if(t.trailer){const b=t.trailer;if(b.drawbar){const w=new Pt(new Hn(.06,.08,.22,8),Ii);w.position.set(0,u-.05,b.hitch),i.add(w)}else{const w=new Pt(new te(a*.62,.12,1.1),Ii);w.position.set(0,g+.06,b.hitch),i.add(w);for(const v of[-1,1]){const T=new Pt(new Hn(.09,.09,1.5,10),Ii);T.position.set(v*(a/2-.16),o*.72,l+s.top[3][0]*r-.1),i.add(T)}}}i.userData.view={eye:new L(a*.21,s.eye[1]*o,l+s.eye[0]*r),left:new L(a/2+t.mirrors.out+.05,t.mirrors.y+.04,t.mirrors.z),right:new L(-(a/2+t.mirrors.out+.05),t.mirrors.y+.04,t.mirrors.z),centre:new L(0,s.look[1]*o,l+s.look[0]*r)}}const h_={sill:0,arch:1.35,top:[[1,1],[0,1]],taper:null};function u_(i,t,e,n){const s=new ye,r=xh(i),a=_h(i),o=i.wheelRadius+.28,l=a-r/2,c=vh(i),h={...h_,sill:o/i.height},u=bh(h,r,i.height,c.map(f=>f-l),i.wheelRadius);Th(s,u,i.width,i.height,null,l,t);const d=new Pt(new te(i.width*.9,.2,r*.96),fr);d.position.set(0,o-.06,a),s.add(d);for(const f of[-1,1]){const g=new Pt(new te(.26,.16,.06),e.tail);g.position.set(f*(i.width/2-.25),o+.16,l+.031),s.add(g)}if(i.drawbar){const f=new Pt(new te(.12,.12,i.axleFromHitch-i.axleToFront+.3),Ii);f.position.set(0,o-.12,i.axleFromHitch-(i.axleFromHitch-i.axleToFront)/2),s.add(f)}else{const f=new Pt(new te(i.width*.6,.14,1),Ii);f.position.set(0,o-.16,i.axleFromHitch),s.add(f);for(const g of[-1,1]){const _=new Pt(new te(.14,o-.2,.14),Ii);_.position.set(g*i.width*.34,(o-.2)/2,i.axleFromHitch-1.6),s.add(_)}}return co(s,c,i.wheelRadius,i.wheelWidth,i.trackWidth,n.trailer),s.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),s}function Fo(i,t=i.bodyColor,e={}){const n=new ye,s=new ue({color:t,roughness:e.pastel?.62:.42,metalness:e.pastel?.08:.22}),r=i_();e.pastel&&(r.head.emissiveIntensity=.25,r.tail.emissiveIntensity=.12),c_(n,i,s,r);const a={front:[],rear:[],trailer:[]},o=vs(i);co(n,o.rear,i.wheelRadius,i.wheelWidth,i.trackWidth,a.rear),co(n,o.front,i.wheelRadius,i.wheelWidth,i.trackWidth,a.front);const l=i.trailer?u_(i.trailer,s,r,a):null;return n.traverse(c=>{c.isMesh&&(c.castShadow=!c.userData.inner)}),{group:n,trailerGroup:l,wheels:a,view:n.userData.view,tailMat:r.tail,reverseMat:r.reverse}}function d_(i,t,{steer:e=0,spin:n=0,braking:s=!1,reversing:r=!1}){for(const a of i.wheels.front)a.rotation.y=e,a.userData.spin.rotation.x=n,a.userData.hub.rotation.x=n;for(const a of[i.wheels.rear,i.wheels.trailer])for(const o of a)o.userData.spin.rotation.x=n,o.userData.hub.rotation.x=n;i.tailMat.emissiveIntensity=s?1.6:.25,i.reverseMat.emissiveIntensity=r?1.4:0}function f_(i){if(i.type==="parked"){const t=xe[i.spec],e={x:i.x,z:i.z,yaw:i.rot,trailerYaw:i.rot},n=[{...on(t,e),type:"parked"},{...Mh(t,e),type:"parked"}];return t.trailer&&n.push({...ws(t,e),type:"parked"}),n}return[{x:i.x,z:i.z,w:i.w,d:i.d,rot:i.rot??0,type:i.type}]}const uo={lot:{sky:10469600,fog:[10469600,60,190],ground:"#33353a",speck:"#41444a",hemi:[13624053,5526606,.5],sun:[16773852,1.25,[38,46,22]],wall:14473680,boundaryH:1,ambient:0,env:.32},street:{sky:9417686,fog:[9417686,50,160],ground:"#313337",speck:"#3f4046",hemi:[13164018,5263434,.48],sun:[16772818,1.2,[-30,44,26]],wall:14275270,boundaryH:1.2,ambient:0,env:.3},garage:{sky:3949132,fog:[3949132,30,110],ground:"#3c3f45",speck:"#494c53",hemi:[11451344,3355962,.62],sun:[15265535,.6,[10,40,14]],wall:13817049,boundaryH:3,ambient:.3,lamps:!0,env:.26},alley:{sky:7173766,fog:[7173766,34,120],ground:"#3a393f",speck:"#46454c",hemi:[11977172,3486522,.6],sun:[16770758,.8,[-22,40,-18]],wall:14208192,boundaryH:3.4,ambient:.22,lamps:!0,env:.24}},Oo=new Set,ra=new Map;function p_(i){if(ra.has(i))return ra.get(i);const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle=i.ground,e.fillRect(0,0,512,512);for(let s=0;s<9e3;s++){e.fillStyle=Math.random()>.5?i.speck:"rgba(0,0,0,0.18)",e.globalAlpha=.35+Math.random()*.4;const r=Math.random()*3+.6;e.fillRect(Math.random()*512,Math.random()*512,r,r)}e.globalAlpha=.035;for(let s=0;s<12;s++)e.fillStyle=Math.random()>.5?"#000":"#fff",e.beginPath(),e.ellipse(Math.random()*512,Math.random()*512,20+Math.random()*70,15+Math.random()*50,Math.random()*3,0,7),e.fill();const n=new Jc(t);return n.wrapS=n.wrapT=cs,n.anisotropy=8,ra.set(i,n),Oo.add(n),n}function m_(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#f3eee5",t.fillRect(0,0,128,128),t.fillStyle="#e8b3a4",t.lineWidth=0;for(let n=-128;n<256;n+=44)t.beginPath(),t.moveTo(n,0),t.lineTo(n+22,0),t.lineTo(n+22+128,128),t.lineTo(n+128,128),t.fill();const e=new Jc(i);return e.wrapS=e.wrapT=cs,Oo.add(e),e}class g_{constructor(t){this.scene=t,this.root=new ye,this.scene.add(this.root),this.lights=new ye,this.scene.add(this.lights),this.stripe=m_(),this.colliders=[],this.occluders=[],this.arena=null}clear(){for(const t of[this.root,this.lights])for(;t.children.length;)t.children.pop().traverse?.(n=>{n.isMesh&&(n.geometry.dispose(),n.material.map&&!Oo.has(n.material.map)&&n.material.map.dispose())});this.colliders=[],this.occluders=[]}build(t){this.clear();const{obstacles:e,paint:n}=wh(t.objects),s=uo[t.theme]??uo.lot,r=t.bounds,a=(r.minX+r.maxX)/2,o=(r.minZ+r.maxZ)/2,l=r.maxX-r.minX,c=r.maxZ-r.minZ;this.arena={x:a,z:o,w:l,d:c,rot:0},this.scene.background=new Xt(s.sky),this.scene.fog=new To(s.fog[0],s.fog[1],s.fog[2]),this.scene.environmentIntensity=s.env??.7;const h=new Xd(s.hemi[0],s.hemi[1],s.hemi[2]);this.lights.add(h),s.ambient&&this.lights.add(new $d(16777215,s.ambient));const u=new Zd(s.sun[0],s.sun[1]);u.position.set(...s.sun[2]),u.castShadow=!0,u.shadow.mapSize.set(2048,2048);const d=Math.max(l,c)*.62+6,f=u.shadow.camera;if(f.left=-d,f.right=d,f.top=d,f.bottom=-d,f.near=1,f.far=160,u.shadow.bias=-6e-4,u.shadow.normalBias=.02,u.target.position.set(a,0,o),u.position.set(a+s.sun[2][0],s.sun[2][1],o+s.sun[2][2]),this.lights.add(u,u.target),s.lamps)for(let T=0;T<4;T++){const R=r.minX+(T%2+.5)*(l/2),C=r.minZ+(Math.floor(T/2)+.5)*(c/2),I=new ch(16767392,34,26,2);I.position.set(R,4.2,C),this.lights.add(I)}const g=p_(s);g.repeat.set((l+80)/8,(c+80)/8);const _=new Pt(new oi(l+80,c+80),new ue({map:g,roughness:.96,metalness:0}));_.rotation.x=-Math.PI/2,_.position.set(a,0,o),_.receiveShadow=!0,this.root.add(_);const m=new ue({color:14078918,roughness:.85});for(const T of n){const R=new Pt(new te(T.w,.02,T.d),m);R.position.set(T.x,.011,T.z),R.rotation.y=T.rot??0,R.receiveShadow=!0,this.root.add(R)}const p=s.boundaryH,b=.6,w=new ue({color:s.wall,roughness:.9}),v=[[a,r.minZ-b/2,l+b*2,b],[a,r.maxZ+b/2,l+b*2,b],[r.minX-b/2,o,b,c],[r.maxX+b/2,o,b,c]];for(const[T,R,C,I]of v){const S=new Pt(new te(C,p,I),w);S.position.set(T,p/2,R),S.castShadow=!0,S.receiveShadow=!0,this.root.add(S),this.occluders.push(S)}for(const T of e){this.colliders.push(...f_(T));const R=this.obstacleMesh(T,s);this.root.add(R),T.type!=="cone"&&T.type!=="kerb"&&this.occluders.push(R)}return this.target=t.target,this.root.add(this.buildTarget(t.target)),this}obstacleMesh(t,e){const n=new ye;if(t.type==="parked"){const a=xe[t.spec],o=Fo(a,t.color??14672872,{pastel:!0});if(o.group.position.set(t.x,0,t.z),o.group.rotation.y=t.rot,n.add(o.group),o.trailerGroup){const l=Wi(a,{x:t.x,z:t.z,yaw:t.rot,trailerYaw:t.rot});o.trailerGroup.position.set(l.x,0,l.z),o.trailerGroup.rotation.y=t.rot,n.add(o.trailerGroup)}return n}if(t.type==="dropped"){const a=new ue({color:t.color??14672872,roughness:.62}),o=1.1,l=new Pt(new te(t.w,t.h-o,t.d),a);l.position.set(t.x,o+(t.h-o)/2,t.z),l.rotation.y=t.rot;const c=new Pt(new te(t.w*.9,.22,t.d*.94),new ue({color:10133673,roughness:.6}));c.position.set(t.x,o-.1,t.z),c.rotation.y=t.rot,n.add(l,c);const h=Math.cos(t.rot),u=Math.sin(t.rot),d=new ue({color:9278364,roughness:.5,metalness:.4});for(const[f,g]of[[-t.w*.34,t.d*.3],[t.w*.34,t.d*.3],[-t.w*.34,-t.d*.34],[t.w*.34,-t.d*.34]]){const _=new Pt(new te(.16,o-.2,.16),d);_.position.set(t.x+f*h+g*u,(o-.2)/2,t.z-f*u+g*h),n.add(_)}for(const f of n.children)f.castShadow=!0,f.receiveShadow=!0;return n}let s;if(t.type==="kerb"?s=new ue({color:15131611,roughness:.95}):t.type==="pillar"?s=new ue({color:13882841,roughness:.92}):t.type==="cone"?s=new ue({color:15906709,roughness:.7}):s=new ue({color:t.color??e.wall,roughness:.9}),t.type==="cone"){const a=new Pt(new Co(.22,t.h,14),s);a.position.set(t.x,t.h/2,t.z);const o=new Pt(new te(.42,.05,.42),new ue({color:10396588,roughness:.9}));o.position.set(t.x,.025,t.z);const l=new Pt(new Hn(.15,.175,.12,14),new ue({color:16513007,roughness:.7}));l.position.set(t.x,t.h*.52,t.z);for(const c of[a,o,l])c.castShadow=!0,n.add(c);return n}const r=new Pt(new te(t.w,t.h,t.d),s);if(r.position.set(t.x,t.h/2,t.z),r.rotation.y=t.rot??0,r.castShadow=!0,r.receiveShadow=!0,n.add(r),t.type==="pillar"){const a=new Pt(new te(t.w*1.03,.28,t.d*1.03),new ue({color:15785131,roughness:.8}));a.position.set(t.x,.85,t.z),a.rotation.y=t.rot??0,n.add(a)}return n}buildTarget(t){const e=new ye,n=new Pt(new te(t.w,.02,t.d),new Tn({color:4054148,transparent:!0,opacity:.16,depthWrite:!1}));n.position.set(t.x,.02,t.z),n.rotation.y=t.rot,e.add(n);const s=new Tn({color:6091424,transparent:!0,opacity:.9}),r=.08,a=[[0,t.d/2-r/2,t.w,r],[0,-t.d/2+r/2,t.w,r],[t.w/2-r/2,0,r,t.d],[-t.w/2+r/2,0,r,t.d]],o=Math.cos(t.rot),l=Math.sin(t.rot);for(const[c,h,u,d]of a){const f=new Pt(new te(u,.03,d),s);f.position.set(t.x+c*o+h*l,.03,t.z-c*l+h*o),f.rotation.y=t.rot,e.add(f)}return this.targetEdgeMat=s,this.targetFill=n.material,e}animateTarget(t,e){if(!this.targetEdgeMat)return;const n=.55+Math.sin(t*3)*.2;this.targetEdgeMat.opacity=e?1:n+.2,this.targetFill.opacity=e?.3:.14;const s=e?16773754:6091424;this.targetEdgeMat.color.setHex(s),this.targetFill.color.setHex(s)}}const ve={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,START:9,LS:10,RS:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},aa=.16,__=.35;function oa(i){const t=Math.abs(i);if(t<aa)return 0;const e=(t-aa)/(1-aa);return Math.sign(i)*(e*e*.65+e*.35)}class x_{constructor(){this.connected=!1,this.prev=[],this.tappedSet=new Set,this.triggersSeen=!1}raw(){const t=navigator.getGamepads?navigator.getGamepads():[];for(const e of t)if(e&&e.connected&&e.mapping==="standard")return e;for(const e of t)if(e&&e.connected)return e;return null}poll(){const t=this.raw();if(this.tappedSet.clear(),!t)return this.connected=!1,this.prev=[],this.triggersSeen=!1,null;this.connected=!0,this.pad=t;const e=t.buttons.map(n=>typeof n=="object"?n.value:n);for(let n=0;n<e.length;n++){const s=e[n]>.55,r=(this.prev[n]??0)>.55;s&&!r&&this.tappedSet.add(n)}return this.prev=e,(e[ve.RT]>0||e[ve.LT]>0)&&(this.triggersSeen=!0),t}tapped(t){return this.tappedSet.has(t)}button(t){return(this.prev[t]??0)>.55}analog(t){return this.prev[t]??0}driving(){if(!this.connected)return null;const t=this.pad,e=this.analog(ve.RT),n=this.analog(ve.LT);let s=e-n;if(Math.abs(s)<.06&&(s=0),!this.triggersSeen){const r=-(t.axes[1]??0);s=Math.abs(r)>__?Math.sign(r):0}return{throttle:s,steer:-oa(t.axes[0]??0),brake:this.button(ve.A),crawl:this.button(ve.LB)}}look(){if(!this.connected)return{x:0,y:0};const t=this.pad;return{x:oa(t.axes[2]??0),y:oa(t.axes[3]??0)}}rumble(t,e=160){const n=this.pad;if(!(!n||!n.vibrationActuator))try{n.vibrationActuator.playEffect("dual-rumble",{duration:e,strongMagnitude:Math.min(1,t),weakMagnitude:Math.min(1,t*.6)})}catch{}}}const v_=.0012,la=["chase","cockpit","top"],M_=60,pc=-.13;class y_{constructor(t){this.camera=t,this.mode="chase",this.pos=new L(0,6,12),this.look=new L,this.topYaw=0,this.reset()}cycle(){return this.mode=la[(la.indexOf(this.mode)+1)%la.length],this.first=!0,this.mode}handleInput(t,e,n=.016){(t.drag.dx||t.drag.dy)&&(this.yawOffset-=t.drag.dx*.006,this.tilt(t.drag.dy*.004)),t.wheel&&this.zoom(t.wheel);const s=(t.keys.has("camleft")?1:0)-(t.keys.has("camright")?1:0);if(s&&(this.yawOffset+=s*1.9*n),t.pressed("KeyZ")&&this.recentre(),e&&e.connected){const r=e.look();r.x&&(this.yawOffset-=r.x*2.4*n),r.y&&this.tilt(r.y*1.5*n),e.button(ve.RS)&&this.recentre(),e.tapped(ve.UP)&&this.zoom(-1),e.tapped(ve.DOWN)&&this.zoom(1)}this.yawOffset=xs(this.yawOffset)}tilt(t){this.mode==="cockpit"?this.headPitch=Xe(this.headPitch-t,-.8,.4):this.pitch=Xe(this.pitch+t,.06,1.4)}zoom(t){this.mode==="top"?this.topHeight=Xe(this.topHeight+t*2.2,9,70):this.mode==="chase"&&(this.dist=Xe(this.dist+t*.9,3.6,30))}recentre(){this.yawOffset=0,this.pitch=this.basePitch,this.headPitch=pc}update(t,e,n,s){const r=this.mode==="cockpit"?M_:52;if(this.camera.fov!==r&&(this.camera.fov=r,this.camera.updateProjectionMatrix()),this.mode==="cockpit"&&s){const u=Math.sin(e.yaw),d=Math.cos(e.yaw),f=s.eye,g=e.x+f.x*d+f.z*u,_=e.z-f.x*u+f.z*d,m=e.yaw+this.yawOffset,p=Math.cos(this.headPitch)*10;this.camera.up.set(0,1,0),this.camera.position.set(g,f.y,_),this.camera.lookAt(g+Math.sin(m)*p,f.y+Math.sin(this.headPitch)*10,_+Math.cos(m)*p),this.first=!0;return}let a=e.x+Math.sin(e.yaw)*1.2,o=e.z+Math.cos(e.yaw)*1.2;if(n.trailer){const u=on(n,e),d=ws(n,e);a=u.x*.35+d.x*.65,o=u.z*.35+d.z*.65}const l=1-Math.pow(v_,t),c=new L,h=new L;if(this.mode==="top"){c.set(a,this.topHeight,o),h.set(a,0,o);const u=e.yaw+this.yawOffset;this.topYaw=this.first?u:this.topYaw+xs(u-this.topYaw)*l}else{const u=e.yaw+Math.PI+this.yawOffset,d=this.dist*Math.cos(this.pitch);c.set(a+Math.sin(u)*d,1.1+Math.sin(this.pitch)*this.dist,o+Math.cos(u)*d),h.set(a,n.height*.55,o)}this.first?(this.pos.copy(c),this.look.copy(h),this.first=!1):(this.pos.lerp(c,l),this.look.lerp(h,l)),this.camera.position.copy(this.pos),this.mode==="top"?this.camera.up.set(Math.sin(this.topYaw),0,Math.cos(this.topYaw)):this.camera.up.set(0,1,0),this.camera.lookAt(this.look)}reset(t="lot",e=null){const n=t!=="lot",s=e?Math.max(0,kg(e)-3.95)*.85:0;this.basePitch=Math.max(n?.8:.34,.34+Math.min(.26,s*.024)),this.pitch=this.basePitch,this.dist=(n?8.6:9.6)+s*1.55,this.topHeight=24+s*3,this.yawOffset=0,this.headPitch=pc,this.first=!0}}const mc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"brake",ShiftLeft:"crawl",ShiftRight:"crawl",KeyQ:"camleft",KeyE:"camright",Backspace:"rewind"};class S_{constructor(t=window){this.keys=new Set,this.tapped=new Set,this.drag={active:!1,dx:0,dy:0},this.wheel=0,t.addEventListener("keydown",s=>{if(s.repeat||s.ctrlKey||s.metaKey||s.altKey)return;const r=mc[s.code];r&&this.keys.add(r),this.tapped.add(s.code),r&&s.preventDefault()}),t.addEventListener("keyup",s=>{const r=mc[s.code];r&&this.keys.delete(r)}),t.addEventListener("blur",()=>this.keys.clear());const e=document.getElementById("scene");e.addEventListener("pointerdown",s=>{this.drag.active=!0,this._last={x:s.clientX,y:s.clientY},e.setPointerCapture(s.pointerId)}),e.addEventListener("pointermove",s=>{this.drag.active&&(this.drag.dx+=s.clientX-this._last.x,this.drag.dy+=s.clientY-this._last.y,this._last={x:s.clientX,y:s.clientY})});const n=s=>{this.drag.active=!1;try{e.releasePointerCapture(s.pointerId)}catch{}};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("wheel",s=>{this.wheel+=Math.sign(s.deltaY),s.preventDefault()},{passive:!1})}pressed(t){return this.tapped.has(t)?(this.tapped.delete(t),!0):!1}endFrame(){this.tapped.clear(),this.drag.dx=0,this.drag.dy=0,this.wheel=0}driving(){const t=this.keys;return{throttle:(t.has("up")?1:0)+(t.has("down")?-1:0),steer:(t.has("left")?1:0)+(t.has("right")?-1:0),brake:t.has("brake"),crawl:t.has("crawl"),rewind:t.has("rewind")}}}class w_{constructor(){this.ctx=null,this.muted=!1,this.lastBeep=0}ensure(){return this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}tone(t,e,{type:n="sine",gain:s=.12,slide:r=0}={}){if(this.muted)return;const a=this.ensure(),o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.setValueAtTime(t,a.currentTime),r&&o.frequency.exponentialRampToValueAtTime(Math.max(40,t+r),a.currentTime+e),l.gain.setValueAtTime(1e-4,a.currentTime),l.gain.exponentialRampToValueAtTime(s,a.currentTime+.012),l.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+e),o.connect(l).connect(a.destination),o.start(),o.stop(a.currentTime+e+.03)}sensor(t,e){if(this.muted||t>1.2)return;const n=t<.28?.001:.09+t*.55;if(!(e-this.lastBeep<n)){if(this.lastBeep=e,t<.28){this._solid||(this._solid=!0,this.tone(1760,.4,{type:"square",gain:.05}));return}this._solid=!1,this.tone(1480,.055,{type:"square",gain:.045})}}bump(t){if(this.muted)return;const e=this.ensure(),s=e.createBuffer(1,e.sampleRate*.16,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,3);const a=e.createBufferSource();a.buffer=s;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=260+t*500;const l=e.createGain();l.gain.value=Math.min(.55,.12+t*.3),a.connect(o).connect(l).connect(e.destination),a.start()}win(){this.muted||[523.25,659.25,783.99,1046.5].forEach((t,e)=>{setTimeout(()=>this.tone(t,.32,{type:"triangle",gain:.1}),e*95)})}click(){this.tone(880,.04,{type:"square",gain:.03})}}const Ah="tight-fit.settings",tr=(i,t)=>({values:i.map(e=>({id:String(e),name:`${e.toFixed(2).replace(/0$/,"")}×`})),default:String(t)}),Bo=[{id:"steering",name:"Steering",values:[{id:"direct",name:"Direct",note:"The stick is the wheel. Where you hold it is where the front wheels point, and letting go straightens them."},{id:"rate",name:"Rate",note:"The stick turns the wheel. How far you push it is how fast the front wheels turn, and letting go leaves them where they are — so coming back to straight is something you have to do."}]},{id:"steerSpeed",name:"Steering speed",note:"How fast the wheels turn at full stick. There is no equivalent for Direct steering: how far the wheels turn is the vehicle’s own lock, not a preference.",when:i=>i.steering==="rate",...tr([.5,.7,1,1.4,2],1)},{id:"throttle",name:"Throttle",values:[{id:"speed",name:"Speed",note:"The trigger is the speed. Half pressed is half speed, and releasing it brings the vehicle down as fast as the trigger itself comes back — connected rather than twitchy."},{id:"accelerator",name:"Accelerator",note:"The trigger adds speed. Hold it and the vehicle builds up to the cap; let go and it coasts down."}]},{id:"topSpeed",name:"Top speed",note:"What a fully pressed trigger is worth, forward and in reverse. Crawl is left alone — it exists to be a fixed slow speed.",...tr([.6,.8,1,1.3,1.6],1)},{id:"acceleration",name:"Acceleration",note:"How hard it pulls away. Under Speed throttle this is how quickly the vehicle catches up to the trigger.",...tr([.6,.8,1,1.5,2],1)},{id:"slowdown",name:"Slow-down",note:"How fast it comes to rest when you let go, forward and in reverse. The brake button is not affected — a brake is a brake.",...tr([1,1.5,2,3,4],1)},{id:"mirrors",name:"Mirrors",note:"The three mirror panels in the inside view. Off leaves that view with only what the windscreen shows.",values:[{id:"on",name:"Shown"},{id:"off",name:"Hidden"}]},{id:"reverseCam",name:"Reversing camera",note:"The rear camera panel and its painted rails, which come up whenever you select reverse.",values:[{id:"on",name:"Shown"},{id:"off",name:"Hidden"}]},{id:"radar",name:"Parking sensor",note:"The nearest-obstacle bar and the beep that quickens with it. Already absent from the inside view, which does without it on purpose.",values:[{id:"on",name:"On"},{id:"off",name:"Off"}]},{id:"turnCircles",name:"Turning circles",note:"The circle each wheel is on at the steering you are holding, and the point they all turn about — rear wheels in blue, front in violet. Hold the wheel and they stay where they are; only turning it moves them. Off by default.",values:[{id:"off",name:"Hidden"},{id:"on",name:"Shown"}]},{id:"firstContact",name:"First contact",note:"Where the vehicle would first touch something, driving on at the steering you are holding, in the direction you are going. It is the end of the circle it is standing on, so it needs those switched on. Off by default.",when:i=>i.turnCircles==="on",values:[{id:"off",name:"Hidden"},{id:"on",name:"Shown"}]},{id:"ghosts",name:"Direction-change ghosts",note:"A pale copy of the vehicle left standing wherever you swap between forward and reverse, so a shuffle shows every pose it went through at once instead of one at a time. The newest is the firmest and each older one is fainter, so the order they were left in is on the floor too. The poses are kept whether or not they are drawn, so turning this on halfway through a manoeuvre shows the whole manoeuvre. Off by default.",values:[{id:"off",name:"Hidden"},{id:"on",name:"Shown"}]},{id:"traces",name:"Tyre marks",note:"The line each wheel leaves on the ground. It is the record of what you did, so hiding it hides the route as well as the mess.",values:[{id:"on",name:"Shown"},{id:"off",name:"Hidden"}]}],E_=Object.fromEntries(Bo.map(i=>[i.id,i.default??i.values[0].id]));function b_(){const i={...E_};try{const t=JSON.parse(localStorage.getItem(Ah));for(const e of Bo)e.values.some(n=>n.id===t?.[e.id])&&(i[e.id]=t[e.id])}catch{}return i}function T_(i){try{localStorage.setItem(Ah,JSON.stringify(i))}catch{}}function gc(i){return{steerSpeed:i.steering==="rate"?Number(i.steerSpeed):1,topSpeed:Number(i.topSpeed),acceleration:Number(i.acceleration),slowdown:Number(i.slowdown)}}const It=i=>document.getElementById(i);class A_{constructor(t){this.h=t,this.el={hud:It("hud"),menu:It("menu"),result:It("result"),pause:It("pause"),lvlLabel:It("lvl-label"),keysKb:It("keys-kb"),keysPad:It("keys-pad"),artic:It("artic"),articDot:It("artic-dot"),articLabel:It("artic-label"),shunts:It("stat-shunts"),collisions:It("stat-collisions"),best:It("stat-best"),sensor:It("sensor"),sensorFill:It("sensor-fill"),sensorText:It("sensor-text"),finish:It("finish"),finishKey:It("finish-key"),toast:It("toast"),flash:It("flash"),wheelRot:It("wheel-rot"),rewind:It("rewind"),rewindLeft:It("rewind-left"),grid:It("level-grid"),userGrid:It("user-grid"),editor:It("editor"),settings:It("settings"),settingsList:It("settings-list"),steerLegend:It("steer-legend"),pTitle:It("pause-title"),pVeh:It("pause-veh"),rKicker:It("result-kicker"),rTitle:It("result-title"),rShunts:It("result-shunts"),rCollisions:It("result-collisions"),rRank:It("result-rank"),rNote:It("result-note"),rVeh:It("result-veh"),btnNext:It("btn-next")},It("btn-next").onclick=()=>t.next(),It("btn-retry").onclick=()=>t.restart(),It("btn-menu").onclick=()=>t.toMenu(),It("btn-resume").onclick=()=>t.resume(),It("btn-restart").onclick=()=>t.restart(),It("btn-quit").onclick=()=>t.toMenu(),It("unlock-all").onclick=()=>t.unlockAll(),It("wipe").onclick=()=>t.wipe(),It("new-level").onclick=()=>t.newLevel(),It("copy-level").onchange=e=>{const n=Number(e.target.value);e.target.value="",Number.isInteger(n)&&n>=0&&t.copyLevel(n)},It("btn-settings").onclick=()=>t.openSettings(),It("btn-pause-settings").onclick=()=>t.openSettings(),It("btn-settings-back").onclick=()=>t.closeSettings(),addEventListener("keydown",()=>this.setPadMode(!1)),this._toastTimer=0}renderMenu(t,e=[],n={}){this.el.grid.innerHTML="",sn.forEach((s,r)=>{const a=r<=t.unlocked,o=t.best[s.id],l=document.createElement("button");l.className=`tile${a?"":" locked"}`,l.disabled=!a,l.innerHTML=`<span class="veh">${xe[s.vehicle].name}</span>
        <span class="n">${String(r+1).padStart(2,"0")}</span>
        <span class="t">${a?s.name:"Locked"}</span>
        <span class="m">${a?o?`your best: ${o.shunts}`:"not parked yet":"finish the one before"}</span>`,l.onclick=()=>this.h.play(r),this.el.grid.appendChild(l)}),this.renderUser(t,e,n)}renderUser(t,e,n){const s=It("copy-level");s.innerHTML="",s.add(new Option("a shipped level…","")),sn.forEach((r,a)=>{a<=t.unlocked&&s.add(new Option(r.name,String(a)))}),this.el.userGrid.innerHTML="";for(const r of e){const a=n[r.id],o=document.createElement("div");o.className="tile own";const l=document.createElement("button");l.className="own-play",l.innerHTML=`<span class="veh">${xe[r.vehicle]?.name??r.vehicle}</span>
        <span class="t">${r.name}</span>
        <span class="m">${a?`your best: ${a.shunts}`:"not parked yet"}</span>`,l.onclick=()=>this.h.playUser(r.id);const c=document.createElement("button");c.className="own-edit",c.textContent="edit",c.onclick=()=>this.h.edit(r.id),o.append(l,c),this.el.userGrid.appendChild(o)}e.length||(this.el.userGrid.innerHTML='<p class="sub-note">Nothing built yet.</p>')}renderSettings(t){this.el.settingsList.innerHTML="";for(const e of Bo){const n=e.when?!e.when(t):!1,s=document.createElement("div");s.className=`setting${n?" inert":""}`,s.innerHTML=`<span class="cap">${e.name}</span>`+(e.note?`<p class="hint">${e.note}</p>`:"");const r=document.createElement("div");r.className="opts",r.setAttribute("role","radiogroup"),r.setAttribute("aria-label",e.name);for(const a of e.values){const o=document.createElement("button");o.className=e.note?"opt narrow":"opt",o.setAttribute("role","radio"),o.setAttribute("aria-checked",String(t[e.id]===a.id)),o.innerHTML=`<span class="on">${t[e.id]===a.id?"on":"off"}</span>
          <b>${a.name}</b>${a.note?`<p class="note">${a.note}</p>`:""}`,o.disabled=n,o.onclick=()=>this.h.setSetting(e.id,a.id),r.appendChild(o)}s.appendChild(r),this.el.settingsList.appendChild(s)}}showSettings(t,e){e&&this.renderSettings(t),this.el.settings.classList.toggle("hidden",!e)}setSteerMode(t){this.el.steerLegend&&(this.el.steerLegend.textContent=t==="rate"?"turn wheel":"steer")}showMenu(t,e,n){this.renderMenu(t,e,n),this.el.menu.classList.remove("hidden"),this.el.result.classList.add("hidden"),this.el.pause.classList.add("hidden"),this.el.settings.classList.add("hidden"),this.el.hud.classList.add("hidden"),this.el.editor.classList.add("hidden")}showEditor(){for(const t of["menu","result","pause","settings","hud"])this.el[t].classList.add("hidden")}showGame(){this.el.menu.classList.add("hidden"),this.el.result.classList.add("hidden"),this.el.pause.classList.add("hidden"),this.el.settings.classList.add("hidden"),this.el.editor.classList.add("hidden"),this.el.hud.classList.remove("hidden")}showPause(t){this.el.pause.classList.toggle("hidden",!t)}setLevel(t,e,n){const s=xe[e.vehicle]??{name:e.vehicle};this.el.lvlLabel.textContent=t<0?`your level · ${e.name} · ${s.name}`:`${String(t+1).padStart(2,"0")} / ${sn.length} · ${e.name} · ${s.name}`,this.el.best.textContent=n?`${n.shunts}`:"—",this.el.artic.classList.toggle("hidden",!s.trailer),this.el.pTitle.textContent=e.name,this.el.pVeh.textContent=s.name,this.el.rVeh.textContent=s.name}setPadMode(t){this.el.keysPad.classList.toggle("hidden",!t),this.el.keysKb.classList.toggle("hidden",t),this.el.finishKey.textContent=t?"B":"Enter"}update(t){this.el.shunts.textContent=t.shunts,this.el.collisions.textContent=t.collisions,this.el.collisions.parentElement.classList.toggle("hot",t.collisions>0),this.el.sensor.classList.toggle("hidden",!t.radar);const e=t.gap,n=Math.max(0,Math.min(1,1-e/1.5));this.el.sensorFill.style.width=`${n*100}%`;const s=e<.15?"var(--danger)":e<.45?"var(--warn)":"var(--accent)";if(this.el.sensorFill.style.background=s,this.el.sensorText.textContent=e>1.5?"clear":`${e.toFixed(2)} m`,this.el.sensorText.style.color=e<.15?"var(--danger)":"var(--dim)",t.maxArticulation){const r=t.articulation/t.maxArticulation;this.el.articDot.style.transform=`translateX(${-r*42}px)`;const a=Math.abs(r);this.el.artic.classList.toggle("warn",a>.6&&a<=.88),this.el.artic.classList.toggle("bad",a>.88),this.el.articLabel.textContent=a>.88?"jackknife":"trailer"}this.el.wheelRot.style.transform=`rotate(${-t.steer*140}deg)`,this.el.rewind.classList.toggle("hidden",!t.rewinding),t.rewinding&&(this.el.rewindLeft.textContent=t.tape.toFixed(1)),this.el.finish.classList.toggle("hidden",!t.canFinish)}toast(t){this.el.toast.textContent=t,this.el.toast.classList.add("on"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.el.toast.classList.remove("on"),1400)}flash(t){const e=this.el.flash;e.style.transition="none",e.style.opacity=String(Math.min(.34,t)),requestAnimationFrame(()=>{e.style.transition="opacity 0.35s",e.style.opacity="0"})}showResult({level:t,shunts:e,collisions:n,rank:s,note:r,isLast:a}){this.el.rKicker.textContent=s.kicker,this.el.rKicker.classList.toggle("void",!s.clean),this.el.rTitle.textContent=t.name,this.el.rShunts.textContent=e,this.el.rCollisions.textContent=n,this.el.rRank.textContent=s.label,this.el.rNote.textContent=r,this.el.btnNext.textContent=a?"Back to levels":"Next level",this.el.result.classList.remove("hidden")}}const R_=[{id:"left",kind:"mirror",dir:[.44,-.11,-1],fov:44,rect:[.012,.3,.165,.215]},{id:"right",kind:"mirror",dir:[-.44,-.11,-1],fov:44,rect:[.823,.3,.165,.215]},{id:"centre",kind:"mirror",dir:[0,-.07,-1],fov:38,rect:[.355,.792,.29,.152]},{id:"reverse",kind:"reverse",fov:78,rect:[.362,.145,.276,.25]}],_c=.5,C_=1,es=50,xc=.05,ca=[[.35,14829626],[.7,15250236],[1.01,4833402]];function P_(i,t){const[e,n,s,r]=i,a=new oi(s,r);a.translate(e+s/2,n+r/2,0);const o=a.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,1-o.getX(l));return new Pt(a,new Tn({map:t,toneMapped:!1}))}function L_(i,t,e){const[n,s,r,a]=i,o=new oi(r+e*2,a+e*2);return o.translate(n+r/2,s+a/2,-.01),new Pt(o,new Tn({color:t,transparent:!0,opacity:.85}))}class D_{constructor(){this.group=new ye,this.group.visible=!1,this.rails=[-1,1].map(()=>{const t=new ke;t.setAttribute("position",new Ne(new Float32Array((es+1)*6),3)),t.setAttribute("color",new Ne(new Float32Array((es+1)*6),3));const e=[];for(let s=0;s<es;s++){const r=s*2;e.push(r,r+1,r+2,r+1,r+3,r+2)}t.setIndex(e);const n=new Pt(t,new Tn({vertexColors:!0,side:Ye,toneMapped:!1}));return this.group.add(n),t}),this.colour=new Xt}update(t,e){const n=C_/es;let s={x:e.x,z:e.z,yaw:e.yaw,trailerYaw:e.trailerYaw,speed:-1};const r=this.rails.map(o=>o.attributes.position),a=this.rails.map(o=>o.attributes.color);for(let o=0;o<=es;o++){const l=yh(t,s),c=Math.sin(l.rot),h=Math.cos(l.rot),u=l.x-c*(l.d/2),d=l.z-h*(l.d/2),f=o*n,g=ca.find(_=>f<_[0])??ca[ca.length-1];this.colour.setHex(g[1]);for(let _=0;_<2;_++){const m=_===0?-1:1,p=h*(l.w/2)*m,b=-c*(l.w/2)*m;for(let w=0;w<2;w++){const v=h*xc*(w?1:-1),T=-c*xc*(w?1:-1);r[_].setXYZ(o*2+w,u+p+v,.02,d+b+T),a[_].setXYZ(o*2+w,this.colour.r,this.colour.g,this.colour.b)}}s=os(t,s,n,e.steer),s.speed=-1}for(let o=0;o<2;o++)r[o].needsUpdate=!0,a[o].needsUpdate=!0,this.rails[o].computeBoundingSphere()}}class I_{constructor(){this.overlay=new Ao,this.ortho=new Io(0,1,1,0,-1,1),this.guides=new D_,this.panels=R_.map(t=>{const e=new zn(64,64,{depthBuffer:!0}),n=new ze(t.fov,t.rect[2]/t.rect[3],.06,260),s=new ye;return s.add(L_(t.rect,856084,.006),P_(t.rect,e.texture)),s.visible=!1,this.overlay.add(s),{...t,target:e,cam:n,group:s,dir:t.dir?new L(...t.dir).normalize():null}})}aim(t,e,n){const s=Math.sin(e.yaw),r=Math.cos(e.yaw);for(const a of this.panels)if(a.kind==="mirror"){const o=n[a.id],l=e.x+o.x*r+o.z*s,c=e.z-o.x*s+o.z*r,h=a.dir;a.cam.up.set(0,1,0),a.cam.position.set(l,o.y,c),a.cam.lookAt(l+(h.x*r+h.z*s)*10,o.y+h.y*10,c+(-h.x*s+h.z*r)*10)}else{const o=yh(t,e),l=Math.sin(o.rot),c=Math.cos(o.rot),h=(t.trailer?t.trailer.height:t.height)*.78,u=o.x-l*(o.d/2-.02),d=o.z-c*(o.d/2-.02);a.cam.up.set(0,1,0),a.cam.position.set(u,h,d),a.cam.lookAt(u-l,0,d-c)}}show({cockpit:t,reversing:e,mirrors:n,camera:s}){for(const r of this.panels)r.group.visible=t&&(r.kind==="mirror"?n:e&&s);return this.panels.some(r=>r.group.visible)}resize(t,e,n){for(const s of this.panels)s.cam.aspect=s.rect[2]*t/(s.rect[3]*e),s.cam.updateProjectionMatrix(),s.target.setSize(Math.max(16,Math.round(t*s.rect[2]*n*_c)),Math.max(16,Math.round(e*s.rect[3]*n*_c)))}draw(t,e){const n=t.shadowMap.autoUpdate,s=t.autoClear;t.shadowMap.autoUpdate=!1;for(const r of this.panels)r.group.visible&&(this.guides.group.visible=r.kind==="reverse",t.setRenderTarget(r.target),t.render(e,r.cam));this.guides.group.visible=!1,t.setRenderTarget(null),t.shadowMap.autoUpdate=n,t.autoClear=!1,t.clearDepth(),t.render(this.overlay,this.ortho),t.autoClear=s}}const er=28800;class U_{constructor(){this.frames=[],this.head=0,this.len=0}clear(){this.head=0,this.len=0}push(t){this.frames[this.head]=t,this.head=(this.head+1)%er,this.len<er&&this.len++}pop(){return this.len?(this.head=(this.head-1+er)%er,this.len--,this.frames[this.head]):null}}const N_=.06,ha=6e3,F_=new Tn({color:1316378,transparent:!0,opacity:.11,depthWrite:!1,side:Ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),vc=.012;class O_{constructor(t){this.spec=t,this.group=new ye,this.count=0,this.last=null;const e=ac(t,{x:0,z:0,yaw:0,trailerYaw:0}).length,n=[];for(let s=0;s<ha-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}this.ribbons=[];for(let s=0;s<e;s++){const r=new ke;r.setAttribute("position",new Ne(new Float32Array(ha*6),3)),r.setIndex(n),r.setDrawRange(0,0),r.boundingSphere=new Gn(new L,1e4),this.ribbons.push(r),this.group.add(new Pt(r,F_))}}clear(){this.count=0,this.last=null;for(const t of this.ribbons)t.setDrawRange(0,0)}truncate(t){this.count=Math.min(this.count,t),this.last=null;for(const e of this.ribbons)e.setDrawRange(0,Math.max(0,this.count-1)*6)}follow(t){if(this.count>=ha||this.last&&Math.hypot(t.x-this.last.x,t.z-this.last.z)<N_)return;this.last={x:t.x,z:t.z};const e=ac(this.spec,t);for(let n=0;n<this.ribbons.length;n++){const s=e[n],r=Math.cos(s.rot)*(s.w/2),a=-Math.sin(s.rot)*(s.w/2),o=this.ribbons[n].attributes.position;o.setXYZ(this.count*2,s.x-r,vc,s.z-a),o.setXYZ(this.count*2+1,s.x+r,vc,s.z+a),o.needsUpdate=!0}this.count++;for(const n of this.ribbons)n.setDrawRange(0,(this.count-1)*6)}dispose(){for(const t of this.ribbons)t.dispose()}}const Ti=.022,nr=.055,B_=.28,ua=900,z_=4e3,k_=4890584,H_=11566824,G_=15250236,Mc=.5;function yc(i,t,e){const n=new ke;n.setAttribute("position",new Ne(new Float32Array(i*2*3),3));const s=[];for(let a=0;a<i-1;a++){const o=a*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}n.setIndex(s),n.setDrawRange(0,0),n.boundingSphere=new Gn(new L,1e5);const r=new Pt(n,new Tn({color:t,transparent:!0,opacity:e,depthWrite:!1,side:Ye,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));return{geometry:n,mesh:r}}class V_{constructor(){this.group=new ye,this.group.visible=!1,this.rings=[],this.spec=null,this.centre=yc(64,G_,Mc),this.group.add(this.centre.mesh)}setSpec(t){if(this.spec===t)return;this.spec=t;for(const n of this.rings)this.group.remove(n.mesh),n.geometry.dispose();const e=vs(t);this.wheels=[];for(const n of e.rear)for(const s of[-1,1])this.wheels.push([s*t.trackWidth/2,n,k_]);for(const n of e.front)for(const s of[-1,1])this.wheels.push([s*t.trackWidth/2,n,H_]);this.rings=this.wheels.map(([,,n])=>yc(ua+1,n,Mc));for(const n of this.rings)this.group.add(n.mesh)}update(t,e,n){this.setSpec(t);const s=Math.tan(e.steer),r=Math.abs(s)<1e-4?1/0:t.wheelbase/s;if(!Number.isFinite(r)||Math.abs(r)>z_){this.group.visible=!1;return}this.group.visible=!0;const a=Math.sin(e.yaw),o=Math.cos(e.yaw),l=e.x+r*o,c=e.z-r*a,h=Math.hypot(n.maxX-n.minX,n.maxZ-n.minZ);for(let u=0;u<this.wheels.length;u++){const[d,f]=this.wheels[u];this.arc(this.rings[u],l,c,Math.hypot(d-r,f),e,h,n)}this.mark(l,c,n)}arc(t,e,n,s,r,a,o){const l=t.geometry.attributes.position;if(s<.05){t.geometry.setDrawRange(0,0);return}const c=Math.atan2(r.z-n,r.x-e),h=Math.min(Math.PI,a*1.1/s),u=Math.min(ua,Math.max(24,Math.ceil(2*h*s/B_))),d=2*h/u;let f=0,g=!0;for(let _=0;_<=u;_++){const m=c-h+_*d,p=Math.cos(m),b=Math.sin(m),w=e+p*s,v=n+b*s;if(w<o.minX||w>o.maxX||v<o.minZ||v>o.maxZ){g=!0;continue}if(g&&f>0&&(l.setXYZ(f*2,w,Ti,v),l.setXYZ(f*2+1,w,Ti,v),f++),g=!1,l.setXYZ(f*2,w+p*nr,Ti,v+b*nr),l.setXYZ(f*2+1,w-p*nr,Ti,v-b*nr),f++,f>ua)break}l.needsUpdate=!0,t.geometry.setDrawRange(0,Math.max(0,f-1)*6)}mark(t,e,n){const s=this.centre.geometry.attributes.position;if(t<n.minX||t>n.maxX||e<n.minZ||e>n.maxZ){this.centre.geometry.setDrawRange(0,0);return}const r=31;for(let a=0;a<=r;a++){const o=a/r*Math.PI*2,l=Math.cos(o),c=Math.sin(o);s.setXYZ(a*2,t+l*.34,Ti,e+c*.34),s.setXYZ(a*2+1,t+l*.22,Ti,e+c*.22)}s.needsUpdate=!0,this.centre.geometry.setDrawRange(0,r*6)}dispose(){for(const t of this.rings)t.geometry.dispose();this.centre.geometry.dispose()}}const W_=12,Rh=.45,Sc=.11,X_=.66,Y_=i=>Sc+(Rh-Sc)*X_**i,q_=14673647,Ch=(i,t)=>new ue({color:i,roughness:.95,metalness:0,transparent:!0,opacity:t,depthWrite:!0}),wc=Ch(15776162,.55);function Ms(i,t,e){if(i.isMesh&&i.userData.inner)return null;const n=i.isMesh?new Pt(i.geometry,e):new ye;n.position.copy(i.position),n.quaternion.copy(i.quaternion),n.scale.copy(i.scale),t.set(i,n);for(const s of i.children){const r=Ms(s,t,e);r&&n.add(r)}return n}class Z_{constructor(t,e){this.spec=t,this.mesh=e,this.group=new ye,this.list=[],this.shown=!1}get count(){return this.list.length}record(t,e,n){const s={at:t,x:e.x,z:e.z,yaw:e.yaw,trailerYaw:e.trailerYaw,steer:n,body:null,trailer:null,material:null};this.list.length>=W_&&this.drop(this.list.shift()),this.list.push(s),this.shown&&(this.build(s),this.refade())}truncate(t){let e=!1;for(;this.list.length&&this.list[this.list.length-1].at>t;)this.drop(this.list.pop()),e=!0;e&&this.refade()}refade(){const t=this.list.length;for(let e=0;e<t;e++){const n=this.list[e];n.material&&(n.material.opacity=Y_(t-1-e))}}build(t){if(t.body)return;const e=new Map;if(t.material=Ch(q_,Rh),t.body=Ms(this.mesh.group,e,t.material),t.body.position.set(t.x,0,t.z),t.body.rotation.y=t.yaw,this.group.add(t.body),this.mesh.trailerGroup){t.trailer=Ms(this.mesh.trailerGroup,e,t.material);const n=Wi(this.spec,t);t.trailer.position.set(n.x,0,n.z),t.trailer.rotation.y=t.trailerYaw,this.group.add(t.trailer)}for(const n of this.mesh.wheels.front)e.get(n)?.rotation.set(0,t.steer,0)}occlude(t){const e=on(this.spec,t);for(const n of this.list){if(!n.body)continue;const s=!No(on(this.spec,n),e,0);n.body.visible=s,n.trailer&&(n.trailer.visible=s)}}setShown(t){if(t!==this.shown){this.shown=t;for(const e of this.list)t?this.build(e):this.unbuild(e);t&&this.refade()}}unbuild(t){t.body&&this.group.remove(t.body),t.trailer&&this.group.remove(t.trailer),t.material?.dispose(),t.body=null,t.trailer=null,t.material=null}drop(t){this.unbuild(t)}clear(){for(const t of this.list)this.unbuild(t);this.list=[]}dispose(){this.clear()}}class $_{constructor(t,e){this.spec=t,this.group=new ye,this.group.visible=!1;const n=new Map;this.body=Ms(e.group,n,wc),this.group.add(this.body),this.trailer=e.trailerGroup?Ms(e.trailerGroup,n,wc):null,this.trailer&&this.group.add(this.trailer),this.wheels=e.wheels.front.map(s=>n.get(s)).filter(Boolean)}show(t,e){if(this.group.visible=!0,this.body.position.set(t.x,0,t.z),this.body.rotation.y=t.yaw,this.trailer){const n=Wi(this.spec,t);this.trailer.position.set(n.x,0,n.z),this.trailer.rotation.y=t.trailerYaw}for(const n of this.wheels)n.rotation.set(0,e,0)}hide(){this.group.visible=!1}dispose(){this.hide()}}const Ph="tight-fit.levels",Lh="tight-fit.level-bests";function Dh(i,t){try{return JSON.parse(localStorage.getItem(i))??t}catch{return t}}function Ih(i,t){try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return!1}}const K_=()=>{const i=Dh(Ph,[]);return Array.isArray(i)?i.filter(t=>t&&t.id&&t.objects):[]},Ai=i=>Ih(Ph,i),J_=()=>Dh(Lh,{}),j_=i=>Ih(Lh,i);function Uh(i,t){const e=i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"level",n=new Set([...t.map(s=>s.id),...sn.map(s=>s.id)]);if(!n.has(e))return e;for(let s=2;;s++)if(!n.has(`${e}-${s}`))return`${e}-${s}`}function Q_(i,t){return{...structuredClone(i),id:Uh(`${i.id}-copy`,t),name:`${i.name} (copy)`,from:i.id}}const Nh=i=>i.from?sn.find(t=>t.id===i.from):null;function tx(i){return{id:Uh("new-level",i),name:"New Level",vehicle:"hatch",theme:"lot",bounds:{minX:-14,maxX:14,minZ:-14,maxZ:6},start:{x:8,z:-2,yaw:-Math.PI/2},target:{x:0,z:-10,w:2.5,d:5,rot:0},objects:[{type:"bays",x:0,z:-10,slots:["hatch",null,"hatch"],w:2.5,d:5},{type:"bays",x:0,z:-2.625,slots:["hatch",null,"hatch"],w:2.5,d:5,rot:Math.PI}],from:null}}const Ec=.1,nn=i=>document.getElementById(i),bc=i=>i*180/Math.PI,Tc=i=>i*Math.PI/180,da=Object.keys(xe);function ex(i){return i.type==="parked"?on(xe[i.spec]??xe.hatch,{x:i.x,z:i.z,yaw:i.rot??0}):i.w==null||i.d==null?null:{x:i.x,z:i.z,w:i.w,d:i.d,rot:i.rot??0}}function Ac(i){const{obstacles:t,paint:e}=Qg(i);return[...t,...e].map(ex).filter(Boolean)}function fa(i,t,e){const n=Math.cos(i.rot),s=Math.sin(i.rot),r=t-i.x,a=e-i.z;return Math.abs(r*n-a*s)<=i.w/2&&Math.abs(r*s+a*n)<=i.d/2}function pa(i,t,e){const n=[];for(const r of i){const a=si(r);for(let o=0;o<4;o++){const l=a[o],c=a[(o+1)%4];n.push(l.x,e,l.z,c.x,e,c.z)}}const s=new ke;return s.setAttribute("position",new Fe(n,3)),new ld(s,new Kc({color:t,transparent:!0,opacity:.95,depthTest:!1,toneMapped:!1}))}const un=(i,t,e=.1)=>({id:i,label:t,kind:"number",step:e}),nx={bounds:[un("minX","west edge",.5),un("maxX","east edge",.5),un("minZ","north edge",.5),un("maxZ","south edge",.5)],start:[un("x","x"),un("z","z"),{id:"yaw",label:"facing",kind:"angle"}],target:[un("x","x"),un("z","z"),un("w","width"),un("d","depth"),{id:"rot",label:"rotation",kind:"angle"}]};class ix{constructor(t){this.d=t,this.level=null,this.sel=null,this.drag=null,this.marks=new ye,this.ghost=null,this.d.scene.add(this.marks),this.height=34,this.pan={x:0,z:0},this.bind()}open(t,e){this.level=t,this.onChange=e,this.sel=null;const n=t.bounds;this.pan={x:(n.minX+n.maxX)/2,z:(n.minZ+n.maxZ)/2},this.height=this.fit(n),this.rebuild(),nn("editor").classList.remove("hidden")}fit(t){const e=this.d.camera,n=Math.tan(e.fov*Math.PI/360),s=(t.maxX-t.minX)*1.12,r=(t.maxZ-t.minZ)*1.12;return Math.max(r,s/e.aspect)/(2*n)}close(){nn("editor").classList.add("hidden"),this.clearMarks()}rebuild(){this.d.world.build(this.level),this.showGhost(),this.mark(),this.renderPanels(),this.onChange?.()}showGhost(){this.ghost&&(this.d.scene.remove(this.ghost.group),this.ghost.trailerGroup&&this.d.scene.remove(this.ghost.trailerGroup));const t=xe[this.level.vehicle]??xe.hatch;this.ghost=Fo(t);const e=this.level.start;this.ghost.group.position.set(e.x,0,e.z),this.ghost.group.rotation.y=e.yaw,this.d.scene.add(this.ghost.group),this.ghost.trailerGroup&&(this.ghost.trailerGroup.position.set(e.x,0,e.z),this.ghost.trailerGroup.rotation.y=e.yaw,this.d.scene.add(this.ghost.trailerGroup))}clearMarks(){for(const t of[...this.marks.children])this.marks.remove(t),t.geometry.dispose()}mark(){this.clearMarks(),this.marks.add(pa([this.boundsRect()],7173505,.03));const t=xe[this.level.vehicle]??xe.hatch;this.marks.add(pa([on(t,{x:this.level.start.x,z:this.level.start.z,yaw:this.level.start.yaw})],4054148,.05));const e=this.selRects();e.length&&this.marks.add(pa(e,16756768,.06))}selRects(){if(this.sel==="bounds")return[this.boundsRect()];if(this.sel==="start"){const t=xe[this.level.vehicle]??xe.hatch;return[on(t,{x:this.level.start.x,z:this.level.start.z,yaw:this.level.start.yaw})]}return this.sel==="target"?[this.level.target]:this.sel&&typeof this.sel=="object"?Ac(this.sel):[]}update(){const t=this.d.camera;t.position.set(this.pan.x,this.height,this.pan.z+.001),t.up.set(0,0,-1),t.lookAt(this.pan.x,0,this.pan.z)}ground(t){const e=this.d.canvas.getBoundingClientRect(),n=new dt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),s=new jd;s.setFromCamera(n,this.d.camera);const r=new L;return s.ray.intersectPlane(new Un(new L(0,1,0),0),r)?r:null}pick(t,e){if(fa(this.level.target,t,e))return"target";const n=xe[this.level.vehicle]??xe.hatch;if(fa(on(n,{x:this.level.start.x,z:this.level.start.z,yaw:this.level.start.yaw}),t,e))return"start";for(let s=this.level.objects.length-1;s>=0;s--){const r=this.level.objects[s];if(Ac(r).some(a=>fa(a,t,e)))return r}return null}bind(){const t=this.d.canvas;t.addEventListener("pointerdown",n=>{if(!this.level||nn("editor").classList.contains("hidden"))return;const s=this.ground(n);if(!s)return;if(n.button!==0||n.shiftKey){this.drag={mode:"pan",x:n.clientX,y:n.clientY,from:{...this.pan}},t.setPointerCapture(n.pointerId);return}const r=this.pick(s.x,s.z);if(this.select(r),r){const a=this.posOf(r);this.drag={mode:"move",grab:{x:s.x-a.x,z:s.z-a.z}},t.setPointerCapture(n.pointerId)}}),t.addEventListener("pointermove",n=>{if(!this.drag)return;if(this.drag.mode==="pan"){const a=this.height/t.clientHeight*1.1;this.pan.x=this.drag.from.x-(n.clientX-this.drag.x)*a,this.pan.z=this.drag.from.z-(n.clientY-this.drag.y)*a;return}const s=this.ground(n);if(!s)return;const r=a=>Math.round(a/Ec)*Ec;this.setPos(this.sel,r(s.x-this.drag.grab.x),r(s.z-this.drag.grab.z)),this.mark(),this.renderFields()});const e=n=>{if(!this.drag)return;const s=this.drag.mode==="move";this.drag=null;try{t.releasePointerCapture(n.pointerId)}catch{}s&&this.rebuild()};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{!this.level||nn("editor").classList.contains("hidden")||(n.preventDefault(),this.height=Math.min(160,Math.max(8,this.height*(n.deltaY>0?1.12:.89))))},{passive:!1}),addEventListener("keydown",n=>{if(!(!this.level||nn("editor").classList.contains("hidden"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="SELECT")&&((n.key==="Delete"||n.key==="Backspace")&&typeof this.sel=="object"&&this.sel&&this.removeSelected(),n.key==="["||n.key==="]")){const s=Tc(n.key==="]"?15:-15),r=this.sel;if(r==="start")this.level.start.yaw+=s;else if(r==="target")this.level.target.rot=(this.level.target.rot??0)+s;else if(r&&typeof r=="object"){if(!Ri[r.type]?.fields.some(a=>a.id==="rot"))return;r.rot=(r.rot??0)+s}else return;this.rebuild()}})}boundsRect(){const t=this.level.bounds;return{x:(t.minX+t.maxX)/2,z:(t.minZ+t.maxZ)/2,w:t.maxX-t.minX,d:t.maxZ-t.minZ,rot:0}}posOf(t){return t==="bounds"?this.level.bounds:t==="start"?this.level.start:t==="target"?this.level.target:t}setPos(t,e,n){const s=this.posOf(t);s.x=+e.toFixed(3),s.z=+n.toFixed(3)}select(t){this.sel=t,this.mark(),this.renderPanels()}removeSelected(){const t=this.level.objects.indexOf(this.sel);t<0||(this.level.objects.splice(t,1),this.sel=null,this.rebuild())}add(t){const e=structuredClone(Ri[t].def??{});t==="parked"&&(e.spec=this.level.vehicle);const n={type:t,x:+this.pan.x.toFixed(2),z:+this.pan.z.toFixed(2),...e};this.level.objects.push(n),this.sel=n,this.rebuild()}renderPanels(){this.renderHeader(),this.renderList(),this.renderFields()}renderHeader(){const t=this.level;nn("ed-name").value=t.name;const e=nn("ed-vehicle");if(!e.options.length)for(const s of da)e.add(new Option(xe[s].name,s));e.value=t.vehicle;const n=nn("ed-theme");if(!n.options.length)for(const s of Object.keys(uo))n.add(new Option(s,s));n.value=t.theme,nn("ed-reset").classList.toggle("hidden",!Nh(t))}renderList(){const t=nn("ed-list");t.innerHTML="";const e=(s,r,a)=>{const o=document.createElement("button");o.className=`ed-row${this.sel===r?" on":""}`,o.innerHTML=`<b>${s}</b>${a?`<span>${a}</span>`:""}`,o.onclick=()=>this.select(r),t.appendChild(o)},n=this.level.bounds;e("Level bounds","bounds",`${(n.maxX-n.minX).toFixed(1)} × ${(n.maxZ-n.minZ).toFixed(1)} m`),e("Start","start",`${this.level.start.x.toFixed(1)}, ${this.level.start.z.toFixed(1)}`),e("Target bay","target",`${this.level.target.w} × ${this.level.target.d}`),this.level.objects.forEach((s,r)=>{const a=Ri[s.type];e(a?a.name:s.type,s,`${r+1} · ${s.x.toFixed(1)}, ${s.z.toFixed(1)}`)})}renderFields(){const t=nn("ed-fields");t.innerHTML="";const e=this.sel;if(!e){t.innerHTML='<p class="ed-hint">Click something in the plan, or add one.</p>';return}const n=this.posOf(e),s=nx[e]??Ri[e.type]?.fields??[];for(const r of s)t.appendChild(this.field(n,r));if(typeof e=="object"){const r=document.createElement("button");r.className="ed-del",r.textContent="Remove this object",r.onclick=()=>this.removeSelected(),t.appendChild(r)}}field(t,e){const n=document.createElement("label");n.className="ed-field",n.innerHTML=`<span>${e.label}</span>`;const s=()=>this.rebuild();if(e.kind==="number"||e.kind==="angle"){const r=document.createElement("input");r.type="number",r.step=e.kind==="angle"?5:e.step;const a=t[e.id]??0;r.value=e.kind==="angle"?bc(a).toFixed(1).replace(/\.0$/,""):a,r.oninput=()=>{const o=Number(r.value);Number.isNaN(o)||(t[e.id]=e.kind==="angle"?Tc(o):o,this.mark())},r.onchange=s,n.appendChild(r)}else if(e.kind==="vehicle"){const r=document.createElement("select");e.empty&&r.add(new Option("— empty —",""));for(const a of da)r.add(new Option(xe[a].name,a));r.value=t[e.id]??"",r.onchange=()=>{t[e.id]=r.value||null,s()},n.appendChild(r)}else if(e.kind==="sides"){const r=document.createElement("div");r.className="ed-set";for(const a of["front","back","left","right"]){const o=document.createElement("button"),l=(t[e.id]??[]).includes(a);o.className=l?"on":"",o.textContent=a,o.onclick=()=>{const c=new Set(t[e.id]??[]);c.has(a)?c.delete(a):c.add(a),t[e.id]=[...c],s()},r.appendChild(o)}n.appendChild(r)}else if(e.kind==="slots"){const r=document.createElement("div");r.className="ed-slots";const a=t[e.id]??[];a.forEach((c,h)=>{const u=document.createElement("select");if(u.add(new Option("empty","")),e.of==="trailer")u.add(new Option("trailer","trailer"));else for(const d of da)u.add(new Option(xe[d].name,d));u.value=c??"",u.onchange=()=>{a[h]=u.value||null,s()},r.appendChild(u)});const o=document.createElement("button");o.textContent="−",o.onclick=()=>{a.pop(),s()};const l=document.createElement("button");l.textContent="+",l.onclick=()=>{a.push(null),s()},r.append(o,l),n.appendChild(r)}return n}code(){const t=this.level,e=o=>Number.isInteger(o)?String(o):String(+Number(o).toFixed(3)),n=o=>{const l=o/Math.PI,c={0:"0",1:"Math.PI","-1":"-Math.PI",.5:"P2","-0.5":"-P2"},h=+l.toFixed(6);return c[h]??`(${+bc(o).toFixed(2)} * Math.PI) / 180`},s=(o,l)=>o==="rot"||o==="yaw"?n(l):l===null?"null":typeof l=="string"?`'${l}'`:Array.isArray(l)?`[${l.map(c=>s("",c)).join(", ")}]`:e(l),r=o=>{const l=Ri[o.type]??{args:["x","z"],opts:!0},c=l.args.map(d=>s(d,o[d])),h=Object.entries(o).filter(([d])=>d!=="type"&&!l.args.includes(d)).filter(([d,f])=>!(d==="rot"&&!f)),u=l.opts&&h.length?`, { ${h.map(([d,f])=>`${d}: ${s(d,f)}`).join(", ")} }`:"";return`      ${l.fn??o.type}(${c.join(", ")}${u}),`},a=t.bounds;return`  {
    id: '${t.id}',
    name: '${t.name}',
    vehicle: '${t.vehicle}',
    theme: '${t.theme}',
    bounds: { minX: ${e(a.minX)}, maxX: ${e(a.maxX)}, minZ: ${e(a.minZ)}, maxZ: ${e(a.maxZ)} },
    start: { x: ${e(t.start.x)}, z: ${e(t.start.z)}, yaw: ${n(t.start.yaw)} },
    target: { x: ${e(t.target.x)}, z: ${e(t.target.z)}, w: ${e(t.target.w)}, d: ${e(t.target.d)}, rot: ${n(t.target.rot??0)} },
    objects: [
${t.objects.map(r).join(`
`)}
    ],
  },`}}const Fh="tight-fit.v5",ns=1/120,Rc=3;function sx(){try{const i=JSON.parse(localStorage.getItem(Fh));if(i&&typeof i.unlocked=="number")return{unlocked:i.unlocked,best:i.best??{}}}catch{}return{unlocked:0,best:{}}}const Cc=(i,t)=>i.trailer?Math.abs(xs(t.yaw-t.trailerYaw)):0;class rx{constructor(){this.canvas=document.getElementById("scene"),this.renderer=new Fg({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Lc,this.renderer.toneMapping=Dc,this.renderer.toneMappingExposure=.95,this.scene=new Ao;const t=new oo(this.renderer);this.scene.environment=t.fromScene(new Og,.04).texture,t.dispose(),this.camera=new ze(52,1,.1,400),this.rig=new y_(this.camera),this.panels=new I_,this.world=new g_(this.scene),this.scene.add(this.panels.guides.group),this.input=new S_,this.pad=new x_,this.sfx=new w_,this.progress=sx(),this.userLevels=K_(),this.userBests=J_(),this.userLevel=null,this.settings=b_(),this.gains=gc(this.settings),this.hud=new A_({play:e=>this.play(e),next:()=>this.next(),restart:()=>{this.restart(),this.hud.showGame(),this.state="playing"},resume:()=>this.setPaused(!1),toMenu:()=>this.toMenu(),unlockAll:()=>{this.progress.unlocked=sn.length-1,this.save(),this.hud.renderMenu(this.progress,this.userLevels,this.userBests)},wipe:()=>{this.progress={unlocked:0,best:{}},this.save(),this.hud.renderMenu(this.progress,this.userLevels,this.userBests)},playUser:e=>this.playUser(e),edit:e=>this.edit(e),newLevel:()=>this.edit(null),copyLevel:e=>{const n=Q_(sn[e],this.userLevels);this.userLevels.push(n),Ai(this.userLevels),this.edit(n.id)},openSettings:()=>this.openSettings(),closeSettings:()=>this.closeSettings(),setSetting:(e,n)=>{this.settings[e]=n,T_(this.settings),this.gains=gc(this.settings),this.traces&&(this.traces.group.visible=this.settings.traces==="on"),this.ghosts&&this.ghosts.setShown(this.settings.ghosts==="on"),this.hud.renderSettings(this.settings),this.hud.setSteerMode(this.settings.steering)}}),this.state="menu",this.index=0,this.navIndex=0,this.navLatch=0,this.padSeen=!0,this.padWasConnected=!1,this.carMesh=null,this.circles=null,this.traces=null,this.ghosts=null,this.contactGhost=null,this.vehicle=null,this.clock=new Jd,this.accum=0,this.tape=new U_,this.rewinding=!1,this.reversing=!1,addEventListener("resize",()=>this.resize()),addEventListener("blur",()=>{this.state==="playing"&&this.setPaused(!0)}),this.resize(),this.hud.showMenu(this.progress,this.userLevels,this.userBests),this.hud.setSteerMode(this.settings.steering),this.renderer.setAnimationLoop(()=>this.frame())}save(){try{localStorage.setItem(Fh,JSON.stringify(this.progress))}catch{}}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.panels.resize(t,e,this.renderer.getPixelRatio())}play(t){this.index=t,this.userLevel=null,this.start(sn[t])}playUser(t){const e=this.userLevels.find(n=>n.id===t);e&&(this.index=-1,this.userLevel=e,this.start(e))}start(t){this.level=t,this.spec=xe[this.level.vehicle]??xe.hatch,this.world.build(this.level),this.clearPlayfield(),this.traces=new O_(this.spec),this.traces.group.visible=this.settings.traces==="on",this.scene.add(this.traces.group),this.circles||(this.circles=new V_,this.scene.add(this.circles.group)),this.carMesh=Fo(this.spec),this.scene.add(this.carMesh.group),this.carMesh.trailerGroup&&this.scene.add(this.carMesh.trailerGroup),this.ghosts=new Z_(this.spec,this.carMesh),this.ghosts.setShown(this.settings.ghosts==="on"),this.scene.add(this.ghosts.group),this.contactGhost=new $_(this.spec,this.carMesh),this.scene.add(this.contactGhost.group),this.vehicle=new Wg(this.spec),this.hud.setLevel(this.index,this.level,this.bestOf(this.level)),this.restart(),this.hud.showGame(),this.state="playing",this.sfx.ensure()}clearPlayfield(){this.carMesh&&(this.scene.remove(this.carMesh.group),this.carMesh.trailerGroup&&this.scene.remove(this.carMesh.trailerGroup),this.carMesh=null),this.traces&&(this.scene.remove(this.traces.group),this.traces.dispose(),this.traces=null),this.ghosts&&(this.scene.remove(this.ghosts.group),this.ghosts.dispose(),this.ghosts=null),this.contactGhost&&(this.scene.remove(this.contactGhost.group),this.contactGhost.dispose(),this.contactGhost=null),this.circles&&(this.circles.group.visible=!1),this.panels.show({cockpit:!1,reversing:!1,mirrors:!1,camera:!1}),this.anyPanel=!1,this.vehicle=null}restart(){const t=this.level.start;this.vehicle.reset(t.x,t.z,t.yaw),this.collisions=0,this.shunts=0,this.lastDir=0,this.strokeSteer=0,this.canFinish=!1,this.inside=!1,this.touching=!1,this.foldAt=null,this.tape.clear(),this.traces.clear(),this.ghosts.clear(),this.rewinding=!1,this.rig.reset(this.level.theme,this.spec),this.hud.update(this.telemetry(this.nearestGap()))}next(){if(this.userLevel||this.index+1>=sn.length)return this.toMenu();this.play(this.index+1)}bestOf(t){return this.userLevel?this.userBests[t.id]:this.progress.best[t.id]}toMenu(){this.state="menu",this.userLevel=null,this.clearPlayfield(),this.editor&&this.editor.close(),this.hud.showMenu(this.progress,this.userLevels,this.userBests)}edit(t){this.editor||(this.editor=new ix({scene:this.scene,camera:this.camera,canvas:this.canvas,world:this.world}),this.wireEditor());let e=this.userLevels.find(n=>n.id===t);e||(e=tx(this.userLevels),this.userLevels.push(e)),this.editing=e,this.state="editing",this.clearPlayfield(),this.hud.showEditor(),this.editor.open(e,()=>Ai(this.userLevels))}wireEditor(){const t=this.editor;document.getElementById("ed-name").oninput=n=>{this.editing.name=n.target.value,Ai(this.userLevels),t.renderList()},document.getElementById("ed-vehicle").onchange=n=>{this.editing.vehicle=n.target.value,t.rebuild()},document.getElementById("ed-theme").onchange=n=>{this.editing.theme=n.target.value,t.rebuild()},document.getElementById("ed-play").onclick=()=>{t.close(),this.playUser(this.editing.id)},document.getElementById("ed-done").onclick=()=>this.toMenu(),document.getElementById("ed-delete").onclick=()=>{this.userLevels=this.userLevels.filter(n=>n!==this.editing),Ai(this.userLevels),this.toMenu()},document.getElementById("ed-reset").onclick=()=>{const n=Nh(this.editing);if(!n)return;const s={id:this.editing.id,name:this.editing.name,from:this.editing.from};Object.assign(this.editing,structuredClone(n),s),Ai(this.userLevels),t.open(this.editing,()=>Ai(this.userLevels))},document.getElementById("ed-export").onclick=()=>{document.getElementById("ed-code").value=t.code(),document.getElementById("ed-export-box").classList.remove("hidden")},document.getElementById("ed-export-close").onclick=()=>document.getElementById("ed-export-box").classList.add("hidden"),document.getElementById("ed-copy").onclick=()=>{const n=document.getElementById("ed-code");n.select(),navigator.clipboard?.writeText(n.value),this.hud.toast("level code copied")};const e=document.getElementById("ed-add");for(const[n,s]of Object.entries(Ri)){const r=document.createElement("button");r.textContent=s.name,r.onclick=()=>t.add(n),e.appendChild(r)}}openSettings(){this.state!=="settings"&&(this.settingsFrom=this.state,this.state="settings",this.hud.showSettings(this.settings,!0))}closeSettings(){this.state==="settings"&&(this.hud.showSettings(this.settings,!1),this.state=this.settingsFrom)}setPaused(t){t&&this.state==="playing"?(this.state="paused",this.hud.showPause(!0)):!t&&this.state==="paused"&&(this.state="playing",this.hud.showPause(!1))}isFree(t){if(t.jackknifed)return!1;for(const e of this.vehicle.rects(t)){if(!sc(e,this.world.arena))return!1;for(const n of this.world.colliders)if(No(e,n,-.015))return!1}return!0}contactPose(){const t=this.vehicle,e=this.reversing?-1:1,n=Math.tan(t.steer),s=Math.abs(n)<1e-4?1/0:this.spec.wheelbase/n,r=this.level.bounds,a=Math.hypot(r.maxX-r.minX,r.maxZ-r.minZ),o=Math.min(Number.isFinite(s)?2*Math.PI*Math.abs(s):a,a*2),l=.12;let c={x:t.x,z:t.z,yaw:t.yaw,trailerYaw:t.trailerYaw,speed:e};for(let h=0;h<o;h+=l){const u=os(this.spec,c,l,t.steer);if(u.speed=e,this.isFree(u)){c=u;continue}let d=0,f=l;for(let g=0;g<6;g++){const _=(d+f)/2,m=os(this.spec,c,_,t.steer);m.speed=e,this.isFree(m)?d=_:f=_}return h+d<.08?null:os(this.spec,c,d,t.steer)}return null}parkRect(t=this.vehicle){return this.world.target.part==="trailer"?ws(this.spec,t):this.vehicle.body(t)}record(){const t=this.vehicle;this.tape.push({x:t.x,z:t.z,yaw:t.yaw,trailerYaw:t.trailerYaw,speed:t.speed,steer:t.steer,wheelSpin:t.wheelSpin,shunts:this.shunts,collisions:this.collisions,lastDir:this.lastDir,strokeSteer:this.strokeSteer,touching:this.touching,canFinish:this.canFinish,inside:this.inside,trace:this.traces.count,foldAt:this.foldAt})}restore(t){if(!t)return!1;const e=this.vehicle;return e.x=t.x,e.z=t.z,e.yaw=t.yaw,e.trailerYaw=t.trailerYaw,e.speed=t.speed,e.steer=t.steer,e.wheelSpin=t.wheelSpin,e.braking=!1,this.shunts=t.shunts,this.collisions=t.collisions,this.lastDir=t.lastDir,this.strokeSteer=t.strokeSteer,this.touching=t.touching,this.foldAt=t.foldAt,this.canFinish=t.canFinish,this.inside=t.inside,this.traces.truncate(t.trace),this.ghosts.truncate(t.shunts),!0}stepRewind(t){this.accum+=t*Rc;let e=0;for(;this.accum>=ns&&e<12*Rc&&(this.accum-=ns,e++,!!this.restore(this.tape.pop())););}stepPhysics(t,e){const n=this.vehicle;this.record(),n.control(t,e);const s=n.speed>.2?1:n.speed<-.2?-1:0;if(s&&(this.lastDir&&s!==this.lastDir&&(this.shunts++,this.ghosts.record(this.shunts,n,this.strokeSteer)),this.lastDir=s,this.strokeSteer=n.steer),n.speed===0)return;const r=Math.abs(n.speed)*t,a=Xe(Math.ceil(r/.03),1,6),o=t/a;let l=!1,c=!1;for(let h=0;h<a;h++){const u=n.integrate(n.state,o);if(this.isFree(u)){n.state=u;continue}c=!!u.jackknifed;let d=0,f=1;for(let g=0;g<5;g++){const _=(d+f)/2;this.isFree(n.integrate(n.state,o*_))?d=_:f=_}d>0&&(n.state=n.integrate(n.state,o*d)),l=!0,this.onContact(Math.abs(n.speed)),n.speed=0;break}c?this.foldAt=Cc(this.spec,n.state):this.foldAt!==null&&Cc(this.spec,n.state)<this.foldAt&&(this.foldAt=null),this.touching=l||this.foldAt!==null,this.traces.follow(n.state)}onContact(t){this.touching||(this.collisions++,this.sfx.bump(Xe(t/2.5,.05,1)),this.pad.rumble(Xe(t/2.2,.15,1),t>.6?220:110),this.hud.flash(t>.6?.1+t*.05:.05))}nearestGap(){let t=1/0;const e=this.world.arena;for(const n of this.vehicle.rects()){for(const s of this.world.colliders){const r=zg(n,s);r<t&&(t=r)}for(const s of si(n))t=Math.min(t,s.x-(e.x-e.w/2),e.x+e.w/2-s.x,s.z-(e.z-e.d/2),e.z+e.d/2-s.z)}return Math.max(0,t)}telemetry(t){const e=this.vehicle;return{shunts:this.shunts,collisions:this.collisions,gap:t,steer:e.steer/this.spec.maxSteer,rewinding:this.rewinding,tape:this.tape.len/120,radar:this.rig.mode!=="cockpit"&&this.settings.radar==="on",canFinish:this.canFinish,articulation:e.articulation,maxArticulation:this.spec.trailer?this.spec.trailer.maxAngle:0}}checkParked(){this.inside=sc(this.parkRect(),this.world.target,.02),this.canFinish=this.inside&&Math.abs(this.vehicle.speed)<.25}finish(){this.state="won",this.sfx.win();const t=this.level.id,e=this.userLevel?this.userBests:this.progress.best,n=e[t],s=this.collisions===0,r=s&&(!n||this.shunts<n.shunts);r&&(e[t]={shunts:this.shunts}),!this.userLevel&&this.index===this.progress.unlocked&&(this.progress.unlocked=Math.min(sn.length-1,this.index+1)),this.userLevel?j_(this.userBests):this.save();const a=s?{clean:!0,label:"counts",kicker:"parked"}:{clean:!1,label:"void",kicker:"parked, but you hit something"},o=[];if(!s){const l=this.collisions;o.push(`${l} collision${l===1?"":"s"}, so this run does not count.`)}r&&n?o.push("New best."):n?o.push(`Your best is ${n.shunts}.`):s||o.push("No clean run on this level yet."),this.hud.showResult({level:this.level,shunts:this.shunts,collisions:this.collisions,rank:a,note:o.join(" ")||"Textbook.",isLast:!!this.userLevel||this.index+1>=sn.length})}navButtons(){const t=this.hud.el,e=t.menu.classList.contains("hidden")?t.result.classList.contains("hidden")?t.settings.classList.contains("hidden")?t.pause.classList.contains("hidden")?null:t.pause:t.settings:t.result:t.menu;return e?[...e.querySelectorAll("button:not(:disabled)")]:[]}padMenu(){const t=this.navButtons();if(!t.length)return;t.includes(document.activeElement)||(this.navIndex=Math.min(this.navIndex,t.length-1),t[this.navIndex].focus());let e=0;(this.pad.tapped(ve.RIGHT)||this.pad.tapped(ve.DOWN))&&(e=1),(this.pad.tapped(ve.LEFT)||this.pad.tapped(ve.UP))&&(e=-1);const n=this.pad.pad?.axes[0]??0,s=this.pad.pad?.axes[1]??0,r=Math.abs(n)>.6?Math.sign(n):Math.abs(s)>.6?Math.sign(s):0;if(r&&!this.navLatch&&(e=r),this.navLatch=r!==0,e&&(this.navIndex=(t.indexOf(document.activeElement)+e+t.length)%t.length,t[this.navIndex].focus(),this.sfx.click()),this.pad.tapped(ve.A)){const a=t.indexOf(document.activeElement);a>=0&&(this.navIndex=a),t[a>=0?a:this.navIndex].click()}this.pad.tapped(ve.B)&&(this.state==="settings"?this.closeSettings():this.state==="paused"&&this.setPaused(!1))}frame(){const t=Math.min(this.clock.getDelta(),.1),e=this.input;this.pad.poll(),this.pad.connected&&!this.padWasConnected&&this.hud.toast("controller connected"),this.padWasConnected=this.pad.connected;const n=this.pad.driving(),s=this.pad.tappedSet.size>0||!!(n&&(n.throttle||n.steer||n.brake||n.crawl)),r=e.keys.size>0||e.tapped.size>0;if(s!==r&&s!==this.padSeen&&(this.padSeen=s,this.hud.setPadMode(s)),this.state==="editing"){this.editor.update(),this.renderer.render(this.scene,this.camera),e.endFrame();return}if((e.pressed("Escape")||this.pad.tapped(ve.START))&&(this.state==="settings"?this.closeSettings():this.state==="playing"?this.setPaused(!0):this.state==="paused"&&this.setPaused(!1)),(this.state==="playing"||this.state==="paused"||this.state==="won")&&((e.pressed("KeyR")||this.pad.tapped(ve.Y))&&(this.restart(),this.hud.showGame(),this.state="playing"),(e.pressed("KeyC")||this.pad.tapped(ve.RB))&&this.hud.toast(`view: ${this.rig.cycle()}`),(e.pressed("KeyM")||this.pad.tapped(ve.LS))&&(this.sfx.muted=!this.sfx.muted,this.hud.toast(this.sfx.muted?"muted":"sound on")),this.rig.handleInput(e,this.pad,t)),this.state!=="playing"&&this.pad.connected&&this.padMenu(),this.state==="playing"){const a=e.driving(),o=n?{throttle:Math.abs(n.throttle)>Math.abs(a.throttle)?n.throttle:a.throttle,steer:Math.abs(n.steer)>Math.abs(a.steer)?n.steer:a.steer,brake:a.brake||n.brake,crawl:a.crawl||n.crawl}:a;if(o.steerMode=this.settings.steering,o.throttleMode=this.settings.throttle,o.gains=this.gains,this.rewinding=(a.rewind||this.pad.button(ve.X))&&this.tape.len>0,this.rewinding)this.stepRewind(t);else{this.accum+=t;let h=0;for(;this.accum>=ns&&h<12;)this.accum-=ns,h++,this.stepPhysics(ns,o),this.checkParked()}this.canFinish&&(e.pressed("Enter")||this.pad.tapped(ve.B))&&this.finish(),this.reversing=this.vehicle.speed<-.02||o.throttle<-.1;const l=this.nearestGap();this.rig.mode!=="cockpit"&&this.settings.radar==="on"&&this.sfx.sensor(l,performance.now()/1e3),this.hud.update(this.telemetry(l))}if(this.vehicle){const a=this.vehicle;if(this.carMesh.group.position.set(a.x,0,a.z),this.carMesh.group.rotation.y=a.yaw,this.carMesh.trailerGroup){const l=this.vehicle.trailerAxleWorld();this.carMesh.trailerGroup.position.set(l.x,0,l.z),this.carMesh.trailerGroup.rotation.y=a.trailerYaw}this.settings.turnCircles==="on"?this.circles.update(this.spec,a,this.level.bounds):this.circles.group.visible=!1,this.ghosts.group.visible=this.rig.mode!=="cockpit",this.ghosts.occlude(a);const o=this.settings.turnCircles==="on"&&this.settings.firstContact==="on"&&this.rig.mode!=="cockpit"?this.contactPose():null;o?this.contactGhost.show(o,a.steer):this.contactGhost.hide(),d_(this.carMesh,this.spec,{steer:a.steer,spin:a.wheelSpin,braking:a.braking,reversing:a.speed<-.05}),this.rig.update(t,a,this.spec,this.carMesh.view),this.anyPanel=this.panels.show({cockpit:this.rig.mode==="cockpit",reversing:this.reversing,mirrors:this.settings.mirrors==="on",camera:this.settings.reverseCam==="on"}),this.anyPanel&&this.panels.aim(this.spec,a,this.carMesh.view),this.anyPanel&&this.reversing&&this.rig.mode==="cockpit"&&this.settings.reverseCam==="on"&&this.panels.guides.update(this.spec,a),this.world.animateTarget(performance.now()/1e3,this.inside)}this.renderer.render(this.scene,this.camera),this.vehicle&&this.anyPanel&&this.panels.draw(this.renderer,this.scene),e.endFrame()}}new rx;

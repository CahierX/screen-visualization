define(["exports","./when-54c2dc71","./Check-6c0211bc","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./WebGLConstants-76bb35d1"],function(t,a,e,x,L,n){"use strict";var r=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});function w(t,e,n,r){this[0]=a.defaultValue(t,0),this[1]=a.defaultValue(n,0),this[2]=a.defaultValue(e,0),this[3]=a.defaultValue(r,0)}w.packedLength=4,w.pack=function(t,e,n){return n=a.defaultValue(n,0),e[n++]=t[0],e[n++]=t[1],e[n++]=t[2],e[n++]=t[3],e},w.unpack=function(t,e,n){return e=a.defaultValue(e,0),a.defined(n)||(n=new w),n[0]=t[e++],n[1]=t[e++],n[2]=t[e++],n[3]=t[e++],n},w.clone=function(t,e){if(a.defined(t))return a.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):new w(t[0],t[2],t[1],t[3])},w.fromArray=function(t,e,n){return e=a.defaultValue(e,0),a.defined(n)||(n=new w),n[0]=t[e],n[1]=t[e+1],n[2]=t[e+2],n[3]=t[e+3],n},w.fromColumnMajorArray=function(t,e){return w.clone(t,e)},w.fromRowMajorArray=function(t,e){return a.defined(e)?(e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3],e):new w(t[0],t[1],t[2],t[3])},w.fromScale=function(t,e){return a.defined(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=t.y,e):new w(t.x,0,0,t.y)},w.fromUniformScale=function(t,e){return a.defined(e)?(e[0]=t,e[1]=0,e[2]=0,e[3]=t,e):new w(t,0,0,t)},w.fromRotation=function(t,e){var n=Math.cos(t),t=Math.sin(t);return a.defined(e)?(e[0]=n,e[1]=t,e[2]=-t,e[3]=n,e):new w(n,-t,t,n)},w.toArray=function(t,e){return a.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):[t[0],t[1],t[2],t[3]]},w.getElementIndex=function(t,e){return 2*t+e},w.getColumn=function(t,e,n){var r=2*e,e=t[r],r=t[1+r];return n.x=e,n.y=r,n},w.setColumn=function(t,e,n,r){e*=2;return(r=w.clone(t,r))[e]=n.x,r[1+e]=n.y,r},w.getRow=function(t,e,n){var r=t[e],e=t[e+2];return n.x=r,n.y=e,n},w.setRow=function(t,e,n,r){return(r=w.clone(t,r))[e]=n.x,r[e+2]=n.y,r};var i=new x.Cartesian2;w.getScale=function(t,e){return e.x=x.Cartesian2.magnitude(x.Cartesian2.fromElements(t[0],t[1],i)),e.y=x.Cartesian2.magnitude(x.Cartesian2.fromElements(t[2],t[3],i)),e};var u=new x.Cartesian2;w.getMaximumScale=function(t){return w.getScale(t,u),x.Cartesian2.maximumComponent(u)},w.multiply=function(t,e,n){var r=t[0]*e[0]+t[2]*e[1],a=t[0]*e[2]+t[2]*e[3],i=t[1]*e[0]+t[3]*e[1],e=t[1]*e[2]+t[3]*e[3];return n[0]=r,n[1]=i,n[2]=a,n[3]=e,n},w.add=function(t,e,n){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n},w.subtract=function(t,e,n){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n},w.multiplyByVector=function(t,e,n){var r=t[0]*e.x+t[2]*e.y,e=t[1]*e.x+t[3]*e.y;return n.x=r,n.y=e,n},w.multiplyByScalar=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n},w.multiplyByScale=function(t,e,n){return n[0]=t[0]*e.x,n[1]=t[1]*e.x,n[2]=t[2]*e.y,n[3]=t[3]*e.y,n},w.negate=function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},w.transpose=function(t,e){var n=t[0],r=t[2],a=t[1],t=t[3];return e[0]=n,e[1]=r,e[2]=a,e[3]=t,e},w.abs=function(t,e){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e[3]=Math.abs(t[3]),e},w.equals=function(t,e){return t===e||a.defined(t)&&a.defined(e)&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},w.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]},w.equalsEpsilon=function(t,e,n){return n=a.defaultValue(n,0),t===e||a.defined(t)&&a.defined(e)&&Math.abs(t[0]-e[0])<=n&&Math.abs(t[1]-e[1])<=n&&Math.abs(t[2]-e[2])<=n&&Math.abs(t[3]-e[3])<=n},w.IDENTITY=Object.freeze(new w(1,0,0,1)),w.ZERO=Object.freeze(new w(0,0,0,0)),w.COLUMN0ROW0=0,w.COLUMN0ROW1=1,w.COLUMN1ROW0=2,w.COLUMN1ROW1=3,Object.defineProperties(w.prototype,{length:{get:function(){return w.packedLength}}}),w.prototype.clone=function(t){return w.clone(this,t)},w.prototype.equals=function(t){return w.equals(this,t)},w.prototype.equalsEpsilon=function(t,e){return w.equalsEpsilon(this,t,e)},w.prototype.toString=function(){return"("+this[0]+", "+this[2]+")\n("+this[1]+", "+this[3]+")"};var o={POINTS:n.WebGLConstants.POINTS,LINES:n.WebGLConstants.LINES,LINE_LOOP:n.WebGLConstants.LINE_LOOP,LINE_STRIP:n.WebGLConstants.LINE_STRIP,TRIANGLES:n.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:n.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:n.WebGLConstants.TRIANGLE_FAN,validate:function(t){return t===o.POINTS||t===o.LINES||t===o.LINE_LOOP||t===o.LINE_STRIP||t===o.TRIANGLES||t===o.TRIANGLE_STRIP||t===o.TRIANGLE_FAN}},s=Object.freeze(o);function f(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=a.defaultValue(t.primitiveType,s.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=a.defaultValue(t.geometryType,r.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}f.computeNumberOfVertices=function(t){var e,n,r=-1;for(e in t.attributes)t.attributes.hasOwnProperty(e)&&a.defined(t.attributes[e])&&a.defined(t.attributes[e].values)&&(r=(n=t.attributes[e]).values.length/n.componentsPerAttribute);return r};var g=new x.Cartographic,S=new x.Cartesian3,A=new L.Matrix4,O=[new x.Cartographic,new x.Cartographic,new x.Cartographic],M=[new x.Cartesian2,new x.Cartesian2,new x.Cartesian2],R=[new x.Cartesian2,new x.Cartesian2,new x.Cartesian2],v=new x.Cartesian3,V=new L.Quaternion,P=new L.Matrix4,G=new w;f._textureCoordinateRotationPoints=function(t,e,n,r){var a=x.Rectangle.center(r,g),i=x.Cartographic.toCartesian(a,n,S),a=L.Transforms.eastNorthUpToFixedFrame(i,n,A),u=L.Matrix4.inverse(a,A),o=M,s=O;s[0].longitude=r.west,s[0].latitude=r.south,s[1].longitude=r.west,s[1].latitude=r.north,s[2].longitude=r.east,s[2].latitude=r.south;for(var f=v,c=0;c<3;c++)x.Cartographic.toCartesian(s[c],n,f),f=L.Matrix4.multiplyByPointAsVector(u,f,f),o[c].x=f.x,o[c].y=f.y;var i=L.Quaternion.fromAxisAngle(x.Cartesian3.UNIT_Z,-e,V),l=L.Matrix3.fromQuaternion(i,P),d=t.length,y=Number.POSITIVE_INFINITY,m=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(c=0;c<d;c++)f=L.Matrix4.multiplyByPointAsVector(u,t[c],f),f=L.Matrix3.multiplyByVector(l,f,f),y=Math.min(y,f.x),m=Math.min(m,f.y),p=Math.max(p,f.x),h=Math.max(h,f.y);var N=w.fromRotation(e,G),I=R;I[0].x=y,I[0].y=m,I[1].x=y,I[1].y=h,I[2].x=p,I[2].y=m;var C=o[0],b=o[2].x-C.x,T=o[1].y-C.y;for(c=0;c<3;c++){var E=I[c];w.multiplyByVector(N,E,E),E.x=(E.x-C.x)/b,E.y=(E.y-C.y)/T}a=I[0],r=I[1],i=I[2],e=new Array(6);return x.Cartesian2.pack(a,e),x.Cartesian2.pack(r,e,2),x.Cartesian2.pack(i,e,4),e},t.Geometry=f,t.GeometryAttribute=function(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=a.defaultValue(t.normalize,!1),this.values=t.values},t.GeometryType=r,t.Matrix2=w,t.PrimitiveType=s});

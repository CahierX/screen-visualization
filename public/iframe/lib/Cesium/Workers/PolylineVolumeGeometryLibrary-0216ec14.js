define(["exports","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./EllipsoidTangentPlane-c3f203b0","./PolylinePipeline-7685bebd"],function(a,O,N,p,d,V){"use strict";var G=Object.freeze({ROUNDED:0,MITERED:1,BEVELED:2}),R=[new N.Cartesian3,new N.Cartesian3],I=new N.Cartesian3,L=new N.Cartesian3,j=new N.Cartesian3,Q=new N.Cartesian3,F=new N.Cartesian3,U=new N.Cartesian3,_=new N.Cartesian3,q=new N.Cartesian3,Y=new N.Cartesian3,Z=new N.Cartesian3,g=new N.Cartesian3,k={},H=new N.Cartographic;function J(a,e,r,n){var t=a[0],a=a[1],a=N.Cartesian3.angleBetween(t,a),i=Math.ceil(a/n),s=new Array(i);if(e===r){for(l=0;l<i;l++)s[l]=e;return s.push(r),s}for(var o=(r-e)/i,l=1;l<i;l++){var C=e+l*o;s[l]=C}return s[0]=e,s.push(r),s}var m=new N.Cartesian3,f=new N.Cartesian3;var w=new N.Cartesian3(-1,0,0),h=new p.Matrix4,v=new p.Matrix4,x=new p.Matrix3,P=p.Matrix3.IDENTITY.clone(),E=new N.Cartesian3,M=new p.Cartesian4,T=new N.Cartesian3;function K(a,e,r,n,t,i,s,o){var l=E,C=M;h=p.Transforms.eastNorthUpToFixedFrame(a,t,h),l=p.Matrix4.multiplyByPointAsVector(h,w,l),l=N.Cartesian3.normalize(l,l);l=l,e=e,a=a,t=t,t=new d.EllipsoidTangentPlane(a,t),l=t.projectPointOntoPlane(N.Cartesian3.add(a,l,m),m),a=t.projectPointOntoPlane(N.Cartesian3.add(a,e,f),f),e=N.Cartesian2.angleBetween(l,a),e=0<=a.x*l.y-a.y*l.x?-e:e;x=p.Matrix3.fromRotationZ(e,x),T.z=i,h=p.Matrix4.multiplyTransformation(h,p.Matrix4.fromRotationTranslation(x,T,v),h);var c=P;c[0]=s;for(var u=0;u<o;u++)for(var y=0;y<r.length;y+=3)C=N.Cartesian3.fromArray(r,y,C),C=p.Matrix3.multiplyByVector(c,C,C),C=p.Matrix4.multiplyByPoint(h,C,C),n.push(C.x,C.y,C.z);return n}var l=new N.Cartesian3;function W(a,e,r,n,t,i,s){for(var o=0;o<a.length;o+=3)n=K(N.Cartesian3.fromArray(a,o,l),e,r,n,t,i[o/3],s,1);return n}function X(a,e){for(var r=a.length,n=new Array(3*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=0;o<r;o++)n[t++]=a[o].x-i,n[t++]=0,n[t++]=a[o].y-s;return n}var B=new p.Quaternion,b=new N.Cartesian3,z=new p.Matrix3;function $(a,e,r,n,t,i,s,o,l,C){var c,u=N.Cartesian3.angleBetween(N.Cartesian3.subtract(e,a,Z),N.Cartesian3.subtract(r,a,g)),y=n===G.BEVELED?0:Math.ceil(u/O.CesiumMath.toRadians(5)),d=t?p.Matrix3.fromQuaternion(p.Quaternion.fromAxisAngle(N.Cartesian3.negate(a,Z),u/(y+1),B),z):p.Matrix3.fromQuaternion(p.Quaternion.fromAxisAngle(a,u/(y+1),B),z);if(e=N.Cartesian3.clone(e,b),0<y)for(var m=C?2:1,f=0;f<y;f++)e=p.Matrix3.multiplyByVector(d,e,e),c=N.Cartesian3.subtract(e,a,Z),c=N.Cartesian3.normalize(c,c),t||(c=N.Cartesian3.negate(c,c)),s=K(i.scaleToGeodeticSurface(e,g),c,o,s,i,l,1,m);else c=N.Cartesian3.subtract(e,a,Z),c=N.Cartesian3.normalize(c,c),t||(c=N.Cartesian3.negate(c,c)),s=K(i.scaleToGeodeticSurface(e,g),c,o,s,i,l,1,1),r=N.Cartesian3.clone(r,b),c=N.Cartesian3.subtract(r,a,Z),c=N.Cartesian3.normalize(c,c),t||(c=N.Cartesian3.negate(c,c)),s=K(i.scaleToGeodeticSurface(r,g),c,o,s,i,l,1,1);return s}k.removeDuplicatesFromShape=function(a){for(var e=a.length,r=[],n=e-1,t=0;t<e;n=t++){var i=a[n],s=a[t];N.Cartesian2.equals(i,s)||r.push(s)}return r},k.angleIsGreaterThanPi=function(a,e,r,n){n=new d.EllipsoidTangentPlane(r,n),a=n.projectPointOntoPlane(N.Cartesian3.add(r,a,m),m),e=n.projectPointOntoPlane(N.Cartesian3.add(r,e,f),f);return 0<=e.x*a.y-e.y*a.x};var aa=new N.Cartesian3,ea=new N.Cartesian3;k.computePositions=function(a,e,r,n,t){var i=n._ellipsoid,s=function(a,e){for(var r=new Array(a.length),n=0;n<a.length;n++){var t=a[n];H=e.cartesianToCartographic(t,H),r[n]=H.height,a[n]=e.scaleToGeodeticSurface(t,t)}return r}(a,i),o=n._granularity,l=n._cornerType,C=(t?function(a,e){var r=a.length,n=new Array(6*r),t=0,i=e.x+e.width/2,s=e.y+e.height/2,o=a[0];n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s;for(var l=1;l<r;l++){var C=(o=a[l]).x-i,c=o.y-s;n[t++]=C,n[t++]=0,n[t++]=c,n[t++]=C,n[t++]=0,n[t++]=c}return o=a[0],n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s,n}:X)(e,r),e=t?X(e,r):void 0,c=r.height/2,u=r.width/2,y=a.length,d=[],r=t?[]:void 0,m=I,f=L,p=j,g=Q,w=F,h=U,v=_,x=q,P=Y,E=a[0],M=a[1],g=i.geodeticSurfaceNormal(E,g);m=N.Cartesian3.subtract(M,E,m),m=N.Cartesian3.normalize(m,m),x=N.Cartesian3.cross(g,m,x),x=N.Cartesian3.normalize(x,x);var T,B=s[0],b=s[1];t&&(r=K(E,x,e,r,i,B+c,1,1)),P=N.Cartesian3.clone(E,P),E=M,f=N.Cartesian3.negate(m,f);for(var z=1;z<y-1;z++){var S=t?2:1,M=a[z+1],m=N.Cartesian3.subtract(M,E,m);m=N.Cartesian3.normalize(m,m),p=N.Cartesian3.add(m,f,p),p=N.Cartesian3.normalize(p,p),g=i.geodeticSurfaceNormal(E,g);var A=N.Cartesian3.multiplyByScalar(g,N.Cartesian3.dot(m,g),aa);N.Cartesian3.subtract(m,A,A),N.Cartesian3.normalize(A,A);var D=N.Cartesian3.multiplyByScalar(g,N.Cartesian3.dot(f,g),ea);N.Cartesian3.subtract(f,D,D),N.Cartesian3.normalize(D,D),!O.CesiumMath.equalsEpsilon(Math.abs(N.Cartesian3.dot(A,D)),1,O.CesiumMath.EPSILON7)?(p=N.Cartesian3.cross(p,g,p),p=N.Cartesian3.cross(g,p,p),p=N.Cartesian3.normalize(p,p),A=1/Math.max(.25,N.Cartesian3.magnitude(N.Cartesian3.cross(p,f,Z))),(D=k.angleIsGreaterThanPi(m,f,E,i))?(w=N.Cartesian3.add(E,N.Cartesian3.multiplyByScalar(p,A*u,p),w),h=N.Cartesian3.add(w,N.Cartesian3.multiplyByScalar(x,u,h),h),R[0]=N.Cartesian3.clone(P,R[0]),R[1]=N.Cartesian3.clone(h,R[1]),T=J(R,B+c,b+c,o),d=W(V.PolylinePipeline.generateArc({positions:R,granularity:o,ellipsoid:i}),x,C,d,i,T,1),x=N.Cartesian3.cross(g,m,x),x=N.Cartesian3.normalize(x,x),v=N.Cartesian3.add(w,N.Cartesian3.multiplyByScalar(x,u,v),v),l===G.ROUNDED||l===G.BEVELED?$(w,h,v,l,D,i,d,C,b+c,t):d=K(E,p=N.Cartesian3.negate(p,p),C,d,i,b+c,A,S)):(w=N.Cartesian3.add(E,N.Cartesian3.multiplyByScalar(p,A*u,p),w),h=N.Cartesian3.add(w,N.Cartesian3.multiplyByScalar(x,-u,h),h),R[0]=N.Cartesian3.clone(P,R[0]),R[1]=N.Cartesian3.clone(h,R[1]),T=J(R,B+c,b+c,o),d=W(V.PolylinePipeline.generateArc({positions:R,granularity:o,ellipsoid:i}),x,C,d,i,T,1),x=N.Cartesian3.cross(g,m,x),x=N.Cartesian3.normalize(x,x),v=N.Cartesian3.add(w,N.Cartesian3.multiplyByScalar(x,-u,v),v),l===G.ROUNDED||l===G.BEVELED?$(w,h,v,l,D,i,d,C,b+c,t):d=K(E,p,C,d,i,b+c,A,S)),P=N.Cartesian3.clone(v,P),f=N.Cartesian3.negate(m,f)):(d=K(P,x,C,d,i,B+c,1,1),P=E),B=b,b=s[z+1],E=M}R[0]=N.Cartesian3.clone(P,R[0]),R[1]=N.Cartesian3.clone(E,R[1]),T=J(R,B+c,b+c,o),d=W(V.PolylinePipeline.generateArc({positions:R,granularity:o,ellipsoid:i}),x,C,d,i,T,1),t&&(r=K(E,x,e,r,i,b+c,1,1)),y=d.length;e=t?y+r.length:y,e=new Float64Array(e);return e.set(d),t&&e.set(r,y),e},a.CornerType=G,a.PolylineVolumeGeometryLibrary=k});

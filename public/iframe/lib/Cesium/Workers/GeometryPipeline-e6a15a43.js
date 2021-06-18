define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./AttributeCompression-9fc99391","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b"],function(e,R,t,L,V,z,w,S,A,d,P,D,a){"use strict";var g=new V.Cartesian3,T=new V.Cartesian3,x=new V.Cartesian3;var s={calculateACMR:function(e){var t=(e=R.defaultValue(e,R.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=R.defaultValue(e.cacheSize,24),n=t.length;if(!R.defined(r))for(var i=r=0,s=t[i];i<n;)r<s&&(r=s),s=t[++i];for(var o=[],u=0;u<r+1;u++)o[u]=0;for(var p=a+1,d=0;d<n;++d)p-o[t[d]]>a&&(o[t[d]]=p,++p);return(p-a+1)/(n/3)}};s.tipsify=function(e){var t=(e=R.defaultValue(e,R.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=R.defaultValue(e.cacheSize,24);function n(e,t,r,a,n,i,s){for(var o,u=-1,p=-1,d=0;d<r.length;){var l=r[d];a[l].numLiveTriangles&&(o=0,n-a[l].timeStamp+2*a[l].numLiveTriangles<=t&&(o=n-a[l].timeStamp),(p<o||-1===p)&&(p=o,u=l)),++d}return-1===u?function(e,t,r){for(;1<=t.length;){var a=t[t.length-1];if(t.splice(t.length-1,1),0<e[a].numLiveTriangles)return a}for(;C<r;){if(0<e[C].numLiveTriangles)return++C-1;++C}return-1}(a,i,s):u}var e=t.length,i=0,s=0,o=t[s],u=e;if(R.defined(r))i=r+1;else{for(;s<u;)i<o&&(i=o),o=t[++s];if(-1===i)return 0;++i}for(var p=[],d=0;d<i;d++)p[d]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};for(var l=s=0;s<u;)p[t[s]].vertexTriangles.push(l),++p[t[s]].numLiveTriangles,p[t[s+1]].vertexTriangles.push(l),++p[t[s+1]].numLiveTriangles,p[t[s+2]].vertexTriangles.push(l),++p[t[s+2]].numLiveTriangles,++l,s+=3;var y,f,c,v=0,m=a+1,C=1,h=[],b=[],g=0,A=[],T=e/3,x=[];for(d=0;d<T;d++)x[d]=!1;for(;-1!==v;){h=[],c=(y=p[v]).vertexTriangles.length;for(var P=0;P<c;++P)if(!x[l=y.vertexTriangles[P]]){x[l]=!0,s=l+l+l;for(var w=0;w<3;++w)f=t[s],h.push(f),b.push(f),A[g]=f,++g,--(f=p[f]).numLiveTriangles,m-f.timeStamp>a&&(f.timeStamp=m,++m),++s}v=n(0,a,h,p,m,b,i)}return A};var r={};function o(e,t,r,a,n){e[t++]=r,e[t++]=a,e[t++]=a,e[t++]=n,e[t++]=n,e[t]=r}function c(e){var t,r,a={};for(t in e)e.hasOwnProperty(t)&&R.defined(e[t])&&R.defined(e[t].values)&&(r=e[t],a[t]=new S.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return a}r.toWireframe=function(e){var t=e.indices;if(R.defined(t)){switch(e.primitiveType){case S.PrimitiveType.TRIANGLES:e.indices=function(e){for(var t=e.length,r=t/3*6,a=P.IndexDatatype.createTypedArray(t,r),n=0,i=0;i<t;i+=3,n+=6)o(a,n,e[i],e[i+1],e[i+2]);return a}(t);break;case S.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(3<=t){var r=6*(t-2),a=P.IndexDatatype.createTypedArray(t,r);o(a,0,e[0],e[1],e[2]);for(var n=6,i=3;i<t;++i,n+=6)o(a,n,e[i-1],e[i],e[i-2]);return a}return new Uint16Array}(t);break;case S.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(0<e.length){for(var t=e.length-1,r=6*(t-1),a=P.IndexDatatype.createTypedArray(t,r),n=e[0],i=0,s=1;s<t;++s,i+=6)o(a,i,n,e[s],e[s+1]);return a}return new Uint16Array}(t)}e.primitiveType=S.PrimitiveType.LINES}return e},r.createLineSegmentsForVectors=function(e,t,r){t=R.defaultValue(t,"normal"),r=R.defaultValue(r,1e4);for(var a,n=e.attributes.position.values,i=e.attributes[t].values,s=n.length,o=new Float64Array(2*s),u=0,p=0;p<s;p+=3)o[u++]=n[p],o[u++]=n[p+1],o[u++]=n[p+2],o[u++]=n[p]+i[p]*r,o[u++]=n[p+1]+i[p+1]*r,o[u++]=n[p+2]+i[p+2]*r;e=e.boundingSphere;return R.defined(e)&&(a=new z.BoundingSphere(e.center,e.radius+r)),new S.Geometry({attributes:{position:new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})},primitiveType:S.PrimitiveType.LINES,boundingSphere:a})},r.createAttributeLocations=function(e){for(var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],a=e.attributes,n={},i=0,s=r.length,o=0;o<s;++o){var u=r[o];R.defined(a[u])&&(n[u]=i++)}for(t in a)a.hasOwnProperty(t)&&!R.defined(n[t])&&(n[t]=i++);return n},r.reorderForPreVertexCache=function(e){var t=S.Geometry.computeNumberOfVertices(e),r=e.indices;if(R.defined(r)){for(var a=new Int32Array(t),n=0;n<t;n++)a[n]=-1;for(var i,s=r,o=s.length,u=P.IndexDatatype.createTypedArray(t,o),p=0,d=0,l=0;p<o;)-1!==(i=a[s[p]])?u[d]=i:(a[i=s[p]]=l,u[d]=l,++l),++p,++d;e.indices=u;var y,f=e.attributes;for(y in f)if(f.hasOwnProperty(y)&&R.defined(f[y])&&R.defined(f[y].values)){for(var c=f[y],v=c.values,m=0,C=c.componentsPerAttribute,h=w.ComponentDatatype.createTypedArray(c.componentDatatype,l*C);m<t;){var b=a[m];if(-1!==b)for(var g=0;g<C;g++)h[C*b+g]=v[C*m+g];++m}c.values=h}}return e},r.reorderForPostVertexCache=function(e,t){var r=e.indices;if(e.primitiveType===S.PrimitiveType.TRIANGLES&&R.defined(r)){for(var a=r.length,n=0,i=0;i<a;i++)r[i]>n&&(n=r[i]);e.indices=s.tipsify({indices:r,maximumIndex:n,cacheSize:t})}return e},r.fitToUnsignedShortIndices=function(e){var t=[],r=S.Geometry.computeNumberOfVertices(e);if(R.defined(e.indices)&&r>=L.CesiumMath.SIXTY_FOUR_KILOBYTES){var a,n=[],i=[],s=0,o=c(e.attributes),u=e.indices,p=u.length;e.primitiveType===S.PrimitiveType.TRIANGLES?a=3:e.primitiveType===S.PrimitiveType.LINES?a=2:e.primitiveType===S.PrimitiveType.POINTS&&(a=1);for(var d=0;d<p;d+=a){for(var l=0;l<a;++l){var y=u[d+l],f=n[y];R.defined(f)||(f=s++,n[y]=f,function(e,t,r){for(var a in t)if(t.hasOwnProperty(a)&&R.defined(t[a])&&R.defined(t[a].values))for(var n=t[a],i=0;i<n.componentsPerAttribute;++i)e[a].values.push(n.values[r*n.componentsPerAttribute+i])}(o,e.attributes,y)),i.push(f)}s+a>=L.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new S.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),n=[],i=[],s=0,o=c(e.attributes))}0!==i.length&&t.push(new S.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var y=new V.Cartesian3,f=new V.Cartographic;r.projectTo2D=function(e,t,r,a,n){for(var i=e.attributes[t],s=(n=R.defined(n)?n:new z.GeographicProjection).ellipsoid,o=i.values,u=new Float64Array(o.length),p=0,d=0;d<o.length;d+=3){var l=V.Cartesian3.fromArray(o,d,y),l=s.cartesianToCartographic(l,f),l=n.project(l,y);u[p++]=l.x,u[p++]=l.y,u[p++]=l.z}return e.attributes[r]=i,e.attributes[a]=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),delete e.attributes[t],e};var l={high:0,low:0};r.encodeAttribute=function(e,t,r,a){for(var n=e.attributes[t],i=n.values,s=i.length,o=new Float32Array(s),u=new Float32Array(s),p=0;p<s;++p)d.EncodedCartesian3.encode(i[p],l),o[p]=l.high,u[p]=l.low;n=n.componentsPerAttribute;return e.attributes[r]=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:n,values:o}),e.attributes[a]=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:n,values:u}),delete e.attributes[t],e};var i=new V.Cartesian3;function n(e,t){if(R.defined(t))for(var r=t.values,a=r.length,n=0;n<a;n+=3)V.Cartesian3.unpack(r,n,i),z.Matrix4.multiplyByPoint(e,i,i),V.Cartesian3.pack(i,r,n)}function u(e,t){if(R.defined(t))for(var r=t.values,a=r.length,n=0;n<a;n+=3)V.Cartesian3.unpack(r,n,i),z.Matrix3.multiplyByVector(e,i,i),i=V.Cartesian3.normalize(i,i),V.Cartesian3.pack(i,r,n)}var p=new z.Matrix4,v=new z.Matrix3;r.transformToWorldCoordinates=function(e){var t=e.modelMatrix;if(z.Matrix4.equals(t,z.Matrix4.IDENTITY))return e;var r=e.geometry.attributes;n(t,r.position),n(t,r.prevPosition),n(t,r.nextPosition),(R.defined(r.normal)||R.defined(r.tangent)||R.defined(r.bitangent))&&(z.Matrix4.inverse(t,p),z.Matrix4.transpose(p,p),z.Matrix4.getMatrix3(p,v),u(v,r.normal),u(v,r.tangent),u(v,r.bitangent));r=e.geometry.boundingSphere;return R.defined(r)&&(e.geometry.boundingSphere=z.BoundingSphere.transform(r,t,r)),e.modelMatrix=z.Matrix4.clone(z.Matrix4.IDENTITY),e};var I=new V.Cartesian3;function m(e,t){var r,a,n,i,s,o=e.length,u=(e[0].modelMatrix,R.defined(e[0][t].indices)),p=e[0][t].primitiveType,d=function(e,t){var r,a=e.length,n={},i=e[0][t].attributes;for(r in i)if(i.hasOwnProperty(r)&&R.defined(i[r])&&R.defined(i[r].values)){for(var s=i[r],o=s.values.length,u=!0,p=1;p<a;++p){var d=e[p][t].attributes[r];if(!R.defined(d)||s.componentDatatype!==d.componentDatatype||s.componentsPerAttribute!==d.componentsPerAttribute||s.normalize!==d.normalize){u=!1;break}o+=d.values.length}u&&(n[r]=new S.GeometryAttribute({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:w.ComponentDatatype.createTypedArray(s.componentDatatype,o)}))}return n}(e,t);for(r in d)if(d.hasOwnProperty(r))for(n=d[r].values,y=b=0;y<o;++y)for(s=(i=e[y][t].attributes[r].values).length,a=0;a<s;++a)n[b++]=i[a];if(u){for(var l=0,y=0;y<o;++y)l+=e[y][t].indices.length;var f=S.Geometry.computeNumberOfVertices(new S.Geometry({attributes:d,primitiveType:S.PrimitiveType.POINTS})),c=P.IndexDatatype.createTypedArray(f,l),v=0,m=0;for(y=0;y<o;++y){for(var C=e[y][t].indices,h=C.length,b=0;b<h;++b)c[v++]=m+C[b];m+=S.Geometry.computeNumberOfVertices(e[y][t])}f=c}var g,A=new V.Cartesian3,T=0;for(y=0;y<o;++y){if(g=e[y][t].boundingSphere,!R.defined(g)){A=void 0;break}V.Cartesian3.add(g.center,A,A)}if(R.defined(A))for(V.Cartesian3.divideByScalar(A,o,A),y=0;y<o;++y){g=e[y][t].boundingSphere;var x=V.Cartesian3.magnitude(V.Cartesian3.subtract(g.center,A,I))+g.radius;T<x&&(T=x)}return new S.Geometry({attributes:d,indices:f,primitiveType:p,boundingSphere:R.defined(A)?new z.BoundingSphere(A,T):void 0})}r.combineInstances=function(e){for(var t=[],r=[],a=e.length,n=0;n<a;++n){var i=e[n];R.defined(i.geometry)?t.push(i):R.defined(i.westHemisphereGeometry)&&R.defined(i.eastHemisphereGeometry)&&r.push(i)}var s=[];return 0<t.length&&s.push(m(t,"geometry")),0<r.length&&(s.push(m(r,"westHemisphereGeometry")),s.push(m(r,"eastHemisphereGeometry"))),s};var O=new V.Cartesian3,E=new V.Cartesian3,N=new V.Cartesian3,M=new V.Cartesian3;r.computeNormal=function(e){for(var t=e.indices,r=e.attributes,a=r.position.values,n=r.position.values.length/3,i=t.length,s=new Array(n),o=new Array(i/3),u=new Array(i),p=0;p<n;p++)s[p]={indexOffset:0,count:0,currentCount:0};var d=0;for(p=0;p<i;p+=3){var l=t[p],y=t[p+1],f=t[p+2],c=3*l,v=3*y,m=3*f;E.x=a[c],E.y=a[1+c],E.z=a[2+c],N.x=a[v],N.y=a[1+v],N.z=a[2+v],M.x=a[m],M.y=a[1+m],M.z=a[2+m],s[l].count++,s[y].count++,s[f].count++,V.Cartesian3.subtract(N,E,N),V.Cartesian3.subtract(M,E,M),o[d]=V.Cartesian3.cross(N,M,new V.Cartesian3),d++}var C=0;for(p=0;p<n;p++)s[p].indexOffset+=C,C+=s[p].count;for(p=d=0;p<i;p+=3){var h=(A=s[t[p]]).indexOffset+A.currentCount;u[h]=d,A.currentCount++,u[(A=s[t[p+1]]).indexOffset+A.currentCount]=d,A.currentCount++,u[(A=s[t[p+2]]).indexOffset+A.currentCount]=d,A.currentCount++,d++}var b=new Float32Array(3*n);for(p=0;p<n;p++){var g=3*p,A=s[p];if(V.Cartesian3.clone(V.Cartesian3.ZERO,O),0<A.count){for(d=0;d<A.count;d++)V.Cartesian3.add(O,o[u[A.indexOffset+d]],O);V.Cartesian3.equalsEpsilon(V.Cartesian3.ZERO,O,L.CesiumMath.EPSILON10)&&V.Cartesian3.clone(o[u[A.indexOffset]],O)}V.Cartesian3.equalsEpsilon(V.Cartesian3.ZERO,O,L.CesiumMath.EPSILON10)&&(O.z=1),V.Cartesian3.normalize(O,O),b[g]=O.x,b[1+g]=O.y,b[2+g]=O.z}return e.attributes.normal=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e};var G=new V.Cartesian3,F=new V.Cartesian3,B=new V.Cartesian3;r.computeTangentAndBitangent=function(e){e.attributes;for(var t=e.indices,r=e.attributes.position.values,a=e.attributes.normal.values,n=e.attributes.st.values,i=e.attributes.position.values.length/3,s=t.length,o=new Array(3*i),u=0;u<o.length;u++)o[u]=0;for(u=0;u<s;u+=3){var p,d=t[u],l=t[u+1],y=t[u+2],f=3*l,c=3*y,v=2*d,m=2*l,C=2*y,h=r[p=3*d],b=r[p+1],l=r[p+2],y=n[v],d=n[1+v],v=n[1+m]-d,d=n[1+C]-d,y=1/((n[m]-y)*d-(n[C]-y)*v),h=(d*(r[f]-h)-v*(r[c]-h))*y,b=(d*(r[f+1]-b)-v*(r[c+1]-b))*y,y=(d*(r[f+2]-l)-v*(r[c+2]-l))*y;o[p]+=h,o[p+1]+=b,o[p+2]+=y,o[f]+=h,o[f+1]+=b,o[f+2]+=y,o[c]+=h,o[c+1]+=b,o[c+2]+=y}var g=new Float32Array(3*i),A=new Float32Array(3*i);for(u=0;u<i;u++){f=(p=3*u)+1,c=p+2;var T=V.Cartesian3.fromArray(a,p,G),x=V.Cartesian3.fromArray(o,p,B),P=V.Cartesian3.dot(T,x);V.Cartesian3.multiplyByScalar(T,P,F),V.Cartesian3.normalize(V.Cartesian3.subtract(x,F,x),x),g[p]=x.x,g[f]=x.y,g[c]=x.z,V.Cartesian3.normalize(V.Cartesian3.cross(T,x,x),x),A[p]=x.x,A[f]=x.y,A[c]=x.z}return e.attributes.tangent=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g}),e.attributes.bitangent=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A}),e};var k=new V.Cartesian2,_=new V.Cartesian3,q=new V.Cartesian3,U=new V.Cartesian3,Y=new V.Cartesian2;function C(e){switch(e.primitiveType){case S.PrimitiveType.TRIANGLE_FAN:return function(e){var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;for(var a=3,n=3;n<t;++n)r[a++]=n-1,r[a++]=0,r[a++]=n;return e.indices=r,e.primitiveType=S.PrimitiveType.TRIANGLES,e}(e);case S.PrimitiveType.TRIANGLE_STRIP:return function(e){var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,3<t&&(r[3]=0,r[4]=2,r[5]=3);for(var a=6,n=3;n<t-1;n+=2)r[a++]=n,r[a++]=n-1,r[a++]=n+1,n+2<t&&(r[a++]=n,r[a++]=n+1,r[a++]=n+2);return e.indices=r,e.primitiveType=S.PrimitiveType.TRIANGLES,e}(e);case S.PrimitiveType.TRIANGLES:return function(e){if(R.defined(e.indices))return e;for(var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e);case S.PrimitiveType.LINE_STRIP:return function(e){var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;for(var a=2,n=2;n<t;++n)r[a++]=n-1,r[a++]=n;return e.indices=r,e.primitiveType=S.PrimitiveType.LINES,e}(e);case S.PrimitiveType.LINE_LOOP:return function(e){var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;for(var a=2,n=2;n<t;++n)r[a++]=n-1,r[a++]=n;return r[a++]=t-1,r[a]=0,e.indices=r,e.primitiveType=S.PrimitiveType.LINES,e}(e);case S.PrimitiveType.LINES:return function(e){if(R.defined(e.indices))return e;for(var t=S.Geometry.computeNumberOfVertices(e),r=P.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e)}return e}function h(e,t){Math.abs(e.y)<L.CesiumMath.EPSILON6&&(e.y=t?-L.CesiumMath.EPSILON6:L.CesiumMath.EPSILON6)}r.compressVertices=function(e){var t=e.attributes.extrudeDirection;if(R.defined(t)){for(var r=t.values,a=r.length/3,n=new Float32Array(2*a),i=0,s=0;s<a;++s)V.Cartesian3.fromArray(r,3*s,_),V.Cartesian3.equals(_,V.Cartesian3.ZERO)?i+=2:(Y=A.AttributeCompression.octEncodeInRange(_,65535,Y),n[i++]=Y.x,n[i++]=Y.y);return e.attributes.compressedAttributes=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:n}),delete e.attributes.extrudeDirection,e}var o=e.attributes.normal,u=e.attributes.st,p=R.defined(o),d=R.defined(u);if(!p&&!d)return e;var l,y,f,c,v=e.attributes.tangent,t=e.attributes.bitangent,m=R.defined(v),C=R.defined(t);p&&(l=o.values),d&&(y=u.values),m&&(f=v.values),C&&(c=t.values);v=a=(p?l:y).length/(p?3:2),t=d&&p?2:1;v*=t+=m||C?1:0;var h=new Float32Array(v),b=0;for(s=0;s<a;++s){d&&(V.Cartesian2.fromArray(y,2*s,k),h[b++]=A.AttributeCompression.compressTextureCoordinates(k));var g=3*s;p&&R.defined(f)&&R.defined(c)?(V.Cartesian3.fromArray(l,g,_),V.Cartesian3.fromArray(f,g,q),V.Cartesian3.fromArray(c,g,U),A.AttributeCompression.octPack(_,q,U,k),h[b++]=k.x,h[b++]=k.y):(p&&(V.Cartesian3.fromArray(l,g,_),h[b++]=A.AttributeCompression.octEncodeFloat(_)),m&&(V.Cartesian3.fromArray(f,g,_),h[b++]=A.AttributeCompression.octEncodeFloat(_)),C&&(V.Cartesian3.fromArray(c,g,_),h[b++]=A.AttributeCompression.octEncodeFloat(_)))}return e.attributes.compressedAttributes=new S.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:t,values:h}),p&&delete e.attributes.normal,d&&delete e.attributes.st,C&&delete e.attributes.bitangent,m&&delete e.attributes.tangent,e};var b=new V.Cartesian3;function Z(e,t,r,a){V.Cartesian3.add(e,V.Cartesian3.multiplyByScalar(V.Cartesian3.subtract(t,e,b),e.y/(e.y-t.y),b),r),V.Cartesian3.clone(r,a),h(r,!0),h(a,!1)}var H=new V.Cartesian3,W=new V.Cartesian3,X=new V.Cartesian3,j=new V.Cartesian3,J={positions:new Array(7),indices:new Array(9)};function K(e,t,r){if(!(0<=e.x||0<=t.x||0<=r.x)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return h(e,e.y<0),h(t,t.y<0),h(r,r.y<0),0;var a=Math.abs(e.y),n=Math.abs(t.y),i=Math.abs(r.y),n=n<a?i<a?L.CesiumMath.sign(e.y):L.CesiumMath.sign(r.y):i<n?L.CesiumMath.sign(t.y):L.CesiumMath.sign(r.y);h(e,n=n<0),h(t,n),h(r,n)}(e,t,r);var a=e.y<0,n=t.y<0,i=r.y<0,s=0;s+=a?1:0,s+=n?1:0,s+=i?1:0;var o=J.indices;1==s?(o[1]=3,o[2]=4,o[5]=6,o[7]=6,o[8]=5,a?(Z(e,t,H,X),Z(e,r,W,j),o[0]=0,o[3]=1,o[4]=2,o[6]=1):n?(Z(t,r,H,X),Z(t,e,W,j),o[0]=1,o[3]=2,o[4]=0,o[6]=2):i&&(Z(r,e,H,X),Z(r,t,W,j),o[0]=2,o[3]=0,o[4]=1,o[6]=0)):2==s&&(o[2]=4,o[4]=4,o[5]=3,o[7]=5,o[8]=6,a?n?i||(Z(r,e,H,X),Z(r,t,W,j),o[0]=0,o[1]=1,o[3]=0,o[6]=2):(Z(t,r,H,X),Z(t,e,W,j),o[0]=2,o[1]=0,o[3]=2,o[6]=1):(Z(e,t,H,X),Z(e,r,W,j),o[0]=1,o[1]=2,o[3]=1,o[6]=0));o=J.positions;return o[0]=e,o[1]=t,o[2]=r,o.length=3,1!=s&&2!=s||(o[3]=H,o[4]=W,o[5]=X,o[6]=j,o.length=7),J}}function Q(e,t){var r,a=e.attributes;if(0!==a.position.values.length){for(var n in a)a.hasOwnProperty(n)&&R.defined(a[n])&&R.defined(a[n].values)&&((r=a[n]).values=w.ComponentDatatype.createTypedArray(r.componentDatatype,r.values));var i=S.Geometry.computeNumberOfVertices(e);return e.indices=P.IndexDatatype.createTypedArray(i,e.indices),t&&(e.boundingSphere=z.BoundingSphere.fromVertices(a.position.values)),e}}function $(e){var t,r,a=e.attributes,n={};for(t in a)a.hasOwnProperty(t)&&R.defined(a[t])&&R.defined(a[t].values)&&(r=a[t],n[t]=new S.GeometryAttribute({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:[]}));return new S.Geometry({attributes:n,indices:[],primitiveType:e.primitiveType})}function ee(e,t,r){var a=R.defined(e.geometry.boundingSphere);t=Q(t,a),r=Q(r,a),R.defined(r)&&!R.defined(t)?e.geometry=r:!R.defined(r)&&R.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function te(u,p){var d=new u,l=new u,y=new u;return function(e,t,r,a,n,i,s,o){e=u.fromArray(n,e*p,d),t=u.fromArray(n,t*p,l),r=u.fromArray(n,r*p,y);u.multiplyByScalar(e,a.x,e),u.multiplyByScalar(t,a.y,t),u.multiplyByScalar(r,a.z,r);e=u.add(e,t,e);u.add(e,r,e),o&&u.normalize(e,e),u.pack(e,i,s*p)}}var re=te(z.Cartesian4,4),ae=te(V.Cartesian3,3),ne=te(V.Cartesian2,2),ie=function(e,t,r,a,n,i,s){e=n[e]*a.x,t=n[t]*a.y,a=n[r]*a.z;i[s]=e+t+a>L.CesiumMath.EPSILON6?1:0},se=new V.Cartesian3,oe=new V.Cartesian3,ue=new V.Cartesian3,pe=new V.Cartesian3;function de(e,t,r,a,n,i,s,o,u,p,d,l,y,f,c,v){if(R.defined(i)||R.defined(s)||R.defined(o)||R.defined(u)||R.defined(p)||0!==f){var m,C=function(e,t,r,a,n){var i,s,o,u,p,d,l;if(R.defined(n)||(n=new V.Cartesian3),R.defined(t.z)){if(V.Cartesian3.equalsEpsilon(e,t,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_X,n);if(V.Cartesian3.equalsEpsilon(e,r,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_Y,n);if(V.Cartesian3.equalsEpsilon(e,a,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_Z,n);i=V.Cartesian3.subtract(r,t,g),s=V.Cartesian3.subtract(a,t,T),o=V.Cartesian3.subtract(e,t,x),u=V.Cartesian3.dot(i,i),y=V.Cartesian3.dot(i,s),p=V.Cartesian3.dot(i,o),d=V.Cartesian3.dot(s,s),l=V.Cartesian3.dot(s,o)}else{if(V.Cartesian2.equalsEpsilon(e,t,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_X,n);if(V.Cartesian2.equalsEpsilon(e,r,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_Y,n);if(V.Cartesian2.equalsEpsilon(e,a,L.CesiumMath.EPSILON14))return V.Cartesian3.clone(V.Cartesian3.UNIT_Z,n);i=V.Cartesian2.subtract(r,t,g),s=V.Cartesian2.subtract(a,t,T),o=V.Cartesian2.subtract(e,t,x),u=V.Cartesian2.dot(i,i),y=V.Cartesian2.dot(i,s),p=V.Cartesian2.dot(i,o),d=V.Cartesian2.dot(s,s),l=V.Cartesian2.dot(s,o)}n.y=d*p-y*l,n.z=u*l-y*p;var y=u*d-y*y;return 0!==n.y&&(n.y/=y),0!==n.z&&(n.z/=y),n.x=1-n.y-n.z,n}(a,V.Cartesian3.fromArray(n,3*e,se),V.Cartesian3.fromArray(n,3*t,oe),V.Cartesian3.fromArray(n,3*r,ue),pe);if(R.defined(i)&&ae(e,t,r,C,i,l.normal.values,v,!0),R.defined(p)&&(n=V.Cartesian3.fromArray(p,3*e,se),i=V.Cartesian3.fromArray(p,3*t,oe),p=V.Cartesian3.fromArray(p,3*r,ue),V.Cartesian3.multiplyByScalar(n,C.x,n),V.Cartesian3.multiplyByScalar(i,C.y,i),V.Cartesian3.multiplyByScalar(p,C.z,p),V.Cartesian3.equals(n,V.Cartesian3.ZERO)&&V.Cartesian3.equals(i,V.Cartesian3.ZERO)&&V.Cartesian3.equals(p,V.Cartesian3.ZERO)?((m=se).x=0,m.y=0,m.z=0):(m=V.Cartesian3.add(n,i,n),V.Cartesian3.add(m,p,m),V.Cartesian3.normalize(m,m)),V.Cartesian3.pack(m,l.extrudeDirection.values,3*v)),R.defined(d)&&ie(e,t,r,C,d,l.applyOffset.values,v),R.defined(s)&&ae(e,t,r,C,s,l.tangent.values,v,!0),R.defined(o)&&ae(e,t,r,C,o,l.bitangent.values,v,!0),R.defined(u)&&ne(e,t,r,C,u,l.st.values,v),0<f)for(var h=0;h<f;h++){var b=y[h];!function(e,t,r,a,n,i,s){var o=i.componentsPerAttribute,u=i.values,p=s.values;switch(o){case 4:re(e,t,r,a,u,p,n,!1);break;case 3:ae(e,t,r,a,u,p,n,!1);break;case 2:ne(e,t,r,a,u,p,n,!1);break;default:p[n]=u[e]*a.x+u[t]*a.y+u[r]*a.z}}(e,t,r,C,v,c[b],l[b])}}}function le(e,t,r,a,n,i){var s=e.position.values.length/3;if(-1===n)return e.position.values.push(i.x,i.y,i.z),t.push(s),s;a=a[n],n=r[a];return-1===n?(r[a]=s,e.position.values.push(i.x,i.y,i.z),t.push(s),s):(t.push(n),n)}var ye={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function fe(e){var t,r=e.geometry,a=r.attributes,n=a.position.values,i=R.defined(a.normal)?a.normal.values:void 0,s=R.defined(a.bitangent)?a.bitangent.values:void 0,o=R.defined(a.tangent)?a.tangent.values:void 0,u=R.defined(a.st)?a.st.values:void 0,p=R.defined(a.extrudeDirection)?a.extrudeDirection.values:void 0,d=R.defined(a.applyOffset)?a.applyOffset.values:void 0,l=r.indices,y=[];for(t in a)a.hasOwnProperty(t)&&!ye[t]&&R.defined(a[t])&&y.push(t);var f,c,v=y.length,m=$(r),C=$(r),h=[];h.length=n.length/3;var b=[];for(b.length=n.length/3,A=0;A<h.length;++A)h[A]=-1,b[A]=-1;for(var g=l.length,A=0;A<g;A+=3){var T=l[A],x=l[A+1],P=l[A+2],w=V.Cartesian3.fromArray(n,3*T),S=V.Cartesian3.fromArray(n,3*x),I=V.Cartesian3.fromArray(n,3*P),O=K(w,S,I);if(R.defined(O)&&3<O.positions.length)for(var E=O.positions,N=O.indices,L=N.length,z=0;z<L;++z){var D=N[z],M=E[D],G=M.y<0?(f=C.attributes,c=C.indices,h):(f=m.attributes,c=m.indices,b);de(T,x,P,M,n,i,o,s,u,p,d,f,y,v,a,le(f,c,G,l,D<3?A+D:-1,M))}else R.defined(O)&&(w=O.positions[0],S=O.positions[1],I=O.positions[2]),G=w.y<0?(f=C.attributes,c=C.indices,h):(f=m.attributes,c=m.indices,b),de(T,x,P,w,n,i,o,s,u,p,d,f,y,v,a,le(f,c,G,l,A,w)),de(T,x,P,S,n,i,o,s,u,p,d,f,y,v,a,le(f,c,G,l,A+1,S)),de(T,x,P,I,n,i,o,s,u,p,d,f,y,v,a,le(f,c,G,l,A+2,I))}ee(e,C,m)}var ce=a.Plane.fromPointNormal(V.Cartesian3.ZERO,V.Cartesian3.UNIT_Y),ve=new V.Cartesian3,me=new V.Cartesian3;function Ce(e,t,r,a,n,i,s){R.defined(s)&&(a=V.Cartesian3.fromArray(a,3*e,se),V.Cartesian3.equalsEpsilon(a,r,L.CesiumMath.EPSILON10)?i.applyOffset.values[n]=s[e]:i.applyOffset.values[n]=s[t])}function he(e){var t,r=e.geometry,a=r.attributes,n=a.position.values,i=R.defined(a.applyOffset)?a.applyOffset.values:void 0,s=r.indices,o=$(r),u=$(r),p=s.length,d=[];d.length=n.length/3;var l=[];for(l.length=n.length/3,t=0;t<d.length;++t)d[t]=-1,l[t]=-1;for(t=0;t<p;t+=2){var y=s[t],f=s[t+1],c=V.Cartesian3.fromArray(n,3*y,se),v=V.Cartesian3.fromArray(n,3*f,oe);Math.abs(c.y)<L.CesiumMath.EPSILON6&&(c.y<0?c.y=-L.CesiumMath.EPSILON6:c.y=L.CesiumMath.EPSILON6),Math.abs(v.y)<L.CesiumMath.EPSILON6&&(v.y<0?v.y=-L.CesiumMath.EPSILON6:v.y=L.CesiumMath.EPSILON6);var m,C,h,b,g=o.attributes,A=o.indices,T=l,x=u.attributes,P=u.indices,w=d,S=D.IntersectionTests.lineSegmentPlane(c,v,ce,ue);R.defined(S)?(m=V.Cartesian3.multiplyByScalar(V.Cartesian3.UNIT_Y,5*L.CesiumMath.EPSILON9,ve),c.y<0&&(V.Cartesian3.negate(m,m),g=u.attributes,A=u.indices,T=d,x=o.attributes,P=o.indices,w=l),C=V.Cartesian3.add(S,m,me),Ce(y,f,c,n,le(g,A,T,s,t,c),g,i),Ce(y,f,C,n,le(g,A,T,s,-1,C),g,i),V.Cartesian3.negate(m,m),V.Cartesian3.add(S,m,C),Ce(y,f,C,n,le(x,P,w,s,-1,C),x,i),Ce(y,f,v,n,le(x,P,w,s,t+1,v),x,i)):(x=c.y<0?(h=u.attributes,b=u.indices,d):(h=o.attributes,b=o.indices,l),Ce(y,f,c,n,le(h,b,x,s,t,c),h,i),Ce(y,f,v,n,le(h,b,x,s,t+1,v),h,i))}ee(e,u,o)}var be=new V.Cartesian2,ge=new V.Cartesian2,Ae=new V.Cartesian3,Te=new V.Cartesian3,xe=new V.Cartesian3,Pe=new V.Cartesian3,we=new V.Cartesian3,Se=new V.Cartesian3,Ie=new z.Cartesian4;function Oe(e){for(var e=e.attributes,t=e.position.values,r=e.prevPosition.values,a=e.nextPosition.values,n=t.length,i=0;i<n;i+=3){var s,o=V.Cartesian3.unpack(t,i,Ae);0<o.x||(s=V.Cartesian3.unpack(r,i,Te),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(0<i-3?(r[i]=t[i-3],r[i+1]=t[i-2],r[i+2]=t[i-1]):V.Cartesian3.pack(o,r,i)),s=V.Cartesian3.unpack(a,i,xe),(o.y<0&&0<s.y||0<o.y&&s.y<0)&&(i+3<n?(a[i]=t[i+3],a[i+1]=t[i+4],a[i+2]=t[i+5]):V.Cartesian3.pack(o,a,i)))}}var Ee=5*L.CesiumMath.EPSILON9,Ne=L.CesiumMath.EPSILON6;r.splitLongitude=function(e){var t=e.geometry,r=t.boundingSphere;if(R.defined(r)&&(0<r.center.x-r.radius||z.BoundingSphere.intersectPlane(r,a.Plane.ORIGIN_ZX_PLANE)!==z.Intersect.INTERSECTING))return e;if(t.geometryType!==S.GeometryType.NONE)switch(t.geometryType){case S.GeometryType.POLYLINES:!function(e){for(var t=e.geometry,r=t.attributes,a=r.position.values,n=r.prevPosition.values,i=r.nextPosition.values,s=r.expandAndWidth.values,o=R.defined(r.st)?r.st.values:void 0,u=R.defined(r.color)?r.color.values:void 0,p=$(t),d=$(t),l=!1,y=a.length/3,f=0;f<y;f+=4){var c=f,v=f+2,m=V.Cartesian3.fromArray(a,3*c,Ae),C=V.Cartesian3.fromArray(a,3*v,Te);if(Math.abs(m.y)<Ne)for(m.y=Ne*(C.y<0?-1:1),a[3*f+1]=m.y,a[3*(f+1)+1]=m.y,O=3*c;O<3*c+12;O+=3)n[O]=a[3*f],n[O+1]=a[3*f+1],n[O+2]=a[3*f+2];if(Math.abs(C.y)<Ne)for(C.y=Ne*(m.y<0?-1:1),a[3*(f+2)+1]=C.y,a[3*(f+3)+1]=C.y,O=3*c;O<3*c+12;O+=3)i[O]=a[3*(f+2)],i[O+1]=a[3*(f+2)+1],i[O+2]=a[3*(f+2)+2];var h=p.attributes,b=p.indices,g=d.attributes,A=d.indices,T=D.IntersectionTests.lineSegmentPlane(m,C,ce,Pe);if(R.defined(T)){l=!0;var x=V.Cartesian3.multiplyByScalar(V.Cartesian3.UNIT_Y,Ee,we);m.y<0&&(V.Cartesian3.negate(x,x),h=d.attributes,b=d.indices,g=p.attributes,A=p.indices);var P=V.Cartesian3.add(T,x,Se);h.position.values.push(m.x,m.y,m.z,m.x,m.y,m.z),h.position.values.push(P.x,P.y,P.z),h.position.values.push(P.x,P.y,P.z),h.prevPosition.values.push(n[3*c],n[3*c+1],n[3*c+2]),h.prevPosition.values.push(n[3*c+3],n[3*c+4],n[3*c+5]),h.prevPosition.values.push(m.x,m.y,m.z,m.x,m.y,m.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),h.nextPosition.values.push(P.x,P.y,P.z),V.Cartesian3.negate(x,x),V.Cartesian3.add(T,x,P),g.position.values.push(P.x,P.y,P.z),g.position.values.push(P.x,P.y,P.z),g.position.values.push(C.x,C.y,C.z,C.x,C.y,C.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.prevPosition.values.push(P.x,P.y,P.z),g.nextPosition.values.push(C.x,C.y,C.z,C.x,C.y,C.z),g.nextPosition.values.push(i[3*v],i[3*v+1],i[3*v+2]),g.nextPosition.values.push(i[3*v+3],i[3*v+4],i[3*v+5]);var w=V.Cartesian2.fromArray(s,2*c,be),S=Math.abs(w.y);h.expandAndWidth.values.push(-1,S,1,S),h.expandAndWidth.values.push(-1,-S,1,-S),g.expandAndWidth.values.push(-1,S,1,S),g.expandAndWidth.values.push(-1,-S,1,-S);x=V.Cartesian3.magnitudeSquared(V.Cartesian3.subtract(T,m,xe));if(x/=V.Cartesian3.magnitudeSquared(V.Cartesian3.subtract(C,m,xe)),R.defined(u)){for(var P=z.Cartesian4.fromArray(u,4*c,Ie),I=z.Cartesian4.fromArray(u,4*v,Ie),w=L.CesiumMath.lerp(P.x,I.x,x),S=L.CesiumMath.lerp(P.y,I.y,x),T=L.CesiumMath.lerp(P.z,I.z,x),I=L.CesiumMath.lerp(P.w,I.w,x),O=4*c;O<4*c+8;++O)h.color.values.push(u[O]);for(h.color.values.push(w,S,T,I),h.color.values.push(w,S,T,I),g.color.values.push(w,S,T,I),g.color.values.push(w,S,T,I),O=4*v;O<4*v+8;++O)g.color.values.push(u[O])}if(R.defined(o)){var I=V.Cartesian2.fromArray(o,2*c,be),E=V.Cartesian2.fromArray(o,2*(f+3),ge),x=L.CesiumMath.lerp(I.x,E.x,x);for(O=2*c;O<2*c+4;++O)h.st.values.push(o[O]);for(h.st.values.push(x,I.y),h.st.values.push(x,E.y),g.st.values.push(x,I.y),g.st.values.push(x,E.y),O=2*v;O<2*v+4;++O)g.st.values.push(o[O])}E=h.position.values.length/3-4,b.push(E,E+2,E+1),b.push(E+1,E+2,E+3),E=g.position.values.length/3-4,A.push(E,E+2,E+1),A.push(E+1,E+2,E+3)}else{var N,A=m.y<0?(N=d.attributes,d.indices):(N=p.attributes,p.indices);for(N.position.values.push(m.x,m.y,m.z),N.position.values.push(m.x,m.y,m.z),N.position.values.push(C.x,C.y,C.z),N.position.values.push(C.x,C.y,C.z),O=3*f;O<3*f+12;++O)N.prevPosition.values.push(n[O]),N.nextPosition.values.push(i[O]);for(O=2*f;O<2*f+8;++O)N.expandAndWidth.values.push(s[O]),R.defined(o)&&N.st.values.push(o[O]);if(R.defined(u))for(O=4*f;O<4*f+16;++O)N.color.values.push(u[O]);E=N.position.values.length/3-4,A.push(E,E+2,E+1),A.push(E+1,E+2,E+3)}}l&&(Oe(d),Oe(p)),ee(e,d,p)}(e);break;case S.GeometryType.TRIANGLES:fe(e);break;case S.GeometryType.LINES:he(e)}else C(t),t.primitiveType===S.PrimitiveType.TRIANGLES?fe(e):t.primitiveType===S.PrimitiveType.LINES&&he(e);return e},e.GeometryPipeline=r});

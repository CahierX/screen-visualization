define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./PrimitivePipeline-6fc2e482","./WebMercatorProjection-df58d479","./createTaskProcessorWorker"],function(f,e,r,t,n,o,a,i,c,s,d,u,b,m,p,l,y,P,k){"use strict";var C={};return k(function(e,r){for(var t=e.subTasks,n=t.length,o=new Array(n),a=0;a<n;a++){var i=t[a],c=i.geometry,s=i.moduleName;f.defined(s)?(s=function(e){var r=C[e];return f.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(s),o[a]=s(c,i.offset)):o[a]=c}return f.when.all(o,function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,r)})})});

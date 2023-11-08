AFRAME.registerGeometry('example', {
    schema: {
      vertices: {
        default: ['-10 10 0', '-10 -10 0', '10 -10 0'],
      }
    },
  
    init: function (data) {
      var geometry = new THREE.BufferGeometry();
       const pointsArray = new Array();
       data.vertices.map(function (vertex) {
       var points = vertex.split(' ').map(function(x){return parseInt(x);});
       pointsArray.push(new THREE.Sphere("1"));
       });
       geometry.setFromPoints(pointsArray);
       geometry.computeBoundingBox();
       geometry.computeVertexNormals();
       this.geometry = geometry;
    }
  });

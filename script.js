AFRAME.registerGeometry('cylinder-stack', {
  schema: {
    height: { default: 2 },
    radius: { default: 1 },
    segments: { default: 8 },
    count: { default: 5 }, // Number of cylinders in the stack
  },

  init: function (data) {
    var geometry = new THREE.BufferGeometry();
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];

    for (let i = 0; i < data.count; i++) {
      const y = i * data.height;

      // Create a cylinder for each stack
      const cylinderGeometry = new THREE.CylinderGeometry(data.radius, data.radius, data.height, data.segments);
      const cylinderMatrix = new THREE.Matrix4().makeTranslation(0, y, 0);

      // Merge the cylinder's geometry into the main geometry
      geometry.merge(new THREE.BufferGeometry().fromGeometry(cylinderGeometry), cylinderMatrix);

      // Update UVs to ensure texture mapping
      const cylinderUvs = cylinderGeometry.attributes.uv.array;
      const cylinderIndices = cylinderGeometry.index.array;

      for (let j = 0; j < cylinderUvs.length; j++) {
        uvs.push(cylinderUvs[j]);
      }

      for (let j = 0; j < cylinderIndices.length; j++) {
        indices.push(cylinderIndices[j] + i * cylinderGeometry.attributes.position.count);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    this.geometry = geometry;
  }
});
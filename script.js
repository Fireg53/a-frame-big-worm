colors = ["red", "blue"]

function createBoxEntity(color, position) {

    const entity = document.createElement("a-entity");
    let box = document.createElement("a-box")
    box.setAttribute("position", position)
    box.setAttribute("rotation", "0 45 0")
    box.setAttribute("color", color)
    entity.appendChild(box)
    document.getElementById("test").innerHTML='<a-sphere position="0 4 -4" radius=".4" color="#34eb65"></a-sphere><a-cylinder position="0 2 -4" radius=".4" height="4" color="#34eb65"></a-cylinder><!--Left--><a-sphere position="-1.2 2 -4" radius=".4" color="#34eb65"></a-sphere><a-sphere position="-1.2 3 -4" radius=".4" color="#34eb65"></a-sphere><a-cylinder position="-0.6 2 -4" radius=".4" height="1.2" rotation="0 0 90" color="#34eb65"></a-cylinder><a-cylinder position="-1.2 2.5 -4" radius=".4" height="1" rotation="0 0 0" color="#34eb65"></a-cylinder><!--Right--><a-sphere position="1.2 1.5 -4" radius=".4" color="#34eb65"></a-sphere><a-sphere position="1.2 3.5 -4" radius=".4" color="#34eb65"></a-sphere><a-cylinder position="0.6 1.5 -4" radius=".4" height="1.2" rotation="0 0 90" color="#34eb65"></a-cylinder><a-cylinder position="1.2 2.5 -4" radius=".4" height="2" rotation="0 0 0" color="#34eb65"></a-cylinder>'


    
    return entity
}

for (var i =0; i < 2; i++) {
    document.getElementById("scene").appendChild(createBoxEntity(colors[i], "0 0 0"))
}

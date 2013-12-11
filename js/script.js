(function(){
	var addNew = document.getElementById('add');
	addNew.hover = function(){
		document.getElementsByTagName('block').style.opacity = 1;
	};
	addNew.onclick = function(){
		document.getElementById('todo').style.opacity = 1;
	}

	function addText(){
    var input = document.getElementById('input').value;
    var node = document.createElement("li");
	var check = document.createElement("input");
	var del = document.createElement('button');
	del.onclick = function(){
		document.getElementById('do').removeChild(node);
	};
    check.type="checkbox";
    var textNode = document.createTextNode(input);
	check.onclick = function(){
		node.style.textDecoration = 'line-through';
	};
	node.appendChild(del);
    node.appendChild(check);
	node.appendChild(textNode);

    document.getElementById('do').appendChild(node);
}

document.getElementsByTagName('button').onclick = addText();
})();
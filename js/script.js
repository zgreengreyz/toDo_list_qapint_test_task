var element = document.getElementsByClassName('add')[0];
element.onclick = function(event){/*
	var input = document.getElementById('toDoItem');
	if (input.innerText === null){
			console.log('Add some text in task');
		} else{
			span = input.value;
			root.removeChild(li.childNodes[1]);
			li.appendChild(span);
		}
	*/
	var li = document.createElement('li'),
		checkbox = document.createElement('input'),
		root = document.getElementById('todos'),
		del = document.createElement('button'),
		input = document.createElement('input'),
		span = document.createElement('span');
	input.setAttribute('type', 'text');
	del.setAttribute('class', 'delete');
	checkbox.setAttribute('type','checkbox');
	li.appendChild(checkbox);
	li.appendChild(input);
	li.appendChild(del);
	root.appendChild(li);
	del.onclick = function(event){
		li.parentNode.removeChild(li);
	}
}
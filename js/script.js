(function(){
	'use strict';
	var addNew = document.getElementById('add');
	addNew.hover = function(){
		block.style.opacity = 1;
	};
	addNew.addEventListener('click', function(){
		todo.style.opacity = 1;
	});

	var itemAdded = false,
		todo = document.getElementById('todo'),
		block = document.getElementsByClassName('block'),
		input = document.getElementById('text-area'),
		addButton = document.createElement('button'),
		span = document.createElement('span'),
		node = document.createElement("li"),
		check = document.createElement("input"),
		del = document.createElement('button'),
		textNode;

	check.setAttribute('type', 'checkbox');
	del.addEventListener('click', function(){
		document.getElementById('list').removeChild(node);
	});
	check.addEventListener('click', function(){
		span.style.textDecoration = 'line-through';
	});
	node.appendChild(del);
	node.appendChild(check);
	node.appendChild(span);

	var list = document.getElementById('list');
	list.value = window.localStorage.getItem('value');

	if (list.value !== null && list.value !== undefined){
		textNode = document.createTextNode(list.value);

		span.appendChild(textNode);
		list.appendChild(node);
	}

	document.getElementById('add').onclick = function(){
		var input = document.createElement('input');
		input.maxLength = 16;
		input.id = "texthere";
		addButton.id = "new";
		addButton.innerText = 'add New';
		var forms = document.getElementById('forms');
		if(!itemAdded){
			forms.appendChild(input);
			forms.appendChild(addButton);

		var cloud = document.getElementById('todo');
		cloud.style.opacity = 0;

		document.getElementById('new').addEventListener('click', function(){
			var val = input.value;
			var textNode = document.createTextNode(val);

			var span = document.createElement('span'),
				node = document.createElement("li"),
				check = document.createElement("input"),
				del = document.createElement('button');
			check.type="checkbox";
			del.addEventListener('click', function(){
				document.getElementById('list').removeChild(node);
			});
			check.addEventListener('click', function(){
				span.style.textDecoration = 'line-through';
			});

			node.appendChild(del);
			node.appendChild(check);
			node.appendChild(span);

			span.appendChild(textNode);
			document.getElementById('list').appendChild(node);

			window.localStorage.setItem('value', val);
			window.localStorage.setItem('timestamp', (new Date()).getTime());

		});
			}
		itemAdded = true;


	};


})();

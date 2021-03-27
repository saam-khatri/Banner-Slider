	

	let main = document.querySelector('main');
	let span = document.getElementsByTagName('span');
	let banner =  document.getElementsByClassName('banner');
	let blockquote = document.querySelector('blockquote');
	let index = 0;
	
	
	span[1].onclick = ()=>{
		if (index == banner.length -1) {
			index = 0;
		}
		else{
			index++;
		}
		show();
		pas();
		resetDisplay();
	}
	span[0].onclick = ()=>{
		if (index ==0) {
			index = banner.length -1
		}
		else{
			index--;
		}
		show();
		left_slide();
		pas();
		resetDisplay();
	}
	// deflault show 
	function show(){
		for(let i=0; i<banner.length; i++)
		{
			banner[i].classList.remove('active');
			banner[i].classList.remove('left');	
		}
		banner[index].classList.add('active');
		
	}
	// default+left show
	let left_slide = ()=>{
		for(let i=0; i<banner.length; i++)
		{
			banner[i].classList.remove('left');	
		}
		banner[index].classList.add('left');
	}
	function creatEle(){
		for(var i=0; i<banner.length; i++){
			var p = document.createElement('p');
			p.setAttribute('onclick', 'indicate(this)');
			p.id = i;
			if (i==0) {
				p.className = 'actual';
			}
			blockquote.appendChild(p);
		}
	}
	creatEle();
	// add  and remove class when active p element
	function pas(){
		for(let i=0; i<blockquote.children.length; i++){
			blockquote.children[i].classList.remove('actual');
		}
		blockquote.children[index].classList.add('actual');
	}
	function indicate(element){
		index = element.id;
		show();
		pas();
		resetDisplay();
	}

	function resetDisplay(){
			clearInterval(timer);
	   	  // start again 
	   	  timer = setInterval(autoDisplay, 10000);
	}
	// Auto Play or display 
	function autoDisplay(){
		span[1].click();
	}
	let timer = setInterval(autoDisplay, 10000);

	
	
	main.onmouseenter = ()=>{
		clearInterval(timer);
	}
	main.onmouseleave = ()=>{
		resetDisplay();
	}
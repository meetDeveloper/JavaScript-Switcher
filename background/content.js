(function() {
  const noscriptTags = document.querySelectorAll('noscript');

  noscriptTags.forEach((tag) => {
  	if (tag.firstChild) {
  	  const newDiv = document.createElement('div'),
  	  	parser = new DOMParser();

  	if (tag.childNodes.length === 1) {
  		const parsedDOM  = parser.parseFromString(tag.childNodes[0].textContent, 'text/html');

  		parsedDOM.body.childNodes.forEach((child) => {
  			newDiv.appendChild(child);
  		});
  	} else {
	  	tag.childNodes.forEach((child) => {
	    	newDiv.appendChild(child);
	    });
  	}

    tag.parentNode.replaceChild(newDiv, tag);
  	}
  })
})();

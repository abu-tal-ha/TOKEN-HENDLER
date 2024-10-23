let clickHandler = function(e) {
    
    let button_tag = e.target;
    let inner_span = button_tag.querySelector('span');
    let num = inner_span.innerText;

    e.target.querySelector('span').innerText = Number(num) + 1;
    document.querySelector('# test').innerText = Number(num) + 1;
  } 

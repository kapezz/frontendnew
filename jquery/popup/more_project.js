function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'flex') ? 'none' : 'block';
}
    let block = document.querySelector('.show__more-projects-a');
    block.addEventListener('click', ()=> {
        if(block.classList.contains('arrow')) {
            block.classList.add('arrow2')
            block.classList.remove('arrow')
        } else {
            block.classList.add('arrow')
            block.classList.remove('arrow2')
        }
    }) 
const faq = document.querySelector('.faq')
faq.addEventListener('click', event => {
	const question = event.target.closest('.faq__question')
	if (!question) return
	const answer = question.nextElementSibling
	// hide previously opened answer and show the clicked answer
	const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]')
	if (currentAnswer === answer) {
		// close the already open answer
		answer.setAttribute('aria-hidden', 'true')
		answer.parentNode.classList.remove('faq__item--expanded')
		question.setAttribute('aria-expanded', 'false')
	} else {
		// hide previously open answer and show the clicked answer
		if (currentAnswer) {
			currentAnswer.setAttribute('aria-hidden', 'true')
			currentAnswer.parentNode.classList.remove('faq__item--expanded')
			currentAnswer.previousElementSibling.setAttribute(
				'aria-expanded',
				'false'
			)
		}
		answer.setAttribute('aria-hidden', 'false')
		answer.parentNode.classList.add('faq__item--expanded')
		question.setAttribute('aria-expanded', 'true')
	}
})
    // Botón caras
     var boton7 = document.getElementByClass('foto');
     boton7.addEventListener('click', fun7);
     boton7.addEventListener('hover', fun8);
     function fun7() {}
  


     
    document.querySelector('.image-container').addEventListener('click', function() {
        this.querySelector('.fotobruno').style.opacity = 1;
        this.querySelector('.text-overlay').style.opacity = 0;
      });

const faq = document.querySelector('.faq') //Se selecciona el primer elemento que tiene la clase "faq" en el documento HTML y se guarda en la variable faq.
faq.addEventListener('click', event => { //Se agrega un evento de escucha al elemento faq que espera a que se haga clic en él. Cuando se produce el clic, se ejecuta la función de flecha proporcionada.
	const question = event.target.closest('.faq__question') //Dentro de la función de flecha, se selecciona el elemento más cercano con la clase "faq__question" que es un descendiente del elemento en el que se hizo clic. Se guarda en la variable question.
	if (!question) return //Si no se encontró ningún elemento con la clase "faq__question" dentro de los descendientes del elemento en el que se hizo clic, se sale de la función.
	const answer = question.nextElementSibling //Se selecciona el siguiente hermano del elemento question y se guarda en la variable answer. Se asume que este siguiente hermano es la respuesta correspondiente a la pregunta.
	
	// hide previously opened answer and show the clicked answer
	const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]') //Se selecciona el elemento dentro del elemento faq que tiene la clase "faq__answer" y el atributo aria-hidden establecido en "false". Esto busca la respuesta actualmente abierta.
	if (currentAnswer === answer) { //Si la respuesta actualmente abierta (currentAnswer) es igual a la respuesta a la que se hizo clic (answer), se ejecuta el bloque de código dentro de este condicional.
		// close the already open answer
		answer.setAttribute('aria-hidden', 'true') //Se establece el atributo aria-hidden de la respuesta a "true", lo que oculta la respuesta.
		answer.parentNode.classList.remove('faq__item--expanded') //Se elimina la clase "faq__item--expanded" del elemento padre de la respuesta. Esta clase se usa para indicar que el elemento está expandido o desplegado.
		question.setAttribute('aria-expanded', 'false') //Se establece el atributo aria-expanded de la pregunta a "false", lo que indica que la pregunta no está expandida.
	} else { //En caso contrario (si currentAnswer no es igual a answer), se ejecuta el bloque de código dentro de este otro condicional.
		// hide previously open answer and show the clicked answer
		if (currentAnswer) { //Si hay una respuesta actualmente abierta (currentAnswer), se ejecuta el bloque de código dentro de este condicional. Esto significa que hay una respuesta diferente abierta y se debe cerrar antes de mostrar la respuesta a la que se hizo clic.
			currentAnswer.setAttribute('aria-hidden', 'true') //Se establece el atributo aria-hidden de la respuesta actualmente abierta a "true", ocultándola.
			currentAnswer.parentNode.classList.remove('faq__item--expanded') //Se elimina la clase "faq__item--expanded" del elemento padre de la respuesta actualmente abierta.
			currentAnswer.previousElementSibling.setAttribute(
				'aria-expanded',
				'false'
			)//Se establece el atributo `aria
		}
		answer.setAttribute('aria-hidden', 'false')
		answer.parentNode.classList.add('faq__item--expanded')
		question.setAttribute('aria-expanded', 'true')
	}
})

 


  
 
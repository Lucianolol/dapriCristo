
const noticias = [
	{
		titulo: "Noticia 1",
		contenido: "Contenido de la noticia 1"
	},
	{
		titulo: "Noticia 2",
		contenido: "Contenido de la noticia 2"
	},
	{
		titulo: "Noticia 3",
		contenido: "Contenido de la noticia 3"
	},
	{
		titulo: "Noticia 4",
		contenido: "Contenido de la noticia 4"
	},
	{
		titulo: "Noticia 5",
		contenido: "Contenido de la noticia 5"
	}
];

const noticiasContainer = document.querySelector('.noticias-container');
const cargarMasNoticiasBtn = document.querySelector('#cargar-mas-noticias');

cargarMasNoticiasBtn.addEventListener('click', () => {
	// Generar una nueva noticia aleatoria
	const nuevaNoticia = {
		titulo: "Noticia " + (noticias.length + 1),
		contenido: "Contenido de la noticia " + (noticias.length + 1)
	};
	
	// Agregar la nueva noticia a la lista de noticias
	noticias.push(nuevaNoticia);
	
	// Actualizar la página con la nueva noticia
	const nuevaNoticiaHtml = `
		<div class="noticia">
			<h2>${nuevaNoticia.titulo}</h2>
			<p>${nuevaNoticia.contenido}</p>
		</div>
	`;
	noticiasContainer.insertAdjacentHTML('beforeend', nuevaNoticiaHtml);
});

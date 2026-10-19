const infografiasPorSemana = {
	semana_1: [
		'infografias/UNIDAD_1/semana_1/1-Metodo Eliminar(x).png',
		'infografias/UNIDAD_1/semana_1/2-Metodo Modificar.jpg',
		'infografias/UNIDAD_1/semana_1/3-Metodo insertar.png',
		'infografias/UNIDAD_1/semana_1/4-Metodo Suma.png',
		'infografias/UNIDAD_1/semana_1/5-Recorrer Menor a Mayor.png',
		'infografias/UNIDAD_1/semana_1/6-Suma de impares.jpg',
		'infografias/UNIDAD_1/semana_1/7_Primer Elemento al Final.png'
	],
	semana_2: [
		'infografias/UNIDAD_1/Semana_2/1-Eliminar elemento matriz.png',
		'infografias/UNIDAD_1/Semana_2/2-Modificar Elemento.png',
		'infografias/UNIDAD_1/Semana_2/3-Sumar Elementos.png',
		'infografias/UNIDAD_1/Semana_2/4-Hallar menor,mayor&Promedio.jpg',
		'infografias/UNIDAD_1/Semana_2/5-Formar L.png',
		'infografias/UNIDAD_1/Semana_2/6-Formar J.png',
		'infografias/UNIDAD_1/Semana_2/7-Formar U.jpg',
		'infografias/UNIDAD_1/Semana_2/8-Menor de cada Fila.png',
		'infografias/UNIDAD_1/Semana_2/9-Contar pares.png',
		'infografias/UNIDAD_1/Semana_2/10-Mover Filas.jpg'
	],
	semana_3: [
		'infografias/UNIDAD_1/semana_3/Enunciado 1/SLN_1.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 2/1-IngresarEmpleados.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 2/2-MostrarEmpleados.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 2/3-CalcularSueldo.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 3/1-IngresarAlumnos.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 3/2-MostrarAlumnos.png',
		'infografias/UNIDAD_1/semana_3/Enunciado 3/3-CalcularPromedio.png',
		'infografias/UNIDAD_1/semana_3/enunciado 4/1-IngresarDatos.png'
	],
	semana_4: [
		'infografias/UNIDAD_1/semana_4/2-Lista Aprovados.jpg',
		'infografias/UNIDAD_1/semana_4/3-Lista Desaprobados.jpg',
		'infografias/UNIDAD_1/semana_4/4-Mejor Promedio.jpg',
		'infografias/UNIDAD_1/semana_4/5-Peor Promedio.jpg',
		'infografias/UNIDAD_1/semana_4/6-Promedio General.jpg'
	],
	semana_6: [
		'infografias/UNIDAD_2/Semana_6/1.1-insertar-pila.jpg',
		'infografias/UNIDAD_2/Semana_6/1.2-mostrar-pila.jpg',
		'infografias/UNIDAD_2/Semana_6/1.3-elimina-datos.jpg',
		'infografias/UNIDAD_2/Semana_6/1.4-elimina-pila.jpg',
		'infografias/UNIDAD_2/Semana_6/1.5-consultar-cima.jpg',
		'infografias/UNIDAD_2/Semana_6/1.6-mostrar-estado-capacidad.jpg',
		'infografias/UNIDAD_2/Semana_6/1.7-buscar-alumno-por-codigo.jpg',
		'infografias/UNIDAD_2/Semana_6/1.8-verificar-estado-logico.jpg',
		'infografias/UNIDAD_2/Semana_6/1.9-mostrar-mejor-promedio.jpg',
		'infografias/UNIDAD_2/Semana_6/2.1Computadora.png',
		'infografias/UNIDAD_2/Semana_6/2.2_mostrarInventario.png',
		'infografias/UNIDAD_2/Semana_6/2.3_desapilarComputadora.png',
		'infografias/UNIDAD_2/Semana_6/2.4_consultarCima.png',
		'infografias/UNIDAD_2/Semana_6/2.5_limpiarInventario.png'
	],
	semana_7: [
		'infografias/UNIDAD_2/Semana_7/s7_infografia_01_encolarAlumno.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_02_desencolarAlumno.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_03_consultarFrente.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_04_mostrarTodos.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_05_verificarSiEstaVacia.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_06_verificarSiEstaLlena.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_07_mostrarCantidad.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_08_buscarAlumnoPorCodigo.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_09_calcularPromedioGeneralGrupo.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_10_filtrarAlumnosPorRendimientoAcademico.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_11_obtenerAlumnoConMayorYMenorPromedio.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_12_invertirOrdenCola.png',
		'infografias/UNIDAD_2/Semana_7/s7_infografia_13_eliminarAlumnoPorCodigoEspecifico.png'
	]
};

const selectoresSemanas = document.querySelectorAll('.week-selector');
const galeriasInfografias = document.querySelectorAll('.infografia-grid');
const visorImagen = document.querySelector('.image-dialog');
const tituloImagen = document.querySelector('#image-dialog-title');
const imagenAmpliada = document.querySelector('.image-dialog-content');

function obtenerNombre(ruta) {
	const nombreArchivo = ruta.split('/').pop();
	return nombreArchivo.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
}

function mostrarSemana(semana, galeriaInfografias) {
	galeriaInfografias.replaceChildren();
	galeriaInfografias.hidden = false;

	infografiasPorSemana[semana].forEach((ruta) => {
		const nombre = obtenerNombre(ruta);
		const tarjeta = document.createElement('button');
		const miniatura = document.createElement('img');
		const titulo = document.createElement('span');

		tarjeta.className = 'infografia-card';
		tarjeta.type = 'button';
		tarjeta.setAttribute('aria-label', `Ampliar ${nombre}`);
		miniatura.src = ruta;
		miniatura.alt = '';
		miniatura.loading = 'lazy';
		titulo.textContent = nombre;
		tarjeta.append(miniatura, titulo);
		galeriaInfografias.append(tarjeta);
	});
}

selectoresSemanas.forEach((selectorSemanas) => {
	selectorSemanas.addEventListener('click', (evento) => {
		const boton = evento.target.closest('[data-week]');
		if (!boton) return;

		selectorSemanas.querySelectorAll('[data-week]').forEach((semana) => {
			semana.setAttribute('aria-pressed', String(semana === boton));
		});
		const galeriaInfografias = selectorSemanas.closest('.unidad-body').querySelector('.infografia-grid');
		mostrarSemana(boton.dataset.week, galeriaInfografias);
	});
});

galeriasInfografias.forEach((galeriaInfografias) => {
	galeriaInfografias.addEventListener('click', (evento) => {
		const tarjeta = evento.target.closest('.infografia-card');
		if (!tarjeta) return;

		const miniatura = tarjeta.querySelector('img');
		tituloImagen.textContent = tarjeta.querySelector('span').textContent;
		imagenAmpliada.src = miniatura.src;
		imagenAmpliada.alt = tarjeta.querySelector('span').textContent;
		visorImagen.showModal();
	});
});

document.querySelector('.image-dialog-close').addEventListener('click', () => {
	visorImagen.close();
});

visorImagen.addEventListener('click', (evento) => {
	if (evento.target === visorImagen) visorImagen.close();
});

document.addEventListener('DOMContentLoaded', () => {
	console.log('dom loaded');
	const showModalButtons = document.querySelectorAll('[data-toggle=modal]');
	showModalButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const title = btn.dataset.title;
			const videoId = btn.dataset.video;
			const iframe = document.querySelector('iframe');
			const modalHeader = document.getElementById('myModal');
			modalHeader.textContent = title;
			iframe.src = 'https://www.youtube.com/embed/' + videoId;
			$('#modal').modal();
		});
	});
});

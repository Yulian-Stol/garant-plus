'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//-----slider------

	
		var html5Slider = document.getElementById('html5');
		if(html5Slider) {
			noUiSlider.create(html5Slider, {
				start: [0, 5000000],
				connect: true,
				behaviour: 'tap',
				step: 15000,
				range: {
						'min': [0],
						'max': [5000000]
				}
			});
	
			var inputNumber = document.getElementById('input-number');
			var inputNumberr = document.getElementById('input-numberr');
			html5Slider.noUiSlider.on('update', function (values, handle) {
				var value = values[handle];
				if (handle) {
						inputNumber.value = value;
				} else {
					inputNumberr.value = value;
				}
			});

			inputNumber.addEventListener('change', function () {
				html5Slider.noUiSlider.set([this.value, null]);
			});

			inputNumberr.addEventListener('change', function () {
				html5Slider.noUiSlider.set([this.value, null]);
			});
		}


	//-----slider-2------
		var html5Sliderr = document.getElementById('html6');
		if(html5Sliderr) {
			noUiSlider.create(html5Sliderr, {
				start: [22, 460],
				behaviour: 'tap',
				step: 1,
				connect: true,
				range: {
						'min': [22],
						'max': [460]
				}
			});
	
			var inputrNumber = document.getElementById('inputr-number');
			var inputrNumberr = document.getElementById('inputr-numberr');
			html5Sliderr.noUiSlider.on('update', function (values, handle) {
				var value = values[handle];
				if (handle) {
						inputrNumber.value = value;
				} else {
					inputrNumberr.value = value;
				}
			});
	
			inputrNumber.addEventListener('change', function () {
					html5Sliderr.noUiSlider.set([this.value, null]);
			});
	
			inputrNumberr.addEventListener('change', function () {
					html5Sliderr.noUiSlider.set([this.value, null]);
			});
		}


	//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.hero__slider', {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.hero__pagination',
				type: "fraction",
				clickable: 'true',
			},
			navigation: {
				nextEl: '.hero__next',
				prevEl: '.hero__prev',
			},
		});

	//--------------------SLIDER-object----------------

	var mySwiper = new Swiper('.object__slider', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.object__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.object__next',
			prevEl: '.object__prev',
		},
	});

	//-------------------Slider-turnkey

	var mySwiper = new Swiper('.sliderkey__slider', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.object__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.sliderkey__next',
			prevEl: '.sliderkey__prev',
		},
	});

	//---------------slider--plan----------
	var mySwiper = new Swiper('.plan__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.plan__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.plan__next',
			prevEl: '.plan__prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
		}
	});

	//-----------------swipers--plan---------------
	var mySwiper = new Swiper('.planhouse__slider', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.planhouse__pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.planhouse__next',
			prevEl: '.planhouse__prev',
		},
	});

	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
			if(header) {
				window.addEventListener('scroll', function() {
					const top = pageYOffset;
					
					if (top >= 90) {
						header.classList.add(active);
					} else {
						header.classList.remove(active);
					}
		
				});
			}
	
		};
		headerFixed('.headerpage', '.headerpage--active');
		headerFixed('.headerpage_mobile', '.headerpage_mobile--active');
	
	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.hamburger', '.header__nav', '.header');


	//-------------ACCORDION---------------
		if (document.documentElement.clientWidth < 768) {
			const accordions = (accordionSelector) => {
				const	accordion = document.querySelectorAll(accordionSelector);
			
				accordion.forEach(item => {
					const accordionClick = item.querySelector('.accordion__header'),
								accordionContent = item.querySelector('.accordion__content');
			
					accordionClick.addEventListener('click', (e) => {
						if(!item.classList.contains('accordion--active')) {
			
							item.classList.add('accordion--active')
							accordionContent.style.height = "auto"
							var height = accordionContent.clientHeight + "px"
							accordionContent.style.height = "0px"
			
							setTimeout(() => {
								accordionContent.style.height = height
							}, 0)
			
							} else {
								accordionContent.style.height = "0px"
									item.classList.remove('accordion--active')
						}
			
					});
				});
			
			};
			accordions('.accordion');
		};

	//------------------------accordion--2----------------
		if (document.documentElement.clientWidth < 993) {
			const accordionsr = (accordionSelector) => {
				const	accordionr = document.querySelectorAll(accordionSelector);

				if(accordionr) {
					accordionr.forEach(item => {
						const accordionClickr = item.querySelector('.accordionr__header'),
									accordionContentr = item.querySelector('.accordionr__content');
				
						accordionClickr.addEventListener('click', (e) => {
							if(!item.classList.contains('accordionr--active')) {

								item.classList.add('accordionr--active');
								accordionContentr.style.height = "auto";
								var height = accordionContentr.clientHeight + "px";
								accordionContentr.style.height = "0px";
				
								setTimeout(() => {
									accordionContentr.style.height = height;
								}, 0);
				
							} else {
								accordionContentr.style.height = "0px";
								item.classList.remove('accordionr--active');
							}
							
						});
					});
				}
			};
			accordionsr('.accordionr');
		};

	//----------------------MODAL-----------------------
		const modals = (modalSelector) => {
			const	modal = document.querySelectorAll(modalSelector);

			if (modal) {
				let i = 1;

				modal.forEach(item => {
					const wrap = item.id;
					const link = document.querySelectorAll('.' + wrap);

					link.forEach(linkItem => {
						let close = item.querySelector('.close');
							if (linkItem) {
								linkItem.addEventListener('click', (e) => {
									if (e.target) {
										e.preventDefault();
									}
									item.classList.add('active');
								});
							}

							if (close) {
								close.addEventListener('click', () => {
									item.classList.remove('active');
								});
							}

						item.addEventListener('click', (e) => {
							if (e.target === item) {
								item.classList.remove('active');
							}
						});
					});
				});
			}

		};
		modals('.modal');

	//----------------------FORM-----------------------
		const forms = (formsSelector) => {
		const form = document.querySelectorAll(formsSelector);
		let i = 1;
		let img = 1;
		let lebel = 1;
		let prev = 1;

		form.forEach(item => {
			const elem = 'form--' + i++;
			item.classList.add(elem);

			let formId = item.id = (elem);
			let formParent = document.querySelector('#' + formId);

			formParent.addEventListener('submit', formSend);

			async function formSend(e) {
				e.preventDefault();

				let error = formValidate(item);

				let formData = new FormData(item);

				if (error === 0) {
					item.classList.add('_sending');
					let response = await fetch('sendmail.php', {
						method: 'POST',
						body: formData
					});

					if (response.ok) {
						let modalThanks = document.querySelector('#modal__thanks');
						formParent.parentNode.style.display = 'none';

						modalThanks.classList.add('active');
						item.reset();
						item.classList.remove('_sending');
					} else {
						alert('Ошибка при отправке');
						item.classList.remove('_sending');
					}

				}
			}

			function formValidate(item) {
				let error = 0;
				let formReq = formParent.querySelectorAll('._req');

				for (let index = 0; index < formReq.length; index++) {
					const input = formReq[index];
					// formRemoveError(input);

					if (input.classList.contains('_email')) {
						if(emailTest(input)) {
							formAddErrorEmail(input);
							error++;
						}
					} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
						formAddErrorCheck(input);
						error++;
					} else {
						if (input.value === '') {
							formAddError(input);
							error++;
						}
					}
				}
				return error;
			}

			const formImgFile = formParent.querySelectorAll('.formImgFile');

			formImgFile.forEach(item => { 
				const elem = 'formImgFile--' + i++;

				let formId = item.id = (elem);
				let formParent = document.querySelector('#' + formId);

				const formImage = formParent.querySelector('.formImage');
				const formLebel = formParent.querySelector('.formLebel');
				const formPreview = formParent.querySelector('.formPreview');

				//картинка в форме
				let formImageNumber = 'formImage--' + img++;
				let formPreviewNumber = 'formPreview--' + prev++;
				
				formImage.id = (formImageNumber);
				formLebel.htmlFor = ('formImage--' + lebel++);
				formPreview.id = (formPreviewNumber);
				const formImageAdd = document.querySelector('#' + formImageNumber);

				// изменения в инпуте файл
				formImageAdd.addEventListener('change', () =>  {
					uploadFile(formImage.files[0]);
				});

				function uploadFile(file) {
			
					if (!['image/jpeg', 'image/png', 'image/gif', 'image/ico', 'application/pdf'].includes(file.type)) {
						alert('Только изображения');
						formImage.value = '';
						return;
					}
			
					if (file.size > 2 * 1024 * 1024) {
						alert('Размер менее 2 мб.');
						return;
					}
			
					var reader = new FileReader();
					reader.onload = function (e) {
						if(['application/pdf'].includes(file.type)) {
							formPreview.innerHTML = `Файл выбран`;
						}else{
							formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
						}
						
					};
					reader.onerror = function (e) {
						alert('Ошибка');
					};
					reader.readAsDataURL(file);
				}
			})

			function formAddError(input) {
				let div = document.createElement('div');
				div.classList.add("form__error");
				div.innerHTML = "Введите данные в поле";

				input.parentElement.append(div);
				input.parentElement.classList.add('_error');
				input.classList.add('_error');
			}

			function formAddErrorEmail(input) {
				let div = document.createElement('div');
				div.classList.add("form__error");
				div.innerHTML = "Введите свою почту";

				input.parentElement.append(div);
				input.parentElement.classList.add('_error');
				input.classList.add('_error');
			}

			function formAddErrorCheck(input) {
				let div = document.createElement('div');
				div.classList.add("form__error");
				div.innerHTML = "Согласие на обработку персональных данных";

				input.parentElement.append(div);
				input.parentElement.classList.add('_error');
				input.classList.add('_error');
			}

			function emailTest(input) {
				return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/. test(input.value);
			}

		});
		};
		forms('.form');

});
	
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

	//---------------slider--service----------
	var mySwiper = new Swiper('.service__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.service__next',
			prevEl: '.service__prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		}
	});

	var mySwiper = new Swiper('.services__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		allowTouchMove: false,
		navigation: {
			nextEl: '.services__next',
			prevEl: '.services__prev',
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

	//------------------tabs-------------------------
	// const tabs = (headerSelector, tabSelector, contentSelector, contentActive, activeClass) => {
	// 	const header = document.querySelector(headerSelector),
	// 				tab = document.querySelectorAll(tabSelector),
	// 				content = document.querySelectorAll(contentSelector);

	// 	function hideTabContent() {
	// 		content.forEach(item => {
	// 			item.style.display = "none";
	// 		});
	
	// 		tab.forEach(item => {
	// 			item.classList.remove(activeClass);
	// 		});
	// 	}
	
	// 	function showTabContent(i = 0) {
	// 		content[i].classList.add(contentActive);
	// 		tab[i].classList.add(activeClass);
	// 	}
	
	// 	hideTabContent();
	// 	// showTabContent();
	
	// 	header.addEventListener('click', (e) => {
	// 		const target = e.target;

	// 		if (target && 
	// 			(target.classList.contains(tabSelector.replace(/\./, '')) || 
	// 			target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
	// 			tab.forEach((item, i) => {
	// 				if (target == item || target.parentNode == item) {
	// 					hideTabContent();
	// 					showTabContent(i);
	// 					console.log(item);
	// 				} else if() {
	// 					console.log(item);
	// 				}
	// 			});
	// 		}
	// 	});
	// };
	// tabs('.filter', '.accordionr__header', '.housearch__select', 'housearch__select--active', 'active');
	
	//----------------------hamburger-----------------------
	//--------------DISPLAY--BLOCK-NONE-------------------
		const hamburger = (hamburgerButton, hamburgerButtonActive, hamburgerNav, hamburgerNavActive, hamburgerHeader, headerMenuActive) => {
			const button = document.querySelectorAll(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
			
			if(button) {
				if(nav) {

					button.forEach(element => {
						element.addEventListener('click', (e) => {
							element.classList.toggle(hamburgerButtonActive);
							nav.classList.toggle(hamburgerNavActive);
							header.classList.toggle(headerMenuActive);
						});
					});

				}
			}

		};
		hamburger('.hamburger', 'hamburger--active', '.header__nav', 'header__nav--active', '.header', 'header--menu');
		hamburger('.btnSearch', 'btnSerach--active', '.header__search_wrap', 'header__search_wrap--active', '.header', 'a');
		hamburger('.filter__title', 'filter__title--active', '.filter__content', 'filter__content--active', '.header', 'a');

//--------------------MAP--SEARCH--SWITCH----------
		const map = (mapButton, listButton, houseListMap, btnFilterActive, houseListMapActive, houselist, houselistActive) => {
			const mapButtonActive = document.querySelector(mapButton),
						listButtonActive = document.querySelector(listButton),
						wrap = document.querySelector(houseListMap);
						object = document.querySelector(houselist)
			
			if(mapButtonActive) {
				mapButtonActive.addEventListener('click', (e) => {
					mapButtonActive.classList.add(btnFilterActive);
					wrap.classList.add(houseListMapActive);
					listButtonActive.classList.remove(btnFilterActive);
					object.classList.add(houselistActive);
				});
			}

			if(listButtonActive) {
				listButtonActive.addEventListener('click', (e) => {
					mapButtonActive.classList.remove(btnFilterActive);
					wrap.classList.remove(houseListMapActive);
					listButtonActive.classList.add(btnFilterActive);
					object.classList.remove(houselistActive);
				});
			}

		};
		map('.btn--map', '.btn--list' , '.houselist__map', 'btn--filter--active', 'houselist__map--active', '.houselist', 'houselist--active');


	//-------------ACCORDION---------------
		// const accordions = (accordionSelector) => {
		// 	const	accordion = document.querySelectorAll(accordionSelector);

		// 	if (document.documentElement.clientWidth < 768) {
		// 		accordion.forEach(item => {
		// 			const accordionClick = item.querySelector('.accordion__header'),
		// 						accordionContent = item.querySelector('.accordion__content');
			
		// 			accordionClick.addEventListener('click', (e) => {
		// 				if(!item.classList.contains('accordion--active')) {
			
		// 					item.classList.add('accordion--active')
		// 					accordionContent.style.height = "auto"
		// 					var height = accordionContent.clientHeight + "px"
		// 					accordionContent.style.height = "0px"
			
		// 					setTimeout(() => {
		// 						accordionContent.style.height = height
		// 					}, 0)
			
		// 				} else {
		// 					accordionContent.style.height = "0px"
		// 					item.classList.remove('accordion--active')
		// 				}
		// 			});
		// 		});
		// 	};
		// };
		// accordions('.accordion');

	//-----------------------accordion--1------------------
	const accordions = (accordionSelector) => {
		const	accordion = document.querySelectorAll(accordionSelector);
		if (document.documentElement.clientWidth < 768) {
			if(accordion) {
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
			}
		};
		if (document.documentElement.clientWidth > 768) {
			if(accordion) {
				accordion.forEach(item => {
					const accordionClickr = item.querySelector('.accordion__header'),
								accordionContentr = item.querySelector('.accordion__content');
								// console.log(item);

					accordionClickr.addEventListener('click', (e) => {

						if(!item.classList.contains('accordion--active')) {
							accordion.forEach(item => { 
								item.classList.remove('accordion--active');
							});
						}

						if(!item.classList.contains('accordion--active')) {
							item.classList.add('accordion--active');
							
						} else {
							item.classList.remove('accordion--active');
						}
						
					});
				});
			}
		};
	};
	accordions('.accordion');

	//------------------------accordion--2----------------
		const accordionsr = (accordionSelector) => {
			const	accordionr = document.querySelectorAll(accordionSelector);
			if (document.documentElement.clientWidth < 993) {
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
			if (document.documentElement.clientWidth > 993) {
				if(accordionr) {
					accordionr.forEach(item => {
						const accordionClickr = item.querySelector('.accordionr__header'),
									accordionContentr = item.querySelector('.accordionr__content');
									// console.log(item);

						accordionClickr.addEventListener('click', (e) => {

							if(!item.classList.contains('accordionr--active')) {
								accordionr.forEach(item => { 
									item.classList.remove('accordionr--active');
								});
							}

							if(!item.classList.contains('accordionr--active')) {
								item.classList.add('accordionr--active');
								
							} else {
								item.classList.remove('accordionr--active');
							}
							
						});
					});
				}
			};
		};
		accordionsr('.accordionr');


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

		var x, i;
		/* Find all elements with an "overlay" class: */
		x = document.getElementsByClassName("img-comp-overlay");
		for (i = 0; i < x.length; i++) {
			/* Once for each "overlay" element:
			pass the "overlay" element as a parameter when executing the compareImages function: */
			compareImages(x[i]);
		}
		function compareImages(img) {
			var slider, img, clicked = 0, w, h;
			/* Get the width and height of the img element */
			w = img.offsetWidth;
			h = img.offsetHeight;
			/* Set the width of the img element to 50%: */
			img.style.width = (w / 2) + "px";
			/* Create slider: */
			slider = document.createElement("DIV");
			slider.setAttribute("class", "img-comp-slider");
			/* Insert slider */
			img.parentElement.insertBefore(slider, img);
			/* Position the slider in the middle: */
			slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
			slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
			/* Execute a function when the mouse button is pressed: */
			slider.addEventListener("mousedown", slideReady);
			/* And another function when the mouse button is released: */
			window.addEventListener("mouseup", slideFinish);
			/* Or touched (for touch screens: */
			slider.addEventListener("touchstart", slideReady);
				/* And released (for touch screens: */
			window.addEventListener("touchend", slideFinish);
			function slideReady(e) {
				/* Prevent any other actions that may occur when moving over the image: */
				e.preventDefault();
				/* The slider is now clicked and ready to move: */
				clicked = 1;
				/* Execute a function when the slider is moved: */
				window.addEventListener("mousemove", slideMove);
				window.addEventListener("touchmove", slideMove);
			}
			function slideFinish() {
				/* The slider is no longer clicked: */
				clicked = 0;
			}
			function slideMove(e) {
				var pos;
				/* If the slider is no longer clicked, exit this function: */
				if (clicked == 0) return false;
				/* Get the cursor's x position: */
				pos = getCursorPos(e)
				/* Prevent the slider from being positioned outside the image: */
				if (pos < 0) pos = 0;
				if (pos > w) pos = w;
				/* Execute a function that will resize the overlay image according to the cursor: */
				slide(pos);
			}
			function getCursorPos(e) {
				var a, x = 0;
				e = (e.changedTouches) ? e.changedTouches[0] : e;
				/* Get the x positions of the image: */
				a = img.getBoundingClientRect();
				/* Calculate the cursor's x coordinate, relative to the image: */
				x = e.pageX - a.left;
				/* Consider any page scrolling: */
				x = x - window.pageXOffset;
				return x;
			}
			function slide(x) {
				/* Resize the image: */
				img.style.width = x + "px";
				/* Position the slider: */
				slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
			}
		}

});

const postImageButton = document.getElementById('post-image-button');
const postAudioButton = document.getElementById('post-audio-button');

const url = 'https://59f9-181-237-102-15.ngrok-free.app'

postAudioButton.addEventListener('click', () => {
	const audioInput = document.getElementById('audio-input');
	const audio = audioInput.files[0];
	convertFileToBase64(audio)
		.then((audioBase64) => {
			console.log(audioBase64);
			// Continue processing the base64 audio here
			postAudio(audioBase64);
		})
		.catch((error) => {
			console.error(error);
		});
});

postImageButton.addEventListener('click', () => {
	const imageInput = document.getElementById('image-input');
	const image = imageInput.files[0];
	convertFileToBase64(image)
		.then((imageBase64) => {
			console.log(imageBase64);
			// Continue processing the base64 image here
			postImage(imageBase64);
		})
		.catch((error) => {
			console.error(error);
		});
});

const postImage = async (base64) => {
	return await fetch(url+'/api/images', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ base64 }),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error sending image');
			}
			return response.json();
		})
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.error(error);
		});
};

const postAudio = async (base64) => {
	return await fetch(url+'/api/mp3', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ base64 }),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error sending audio');
			}
			return response.json();
		})
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.error(error);
		});
};




const convertFileToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = (error) => {
			reject(error);
		};
		reader.readAsDataURL(file);
	});
};

const getImages = async () => {
	return await fetch(url+'/api/images/')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error getting images');
			}
			return response.json();
		})
		.then((result) => {
			console.log(result);
			return result;
		})
		.catch((error) => {
			console.error(error);
		});
};

const getAudios = async () => {
	return await fetch(url+'/api/mp3/')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error getting audios');
			}
			return response.json();
		})
		.then((result) => {
			console.log(result);
			return result;
		})
		.catch((error) => {
			console.error(error);
		});
};

const base64ToImage = (base64) => {
	const image = new Image();
	image.src = base64;
	return image;
};

const base64ToAudio = (base64) => {
	const audio = new Audio();
	audio.src = base64;
	return audio;
};

// mostrar imagenes

const imageContainer = document.getElementById('image-container');
const audioContainer = document.getElementById('audio-container');

// Show images
getImages()
	.then((images) => {
		images.forEach((image) => {
			// add the converted image to the src attribute

			const imageElement = base64ToImage(image.image);
			imageElement.classList.add('image');
			// add a max-width of 100px
			imageElement.style.maxWidth = '100px';
			imageContainer.appendChild(imageElement);
		});
	})
	.catch((error) => {
		console.error(error);
	});

// Show audios
getAudios()
	.then((audios) => {
		audios.forEach((audio) => {
			// add the converted audio to the src attribute
			const audioElement = base64ToAudio(audio.mp3);
			audioElement.classList.add('audio');
			// add atrributes to the audio element
			audioElement.setAttribute('controls', '');
			audioContainer.appendChild(audioElement);
		});
	})
	.catch((error) => {
		console.error(error);
	});

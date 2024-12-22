function fetchCatImages() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(() => {
            resolve([
                "images/cat1.jpg",
                "images/cat2.jpg", 
                "images/cat3.jpg"  
            ]);
        }, delay);
    });
}

function fetchDogImages() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 2000; 
        setTimeout(() => {
            resolve([
                "images/dog1.jpg", 
                "images/dog2.jpg", 
                "images/dog3.jpg" 
            ]);
        }, delay);
    });
}

function displayImages(containerId, images) {
    const container = document.getElementById(containerId);
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);
    });
}

Promise.all([fetchCatImages(), fetchDogImages()])
    .then(results => {
        const [catImages, dogImages] = results;

        displayImages('cat-images', catImages);
        displayImages('dog-images', dogImages);
    })
    .catch(error => {
        console.error("Ошибка загрузки изображений:", error);
    });

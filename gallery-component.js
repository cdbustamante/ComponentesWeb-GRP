
// Definición del componente de galería de imágenes
class ImageGallery extends HTMLElement {
    constructor() {
        super();

        // Estado inicial
        this.images = [
            'images/image1.jpeg',
            'images/image2.jpeg',
            'images/image3.jpg',
            'images/image4.jpg',
            // Agrega más imágenes según sea necesario
        ];
        this.currentImageIndex = 0;

        // Crea el shadow DOM
        //this.attachShadow({ mode: 'open' });

        // Renderiza la galería
        this.render();
    }

    // Método para renderizar la galería
    render() {
        this.innerHTML = `
            <div class ="container-fluid">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/image1.jpeg" class="d-block w-100 h-50 img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image2.jpeg" class="d-block w-100 img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image3.jpg" class="d-block w-100 img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image4.jpg" class="d-block img-fluid" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        `;

        /*
        // Agrega eventos a los botones
        this.shadowRoot.getElementById('prevButton').addEventListener('click', () => this.showPrevImage());
        this.shadowRoot.getElementById('nextButton').addEventListener('click', () => this.showNextImage());
        */
    }
    /*
    // Método para mostrar la imagen anterior
    showPrevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    // Método para mostrar la siguiente imagen
    showNextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.updateImage();
    }

    // Método para actualizar la imagen mostrada
    updateImage() {
        this.shadowRoot.querySelector('img').src = this.images[this.currentImageIndex];
    }
    */
}

// Define el nuevo elemento personalizado
customElements.define('primer-carrusel', ImageGallery);

/*
render() {
    this.shadowRoot.innerHTML = `
        <div class="image-gallery">
            <button class="button" id="prevButton">&lt;</button>
            <img src="${this.images[this.currentImageIndex]}" alt="Gallery Image">
            <button class="button" id="nextButton">&gt;</button>
        </div>
    `;

    // Agrega eventos a los botones
    this.shadowRoot.getElementById('prevButton').addEventListener('click', () => this.showPrevImage());
    this.shadowRoot.getElementById('nextButton').addEventListener('click', () => this.showNextImage());
}
*/
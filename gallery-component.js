
class ImageGallery extends HTMLElement {
    constructor() {
        super();
        this.inicial();
    }

    inicial() {
        this.innerHTML = `
       <div class="carouselContainer">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/image1.jpg" class="d-block  img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image2.jpg" class="d-block img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image3.jpg" class="d-block  img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="images/image4.jpg" class="d-block img-fluid" alt="...">
                    </div>
                </div>
            </div>
            
            <div class="carousel-indicators" style="margin-bottom: -20px;">

                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="width: 100px;">
                    <img class="d-block w-100" src="images/image1.jpg" class="img-fluid" />
                </button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2" style="width: 100px;">
                    <img class="d-block w-100" src="images/image2.jpg" class="img-fluid" />
                </button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3" style="width: 100px;">
                    <img class="d-block w-100" src="images/image3.jpg" class="img-fluid" />
                </button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" class="active" aria-current="true" aria-label="Slide 4" style="width: 100px;">
                    <img class="d-block w-100" src="images/image4.jpg" class="img-fluid" />
                </button>
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


    }
}
customElements.define('primer-carrusel', ImageGallery);
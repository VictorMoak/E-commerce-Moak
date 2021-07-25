$('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});

$('.slider-prod').slick({

    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});

function save() {
    alert('Enviado com sucesso');
}

async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/');
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.error(error);
    }

}

getContent()
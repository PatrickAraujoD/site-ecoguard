$(document).ready(function () {
    function fetchData(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          callback(data);
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    }

    fetchData('https://servidor-banco-de-dados-production.up.railway.app/getInstagramFeed', function (instagramData) {
      console.log(instagramData);

      const instagramFeedElement = $('#instagram-feed');

      instagramFeedElement.html('');

      // Verifique se há dados de publicações
      if (instagramData.data && instagramData.data.length > 0) {
        // Itere sobre as publicações e exiba na página
        instagramData.data.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('instagram-post');

          if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
            // Crie elementos de imagem para imagens e álbuns
            createImageElements(post, postElement);
          }

          instagramFeedElement.append(postElement);
        });

        // Inicialize o Slick Carousel após adicionar as imagens
        instagramFeedElement.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
          dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 798, 
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });


      } else {
        // Caso não haja publicações
        instagramFeedElement.html('<p>Nenhuma publicação encontrada.</p>');
      }
    });

    function createImageElements(post, postElement) {
  
  const anchorElement = document.createElement('a');
  anchorElement.href = post.permalink;


  const containerElement = document.createElement('div');
  containerElement.classList.add('post-container');


  const imageElement = document.createElement('img');
  imageElement.src = post.media_url;
  imageElement.alt = 'Instagram Image';
  imageElement.classList.add('instagram-image');

  anchorElement.appendChild(imageElement);
  containerElement.appendChild(anchorElement);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  const anchorElemento = document.createElement('a');
  anchorElemento.href = post.permalink;
  const captionElement = document.createElement('p');
  captionElement.innerText = post.caption;
  captionElement.style.color="black";
  anchorElemento.appendChild(captionElement);
  textContainer.appendChild(anchorElemento);

  
  containerElement.appendChild(textContainer);

  
  postElement.appendChild(containerElement);


 
}

  });
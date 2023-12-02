async function enviarFormulario(event) {
    console.log('Função enviarFormulario acionada.');
    event.preventDefault();

    const protocolo = document.getElementById('protocolo').value;
     console.log(protocolo);
    const loadingDiv = document.getElementById('loadingDiv');

    if (loadingDiv) {
      loadingDiv.style.display = 'block';
    }

    if (protocolo) {
      try {
        const response = await fetch(`https://servidor-banco-de-dados-production.up.railway.app/obterDenuncia/${protocolo}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          if (loadingDiv) {
            loadingDiv.style.display = 'none';
          }

          const responseData = await response.json();
          const url = `/src/feedback.html?id=${responseData.id}`;
          window.location.href = url;
        } else {
          console.error('Erro ao obter denúncia:', response.statusText);
          if (loadingDiv) {
            loadingDiv.style.display = 'none';
          }

          const errordiv = document.getElementById('errordiv');

          if (errordiv) {
            errordiv.style.display = 'block';
          }
        }
      } catch (error) {
        console.error('Erro ao enviar a solicitação:', error);
      }
    }
  }

  function fecharMensagem2() {
    const errordiv = document.getElementById('errordiv');

    if (errordiv) {
      errordiv.style.display = 'none';
    }
  }

  function fecharMensagem1() {
    const loadingDiv = document.getElementById('loadingDiv');

    if (loadingDiv) {
      loadingDiv.style.display = 'none';
    }
  }
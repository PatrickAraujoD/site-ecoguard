async function carregarDenuncia() {
    const urlParams = new URLSearchParams(window.location.search);
    const protocolo = urlParams.get('id');
  
    // Verificar se o protocolo está definido
    if (!protocolo) {
      console.error('Protocolo não definido');
      return;
    }
    try {
      const response = await fetch(`https://servidor-banco-de-dados-production.up.railway.app/obterDenuncia/${protocolo}`);
      
      if (response.ok) {
        const denunciaData = await response.json();
        // Exibir informações da denúncia na div denunciaInfo
        const denunciaInfo = document.getElementById('denunciaInfo');
        if (denunciaInfo) {
          const contatoInfo = denunciaData.contato && denunciaData.contato.trim() !== '' ? denunciaData.contato : 'Sem informações de contato';            
          const feedbackInfo = denunciaData.respostaemail ? denunciaData.respostaemail : 'Aguardando feedback';

          denunciaInfo.innerHTML = `
            <div class="subtitulo">
            <h1> <span class="color">Protocolo:</span> ${denunciaData.protocolo}</h1>
            <h1><span class="color">Status:</span> Enviado</h1>
            </div>
            </div>
            <p><span class="color">Denúncia sobre:</span><br>${denunciaData.tipo_de_denuncia}</p>
            <p><span class="color">Data do Ocorrido:</span><br>${denunciaData.data_do_ocorrido}</p>
            <p><span class="color">Relato:</span><br>${denunciaData.relato}</p>
            <p><span class="color">Logradouro:</span><br>${denunciaData.logradouro}</p>
            <p><span class="color">Complemento:</span><br>${denunciaData.complemento}</p>
            <p><span class="color">Cidade:</span><br>${denunciaData.cidade}</p>
            <p><span class="color">Bairro:</span><br>${denunciaData.bairro}</p>
            <p><span class="color">Descrição do local:</span><br>${denunciaData.descricao_do_local}</p>
            <p><span class="color">Contato:</span><br>${contatoInfo}</p>
            <p><span class="color">Feedback:</span><br>${feedbackInfo}</p>
          `;
        }
      } else {
        console.error('Erro ao obter denúncia:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  }
  // Chame a função ao carregar a página
  window.onload = carregarDenuncia;
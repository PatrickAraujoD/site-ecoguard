async function enviarFormulario(event) {
  event.preventDefault();

  const tipodedenuncia = document.getElementById('tipodedenuncia').value;
  const dataInput = document.getElementById('data');
  const inputValue = dataInput.value;
  const selectedDate = new Date(inputValue);
  const data = selectedDate.toLocaleDateString('pt-BR');
  const relato = document.getElementById('relato').value;
  const logradouro = document.getElementById('logradouro').value;
  const complemento = document.getElementById('complemento').value;
  const cidade = document.getElementById('cidade').value;
  const bairro = document.getElementById('bairro').value;
  const descricaoLocal = document.getElementById('descricaoLocal').value;
  const contatos = document.getElementById('contatos').value;


  const loadingDiv = document.getElementById('loadingDiv');
  
  if (loadingDiv) {
    loadingDiv.style.display = 'block';
  }
  try {

    const response = await fetch('https://servidor-banco-de-dados-production.up.railway.app/inserirResposta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tipodedenuncia,
        data,
        relato,
        logradouro,
        complemento,
        cidade,
        bairro,
        descricaoLocal,
        contatos,
      }),
    });

    if (response.ok) {
      if (loadingDiv) {
        loadingDiv.style.display = 'none';
      }
      // Obter o ID da denúncia a partir da resposta do servidor
      const responseData = await response.json();
      const idDaDenuncia = responseData.id;
      
      // Exibir o ID na página
      const successDiv = document.getElementById('successDiv');
      const protocoloMensagem = document.getElementById('protocoloMensagem');

      if (successDiv && protocoloMensagem) {
        successDiv.style.display = 'block';
        protocoloMensagem.textContent = `Protocolo: ${idDaDenuncia}`;
      }
  
    } else {
      console.error('Erro ao inserir resposta:', response.statusText);
      if (loadingDiv) {
        loadingDiv.style.display = 'none';
      }
      // Exibir mensagem de erro
      const errordiv = document.getElementById('errordiv');
  
      if (errordiv) {
        errordiv.style.display = 'block';
      }
    }
  } catch (error) {
    console.error('Erro ao enviar a solicitação:', error);
  }
}
function fecharMensagem2() {
  // Oculta a div de sucesso
  const errordiv = document.getElementById('errordiv');
  
  if (errordiv) {
    errordiv.style.display = 'none';
  }

  
}
function fecharMensagem1() {
  // Oculta a div de sucesso
  const loadingDiv = document.getElementById('loadingDiv');

  
  if (loadingDiv) {
    loadingDiv.style.display = 'none';
  }

}

function acompanharDenuncia() {
  const protocolorepostaElement = document.getElementById('protocoloMensagem');
  const protocolorepostaTexto = protocolorepostaElement.textContent;

  // Remova a parte "Protocolo: " e obtenha apenas o número
  const idDaDenuncia = protocolorepostaTexto.replace('Protocolo: ', '');

  document.body.style.opacity = 0;
  setTimeout(function () {
    const url = `/src/feedback.html?id=${idDaDenuncia}`;
    window.location.href = url;
  }, 100); 
}

function fecharMensagem() {
  // Oculta a div de sucesso
  const successDiv = document.getElementById('successDiv');

  if (successDiv) {
    successDiv.style.display = 'none';
  }

  // Recarrega a página apenas quando o botão "Fechar" é clicado
  window.location.href = window.location.href;

}

function applyPhoneMask(input) {
  // Remove todos os caracteres não numéricos
  var value = input.value.replace(/\D/g, '');

  // Aplica a máscara (XX) XXXX-XXXX
  if (value.length >= 2) {
    value = '(' + value.substring(0, 2) + ')' + value.substring(2);
  }
  if (value.length >= 10) {
    value = value.substring(0, 9) + '-' + value.substring(9, 13);
  }

  // Define o valor do campo
  input.value = value;
}

// Get the current year
const currentYear = new Date().getFullYear();

// Format the current date as yyyy-mm-dd
const today = new Date().toISOString().split('T')[0];

// Set the max attribute of the date input
document.getElementById('data').setAttribute('max', `${currentYear}-12-31`);

// Set the value of the date input to the current date
document.getElementById('data').value = today;


async function carregarTiposDenuncia() {
  try {
    // Faz uma solicitação HTTP GET para obter tipos de denúncia do servidor
    const response = await fetch('https://servidor-banco-de-dados-production.up.railway.app/tiposdenuncia');
    const tiposDenuncia = await response.json();

    // Preenche dinamicamente as opções do select
    const select = document.getElementById('tipodedenuncia');
    select.innerHTML = ''; // Limpa as opções existentes

    tiposDenuncia.forEach(tipo => {
      const option = document.createElement('option');
      option.value = tipo;
      option.textContent = tipo;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Erro ao carregar tipos de denúncia:', error);
    alert('Erro ao carregar tipos de denúncia. Consulte o console para obter mais detalhes.');
  }
}

// Chama a função para carregar tipos de denúncia ao carregar a página (opcional)
document.addEventListener('DOMContentLoaded', carregarTiposDenuncia);
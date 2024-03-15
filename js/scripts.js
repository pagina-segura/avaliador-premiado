    const inicioDiv = document.getElementById('inicio');
    const saqueDiv = document.getElementById('saque');
    const loginDiv = document.getElementById('login');
    const bonusDiv = document.getElementById('bonus');

    function playAudio() {
        var audio = document.getElementById("meuAudio");
        audio.play();
    }

    // Função para definir um cookie
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
    }
    
    // Função para obter o valor de um cookie
    function getCookie(cname) {
        const name = `${cname}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
    
    let valor = parseFloat(getCookie('valor')) || 50.00;
    const valorSpan = document.getElementById('valor');
    const valorSpanSaque = document.getElementById('valor-saque');
    const valorSpanMoney = document.getElementById('valor-money');
    
    function atualizarValor() {
        valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
        valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
        valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    }
    
    atualizarValor(); // Atualiza o valor inicial na caixa de valor
    
    // Array com os valores desejados
    const valoresDesejados = [36, 24, 40];

    // Função para aumentar o valor
    function aumentarValor() {
        // Se ainda houver valores no array
        if (valoresDesejados.length > 0) {
            // Retira o próximo valor do array
            const valorIncremento = valoresDesejados.shift();

            // Adiciona o valor ao total
            valor += valorIncremento;

            // Atualiza e verifica o valor
            atualizarValor();
            verificarValor();
        }
    }  

    
    


    function mostrarPagina(pagina) {
      inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
      loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
    }
    
    function trocarDiv(esconderId, mostrarId) {
      document.getElementById(esconderId).style.display = 'none';
      document.getElementById(mostrarId).style.display = 'block';
    }

    // Atualizar o valor exibido inicialmente
    atualizarValor();
    
    
    
    
    //--------------------------------- Ad 0 ---------------------------------
    
  function showPopupB0() {
      document.getElementById('B0').disabled = true;
      document.getElementById('popupB0').style.display = 'block';
  }
  
  function closePopupB0() {
      document.getElementById('popupB0').style.display = 'none';
      document.getElementById('B0').disabled = true;
  }   

  function showLoadingB0() {
    closePopupB0();
  }

  //--------------------------------- Ad 1 ---------------------------------
    
    function showPopupB1() {
        document.getElementById('B1').disabled = true;
        document.getElementById('popupB1').style.display = 'block';
    }
    
    function closePopupB1() {
        document.getElementById('popupB1').style.display = 'none';
        document.getElementById('B1').disabled = true;
    }   
    
    // Carregando B1
        function showLoadingB1() {
            var button = document.getElementById("B1");
                playAudio();
                aumentarValor();
                showPopupB1();
                // Simulando um atraso de 3 segundos para o showPopup2()
                setTimeout(function () {
                    closePopupB1();
                    trocarDiv('ad1', 'ad2');
                }, 4000); // 3 segundos
            }
    
    
    //--------------------------------- Ad 2 ---------------------------------
    
    
    function showPopupB2() {
        document.getElementById('popupB2').style.display = 'block';
        document.getElementById('B2').disabled = true;
    }
    
    function closePopupB2() {
        document.getElementById('popupB2').style.display = 'none';
        document.getElementById('B2').disabled = true;
    }   
    
    // Carregando B2
        function showLoadingB2() {
            var button = document.getElementById("B2");
                playAudio();
                aumentarValor();
                showPopupB2();
                // Simulando um atraso de 3 segundos para o showPopup2()
                setTimeout(function () {
                    closePopupB2(); 
                    trocarDiv('ad2', 'ad3');
                }, 4000); // 3 segundos
            }
    
        
    //--------------------------------- Ad 3 ---------------------------------
    
    
    function showPopupB3() {
        document.getElementById('popupB3').style.display = 'block';
        document.getElementById('B3').disabled = true;
    }
    
    function closePopupB3() {
        document.getElementById('popupB3').style.display = 'none';
        document.getElementById('B3').disabled = true;
    }   
    

        function showLoadingB3() {
            var button = document.getElementById("B3");
                playAudio();
                aumentarValor();
                showPopupB3();
            }

        function showSaque() {
          closePopupB3();
          trocarDiv('ad3', 'ad4');
        }
    
    
    //--------------------------------- Ad 4 ---------------------------------
    
    
    function showPopupB4() {
        document.getElementById('popupB4').style.display = 'block';
        document.getElementById('B4').disabled = true;
    }
    
    function closePopupB4() {
        document.getElementById('popupB4').style.display = 'none';
        document.getElementById('B4').disabled = true;
    }   
    

        function showLoadingB4() {
            var button = document.getElementById("B4");
                showPopupB4();
            }
    
    


    // Popup SAQUE
    
    function showPopup() {
      document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }  

    // Popup LIMITE DIÁRIO
    
    function showPopupL() {
      document.getElementById('popupL').style.display = 'block';
    }

    function closePopupL() {
      document.getElementById('popupL').style.display = 'none';
    }  

 

    // POPUP Limite diário quando bate X valor
    function verificarValor() {
        if (valor > 100000) {
            // Popup para valor >= 1362.60 e < 2725.20
            showPopupL();
        }
        
    }
   

    
    
    function fecharPopupEAgendarReaparecimento() {
        var popupButtonContainer = document.querySelector(".popup-buttonL-container");
        popupButtonContainer.style.display = "none"; // Oculta o botão
    
        // Define um temporizador para mostrar o botão após 10 segundos
        setTimeout(function() {
            popupButtonContainer.style.display = "block";
        }, 86400000); // 24 horas
    
        // Aqui você também deve adicionar a função para fechar o popup
        closePopupL();
    }
    
    // Chama a função para mostrar o botão após 10 segundos (10000 milissegundos)
    setTimeout(function() {
        var botaoContainer = document.querySelector(".popup-buttonL-container");
        botaoContainer.style.display = "block";
    }, 86400000); // 24 horas


    // Script botão login
    function showLoading() {
      var button = document.getElementById("prosseguir-button");
      button.disabled = true; // Desabilitar o botão enquanto a animação ocorre

      button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

      // Simulando um atraso de 3 segundos para a animação
      setTimeout(function() {
        // Redirecionar após o atraso
        mostrarPagina('inicio');
      }, 2000); // 2 segundos
    }
    

    
    
    function formatarValor(input) {
      // Remove todos os caracteres não numéricos
      var valor = input.value.replace(/[^0-9]/g, '');
      
      // Divide o valor em parte inteira e decimal
      var parteInteira = valor.slice(0, -2);
      var centavos = valor.slice(-2);
      
      // Reconstroi o valor formatado
      input.value = parteInteira + '.' + centavos;
    }
    
    function verificarCampos() {
        var email = document.getElementById("email").value;
        var emailValido = /\S+@\S+\.\S+/;
    
        if (email === "") {
            alert("Insira seu e-mail para logar!");
        } else if (!emailValido.test(email)) {
            alert("Insira um e-mail válido!");
        } else {
            // Se o campo estiver preenchido e for um e-mail válido, redireciona para a próxima página
            showLoading();
        }
    }


    function showPopupInicio() {
        document.getElementById('popupinicio').style.display = 'block';
      }
  
    function closePopupInicio() {
        document.getElementById('popupinicio').style.display = 'none';
    }


    function in1() {
        closePopupInicio();
        showPopupInicio2();

            // Agendar a exibição do próximo após 5 segundos
            setTimeout(function() {
                closePopupInicio2();
                showPopupInicio3();
            }, 10000);
    }    


     
      
      // ----------------- TESTE ANUNCIO 1 -----------------

      document.addEventListener('DOMContentLoaded', function () {
        const containers = document.querySelectorAll('.rating-container');
      
        containers.forEach(function (container) {
          const buttons = container.querySelectorAll('.rating-button');
      
          buttons.forEach(function (button) {
            button.addEventListener('click', function () {
              // Remove a classe 'active' apenas do conjunto de botões dentro do mesmo container
              buttons.forEach(function (btn) {
                btn.classList.remove('active');
              });
      
              // Adiciona a classe 'active' apenas ao botão clicado
              button.classList.add('active');
            });
          });
        });
      });
      
      //---------------------------- Botão chave PIX ---------------------------
     
     
    let activeButton = null;

    function toggleButton(buttonNumber) {
      const buttons = document.querySelectorAll('.square-button');
  
      if (activeButton !== null) {
       buttons[activeButton - 1].classList.remove('active');
      }
  
      if (activeButton === buttonNumber) {
        activeButton = null;
      } else {
        buttons[buttonNumber - 1].classList.add('active');
        activeButton = buttonNumber;
      }
    } 



  setTimeout(function () {
    var button = document.querySelector("#B5");

    var link = "https://metodo-lucrativo.tech/pvsl";

    button.addEventListener("click", function () {
      window.location.href = link + window.location.search;
    });
  }, 1000);



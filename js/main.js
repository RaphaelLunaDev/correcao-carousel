$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: {
                required: 'Por favor, insira seu e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            telefone: 'Por favor, insira seu telefone',
            endereco: 'Por favor, insira seu endereço completo',
            cep: 'Por favor, insira seu CEP',
            cpf: 'Por favor, insira seu CPF'
        },
        submitHandler: function(form) {
            alert('seus dados foram enviados')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos Não preenchidos`);
            }
        }
    });
});

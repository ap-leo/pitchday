const sobre = document.getElementById("sobre_b");
const participe = document.getElementById("participe_b");
const cronograma = document.getElementById("cronograma_b")
const local = document.getElementById("local_b");
const foguete = document.getElementById("foguete")
const engrenagem = document.getElementById("engrenagem")
const ideia = document.getElementById("ideia")
const texto = document.getElementById("data")
const texto2a = document.getElementById("texto-1")
const texto2b = document.getElementById("texto-2")
const parceiros = document.getElementById("parceiros_b")
const barras = document.getElementById("barras")
const imagens_f = document.getElementsByClassName("imagens-f")

var barra_aux = 0;  /* essa var começa em 0 para que ao apertar fora da barra ela se feche */

barras.addEventListener("click", function () {  /* funcao para o menu do mobile, sempre que apertarmos na barra, os itens trocam de display flex/none */
    var elementosTopo = document.querySelectorAll(".topo");
    elementosTopo.forEach(function (elemento) {
        if (barra_aux === 0) {
            elemento.style.display = "flex";
        } else {
            setTimeout(function () {
                elementosTopo.forEach(function (elemento) {
                    elemento.style.display = "none";
                });
                barra_aux = 0;  /* se algum item for selecionado, a barra desaparece após 0,1 segundo e volta ao seu estado inicial */
            }, 100);
        }
    });

    barra_aux = (barra_aux === 0) ? 1 : 0; /* para a barra fechar ao ser clicada novamente, ela se torna um e então entra no else e recebe 0 */
});

barras.addEventListener("mouseleave", function () {         /* funcao caso apertem fora da barra, apenas fecha ela e barra recebe 0 */
    var elementosTopo = document.querySelectorAll(".topo");
    elementosTopo.forEach(function (elemento) {
        setTimeout(function () {
            elementosTopo.forEach(function (elemento) {
                elemento.style.display = "none";
            });
            barra_aux = 0;  /* se algum item for selecionado, a barra desaparece após 0,1 segundo e volta ao seu estado inicial */
        }, 100);

    });
});

const entreset = document.getElementById("entreset")
const setadir = document.getElementById("setdir")
const setaesq = document.getElementById("setesq")
var rodar = 0;
const imagens2 = [
    "/imagens/pitch.png",
    "/imagens/startupexperience.png",
    "/imagens/bode2.png",
    "/imagens/cptv.svg",
    "/imagens/instaufpr.png",
    "/imagens/funpar.png"
];

function trocar2(op) {
    if (op == 1) {
        if (rodar < imagens2.length - 1) {
            rodar++;
        } else {
            rodar = 0;
        }
    }
    else {
        if (rodar > 0) {
            rodar--;
        } else {
            rodar = imagens2.length - 1;
        }
    }
    entreset.src = imagens2[rodar]
    switch (rodar) {
        case 0:
            texto2a.innerHTML = "_Pitch Day 2023"
            texto2b.innerHTML = "Evento de extensão focado na <strong>apresentação de trabalhos</strong> desenvolvidos por alunos, técnicos e professores da UFPR com o foco em <strong>inovação</strong>, <strong>empreendedorismo</strong>, <strong>parcerias</strong> e <strong>transferência de tecnologia</strong>.<br><br> O evento é de <strong>graça</strong> e <strong>aberto</strong> para a comunidade!"
            break;
        case 1:
            texto2a.innerHTML = "_Startup Experience"
            texto2b.innerHTML = "<strong>Iniciativa Startup Experience</strong> consiste em um <strong>programa de extensão</strong> da Universidade Federal do Paraná, vinculado ao Departamento de Engenharia Elétrica, com o <strong>foco em inovação, empreendedorismo, interdisciplinaridade e tecnologia.</strong>"
            break;
        case 2:
            texto2a.innerHTML = "_Bodebrown"
            texto2b.innerHTML = "A <strong>Cervejaria Bodebrown</strong>, em Curitiba, é um ícone cervejeiro e cultural, oferecendo não apenas <strong>cervejas artesanais de alta qualidade</strong>, mas também noites de música ao vivo em um <strong>espaço acolhedor que destaca talentos locais</strong>. Inclusive no dia do <strong>Pitch Day</strong> com diversas bandas e inúmeras <strong>oportunidades</strong>."
            break;
        case 3:
            texto2a.innerHTML = "_CPT"
            texto2b.innerHTML ="Projeto de Extensão da UFPR/NPDEAS destinado a <strong>divulgação da Ciência</strong> com foco em professores e alunos de nível fundamental, médio e profissionalizante. Os alunos de graduação fazem parte de um ambiente de coworking com desenvolvimento de <strong>tecnologias IoT, energias renováveis, mobilidade urbana e ambientais</strong>."
            break;
        case 4:
            texto2a.innerHTML = "_Insta-UFPR"
            texto2b.innerHTML = "O <strong>INSTA</strong> (Instituto de Soluções Tecnológicas Aplicadas) da <strong>UFPR</strong> é um centro de excelência que se destaca por oferecer <strong>especializações</strong> de alta <strong>qualidade</strong> e altamente <strong>tecnológicas</strong>. Com uma abordagem inovadora e uma equipe de <strong>renomados professores e pesquisadores</strong>, o INSTA proporciona aos alunos a oportunidade de aprimorar suas habilidades preparando-os para os <strong>desafios do mundo digital</strong> em constante evolução."
            break;
        default:
            texto2a.innerHTML = "_FUNPAR"
            texto2b.innerHTML = "A <strong>FUNPAR</strong> é uma instituição de direito privado, credenciada a <strong>apoiar</strong> a Universidade Federal do Paraná – <strong>UFPR em projetos</strong> de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação."
    }
}

entreset.src = imagens2[rodar]

setadir.addEventListener("click", function () {
    trocar2(1);
});
setaesq.addEventListener("click", function () {
    trocar2(2);
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
    sobre.classList.add("transparencia50");
    participe.classList.add("transparencia50");
    local.classList.add("transparencia50");
    cronograma.classList.add("transparencia50");
    parceiros.classList.add("transparencia50");
}

/* funcoes que trocam a transparencia do parametro */
function transparencia(botao) {
    botao.classList.replace("transparencia50", "transparencia100");
}

function transparencia50(botao) {
    botao.classList.replace("transparencia100", "transparencia50");
}

function transparencia100(img) {
    img.classList.replace("transparencia0_img", "transparencia100_img");
}
function transparencia0(img) {
    img.classList.replace("transparencia100_img", "transparencia0_img");
}

/* chama transparencia para o botao onde o mouse esta em cima */
sobre.addEventListener("mouseenter", function () {
    transparencia(sobre);
});
sobre.addEventListener("mouseleave", function () {
    transparencia50(sobre);
});

participe.addEventListener("mouseenter", function () {
    transparencia(participe);
});
participe.addEventListener("mouseleave", function () {
    transparencia50(participe);
});

cronograma.addEventListener("mouseenter", function () {
    transparencia(cronograma);
});
cronograma.addEventListener("mouseleave", function () {
    transparencia50(cronograma);
});

local.addEventListener("mouseenter", function () {
    transparencia(local);
});
local.addEventListener("mouseleave", function () {
    transparencia50(local);
});

parceiros.addEventListener("mouseenter", function () {
    transparencia(parceiros);
});
parceiros.addEventListener("mouseleave", function () {
    transparencia50(parceiros);
});

/* vetor de texto de acordo com o vetor de imagem */
const textos = [
    "11 novembro }",
    "crie }",
    "compartilhe }",
]
let trocando = 0;

var text = textos[trocando];
let charIndex = 0;
const dataElement = document.getElementById("data");



function typeText() {
    if (charIndex < text.length) {
        dataElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Intervalo de 50ms entre letras
    } else {
        dataElement.classList.add('blink-caret');
        charIndex = 0; // Reinicie o índice de caracteres para que a função possa ser chamada novamente.
    }
}


typeText();
function trocar() {
    dataElement.innerHTML = '&nbsp;';
    setTimeout(function () {
        if (trocando == 2) {
            trocando = 0;
        }
        else {
            trocando++;
        }
        text = textos[trocando];
        typeText();
    }, 200);
}

setInterval(trocar, 4000);  /* chama-se trocar a cada 4s */
setInterval(function() {
    trocar2(1);
}, 10000);


// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", function() {
    // Busca os elementos no HTML
    const botao = document.getElementById("btn-tecnologia");
    const mensagem = document.getElementById("mensagem-status");

    // Verifica se o botão existe antes de adicionar o evento (Boa prática!)
    if (botao) {
        botao.addEventListener("click", function() {
            // Lógica para exibir um insight tecnológico
            mensagem.textContent = "💡 Sabia? A fixação biológica de nitrogênio economiza bilhões de dólares ao Brasil anualmente e reduz drasticamente a pegada de carbono!";
            mensagem.classList.toggle("hidden");
            
            // Estilização dinâmica rápida
            mensagem.style.marginTop = "1rem";
            mensagem.style.padding = "1rem";
            mensagem.style.backgroundColor = "#1b4332";
            mensagem.style.borderRadius = "5px";
        });
    }
});
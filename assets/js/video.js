var videoIds = ['d3VGlOen-o0', '0IVl1B58zVE', 'sBA_SDhIPqQ', '5yJ_cAUrpQc'];

// Variável global para armazenar os players do YouTube
var players = [];

// Função de inicialização dos players
function onYouTubeIframeAPIReady() {
    // Criação dos players
    for (var i = 0; i < videoIds.length; i++) {
        var player = new YT.Player('player' + (i + 1), {
            videoId: videoIds[i],
            events: {
                'onReady': onPlayerReady
            }
        });
        players.push(player);
    }
}

// Função executada quando um player estiver pronto
function onPlayerReady(event) {
    
}
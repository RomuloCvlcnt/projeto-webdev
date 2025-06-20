async function getClima() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-3.72&longitude=-38.51&current=temperature_2m,wind_speed_10m"

    try {
        console.log("Recebendo dados...");
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log("Dados recebidos: ", dados)

        const climaElem = document.getElementById("clima");
        climaElem.innerHTML = "🌡️ Temperatura: " + dados.current.temperature_2m + "ºC";

        return dados;
    } catch (error){
        console.error("Erro ao receber dados da api:", error);
        throw error;
    }
}

getClima();

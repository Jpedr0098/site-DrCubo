document.querySelector("#btn-calcula").addEventListener("click", calcular)
document.querySelector("#pratica").addEventListener("input", function () {
    const pratica = document.querySelector("#pratica").value

    if (pratica==1) document.querySelector("#pratica-text").innerText = "Raramente"
    else if (pratica==2) document.querySelector("#pratica-text").innerText = "1x por semana"
    else if (pratica==3) document.querySelector("#pratica-text").innerText = "2x por semana"
    else if (pratica==4) document.querySelector("#pratica-text").innerText = "3x por semana"
    else if (pratica==5) document.querySelector("#pratica-text").innerText = "4x por semana"
    else if (pratica==6) document.querySelector("#pratica-text").innerText = "5x por semana"
    else if (pratica==7) document.querySelector("#pratica-text").innerText = "6x por semana"
    else if (pratica==8) document.querySelector("#pratica-text").innerText = "1x por dia"
    else if (pratica==9) document.querySelector("#pratica-text").innerText = "2x por dia"
})

function calcular() {
    let segundos = 60
    let tempo = 0
    //qtde_f2l = 41
    //qtde_oll = 57
    //qtde_pll = 21
    
    //captura de dados HTML
    const iniciante = document.querySelector("#iniciante_sim").checked
    const formulasF2L = document.querySelector("#qtde-F2L").value
    const formulasOLL = document.querySelector("#qtde-OLL").value
    const formulasPLL = document.querySelector("#qtde-PLL").value
    const pratica = document.querySelector("#pratica").value

    if(iniciante) segundos *= 2
    
    segundos*= (100-Number(formulasF2L))/100
    segundos*= (100-Number(formulasOLL))/100
    segundos*= (100-Number(formulasPLL))/100

    if (pratica==1) tempo = 1 
    else if (pratica==2) tempo = 0.9
    else if (pratica==3) tempo = 0.8
    else if (pratica==4) tempo = 0.7
    else if (pratica==5) tempo = 0.6
    else if (pratica==6) tempo = 0.5
    else if (pratica==7) tempo = 0.4
    else if (pratica==8) tempo = 0.3
    else tempo = 0.26

    segundos *= tempo

    document.querySelector("#tempo-estimado").innerText = segundos.toFixed(0)+"s"
}
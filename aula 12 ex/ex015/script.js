function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var gênero = ''
       if (fsex[0].Checked) {
           gênero = 'Homem'
       } else if (fsex[1].Checked) {
           gênero = 'Mulher'
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
// const regex_Valor = /R$[\s]+?((\d｛1,3｝|(\d{1,3}([.]\d{3})+)),\d\d)/gm

// const regex_Taxa = /[\s]+?((\d{1,3}|(\d{1,3}([.]\d{3})+)),\d\d)\%/gm

// const regex_Data = /[\s]+?(\d\d)\/(\d\d)\/(\d\d\d\d)/gm



// let ValorInicial = Number.parseFloat((regex_Valor.test(texto)[1])

//     .replace('.', '').replace(',', '.'))

// let Taxa = Number.parseFloat((regex_Taxa.test(texto)[1])

//     .replace('.', '').replace(',', '.'))



// let res_data1 = regex_Data.test(texto)

// let res_data2 = regex_Data.test(texto)



// let data1 = new Date(res_data1[3], res_data1[2], res_data1[1])

// let data2 = new Date(res_data2[3], res_data2[2], res_data2[1])



// let dias = (Math.abs(Math.floor((data2.getTime() - data1.getTime()) / 86400000)))



// let ValorFinal = ValorInicial * Math.pow((1 + Taxa / 100), dias)



// console.log(`${ValorFinal.toFixed(2)}`)
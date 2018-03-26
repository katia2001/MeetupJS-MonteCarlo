personas = 5
coincidencias = 3
simulaciones = 100000
cuenta = 0

for(k in 1:simulaciones){
    fechas = floor(runif(personas, 1, 366))
    tst = any(diff(sort(fechas),coincidencias-1)==0)
    if(tst) cuenta = cuenta + 1
}

resultado = cuenta/simulaciones * 100
print(resultado)

//ex 1
function each(tab,func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i])
        
    }
    
}
//ex 2
function sumSquares(numbers) {
    var total=0
    each(numbers,function(el) {
        total+=el*el
    })
    return total
}

//ex 3
function impairs(numbers) {
    var total=[]
    each(numbers,function(el) {
        if(el%2!==0){
        total.push(el)
        }
    })
    return total
}

//ex4
function sommeDeTousLesÉlémentsMultipliésParQuatre(numbers) {
    var total=0
    each(numbers,function(el) {
        total+=el*4
    })
    return total
}

//ex 5
function doublerTous(nombres) {
    var total=[]
    each(nombres,function(el) {
        total.push(el*2)
    })
    return total
}

//ex 6
function diviserTousParDeux(nombres) {
    var total=[]
    each(nombres,function(el){
        total.push(el/2)
    })
    return total
}

//ex 7
function mettreEnMajuscules(chaines) {
    var total=[]
    each(chaines,function(el){
        total.push(el.toUpperCase());
    })
    return total
}

//ex 8
function pairs(nombres) {
    var total=[]
    each(nombres,function(el) {
        if (el%2===0){
            total.push(el)
        }
    })
    return total
}

//ex 9
function multiplesDeTrois(nombres) {
    var total=[]
    each(nombres,function(el) {
        if (el%3===0){
            total.push(el)
        }
    })
    return total
}

// ex 10
function positifs(nombres) {
    var total=[]
    each(nombres,function(el){
        if(el>0){
            total.push(el)
        }
    })
    return total
}

//ex 11
function longueurPaire(chaines) {
    var total=[]
    each(chaines,function(el) {
        if (el.length%2===0) {
            total.push(el)
        }
    })
    return total
}
//ex 012
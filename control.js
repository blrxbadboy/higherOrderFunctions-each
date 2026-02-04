//ex 1
function each(tab,func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i])
        
    }
    
}
//ex 2
function sumSquares(n) {
    var total=0
    each(n,function(el) {
        total+=el*el
    })
    return total
}

//ex 3
function impairs(nu) {
    var total=[]
    each(nu,function(el) {
        if(el%2!==0){
        total.push(el)
        }
    })
    return total
}

//ex4
function sommeDeTousLesÉlémentsMultipliésParQuatre(n) {
    var total=0
    each(n,function(el) {
        total+=el*4
    })
    return total
}

//ex 5
function doublerTous(n) {
    var total=[]
    each(n,function(el) {
        total.push(el*2)
    })
    return total
}

//ex 6
function diviserTousParDeux(n) {
    var total=[]
    each(n,function(el){
        total.push(el/2)
    })
    return total
}

//ex 7
function mettreEnMajuscules(ch) {
    var total=[]
    each(ch,function(el){
        total.push(el.toUpperCase());
    })
    return total
}

//ex 8
function pairs(n) {
    var total=[]
    each(n,function(el) {
        if (el%2===0){
            total.push(el)
        }
    })
    return total
}

//ex 9
function multiplesDeTrois(n) {
    var total=[]
    each(n,function(el) {
        if (el%3===0){
            total.push(el)
        }
    })
    return total
}

// ex 10
function positifs(n) {
    var total=[]
    each(n,function(el){
        if(el>0){
            total.push(el)
        }
    })
    return total
}

//ex 11
function longueurPaire(ch) {
    var total=[]
    each(ch,function(el) {
        if (el.length%2===0) {
            total.push(el)
        }
    })
    return total
}
//ex 012
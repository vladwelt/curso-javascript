function esPrimo(n,r){
    var r = r || 2;
    var res=true;
    if(r<n/2){
        if(n%r==0){
            res= false;
        }else {
            res=esPrimo(n,r+1);
        }
    }
	return res;
}
console.log(esPrimo(7));

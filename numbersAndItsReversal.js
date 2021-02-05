// 5 kyu
// Numbers and its Reversal Having Same Prime Factors

function sameFactRev(nMax) {
    if (nMax <= 1089) {
        return [];
    }

    function revs(num) {
       return Number([...[num].toString()].reverse().join(""))
    }

    function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }
    
    let primes = getPrimes(100000);
    function primeFactorsEqual(num, mun) {
        let n = (num > mun) ? num : mun;   
        for (var i = 0; primes[i] <= n; ++i) 
            if ((num % primes[i] !== 0 && mun % primes[i] == 0) || (mun % primes[i] !== 0 && num % primes[i] == 0)) {
                return false;
            }
        return true; 
      }

    let rslt = [1089]; 
    for (let i = 1090; i < nMax; i++) {
        let rI = revs(i);
        if (i !== rI && primeFactorsEqual(i, rI)) {
                rslt.push(i);
            }
    }
    return rslt;
}
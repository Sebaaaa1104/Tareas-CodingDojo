for (var i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (var i = 100; i >= 0; i--) {
    if (i % 4 == 0) {
        console.log(i);
    }
}

for (var i = 100; i >= 0; i -= 4) {
    console.log(i);
}

for (var i = 1; i <= 6; i++) {
    console.log(10);
    console.log(7);
    console.log(4);
    console.log(1);
    console.log(-2);
    console.log(-5);
}

for (var i = 10; i >= -5; i -= 3) {
    console.log(i);
}

var suma_pares = 0;
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        suma_pares += i;
    if (i == 50)
        console.log(suma_pares);
    }
}

var suma_pares2 = 0;
for (var i = 2; i <= 50; i += 2) {
    suma_pares2 += i;
}
console.log(suma_pares2)

var factorial = 1;
for (var i = 1; i <= 20; i++) {
    factorial *= i;
    if (i == 20) {
        console.log(factorial);
    }
}

var factorial2 = 1;
for (var i = 1; i <= 20; i++) {
    factorial2 *= i
}
console.log(factorial2)
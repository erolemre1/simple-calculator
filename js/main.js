const ilksayı  = document.getElementById ("ilk-sayı");
const ikincisayı  = document.getElementById ("ikinci-sayı");
const sonuc = document.getElementById ("sonuc");

const btntopla  = document.getElementById ("btn-topla");
const btncıkar  = document.getElementById ("btn-cıkar");
const btncarp  = document.getElementById ("btn-carp");
const btnbol = document.getElementById ("btn-bol");


btntopla.addEventListener ("click" , () => {
  const x = parseFloat(ilksayı.value) || 0;
  const y = parseFloat(ikincisayı.value) || 0;
  sonuc.innerHTML = (x+y);

});
btncıkar.addEventListener ("click" , () => {
const x = parseFloat(ilksayı.value) || 0;
const y = parseFloat(ikincisayı.value) || 0;
sonuc.innerHTML = (x-y);
});
btncarp.addEventListener ("click" , () => {
  const x = parseFloat(ilksayı.value) || 0;
  const y = parseFloat(ikincisayı.value) || 0;
  sonuc.innerHTML = (x*y);
  });
  btnbol.addEventListener ("click" , () => {
    const x = parseFloat(ilksayı.value) || 0;
    const y = parseFloat(ikincisayı.value) || 0;
    sonuc.innerHTML = (x/y);
    });
function tempConvertor(){
        var Farhenheit=document.getElementById('Farhenheit').value;
        var Celsius=document.getElementById('Celsius').value;

  if(Farhenheit !='') {
        Celsius=(parseFloat(Farhenheit)-32)/1.8;
    }else{
        Farhenheit=(parseFloat(Celsius)*1.8)+32;
    }
document.getElementById('Farhenheit').value=parseFloat(Farhenheit).toFixed(1);
document.getElementById('Celsius').value=parseFloat(Celsius).toFixed(1);
}

function clearForm() {
    document.getElementById('Farhenheit').value = '';
    document.getElementById('Celsius').value = '';
} 
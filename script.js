
document.addEventListener('DOMContentLoaded',function(){
        const gender = document.getElementById('gender');
        const otherinput =document.getElementById('other');

        gender.addEventListener('change',function(){
            if(this.value ==='other'){
                otherinput.style.display = 'block';
                otherinput.required = true;
            }else{
                otherinput.style.display = 'none';
                otherinput.required = false;
                otherinput.value = '';
            }
        });
});
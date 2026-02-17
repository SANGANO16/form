
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

        function ShowLife(){
            const button = document.getElementById('button');
            const campuslife = document.getElementById('photo');

            if(campuslife.style.display === 'none'){
                campuslife.style.display = 'flex';
            }else{
                campuslife.style.display = 'none'; 
            }
        }
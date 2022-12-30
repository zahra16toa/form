/* variables */
const learningWork = document.querySelector(".learningWork");
const kardani = document.querySelector("#kardani");
const karshenasi = document.querySelector("#karshenasi");
const peyvaste = document.querySelector("#peyvaste");
const naPeyvaste = document.querySelector("#naPeyvaste");
const Lw = document.querySelector("#Lw");
const hour = document.querySelector("#hour")
const reshte = document.getElementById("reshte").options;
const reshteSelect = document.querySelector("#reshte");
const unit = document.querySelector("#unit");
const inputLabel = document.querySelectorAll(".input-label");
const textInput = document.querySelectorAll(".text-input");
const peyvasteLabel = document.querySelector(".peyvaste");
const napeyvasteLabel = document.querySelector(".napeyvaste");
const karshenasiLabel = document.querySelector(".karshenasi");
const kardaniLabel = document.querySelector(".kardani");
const gradeParagraph = document.querySelector(".grade");
const gradeDiv = document.querySelector(".grade-div");
const radioSpan = document.querySelectorAll(".radio-span");
const companyName = document.querySelector("#companyName");
const kardaniPeyvaste = document.querySelector(".kardani-peyvaste");
const karshenasiNaPeyvaste = document.querySelector(".karshenasi-napeyvaste");
const karshenasiNaPeyvasteRadio = document.querySelector("#karshenasiNapeyvaste");
const kardaniPeyvasteRadio = document.querySelector("#kardaniPeyvaste");
const kardaniNapeyvaste = document.querySelector(".kardani-napeyvaste");
const kardaniNapeyvasteRadio = document.querySelector("#kardaniNapeyvaste");
const sudentId = document.querySelector("#studentId");
const formGrade = document.querySelector("#stuGrade");
const generateFormButton = document.querySelector(".generateForm"); 
/* captcha selectors */
const captchaImage = document.querySelector("#image");
const captchaInput = document.querySelector("#submit");
/* email selector */
const emailInput = document.querySelector("#email");
/* form variables */
const company = document.querySelector("#company")
/* objects */
const reshteha = [
    {index: 0, text: "مهندسی تکنولوژی نرم افزار", value: "مهندسی تکنولوژی نرم افزار", hour: "360"},
    {index: 1, text: "مهندسی الکترونیک", value: "مهندسی الکترونیک", hour: "360"},
    {index: 2, text: "مهندسی نرم افزار", value: "مهندسی نرم افزار", hour: "120"},
    {index: 3, text: "نرم افزار کامپیوتر", value: "نرم افزار کامپیوتر", hour: "240"},
    {index: 4, text: "مهندسی عمران", value: "مهندسی عمران", hour: "300"},
    {index: 5, text: "مهندسی معماری", value: "مهندسی معماری", hour: "240"},
    {index: 6, text: "نقشه کشی معماری", value: "نقشه کشی معماری", hour: "240"},
    {index: 7, text: "معماری", value: "معماری", hour: "240"},
    {index: 8, text: "گرافیک", value: "گرافیک", hour: "240"},
    {index: 9, text: "حسابداری", value: "حسابداری"},
    {index: 10, text: "مهندسی صنایع غذایی", value: "مهندسی صنایع غذایی", hour: "360"},
    {index: 11, text: "صنایع غذایی", value: "صنایع غذایی", hour: "720"},
    {index: 12, text: "مهندسی شیمی", value: "مهندسی شیمی", hour: "320"},
    {index: 13, text: "شیمی کاربردی", value: "شیمی کاربردی", hour: "240"},
    {index: 14, text: "مهندسی برق", value: "مهندسی برق", hour: "240"},
    {index: 15, text: "برق", value: "برق"},
    {index: 16, text: "میکروبیولوژی", value: "میکروبیولوژی", hour: "240"},
    {index: 17, text: "مهندسی علوم دامی", value: "مهندسی علوم دامی"},
    {index: 18, text: "مهندسی حرفه ای الکترونیک", value: "مهندسی حرفه ای الکترونیک", hour: "240"},
    {index: 19, text: "ارتباط تصویری", value: "ارتباط تصویری", hour: "240"},
    {index: 20, text: "فتوگرافیک", value: "فتوگرافیک", hour: "240"}


]
const nums = [{text: "1", value: "1"},
              {text: "2", value: "2"},
              {text: "3", value: "3"},
              {text: "4", value: "4"}];
const nums1 = [{text: "1", value: "1"},
              {text: "2", value: "2"}];

/* functions */
function fillSelect(){
    reshteha.forEach(option =>
        reshte.add(
            new Option(option.text, option.value, option.selected)
        )
    );
}
/* captcha function */

function generate() {
    // clear old data
    captchaInput.value = "";
    // Access the element to store
    // the generated captcha

    var uniquechar = "";
 
    const randomchar = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i <= 5; i++) {
        uniquechar += randomchar.charAt(Math.random() * randomchar.length)
    }
 
    // Store generated input
    captchaImage.innerHTML = uniquechar;

    // styling captcha inputs
    // captchaInput.style.color = "black";
    // captchaInput.style.border= "2px solid var(--blue)";

}
function printmsg() {
     
    // Check whether the input is equal
    // to generated captcha or not
    let captchaCode = captchaImage.innerHTML;
    if (captchaInput.value.match(captchaCode)) {
        // enable generate button
        captchaInput.classList.add("valid");
        captchaInput.classList.remove("invalid");
        generateFormButton.disabled = false;
        generateFormButton.classList.remove("generateForm");
    } else {
        generateFormButton.disabled = true;
        generateFormButton.classList.add("generateForm");
        captchaInput.classList.add("invalid");
        captchaInput.classList.remove("valid");

        // alert("کد داخل کادر را درست وارد کنید.");
        // generate();
    }
}


/* end captcha functions */


function isPersian(evt){
    let charCode = (evt.which) ? evt.which : event.keyCode;
    if( charCode > 31 && (charCode < 31 || charCode > 128 ) || charCode == 32 ){
        alert("لطفا حروف انگلیسی وارد کنید");
        emailInput.value = null;
        return false;
    }
    return true;

}

function isNumber(evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) ){
        alert("لطفا عدد وارد کنید");
        return false;
    }
    return true;
}
function isLetter(evt) {
    // textInput.forEach(element =>{
        let charCode = (evt.which) ? evt.which : event.keyCode;
    if( charCode > 31 && (charCode < 31 || charCode > 128 ) || charCode == 32 ){
        return true;
    }
    alert("لطفا حروف فارسی وارد کنید");
    return false;

        // element.classList.add("failed");
    // })
    
}

function validateEmail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailFormat)){
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        return true;
    } else {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        // return false;
    }
}


function conditions(){
    /* کارشناسی ناپیوسته  */
    if(reshteSelect.value == reshteha[0].text || reshteSelect.value == reshteha[1].text ||
        reshteSelect.value == reshteha[5].text || reshteSelect.value == reshteha[18].text ||
        reshteSelect.value == reshteha[19].text){
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            gradeDiv.classList.add("hide");
            gradeParagraph.classList.remove("hide");

            gradeParagraph.value = "کارشناسی ناپیوسته";
            Lw.disabled = true;
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else 
        /* کارشناسی پیوسته  */
        
        if(reshteSelect.value == reshteha[2].text || reshteSelect.value == reshteha[12].text ||
        reshteSelect.value == reshteha[13].text || reshteSelect.value == reshteha[14].text || 
        reshteSelect.value == reshteha[16].text){
            // radioSpan.forEach(radio=>{
                
            // })
            
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            gradeDiv.classList.add("hide");
            Lw.disabled = true;

            
            gradeParagraph.classList.remove("hide");
            
            gradeParagraph.value = "کارشناسی پیوسته";
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else 
        /* کاردانی پیوسته  */
    
        if(reshteSelect.value == reshteha[3].text || reshteSelect.value == reshteha[6].text || 
            reshteSelect.value == reshteha[8].text || reshteSelect.value == reshteha[20].text){
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            gradeDiv.classList.add("hide");
            Lw.disabled = true;


            gradeParagraph.classList.remove("hide");


            gradeParagraph.value = "کاردانی پیوسته";
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else 
        /*  کاردانی ناپیوسته  */
        if(reshteSelect.value == reshteha[11].text){
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");

            gradeDiv.classList.add("hide");

            gradeParagraph.classList.remove("hide");


            gradeParagraph.value = "کاردانی ناپیوسته";
            Lw.disabled = true;

            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else
        /* کارشناسی ناپیوسته و پیوسته */
        /* مهندسی عمران */
        if(reshteSelect.value == reshteha[4].text){
            gradeParagraph.classList.remove("hide");
            Lw.disabled = true;
            karshenasi.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            gradeParagraph.value = "کارشناسی";
            napeyvasteLabel.classList.add("show");
            peyvasteLabel.classList.add("show");
            naPeyvaste.classList.add("show");
            peyvaste.classList.add("show");
            kardani.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            removeOptions();
            addOption1();
            Lw.disabled = false;
            Lw.style.cursor= "pointer";
            Lw.style.opacity = 1;
  
        } else 
        /* کاردانی ناپیوسته و پیوسته */
        /* معماری */
        if(reshteSelect.value == reshteha[7].text){
            napeyvasteLabel.classList.add("show");
            peyvasteLabel.classList.add("show");
            peyvaste.classList.add("show");
            naPeyvaste.classList.add("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            gradeParagraph.classList.add("show");
            gradeParagraph.value = "کاردانی";
            Lw.disabled = true;

            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else 
        /* کارشناسی و کاردانی پیوسته و ناپیوسته */
        /* حسابداری */
        if(reshteSelect.value == reshteha[9].text){
            karshenasiNaPeyvaste.classList.add("show");
            Lw.disabled = true;

            kardaniPeyvasteRadio.classList.add("show");
            karshenasiNaPeyvasteRadio.classList.add("show");
            kardaniPeyvaste.classList.add("show");
            gradeParagraph.classList.add("hide");
            peyvaste.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            naPeyvaste.classList.remove("show");
            karshenasi.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            // kardaniPeyvaste.style.zIndex = "1";
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();
        } else 
        /* کاردانی ناپیوسته و کارشناسی پیوسته و ناپیوسته */
        /* برق */
        if(reshteSelect.value == reshteha[15].text){
            karshenasi.classList.add("show");
            karshenasiLabel.classList.add("show");
            Lw.disabled = true;

            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            kardaniNapeyvaste.classList.add("show");
            kardaniNapeyvasteRadio.classList.add("show");
            kardaniNapeyvasteRadio.style.zIndex = 1;
            kardaniNapeyvaste.style.zIndex = 1;
            kardaniNapeyvaste.addEventListener("click",()=>{
                naPeyvaste.classList.remove("show");
                napeyvasteLabel.classList.remove("show");
                peyvaste.classList.remove("show");
                peyvasteLabel.classList.remove("show");
            })
            karshenasi.addEventListener("click",()=>{
                naPeyvaste.classList.add("show");
                napeyvasteLabel.classList.add("show");
                peyvaste.classList.add("show");
                peyvasteLabel.classList.add("show");
            })
            gradeParagraph.classList.add("hide");
            Lw.disabled = true;
            Lw.style.cursor= "no-drop";
            Lw.style.opacity = "50%";
            removeOptions();

        } else 
        /* کارآموزی های جداگانه با اضافه شدن فیلد کارآموزی */
         if(reshteSelect.value == reshteha[17].text){
           peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            Lw.disabled = false;
            Lw.style.cursor= "pointer";
            Lw.style.opacity = 1;
  
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            removeOptions();
            unit.value = "1";
            hour.value = "120";
            addOption();
            Lw.addEventListener("change",()=>{
                if(Lw.value == nums[1].text || Lw.value == nums[2].text ||
                    Lw.value == nums[3].text ){
                    hour.value = 240;
                    unit.value = 2;
                } else if(Lw.value == nums[0].text){
                    hour.value = 120;
                    unit.value = 1;
                }
            })
            gradeParagraph.classList.remove("hide");
            gradeParagraph.value = "کارشناسی پیوسته";
        } else 
        /* مهندسی صنایع غذایی */
        if(reshteSelect.value == reshteha[10].text){
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            karshenasiNaPeyvaste.classList.remove("show");
            karshenasiNaPeyvasteRadio.classList.remove("show");
            kardaniPeyvaste.classList.remove("show");
            kardaniPeyvasteRadio.classList.remove("show");
            gradeDiv.classList.add("hide");
            kardaniNapeyvaste.classList.remove("show");
            kardaniNapeyvasteRadio.classList.remove("show");
            gradeParagraph.classList.remove("hide");
            Lw.disabled = false;
            Lw.style.cursor= "pointer";
            Lw.style.opacity = 1;
            gradeParagraph.value = "کارشناسی پیوسته";

            removeOptions();
            addOption1();
        }   
        /* تعداد ساعت */
        /* 360 */
        if(reshteSelect.value == reshteha[0].text || reshteSelect.value == reshteha[1].text ||
            reshteSelect.value == reshteha[10].text){
            hour.value = reshteha[0].hour;
        } else 
        /* 240  */
        if(reshteSelect.value == reshteha[3].text || reshteSelect.value == reshteha[5].text ||
            reshteSelect.value == reshteha[6].text || reshteSelect.value == reshteha[8].text ||
            reshteSelect.value == reshteha[13].text || reshteSelect.vale == reshteha[14].text ||
            reshteSelect.value == reshteha[16].text || reshteSelect.value == reshteha[7].text ||
            reshteSelect.value == reshteha[18].text || reshteSelect.value == reshteha[15].text ||
            reshteSelect.value == reshteha[19].text || reshteSelect.value == reshteha[20].text){
            hour.value = reshteha[3].hour;
        } else
        /* 120 */
        if(reshteSelect.value == reshteha[2].text){
            hour.value = reshteha[2].hour;
        } else
        /* 720 */
        if(reshteSelect.value == reshteha[11].text){
            hour.value = reshteha[11].hour;
        } else
        /* 320 */
        if(reshteSelect.value == reshteha[12].text){
            hour.value = reshteha[12].hour;
        } else 
        /* 300 */
        if(reshteSelect.value == reshteha[4].text){
            hour.value = reshteha[4].hour;
        } 
        /* تعداد واحد */
        /* 2 واحد */

        if(reshteSelect.value == reshteha[3].text || reshteSelect.value == reshteha[5].value ||
            reshteSelect.value == reshteha[6].text || reshteSelect.value == reshteha[7].text || reshteSelect.value == reshteha[12].text ||
            reshteSelect.value == reshteha[13].text || reshteSelect.value == reshteha[14].text ||
            reshteSelect.value == reshteha[16].text || reshteSelect.value == reshteha[18].text || reshteSelect.value == reshteha[15].text ||
            reshteSelect.value == reshteha[8].text || reshteSelect.value == reshteha[19].text || reshteSelect.value == reshteha[20].text){
                unit.value = 2;
            } else
        /* 3 واحد */
        if( reshteSelect.value == reshteha[0].text || reshteSelect.value == reshteha[1].text || reshteSelect.value == reshteha[10].text){
            unit.value = 3;
        } else 
        /* 1 واحد */
        if(reshteSelect.value == reshteha[2].text || reshteSelect.value == reshteha[4].text){
            unit.value = 1;
        } else
        /* 6 */
        if(reshteSelect.value == reshteha[11].text){
            unit.value = 6;
        }
}
function addOption(){
    nums.forEach(option =>
        Lw.add(new Option(option.text , option.value, option.selected)))
}

function addOption1(){
    nums1.forEach(
        option =>
        Lw.add(new Option(option.text , option.value, option.selected))
    )
}


function removeOptions(){
    nums.forEach(option =>
        Lw.remove(new Option(option.text , option.value, option.selected)))
}
function stylingTextBox(){
}
/* eventListeners */
reshteSelect.addEventListener("change",conditions)
emailInput.addEventListener("keypress",(event)=>{
        isPersian(event);
})
kardani.addEventListener("click", ()=>{
     
    /* برق */
    if(reshteSelect.value == reshteha[15].text){
        hour.value = 240;
        naPeyvaste.addEventListener("click",()=> unit.value = 2)
    } else 
    /* معماری */
    if(reshteSelect.value == reshteha[7].text){
        naPeyvaste.addEventListener("click", ()=> unit.value = 3);
        peyvaste.addEventListener("click", ()=> unit.value = 2);
    }
})
kardaniPeyvaste.addEventListener("click",()=>{
    /* حسابداری */
    if(reshteSelect.value == reshteha[9].text){
        hour.value = 240;
        unit.value = 2;
    }
})
karshenasiNaPeyvaste.addEventListener("click",()=>{
    /* حسابداری */
    if(reshteSelect.value == reshteha[9].text){
        hour.value = 360;
        unit.value = 3;
    } 
})
karshenasi.addEventListener("click", ()=>{
    /* حسابداری */
    if(reshteSelect.value == reshteha[9].text){
        hour.value = 360;
        naPeyvaste.addEventListener("click",()=>unit.value = 2)
    } else 
    /* برق */
    if(reshteSelect.value == reshteha[15].text){
        naPeyvaste.addEventListener("click", ()=> {
            hour.value = 360;
            unit.value = 3;
        });
        peyvaste.addEventListener("click", ()=> {
            hour.value = 240;
            unit.value = 2;
        });
    }
})
// inputLabel.forEach(elemento =>{
//     elemento.addEventListener("click", (e)=>{
//         e.target.style.transform = "translateY(-20px)";
//         e.target.style.background = "#fff";
//         e.target.classList.add("label");
//     });
// })

// textInput.forEach(textBox => {
//     inputLabel.forEach(label => {
//         textBox.addEventListener("click", ()=>{
//             label.style.transform = "translateY(-20px)";
//             label.style.background = "#fff";
//             label.classList.add("label");
//         });
// });
// });


// inputLabel.forEach(element => {
//     textInput.addEventListener("click", (e)=>{
//         element.style.transform = "translateY(-20px)";
//         element.style.background = "#fff";
//         element.classList.add("label");
//     });
// });

// inputLabel.forEach(element => {
//     window.addEventListener("click", (e)=>{
//         element.style.transform = "translateY(0px)";
//         element.style.background = "transparent";
//         element.classList.remove("label");
//     });
// });
/* main */
fillSelect();



// sudentId.attributes.add("onkeypress","return inNumberKey(event)");

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
const textInput = document.querySelectorAll(".text-input")
const peyvasteLabel = document.querySelector(".peyvaste");
const napeyvasteLabel = document.querySelector(".napeyvaste");
const karshenasiLabel = document.querySelector(".karshenasi");
const kardaniLabel = document.querySelector(".kardani");
const gradeParagraph = document.querySelector(".grade");
const gradeDiv = document.querySelector(".grade-div");
const radioSpan = document.querySelectorAll(".radio-span");
/* objects */
const reshteha = [
    {text: "مهندسی تکنولوژی نرم افزار", value: "مهندسی تکنولوژی نرم افزار", hour: "360"},
    {text: "مهندسی الکترونیک", value: "مهندسی الکترونیک", hour: "360"},
    {text: "مهندسی نرم افزار", value: "مهندسی نرم افزار", hour: "120"},
    {text: "نرم افزار کامپیوتر", value: "نرم افزار کامپیوتر", hour: "240"},
    {text: "مهندسی عمران", value: "مهندسی عمران", hour: "300"},
    {text: "مهندسی معماری", value: "مهندسی معماری", hour: "240"},
    {text: "نقشه کشی معماری", value: "نقشه کشی معماری", hour: "240"},
    {text: "معماری", value: "معماری", hour: "240"},
    {text: "گرافیک", value: "گرافیک", hour: "240"},
    {text: "حسابداری", value: "حسابداری"},
    {text: "مهندسی صنایع غذایی", value: "مهندسی صنایع غذایی", hour: "360"},
    {text: "صنایع غذایی", value: "صنایع غذایی", hour: "720"},
    {text: "مهندسی شیمی", value: "مهندسی شیمی", hour: "320"},
    {text: "شیمی کاربردی", value: "شیمی کاربردی", hour: "240"},
    {text: "مهندسی برق", value: "مهندسی برق", hour: "240"},
    {text: "برق", value: "برق"},
    {text: "میکروبیولوژی", value: "میکروبیولوژی", hour: "240"},
    {text: "مهندسی علوم دامی", value: "مهندسی علوم دامی"},
    {text: "مهندسی حرفه ای الکترونیک", value: "مهندسی حرفه ای الکترونیک", hour: "240"}
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
function conditions(){
    /* کارشناسی ناپیوسته  */
    if(reshteSelect.value == reshteha[0].text || reshteSelect.value == reshteha[1].text ||
        reshteSelect.value == reshteha[5].text || reshteSelect.value == reshteha[18].text){
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

            gradeParagraph.innerHTML = "کارشناسی ناپیوسته";
            learningWork.classList.add("hide");
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
            learningWork.classList.add("hide");
            
            gradeParagraph.classList.remove("hide");
            
            gradeParagraph.innerHTML = "کارشناسی پیوسته";

            
        } else 
        /* کاردانی پیوسته  */
    
        if(reshteSelect.value == reshteha[3].text || reshteSelect.value == reshteha[6].text || 
            reshteSelect.value == reshteha[8].text){
            peyvaste.classList.remove("show");
            naPeyvaste.classList.remove("show");
            kardani.classList.remove("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.remove("show");
            karshenasiLabel.classList.remove("show");
            peyvasteLabel.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            gradeDiv.classList.add("hide");
            learningWork.classList.add("hide");

            gradeParagraph.classList.remove("hide");


            gradeParagraph.innerHTML = "کاردانی پیوسته";


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


            gradeParagraph.innerHTML = "کاردانی ناپیوسته";
            learningWork.classList.add("hide");


        } else
        /* کارشناسی ناپیوسته و پیوسته */
        if(reshteSelect.value == reshteha[4].text){
            gradeParagraph.classList.add("show");
            learningWork.classList.add("hide");

            gradeParagraph.innerHTML = "کارشناسی";
            napeyvasteLabel.classList.add("show");
            peyvasteLabel.classList.add("show");
            naPeyvaste.classList.add("show");
            peyvaste.classList.add("show");
            kardani.classList.remove("show");
            kardaniLabel.classList.remove("show");

        } else 
        /* کاردانی ناپیوسته و پیوسته */
        if(reshteSelect.value == reshteha[7].text){
            napeyvasteLabel.classList.add("show");
            peyvasteLabel.classList.add("show");
            peyvaste.classList.add("show");
            naPeyvaste.classList.add("show");
            karshenasi.classList.remove("show");
            kardaniLabel.classList.add("show");
            karshenasiLabel.classList.remove("show");
            gradeParagraph.classList.add("hide");
            learningWork.classList.add("hide");

        } else 
        /* کارشناسی و کاردانی پیوسته و ناپیوسته */
        if(reshteSelect.value == reshteha[9].text){
            karshenasi.classList.add("show");
            kardaniLabel.classList.add("show");
            karshenasiLabel.classList.add("show");
            learningWork.classList.add("hide");
            
            kardani.classList.add("show");
            karshenasi.addEventListener("click",()=>{
                if(reshteSelect.value == reshteha[9].text){
                    
                    napeyvasteLabel.classList.add("show");
                naPeyvaste.classList.add("show");
                peyvaste.classList.remove("show");
                peyvasteLabel.classList.remove("show");
            }
        })
        
        kardani.addEventListener("click",()=>{
            if(reshteSelect.value == reshteha[9].text){
            peyvaste.classList.add("show");
            peyvasteLabel.classList.add("show");
            naPeyvaste.classList.remove("show");
            napeyvasteLabel.classList.remove("show");
            }
        })
        gradeParagraph.classList.add("hide");
        } else 
        /* کاردانی ناپیوسته و کارشناسی پیوسته و ناپیوسته */
        if(reshteSelect.value == reshteha[15].text){
            kardani.classList.add("show");
            karshenasi.classList.add("show");
            kardaniLabel.classList.add("show");
            karshenasiLabel.classList.add("show");
            learningWork.classList.add("hide");

            kardani.addEventListener("click",()=>{
                peyvaste.classList.remove("show");
                peyvasteLabel.classList.remove("show");
                napeyvasteLabel.classList.add("show");
                naPeyvaste.classList.add("show");
            })
            karshenasi.addEventListener("click",()=>{
                naPeyvaste.classList.add("show");
                napeyvasteLabel.classList.add("show");
                peyvaste.classList.add("show");
                peyvasteLabel.classList.add("show");
            })
            gradeParagraph.classList.add("hide");

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

            learningWork.classList.add("show");
            learningWork.classList.remove("hide");
            
            removeOptions();

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
            gradeParagraph.innerHTML = "کارشناسی پیوسته";
        } else if(reshteSelect.value == reshteha[10].text){
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
            learningWork.classList.add("show");
            gradeParagraph.innerHTML = "کارشناسی پیوسته";
            learningWork.classList.remove("hide");
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
            reshteSelect.value == reshteha[18].text ){
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
            reshteSelect.value == reshteha[6].text || reshteSelect.value == reshteha[7].text ||
            reshteSelect.value == reshteha[9].text || reshteSelect.value == reshteha[12].text ||
            reshteSelect.value == reshteha[13].text || reshteSelect.value == reshteha[14].text ||
            reshteSelect.value == reshteha[16].text || reshteSelect.value == reshteha[18].text){
                unit.value = 2;
            } else
        /* 3 واحد */
        if( reshteSelect.value == reshteha[0].text || reshteSelect.value == reshteha[1].text || reshteSelect.value == reshteha[10].text){
            unit.value = 3;
        } else 
        /* 1 واحد */
        if(reshteSelect.value == reshteha[2].text || reshteSelect.value == reshteha[4].text){
            unit.value = 1;
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

kardani.addEventListener("click", ()=>{
    /* حسابداری */
    if(reshteSelect.value == reshteha[9].text){
        hour.value = 240;
        peyvaste.addEventListener("click",()=> unit.value = 2)
    } else
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

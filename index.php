<?php
require_once 'query/connection.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="script/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<!-- Captcha error message -->
 <?php if(!empty($captchaError)) {?>
  <div class="form-group col-12 text-center">
    <div class="alert text-center <?php echo $captchaError['status']; ?>">
      <?php echo $captchaError['message']; ?>
    </div>
  </div>
<?php }?>
    <div class="form-title">
        <p class="big-form-title">فرم کارآموزی</p>
    </div>
    <form action="form.php" method="POST" class="register-form">
        <div class="input-box">
            <input type="text" tabIndex="1" onkeypress="return isLetter(event);" name="fName" class="text-input" id="" required>
            <label class="input-label" for="name">نام</label>
        </div>
        <div class="input-box">
            <input type="text" tabIndex="2" onkeypress="return isLetter(event);" name="lName" class="text-input" id="" required>
            <label class="input-label" for="l-name">نام خانوادگی</label>
        </div>
        <div class="input-box">
            <input type="text" tabIndex="3" onkeypress="return isNumber(event);" name="studentId" maxlength="9" class="text-input" id="studentId" required>
            <label class="input-label"  for="student-id">شماره دانشجویی</label>
        </div>
        <div class="select-group">
            <fieldset>
              <legend>مقطع</legend>
              
              <!-- </fieldset>


            <fieldset class="branch">
                <legend>رشته</legend> -->
                <div>
                <select name="branch" tabIndex="4" id="reshte"></select>
                    <div class="learningWork">
                        <select tabIndex="5" name="learningWork" id="Lw" style="padding-right: 45px" disabled></select>
                        <label class="learning-work-label" for="">کارآموزی:</label>
                    </div>
                </div>
                
                <input type="text" class="grade" name="gradeInput">
                <div class="grade-div">

                  <div>
                      <span class="radio-span">
                          <label class="radio-label karshenasi" for="karshenasi">کارشناسی 
                              <input type="radio" name="grade" class="radio" required id="karshenasi" value="کارشناسی " checked/>
                            </label>
                        </span>
                        <span class="radio-span">
                            <label class="radio-label kardani" for="kardani">کاردانی
                                <input type="radio" name="grade" class="radio" required id="kardani" value="کاردانی" />
                            </label>
                        </span>
                        <div class="electricity">
                            <span class="radio-span">
                                <label class="radio-label kardani-napeyvaste" for="kardaniNapeyvaste">کاردانی ناپیوسته
                                    <input type="radio" name="grade" class="radio" required id="kardaniNapeyvaste" value="کاردانی ناپیوسته" />
                                </label>
                            </span>
                        </div>
                    <div class="accounting-span">
                        <span class="radio-span">
                          <label class="radio-label karshenasi-napeyvaste" for="karshenasiNapeyvaste">کارشناسی ناپیوسته
                              <input type="radio" name="grade2" class="radio" required id="karshenasiNapeyvaste" value=" کارشناسی ناپیوسته" checked/>
                            </label>
                        </span>
                        <span class="radio-span">
                            <label class="radio-label kardani-peyvaste" for="kardaniPeyvaste">کاردانی پیوسته
                                <input type="radio" name="grade2" class="radio" required id="kardaniPeyvaste" value=" کاردانی پیوسته" />
                            </label>
                        </span>
                    </div>
                    </div>
                    <div>
                        <span class="radio-span">
                          <label class="radio-label peyvaste" for="peyvaste"> پیوسته
                              <input type="radio" name="grade1" class="radio" required id="peyvaste" value="پیوسته " checked/>
                          </label>
                        </span>
                        <span class="radio-span">
                          <label class="radio-label napeyvaste" for="naPeyvaste">ناپیوسته
                              <input type="radio" name="grade1" class="radio" required id="naPeyvaste" value="ناپیوسته" />
                          </label>
                        </span>
                    </div>
              </div>
                   <div class="count-of-hour-unit">
                    <div class="input-box">
                        <input type="text" class="text-input min-input" name="unit" id="unit" readonly>
                        <label id="unitLabel" class="input-label" for="">تعداد واحد</label>
                    </div>
                    <div class="input-box">
                        <input type="text" class="text-input min-input" name="hour" id="hour" readonly>
                        <label id="hourLabel" class="input-label" for="">تعداد ساعت</label>
                    </div>
                   </div>
                    
           
            </fieldset>
        </div>
        
    <span class="input-form">
            <div class="input-box">
                <input type="text" tabIndex="9" maxlength="4" onkeypress="return isNumber(event);" class="text-input min-input" name="yearOfUni" id="" required>
                <label class="input-label" for="">ورودی</label>
            </div>
            <div class="input-box">
                <input type="email" tabIndex="8" onkeypress="" class="text-input min-input" name="email" id="" required>
                <label class="input-label" for="">ایمیل</label>
            </div>
            <div class="input-box">
                <input type="text" tabIndex="7" onkeypress="return isLetter(event);" class="text-input min-input" name="city" id="" required>
                <label class="input-label" for="">صادره از</label>
            </div>
            <div class="input-box">
                <input type="text" maxlength="4" tabIndex="6" onkeypress="return isNumber(event);" class="text-input min-input" name="birth" id="" required>
                <label class="input-label" for="">متولد</label>
            </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" maxlength="10" tabIndex="11" onkeypress="return isNumber(event);" style="width: 99.5%" class="text-input min-input" name="nationalId" id="" required>
            <label class="input-label" for="">کدملی</label>
        </div>
        <div class="input-box">
            <input type="text" class="text-input min-input" tabIndex="10" maxlength="11" onkeypress="return isNumber(event);" name="studentTel" id="" required >
            <label class="input-label tel" for="">موبایل</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <label class="input-label" id="year" for="">نیمسال اخذ کارآموزی</label>
            <select class="term" tabIndex="13" name="yearOfInternship" id=""><option text="بهمن 4002" value="بهمن 4002">بهمن 4002</option>
                <option text="تابستان 4002" value="تابستان 4002">تابستان 4003</option></select>
        </div>
        <div class="input-box">
            <input type="text" tabIndex="12" onkeypress="return isLetter(event);" class="text-input min-input" name="professorName" id="" required>
            <label class="input-label" for="">نام استاد</label>
        </div>
    </span>
    
    <div>
        <span class="input-form">
        <span class="radio-span">
            <label class="radio-label" for="More"> سایر
                <input type="radio" name="work" class="learning-work-radio" required id="More" value="سایر" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="Company"> شرکت
                <input type="radio" name="work" class="learning-work-radio" required id="Company" value="شرکت" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="industrialCompany"> کارخانه
                <input type="radio" name="work" class="learning-work-radio" required id="industrialCompany" value="کارخانه" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="association"> موسسه
                <input type="radio" name="work" class="learning-work-radio" required id="association" value="موسسه" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="edare"> اداره
                <input type="radio" name="work" class="learning-work-radio" required id="edare" value="اداره" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="bank"> بانک
                <input type="radio" name="work" class="learning-work-radio" required id="bank" value="بانک" />
            </label>
        </span>
        <span class="radio-span">
            <label class="radio-label" for="sazman"> سازمان
                <input type="radio" name="work" class="learning-work-radio" required id="sazman" value="سازمان" checked/>
            </label>
        </span>
       
            <label class="input-label place" id="unitLabel" for="">:نوع محل کارآموزی</label>
        </span>
    </div>
    <span class="input-form">
        <div class="input-box">
            <input type="text" tabIndex="16" onkeypress="return isLetter(event);" class="text-input" name="companyName" id="companyName" required>
            <label class="input-label company" for=""> نام شرکت / کارخانه / موسسه / اداره / بانک / سازمان</label>
        </div>
    </span>
    <div>
        <span class="input-form">
            <label for="more"> سایر
                <input type="checkbox" name="internType" value="سایر" id="more">
            </label>
            <label for="industrial"> صنعتی
                <input type="checkbox" name="internType" value="صنعتی" id="industrial">
            </label>
            <label for="service"> خدماتی
                <input type="checkbox" name="internType" value="خدماتی" id="service">
            </label>
            <label for="">:نوع کارآموزی</label>
        </span>
    </div>
    <span class="input-form">
        <div class="input-box">
            <input type="text" tabIndex="15" class="text-input" maxlength="11" onkeypress="return isNumber(event);" name="companyTel" id="" required >
            <label class="input-label tel" for="">تلفن محل کارآموزی</label>
        </div>
         <div class="input-box">
            <input type="text" tabIndex="14" onkeypress="return isLetter(event);" class="text-input min-input" maxlength="50" name="companyManagement" id="" required >
            <label class="input-label tel" for="">مدیریت</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" tabIndex="17" class="text-input" onkeypress="return isLetter(event);" style="height: 40px" name="address" id="" required>
            <label class="input-label" for="">نشانی</label>
        </div>
    </span>
    
    
    <div>
        
        <div>
            <img src="generatecaptcha.php?rand=<?php echo rand(); ?>" id="image_captcha" alt="PHP Captcha">
            <a href="javascript: refreshing_captcha();">7<i class=""></i></a>
            <script type="text/javascript">
                function refreshing_captcha() {
                    let img = document.images['image_captcha'];
                    img.src = img.src.substring(0, img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
                }

            </script>
            <div class="input-box">
                <input type="text" class="text-input" name="captcha" id="">
                <label class="input-label">کد داخل کادر را وارد کنید</label>
            </div>  
        </div>
        <div>
            <button type="submit">ایجاد فرم</button>
            <button type="reset">پاکسازی</button>
        </div>
    </div>
    </form>
    <script src="script/script.js"></script>
    <!-- <script src="script/farsiType.js"></script> -->
</body>
</html>
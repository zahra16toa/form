<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <div class="form-title">
        <p class="big-form-title">فرم کارآموزی</p>
    </div>
    <form action="form.php" method="POST" class="register-form">
        <div class="input-box">
            <input type="text" name="fName" class="text-input" id="" required>
            <label class="input-label" for="name">(الزامی)نام</label>
        </div>
        <div class="input-box">
            <input type="text" name="lName" class="text-input" id="" required>
            <label class="input-label" for="l-name">(الزامی)نام خانوادگی</label>
        </div>
        <div class="input-box">
            <input type="text" name="studentId" maxlength="9" class="text-input" id="studentId" required>
            <label class="input-label"  for="student-id">(الزامی)شماره دانشجویی</label>
        </div>
        <div class="select-group">
            <fieldset>
              <legend>مقطع</legend>
              
              <!-- </fieldset>


            <fieldset class="branch">
                <legend>رشته</legend> -->
                <div>
                <select name="branch" id="reshte"></select>
                    <div class="learningWork">
                        <select name="learningWork" id="Lw" style="padding-right: 45px"></select>
                        <label class="learning-work-label" for="">کارآموزی:</label>
                    </div>
                </div>
                
                <p class="grade"></p>
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
                              <input type="radio" name="grade" class="radio" required id="karshenasiNapeyvaste" value="کارشناسی " checked/>
                            </label>
                        </span>
                        <span class="radio-span">
                            <label class="radio-label kardani-peyvaste" for="kardaniPeyvaste">کاردانی پیوسته
                                <input type="radio" name="grade" class="radio" required id="kardaniPeyvaste" value="کاردانی" />
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
                <input type="text" maxlength="4" class="text-input min-input" name="yearOfUni" id="" required>
                <label class="input-label" for="">ورودی</label>
            </div>
            <div class="input-box">
                <input type="text" class="text-input min-input" name="fatherName" id="" required>
                <label class="input-label" for="">نام پدر</label>
            </div>
            <div class="input-box">
                <input type="text" class="text-input min-input" name="" id="" required>
                <label class="input-label" for="">صادره از</label>
            </div>
            <div class="input-box">
                <input type="text" maxlength="4" class="text-input min-input" name="" id="" required>
                <label class="input-label" for="">متولد</label>
            </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" maxlength="10" style="width: 99.5%" class="text-input min-input" name="nationalId" id="" required>
            <label class="input-label" for="">شماره شناسنامه</label>
        </div>
        <div class="input-box">
            <input type="text" class="text-input min-input" maxlength="11" name="studentTel" id="" required >
            <label class="input-label tel" for="">شماره تماس دانشجو</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <label class="input-label" id="year" for="">نیمسال کارآموزی</label>
            <select class="term" name="" id=""><option value="بهمن 4002">بهمن 4002</option>
                <option value="بهمن 4002">تابستان 4002</option></select>
        </div>
        <div class="input-box">
            <input type="text" class="text-input min-input" name="professorName" id="" required>
            <label class="input-label" for="">نام استاد</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" class="text-input" maxlength="11" name="companyTel" id="" required >
            <label class="input-label tel" for="">تلفن شرکت</label>
        </div>
         <div class="input-box">
            <input type="text" class="text-input min-input" maxlength="50" name="companyManagement" id="" required >
            <label class="input-label tel" for="">مدیریت</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" class="text-input" name="companyName" id="companyName" required>
            <label class="input-label company" for=""> نام شرکت / کارخانه / موسسه / اداره / بانک / سازمان</label>
        </div>
    </span>
    <span class="input-form">
        <div class="input-box">
            <input type="text" class="text-input" style="height: 40px" name="address" id="" required>
            <label class="input-label" for="">نشانی</label>
        </div>
    </span>
    <div>
        <span class="input-form">
            <label for="more"> سایر
                <input type="checkbox" name="" id="more">
            </label>
            <label for="industrial"> صنعتی
                <input type="checkbox" name="" id="industrial">
            </label>
            <label for="service"> خدماتی
                <input type="checkbox" name="" id="service">
            </label>
            <label for="">:نوع محل کارآموزی</label>
        </span>
    </div>
        <button type="submit">ایجاد فرم</button>

    </form>
    <script src="script/script.js"></script>
  
    <!-- <script src="script/farsiType.js"></script> -->
</body>
</html>
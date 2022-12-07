<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>forms</title>
</head>
<body>
<?php
// define variables and set to empty values
$name = $lName = $stuId = $hourCount = $professor = $branch = $grade = $comName = $companyType = "";
$space  = "&nbsp;";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["fName"] . " " . $_POST["lName"]);
  $lName = test_input($_POST["lName"]);
  $stuId = test_input($_POST["studentId"]);
  $hourCount = test_input($_POST["hour"]);
  $professor = test_input($_POST["professorName"]);
  $branch = test_input($_POST["branch"]);
  $grade = test_input($_POST["grade"] . " " . $_POST["grade1"]);
  $comName = test_input($_POST["companyName"]);
  $companyType = test_input($_POST["work"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
    <div class="head">
        <div class="date">
            <p> :تاریخ نامه</p>
            <p> :شماره نامه</p>
        </div>
        <div class="logo">
            <img src="img/download1.png" width="45px" alt="">
        </div>
        <div class="text">
            <h5>باسمه تعالی</h5>
            <h5>دانشگاه آزاد اسلامی واحد شهرقدس</h5>
        </div>
        <p>دفتر ارتباط با صنعت</p>
    </div>
    <div class="body">
        <h5>به <span><?php echo($companyType); ?></span>: <span><?php echo($comName); ?></span></h5>
        <h5>از: دفتر ارتباط با صنعت دانشگاه آزاد اسلامی</h5>
        <h5>موضوع: کارآموزی</h5>
        <h5>سلام علیکم</h5> <br> <br>
        <div>
            بدینوسیله <strong><?php echo($name); ?></strong> دانشجوی <strong><?php echo($grade);?> </strong>
             رشته <strong><?php echo($branch); ?></strong> به شماره دانشجویی <strong><?php echo($stuId); ?></strong>
            را جهت گذراندن یک دوره کارآموزی به مدت  ساعت معرفی می نمائید.
                <p>ضمنا استاد کارآموزی ایشان دکتر <strong><?php echo($professor); ?></strong> می باشد. 
                خوهشمند است دستور فرمائید ضمن اقدامات لازم به منظور شروع کارآموزی نام برده نسبت به تعیین سرپرست کارآموزی اقدام مقتضی
            صورت گیرد.</p>
            <p>ممتنی است پس از انجام کارآموزی در پایان دوره گواهی دوره کارآموزی جهت نامبرده صادر و یک نسخه برای این دفتر
                ارسال فرمایند. لازم به ذکر است نامبرده موظف است به اجرای مقررات انضباطی و ایمنی آن واحد می باشد.
            </p>
            <p>در ضمن دانشجو لازم است برنامه حضور خود را بعد از تایید سرپرست کارآموزی حداکثر ظرف مدت یک هفته 
                پس از تاریخ این نامه ارائه نموده و بعد از اتمام دوره بر اساس فرم های مشخص شده در دفترچه کارآموزی گزارش نهایی 
                را به دفتر ارتباط با صنعت تحویل دهد. کلیه دانشجویان در طول مدت کارآموزی تحت پوشش بیمه حوادث دانشجویی 
                طبق بخشنامه 47/140000 مورخ 1386/6/15 سازمان مرکزی می باشد. 
            </p>
        </div>
       
    </div>
    <div class="tag">
        <p>دکتر امیر فتاح</p>
        <p>مدیر ارتباط با صنعت</p>
    </div>
    <script src="script/script.js"></script>
</body>
</html>
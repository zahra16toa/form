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
$name = $lName = $stuId = $hourCount = $professor = $branch = $grade = $comName = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = ($_POST["fName"] . $_POST["lName"]);
  $lName = $_POST["lName"];
  $stuId = $_POST["studentId"];
  $hourCount = $_POST["hour"];
  $professor = $_POST["professorName"];
  $branch = $_POST["branch"];
  $grade = ($_POST["grade"] . $_POST["grade1"]);
  $comName = $_POST["companyName"];
}

// function test_input($data) {
//   $data = trim($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// }
?>
    <div class="head">
        <div class="date">
            <p> :تاریخ نامه</p>
            <p> :شماره نامه</p>
        </div>
        <div class="logo">
            <img src="" alt="">
        </div>
        <div class="text">
            <h5>باسمه تعالی</h5>
            <h5>دانشگاه آزاد اسلامی واحد شهرقدس</h5>
        </div>
        <p>دفتر ارتباط با صنعت</p>
    </div>
    <div class="body">
        <h5>به: <span><?php echo($comName); ?></span></h5>
        <h5>از: دفتر ارتباط با صنعت دانشگاه آزاد اسلامی</h5>
        <h5>موضوع: کارآموزی</h5>
        <h5>سلام علیکم</h5> <br> <br>
        <div>
            <span>بدینوسیله <?php echo($name); ?> </span> دانشجوی <span><?php echo($grade); echo($grade1);?></span>
                <span> رشته 
            <span>را جهت گذراندن یک دوره کارآموزی به مدت  ساعت معرفی می نمائید. </span>
                <p>ضمنا استاد کارآموزی ایشان دکتر می باشد. 
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
    <script src="script/script.js"></script>
</body>
</html>
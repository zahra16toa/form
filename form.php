<?php
require_once 'query/connection.php';
require_once 'date/jdf.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="styles/style.css">
    <title>forms</title>
</head>
<body>
    <?php
    // define variables and set to empty value
$name = $lName = $stuId = $hourCount = $professor = $branch = $grade = $grade1 = $comName = $companyType = $grade2 = $sqlGrade = "";
$i = 0;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /* student table */
  $name = test_input($_POST["fName"] . " " . $_POST["lName"]);
  $fName = test_input($_POST["fName"]);
  $lName = test_input($_POST["lName"]);
  $stuId = test_input($_POST["studentId"]);
  $birth = test_input($_POST["birth"]);
  $city = test_input($_POST["city"]);
  $email = test_input($_POST["email"]);
  $yearOfUni = test_input($_POST["yearOfUni"]);
  $stuTel = test_input($_POST["studentTel"]);
  $nationalId = test_input($_POST["nationalId"]);
  $grade = test_input($_POST["grade"]);
  $grade1 = test_input($_POST["grade1"]);
  $grade2 = test_input($_POST["grade2"]);
  $gradeInput = test_input($_POST["gradeInput"]);
  $yearOfInternship = test_input($_POST["yearOfInternship"]);
    /* professor table */
  $professor = test_input($_POST["professorName"]);

    /* branch table */
  $internshipNumber = test_input($_POST["learningWork"]);
  $hourCount = test_input($_POST["hour"]);
  $branch = test_input($_POST["branch"]);
  $unitCount = test_input($_POST["unit"]);
    /* internship table */
  $comName = test_input($_POST["companyName"]);
  $companyType = test_input($_POST["work"]);
  $companyTel = test_input($_POST["companyTel"]);
  $internType = test_input($_POST["internType"]);
  $Address = test_input($_POST["address"]);
  $management = test_input($_POST["companyManagement"]);

    /* captcha codes */
    $captcha = $_POST["captcha"];

    $captchaUser = filter_var($_POST["captcha"], FILTER_SANITIZE_STRING);

    if(empty($captcha)) {
      $captchaError = array(
        "status" => "alert-danger",
        "message" => "Please enter the captcha."
      );
    }
    else if($_SESSION['CAPTCHA_CODE'] == $captchaUser){
      $captchaError = array(
        "status" => "alert-success",
        "message" => "Your form has been submitted successfuly."
      );
    } else {
      $captchaError = array(
        "status" => "alert-danger",
        "message" => "Captcha is invalid."
      );
    }
    for ($j=1; $j <= 200; $j++) { 
        $number = createNumber($j);
    }

  
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
function fa_number($number)
{
   if(!is_numeric($number) || empty($number))
   return '۰';
   $en = array("0","1","2","3","4","5","6","7","8","9");
   $fa = array("۰","۱","۲","۳","۴","۵","۶","۷","۸","۹");
   return str_replace($en, $fa, $number);
}
?>

<div class="head">
        <div class="date">
            <p><?php echo jdate("Y/m/d"); ?> :تاریخ نامه</p>
            <p><?php echo('م/الف/'. jdate("Ymd") .fa_number($number)); 
            $day = jdate("d");
            
            ?> :شماره نامه</p>
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
            بدینوسیله <strong><?php echo($name); ?></strong> دانشجوی <strong id="stuGrade"><?php 
            if($branch == 'حسابداری'){
                $sqlGrade = $grade2;
                echo($sqlGrade);
            } else if($branch == 'برق'){
                if($grade == 'کارشناسی'){
                    $sqlGrade = $grade . " " . $grade1;
                    echo($sqlGrade);
                } else if($grade == 'کاردانی ناپیوسته'){
                    $sqlGrade = $grade;
                    echo($sqlGrade);
                }
            } else if($branch == 'مهندسی عمران'){
                $sqlGrade = 'کارشناسی' .' '. $grade1;
                echo($sqlGrade);
            } else if($branch == 'معماری'){
                $sqlGrade = 'کاردانی' .' '. $grade1;
                echo($sqlGrade);
            } else {
                $sqlGrade = $gradeInput;
                echo($gradeInput);
            }
            ?> </strong>
             رشته <strong><?php echo($branch); ?></strong> به شماره دانشجویی <strong><?php echo(fa_number($stuId)); ?></strong>
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
    <button onclick="window.print()">پرینت</button>
    <?php
 
?>
    <?php 
        if($branch != 'مهندسی علوم دامی' && $branch != 'مهندسی صنایع غذایی' && $branch != 'مهندسی عمران'){
            $internshipNumber = null;
        }
        $studentQuery = "INSERT INTO studentTable(Fname,Lname,studentId,birthYear,city,email,yearOfUni,tel,idNumber,grade,yearOfInternship,branchName,internName,professorName) 
        VALUES('$fName','$lName','$stuId','$birth','$city','$email','$yearOfUni','$stuTel','$nationalId','$sqlGrade','$yearOfInternship','$branch','$comName','$professor')";
        $professorQuery = "INSERT INTO professorTable(professorName) VALUES('$professor')";
        $internshipQuery = "INSERT INTO internship_table(internName,internPlace,internTel,internType,Address,management) 
        VALUES('$comName','$companyType','$companyTel','$internType','$Address','$management')";
        $branchQuery = "INSERT INTO branchTable(branchName,internshipBranch,unitCount,hourCount) 
        VALUES('$branch','$internshipNumber','$unitCount','$hourCount')";

        $stuSql = mysqli_query($mysqli_link, $studentQuery);
        $proSql = mysqli_query($mysqli_link, $professorQuery);
        $internSql = mysqli_query($mysqli_link, $internshipQuery);
        $branchSql = mysqli_query($mysqli_link, $branchQuery);
        if (mysqli_query($mysqli_link, $stuSql)) {
            echo "New record created successfully";
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                for ($i=0; $i <= 200 ; $i++) { 
                    
                }
            }
            
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($mysqli_link);
        }
        function createNumber($i){
            $number = 0;
            if($i < 10){
                $number = 0 . 0 . $i;
            } else if($i >= 10 && $i <= 99){
                $number = 0 . $i;
            } else {
                $number = $i;
            }
            return $number;
        }
    ?>

    <script src="script/script.js"></script>
</body>
</html>
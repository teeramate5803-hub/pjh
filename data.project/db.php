<?php
$host = 'localhost';         // เซิร์ฟเวอร์ MySQL
$db   = 'review_db';         // ชื่อฐานข้อมูลที่สร้าง
$user = 'root';              // ชื่อผู้ใช้ MySQL ของคุณ
$pass = '';                  // รหัสผ่าน MySQL ของคุณ

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

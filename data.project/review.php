<?php
header('Content-Type: application/json');
include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET') {
    $place_id = $conn->real_escape_string($_GET['place_id']);
    $sql = "SELECT name, comment, created_at FROM reviews WHERE place_id='$place_id' ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $reviews = [];
    while($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
    echo json_encode($reviews);

} elseif($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $place_id = $conn->real_escape_string($data['place_id']);
    $name = $conn->real_escape_string($data['name']);
    $comment = $conn->real_escape_string($data['comment']);

    $sql = "INSERT INTO reviews (place_id, name, comment) VALUES ('$place_id', '$name', '$comment')";
    if($conn->query($sql)) {
        echo json_encode(['status'=>'success']);
    } else {
        echo json_encode(['status'=>'error', 'message'=>$conn->error]);
    }
}
?>

let numbers = [];
let max1 = numbers[0];
let index1 = 0;

let n = prompt("Nhap vao n")
{
    if (n < 3) {
        alert("So khong hop le, moi nhap lon hon 3")
    } else {
        for (let i = 0; i < n; i++) {
            numbers[i] = prompt("Nhap vao so diem")
        }
    }
}

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max1) {
        max1 = numbers[i];
        index1 = i;
    }
}
numbers[index1] = 0;

let max2 = numbers[0];
let index2 = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max2) {
        max2 = numbers[i];
        index2 = i;
    }
}
numbers[index2] = 0;

let max3 = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max3) {
        max3 = numbers[i];
    }
}
alert("Điểm số lớn thứ 3 là: " + max3);




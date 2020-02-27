let arr_lnt = parseInt(prompt('Nhap vao do dai cua mang'));
let array =[];
for (let i = 0; i < arr_lnt; i++) {
    array[i]=parseInt(prompt('Nhap vao gia tri phan tu '+i));
}
let max = array[0];
for (let i = 1; i < arr_lnt; i++) {
    if (max<array[i]){
        max=array[i];
    }
}
let average;
average=eval(array.join('+'))/arr_lnt;

document.write('Gia tri lon nhat mang la: '+max+'. Gia tri trung binh la :'+average);
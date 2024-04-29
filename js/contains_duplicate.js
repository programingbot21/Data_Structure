 // Arrays Contains Duplicate

const arr = [1, 2, 2, 3, 4,5,4,3,2,1,7];
const res = arr.filter((val, index, self)=>{
    return self.indexOf(val) == index;
})
console.log(arr);
console.log(res);
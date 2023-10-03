const num=[1,2,3,4,5]

const num2=num.map((i)=>{
  return i*i
})

console.log(num2) 

const name=["akash","shyam", "desai"]

const upper=name.map((item)=>{
  return item[0].toUpperCase()+item.slice(1)
})

console.log(upper)


const pok= name.map(ii=>`<p>${ii}</p>`)

console.log(pok)
let l
let p=k=>k+k
l=p(2)
console.log(l)

function Test(){
  
  const colors=['Red', "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
  const co=colors.map(ite=>`<p>${ite}</p>`)
  console.log(co)
  return 1
}

Test()
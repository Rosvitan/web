let num = 6 + 4
let vcs = "labas"
let relationship = (vcs == num)

console.log (num + ", " + vcs + ". " +relationship)
console.log(`Mokomes JS: ${num}, ${vcs}, ${relationship}`)
 
let name = "Laura"
let surname = "Zelenkiene"
let person = name + " " + surname
console.log(person)

let  num1 = 4
let num2 = "4"
console.log(num1+num2)

let tekstas = "Pirmas"

console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.toLowerCase())
console.log(tekstas.charAt(5))
console.log(tekstas.indexOf("r"))

tekstas = "Cia gali buti Jusu reklama!"

console.log(tekstas.replace("gali buti", "yra"))
console.log(tekstas.substring(4, 14))
console.log(tekstas.substring(14))
console.log(tekstas.substr(4,9))



//alert ("Demsio! Virusas!")
//confirm("Ar valgysi pietus?")
//propt("Kiek tau metu?")

function sumOfCubes(a, b) {
   return a*a*a + b*b*b
}

let atsakymas = sumOfCubes(7, 9)
console.log(atsakymas)




let hi = "Labas"
function hello(a) {
    console.log(a)
}

hello(hi)

let studentai = ["Lukas", "Rita", "Martynas", "Rasa", "Klaudijus"]
console.log(studentai[3])

studentai[3] = "Laura"
console.log(studentai[3])

console.log(studentai.length)

console.log(studentai)

for (let i =0; i < studentai.length; i++) {
    console.log(studentai [i])

}

studentai.pop()
console.log(studentai)

studentai.push("Tomas")
console.log(studentai)

let darbuotojai = ["Ieva", "Andrius", "Ugne", "Migle"]
for(let i = 0; i < darbuotojai.length; i++) {
    console.log(darbuotojai[i])
}

darbuotojai.pop()
console.log(darbuotojai)hello
darbuotojai[2] = undefined
console.log(darbuotojai)
darbuotojai.push("Jurga")
console.log(darbuotojai)
let mokykla = [studentai, darbuotojai]

console.log(mokykla)

console.log(mokykla[0][2])
 






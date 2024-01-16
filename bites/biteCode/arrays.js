function addToBatch(array, number) {
    const newArr = [...array]
    if (newArr.length >= 5) {
        return newArr
    }
    else {
    newArr.push(number)
    return newArr
}}

module.exports = addToBatch



const cohort = {name: 'Jan2024', id: 123, students: ['ed','nick','aiden','si']}

function deCohort(object){
    console.log(`${object.name} - ${object.id} - ${object.students.length} students in this cohort`)}

deCohort(cohort)
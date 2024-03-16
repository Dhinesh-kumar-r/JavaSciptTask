let calculate =()=>{
     let cdate = document.getElementById("date").value;
    let course = document.getElementById("course")
    
    let c = {
        course1 : "Select",
        course2 : "Full Stack Development",
        course3 : "Web Development",
        course4 : "IMS",
        course5 : "Digital Marketing"
    }

    for(let key in c){
        let option = document.createElement("option");
        option.textContent = c[key]
        option.value=key;
        course.appendChild(option)
    }
}
calculate();

document.getElementById("course").addEventListener("input",course=()=>{
    let cdate = document.getElementById("date").value;
    let answer = document.getElementById("answer")
    let course = document.getElementById("course")
    let date1 = new Date(cdate);
  
    let c = {
        course1 : "Select",
        course2 : "Full Stack Development",
        course3 : "Web Development",
        course4 : "IMS",
        course5 : "Digital Marketing"
    }

    if(course.value === "course2" ){
        let days= 110
        let result = date1.setDate(date1.getDate()+days)
        let final1 = new Date(result)
        let day =  final1.getDay()
        let month =final1.getMonth()+1
        let year = final1.getFullYear()
        let show  = `${day}th Day ${month} th month ${year} the course will Complete`
        answer.innerHTML = show
   
    }
    else if (course.value === "course3") {
        let days= 90
        let result1 = date1.setDate(date1.getDate()+days)
        let final1 = new Date(result1)
        let day =  final1.getDay()
        let month =final1.getMonth()+1
        let year = final1.getFullYear()
        let show  = `${day}th Day ${month} th month ${year} the course will Complete`
        answer.innerHTML = show
        
    } 
    else if(course.value === "course4"){
        let days= 70
        let result2 = date1.setDate(date1.getDate()+days)
        let final1 = new Date(result2)
        let day =  final1.getDay()
        let month =final1.getMonth()+1
        let year = final1.getFullYear()
        let show  = `${day} th Day ${month} th month ${year} the course will Complete`
        answer.innerHTML = show
       
    }
    else if(course.value === "course5"){
        let days= 50
        let result3 = date1.setDate(date1.getDate()+days)
        let final1 = new Date(result3)
        let day =  final1.getDay()
        let month =final1.getMonth()+1
        let year = final1.getFullYear()
        let show  = `${day}th Day ${month} th month ${year} the course will Complete`
        answer.innerHTML = show
    }
    else{
    }
})
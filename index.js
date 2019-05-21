class TodoApp {

    constructor(done) {
        this.done = done;
        this.inputField = document.querySelector('input');
    }

    addNewTask() {
        const task = this.inputField.value;

        if (task.length > 0) {
            const taskList = document.querySelector('.list-group');
            let newTask = document.createElement('li');
            newTask.setAttribute("class", "list-group-item");
            let spanEl = document.createElement('span');
            spanEl.appendChild(document.createTextNode(task));
            let labelEl = document.createElement('label');
            let checkbx = document.createElement('input');
            checkbx.setAttribute('type' , "checkbox");
            checkbx.setAttribute('class' , "check");
            labelEl.appendChild(checkbx);
            labelEl.appendChild(document.createTextNode("Done"));
            newTask.appendChild(spanEl);
            newTask.appendChild(labelEl);


            taskList.appendChild(newTask);
        }
    }

    getChecked2() {
        const liEl = document.querySelectorAll('li');
        const checkBoxes = document.querySelectorAll('.check');

        for (let i = 0; i < liEl.length; i++) {
            checkBoxes[i].addEventListener('change', function () {
                if (checkBoxes[i].checked) {
                    liEl[i].setAttribute("class", "list-group-item active");
                    console.log('checked! ' + this);
                } else {
                    liEl[i].setAttribute("class", "list-group-item");
                    console.log('unchecked!');
                }
            });

        }
    }




}


// function getChecked2(){
//     const liEl = document.querySelectorAll('li');
//     const checkBoxes = document.querySelectorAll('.check');

//     for(let i=0; i<liEl.length; i++){
//         checkBoxes[i].addEventListener('change', function () {
//             if (checkBoxes[i].checked) {
//                 liEl[i].setAttribute("class", "list-group-item active");
//                 console.log('checked! ' + this);
//             } else {
//                 liEl[i].setAttribute("class", "list-group-item");
//                 console.log('unchecked!');
//             }
//         });

//     }
// }

//  function getChecked() {

            
//                 const checkBoxes = document.querySelectorAll('.check');
//                 checkBoxes.forEach(function(checkBox){
//                     const liEl = document.querySelectorAll('li');
//                     liEl.forEach(function (li) {
//                     checkBox.addEventListener('change', function () {
//                         if (checkBox.checked) {
//                             li.setAttribute("class", "list-group-item active");
//                             console.log('checked! ' + this);
//                         } else {
//                             li.setAttribute("class", "list-group-item");
//                             console.log('unchecked!');
//                         }
//                     });
//                 }
//                     );
                
//             });
            

//     }

tdap = new TodoApp(true);
tdap.getChecked2();
const butt = document.querySelector('.btn-info');
butt.addEventListener('click', () => {
    tdap.addNewTask();
    tdap.getChecked2();
    
});

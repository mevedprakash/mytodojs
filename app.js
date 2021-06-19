let uIController = (function() {
    let domStrings = {
        taskInput: "#task-input",
        addTaskBtn: "#add-task",
        taskList: "#task-list"
    }

    function getTaskHtml(task) {
        return `<div class="d-flex text-muted pt-3">
            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <span class="d-block">${task}</span>
            </div>
        </div>`;
    }
    return {
        addTaskBtn: document.querySelector(domStrings.addTaskBtn),
        taskInput: document.querySelector(domStrings.taskInput),
        taskList: document.querySelector(domStrings.taskList),
        getTaskHtml,
    };
})();

let appController = (function(uIC) {

    uIC.addTaskBtn.addEventListener("click", function() {
        let task = uIC.taskInput.value;
        uIC.taskInput.value = "";
        uIC.taskList.innerHTML += uIC.getTaskHtml(task);
    });
})(uIController);
let task = [
    {
        check: 'false',
        title: 'first',
        fav: 'true',
        date: '2020-05-14',
        file: '1.pdf',
        comment: 'first task',
    },
    {
        check: 'false',
        title: 'second',
        fav: 'true',
        date: '',
        file: '2.pdf',
        comment: 'second task',
    },
    {
        check: 'false',
        title: 'third',
        fav: 'false',
        date: '2020-06-18',
        file: '',
        comment: '',
    },
    {
        check: 'false',
        title: 'fourth',
        fav: 'false',
        date: '',
        file: '4.pdf',
        comment: '',
    },
    {
        check: 'true',
        title: 'fifth',
        fav: 'false',
        date: '',
        file: '',
        comment: '',
    }
];
let tasks = document.getElementById("tasks");
let progress = document.getElementById("progress");
let complete = document.getElementById("complete");
let taskshr = document.getElementById("taskshr");
let progresshr = document.getElementById("progresshr");
let completehr = document.getElementById("completehr");
let completetask = document.getElementsByClassName("complete");
let tasking = document.getElementsByClassName("content");
let nofirst = document.getElementsByClassName("nofirst");
let create = document.getElementById("create");
let add = document.getElementById("add");
tasks.classList.add("click");
create.style.display = "none";

function changeTab(id) {
    if (id == tasks) {
        progress.classList.remove("click");
        tasks.classList.add("click");
        complete.classList.remove("click");
        progresshr.style.display = "none";
        taskshr.style.display = "block";
        completehr.style.display = "none";
        create.style.display = "none";
        add.style.display = "block";
        for (let i = 0; i < completetask.length; i++) {
            completetask[i].style.display = "block";
        }
        for (let i = 0; i < tasking.length; i++) {
            tasking[i].style.display = "block";
        }
        for (let i = 0; i < nofirst.length; i++) {
            nofirst[i].style.display = "block";
        }
    } else if (id == progress) {
        progress.classList.add("click");
        tasks.classList.remove("click");
        complete.classList.remove("click");
        progresshr.style.display = "block";
        taskshr.style.display = "none";
        completehr.style.display = "none";
        create.style.display = "none";
        add.style.display = "block";
        for (let i = 0; i < completetask.length; i++) {
            completetask[i].style.display = "none";
        }
        for (let i = 0; i < tasking.length; i++) {
            tasking[i].style.display = "block";
        }
        for (let i = 0; i < nofirst.length; i++) {
            nofirst[i].style.display = "block";
        }
    } else if (id == complete) {
        progress.classList.remove("click");
        tasks.classList.remove("click");
        complete.classList.add("click");
        progresshr.style.display = "none";
        taskshr.style.display = "none";
        completehr.style.display = "block";
        create.style.display = "none";
        add.style.display = "block";
        for (let i = 0; i < completetask.length; i++) {
            completetask[i].style.display = "block";
        }
        for (let i = 0; i < tasking.length; i++) {
            tasking[i].style.display = "none";
        }
        for (let i = 0; i < nofirst.length; i++) {
            nofirst[i].style.display = "none";
        }
    }
}

function showCreate() {
    add.style.display = "none";
    create.style.display = "block";
}

function changeStar(number) {
    let star = document.getElementById("star-" + number);
    let fat = star.parentNode.parentNode.parentNode;
    let title = fat.getAttribute("class");
    if (title == "content") {
        fat.removeAttribute("class");
        fat.setAttribute("class", "nofirst");
        star.removeAttribute("class");
        star.setAttribute("class", "far fa-star");
        task[number].fav = "false";
    } else if (title == "nofirst") {
        fat.removeAttribute("class");
        fat.setAttribute("class", "content");
        star.removeAttribute("class");
        star.setAttribute("class", "fas fa-star");
        task[number].fav = "true";
    }
    task.sort(compare);
    load();
}

function upload() {
    document.getElementById("upload").click();
}

function load() {
    let main = document.getElementById("alltask");
    let str = '';

    for (let i = 0; i < task.length; i++) {
        let content = '';
        if (task[i].fav == "true") {
            content += '<section class="content"><section class="title"><input type="checkbox" class="check" id="check-' + i + '" onclick="clickCheck(' + i + ')"><span class="mission">'
                + task[i].title + '</span><span class="star"><i class="fas fa-star" id="star-' + i + '" onclick="changeStar(' + i + ')"></i><i class="fas fa-pen" id="edit-' + i + '" onclick="edit(' + i + ')"></i></span></section>';
            if (task[i].date != "" && task[i].file != "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-file"></i><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date != "" && task[i].file == "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span></section></section>';
            } else if (task[i].date == "" && task[i].file != "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-file"></i></section></section>';
            } else if (task[i].date == "" && task[i].file == "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date != "" && task[i].file != "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-file"></i></section></section>';
            } else if (task[i].date != "" && task[i].file == "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date == "" && task[i].file != "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-file"></i><i class="far fa-comment-dots"></i></section></section>';
            } else content += '</section>';
        } else if (task[i].fav == "false" && task[i].check != "true") {
            content += '<section class="nofirst"><section class="title"><input type="checkbox" class="check" id="check-' + i + '" onclick="clickCheck(' + i + ')"><span class="mission">'
                + task[i].title + '</span><span class="star"><i class="far fa-star" id="star-' + i + '" onclick="changeStar(' + i + ')"></i><i class="fas fa-pen" id="edit-' + i + '" onclick="edit(' + i + ')"></i></span></section>';
            if (task[i].date != "" && task[i].file != "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-file"></i><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date != "" && task[i].file == "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span></section></section>';
            } else if (task[i].date == "" && task[i].file != "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-file"></i></section></section>';
            } else if (task[i].date == "" && task[i].file == "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date != "" && task[i].file != "" && task[i].comment == "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-file"></i></section></section>';
            } else if (task[i].date != "" && task[i].file == "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-calendar-alt"></i><span class="date">' + task[i].date + '</span><i class="far fa-comment-dots"></i></section></section>';
            } else if (task[i].date == "" && task[i].file != "" && task[i].comment != "") {
                content += '<section class="tab"><i class="far fa-file"></i><i class="far fa-comment-dots"></i></section></section>';
            } else content += '</section>';
        } else if (task[i].check == "true") {
            content += '<section class="complete"><section class="title"><input type="checkbox" class="check" id="check-' + i + '" onclick="clickCheck(' + i + ')" checked><span class="mission">'
                + task[i].title + '</span><span class="star"><i class="far fa-star" id="star-' + i + '" onclick="changeStar(' + i + ')"></i><i class="fas fa-pen"></i></span></section></section>';
        }
        str += content;
    }
    main.innerHTML = str;
}

function clickCheck(number) {
    let checkId = document.getElementById("check-" + number);
    let checkParent = checkId.parentNode.parentNode;
    if (checkParent.getAttribute("class") == "content" || checkParent.getAttribute("class") == "nofirst") {
        /* checkParent.setAttribute("class", "complete");
         checkParent.firstChild.lastChild.firstChild.setAttribute("class", "far fa-star");*/
        task[number].check = "true";
        task[number].fav = "false";
    } else /*checkParent.setAttribute("class", "nofirst");*/ task[number].check = "false";

    task.sort(compare);
    load();
}

function edit(number) {
    let editId = document.getElementById("edit-" + number);
    let parId = editId.parentNode.parentNode.parentNode;

    if (parId.lastChild.getAttribute("class") == "fadd") {
        editToggle(parId);
    }
    else if (parId.lastChild.getAttribute("class") == "fadd hide") {
        editToggle(parId);
    } else {
        let editTitle = document.createElement("input");
        editTitle.setAttribute("class", "editTitle");
        editTitle.setAttribute("type", "text");
        editTitle.setAttribute("placeholder", task[number].title);
        parId.firstChild.insertBefore(editTitle, parId.firstChild.lastChild);
        parId.getElementsByClassName("title")[0].getElementsByClassName("mission")[0].classList.toggle("hide");
        parId.lastChild.setAttribute("class", "tab hide");
        let str = "";
        let hr = document.createElement("hr");
        parId.appendChild(hr);
        let section = document.createElement("section");
        section.setAttribute("class", "new");
        parId.appendChild(section);
        let newsection = parId.lastChild;
        str += '<section class="deadline"><i class="far fa-calendar-alt"></i><span>Deadline</span><br><input type="date" class="date" value="' + task[number].date + '">'
            + '<input type="time" class="time"></section><section class="file"><i class="far fa-file"></i><span>File</span><input type="file" id="upload" style="display: none;"><section class="plus" onclick="upload()"><a>+</a></section></section>'
            + '<section class="comment"><i class="far fa-comment-dots"></i><span>Comment</span><textarea class="input" placeholder="' + task[number].comment + '"></textarea></section>';
        newsection.innerHTML = str;
        let cancel = document.createElement("section");
        cancel.setAttribute("class", "cancel");
        cancel.setAttribute("onclick", "cancel(" + number + ")");
        parId.appendChild(cancel);
        let newcancel = parId.lastChild;
        newcancel.innerHTML = '<a>X Cancel</a>';

        let save = document.createElement("section");
        save.setAttribute("class", "fadd");
        save.setAttribute("onclick", "updateTask(" + number + ")");
        parId.appendChild(save)
        let newsave = parId.lastChild;
        newsave.innerHTML = '<a>+ Save</a>';
    }
}

function editToggle(parId) {
    parId.firstChild.getElementsByClassName("editTitle")[0].classList.toggle("hide");
    parId.getElementsByClassName("title")[0].getElementsByClassName("mission")[0].classList.toggle("hide");
    parId.getElementsByTagName("hr")[0].classList.toggle("hide");
    parId.getElementsByClassName("new")[0].classList.toggle("hide");
    parId.getElementsByClassName("cancel")[0].classList.toggle("hide");
    parId.getElementsByClassName("fadd")[0].classList.toggle("hide");
    parId.getElementsByClassName("tab")[0].classList.toggle("hide");
}

function cancel(number) {
    let editId = document.getElementById("edit-" + number);
    let parId = editId.parentNode.parentNode.parentNode;
    parId.firstChild.getElementsByClassName("editTitle")[0].classList.toggle("hide");
    parId.getElementsByClassName("title")[0].getElementsByClassName("mission")[0].classList.toggle("hide");
    parId.getElementsByTagName("hr")[0].classList.toggle("hide");
    parId.getElementsByClassName("new")[0].classList.toggle("hide");
    parId.getElementsByClassName("cancel")[0].classList.toggle("hide");
    parId.getElementsByClassName("fadd")[0].classList.toggle("hide");
    parId.getElementsByClassName("tab")[0].classList.toggle("hide");
}

function updateTask(number) {
    let editId = document.getElementById("edit-" + number);
    let parId = editId.parentNode.parentNode.parentNode;

    let newtitle = parId.firstChild.getElementsByClassName("editTitle")[0];
    if (newtitle.value != "") {
        task[number].title = newtitle.value;
    }

    let newdate = parId.getElementsByClassName("new")[0].getElementsByClassName("deadline")[0].getElementsByClassName("date")[0];
    task[number].date = newdate.value;

    let newcomment = parId.getElementsByClassName("new")[0].getElementsByClassName("comment")[0].getElementsByTagName("textarea")[0];
    if (newcomment.value != "") {
        task[number].comment = newcomment.value;
    }

    load();
}

function addcancel() {
    create.style.display = "none";
    add.style.display = "block";
}

function createTask() {
    let createId = document.getElementById("create");
    let titleNode = createId.getElementsByClassName("title")[0].getElementsByClassName("mission")[0];
    let dateNode = createId.getElementsByClassName("new")[0].getElementsByClassName("deadline")[0].getElementsByClassName("date")[0];
    let commentNode = createId.getElementsByClassName("new")[0].getElementsByClassName("comment")[0].getElementsByClassName("input")[0];
    task.push({
        check: 'false',
        title: titleNode.value,
        fav: 'false',
        date: dateNode.value,
        file: '',
        comment: commentNode.value,
    })

    addcancel();

    task.sort(compare);
    load();

    titleNode.value = "";
    dateNode.value = "";
    commentNode.value = "";
}
function compare(a, b) {
    if (a.check == "false" && b.check == "false") {
        if (a.fav == "true" && b.fav == "false") return -1;
        if ((a.fav == "true" && b.fav == "true") || (a.fav == "false" && b.fav == "false")) return 0;
        if (a.fav == "false" && b.fav == "true") return 1;
    }
    if (a.check == "true" && b.check == "false") return 1;
    if (a.check == "false" && b.check == "true") return -1;
    if (a.check == "true" && b.check == "true") return 0;
}

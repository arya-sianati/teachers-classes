var times = 0

school_times = {}



function add(id){
    let x = Number(document.getElementById(id).value)
    x += 1
    document.getElementById(id).value = x
}

function remove(id){
    let x = Number(document.getElementById(id).value)
    if ((x-1) >= 0){
      x -= 1
      document.getElementById(id).value = x
    }
}

function add_time(){

    x = document.getElementsByTagName('input')
    for (i of x){
        if (i.type === 'time'){
            school_times [i.id] = i.value

        }
    }



    times += 1
    document.getElementById('neg').innerHTML = "<input type='button' id='remove-time' onclick='remove_time()' class='btn btn-danger' value='-'>" +
                                                        "<input type='button' id='add-time' onclick='add_time()' class='btn btn-primary' value='+'>"

    document.getElementById('classes-times').innerHTML += "" +
        "<div class=\"accordion-item\">\n" +
        "                        <h2 class=\"accordion-header\" id=\"school-schedule-time-" + times + "-heading\">\n" +
        "                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#school-schedule-time-" + times + "-collapse\" aria-expanded=\"false\" aria-controls=\"school-schedule-time-" + times + "-collapse\">\n" +
        "                            زنگ " + times + "\n" +
        "                          </button>\n" +
        "                        </h2>\n" +
        "                        <div id=\"school-schedule-time-" + times + "-collapse\" class=\"accordion-collapse collapse\" aria-labelledby=\"school-schedule-time-" + times + "-heading\">\n" +
        "                          <div class=\"accordion-body\">\n" +
        "                            <div class=\"row\" dir=\"rtl\">\n" +
        "                              <div class=\"col-1\" dir=\"rtl\"><h6 class=\"mt-2\">از ساعت</h6></div>\n" +
        "                              <div class=\"col-5\"><input id=\"school-schedule-time-" + times + "-start\" type=\"time\" class=\"form-control\"></div>\n" +
        "                              <div class=\"col-1\" dir=\"rtl\"><h6 class=\"mt-2\">تا ساعت</h6></div>\n" +
        "                              <div class=\"col-5\"><input id=\"school-schedule-time-" + times + "-end\" type=\"time\" class=\"form-control\"></div>\n" +
        "                            </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                          </div>\n" +
        "                        </div>\n" +
        "                      </div>"


    for (i in school_times){
        document.getElementById(i).value = school_times[i]
    }


}


function remove_time(){
    let x;

    y = document.getElementsByTagName('input')
    for (i of y){
        if (i.type === 'time'){
            school_times [i.id] = i.value

        }
    }

    if ((times - 1) <= 0) {
        times -= 1
        document.getElementById('neg').innerHTML = "<input type='button' id='add-time' onclick='add_time()' class='btn btn-primary' value='+'>"

        document.getElementById("classes-times").innerHTML = ''
    } else {




        x = document.getElementById("classes-times").innerHTML


        del_text = "<div class=\"accordion-item\">\n" +
            "                        <h2 class=\"accordion-header\" id=\"school-schedule-time-" + times + "-heading\">\n" +
            "                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#school-schedule-time-" + times + "-collapse\" aria-expanded=\"false\" aria-controls=\"school-schedule-time-" + times + "-collapse\">\n" +
            "                            زنگ " + times + "\n" +
            "                          </button>\n" +
            "                        </h2>\n" +
            "                        <div id=\"school-schedule-time-" + times + "-collapse\" class=\"accordion-collapse collapse\" aria-labelledby=\"school-schedule-time-" + times + "-heading\">\n" +
            "                          <div class=\"accordion-body\">\n" +
            "                            <div class=\"row\" dir=\"rtl\">\n" +
            "                              <div class=\"col-1\" dir=\"rtl\"><h6 class=\"mt-2\">از ساعت</h6></div>\n" +
            "                              <div class=\"col-5\"><input id=\"school-schedule-time-" + times + "-start\" type=\"time\" class=\"form-control\"></div>\n" +
            "                              <div class=\"col-1\" dir=\"rtl\"><h6 class=\"mt-2\">تا ساعت</h6></div>\n" +
            "                              <div class=\"col-5\"><input id=\"school-schedule-time-" + times + "-end\" type=\"time\" class=\"form-control\"></div>\n" +
            "                            </div>\n" +
            "\n" +
            "\n" +
            "\n" +
            "                          </div>\n" +
            "                        </div>\n" +
            "                      </div>"

        x = x.replace(del_text, '')
        document.getElementById("classes-times").innerHTML = x
        times -= 1



    }

    delete school_times[-1]
    if (school_times.length){
        for (i in school_times){
            document.getElementById(i).value = school_times[i]
        }
    }

}


function submit(){
    // document.getElementById('school-schedule-time-1-start').value = '16:51'
    console.log(school_times)

}


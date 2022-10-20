function okay() {
    var myForm = document.getElementById("form");
    var first = document.getElementById("first-name");
    var last = document.getElementById("last-name");
    var email = document.getElementById("email");
    var gender = document.getElementsByName('gender');
    var food = document.getElementsByName("food");
    var pincode = document.getElementById("pincode");
    var address = document.getElementById("address");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var tableElem = document.getElementById("table");
    
        var selectedGender = '';
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked)
                selectedGender = gender[i].value;
        }
        var selectedfoods = [];
        for (var i = 0; i < food.length; i++) {
            if (food[i].checked)
                selectedfoods.push(food[i].value);
        }
        if (selectedfoods.length<=1){
            alert("select min 2 foods")
        }
        else{
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(first.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newText = document.createTextNode(last.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(2);
        newText = document.createTextNode(email.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(3);
        newText = document.createTextNode(selectedGender);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(4);
        newText = document.createTextNode(selectedfoods.toString());
        newCell.appendChild(newText);
        newCell = newRow.insertCell(5);
        newText = document.createTextNode(pincode.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(6);
        newText = document.createTextNode(address.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(7);
        newText = document.createTextNode(state.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(8);
        newText = document.createTextNode(country.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(9);
        myForm.reset();
        }
  };

    var div = document.createElement("div");
        div.setAttribute("class","overall");
    var h1 = document.createElement("h1");
        h1.setAttribute("id","title");
        h1.innerHTML="Form with Table";
    var p = document.createElement("p");
        p.setAttribute("id","description");
        p.innerHTML="DOM Manipulation With Forms And Table";
    var div1 = document.createElement("div");
        div1.setAttribute("class","left");
    var form = document.createElement("form");
        form.setAttribute("id","form");
    var div2 = document.createElement("div");
        div2.setAttribute("class","form-group");
    var div3 = document.createElement("div");
        div3.setAttribute("class","right");
    
    var fname_input = create_input("input","id","first-name","type","text","class","form-control form-control-sm","placeholder","First Name");
    var b1 = document.createElement("br");
    var lname_input = create_input("input","id","last-name","type","text","class","form-control form-control-sm","placeholder","Last Name");
    var b2 = document.createElement("br");
    var email_input = create_input("input","id","email","type","email","class","form-control form-control-sm","placeholder","Email");
    var b3 = document.createElement("br");
    var gender_label = create_label("label","Gender&nbsp;:&nbsp;");
    var radio_male = create_input1("input","type","radio","name","gender","id","male","value","Male");
    var label_male = create_label("label","Male&nbsp;");
    var radio_female = create_input1("input","type","radio","name","gender","id","female","value","Female");
    var label_female = create_label("label","Female");
    var b4 = document.createElement("br");
    var food_label = create_label("label","Select Foods&nbsp;:");
    var food_span = create_label("span"," ( Select atleast two foods )");
    var b5 = document.createElement("br");
    var food_cb1 = create_input1("input","type","checkbox","id","north","name","food","value","North IN");
    var cd1_label = create_label("label","&nbsp;North Indian");
    var b6 = document.createElement("br");
    var food_cb2 = create_input1("input","type","checkbox","id","south","name","food","value","South IN");
    var cd2_label = create_label("label","&nbsp;South Indian");
    var b7 = document.createElement("br");
    var food_cb3 = create_input1("input","type","checkbox","id","chinese","name","food","value","Chinese");
    var cd3_label = create_label("label","&nbsp;Chinese");
    var b8 = document.createElement("br");
    var food_cb4 = create_input1("input","type","checkbox","id","japanese","name","food","value","Japanese");
    var cd4_label = create_label("label","&nbsp;Japanese");
    var b9 = document.createElement("br");
    var food_cb5 = create_input1("input","type","checkbox","id","sea","name","food","value","Sea Food");
    var cd5_label = create_label("label","&nbsp;Sea Foods");
    var b10 = document.createElement("br");
    var b15 = document.createElement("br");
    var pincode_input = create_input("input","id","pincode","type","number","class","form-control form-control-sm","placeholder","Pincode");
    var b11 = document.createElement("br");
    var Address_input = create_input("textarea","id","address","type","text","class","form-control form-control-sm","placeholder","Address");
    var b12 = document.createElement("br");
    var state_input = create_input("input","id","state","type","text","class","form-control form-control-sm","placeholder","State");
    var b13 = document.createElement("br");
    var country_input = create_input("input","id","country","type","text","class","form-control form-control-sm","placeholder","Country");
    var b14 = document.createElement("br");
    var button = create_input1("input","type","button","id","submit","class","btn btn-sm btn-primary","value","Add to Table");
        button.setAttribute("onclick","okay()");
    var table = document.createElement("table");
        table.setAttribute("class","table border")
        table.setAttribute("id","table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = create_label("th","First Name");
    var th2 = create_label("th","Last Name");
    var th3 = create_label("th","Email");
    var th4 = create_label("th","Gender");
    var th5 = create_label("th","Selected Foods");
    var th6 = create_label("th","Pincode");
    var th7 = create_label("th","Address");
    var th8 = create_label("th","State");
    var th9 = create_label("th","Country");
    var tbody = document.createElement("tbody");
    
    
    function create_input (tag,att1,attvalue1,att2,attvalue2,att3,attvalue3,att4,attvalue4){
        var ele = document.createElement(tag);
        ele.setAttribute(att1,attvalue1);
        ele.setAttribute(att2,attvalue2);
        ele.setAttribute(att3,attvalue3);
        ele.setAttribute(att4,attvalue4);
        ele.setAttribute('required', '');
        return ele;
    }
    function create_label (tag,content){
        var ele = document.createElement(tag);
        ele.innerHTML=content;
        return ele;
    }
    function create_input1 (tag,att1,attvalue1,att2,attvalue2,att3,attvalue3,att4,attvalue4){
        var ele = document.createElement(tag);
        ele.setAttribute(att1,attvalue1);
        ele.setAttribute(att2,attvalue2);
        ele.setAttribute(att3,attvalue3);
        ele.setAttribute(att4,attvalue4);
        return ele;
    }
    
    div1.append(form);
    form.append(div2);
    div3.append(table);
    thead.append(tr);
    table.append(thead,tbody);
    div.append(h1,p,div1,div3);
    tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
    div2.append(fname_input,b1,lname_input,b2,email_input,b3,gender_label,radio_male,label_male,radio_female,label_female,b4,food_label,
    food_span,b5,food_cb1,cd1_label,b6,food_cb2,cd2_label,b7,food_cb3,cd3_label,b8,food_cb4,cd4_label,b9,food_cb5,cd5_label,b10,b15,pincode_input,
    b11,Address_input,b12,state_input,b13,country_input,b14,button);
    document.body.append(div);
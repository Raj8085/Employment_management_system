// var empDataArray = [];
// var empHtmlString;

// $("#empFormSubmit").click(event => {
//     event.preventDefault();

//     var fName = $("#fName").val();
//     var lName = $("#lName").val();
//     var email = $("#email").val();
//     var pwd = $("#pwd").val();
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    

//     if (!emailRegex.test(email)) {
//         clearField();
//         Swal.fire({
//             title: "Employee Data has been stored",
//             text: "You clicked the button!",
//             icon: "success"
//         });
//         // Swal.fire({
//         //     icon: "error",
//         //     title: "Oops...",
//         //     text: "Invalid Email!",
//         //     footer: '<a href="#">Why do I have this issue?</a>'
//         // });
//         return;
//     }

//     if (pwd.length < 8) {
//         clearField();
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Password must be at least 8 characters long!",
//             footer: '<a href="#">Why do I have this issue?</a>'
//         });
//         return;
//     }

//     if (empDataArray.some(emp => emp.email === email)) {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Email already exists! Please use a different email.",
//             footer: '<a href="#">Why do I have this issue?</a>'
//         });
//         return;
//     }

//     fName === "" || lName === "" || email === "" || pwd === "" ? errorOnSubmit() : submitData();

//     function submitData() {
//         var secret = "Why You want to Know My password";
//         var enc = CryptoJS.AES.encrypt(pwd, secret).toString();
//         var enc = enc.substring(0, 10);

//         var empData = {
//             fName: fName,
//             lName: lName,
//             email: email,
//             pwd: enc

//         };

//         empDataArray.push(empData);
//         console.log(empDataArray);
//         updateHtmlString();
//         clearField();



//         Swal.fire({
//             title: "Employee Data has been stored",
//             text: "You clicked the button!",
//             icon: "success"
//         });

//         empHtmlString = "";


//     }
//     function updateHtmlString() {
//         empHtmlString = "";
//         empDataArray.forEach(a => {
//             empHtmlString += "<tr>"
//             empHtmlString += "<td>" + a.fName + "</td>" + "<td>" + a.lName + "</td>" + "<td>" + a.email + "</td>" + `<td>${a.pwd}</td>` + `<td><button class="fa fa-trash-o btn btn-danger" id="${a.email}"></button></td>`
//             empHtmlString += "</tr>"
//         });
//         $("#dataTableBody").html(empHtmlString);
//     }

//     function errorOnSubmit() {
//         clearField();
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong!",
//             footer: '<a href="#">Why do I have this issue?</a>'
//         });
//     }

//     $("body").on("click", ".btn-danger", function () {
//         const id = $(this).attr("id");
//         const employeeToDelete = empDataArray.find(a => a.email === id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//             cancelButtonText: "No, cancel!",
//             reverseButtons: true
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 empDataArray = empDataArray.filter(a => a.email !== id);
//                 updateHtmlString();
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: `${employeeToDelete.fName} record has been deleted successfully`,
//                     icon: "success"
//                 });
//             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                 Swal.fire({
//                     title: "Cancelled",
//                     text: "Your imaginary file is safe :)",
//                     icon: "error"
//                 });
//             }
//         });
//     });
// });
// function clearField() {
//     $("#fName").val("");
//     $("#lName").val("");
//     $("#email").val("");
//     $("#pwd").val("");
// }
var empDataArray = [];
var empHtmlString;

$("#empFormSubmit").click(event => {
    event.preventDefault();

    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var email = $("#email").val();
    var pwd = $("#pwd").val();
    var confirmPwd = $("#confirmPwd").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        clearField();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    if (pwd.length < 8) {
        clearField();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must be at least 8 characters long!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }
    if (pwd !== confirmPwd) {
        clearField();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Passwords do not match!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }
    if(pwd == confirmPwd){
        clearField();
    }


    if (empDataArray.some(emp => emp.email === email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exists! Please use a different email.",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    fName === "" || lName === "" || email === "" || pwd === "" || confirmPwd === "" ? errorOnSubmit() : submitData();

    function submitData() {
        var secret = "Why You want to Know My password";
        var enc = CryptoJS.AES.encrypt(pwd, secret).toString();
        var enc = enc.substring(0, 10);

        var empData = {
            fName: fName,
            lName: lName,
            email: email,
            pwd: enc,
            confirmPwd: enc

        };
        
        
        empDataArray.push(empData);
        console.log(empDataArray);
        updateHtmlString();
        clearField();
        
        Swal.fire({
            title: "Employee Data has been stored",
            text: "You clicked the button!",
            icon: "success"
        });
        var empData = [
            [fName,lName,email,pwd],
            
        ]
        // $('#empData').DataTable({
        //     responsive: true,
        //     data: empData
        // });

        empHtmlString = "";


    }
    function updateHtmlString() {
        empHtmlString = "";
        empDataArray.forEach(a => {
            empHtmlString += "<tr>"
            empHtmlString += "<td>" + a.fName + "</td>" + "<td>" + a.lName + "</td>" + "<td>" + a.email + "</td>" + `<td>${a.pwd}</td>`  + `<td><button   class="btn btn-danger"  id="${a.email}"> <i class="fas fa-times"></i></button></td>`
            empHtmlString += "</tr>"
        });
        $("#dataTableBody").html(empHtmlString);
    }

    function errorOnSubmit() {
        clearField();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    $("body").on("click", ".btn-danger", function () {
        const id = $(this).attr("id");
        const employeeToDelete = empDataArray.find(a => a.email === id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                empDataArray = empDataArray.filter(a => a.email !== id);
                updateHtmlString();
                Swal.fire({
                    title: "Deleted!",
                    text: `${employeeToDelete.fName} record has been deleted successfully`,
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    });
});
function clearField() {
    $("#fName").val("");
    $("#lName").val("");
    $("#email").val("");
    $("#pwd").val("");
    $("#confirmPwd").val("");
}

// $(document).ready(function () {
//     var empDataArray = [];
//     var dataTable = $('#empData').DataTable({
//         responsive: true
//     });

//     $("#empFormSubmit").click(function (event) {
//         event.preventDefault();
//         var fName = $("#fName").val();
//         var lName = $("#lName").val();
//         var email = $("#email").val();
//         var pwd = $("#pwd").val();
//         var confirmPwd = $("#confirmPwd").val();
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!emailRegex.test(email)) {
//             clearField();
//             showError("Invalid Email!");
//             return;
//         }

//         if (pwd.length < 8) {
//             clearField();
//             showError("Password must be at least 8 characters long!");
//             return;
//         }
//         if( !isStrongPassword(pwd)){
//             clearField();
//             showError("Please set standard password!");
//             return;
//         }
//         if (pwd !== confirmPwd) {
//             showError("Passwords do not match!");
//             return;
//         }

//         if (empDataArray.some(emp => emp.email === email)) {
//             showError("Email already exists! Please use a different email.");
//             return;
//         }

//         submitData(fName, lName, email, pwd);
//     });
//     function isStrongPassword(password) {
//         var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
//         return strongPasswordRegex.test(password);
//     }

//     function submitData(fName, lName, email, pwd) {
//         var secret = "Why You want to Know My password";
//         var enc = CryptoJS.AES.encrypt(pwd, secret).toString();
//         var encShort = enc.substring(0, 10);

//         var empData = {
//             fName: fName,
//             lName: lName,
//             email: email,
//             pwd: encShort
//         };

//         empDataArray.push(empData);
//         updateDataTable();
//         clearField();

//         Swal.fire({
//             title: "Employee Data has been stored",
//             text: "You clicked the button!",
//             icon: "success"
//         });
//     }

//     function updateDataTable() {
//         dataTable.clear();
//         empDataArray.forEach(a => {
//             dataTable.row.add([a.fName, a.lName, a.email, a.pwd, `<button class="fa fa-trash-o btn btn-danger" data-id="${a.email}"></button>`]);
//         });
//         dataTable.draw();
//     }

//     function showError(message) {
//         clearField();
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: message,
//             footer: '<a href="#">Why do I have this issue?</a>'
//         });
//     }

//     $("body").on("click", ".btn-danger", function () {
//         const id = $(this).data("id");
//         const employeeToDelete = empDataArray.find(a => a.email === id);

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//             cancelButtonText: "No, cancel!",
//             reverseButtons: true
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 empDataArray = empDataArray.filter(a => a.email !== id);
//                 updateDataTable();
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: `${employeeToDelete.fName} record has been deleted successfully`,
//                     icon: "success"
//                 });
//             } else if (result.dismiss === Swal.DismissReason.cancel) {
//                 Swal.fire({
//                     title: "Cancelled",
//                     text: "Your imaginary file is safe :)",
//                     icon: "error"
//                 });
//             }
//         });
//     });

//     function clearField() {
//         $("#fName").val("");
//         $("#lName").val("");
//         $("#email").val("");
//         $("#pwd").val("");
//         $("#confirmPwd").val("");   
//     }
// });


        function showMessage() {
            document.getElementById('message').style.display = 'block';
        }

        function showMessage(id) {
            document.getElementById(id).style.display = 'block';
        }


        function redirectToRolePage() {
            var role = document.getElementById("role").value;
            if (role === "administrador") {
                window.location.href = "adminpage.html";
            } else if (role === "coordinador") {
                window.location.href = "coordinadorpage.html";
            } else if (role === "conductor") {
                window.location.href = "conductorpage.html";
            } else if (role === "acudiente") {
                window.location.href = "acudientepage.html";
            } else if (role === "alumno") {
                window.location.href = "estudiantepage.html";
            }
        }

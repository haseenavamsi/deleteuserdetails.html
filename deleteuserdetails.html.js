< html>
    <body>
        <form onsubmit="saveToLocalStorage(event)">
            <label>Name</label>
            <input type="text" id="name" required/>
            <label >Email:</label>
            <input type="text" id="email" required/>
            <label >Phone Number</label>
            <input type="tel" id="phonenumber" required/>

            <input class="btn" type="submit" value="Submit">
            <ul id="listOfUsers"></ul>

        </form>
        <script>
            function saveToLocalStorage(event){
                e.preventDefault()
            }
                let myObj={
                    name:event.target.name.value,
                    email:event.target.email.value,
                    phonenumber:event.target.phonenumber.value

                };
                let myObj_serialized=JSON.stringify(myObj);
                localStorage.setItem(myObj.email,myObj_serialized)
                showNewUserOnScreen(myObj)

            }
            function showNewUserOnScreen(user){
                const parentNode = document.getElementById('listOfUsers');
                const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`

                parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }
            function editUserDetails(emailId, name, phonenumber){

                document.getElementById('email').value = emailId;
                document.getElementById('name').value = name;
                document.getElementById('phonenumber').value =phonenumber;

                deleteUser(emailId)
             }
            // deleteUser('abc@gmail.com')

            function deleteUser(emailId){
                console.log(emailId)
                localStorage.removeItem(emailId);
                removeUserFromScreen(emailId);

            }

            function removeUserFromScreen(emailId){
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(emailId);

                parentNode.removeChild(childNodeToBeDeleted)
            }





        </script>
    </body>
</html>

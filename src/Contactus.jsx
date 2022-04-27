import React from 'react';


const Contactus =() => {
  return (

    <>
    <div className="bodycontainer">
     <div class="container-contact">
        
        <form action="" id="form" class="form">
            <div class="input">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" autocomplete="off" />
                <small>Error massage</small>
            </div>

            <div class="input">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Email" autocomplete="off" />
                <small>Error massage</small>
            </div>

            <button class="btn btn-form" >Submit</button>
        </form>
    </div>
    </div>

    </>
  );
};

export default Contactus;
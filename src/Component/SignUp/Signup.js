import React from 'react'

function Signup() {
  return (
    <div className='container-xl container-lg container-md container-sm container-xs'>

    <div className="row">
        <div className="col-xl-4"></div>
        <div className="Product-card col-xl-4 mt-4 mb-4">

            <h1 className="text-primary text-center">SignUp Form</h1>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>

            <button className="btn btn-danger px-5 mt-4">SignUp</button>
        </div>
        <div className="col-xl-4"></div>
    </div>


</div>
  )
}

export default Signup

import React from 'react'

function Card() {
    return (
        <div>

            <div className='container-xl container-lg container-md container-sm container-xs mt-4 d-flex'>



                <div className="row">



                    <div className="col-xl-6 col-lg-3 col-md-1 col-sm-12 col-xs-12">
                        <div class="card px-1" style={{width: "40rem"}}>
                            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" class="card-img-top"  height="200px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Order Online</h5>
                                <p class="card-text">Stay home and order to your doorstep</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-3 col-md-1 col-sm-12 col-xs-12 px-4">
                    <div class="card" style={{width: "39rem"}}>
                            <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" class="card-img-top" height="200px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dining</h5>
                                <p class="card-text">View the city's favourite dining venues</p>
                            </div>
                        </div>
                    </div>

                  
                </div>




            </div>


        </div>

    )
}

export default Card

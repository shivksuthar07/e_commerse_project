import React from 'react'

const Cart = () => {
  return (
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-7'>
    
    
    </div>
    <div className='col-5 rounded'>
    <div class="card mb-4">
    <div class="card-header py-3">
      <h5 class="mb-0">Summary</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
          Products
          <span>Rs.53.98</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
          Shipping
          <span>Gratis</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>Total amount</strong>
            <strong>
              <p class="mb-0">(including VAT)</p>
            </strong>
          </div>
          <span><strong>Rs.53.98</strong></span>
        </li>
      </ul>

      <button type="button" class="btn btn-primary btn-lg btn-block">
        Go to checkout
      </button>
    </div>
  </div>


    </div>
    </div>
      
    </div>
  )
}

export default Cart

import React from 'react'
import { CommonHeading } from '../common/CommonHeading'
import { facility, roomItems } from '../data/Data'

export const Rooms = () => {
  return (
    <>
      <div
        className="container-xxl py-5">
        <div className="container">
        <CommonHeading heading='Rooms' title='Rooms' subtitle='Home' />
          <div className="row g-4">
            {roomItems.map((val, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="room-item shadow rounded overflow-hidden">
                  <div className='position-relative'>
                    <img className='img-fluid' src={val.img} alt=''/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {val.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className='mb-0'>{val.name}</h5>
                      <div className='ps-2'>{val.star}</div>
                    </div>
                    <div className='d-flex mb-3'>
                      {facility.map((item, index) => (
                        <small key={index} className='border-end me-3 pe-3'>
                          {item.icon}
                          {item.quantity} {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className='text-body mb-3'>{val.description}</p>
                    <div className='d-flex justify-content-between'>
                      <a href="" className='btn btn-sm btn-primary rounded py-2 px-4'>
                        {val.yellowbtn}
                      </a>
                      <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                        {val.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

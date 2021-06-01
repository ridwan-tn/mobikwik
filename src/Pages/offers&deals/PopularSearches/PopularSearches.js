import React from 'react'
import popularSearches from './PopularSearches.module.css'
import  './PopularSearches.css'

export default function PopularSearches() {
    return (
        <div className="row search" style={{marginTop:"85px"}}>
            <p className={popularSearches.heading}>Popular Searches on MobiKwik</p>
            <div className={popularSearches.links}>

                <a href=" " className={popularSearches.link} > Online Reacharge</a>
                <a href=" " className={popularSearches.link}> Electricity Bill Payments </a>
                <a href=" " className={popularSearches.link}> DTH Recharge  </a>
                <a href=" " className={popularSearches.link}> Data card Recharge  </a>
                <a href=" " className={popularSearches.link}> Gas Booking  </a>
                <a href=" " className={popularSearches.link}> Broadband Bill Payments  </a>
                <a href=" " className={popularSearches.link}> Postpaid Bill Payments  </a>
                <a href=" " className={popularSearches.link}> Instant Personal Loans  </a>
                <a href=" " className={popularSearches.link}> Money Transfer  </a>
            </div>
            
        </div>
    )
}

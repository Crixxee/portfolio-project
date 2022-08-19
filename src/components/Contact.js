import React from "react";

let submit="#"


export default function Contact() {
    return (
           <section >
                <div className="all">
                <h1 className="forall c">CONTACT ME</h1>
                </div>

                <div className="divide">
                <form className="form">
                    <label className="label" htmlFor="text">Name</label><br />
                    <input className="fill" type="text" placeholder="Full Name" required/><br /><br />

                    <label className="label" htmlFor="email">Email</label><br />
                    <input className="fill" type="email" placeholder="Email Address" required/> <br />

                    <div className="mycomment">
                    <h3 className="comment">Your Comments</h3>
                    <p id="comment">I would appreciate your comment below, be it suggestion or compliant.</p>
                    <textarea name="" id="textarea" cols="35" rows="15" placeholder="Write your message here"></textarea> <br /><br />
                    </div>
                
                <div className="contact-bitton">
                    <button type="submit" className="contact-button"><a href={submit} className="submit">Submit</a></button>
                    </div>
                </form><br />

                <div className="call-me">
                    <h3 className="you-can">You can also contact me through;</h3>
                    <p className="no"><span className="nu">Phone no:</span> 080xxxxxxxxxx </p>
                    <p className="no"><span className="nu">Email</span>: exxxxxxxx@gmail.com</p>
                </div>
                </div>
           </section>


    );

}
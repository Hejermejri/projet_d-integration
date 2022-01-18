import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi'

function howItWorks() {
    return (
        <div className="how-it-wroks">
            <div className="container">
                <h2>How It Wroks</h2>
                <div className="flex">

                <div>
                    <span><BiIcons.BiFileFind/></span>
                    <h4>Find a Job </h4>
                    <p> ng hidden in the middle of text. All the Lorem I
                psum generators on the Internet tend to repeat pr
               s</p>
                    </div>

                    <div>
                    <span><MdIcons.MdOutlineWorkOutline/> </span>
                    <h4>Get a good Job </h4>
                    <p> ng hidden in the middle of text. All the Lorem I
                psum generators on the Internet tend to repeat pr
               </p>
                    </div>

                    <div>
                    <span> <BiIcons.BiBuildings/></span>
                    <h4>Find a Job </h4>
                    <p> ng hidden in the middle of text. All the Lorem I
                psum generators on the Internet tend to repeat pr
               </p>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default howItWorks

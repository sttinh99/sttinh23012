import React from 'react';
import '../Contact/Contact.css'
function Contact() {
    return (
        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
            <div className="wrapper wrapper--w680">
                <div className="card card-1">
                    <div className="card-heading" />
                    <div className="card-body">
                        <h2 className="title">Contact Us</h2>
                        <p className="text-contact">Any questions so please contact:</p>
                        <strong className="text-contact">facemaskUFL@gmail.com</strong>
                        <div className="map">
                            <span style={{ "fontSize": "30px" }}>Our Address:</span>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.596715099018!2d108.20904461468373!3d16.034495688902425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421993714be463%3A0xe70ea786257610ed!2zMTMxIEzGsMahbmcgTmjhu68gSOG7mWMsIEtodcOqIFRydW5nLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1616080367049!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
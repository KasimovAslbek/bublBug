import React from 'react';
import dmcaGrey from '../img/dmca-grey.png';

function Footer() {
  return (
    <div className="bg-black pt-7 px-4 pb-12">
      <div className="text-[#a9a9a9] flex justify-center mb-2.5">
        <p>©2023- Bug Bulb <a href="https://google.com" className="ml-1">Built with CTRwow.com</a></p>
      </div>
      <div className="text-[#5c5c5c] text-center sm:flex justify-center gap-2.5 mb-1">
        <a href="https://google.com" className="hover:underline">Terms & Conditions</a>
        <a href="https://google.com" className="hover:underline">Privacy</a>
        <a href="https://google.com" className="hover:underline">Policy</a>
        <a href="https://google.com" className="hover:underline">Contact Us</a>
        <a href="https://google.com" className="hover:underline">Affiliate</a>
      </div>
      <div className="text-[#5c5c5c] flex justify-center gap-5 mb-2.5">
        <p>This website is operated by <a href="https://etsherahousewares.com/pages/terms-of-service?icta=order.html&ctr_spl_sid=f0299751-5187-41f9-9b74-2d440592bdb6&ctr_spl_id=6463a5bec35db83c3be8fc40&ctr_spl_tpt=&ctr_cssid=c55dc567b1684d73be34f940712ef7a5&ctr_io=2&ctr_ppid=6462c780c95e12050c3de222&ctr_psid=62aa95be1e6f07045c9f650e&ctr_ppu=https%3A%2F%2Fwww.shopbugbulb.com%2Fen%2Forder-prc3.html" className="underline">Etshera</a></p>
      </div>
      <div className="flex justify-center">
        <img src={dmcaGrey} alt=""/>
      </div>
    </div>
  );
}

export default Footer;

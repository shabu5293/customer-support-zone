import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 px-8 py-12 ">
        <Container>
          <div className="grid md:grid-cols-5 gap-8 border-b border-gray-300 pb-6">
            <div>
              <h3 className="text-white font-semibold mb-2">
                CS — Ticket System
              </h3>
              <p className="text-sm">
                A Customer Support Ticket System is a platform that allows customers to submit support requests and track their issues easily. It helps support teams manage, organize, and resolve customer problems efficiently through a centralized ticket management system.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact Saled</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>Products & Services</li>
                <li>Customer Stories</li>
                <li>Download Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Social Links</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  {" "}
                  <Twitter className="w-5 h-5"></Twitter>@CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  {" "}
                  <Instagram className="w-5 h-5"></Instagram>@CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  {" "}
                  <Facebook className="w-5 h-5"></Facebook>@CS — Ticket System
                </li>

                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5"></Mail>support@cst.com
                </li>
              </ul>
            </div>
          </div>

          <div className="text-left md:text-center text-gray-500 text-sm mt-8">
            © 2026 CS — Ticket System.
            <br className="block md:hidden" /> All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

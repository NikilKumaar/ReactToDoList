import React from "react";

function Footer() {
  const date = new Date()
  return (
    <>
    
    <footer class="footer fixed-bottom bg-dark text-light p-3">
    <div class="container bg-dark ">
      <p class="text-center bg-dark mb-0"><span className="bg-dark ">&copy; {date.getFullYear()} Nikil Kumaar N. All rights reserved.</span></p>
    </div>
  </footer>

    </>
  );
}

export default Footer;
function Footer() {
  return (
    <div className="h-[60vh] border flex flex-col justify-between items-center gap-15">
      <div className="flex mt-10 flex-col items-center gap-4" >
        <img src="./footer-logo.svg" className="h-[12vh]"/>
        <a href="mailto:info@usjcc.com"
          className="underline text-black/60 hover:text-black hover:cursor-pointer">
          info@usjcc.com 
        </a>

        <div className="flex flex-row justify-center items-center gap-2"> 
          <p> ©️ 2025 USJ Consulting Club </p>
          <p className="mb-1"> |  </p>
          <p> ALL RIGHTS RESERVED  </p>
          <p className="mb-1"> |  </p>
          <a href="https://www.instagram.com/usjconsultingclub/?hl=en"> 
          <img src="./instagram-icon.svg" className="h-[2vh] hover:cursor-pointer" />
          </a>
          <p className="mb-1"> | </p>
          <img src="./linkedin-icon.svg" className="h-[2vh] hover:cursor-pointer" />
        </div>
      
      </div>

      <div className="h-[20vh] w-[80%] relative">
        <img src="./footer.svg" className="w-full h-full object-cover z-0" />

        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/80 z-10" />
      </div>
    </div>
  );
}


export default Footer;
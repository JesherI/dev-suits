import instagramIcon from '../views/images/instagram.png';
import facebookIcon from '../views/images/facebook.png';
import whatsappIcon from '../views/images/whatsapp.png';


<div className="flex flex-col md:flex-row min-h-screen font-sans">
  
  <div className="bg-y bg-green-300 w-full md:w-1/2 p-10">
    <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-black font-medium mb-1">Nombre</label>
        <input type="text" className="w-full p-2 border border-gray-400" />
      </div>
      <div>
        <label className="block text-black font-medium mb-1">Presupuesto</label>
        <input type="text" className="w-full p-2 border border-gray-400" />
      </div>
      <div>
        <label className="block text-black font-medium mb-1">Correo Electrónico</label>
        <input type="email" className="w-full p-2 border border-gray-400" />
      </div>
      <div>
        <label className="block text-black font-medium mb-1">Mensaje</label>
        <textarea className="w-full p-2 border border-gray-400 h-28"></textarea>
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2">Enviar</button>
    </form>
  </div>

  
  <div className="bg-green  w-full md:w-1/2 flex flex-col justify-center items-center space-y-10 p-10">
    <div className="flex flex-col items-center space-y-2">
      <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
      <span className="text-sm">INSTAGRAM</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <img src={facebookIcon} alt="Facebook" className="w-12 h-12" />
      <span className="text-sm">FACEBOOK</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <img src={whatsappIcon} alt="Whatsapp" className="w-12 h-12" />
      <span className="text-sm">LINKEDIN</span>
    </div>
  </div>
</div>

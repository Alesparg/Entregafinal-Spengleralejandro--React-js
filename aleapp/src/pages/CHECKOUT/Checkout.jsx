import { Link } from "react-router-dom"
import { Navbar, NavbarHome, NavbarCheck } from '../../components/Navbar/Navbar'
import './styles.css'

const Checkout = () => {
    return (
        <main>
            <header>
                <NavbarCheck />
            </header>
            <h1>
            ¡Crea una cuenta y desbloquea un mundo de ventajas!
            </h1>
            <section className="parrafo">
            <p>En Mundo Gamer, estamos comprometidos a ofrecerte la mejor experiencia de compra posible. Para aprovechar al máximo todo lo que tenemos para ofrecer, te invitamos a unirte a nuestra comunidad y crear tu cuenta personal hoy mismo los cuales te traen un monton de beneficios como:</p>
            <p>1. Compras más rápidas y sencillas: Una vez que tengas una cuenta, tus datos de envío y pago se guardarán de forma segura, lo que significa que podrás completar tus compras en solo unos pocos clics. Olvídate de ingresar la información una y otra vez.</p>
            <p>2. Seguimiento de pedidos: Con una cuenta, tendrás acceso a un panel de seguimiento de pedidos en tiempo real. Podrás saber exactamente dónde se encuentra tu pedido y cuándo puedes esperar recibirlo.</p>
            <p>3. Ofertas exclusivas: Los miembros registrados obtienen acceso prioritario a nuestras ofertas exclusivas, descuentos y promociones especiales. ¡No te pierdas las mejores oportunidades de ahorro!</p>
            <p>4. Participa en la comunidad: Únete a nuestra comunidad de compradores y comparte tus opiniones y experiencias. Conoce a otros amantes de [tu industria] y obtén consejos útiles.</p>
            </section>

        <section>
            
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" placeholder="Ingrese su nombre" id="nombre" />


            <label for="apellido">Apellido:</label>
            <input type="text" name="apellido" placeholder="Ingrese su apellido" id="apellido"  />

            <label for="edad">Edad:</label>
            <input type="text" name="edad" placeholder="Ingrese su edad" id="edad" />

            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="Ingrese su email" id="email"  />

            <button className="B">Enviar</button>

           
        </section>
        </main>
    )
}

export default Checkout
import "./contacto.css";

export default function Contacto() {
  return (
    <>
      <h1>Estás en contacto</h1>
      {/*
                Action: Dirección de a dónde va el form
                    Archivo que procesa el formulario
                
                Method: POST / GET (default)
                    GET: Ideal para búsquedas y algunas APIs (PokeApi)
                    POST: formularios de contacto, autenticación, registro de usuarios

            */}

      {/* Acá duplico mi form para Netlify */}
      <form
        action="./contacto/gracias"
        name="contacto"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="nombre" />
        <input type="email" name="email" />
        <textarea name="comentario"></textarea>
      </form>

      <form method="post" className="formulario">
        {/* identificamos cada campo con un atributo name */}
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Mail:
          <input type="email" name="email" />
        </label>
        <label>
          Comentarios:
          <textarea name="comentario"></textarea>
        </label>
        <input type="hidden" name="form-name" value="contacto" />
        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

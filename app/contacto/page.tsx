import "./contacto.css";
{
  /*
                Action: Dirección de a dónde va el form
                    Archivo que procesa el formulario
                
                Method: POST / GET (default)
                    GET: Ideal para búsquedas y algunas APIs (PokeApi)
                    POST: formularios de contacto, autenticación, registro de usuarios

            */
}
<form name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="text" name="nombre" />
  <input type="email" name="email" />
  <textarea name="comentario"></textarea>
</form>;
export default function Contacto() {
  return (
    <>
      <h1>Estás en contacto</h1>

      <form action="" method="post" className="formulario">
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

        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

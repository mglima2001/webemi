// El famoso PWCheckout se agrega en el main.ts

function SetProperties(properties) {
  PWCheckout.SetProperties({
    "form_id": properties.form_id,
    "name": "Pago con tarjeta de crédito",
    "email": properties.email,
    "image": "https://dev-spike--gateway-uy.azurewebsites.net/logo-emi.png",
    "button_label": "Pagar #monto#",
    "description": "Paga con tú tarjeta de crédito",
    "currency": "UYU",
    "amount": properties.amount,
    "lang": "ESP",
    "checkout_card": "1",
    "autoSubmit": "false",
    "empty": "true"
  });

}

//Configurar botones de donde se va a llamar la pasarela de pagos (Usuario anónimo)

PWCheckout.AddActionButton("buttonPayCoordinationId", "buttonAnonymousUserId", "buttonAnonymousUserIdApp");

function OpenIFrameCustom(url, unique_id) {
  PWCheckout.OpenIframeCustom(url, unique_id);
}
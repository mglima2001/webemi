/*AAE CK EDITOR: 1.1.9 compatible con Angular 4, Licencia MIT.
/*Configuraciones externas de ckeditor según documentación y busquedas en la comunidad stackOverflow*/
CKEDITOR.config.forcePasteAsPlainText = true;

//* Eliminar pestaña de configuración "avanzada" en la opción para insertar vínculos e imagenes.
CKEDITOR.on('dialogDefinition', function (ev) {
    var dialogName = ev.data.name,
        dialogDefinition = ev.data.definition;

    if (dialogName === 'link') {
        dialogDefinition.removeContents('advanced');
    }
    if (dialogName === 'image') {
        dialogDefinition.removeContents('advanced');
        dialogDefinition.removeContents('link');
    }
});

/*Las siguientes dos configuraciónes de tipo de apertura de link se pueden combinar, para tener
solo la opción blank y default opción, Usando _blank nueva pestaña como predeterminada*/

//Configuración de apertura de links en _target por defecto sin remover las demás opciones.
CKEDITOR.on('dialogDefinition', function (ev) {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;
    if (dialogName == 'link') {
        var targetTab = dialogDefinition.getContents('target');
        var targetField = targetTab.get('linkTargetType');
        targetField['default'] = '_blank';
    }
});
//Remover las otras opciones de apertura de vínculos, dejando solo _blank (nueva pestaña) y default (misma pagina)
CKEDITOR.on('dialogDefinition', function (ev) {
    var dialogName = ev.data.name;
    if (dialogName == 'link') {
        var dialogDefinition = ev.data.definition;
        var informationTab = dialogDefinition.getContents('target');
        var targetField = informationTab.get('linkTargetType');
        // just <not set> and New Window (_blank)
        targetField.items = targetField.items.filter(x => x[1] == '_blank' || x[1] == 'notSet');
    }
});
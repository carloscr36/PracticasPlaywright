const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://example.com');
  
    // Esperar a que aparezca la ventana emergente
    const popupOrDialog = await Promise.race([
      page.waitForEvent('popup'),
      page.waitForEvent('dialog')
    ]);
  
    if (popupOrDialog instanceof page.browserContext().Popup) {
      console.log('La ventana emergente es un "popup"');
      // Cerrar la ventana emergente con popupOrDialog.close()
    } else if (popupOrDialog instanceof page.Dialog) {
      console.log('La ventana emergente es un "dialog"');
      // Cerrar la ventana emergente con popupOrDialog.accept() o popupOrDialog.dismiss()
    } else {
      console.log('No se reconoce el tipo de ventana emergente');
    }
  
    await browser.close();
  })();
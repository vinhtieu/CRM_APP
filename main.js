const { app, BrowserWindow, protocol } = require('electron');
const url = require('url');
const path = require('path');
function createMainWindow(param) {
  const mainWindow = new BrowserWindow({
    title: 'CRM App',
    width: 1500,
    height: 800,
    // fullscreen: true, // This makes the window full screen
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);

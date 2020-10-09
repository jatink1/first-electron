const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow,ipcMain} = electron;

let mainWindow;

app.on('ready',function(){
    //create a window
    mainWindow = new BrowserWindow({
        width:1200,
        height:800,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });

    mainWindow.loadFile('home.html');

    //Quit app whn closed
    mainWindow.on('closed',function(){
        app.quit();
    })
    
});


module.exports = [
  {
    label: 'Electron',
    submenu: [
      { label: 'Item 1' },
      { label: 'Item 2', submenu: [{ label: 'Item 1' }] },
      { label: 'Item 3' },
    ],
  },
  {
    label: 'Actions',
    submenu: [
      { label: 'DevTools', role: 'toggleFullScreen' },
      { label: 'Item 2', submenu: [{ label: 'Item 1' }] },
      {
        label: 'Greet',
        click: () => {
          console.log('Hello from Main Menu');
        },
        accelerator: 'Shift+Alt+G',
      },
    ],
  },
];

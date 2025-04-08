import { echo } from '/light.js'

export class FileSysAccAPI {
  constructor() {
    
  }
  
  async openFile(echoFile = false) {
    try {
      const [fileOpen] = await window.showOpenFilePicker({
      types: [
        {
          description: "Text Files",
          accept: {
            'text/plain': ['.txt'],
            'application/json': ['.json']
          }
        },
        {
          description: "Image Files",
          accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/ico': ['.ico'],
            'image/svg': ['.svg']
          }
        },
        {
          description: 'Markdown Files',
          accept: {
            'text/markdown': ['.md', '.markdown']
          }
        },
        {
          description: 'Programming Files',
          accept: {
            'application/x-python': ['.py'],
            'application/javascript': ['.js'],
            'application/xml': ['.xml'],
            'text/x-csrc': ['.c']
          }
        }
      ],
      excludeAcceptAllOption: true,
      multiple: true,
      })
      const file = await fileOpen.getFile()
      if (echoFile == true ) {
        const txt = await file.text()
        echo(txt)
      }
    } catch(err) {
      echo.error("Error in FileSysAccAPI.openFile(): " + err)
    }
  }
  
  async writeFile(promt) {
    try {
      const fileHandle = await window.showSaveFilePicker()
      const writable = await fileHandle.createWritable()
      await writable.write(promt)
      await writable.close()
    } catch {
      echo.error("Error in FileSysAccAPI.writeFile()")
    }
  }
}
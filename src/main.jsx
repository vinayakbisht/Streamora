
import {Provider} from './components/ui/provider'
import { ColorModeButton } from "./components/ui/color-mode"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <ColorModeButton/>
      <App />
    </Provider>
  </StrictMode>
)

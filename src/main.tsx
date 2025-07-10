import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routers from '@/routers'
import Navigation from '@/components/Navigation'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <ConfigProvider locale={zhCN}>
        <div className="App">
          <Navigation />
          <Routers />
        </div>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)

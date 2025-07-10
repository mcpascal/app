import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import AudioPlayer from '@/components/audio'
import Count from '@/pages/demo/count'
import StoreDemo from '@/pages/demo/store-demo'
import Index from '@/pages/home'

const UserList = lazy(() => import('@/pages/user/list'))

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="demo">
          <Route path="count" element={<Count />} />
          <Route path="audio" element={<AudioPlayer/>} />
          <Route path="store" element={<StoreDemo />} />
        </Route>
        <Route path="users">
          <Route path="" element={<UserList />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routers
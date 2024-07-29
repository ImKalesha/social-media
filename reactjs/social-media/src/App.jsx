import Header from './compopnents/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './compopnents/Sidebar'
import './App.css'
import CreatePost from './compopnents/CreatePost'
import Post from './compopnents/Post'
import PostList from './compopnents/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectTab] = useState("Home")


  return (
    <>
      <PostListProvider>
        <div className='app-container'>
          <Sidebar selectedTab = {selectedTab} onSelect= {setSelectTab}></Sidebar>
          <div className='content'>
            <Header></Header>
            <Outlet></Outlet>
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App

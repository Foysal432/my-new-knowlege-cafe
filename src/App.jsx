

import { useState } from 'react'
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import BookMark from './componets/Bookmark/BookMark'
import Header from './componets/Header/Header'



function App() {
 const [bookmarks,setBookmarks]=useState([])
 const[readingTime, setReadingTime]=useState(0)
//  for reading time
const handleReadingTime=(id,time)=>{
  setReadingTime(readingTime+time)
  const RemainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !== id);
  setBookmarks(RemainingBookmarks)
}
//  for bookmark
const handleBookmark =blog=>{
  console.log(blog)
  const newBooksMarks=[...bookmarks,blog];
  setBookmarks(newBooksMarks)
  
 
}
  return (
    <>
<Header></Header>
<div className=' md:flex max-w-4xl mx-auto '>
    <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
  <BookMark readingTime={readingTime} bookmarks={bookmarks}></BookMark>
  
</div>
    </>
  )
}

export default App

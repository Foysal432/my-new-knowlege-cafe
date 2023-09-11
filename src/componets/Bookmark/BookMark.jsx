import PropTypes from 'prop-types'
import SBookmark from '../SBookMark/SBookmark';


const BookMark = ({bookmarks,readingTime}) => {
    
    return (
        <div className=" md:w-1/3 bg-gray-100 ml-2">
            <h1 className=' text-xl text-center font-extrabold'>Spent time on read: {readingTime} min</h1>
            <h1 className='text-center'>Bookmarked Blogs:{bookmarks.length}</h1>
           {
            bookmarks.map(bookmark =><SBookmark key={bookmark.id} bookmark={bookmark}></SBookmark> )
           }
        </div>
    );
};
BookMark.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default BookMark;
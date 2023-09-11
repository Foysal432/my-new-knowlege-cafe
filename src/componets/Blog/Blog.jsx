import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handleBookmark,handleReadingTime}) => {
    
   const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div>
            <img className=' w-2/3 my-6' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                <div>
                    <img className=' w-12' src={author_img} alt="" />
                </div>
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                 <span>{reading_time} min read</span>
                 <button onClick={()=>handleBookmark(blog)} className=' text-red-600 text-2xl ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div>
                <h4 className=' my-4'>{title}</h4>
                <p>
                {
                    hashtags.map((hashtag,idx)=> <span key={idx}> <a href=''>#{hashtag}</a></span> )
                }
                </p>
            </div>
           <button onClick={()=>handleReadingTime(reading_time)} className='text-purple-600 my-3'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
blog:PropTypes.object.isRequired,
handleBookmark:PropTypes.func,
handleReadingTime:PropTypes.func
}
export default Blog;
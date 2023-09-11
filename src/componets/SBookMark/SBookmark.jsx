import PropTypes from 'prop-types'

const SBookmark = ({bookmark}) => {
const {title}=bookmark
    
    return (
        <div className='bg-slate-300 p-4 m-3 rounded-xl'>
           <h3>{title}</h3> 
        </div>
    );
};
SBookmark.propTypes={
bookmark:PropTypes.object
}
export default SBookmark;
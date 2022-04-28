import { numberWithCommas } from "../utils/format";

const ImageCard = ({ image, searchText }) => {
    const tags = image.tags.split(', ')

    const handleClick = (tag) => {
        let newTag = tag.substring(1)
        searchText(newTag)
    }

    return <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className='font-bold text-purple-500 text-xl mb-2'>
                    
                </div>
                Photo by <a className="underline text-blue-900" href={image.userImageURL}>{image.user}</a>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {numberWithCommas(image.views)}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {numberWithCommas(image.downloads)}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {numberWithCommas(image.likes)}
                    </li>
                    
                </ul>
            </div>
            <div className="px-6 py-4">
            {tags.map((tag, index) => (
                <span onClick={(e) => handleClick(e.target.textContent)} key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:cursor-pointer'>#{tag}
                </span>
            ))}
            </div>
        </div>
    </div>;
};

export default ImageCard;

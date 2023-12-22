import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta eum rem! Quis laboriosam delectus
                 fuga reprehenderit praesentium impedit velit possimus quam voluptatum aperiam perspiciatis voluptate eius 
                 odio doloremque, fugiat iusto repellendus at placeat doloribus officiis suscipit eos totam quidem. Quae
                  at libero voluptatum, optio aliquid suscipit doloremque adipisci fugit minima? Expedita praesentium vero,
                 ratione nostrum molestias eos dignissimos dicta!</p>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis id harum corrupti dicta
                     veritatis sint saepe aspernatur aliquid praesentium,
                     aperiam quidem perferendis excepturi atque.
                 </p>
        </div>
    </div>
  )
}

export default DescriptionBox
import React from 'react'
import './post.css'
import image1 from '../../assets/post1.jpg'
import image2 from '../../assets/post2.jpg'
const Post = () => {
  return (
    <div className="gamemoir__cards scale-up-center">
      <div className="gamemoir__cards-post1 hover:transition duration-500 hover:scale-110">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#01172c] dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg 	post__image" src={image1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Call of duty
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              My Childhood fav game
            </p>
          </div>
        </div>
      </div>
      <div className="gamemoir__cards-post1 hover:transition duration-500 hover:scale-110">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#01172c] dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg post__image" src={image2} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Assassin's creed
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              My Childhood fav game
            </p>
          </div>
        </div>
      </div>
      <div className="gamemoir__cards-post1 hover:transition duration-500 hover:scale-110">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#01172c] dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg post__image" src={image1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Call of duty
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              My Childhood fav game
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

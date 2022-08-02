import React, { useState } from 'react'

import './create.css'
import logo from '../../assets/logo.png'
const Create = () => {
  const [game, setGame] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [addImage, setAddImage] = useState(null)
  const [addImageError, setAddImageError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(game, category, date, addImage)
  }
  const handleFileChange = (e) => {
    setAddImage(null)
    let selected = e.target.files[0]
    console.log(selected)
    if (!selected) {
      setAddImageError('X Select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setAddImageError('X Select an image')
      return
    }
    if (!selected.size > 100000) {
      setAddImageError('X Size is greater')
      return
    }
    setAddImageError(null)
    setAddImage(selected)
    console.log('Updated')
  }
  return (
    <div className="Create-post">
      <form className="gamemoir__login-create" onSubmit={handleSubmit}>
        <h2 className="title">Create a new post</h2>
        <label htmlFor="name">Game Name</label>
        <input
          required
          type="text"
          onChange={(e) => setGame(e.target.value)}
          value={game}
        />
        <label htmlFor="name">Category</label>
        <input
          required
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <label htmlFor="name">Date</label>
        <input
          className="input-date"
          required
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label className="input-file" htmlFor="name">
          Choose Image
        </label>
        <input
          className="input-file"
          required
          type="file"
          onChange={handleFileChange}
        />
        {addImageError && <div className="image-error">{addImageError}</div>}
        <div className="create-btn">
          <button className=" btn-post"> Post</button>
        </div>
      </form>
    </div>
  )
}

export default Create

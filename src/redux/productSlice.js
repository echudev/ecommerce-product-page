import { createSlice } from '@reduxjs/toolkit'
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'
import tmb1 from '../assets/images/image-product-1-thumbnail.jpg'
import tmb2 from '../assets/images/image-product-2-thumbnail.jpg'
import tmb3 from '../assets/images/image-product-3-thumbnail.jpg'
import tmb4 from '../assets/images/image-product-4-thumbnail.jpg'

export const productSlice = createSlice({
  name: 'products',
  initialState: [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everything the weather can offer.',
      images: [img1, img2, img3, img4],
      thumbnails: [tmb1, tmb2, tmb3, tmb4]
    }
  ],

  reducers: {
    addProduct: (state, action) => {
      console.log('adding a product to the store')
    },
    deleteProduct: (state, action) => {
      console.log('deleting a product from the store')
    }
  }
})

// action creators are generated for each reducer
export const { addProduct, deleteProduct, modifyProduct, getProdudctsFromDB } = productSlice.actions

export default productSlice.reducer

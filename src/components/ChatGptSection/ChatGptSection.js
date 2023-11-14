import React from 'react'
import man from '../../assets/images/young-man.svg'
import TextSlider from '../TextSlider/TextSlider'

const ChatGptSection = () => {
  return (
    <div className='my-24 flex gap-8'>
        <div className='h-[428px] w-[55.7%] bg-[#18181B] rounded-r-[24px] flex justify-center'>
            <TextSlider />
        </div>
        <div>
            <img src={man} className='bg-[#E7E0FF] rounded-[24px] w-[488px] h-[428px]' />
        </div>
    </div>
  )
}

export default ChatGptSection
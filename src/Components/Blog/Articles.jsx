import React from 'react'

function Articles({ blog }) {
    return (
        <div>
            <div className='flex flex-col bg-[#F5F5F5] w-full h-auto justify-center items-center '>
                <div className='w-[62%] my-44'>
                    <p className='self-start bg-[#4EAF4E] w-16 flex justify-center text-white rounded-2xl px-3 py-px '>BLOG</p>
                    <div className='flex justify-between'>
                        <h1 className='w-[50%] font-bold text-[45px] leading-[52.2px]'>Take a look at our latest articles & resources</h1>
                        <button
                            className='yellow-button'
                        >
                            <p className='font-semibold text-[18px] whitespace-nowrap leading-[29px] '>More News</p>
                        </button>
                    </div>
                    <div className='flex grid grid-cols-2 justify-between mt-12 gap-9'>
                        {
                            blog.map((b) => (
                                < div key={b.id} className='w-[%] gap-9 flex flex-col ' >
                                    <img src={b.image} />
                                    <h1 className='font-semibold text-[30px] leading-[35px] '>{b.header}</h1>
                                    <p>{b.content}</p>
                                    <div className='border mb-2'></div>
                                    <div className=' flex items-center gap-8 h-6'>
                                        <img src={b.userimg} />
                                        <div className='flex gap-8'>
                                            <p>{b.user}</p>
                                            <div className='border'></div>
                                            <p className='whitespace-nowrap'>{b.publishedDate}</p>
                                        </div>
                                        <button className='dark-button '>
                                            <p>Read More</p>
                                        </button>
                                    </div>
                                    <div className='border mt-[14px]'></div>
                                </div>

                            ))
                        }
                    </div>
                </div>

            </div >
        </div>
    )
}

export default Articles

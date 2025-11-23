import React from 'react'

const InformationsTabel = ({ informations, onEdit, onDelete }) => {
    return (
        <div className='w-full h-[80vh] overflow-y-auto'>
            <div className='flex justify-around w-full border-b pb-4'>
                <p className='font-bold'>Thumbnail</p>
                <p className='font-bold'>Title</p>
                <p className='font-bold'>Uploaded Date</p>
                <p className='font-bold'>Action</p>
            </div>
            <div className='p-5'>
                {informations.map((infor, index) => (
                    <div key={index} className='flex w-full justify-between items-center py-2'>
                        <img src={infor.image} className='w-50 h-30 rounded-xl' />
                        <p className='w-50'>{infor.title}</p>
                        <p>{new Date(infor.updatedAt).toLocaleDateString()}</p>
                        <div>
                            <button className='w-30 h-10 bg-black text-white rounded-xl border hover:bg-white hover:text-black transition duration-100' onClick={() => onEdit(infor)}>Update</button>
                            <button className='w-30 h-10 bg-black text-white rounded-xl border hover:bg-white hover:text-black transition duration-100' onClick={() => onDelete(infor._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InformationsTabel
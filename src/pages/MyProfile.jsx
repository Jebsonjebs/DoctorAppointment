import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Chris Johnson",
    image: assets.profile_pic,
    email: 'chrisjohnson@gmail.com',
    phone: '+0 986 965 7171',
    address: {
      line1: "12th Street,Church road",
      line2: "CAthBride,London"
    },
    gender: 'Male',
    dob: '2000-10-01'
  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-4 text-sm border border-gray-200">
      <p className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight text-center">My Profile</p>
      <div className="flex flex-col items-center gap-2">
        <img className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-lg transition-transform hover:scale-105" src={userData.image}  alt="Upload" />
        {
          isEdit
            ? <input className="bg-gray-50 text-2xl font-semibold max-w-60 mt-4 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className="font-semibold text-2xl text-neutral-800 mt-4">{userData.name}</p>
        }
      </div>

      <hr className="bg-zinc-200 h-[1px] border-none my-4" />

      <div>
        <p className="text-neutral-500 underline mt-3 font-semibold tracking-wide">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-gray-800 font-semibold">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {
            isEdit
              ? <input className="bg-gray-100 max-w-52 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className="text-gray-800 font-semibold">{userData.phone}</p>
          }
          <p className="font-medium">Address:</p>
          {
            isEdit
              ? <div className="flex flex-col gap-1">
                <input className="bg-gray-50 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <input className="bg-gray-50 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </div>
              : <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3 font-semibold tracking-wide">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {
            isEdit
              ? <select className="max-w-24 bg-gray-100 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className="text-gray-500">{userData.gender}</p>
          }
          <p className="font-medium">Birthday: </p>
          {
            isEdit
              ? <input className="max-w-32 bg-gray-100 px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className="text-gray-500">{userData.dob}</p>
          }
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        {
          isEdit
            ? <button className="border border-blue-600 bg-blue-500 text-white px-8 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all font-semibold text-lg" onClick={() => setIsEdit(false)} >Save information</button>
            : <button className="border border-blue-600 bg-white text-blue-600 px-8 py-2 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-800 transition-all font-semibold text-lg" onClick={() => setIsEdit(true)} >Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Swal from "sweetalert2";

const Appointment = () => {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
        {/* Doctor Details */}
        <div className="md:w-1/2 flex flex-col gap-8 items-center bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200 min-h-[350px]">
          {/* Doctor Image & Name */}
          <div className="relative w-full flex justify-center">
            <img
              className="bg-blue-100 w-full max-w-xs rounded-3xl shadow-xl border-4 border-white object-cover transition-transform duration-300 hover:scale-105"
              src={docInfo.image}
              alt={docInfo.name}
            />
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg flex items-center gap-3 border border-blue-100">
              <span className="text-xl font-bold text-gray-800 tracking-wide">{docInfo.name}</span>
              <img className="w-6 h-6" src={assets.verified_icon} alt="Verified" />
            </div>
          </div>
          {/* Doctor Info Card */}
          <div className="w-full border border-gray-100 rounded-3xl p-8 bg-white shadow-lg mt-14 transition-shadow duration-300 hover:shadow-2xl min-h-[120px]">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-lg font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full shadow-sm">{docInfo.degree}</span>
              <span className="text-base bg-gray-100 text-gray-900 px-3 py-1 rounded-full font-medium shadow-sm">{docInfo.speciality}</span>
              <span className="text-sm bg-gray-100 text-gray-900 px-3 py-1 rounded-full font-medium shadow-sm">{docInfo.experience}</span>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-base font-bold text-gray-800 mb-2">
                About
                <img className="w-5 h-5" src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-base text-gray-600 leading-relaxed">{docInfo.about}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-gray-500 font-medium">Appointment fee:</span>
              <span className="text-gray-800 font-extrabold text-lg">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </div>
          </div>
        </div>
        {/* Booking Slots Section */}
        <div className="md:w-1/2 flex flex-col justify-center min-h-[350px] bg-gradient-to-br from-white via-blue-50 to-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="flex flex-col items-center justify-center mt-8 mb-4">
            <p className="text-2xl font-bold text-gray-900 mb-2 tracking-wide drop-shadow">Booking Slots</p>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mb-2"></div>
          </div>
          {/* day */}
          <div className="flex gap-6 items-center w-full mb-4 mt-4 justify-center">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => {
                    setSlotIndex(index), setStatus1(true);
                  }}
                  className={`flex flex-col items-center justify-center w-16 h-20 rounded-lg shadow-md cursor-pointer transition-all duration-200 ${
                    slotIndex === index
                      ? "bg-gray-800 text-white scale-105 border-2 border-gray-500"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                  }`}
                  key={index}
                >
                  <span className="text-xs font-semibold">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </span>
                  <span className="text-xl font-bold mt-2">
                    {item[0] && item[0].datetime.getDate()}
                  </span>
                </div>
              ))}
          </div>
          {/* time */}
          <div
            onClick={() => setStatus2(true)}
            className="flex flex-wrap gap-4 w-full mt-4 justify-center min-h-[60px]"
          >
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-medium px-6 py-2 rounded-lg cursor-pointer shadow transition-all duration-200 ${
                    item.time === slotTime
                      ? "bg-gray-800 text-white scale-105 border-2 border-gray-500"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                  } `}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          {status2 ? (
            <button
              onClick={() =>
                Swal.fire({
                  title: "Appointment Booked!",
                  text: "Your appointment has been successfully booked.",
                  icon: "success",
                  confirmButtonText: "OK",
                  timer: 2500,
                })
              }
              className="mt-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-lg font-semibold rounded-md shadow-md hover:from-blue-800 hover:to-blue-500 transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              Book Appointment
            </button>
          ) : (
            <button
              onClick={() =>
                Swal.fire({
                  title: "Missing Selection!",
                  text: "Please select both day and time to book your appointment.",
                  icon: "warning",
                  confirmButtonText: "OK",
                })
              }
              className="mt-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-lg font-semibold rounded-md shadow-md hover:from-blue-800 hover:to-blue-500 transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              Book Appointment
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default Appointment;

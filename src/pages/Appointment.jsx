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
    //console.log(docInfo)
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // time
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

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 1 st ele */}
          <div>
            <img
              className="bg-blue-50 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          {/* 2 nd ele */}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/*  date and time */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
          <div className="flex flex-col items-center justify-center mt-8 mb-2">
          <p className="text-xl font-semibold text-gray-700 mb-2">Booking Slots</p>
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
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"
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
            className="flex flex-wrap gap-4 w-full mt-4 justify-center"
          >
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-medium px-6 py-2 rounded-lg cursor-pointer shadow transition-all duration-200 ${
                    item.time === slotTime
                      ? "bg-gray-800 text-white scale-105 border-2 border-gray-500"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                  } `}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          { status2 ? (
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
              className="bg-blue-500 mt-4 text-white text-sm font-light px-14 py-3 rounded-full"
            >
              Book an Appointment
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
              className="bg-blue-500 mt-4 text-white text-sm font-light px-14 py-3 rounded-full"
            >
              Book an Appointment
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default Appointment;

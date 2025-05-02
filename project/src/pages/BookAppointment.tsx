import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Phone,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

const BookAppointment = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  // Mock doctor data
  const doctor = {
    id: Number(doctorId),
    name: "Dr. Rajesh Kumar",
    specialty: "Dentist",
    degrees: "BDS, MDS - Orthodontics",
    experience: 12,
    location: "Koramangala, Bangalore",
    clinicName: "Sunshine Dental Clinic",
    clinicAddress: "123, 1st Main, 5th Block, Koramangala, Bangalore - 560034",
    fees: 700,
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  // Time slots
  const morningSlots = ["09:00 AM", "10:00 AM", "11:30 AM"];
  const afternoonSlots = ["01:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
  const eveningSlots = ["06:30 PM", "07:45 PM"];

  // Current month dates for calendar display
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);

  const handleNextMonth = () => {
    setSelectedDate(new Date(year, month + 1, 1));
  };

  const handlePrevMonth = () => {
    setSelectedDate(new Date(year, month - 1, 1));
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleNextStep = async () => {
    // 2. Move to next step
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Example using fetch in TypeScript (e.g., inside a React handler or a function)
  const sendMail = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Success:", data.message);
      } else {
        console.error("❌ Failed:", data.error);
      }
    } catch (error) {
      console.error("🔥 Network error:", error);
    }
  };

  // Function to handle both the next step and sending the email
  const handleContinue = async () => {
    // Move to next step
    handleNextStep();

    // Send the email
    await sendMail();
  };

  const handleNextStepAndSendEmail = async () => {
    // Step 1: Handle Next Step
    handleNextStep();

    // Step 2: Send Email (via Flask API)
    try {
      const response = await fetch("http://127.0.0.1:5000/send-email", {
        method: "POST",
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  // Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Steps Indicator */}
          <div className="flex items-center justify-between mb-8 px-4">
            <div
              className={`flex flex-col items-center ${
                step >= 1 ? "text-[#14bef0]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  step >= 1
                    ? "bg-[#14bef0] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="text-sm">Select Time</span>
            </div>

            <div className="flex-grow h-px bg-gray-200 mx-4"></div>

            <div
              className={`flex flex-col items-center ${
                step >= 2 ? "text-[#14bef0]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  step >= 2
                    ? "bg-[#14bef0] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="text-sm">Patient Details</span>
            </div>

            <div className="flex-grow h-px bg-gray-200 mx-4"></div>

            <div
              className={`flex flex-col items-center ${
                step >= 3 ? "text-[#14bef0]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  step >= 3
                    ? "bg-[#14bef0] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>

          {/* Doctor Info Card - Shown in all steps */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
            <div className="flex items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {doctor.name}
                </h2>
                <p className="text-gray-600">
                  {doctor.specialty} • {doctor.experience} years experience
                </p>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <p className="text-gray-600 text-sm">
                    {doctor.clinicName}, {doctor.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Select Date and Time */}
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Select Date & Time
              </h2>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  </button>
                  <h3 className="font-medium text-gray-800">
                    {monthNames[month]} {year}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  <div className="text-gray-500 text-sm">Sun</div>
                  <div className="text-gray-500 text-sm">Mon</div>
                  <div className="text-gray-500 text-sm">Tue</div>
                  <div className="text-gray-500 text-sm">Wed</div>
                  <div className="text-gray-500 text-sm">Thu</div>
                  <div className="text-gray-500 text-sm">Fri</div>
                  <div className="text-gray-500 text-sm">Sat</div>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before start of month */}
                  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="h-10"></div>
                  ))}

                  {/* Days of the month */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const currentDate = new Date(year, month, day);
                    const isToday =
                      new Date().toDateString() === currentDate.toDateString();
                    const isSelected =
                      selectedDate.toDateString() ===
                      currentDate.toDateString();
                    const isPast =
                      currentDate < new Date(new Date().setHours(0, 0, 0, 0));

                    return (
                      <button
                        key={day}
                        onClick={() => !isPast && handleDateSelect(day)}
                        disabled={isPast}
                        className={`h-10 rounded-full flex items-center justify-center ${
                          isSelected
                            ? "bg-[#14bef0] text-white"
                            : isToday
                            ? "bg-blue-50 text-[#14bef0] border border-[#14bef0]"
                            : isPast
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="font-medium text-gray-800 mb-3">
                Available time slots on {formatDate(selectedDate)}
              </p>

              {/* Time Slots */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Morning
                </h3>
                <div className="flex flex-wrap gap-3">
                  {morningSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeSelect(slot)}
                      className={`px-4 py-2 rounded-md ${
                        selectedTimeSlot === slot
                          ? "bg-[#e8f7fc] border border-[#14bef0] text-[#14bef0]"
                          : "border border-gray-300 text-gray-700 hover:border-[#14bef0]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Afternoon
                </h3>
                <div className="flex flex-wrap gap-3">
                  {afternoonSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeSelect(slot)}
                      className={`px-4 py-2 rounded-md ${
                        selectedTimeSlot === slot
                          ? "bg-[#e8f7fc] border border-[#14bef0] text-[#14bef0]"
                          : "border border-gray-300 text-gray-700 hover:border-[#14bef0]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Evening
                </h3>
                <div className="flex flex-wrap gap-3">
                  {eveningSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeSelect(slot)}
                      className={`px-4 py-2 rounded-md ${
                        selectedTimeSlot === slot
                          ? "bg-[#e8f7fc] border border-[#14bef0] text-[#14bef0]"
                          : "border border-gray-300 text-gray-700 hover:border-[#14bef0]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextStep}
                  disabled={!selectedTimeSlot}
                  className={`px-6 py-2 rounded-md ${
                    selectedTimeSlot
                      ? "bg-[#14bef0] text-white hover:bg-[#0ea5d3]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Patient Details */}
          {step === 2 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Patient Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="patientName"
                    className="block text-gray-700 mb-1"
                  >
                    Patient Name*
                  </label>
                  <input
                    id="patientName"
                    type="text"
                    placeholder="Enter patient name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14bef0] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-gray-700 mb-1"
                  >
                    Mobile Number*
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14bef0] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14bef0] focus:border-transparent"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="dob" className="block text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14bef0] focus:border-transparent"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="gender" className="mr-2" />
                        <span>Male</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="gender" className="mr-2" />
                        <span>Female</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="gender" className="mr-2" />
                        <span>Other</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="issue" className="block text-gray-700 mb-1">
                    Brief description of your issue
                  </label>
                  <textarea
                    id="issue"
                    rows={3}
                    placeholder="Please describe your symptoms or reason for visit"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14bef0] focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!selectedTimeSlot}
                  className="px-6 py-2 bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Appointment Confirmed!
                </h2>
                <p className="text-gray-600">
                  Your appointment has been successfully booked.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <h3 className="font-medium text-gray-800 mb-4">
                  Appointment Details
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Date & Time</p>
                      <p className="text-gray-600">
                        {formatDate(selectedDate)} | {selectedTimeSlot}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        Patient Details
                      </p>
                      <p className="text-gray-600">
                        John Doe | Male | 35 years
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Contact</p>
                      <p className="text-gray-600">
                        +91 9876543210 | johndoe@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        Clinic Address
                      </p>
                      <p className="text-gray-600">{doctor.clinicName}</p>
                      <p className="text-gray-600">{doctor.clinicAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <p className="text-gray-800">
                  An SMS and email confirmation has been sent to your registered
                  mobile number and email address.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 border border-[#14bef0] text-[#14bef0] rounded-md text-center hover:bg-blue-50"
                >
                  Go to Home
                </Link>
                <Link
                  to="/my-appointments"
                  className="px-6 py-3 bg-[#14bef0] text-white rounded-md text-center hover:bg-[#0ea5d3]"
                >
                  View My Appointments
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

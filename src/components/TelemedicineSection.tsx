import React, { useState } from "react";
import { Calendar, Clock, User, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

const availableDoctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Dentist",
    avatar: "SJ",
  },
  { id: 2, name: "Dr. Michael Chen", specialty: "Cardiologist", avatar: "MC" },
  {
    id: 3,
    name: "Dr. Amelia Rodriguez",
    specialty: "Pediatrician",
    avatar: "AR",
  },
  { id: 4, name: "Dr. David Kim", specialty: "Dermatologist", avatar: "DK" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const TelemedicineSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleDoctorSelect = (doctorId: number) => {
    setSelectedDoctor(doctorId);
  };
  const handleBooking = () => {
    // Example: navigate to Website 2
    window.location.href = "http://localhost:5173/book-appointment/1"; // Replace with your actual URL
  };

  // const handleBooking = () => {
  //   if (selectedDate && selectedTime && selectedDoctor) {
  //     setBookingComplete(true);

  //     setTimeout(() => {
  //       setSelectedDate(new Date());
  //       setSelectedTime(null);
  //       setSelectedDoctor(null);
  //       setBookingComplete(false);
  //     }, 3000);
  //   }
  // };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const getDay = (date: Date) => {
    return date.getDate();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <section
      id="telemedicine"
      className="py-20 px-4 relative min-h-screen w-full"
    >
      {/* Landscape Spline Model - Full height/width to maximize visibility */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/pC8BTRIMM-jsUUXC/scene.splinecode"
          className="w-full h-full"
        />
        {/* Watermark cover - horizontal line across the bottom - preserved exactly as requested */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
            Book a Telemedicine Consultation
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Connect with healthcare professionals from the comfort of your home
            through secure video consultations.
          </p>
        </div>

        {/* Enhanced glassmorphic card with higher transparency */}
        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-6 md:p-8">
          {bookingComplete ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <Video size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Consultation Booked!
              </h3>
              <p className="text-white/80">
                Your telemedicine appointment has been confirmed. You'll receive
                a confirmation email with details.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-white">
                  <Calendar size={18} className="text-cyan-300" />
                  Select Date & Time
                </h3>

                <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
                  {days.map((date) => (
                    <button
                      key={date.toString()}
                      onClick={() => handleDateClick(date)}
                      className={cn(
                        "min-w-[80px] p-3 bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center rounded-xl transition-all hover:bg-white/20",
                        selectedDate &&
                          date.getDate() === selectedDate.getDate()
                          ? "border-cyan-400 bg-cyan-400/20"
                          : "",
                        isToday(date) ? "ring-1 ring-purple-400" : ""
                      )}
                    >
                      <span className="text-xs font-medium text-white">
                        {getDayName(date)}
                      </span>
                      <span className="text-lg font-bold text-white">
                        {getDay(date)}
                      </span>
                      {isToday(date) && (
                        <span className="text-xs mt-1 bg-purple-500 text-white px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2 text-white">
                      <Clock size={16} className="text-cyan-300" />
                      Available Time Slots
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeClick(time)}
                          className={cn(
                            "p-2 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transition-all hover:bg-white/20 text-white",
                            selectedTime === time
                              ? "border-cyan-400 bg-cyan-400/20"
                              : ""
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-white">
                  <User size={18} className="text-cyan-300" />
                  Select Doctor
                </h3>

                <div className="space-y-3 mb-6">
                  {availableDoctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      onClick={() => handleDoctorSelect(doctor.id)}
                      className={cn(
                        "w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-3 rounded-xl text-left transition-all hover:bg-white/20",
                        selectedDoctor === doctor.id
                          ? "border-cyan-400 bg-cyan-400/20"
                          : ""
                      )}
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-500/60 flex items-center justify-center text-white font-medium">
                        {doctor.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {doctor.name}
                        </div>
                        <div className="text-xs text-white/80">
                          {doctor.specialty}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedDate && selectedTime && selectedDoctor && (
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl mb-6">
                    <h4 className="font-medium mb-2 text-white">
                      Appointment Summary
                    </h4>
                    <div className="text-sm text-white/80 space-y-1">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">
                          {formatDate(selectedDate)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-medium">
                          {
                            availableDoctors.find(
                              (d) => d.id === selectedDoctor
                            )?.name
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  className={cn(
                    "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium py-3 px-4 rounded-xl w-full flex items-center justify-center shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40",
                    (!selectedDate || !selectedTime || !selectedDoctor) &&
                      "opacity-50 cursor-not-allowed"
                  )}
                  disabled={!selectedDate || !selectedTime || !selectedDoctor}
                  onClick={handleBooking}
                >
                  <Video size={18} className="mr-2" />
                  Book Video Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TelemedicineSection;

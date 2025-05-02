import React, { useState, useRef, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff, Phone, Settings, Volume2 } from 'lucide-react';

const VideoConsult = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isDevicePermissionGranted, setIsDevicePermissionGranted] = useState(false);
  const [deviceStatus, setDeviceStatus] = useState({
    video: false,
    audio: false,
    network: false
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    checkDevices();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const checkDevices = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsDevicePermissionGranted(true);
      setDeviceStatus(prev => ({ ...prev, video: true, audio: true }));
      
      // Check network connection
      setDeviceStatus(prev => ({ ...prev, network: navigator.onLine }));
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const toggleMic = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsMicOn(!isMicOn);
    }
  };

  const toggleVideo = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoOn(!isVideoOn);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Video Consultation
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Side - Doctor Info & Controls */}
            <div className="md:col-span-1 space-y-6">
              {/* Doctor Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Doctor"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Dr. Rajesh Kumar</h2>
                    <p className="text-gray-600">Dentist • 12 years experience</p>
                    <p className="text-gray-500 text-sm">Appointment at: 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Device Check */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">System Check</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Video className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">Camera</span>
                    </div>
                    <div className={`flex items-center ${deviceStatus.video ? 'text-green-500' : 'text-red-500'}`}>
                      {deviceStatus.video ? 'Connected' : 'Not Connected'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mic className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">Microphone</span>
                    </div>
                    <div className={`flex items-center ${deviceStatus.audio ? 'text-green-500' : 'text-red-500'}`}>
                      {deviceStatus.audio ? 'Connected' : 'Not Connected'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Volume2 className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">Internet Connection</span>
                    </div>
                    <div className={`flex items-center ${deviceStatus.network ? 'text-green-500' : 'text-red-500'}`}>
                      {deviceStatus.network ? 'Connected' : 'Not Connected'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Before joining:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Ensure you're in a quiet, well-lit room</li>
                  <li>• Have a stable internet connection</li>
                  <li>• Keep your medical records ready</li>
                  <li>• Test your audio and video</li>
                </ul>
              </div>
            </div>

            {/* Right Side - Video Preview */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Video Preview</h2>
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover transform scale-x-[-1]" // Fix mirror effect
                  />
                  {!isDevicePermissionGranted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white">
                      <p>Please allow camera and microphone access</p>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center space-x-6">
                  <button
                    onClick={toggleMic}
                    className={`p-4 rounded-full ${
                      isMicOn ? 'bg-gray-200 text-gray-700' : 'bg-red-500 text-white'
                    } transition-colors duration-200`}
                  >
                    {isMicOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                  </button>
                  <button
                    onClick={toggleVideo}
                    className={`p-4 rounded-full ${
                      isVideoOn ? 'bg-gray-200 text-gray-700' : 'bg-red-500 text-white'
                    } transition-colors duration-200`}
                  >
                    {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
                  </button>
                  <button className="p-4 rounded-full bg-gray-200 text-gray-700 transition-colors duration-200">
                    <Settings className="h-6 w-6" />
                  </button>
                </div>

                {/* Join Button */}
                <button 
                  className={`w-full py-4 rounded-lg text-white font-medium mt-6 ${
                    isDevicePermissionGranted 
                      ? 'bg-[#14bef0] hover:bg-[#0ea5d3]' 
                      : 'bg-gray-400 cursor-not-allowed'
                  } transition-colors duration-200`}
                  disabled={!isDevicePermissionGranted}
                >
                  Join Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsult;
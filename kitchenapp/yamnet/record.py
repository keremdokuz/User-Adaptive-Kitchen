import argparse
import wave
import microphones
import pyaudio


class Recorder:
    # Variables
    FS = 44100  # Record at 44100 samples per second
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    CHUNK = 1024
    MICROPHONES_DESCRIPTION = []
    FPS = 60.0
    SECONDS = 5
    MICROPHONE_INDEX = -1
    
    def __init__(self, file_name) -> None:
        self.file_name = file_name

        self.p = pyaudio.PyAudio()
        self.stream = self.p.open(format=Recorder.FORMAT,
                        channels=Recorder.CHANNELS,
                        rate=Recorder.FS,
                        frames_per_buffer=Recorder.CHUNK,
                        input=True,
                        input_device_index=Recorder.MICROPHONE_INDEX)
                        

    def _set_mic_index(self):
        ###########################
        # Check Microphone
        ###########################
        print("=====")
        print("1 / 2: Checking Microphones... ")
        print("=====")

        desc, mics, indices = microphones.list_microphones()
        if (len(mics) == 0):
            print("Error: No microphone found.")
            exit()

        #############
        # Read Command Line Args
        #############
        Recorder.MICROPHONE_INDEX = indices[0]
        parser = argparse.ArgumentParser()
        parser.add_argument("-m", "--mic", help="Select which microphone / input device to use")
        args = parser.parse_args()
        try:
            if args.mic:
                Recorder.MICROPHONE_INDEX = int(args.mic)
                print("User selected mic: %d" % Recorder.MICROPHONE_INDEX)
            else:
                mic_in = input("Select microphone [%d]: " % Recorder.MICROPHONE_INDEX).strip()
                if (mic_in!=''):
                    Recorder.MICROPHONE_INDEX = int(mic_in)
        except:
            print("Invalid microphone")
            exit()

        # Find description that matches the mic index
        mic_desc = ""
        for k in range(len(indices)):
            i = indices[k]
            if (i==Recorder.MICROPHONE_INDEX):
                mic_desc = mics[k]
        print("Using mic: %s" % mic_desc)


    def record(self):
        # TODO: Implement microphone selection
        print(Recorder.MICROPHONE_INDEX)
        if Recorder.MICROPHONE_INDEX == -1:
            self._set_mic_index()

        print('Recording...')  

        self.stream.start_stream()
        frames = []  # Initialize array to store frames

        # Store data in chunks for 3 seconds
        for i in range(0, int(Recorder.FS / Recorder.CHUNK * Recorder.SECONDS)):
            data = self.stream.read(Recorder.CHUNK)
            frames.append(data)

        # Stop and close the stream 
        self.stream.stop_stream()

        print('---Finished recording---')

        # Save the recorded data as a WAV file
        wf = wave.open(f'yamnet/{self.file_name}', 'wb')
        wf.setnchannels(Recorder.CHANNELS)
        wf.setsampwidth(self.p.get_sample_size(Recorder.FORMAT))
        wf.setframerate(Recorder.FS)
        wf.writeframes(b''.join(frames))
        wf.close()

        print('---Saved file---')